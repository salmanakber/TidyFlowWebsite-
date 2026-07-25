/**
 * Transactional email: Brevo first, Resend fallback.
 * Brevo often fails when BREVO_SENDER_EMAIL is not verified in the Brevo dashboard
 * (especially personal Gmail). Resend needs RESEND_API_KEY + a verified from address.
 */

import {
  escapeHtml,
  getBrevoConfig,
  isBrevoConfigured,
  parseSender,
} from "./brevo";

export { escapeHtml, getBrevoConfig, isBrevoConfigured, parseSender };

export type EmailPayload = {
  subject: string;
  html: string;
  text: string;
  /** Applicant / lead address for Reply-To */
  replyTo?: { email: string; name?: string };
};

export type EmailSendResult = {
  ok: true;
  provider: "brevo" | "resend";
  id?: string;
};

export type EmailSendFailure = {
  ok: false;
  error: string;
  attempts: { provider: string; error: string }[];
};

function getResendConfig() {
  const apiKey = process.env.RESEND_API_KEY || "";
  const fromRaw =
    process.env.RESEND_FROM_EMAIL ||
    process.env.BREVO_SENDER_EMAIL ||
    process.env.SMTP_FROM ||
    "";
  const to = process.env.CONTACT_TO_EMAIL || process.env.BREVO_CONTACT_TO || "";
  return { apiKey, fromRaw, to };
}

export function isResendConfigured() {
  const cfg = getResendConfig();
  return !!(cfg.apiKey && cfg.to && parseSender(cfg.fromRaw));
}

/** True if at least one provider can send */
export function isEmailConfigured() {
  return isBrevoConfigured() || isResendConfigured();
}

export function getEmailConfigStatus() {
  const brevo = isBrevoConfigured();
  const resend = isResendConfigured();
  const providers: string[] = [];
  if (brevo) providers.push("brevo");
  if (resend) providers.push("resend");
  return {
    configured: providers.length > 0,
    providers,
    provider: providers[0] || null,
    brevo,
    resend,
  };
}

async function sendViaBrevo(payload: EmailPayload): Promise<EmailSendResult | EmailSendFailure> {
  const cfg = getBrevoConfig();
  const sender = parseSender(cfg.fromRaw);
  if (!cfg.apiKey || !cfg.to || !sender) {
    return {
      ok: false,
      error: "Brevo is not configured (need BREVO_API_KEY, BREVO_SENDER_EMAIL, CONTACT_TO_EMAIL).",
      attempts: [],
    };
  }

  try {
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
        replyTo: payload.replyTo
          ? { email: payload.replyTo.email, name: payload.replyTo.name || payload.replyTo.email }
          : undefined,
        subject: payload.subject,
        htmlContent: payload.html,
        textContent: payload.text,
      }),
      signal: AbortSignal.timeout(15000),
    });

    if (!upstream.ok) {
      const detail = await upstream.text().catch(() => "");
      console.error("[email] Brevo error:", upstream.status, detail);
      let errMsg = `Brevo rejected the email (${upstream.status}).`;
      try {
        const parsed = JSON.parse(detail);
        if (parsed?.message) errMsg = String(parsed.message);
        else if (parsed?.error) errMsg = String(parsed.error);
      } catch {
        if (detail) errMsg = `${errMsg} ${detail.slice(0, 240)}`;
      }
      // Common fix hint when sender is unverified Gmail
      if (/sender|not valid|unrecognised|unauthorized|verified/i.test(errMsg)) {
        errMsg +=
          " Verify BREVO_SENDER_EMAIL in Brevo (Senders & IP), or set RESEND_API_KEY as fallback.";
      }
      return { ok: false, error: errMsg, attempts: [{ provider: "brevo", error: errMsg }] };
    }

    const data = (await upstream.json().catch(() => ({}))) as { messageId?: string };
    return { ok: true, provider: "brevo", id: data.messageId };
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : "Brevo request failed";
    console.error("[email] Brevo exception:", error);
    return { ok: false, error: msg, attempts: [{ provider: "brevo", error: msg }] };
  }
}

async function sendViaResend(payload: EmailPayload): Promise<EmailSendResult | EmailSendFailure> {
  const cfg = getResendConfig();
  const sender = parseSender(cfg.fromRaw);
  if (!cfg.apiKey || !cfg.to || !sender) {
    return {
      ok: false,
      error:
        "Resend is not configured (need RESEND_API_KEY, RESEND_FROM_EMAIL or BREVO_SENDER_EMAIL, CONTACT_TO_EMAIL).",
      attempts: [],
    };
  }

  const from =
    sender.name && sender.name !== sender.email
      ? `${sender.name} <${sender.email}>`
      : sender.email;

  try {
    const body: Record<string, unknown> = {
      from,
      to: [cfg.to],
      subject: payload.subject,
      html: payload.html,
      text: payload.text,
    };
    if (payload.replyTo?.email) {
      body.reply_to = payload.replyTo.name
        ? `${payload.replyTo.name} <${payload.replyTo.email}>`
        : payload.replyTo.email;
    }

    const upstream = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${cfg.apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
      signal: AbortSignal.timeout(15000),
    });

    if (!upstream.ok) {
      const detail = await upstream.text().catch(() => "");
      console.error("[email] Resend error:", upstream.status, detail);
      let errMsg = `Resend rejected the email (${upstream.status}).`;
      try {
        const parsed = JSON.parse(detail);
        if (parsed?.message) errMsg = String(parsed.message);
      } catch {
        if (detail) errMsg = `${errMsg} ${detail.slice(0, 240)}`;
      }
      return { ok: false, error: errMsg, attempts: [{ provider: "resend", error: errMsg }] };
    }

    const data = (await upstream.json().catch(() => ({}))) as { id?: string };
    return { ok: true, provider: "resend", id: data.id };
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : "Resend request failed";
    console.error("[email] Resend exception:", error);
    return { ok: false, error: msg, attempts: [{ provider: "resend", error: msg }] };
  }
}

/**
 * Send via Brevo; on failure (or if Brevo missing), try Resend.
 */
export async function sendTransactionalEmail(
  payload: EmailPayload
): Promise<EmailSendResult | EmailSendFailure> {
  const attempts: { provider: string; error: string }[] = [];

  if (isBrevoConfigured()) {
    const brevo = await sendViaBrevo(payload);
    if (brevo.ok) return brevo;
    attempts.push(...brevo.attempts);
    console.warn("[email] Brevo failed — trying Resend fallback…", brevo.error);
  } else {
    attempts.push({
      provider: "brevo",
      error: "Brevo not configured",
    });
  }

  if (isResendConfigured()) {
    const resend = await sendViaResend(payload);
    if (resend.ok) {
      console.info("[email] Sent via Resend fallback", resend.id || "");
      return resend;
    }
    attempts.push(...resend.attempts);
    return {
      ok: false,
      error: resend.error,
      attempts,
    };
  }

  if (!isEmailConfigured()) {
    return {
      ok: false,
      error:
        "Email is not configured. Add Brevo (BREVO_API_KEY, BREVO_SENDER_EMAIL, CONTACT_TO_EMAIL) and/or Resend (RESEND_API_KEY, RESEND_FROM_EMAIL).",
      attempts,
    };
  }

  return {
    ok: false,
    error: attempts.map((a) => `${a.provider}: ${a.error}`).join(" | ") || "Failed to send email.",
    attempts,
  };
}
