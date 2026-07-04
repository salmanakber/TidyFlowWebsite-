export function getBrevoConfig() {
  const apiKey =
    process.env.BREVO_API_KEY ||
    process.env.BREVO_SMTP_KEY ||
    process.env.SMTP_PASS ||
    "";
  const fromRaw =
    process.env.BREVO_SENDER_EMAIL ||
    process.env.SMTP_FROM ||
    process.env.BREVO_SMTP_USER ||
    "";
  const to = process.env.CONTACT_TO_EMAIL || process.env.BREVO_CONTACT_TO || "";
  return { apiKey, fromRaw, to };
}

export function parseSender(fromRaw: string): { name: string; email: string } | null {
  const raw = (fromRaw || "").trim().replace(/^["']|["']$/g, "");
  if (!raw) return null;
  const angled = raw.match(/^([^<]*)<([^>]+)>$/);
  if (angled) {
    const email = angled[2].trim();
    const name = angled[1].trim().replace(/^["']|["']$/g, "") || "TidyFlow";
    return email.includes("@") ? { name, email } : null;
  }
  if (raw.includes("@")) return { name: "TidyFlow", email: raw };
  return null;
}

export function isBrevoConfigured() {
  const cfg = getBrevoConfig();
  return !!(cfg.apiKey && cfg.to && parseSender(cfg.fromRaw));
}

export function escapeHtml(value: string) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
