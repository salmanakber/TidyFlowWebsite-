import type { SeoLandingCopy, SeoLandingSlug } from "./types";
import { SEO_LANDING_EN } from "./en";
import { SEO_LANDING_LOCALES_PT } from "./locales/pt";
import { SEO_LANDING_LOCALES_ES } from "./locales/es";
import { SEO_LANDING_LOCALES_FR } from "./locales/fr";
import { SEO_LANDING_LOCALES_DE } from "./locales/de";
import { SEO_LANDING_LOCALES_IT } from "./locales/it";
import { SEO_LANDING_LOCALES_PL } from "./locales/pl";
import { SEO_LANDING_LOCALES_NO } from "./locales/no";
import { SEO_LANDING_LOCALES_SV } from "./locales/sv";
import { SEO_LANDING_LOCALES_AR } from "./locales/ar";
import { SEO_LANDING_LOCALES_CN } from "./locales/cn";

const LOCALE_PACKS: Record<string, Partial<Record<SeoLandingSlug, SeoLandingCopy>>> = {
  pt: SEO_LANDING_LOCALES_PT,
  es: SEO_LANDING_LOCALES_ES,
  fr: SEO_LANDING_LOCALES_FR,
  de: SEO_LANDING_LOCALES_DE,
  it: SEO_LANDING_LOCALES_IT,
  pl: SEO_LANDING_LOCALES_PL,
  no: SEO_LANDING_LOCALES_NO,
  sv: SEO_LANDING_LOCALES_SV,
  ar: SEO_LANDING_LOCALES_AR,
  cn: SEO_LANDING_LOCALES_CN,
};

export function getSeoLandingCopy(slug: SeoLandingSlug, language: string): SeoLandingCopy {
  const base = SEO_LANDING_EN[slug];
  if (!base) throw new Error(`Unknown SEO landing slug: ${slug}`);
  if (language === "en") return base;
  const pack = LOCALE_PACKS[language]?.[slug];
  return pack || base;
}

export function getSeoLandingNavLabel(slug: SeoLandingSlug, language: string): string {
  return getSeoLandingCopy(slug, language).navLabel;
}
