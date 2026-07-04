import { NextResponse } from "next/server";
import { Type } from "@google/genai";
import { ai, geminiApiKey } from "@/src/lib/gemini";

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
  cn: "Chinese",
};

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  const { chapterId, title, content, language } = body || {};

  try {
    if (!title || !content || !language) {
      return NextResponse.json(
        { error: "Missing title, content, or language parameter." },
        { status: 400 }
      );
    }

    if (!geminiApiKey || !ai) {
      return NextResponse.json({ title, content });
    }

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
            content: { type: Type.STRING },
          },
          required: ["title", "content"],
        },
      },
    });

    const replyText = response.text;
    if (!replyText) throw new Error("Empty translation response.");

    return NextResponse.json(JSON.parse(replyText));
  } catch (error: any) {
    console.error("Translation chapter error:", error);
    return NextResponse.json({ title, content });
  }
}
