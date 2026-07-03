import "dotenv/config";
import express from "express";
import path from "path";
import nodemailer from "nodemailer";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";
import { rawChapters } from "./src/utils/chaptersData";
import { buildTidyBotSystemKnowledge, LANGUAGE_NAMES } from "./src/utils/tidyBotKnowledge";

// Initialize Gemini SDK with server-side safety checks
const apiKey = process.env.GEMINI_API_KEY;
const ai = new GoogleGenAI({
  apiKey: apiKey,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    }
  }
});

function getSmtpConfig() {
  return {
    host: process.env.SMTP_HOST || "",
    port: Number(process.env.SMTP_PORT || 587),
    secure: process.env.SMTP_SECURE === "true",
    user: process.env.SMTP_USER || "",
    pass: process.env.SMTP_PASS || "",
    from: process.env.SMTP_FROM || process.env.SMTP_USER || "noreply@tidyflow.app",
    to: process.env.CONTACT_TO_EMAIL || process.env.SMTP_TO || ""
  };
}

function isSmtpConfigured() {
  const cfg = getSmtpConfig();
  return !!(cfg.host && cfg.user && cfg.pass && cfg.to);
}

async function startServer() {
  const app = express();
  const PORT = 3005;

  app.use(express.json());

  // Contact form: public SMTP status (no secrets)
  app.get("/api/contact/config", (_req, res) => {
    const cfg = getSmtpConfig();
    res.json({
      configured: isSmtpConfigured(),
      smtpHost: cfg.host || null,
      toEmail: cfg.to || null
    });
  });

  // Contact form: send demo/trial request via SMTP
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, company, size, sheetUse, message } = req.body || {};

      if (!name || !email || !company) {
        res.status(400).json({ error: "Name, email, and company are required." });
        return;
      }

      if (!isSmtpConfigured()) {
        res.status(503).json({
          error: "SMTP is not configured. Set SMTP_HOST, SMTP_USER, SMTP_PASS, and CONTACT_TO_EMAIL in your .env file."
        });
        return;
      }

      const cfg = getSmtpConfig();
      const transporter = nodemailer.createTransport({
        host: cfg.host,
        port: cfg.port,
        secure: cfg.secure,
        auth: {
          user: cfg.user,
          pass: cfg.pass
        }
      });

      const htmlBody = `
        <h2>TidyFlow New Demo Lead</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Team size:</strong> ${size || "—"}</p>
        <p><strong>Uses spreadsheets:</strong> ${sheetUse || "—"}</p>
        <p><strong>Message:</strong></p>
        <p>${(message || "").replace(/\n/g, "<br>")}</p>
      `;

      await transporter.sendMail({
        from: cfg.from,
        to: cfg.to,
        replyTo: email,
        subject: `TidyFlow New Demo Lead: ${company}`,
        text: `Name: ${name}\nEmail: ${email}\nCompany: ${company}\nTeam: ${size}\nSheets: ${sheetUse}\n\n${message || ""}`,
        html: htmlBody
      });

      res.json({ success: true });
    } catch (error: any) {
      console.error("SMTP contact error:", error);
      res.status(500).json({ error: error.message || "Failed to send contact email." });
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

      if (!apiKey) {
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

      if (!apiKey) {
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

      if (!apiKey || language === "en") {
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
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
