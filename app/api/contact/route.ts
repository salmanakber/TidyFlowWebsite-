import { NextResponse } from "next/server";
import { escapeHtml, getBrevoConfig, parseSender } from "@/src/lib/brevo";
import { getClientIp, isTurnstileEnabled, verifyTurnstileToken } from "@/src/lib/turnstile";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, company, size, sheetUse, message, website, turnstileToken } = body || {};

    // Honeypot — bots that fill hidden fields get a fake success response
    if (website) {
      return NextResponse.json({ success: true });
    }

    if (isTurnstileEnabled()) {
      if (!turnstileToken) {
        return NextResponse.json(
          { error: "Please complete the security check before submitting." },
          { status: 400 }
        );
      }
      const valid = await verifyTurnstileToken(turnstileToken, getClientIp(req));
      if (!valid) {
        return NextResponse.json(
          { error: "Security verification failed. Please refresh and try again." },
          { status: 403 }
        );
      }
    }

    if (!name || !email || !company) {
      return NextResponse.json(
        { error: "Name, email, and company are required." },
        { status: 400 }
      );
    }

    const cfg = getBrevoConfig();
    const sender = parseSender(cfg.fromRaw);

    if (!cfg.apiKey || !cfg.to || !sender) {
      return NextResponse.json(
        {
          error:
            "Email is not configured. Add BREVO_API_KEY, BREVO_SENDER_EMAIL (verified in Brevo), and CONTACT_TO_EMAIL to your .env.",
        },
        { status: 503 }
      );
    }

    const htmlContent = `
      <h2>TidyFlow New Demo Lead</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Company:</strong> ${escapeHtml(company)}</p>
      <p><strong>Team size:</strong> ${escapeHtml(size || "—")}</p>
      <p><strong>Uses spreadsheets:</strong> ${escapeHtml(sheetUse || "—")}</p>
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(message || "").replace(/\n/g, "<br>") || "—"}</p>
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
      let errMsg = `Brevo rejected the email (${upstream.status}).`;
      try {
        const parsed = JSON.parse(detail);
        if (parsed?.message) errMsg = parsed.message;
      } catch {
        /* keep default */
      }
      return NextResponse.json({ error: errMsg }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Brevo contact error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to send contact email." },
      { status: 500 }
    );
  }
}
