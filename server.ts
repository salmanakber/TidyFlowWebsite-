import "dotenv/config";
import express from "express";
import path from "path";
import fs from "fs";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";
import { rawChapters } from "./src/utils/chaptersData";
import { buildTidyBotSystemKnowledge, LANGUAGE_NAMES } from "./src/utils/tidyBotKnowledge";

// Keep the process alive on unexpected async errors (log only — do not exit).
// Without this, a single unhandled rejection can kill tidyflowapp.com until restart.
process.on("unhandledRejection", (reason) => {
  console.error("[unhandledRejection]", reason);
});
process.on("uncaughtException", (err) => {
  console.error("[uncaughtException]", err);
});

// Initialize Gemini SDK with server-side safety checks
const apiKey = process.env.GEMINI_API_KEY;
const ai = apiKey
  ? new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    })
  : null;

/** Brevo Transactional API — only needs an API key (xkeysib-...), not SMTP login. */
function getBrevoConfig() {
  const apiKey =
    process.env.BREVO_API_KEY ||
    process.env.BREVO_SMTP_KEY || // accept key if user stored it under the old name
    process.env.SMTP_PASS ||
    "";
  const fromRaw =
    process.env.BREVO_SENDER_EMAIL ||
    process.env.SMTP_FROM ||
    process.env.BREVO_SMTP_USER ||
    "";
  const to = process.env.CONTACT_TO_EMAIL || process.env.BREVO_CONTACT_TO || "";
  return { apiKey, fromRaw, to };
}

