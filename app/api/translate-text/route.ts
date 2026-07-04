import { NextResponse } from "next/server";
import { ai, geminiApiKey } from "@/src/lib/gemini";

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
  cn: "Chinese",
};

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  const { text, language } = body || {};

  try {
    if (!text || !language) {
      return NextResponse.json(
        { error: "Missing text or language parameter." },
        { status: 400 }
      );
    }

    if (!geminiApiKey || !ai || language === "en") {
      return NextResponse.json({ translated: text });
    }

    const langName = langNames[language] || language;

    const systemInstruction = `You are a professional translator. Translate the text into ${langName}.
Maintain exact layout, formatting, and capitalizations. Keep any placeholders like {num} or {count} exactly the same. Keep brand names like TidyFlow, Stripe, Twilio, Slack, and Google Sheets exactly in English.

Return ONLY the translated plain text.`;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: text,
      config: {
        systemInstruction,
        temperature: 0.1,
      },
    });

    const replyText = response.text;
    if (!replyText) throw new Error("Empty response");

    return NextResponse.json({ translated: replyText.trim() });
  } catch (error: any) {
    console.error("Dynamic text translation error:", error);
    return NextResponse.json({ translated: text });
  }
}
