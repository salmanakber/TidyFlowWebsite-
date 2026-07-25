import { NextResponse } from "next/server";
import { getEmailConfigStatus } from "@/src/lib/email";
import { getTurnstileSiteKey, isTurnstileEnabled } from "@/src/lib/turnstile";

export async function GET() {
  const email = getEmailConfigStatus();
  return NextResponse.json({
    configured: email.configured,
    provider: email.provider,
    providers: email.providers,
    spamProtection: isTurnstileEnabled() ? "turnstile" : null,
    turnstileSiteKey: isTurnstileEnabled() ? getTurnstileSiteKey() : null,
  });
}
