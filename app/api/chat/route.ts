import { NextResponse } from "next/server";
import { Type } from "@google/genai";
import { ai, geminiApiKey } from "@/src/lib/gemini";
import { rawChapters } from "@/src/utils/chaptersData";
import {
  buildTidyBotSystemKnowledge,
  getTidyBotOfflineReply,
  LANGUAGE_NAMES,
} from "@/src/utils/tidyBotKnowledge";

type ChatApiResponse = {
  answer: string;
  chapterLink: string | null;
};

const fallbackPhrases: Record<string, { intro: string; guidance: string; noMatch: string }> = {
  en: {
    intro: "I could not reach AI right now, but I found the closest guide section for you.",
    guidance: "Open the chapter button below for step-by-step instructions.",
    noMatch: "I could not match an exact chapter yet. Try asking with words like timer, sheets sync, QuickBooks, What's New, payroll, SOS, or pricing.",
  },
  pt: {
    intro: "Não consegui acessar a IA agora, mas encontrei a seção mais próxima do guia.",
    guidance: "Abra o capítulo abaixo para ver o passo a passo.",
    noMatch: "Ainda não encontrei um capítulo exato. Tente palavras como timer, sync de planilhas, QuickBooks, novidades, folha de pagamento, SOS ou preços.",
  },
  es: {
    intro: "No pude conectar con la IA ahora, pero encontré la sección más cercana del manual.",
    guidance: "Abra el capítulo de abajo para ver los pasos.",
    noMatch: "Aún no encontré un capítulo exacto. Pruebe con palabras como temporizador, sincronización, QuickBooks, novedades, nómina, SOS o precios.",
  },
};

function tokenize(input: string): string[] {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9\u00c0-\u024f\u0600-\u06ff\u4e00-\u9fff\s-]/g, " ")
    .split(/\s+/)
    .filter((t) => t.length > 2);
}

function keywordMatchChapter(query: string) {
  const tokens = tokenize(query);
  if (tokens.length === 0) return null;

  let best: { id: string; title: string; num: number; score: number } | null = null;

  for (const ch of rawChapters) {
    const haystack = `${ch.title} ${ch.category} ${ch.content.slice(0, 900)}`.toLowerCase();
    let score = 0;
    for (const token of tokens) {
      if (ch.title.toLowerCase().includes(token)) score += 6;
      else if (ch.category.toLowerCase().includes(token)) score += 4;
      else if (haystack.includes(token)) score += 2;
    }
    if (!best || score > best.score) {
      best = { id: ch.id, title: ch.title, num: ch.num, score };
    }
  }

  return best && best.score >= 4 ? best : null;
}

function buildFallbackResponse(message: string, language: string): ChatApiResponse {
  const offline = getTidyBotOfflineReply(message, language);
  if (offline) return { answer: offline, chapterLink: null };

  const matched = keywordMatchChapter(message);
  const phrases = fallbackPhrases[language] || fallbackPhrases.en;
  if (matched) {
    return {
      answer: `💡 ${phrases.intro}\n\n• **Chapter ${matched.num}: ${matched.title}**\n• ${phrases.guidance}`,
      chapterLink: matched.id,
    };
  }

  return {
    answer: `🤝 ${phrases.noMatch}`,
    chapterLink: null,
  };
}

