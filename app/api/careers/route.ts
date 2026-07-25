import { NextResponse } from "next/server";
import { escapeHtml, isEmailConfigured, sendTransactionalEmail } from "@/src/lib/email";
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

    const text = [
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

    const result = await sendTransactionalEmail({
      subject: `Career Application: ${role} — ${fullName}`,
      html,
      text,
      replyTo: { email, name: fullName },
    });

    if (!result.ok) {
      return NextResponse.json({ error: result.error }, { status: 502 });
    }

    return NextResponse.json({ success: true, provider: result.provider });
  } catch (error: unknown) {
    console.error("[careers] error:", error);
    const msg = error instanceof Error ? error.message : "Failed to send career application.";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
