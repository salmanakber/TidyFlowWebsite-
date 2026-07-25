import { NextResponse } from "next/server";
import { escapeHtml, isEmailConfigured, sendTransactionalEmail } from "@/src/lib/email";
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

    if (!isEmailConfigured()) {
      return NextResponse.json(
        {
          error:
            "Email is not configured. Add BREVO_API_KEY + BREVO_SENDER_EMAIL + CONTACT_TO_EMAIL, and/or RESEND_API_KEY + RESEND_FROM_EMAIL.",
        },
        { status: 503 }
      );
    }

    const html = `
      <h2>TidyFlow New Demo Lead</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Company:</strong> ${escapeHtml(company)}</p>
      <p><strong>Team size:</strong> ${escapeHtml(size || "—")}</p>
      <p><strong>Uses spreadsheets:</strong> ${escapeHtml(sheetUse || "—")}</p>
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(message || "").replace(/\n/g, "<br>") || "—"}</p>
    `;

    const text = `Name: ${name}\nEmail: ${email}\nCompany: ${company}\nTeam: ${size || "—"}\nSheets: ${sheetUse || "—"}\n\n${message || ""}`;

    const result = await sendTransactionalEmail({
      subject: `TidyFlow New Demo Lead: ${company}`,
      html,
      text,
      replyTo: { email, name },
    });

    if (!result.ok) {
      return NextResponse.json({ error: result.error }, { status: 502 });
    }

    return NextResponse.json({
      success: true,
      provider: result.provider,
    });
  } catch (error: unknown) {
    console.error("[contact] error:", error);
    const msg = error instanceof Error ? error.message : "Failed to send contact email.";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