export async function POST(req: Request) {
  let fallbackMessage = "";
  let fallbackLanguage = "en";
  try {
    const body = await req.json();
    const { message, history = [], language = "en", pageContext = "website" } = body || {};
    fallbackMessage = message || "";
    fallbackLanguage = language || "en";

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Missing or invalid message query parameter." },
        { status: 400 }
      );
    }

    if (!geminiApiKey || !ai) {
      return NextResponse.json(buildFallbackResponse(message, language));
    }

    const chaptersText = rawChapters
      .map(
        (ch) =>
          `Chapter ${ch.num}: ${ch.title} (Category: ${ch.category})\nContent: ${ch.content}`
      )
      .join("\n\n");

    const uiLanguage = LANGUAGE_NAMES[language as string] || LANGUAGE_NAMES.en;

    const systemInstruction = `You are TidyBot — the friendly, upbeat AI assistant for TidyFlow (professional cleaning operations software). You appear on every page of the tidyflowapp.com marketing site and documentation portal.

You are fully trained on the ENTIRE website: Home, Features, What's New (all feature pages), Pricing, How it works, Personas, Integrations, Contact, Documentation (23 chapters), Blog, and Careers — plus company, pricing, FAQ, and latest product releases.

=== OFFICIAL USER GUIDE (23 chapters — ground truth for how-to questions) ===
${chaptersText}

=== FULL PRODUCT KNOWLEDGE (company, pricing, website map, What's New features, FAQ, chapter index) ===
${buildTidyBotSystemKnowledge()}

=== USER CONTEXT ===
Current page: ${pageContext}
Tailor answers to the page:
- marketing:pricing → plans, trial, self-serve billing, usage meters
- marketing:integrations → Sheets, QuickBooks, Stripe, Integrations hub
- marketing:whats-new or marketing:whats-new:{slug} → that feature / What's New FAQ; link /whats-new/{slug}
- marketing:features → product capabilities + link related /whats-new pages when relevant
- marketing:contact → demo / 14-day trial
- documentation → guide steps + chapterLink
- marketing:blog / marketing:careers → acknowledge page and help with product/hiring context

=== RESPONSE LANGUAGE (CRITICAL) ===
The website UI language is: **${uiLanguage}** (code: ${language}).
You MUST write your entire "answer" field ONLY in ${uiLanguage}, even if the user writes in another language.

=== PERSONALITY & FORMAT ===
- Warm, helpful, and human — like a smart colleague, not a robot
- Start with a brief friendly opener when appropriate (e.g. "Great question! 👋")
- Use 1–3 relevant emojis per reply (🧹 📍 ✅ 💡 🆕) — never spam
- Use **bold** for key terms and product names
- Use short paragraphs and bullet lists (• or numbered) for steps
- Answer: What's New features, task chat, QuickBooks, billing, Revenue AI, addresses, offline GPS, announcements, supplies, pricing, founder, demo/trial, integrations, personas, comparisons, and how-to from the 23 chapters
- When discussing a What's New feature, mention the path (e.g. **/whats-new/quickbooks**) so users can open the standalone page
- For founder questions: TidyFlow was founded in 2024 by Salman Akber
- AI features: always note that AI recommends and managers decide — AI never auto-assigns
- For demo/trial: direct users to **/contact** for a 14-day free evaluation
- For live prices/limits: direct users to **/pricing** (rates sync from management)

=== CHAPTER LINKS ===
If a user guide chapter (ch-1 to ch-23) is highly relevant, set "chapterLink" to that ID (e.g. "ch-5"). Otherwise null.

Return JSON only:
{
  "answer": "Your formatted reply in ${uiLanguage}",
  "chapterLink": "ch-XX or null"
}`;

    const formattedContents = history.map((h: any) => ({
      role: h.sender === "user" ? "user" : "model",
      parts: [{ text: h.text }],
    }));

    formattedContents.push({
      role: "user",
      parts: [{ text: message }],
    });

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
              description: `The Markdown formatted reply in ${uiLanguage} (website UI language).`,
            },
            chapterLink: {
              type: Type.STRING,
              description:
                "The ID of the most relevant chapter from ch-1 to ch-23 if there is a match, or null.",
            },
          },
          required: ["answer", "chapterLink"],
        },
      },
    });

    const replyText = response.text;
    if (!replyText) {
      throw new Error("No response content from Gemini API.");
    }

    return NextResponse.json(JSON.parse(replyText));
  } catch (error: any) {
    console.error("Gemini API server-side error:", error);
    return NextResponse.json(buildFallbackResponse(fallbackMessage, fallbackLanguage));
  }
}
