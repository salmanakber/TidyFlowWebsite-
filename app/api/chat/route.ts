import { NextResponse } from "next/server";
import { Type } from "@google/genai";
import { ai, geminiApiKey } from "@/src/lib/gemini";
import { rawChapters } from "@/src/utils/chaptersData";
import { buildTidyBotSystemKnowledge, LANGUAGE_NAMES } from "@/src/utils/tidyBotKnowledge";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { message, history = [], language = "en", pageContext = "website" } = body || {};

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Missing or invalid message query parameter." },
        { status: 400 }
      );
    }

    if (!geminiApiKey || !ai) {
      return NextResponse.json(
        {
          error:
            "GEMINI_API_KEY is not configured on the server. Please add it to your environment variables.",
        },
        { status: 500 }
      );
    }

    const chaptersText = rawChapters
      .map(
        (ch) =>
          `Chapter ${ch.num}: ${ch.title} (Category: ${ch.category})\nContent: ${ch.content}`
      )
      .join("\n\n");

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
    return NextResponse.json(
      { error: error.message || "An error occurred while generating AI response." },
      { status: 500 }
    );
  }
}
