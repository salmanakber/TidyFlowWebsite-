import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const SUPPORTED_LANGS = new Set([
  "en",
  "pt",
  "es",
  "ar",
  "cn",
  "fr",
  "de",
  "pl",
  "no",
  "sv",
  "it",
]);

/**
 * Keep ?lang=pt (etc.) as real, indexable pages so each language has its
 * own title/description/hreflang URL. Persist language on the request and cookie.
 * English stays on the clean URL (no ?lang=en).
 */
export function middleware(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const lang = searchParams.get("lang");

  if (!lang || !SUPPORTED_LANGS.has(lang)) {
    return NextResponse.next();
  }

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-tidyflow-lang", lang);

  const response = NextResponse.next({
    request: { headers: requestHeaders },
  });
  response.cookies.set("tidyflow_language", lang, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
  });
  return response;
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)",
  ],
};
