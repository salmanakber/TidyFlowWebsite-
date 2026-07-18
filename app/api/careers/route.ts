import { NextResponse } from "next/server";
import { escapeHtml, getBrevoConfig, parseSender } from "@/src/lib/brevo";
import {
  getClientIp,
  isTurnstileEnabled,
  verifyTurnstileToken,
} from "@/src/lib/turnstile";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      fullName,
      email,
      phone,
      role,
      location,
      experience,
      desiredSalary,
      cvLink,
      message,
      website,
      turnstileToken,
    } = body || {};

    if (website) return NextResponse.json({ success: true });

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

    if (!fullName || !email || !role) {
      return NextResponse.json(
        { error: "Full name, email, and role are required." },
        { status: 400 }
      );
    }

    const cfg = getBrevoConfig();
    const sender = parseSender(cfg.fromRaw);
    if (!cfg.apiKey || !cfg.to || !sender) {
      return NextResponse.json(
        {
          error:
            "Email is not configured. Add BREVO_API_KEY, BREVO_SENDER_EMAIL, and CONTACT_TO_EMAIL to your .env.",
        },
        { status: 503 }
      );
    }

    const htmlContent = `
      <h2>TidyFlow Career Application</h2>
      <p><strong>Name:</strong> ${escapeHtml(fullName)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(phone || "—")}</p>
      <p><strong>Role:</strong> ${escapeHtml(role)}</p>
      <p><strong>Location:</strong> ${escapeHtml(location || "—")}</p>
      <p><strong>Experience:</strong> ${escapeHtml(experience || "—")}</p>
      <p><strong>Desired salary / expectations:</strong> ${escapeHtml(desiredSalary || "—")}</p>
      <p><strong>CV/LinkedIn:</strong> ${escapeHtml(cvLink || "—")}</p>
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(message || "").replace(/\n/g, "<br>") || "—"}</p>
    `;

    const textContent = [
      `Name: ${fullName}`,
      `Email: ${email}`,
      `Phone: ${phone || "—"}`,
      `Role: ${role}`,
      `Location: ${location || "—"}`,
      `Experience: ${experience || "—"}`,
      `Desired salary / expectations: ${desiredSalary || "—"}`,
      `CV/LinkedIn: ${cvLink || "—"}`,
      "",
      message || "",
    ].join("\n");

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
        replyTo: { email, name: fullName },
        subject: `Career Application: ${role} — ${fullName}`,
        htmlContent,
        textContent,
      }),
      signal: AbortSignal.timeout(15000),
    });

    if (!upstream.ok) {
      const detail = await upstream.text().catch(() => "");
      console.error("Brevo API error (careers):", upstream.status, detail);
      let errMsg = `Brevo rejected the email (${upstream.status}).`;
      try {
        const parsed = JSON.parse(detail);
        if (parsed?.message) errMsg = parsed.message;
      } catch {
        // keep default message
      }
      return NextResponse.json({ error: errMsg }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Brevo careers error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to send career application." },
      { status: 500 }
    );
  }
}
