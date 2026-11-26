import { SOCIAL_SAME_AS } from "../config/appLinks";
import { extraPageSeo, ogImageAlt, seoLocales } from "./seoLocales";
import type { SeoMeta, SeoPage } from "./seoTypes";

export type { SeoMeta, SeoPage } from "./seoTypes";

const SITE_URL = "https://tidyflowapp.com";
const OG_IMAGE = `${SITE_URL}/og-image.png`;

/** Google Search Console HTML tag verification token */
export const GOOGLE_SITE_VERIFICATION = "XkJtk16LIKzsYV3q7_pAVbgnD8nTbHt6mzeaXGbbWRQ";

const byLang = seoLocales;

const HREFLANG_MAP: Record<string, string> = {
  en: "en",
  pt: "pt",
  es: "es",
  fr: "fr",
  de: "de",
  pl: "pl",
  no: "nb",
  sv: "sv",
  it: "it",
  ar: "ar",
  cn: "zh-CN",
};

export function getSeoMeta(
  activeTab: "marketing" | "documentation",
  marketingPage: string,
  language: string
): SeoMeta {
  const langDict = byLang[language] || byLang.en;
  if (activeTab === "documentation") return langDict.documentation;
  const pageMap: Record<string, SeoPage> = {
    home: "home",
    features: "features",
    pricing: "pricing",
    integrations: "integrations",
    contact: "contact",
    personas: "personas",
    "how-it-works": "how-it-works",
  };
  const page = pageMap[marketingPage] || "home";
  return langDict[page] || langDict.home;
}

export function getHtmlLang(language: string): string {
  return HREFLANG_MAP[language] || language;
}

export const SEO_LANGUAGE_CODES = Object.keys(HREFLANG_MAP);

/** Resolve ?lang= to a supported SEO language code (fallback en). */
export function resolveSeoLanguage(lang?: string | null): string {
  if (lang && byLang[lang]) return lang;
  return "en";
}

export function getOgImageAlt(language: string): string {
  return ogImageAlt[resolveSeoLanguage(language)] || ogImageAlt.en;
}

export function getExtraPageSeo(
  page: "blog" | "careers",
  language: string
): { title: string; description: string; keywords: string } {
  const pack = extraPageSeo[page];
  return pack[resolveSeoLanguage(language)] || pack.en;
}

/** Self-canonical URL for a language. English stays clean; others use ?lang=. */
export function localizedUrl(canonicalPath: string, language: string): string {
  const resolved = resolveSeoLanguage(language);
  const path = canonicalPath === "/" ? "" : canonicalPath;
  const base = `${SITE_URL}${path}` || SITE_URL;
  if (resolved === "en") return base;
  return `${base}?lang=${resolved}`;
}

function metadataShell(options: {
  title: string;
  description: string;
  keywords: string;
  canonicalPath: string;
  language: string;
  includeSiteVerification?: boolean;
}) {
  const resolved = resolveSeoLanguage(options.language);
  const canonical = localizedUrl(options.canonicalPath, resolved);
  const htmlLang = getHtmlLang(resolved);
  const ogLocale = htmlLang.replace("-", "_");
  const alternateLocales = Object.values(HREFLANG_MAP)
    .map((h) => h.replace("-", "_"))
    .filter((h) => h !== ogLocale);
  const keywordList = options.keywords.split(",").map((k) => k.trim()).filter(Boolean);

  return {
    metadataBase: new URL(SITE_URL),
    title: options.title,
    description: options.description,
    keywords: keywordList,
    authors: [{ name: "TidyFlow", url: SITE_URL }],
    creator: "TidyFlow",
    publisher: "TidyFlow",
    applicationName: "TidyFlow",
    category: "business",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large" as const,
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    alternates: {
      canonical: canonical || SITE_URL,
      languages: buildAlternateLanguages(options.canonicalPath),
    },
    openGraph: {
      type: "website" as const,
      url: canonical || SITE_URL,
      siteName: "TidyFlow",
      title: options.title,
      description: options.description,
      locale: ogLocale,
      alternateLocale: alternateLocales,
      images: [
        {
          url: OG_IMAGE,
          width: 1200,
          height: 630,
          alt: getOgImageAlt(resolved),
        },
      ],
    },
    twitter: {
      card: "summary_large_image" as const,
      site: "@tidyflowapp",
      creator: "@tidyflowapp",
      title: options.title,
      description: options.description,
      images: [OG_IMAGE],
    },
    ...(options.includeSiteVerification
      ? {
          verification: {
            google: GOOGLE_SITE_VERIFICATION,
          },
        }
      : {}),
  };
}

/** Next.js Metadata API (server-safe — no document access). */
export function buildPageMetadata(
  page: SeoPage,
  language = "en",
  options?: { includeSiteVerification?: boolean }
) {
  const resolved = resolveSeoLanguage(language);
  const langDict = byLang[resolved] || byLang.en;
  const meta = langDict[page] || langDict.home;
  return metadataShell({
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    canonicalPath: meta.canonicalPath,
    language: resolved,
    includeSiteVerification: options?.includeSiteVerification,
  });
}