function parseSender(fromRaw: string): { name: string; email: string } | null {
  const raw = (fromRaw || "").trim().replace(/^["']|["']$/g, "");
  if (!raw) return null;
  const angled = raw.match(/^([^<]*)<([^>]+)>$/);
  if (angled) {
    const email = angled[2].trim();
    const name = angled[1].trim().replace(/^["']|["']$/g, "") || "TidyFlow";
    return email.includes("@") ? { name, email } : null;
  }
  if (raw.includes("@")) return { name: "TidyFlow", email: raw };
  return null;
}

function isBrevoConfigured() {
  const cfg = getBrevoConfig();
  return !!(cfg.apiKey && cfg.to && parseSender(cfg.fromRaw));
}

function escapeHtml(value: string) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

async function startServer() {
  const app = express();
  const PORT = Number(process.env.PORT || 3050);
  const isProd = process.env.NODE_ENV === "production";

  // Behind nginx / Cloudflare on tidyflowapp.com
  app.set("trust proxy", 1);
  app.disable("x-powered-by");
  app.use(express.json({ limit: "256kb" }));

  // Liveness probe — use this from nginx/uptime monitors
  app.get("/api/health", (_req, res) => {
    res.status(200).json({
      ok: true,
      port: PORT,
      env: isProd ? "production" : "development",
      uptime: Math.floor(process.uptime()),
    });
  });

  // Contact form: public status (no secrets)
  app.get("/api/contact/config", (_req, res) => {
    res.json({
      configured: isBrevoConfigured(),
      provider: "brevo",
    });
  });

  // Contact form: send demo/trial request via Brevo Transactional API
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, company, size, sheetUse, message } = req.body || {};

      if (!name || !email || !company) {
        res.status(400).json({ error: "Name, email, and company are required." });
        return;
      }

      const cfg = getBrevoConfig();
      const sender = parseSender(cfg.fromRaw);

      if (!cfg.apiKey || !cfg.to || !sender) {
        res.status(503).json({
          error:
            "Email is not configured. Add BREVO_API_KEY, BREVO_SENDER_EMAIL (verified in Brevo), and CONTACT_TO_EMAIL to your .env.",
        });
        return;
      }

      const safeName = escapeHtml(name);
      const safeEmail = escapeHtml(email);
      const safeCompany = escapeHtml(company);
      const safeSize = escapeHtml(size || "—");
      const safeSheets = escapeHtml(sheetUse || "—");
      const safeMessage = escapeHtml(message || "").replace(/\n/g, "<br>");

      const htmlContent = `
        <h2>TidyFlow New Demo Lead</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Company:</strong> ${safeCompany}</p>
        <p><strong>Team size:</strong> ${safeSize}</p>
        <p><strong>Uses spreadsheets:</strong> ${safeSheets}</p>
        <p><strong>Message:</strong></p>
        <p>${safeMessage || "—"}</p>
      `;

      const textContent = `Name: ${name}\nEmail: ${email}\nCompany: ${company}\nTeam: ${size || "—"}\nSheets: ${sheetUse || "—"}\n\n${message || ""}`;

      const upstream = await fetch("https://api.brevo.com/v3/smtp/email", {
        method: "POST",
        headers: {
          accept: "application/json",
          "content-type": "application/json",
          "api-key": cfg.apiKey,
        },
        body: JSON.stringify({
          sender: { name: sender.name, email: sender.email },
          to: [{ email: cfg.to }],
          replyTo: { email, name },
          subject: `TidyFlow New Demo Lead: ${company}`,
          htmlContent,
          textContent,
        }),
        signal: AbortSignal.timeout(15000),
      });

      if (!upstream.ok) {
        const detail = await upstream.text().catch(() => "");
        console.error("Brevo API error:", upstream.status, detail);
        let message = `Brevo rejected the email (${upstream.status}).`;
        try {
          const parsed = JSON.parse(detail);
          if (parsed?.message) message = parsed.message;
        } catch {
          /* keep default */
        }
        res.status(502).json({ error: message });
        return;
      }

      res.json({ success: true });
    } catch (error: any) {
      console.error("Brevo contact error:", error);
      res.status(500).json({ error: error.message || "Failed to send contact email." });
    }
  });

  const TIDYFLOW_API_URL = (process.env.TIDYFLOW_API_URL || "https://api.tidyflowapp.com").replace(/\/$/, "");

  // Proxy: public pricing plans from management API (read-only)
  app.get("/api/plans", async (_req, res) => {
    try {
      const upstream = await fetch(`${TIDYFLOW_API_URL}/api/public/plans`, {
        headers: { Accept: "application/json" },
        signal: AbortSignal.timeout(8000),
      });
      if (!upstream.ok) {
        const text = await upstream.text().catch(() => "");
        res.status(upstream.status).json({
          error: `Failed to load plans (${upstream.status})`,
          detail: text.slice(0, 200) || undefined
        });
        return;
      }
      const data = await upstream.json();
      res.json(data);
    } catch (error: any) {
      console.error("Plans list proxy error:", error);
      res.status(502).json({ error: error.message || "Could not reach TidyFlow plans API." });
    }
  });

  app.get("/api/plans/:code", async (req, res) => {
    try {
      const code = String(req.params.code || "").toUpperCase();
      const upstream = await fetch(`${TIDYFLOW_API_URL}/api/public/plans/${encodeURIComponent(code)}`, {
        headers: { Accept: "application/json" },
        signal: AbortSignal.timeout(8000),
      });
      if (!upstream.ok) {
        const text = await upstream.text().catch(() => "");
        res.status(upstream.status).json({
          error: `Failed to load plan ${code} (${upstream.status})`,
          detail: text.slice(0, 200) || undefined
        });
        return;
      }
      const data = await upstream.json();
      res.json(data);
    } catch (error: any) {
      console.error("Plan detail proxy error:", error);
      res.status(502).json({ error: error.message || "Could not reach TidyFlow plans API." });
    }
  });

  // API Route: TidyBot Smart AI Doc Assistant Chat
  app.post("/api/chat", async (req, res) => {
    try {
      const { message, history = [], language = "en", pageContext = "website" } = req.body;

      if (!message || typeof message !== "string") {
        res.status(400).json({ error: "Missing or invalid message query parameter." });
        return;
      }

      if (!apiKey || !ai) {
        // Fallback if API key is not configured yet (prevents crashes and guides setup)
        res.status(500).json({
          error: "GEMINI_API_KEY is not configured on the server. Please add it to your environment variables."
        });
        return;
      }

      // Compile the 23 Chapters context to ground Gemini's understanding
      const chaptersText = rawChapters.map(ch => {
        return `Chapter ${ch.num}: ${ch.title} (Category: ${ch.category})\nContent: ${ch.content}`;
      }).join("\n\n");

      const uiLanguage = LANGUAGE_NAMES[language as string] || LANGUAGE_NAMES.en;

      const systemInstruction = `You are TidyBot — the friendly, upbeat AI assistant for TidyFlow (professional cleaning operations software). You appear on every page of the tidyflowapp.com marketing site and documentation portal.

=== OFFICIAL USER GUIDE (23 chapters — ground truth for how-to questions) ===
${chaptersText}

=== FULL PRODUCT KNOWLEDGE (company, pricing, FAQ, website, chapter index) ===
${buildTidyBotSystemKnowledge()}

=== USER CONTEXT ===
Current page: ${pageContext}
Use page context to tailor answers (e.g. on pricing page → highlight plans; on integrations → Sheets sync).

=== RESPONSE LANGUAGE (CRITICAL) ===
The website UI language is: **${uiLanguage}** (code: ${language}).
You MUST write your entire "answer" field ONLY in ${uiLanguage}, even if the user writes in another language.

=== PERSONALITY & FORMAT ===
- Warm, helpful, and human — like a smart colleague, not a robot
- Start with a brief friendly opener when appropriate (e.g. "Great question! 👋")
- Use 1–3 relevant emojis per reply (🧹 📍 ✅ 💡) — never spam
- Use **bold** for key terms and product names
- Use short paragraphs and bullet lists (• or numbered) for steps
- You can answer: features, pricing/tiers, founder, demo/trial, integrations, personas, comparisons, and how-to from the 23 chapters
- For founder questions: TidyFlow was founded in 2024 by Salman Akber
- AI features: always note that AI recommends and managers decide
- For demo/trial: direct users to the Contact page for a 14-day free evaluation

=== CHAPTER LINKS ===
If a user guide chapter (ch-1 to ch-23) is highly relevant, set "chapterLink" to that ID (e.g. "ch-5"). Otherwise null.

Return JSON only:
{
  "answer": "Your formatted reply in ${uiLanguage}",
  "chapterLink": "ch-XX or null"
}`;

      // Construct Gemini request structure
      const formattedContents = history.map((h: any) => ({
        role: h.sender === "user" ? "user" : "model",
        parts: [{ text: h.text }]
      }));

      formattedContents.push({
        role: "user",
        parts: [{ text: message }]
      });

      // Call Gemini 3.5-flash for fast and smart Q&A
      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: formattedContents,
        config: {
          systemInstruction,
          temperature: 0.45,
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              answer: {
                type: Type.STRING,
                description: `The Markdown formatted reply in ${uiLanguage} (website UI language).`
              },
              chapterLink: {
                type: Type.STRING,
                description: "The ID of the most relevant chapter from ch-1 to ch-23 if there is a match, or null."
              }
            },
            required: ["answer", "chapterLink"]
          }
        }
      });

      const replyText = response.text;
      if (!replyText) {
        throw new Error("No response content from Gemini API.");
      }

      const parsedResponse = JSON.parse(replyText);
      res.json(parsedResponse);
    } catch (error: any) {
      console.error("Gemini API server-side error:", error);
      res.status(500).json({ error: error.message || "An error occurred while generating AI response." });
    }
  });

  // API Route: Dynamic Chapter Translation using Gemini 3.5-flash
  app.post("/api/translate-chapter", async (req, res) => {
    const { chapterId, title, content, language } = req.body || {};
    try {
      if (!title || !content || !language) {
        res.status(400).json({ error: "Missing title, content, or language parameter." });
        return;
      }

      if (!apiKey || !ai) {
        res.json({ title, content }); // Fallback directly to English if no API key
        return;
      }

      const langNames: Record<string, string> = {
        ar: "Arabic",
        fr: "French",
        de: "German",
        pl: "Polish",
        no: "Norwegian",
        sv: "Swedish",
        it: "Italian",
        pt: "Portuguese",
        es: "Spanish",
        cn: "Chinese"
      };

      const langName = langNames[language] || language;

      const systemInstruction = `You are a professional technical translator for TidyFlow, the ultimate operating system for cleaning companies.
Translate this documentation chapter (ID: ${chapterId}) into ${langName}.
Translate both the title and content perfectly. Maintain professional tone, clarity, and Markdown formatting. Do NOT translate product names like TidyFlow, Stripe, Twilio, Slack, or Google Sheets.

You MUST return your response as a JSON object matching this schema:
{
  "title": "Translated Title",
  "content": "Translated Content"
}`;

      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: `Title: ${title}\n\nContent: ${content}`,
        config: {
          systemInstruction,
          temperature: 0.1,
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              title: { type: Type.STRING },
              content: { type: Type.STRING }
            },
            required: ["title", "content"]
          }
        }
      });

      const replyText = response.text;
      if (!replyText) throw new Error("Empty translation response.");

      res.json(JSON.parse(replyText));
    } catch (error: any) {
      console.error("Translation chapter error:", error);
      res.json({ title, content }); // Graceful fallback
    }
  });

  // API Route: General Dynamic Text Translation
  app.post("/api/translate-text", async (req, res) => {
    const { text, language } = req.body || {};
    try {
      if (!text || !language) {
        res.status(400).json({ error: "Missing text or language parameter." });
        return;
      }

      if (!apiKey || !ai || language === "en") {
        res.json({ translated: text });
        return;
      }

      const langNames: Record<string, string> = {
        ar: "Arabic",
        fr: "French",
        de: "German",
        pl: "Polish",
        no: "Norwegian",
        sv: "Swedish",
        it: "Italian",
        es: "Spanish",
        pt: "Portuguese",
        cn: "Chinese"
      };

      const langName = langNames[language] || language;

      const systemInstruction = `You are a professional translator. Translate the text into ${langName}.
Maintain exact layout, formatting, and capitalizations. Keep any placeholders like {num} or {count} exactly the same. Keep brand names like TidyFlow, Stripe, Twilio, Slack, and Google Sheets exactly in English.

Return ONLY the translated plain text.`;

      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: text,
        config: {
          systemInstruction,
          temperature: 0.1
        }
      });

      const replyText = response.text;
      if (!replyText) throw new Error("Empty response");

      res.json({ translated: replyText.trim() });
    } catch (error: any) {
      console.error("Dynamic text translation error:", error);
      res.json({ translated: text }); // Graceful fallback
    }
  });

  // Vite middleware for development vs static build files for production
  if (!isProd) {
    const vite = await createViteServer({
      server: {
        middlewareMode: true,
        allowedHosts: ["tidyflowapp.com", "www.tidyflowapp.com", "localhost"],
      },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    const indexHtml = path.join(distPath, "index.html");
    if (!fs.existsSync(indexHtml)) {
      throw new Error(
        `Production build missing: ${indexHtml}. Run "npm run build" before "npm start".`
      );
    }
    app.use(express.static(distPath, { maxAge: "1h", index: false }));
    // SPA fallback — only for non-API GET routes
    app.get("*", (req, res, next) => {
      if (req.path.startsWith("/api/")) {
        res.status(404).json({ error: "Not found" });
        return;
      }
      res.sendFile(indexHtml, (err) => {
        if (err) next(err);
      });
    });
  }

  // Central error handler — never let Express default crash the process
  app.use((err: any, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
    console.error("[express error]", err);
    if (!res.headersSent) {
      res.status(500).json({ error: "Internal server error" });
    }
  });

  const server = app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT} (${isProd ? "production" : "development"})`);
  });

  server.on("error", (err: NodeJS.ErrnoException) => {
    if (err.code === "EADDRINUSE") {
      console.error(`Port ${PORT} is already in use. Stop the other process or set PORT=...`);
    } else {
      console.error("[listen error]", err);
    }
    process.exit(1);
  });

  // Graceful shutdown (PM2 / systemd / docker stop)
  const shutdown = (signal: string) => {
    console.log(`${signal} received — closing server`);
    server.close(() => process.exit(0));
    setTimeout(() => process.exit(1), 10_000).unref();
  };
  process.on("SIGTERM", () => shutdown("SIGTERM"));
  process.on("SIGINT", () => shutdown("SIGINT"));
}

startServer().catch((err) => {
  console.error("Failed to start server:", err);
  process.exit(1);
});
