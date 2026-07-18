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
 * When Google (or users) hit /path?lang=pt we:
 * 1) Persist language in a cookie for SiteContext
 * 2) 301 redirect to the clean canonical URL (no ?lang=)
 *
 * This stops Search Console "Alternate page with proper canonical tag"
 * noise from indexing dozens of ?lang= variants that all canonicalize
 * back to the same clean URL.
 */
export function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;
  const lang = searchParams.get("lang");

  if (!lang || !SUPPORTED_LANGS.has(lang)) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.searchParams.delete("lang");

  // Preserve other query params (e.g. chapter= on documentation)
  const response = NextResponse.redirect(url, 301);
  response.cookies.set("tidyflow_language", lang, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
  });
  return response;
}

export const config = {
  matcher: [
    /*
     * Match all pathnames except static assets and API.
     */
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)",
  ],
};