export function pageFromPath(pathname: string): SeoPage {
  const clean = pathname.replace(/\/$/, "") || "/";
  const map: Record<string, SeoPage> = {
    "/": "home",
    "/features": "features",
    "/pricing": "pricing",
    "/how-it-works": "how-it-works",
    "/personas": "personas",
    "/integrations": "integrations",
    "/contact": "contact",
    "/documentation": "documentation",
  };
  if (clean === "/whats-new" || clean.startsWith("/whats-new/")) {
    return "features";
  }
  return map[clean] || "home";
}

export function pathForPage(pageId: string): string {
  if (pageId === "home" || pageId === "") return "/";
  if (pageId === "documentation") return "/documentation";
  return `/${pageId}`;
}

/** hreflang: English = clean URL, other languages = ?lang= code. */
export function buildAlternateLanguages(canonicalPath: string): Record<string, string> {
  const languages: Record<string, string> = {
    "x-default": localizedUrl(canonicalPath, "en"),
  };
  Object.keys(HREFLANG_MAP).forEach((code) => {
    languages[HREFLANG_MAP[code]] = localizedUrl(canonicalPath, code);
  });
  return languages;
}

/** Generic Next metadata for dynamic marketing pages with full multilingual alternates. */
export function buildCustomPageMetadata(options: {
  title: string;
  description: string;
  keywords: string;
  canonicalPath: string;
  language?: string;
}) {
  return metadataShell({
    title: options.title,
    description: options.description,
    keywords: options.keywords,
    canonicalPath: options.canonicalPath,
    language: options.language || "en",
  });
}

export { SITE_URL, OG_IMAGE, HREFLANG_MAP };

function setMeta(name: string, content: string, attr: "name" | "property" = "name") {
  let el = document.querySelector(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setLink(rel: string, href: string, extra?: Record<string, string>) {
  const selector = extra?.hreflang
    ? `link[rel="${rel}"][hreflang="${extra.hreflang}"]`
    : `link[rel="${rel}"]${rel === "canonical" ? "" : `[href="${href}"]`}`;
  let el = document.querySelector(selector) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement("link");
    el.rel = rel;
    document.head.appendChild(el);
  }
  el.href = href;
  if (extra) {
    Object.entries(extra).forEach(([k, v]) => el!.setAttribute(k, v));
  }
}

function injectJsonLd(id: string, data: object) {
  let el = document.getElementById(id) as HTMLScriptElement | null;
  if (!el) {
    el = document.createElement("script");
    el.id = id;
    el.type = "application/ld+json";
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

export function applySeoMeta(meta: SeoMeta, language: string): void {
  const resolved = resolveSeoLanguage(language);
  const canonical = localizedUrl(meta.canonicalPath, resolved);
  const htmlLang = getHtmlLang(resolved);
  const alternates = buildAlternateLanguages(meta.canonicalPath);

  document.title = meta.title;
  document.documentElement.lang = htmlLang;

  setMeta("description", meta.description);
  setMeta("keywords", meta.keywords);
  setMeta("robots", "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");
  setMeta("author", "TidyFlow");
  setMeta("application-name", "TidyFlow");

  setMeta("og:title", meta.title, "property");
  setMeta("og:description", meta.description, "property");
  setMeta("og:type", "website", "property");
  setMeta("og:url", canonical, "property");
  setMeta("og:site_name", "TidyFlow", "property");
  setMeta("og:image", OG_IMAGE, "property");
  setMeta("og:image:alt", getOgImageAlt(resolved), "property");
  setMeta("og:locale", htmlLang.replace("-", "_"), "property");

  setMeta("twitter:card", "summary_large_image");
  setMeta("twitter:title", meta.title);
  setMeta("twitter:description", meta.description);
  setMeta("twitter:image", OG_IMAGE);
  setMeta("twitter:site", "@tidyflowapp");

  setLink("canonical", canonical);

  document.querySelectorAll('link[rel="alternate"][hreflang]').forEach((n) => n.remove());
  Object.entries(alternates).forEach(([hreflang, href]) => {
    const link = document.createElement("link");
    link.rel = "alternate";
    link.hreflang = hreflang;
    link.href = href;
    document.head.appendChild(link);
  });

  injectJsonLd("seo-org", {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "TidyFlow",
    url: SITE_URL,
    logo: `${SITE_URL}/favicon.png`,
    email: "tidyflaw@gmail.com",
    description: meta.description,
    sameAs: [...SOCIAL_SAME_AS],
  });

  injectJsonLd("seo-software", {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "TidyFlow",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web, iOS, Android",
    inLanguage: htmlLang,
    offers: {
      "@type": "AggregateOffer",
      lowPrice: "25",
      highPrice: "149",
      priceCurrency: "USD",
      offerCount: 3,
      description: "14-day free trial · Startup from $25/month · Standard $79 · Premium $149",
      url: localizedUrl("/pricing", resolved),
    },
    featureList: [
      "Offline field app",
      "GPS geofenced time tracking",
      "Offline GPS location queue",
      "Google Sheets two-way sync",
      "QuickBooks Online invoice sync",
      "Per-task team chat with voice notes",
      "Company announcements",
      "AI cleaner assignment",
      "Revenue AI profit analysis",
      "Payroll from verified hours",
      "Client photo proof PDFs",
      "SOS lone-worker safety",
    ],
  });

  injectJsonLd("seo-website", {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "TidyFlow",
    url: SITE_URL,
    description: meta.description,
    inLanguage: Object.values(HREFLANG_MAP),
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/documentation?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  });
}
