import { NextResponse } from "next/server";
import { isBrevoConfigured } from "@/src/lib/brevo";
import { getTurnstileSiteKey, isTurnstileEnabled } from "@/src/lib/turnstile";

export async function GET() {
  return NextResponse.json({
    configured: isBrevoConfigured(),
    provider: "brevo",
    spamProtection: isTurnstileEnabled() ? "turnstile" : null,
    turnstileSiteKey: isTurnstileEnabled() ? getTurnstileSiteKey() : null,
  });
}
