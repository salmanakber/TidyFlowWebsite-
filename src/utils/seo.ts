export type SeoPage = "home" | "documentation" | "features" | "pricing" | "integrations" | "contact" | "personas" | "how-it-works";

export interface SeoMeta {
  title: string;
  description: string;
  keywords: string;
  canonicalPath: string;
}

const SITE_URL = "https://tidyflowapp.com";
const OG_IMAGE = `${SITE_URL}/og-image.png`;

/** Google Search Console HTML tag verification token */
export const GOOGLE_SITE_VERIFICATION = "XkJtk16LIKzsYV3q7_pAVbgnD8nTbHt6mzeaXGbbWRQ";

const en: Record<SeoPage, SeoMeta> = {
  home: {
    title: "TidyFlow | Cleaning Company Software — Offline App, GPS Geofencing & Google Sheets",
    description:
      "All-in-one janitorial & facilities cleaning software. Offline iOS/Android field app, GPS on-site verification, two-way Google Sheets sync, AI dispatch, payroll automation & client proof. Start your 14-day free trial.",
    keywords:
      "cleaning company software, janitorial software, commercial cleaning software, cleaning business management software, offline cleaning app, GPS geofencing cleaners, Google Sheets cleaning schedule, rota scheduling software, cleaning payroll software, facilities cleaning app, maid service software, field service cleaning app, TidyFlow",
    canonicalPath: "/"
  },
  documentation: {
    title: "TidyFlow User Guide — 23-Chapter Interactive Documentation & TidyBot",
    description:
      "Official TidyFlow documentation: setup, Google Sheets sync, cleaner app, SOS safety, payroll, offline mode, and AI features. Available in 11 languages with TidyBot AI assistant.",
    keywords: "TidyFlow docs, user guide, cleaning app documentation, Google Sheets integration, offline mode guide",
    canonicalPath: "/documentation"
  },
  features: {
    title: "TidyFlow Features — Scheduling, Offline Field App, GPS, AI & Integrations",
    description:
      "Explore TidyFlow: rota builder, offline cleaner mobile app, GPS geofencing, photo proof, PDF reports, Stripe billing, and live Google Sheets sync.",
    keywords: "cleaning app features, rota scheduling, offline field app, GPS cleaning tracker, AI dispatch cleaning",
    canonicalPath: "/features"
  },
  pricing: {
    title: "TidyFlow Pricing — Startup, Standard & Premium Plans for Cleaning Teams",
    description:
      "Transparent live pricing for cleaning and facilities companies. Scale by properties and cleaners. 14-day free trial, billed via Stripe.",
    keywords: "cleaning software pricing, TidyFlow plans, janitorial SaaS cost, cleaning business subscription",
    canonicalPath: "/pricing"
  },
  integrations: {
    title: "TidyFlow Integrations — Google Sheets, Stripe & Google Maps",
    description:
      "Connect TidyFlow to Google Sheets for two-way property and task sync, plus Stripe payments and geofenced mapping.",
    keywords: "Google Sheets cleaning software, Stripe integration cleaning, spreadsheet sync janitorial",
    canonicalPath: "/integrations"
  },
  contact: {
    title: "Book a TidyFlow Demo — Free 14-Day Trial for Cleaning Companies",
    description:
      "Schedule a live TidyFlow demo. Tell us about your team size, spreadsheet workflow, and operations goals. No credit card required.",
    keywords: "TidyFlow demo, cleaning software trial, contact TidyFlow sales",
    canonicalPath: "/contact"
  },
  personas: {
    title: "TidyFlow for Owners, Managers, Cleaners & Facility Clients",
    description:
      "See how TidyFlow serves business owners, operations managers, field cleaners, and facility clients with role-tailored workflows.",
    keywords: "cleaning business owner software, manager dashboard cleaning, cleaner mobile app offline",
    canonicalPath: "/personas"
  },
  "how-it-works": {
    title: "How TidyFlow Works — Spreadsheet to Field to Payroll in One Pipeline",
    description:
      "Learn the TidyFlow workflow: sync your master Google Sheet, dispatch jobs, track hours offline with GPS, approve payroll, and invoice clients.",
    keywords: "cleaning workflow software, operations pipeline, field to office sync cleaning",
    canonicalPath: "/how-it-works"
  }
};

const pt: Record<SeoPage, SeoMeta> = {
  home: {
    title: "TidyFlow — Software de Operações de Limpeza | App Offline e Google Sheets",
    description: "Plataforma completa para empresas de limpeza: app offline iOS/Android, GPS, sincronização Google Sheets, IA e folha de pagamento.",
    keywords: "software limpeza, app offline limpeza, GPS faxineiros, Google Sheets",
    canonicalPath: "/"
  },
  documentation: {
    title: "Guia do Usuário TidyFlow — Documentação Interativa",
    description: "Documentação oficial TidyFlow em 23 capítulos com assistente TidyBot.",
    keywords: "documentação TidyFlow",
    canonicalPath: "/documentation"
  },
  features: { title: "Recursos TidyFlow", description: "Agendamento, app offline, GPS e integrações.", keywords: "recursos software limpeza", canonicalPath: "/features" },
  pricing: { title: "Preços TidyFlow", description: "Planos transparentes com teste grátis de 14 dias.", keywords: "preços software limpeza", canonicalPath: "/pricing" },
  integrations: { title: "Integrações TidyFlow", description: "Google Sheets, Stripe e mapas.", keywords: "integração Google Sheets", canonicalPath: "/integrations" },
  contact: { title: "Agendar Demo TidyFlow", description: "Demonstração ao vivo gratuita.", keywords: "demo TidyFlow", canonicalPath: "/contact" },
  personas: { title: "TidyFlow por Função", description: "Fluxos para proprietários, gestores e faxineiros.", keywords: "software limpeza", canonicalPath: "/personas" },
  "how-it-works": { title: "Como o TidyFlow Funciona", description: "Da planilha ao campo e à folha de pagamento.", keywords: "fluxo limpeza", canonicalPath: "/how-it-works" }
};

const es: Record<SeoPage, SeoMeta> = {
  home: { title: "TidyFlow — Software de Operaciones de Limpieza", description: "App offline, GPS, Google Sheets e IA para empresas de limpieza.", keywords: "software limpieza", canonicalPath: "/" },
  documentation: { title: "Guía TidyFlow", description: "Documentación oficial interactiva.", keywords: "documentación TidyFlow", canonicalPath: "/documentation" },
  features: { title: "Funciones TidyFlow", description: "Programación, app móvil offline y GPS.", keywords: "funciones limpieza", canonicalPath: "/features" },
  pricing: { title: "Precios TidyFlow", description: "Planes transparentes con prueba gratis.", keywords: "precios limpieza", canonicalPath: "/pricing" },
  integrations: { title: "Integraciones TidyFlow", description: "Google Sheets y Stripe.", keywords: "integración Sheets", canonicalPath: "/integrations" },
  contact: { title: "Demo TidyFlow", description: "Prueba gratuita de 14 días.", keywords: "demo TidyFlow", canonicalPath: "/contact" },
  personas: { title: "TidyFlow por Rol", description: "Para propietarios, gerentes y limpiadores.", keywords: "software limpieza roles", canonicalPath: "/personas" },
  "how-it-works": { title: "Cómo Funciona TidyFlow", description: "De la hoja de cálculo a la nómina.", keywords: "flujo limpieza", canonicalPath: "/how-it-works" }
};

const fr: Record<SeoPage, SeoMeta> = {
  home: { title: "TidyFlow — Logiciel d'opérations de nettoyage", description: "App hors ligne, GPS, Google Sheets et IA.", keywords: "logiciel nettoyage", canonicalPath: "/" },
  documentation: { title: "Guide TidyFlow", description: "Documentation officielle interactive.", keywords: "documentation TidyFlow", canonicalPath: "/documentation" },
  features: { title: "Fonctionnalités TidyFlow", description: "Planning, app mobile offline, GPS.", keywords: "fonctionnalités nettoyage", canonicalPath: "/features" },
  pricing: { title: "Tarifs TidyFlow", description: "Forfaits transparents avec essai gratuit.", keywords: "tarifs nettoyage", canonicalPath: "/pricing" },
  integrations: { title: "Intégrations TidyFlow", description: "Google Sheets et Stripe.", keywords: "intégration Sheets", canonicalPath: "/integrations" },
  contact: { title: "Démo TidyFlow", description: "Essai gratuit de 14 jours.", keywords: "démo TidyFlow", canonicalPath: "/contact" },
  personas: { title: "TidyFlow par rôle", description: "Propriétaires, gestionnaires et agents.", keywords: "logiciel nettoyage", canonicalPath: "/personas" },
  "how-it-works": { title: "Comment fonctionne TidyFlow", description: "De la feuille de calcul à la paie.", keywords: "workflow nettoyage", canonicalPath: "/how-it-works" }
};

const de: Record<SeoPage, SeoMeta> = {
  home: { title: "TidyFlow — Reinigungs-Operations-Software", description: "Offline-App, GPS, Google Sheets und KI.", keywords: "Reinigungssoftware", canonicalPath: "/" },
  documentation: { title: "TidyFlow Benutzerhandbuch", description: "Offizielle interaktive Dokumentation.", keywords: "TidyFlow Dokumentation", canonicalPath: "/documentation" },
  features: { title: "TidyFlow Funktionen", description: "Planung, Offline-App, GPS.", keywords: "Reinigungssoftware Funktionen", canonicalPath: "/features" },
  pricing: { title: "TidyFlow Preise", description: "Transparente Pläne mit kostenlosem Test.", keywords: "Preise Reinigungssoftware", canonicalPath: "/pricing" },
  integrations: { title: "TidyFlow Integrationen", description: "Google Sheets und Stripe.", keywords: "Google Sheets Integration", canonicalPath: "/integrations" },
  contact: { title: "TidyFlow Demo", description: "14 Tage kostenlos testen.", keywords: "TidyFlow Demo", canonicalPath: "/contact" },
  personas: { title: "TidyFlow nach Rolle", description: "Für Inhaber, Manager und Kräfte.", keywords: "Reinigungssoftware Rollen", canonicalPath: "/personas" },
  "how-it-works": { title: "So funktioniert TidyFlow", description: "Vom Tabellenblatt zur Lohnabrechnung.", keywords: "Reinigungs-Workflow", canonicalPath: "/how-it-works" }
};

const pl: Record<SeoPage, SeoMeta> = {
  home: { title: "TidyFlow — Oprogramowanie operacyjne sprzątania", description: "App offline, GPS, Google Sheets i AI.", keywords: "oprogramowanie sprzątanie", canonicalPath: "/" },
  documentation: { title: "Przewodnik TidyFlow", description: "Oficjalna dokumentacja.", keywords: "dokumentacja TidyFlow", canonicalPath: "/documentation" },
  features: { title: "Funkcje TidyFlow", description: "Grafik, app offline, GPS.", keywords: "funkcje sprzątanie", canonicalPath: "/features" },
  pricing: { title: "Cennik TidyFlow", description: "Przejrzyste plany z trial.", keywords: "cennik", canonicalPath: "/pricing" },
  integrations: { title: "Integracje TidyFlow", description: "Google Sheets i Stripe.", keywords: "integracja Sheets", canonicalPath: "/integrations" },
  contact: { title: "Demo TidyFlow", description: "Bezpłatny okres próbny.", keywords: "demo TidyFlow", canonicalPath: "/contact" },
  personas: { title: "TidyFlow według ról", description: "Właściciele, menedżerowie, pracownicy.", keywords: "oprogramowanie sprzątanie", canonicalPath: "/personas" },
  "how-it-works": { title: "Jak działa TidyFlow", description: "Od arkusza do listy płac.", keywords: "workflow sprzątanie", canonicalPath: "/how-it-works" }
};

const no: Record<SeoPage, SeoMeta> = {
  home: { title: "TidyFlow — Driftssprogramvare for rengjøring", description: "Offline-app, GPS, Google Sheets og AI.", keywords: "rengjøringsprogramvare", canonicalPath: "/" },
  documentation: { title: "TidyFlow brukerveiledning", description: "Offisiell dokumentasjon.", keywords: "TidyFlow dokumentasjon", canonicalPath: "/documentation" },
  features: { title: "TidyFlow-funksjoner", description: "Planlegging, offline-app, GPS.", keywords: "funksjoner rengjøring", canonicalPath: "/features" },
  pricing: { title: "TidyFlow-priser", description: "Transparente planer.", keywords: "priser", canonicalPath: "/pricing" },
  integrations: { title: "TidyFlow-integrasjoner", description: "Google Sheets og Stripe.", keywords: "integrasjon Sheets", canonicalPath: "/integrations" },
  contact: { title: "TidyFlow-demo", description: "Gratis prøveperiode.", keywords: "demo TidyFlow", canonicalPath: "/contact" },
  personas: { title: "TidyFlow etter rolle", description: "Eiere, ledere og rengjørere.", keywords: "rengjøring roller", canonicalPath: "/personas" },
  "how-it-works": { title: "Slik fungerer TidyFlow", description: "Fra regneark til lønn.", keywords: "arbeidsflyt rengjøring", canonicalPath: "/how-it-works" }
};

const sv: Record<SeoPage, SeoMeta> = {
  home: { title: "TidyFlow — Driftprogramvara för städföretag", description: "Offline-app, GPS, Google Sheets och AI.", keywords: "städprogramvara", canonicalPath: "/" },
  documentation: { title: "TidyFlow användarhandbok", description: "Officiell dokumentation.", keywords: "TidyFlow dokumentation", canonicalPath: "/documentation" },
  features: { title: "TidyFlow-funktioner", description: "Schemaläggning, offline-app, GPS.", keywords: "städfunktioner", canonicalPath: "/features" },
  pricing: { title: "TidyFlow-priser", description: "Transparenta planer.", keywords: "priser städ", canonicalPath: "/pricing" },
  integrations: { title: "TidyFlow-integrationer", description: "Google Sheets och Stripe.", keywords: "integration Sheets", canonicalPath: "/integrations" },
  contact: { title: "TidyFlow-demo", description: "Gratis provperiod.", keywords: "demo TidyFlow", canonicalPath: "/contact" },
  personas: { title: "TidyFlow per roll", description: "Ägare, chefer och städare.", keywords: "städning roller", canonicalPath: "/personas" },
  "how-it-works": { title: "Så fungerar TidyFlow", description: "Från kalkylblad till lön.", keywords: "arbetsflöde städning", canonicalPath: "/how-it-works" }
};

const it: Record<SeoPage, SeoMeta> = {
  home: { title: "TidyFlow — Software operativo per imprese di pulizie", description: "App offline, GPS, Google Sheets e IA.", keywords: "software pulizie", canonicalPath: "/" },
  documentation: { title: "Guida utente TidyFlow", description: "Documentazione ufficiale.", keywords: "documentazione TidyFlow", canonicalPath: "/documentation" },
  features: { title: "Funzionalità TidyFlow", description: "Pianificazione, app offline, GPS.", keywords: "funzionalità pulizie", canonicalPath: "/features" },
  pricing: { title: "Prezzi TidyFlow", description: "Piani trasparenti con prova gratuita.", keywords: "prezzi pulizie", canonicalPath: "/pricing" },
  integrations: { title: "Integrazioni TidyFlow", description: "Google Sheets e Stripe.", keywords: "integrazione Sheets", canonicalPath: "/integrations" },
  contact: { title: "Demo TidyFlow", description: "Prova gratuita 14 giorni.", keywords: "demo TidyFlow", canonicalPath: "/contact" },
  personas: { title: "TidyFlow per ruolo", description: "Proprietari, manager e operatori.", keywords: "software pulizie ruoli", canonicalPath: "/personas" },
  "how-it-works": { title: "Come funziona TidyFlow", description: "Dal foglio di calcolo alle paghe.", keywords: "workflow pulizie", canonicalPath: "/how-it-works" }
};

const ar: Record<SeoPage, SeoMeta> = {
  home: { title: "TidyFlow — برنامج عمليات التنظيف", description: "تطبيق بدون إنترنت، GPS، Google Sheets وذكاء اصطناعي.", keywords: "برنامج تنظيف", canonicalPath: "/" },
  documentation: { title: "دليل مستخدم TidyFlow", description: "توثيق رسمي تفاعلي.", keywords: "توثيق TidyFlow", canonicalPath: "/documentation" },
  features: { title: "ميزات TidyFlow", description: "جدولة وتطبيق ميداني offline.", keywords: "ميزات تنظيف", canonicalPath: "/features" },
  pricing: { title: "أسعار TidyFlow", description: "خطط شفافة مع تجربة مجانية.", keywords: "أسعار برنامج تنظيف", canonicalPath: "/pricing" },
  integrations: { title: "تكاملات TidyFlow", description: "Google Sheets وStripe.", keywords: "تكامل Sheets", canonicalPath: "/integrations" },
  contact: { title: "عرض TidyFlow", description: "تجربة مجانية 14 يوماً.", keywords: "عرض TidyFlow", canonicalPath: "/contact" },
  personas: { title: "TidyFlow حسب الدور", description: "مالكون ومديرون وعمال نظافة.", keywords: "برنامج تنظيف", canonicalPath: "/personas" },
  "how-it-works": { title: "كيف يعمل TidyFlow", description: "من الجدول إلى الرواتب.", keywords: "سير عمل تنظيف", canonicalPath: "/how-it-works" }
};

const cn: Record<SeoPage, SeoMeta> = {
  home: { title: "TidyFlow — 保洁运营软件 | 离线 App、GPS 与 Google 表格", description: "保洁公司一体化平台：离线外勤 App、GPS 核验、表格双向同步与 AI 派单。", keywords: "保洁软件, 离线 App, GPS 考勤", canonicalPath: "/" },
  documentation: { title: "TidyFlow 用户手册", description: "23 章官方交互式文档。", keywords: "TidyFlow 文档", canonicalPath: "/documentation" },
  features: { title: "TidyFlow 功能", description: "排班、离线外勤 App、GPS。", keywords: "保洁软件功能", canonicalPath: "/features" },
  pricing: { title: "TidyFlow 定价", description: "透明定价，14 天免费试用。", keywords: "保洁软件价格", canonicalPath: "/pricing" },
  integrations: { title: "TidyFlow 集成", description: "Google Sheets 与 Stripe。", keywords: "表格集成", canonicalPath: "/integrations" },
  contact: { title: "预约 TidyFlow 演示", description: "免费 14 天试用。", keywords: "TidyFlow 演示", canonicalPath: "/contact" },
  personas: { title: "TidyFlow 面向各角色", description: "业主、经理与保洁员。", keywords: "保洁软件角色", canonicalPath: "/personas" },
  "how-it-works": { title: "TidyFlow 如何运作", description: "从表格到外勤再到工资。", keywords: "保洁运营流程", canonicalPath: "/how-it-works" }
};

const byLang: Record<string, Record<SeoPage, SeoMeta>> = { en, pt, es, fr, de, pl, no, sv, it, ar, cn };

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
  cn: "zh-CN"
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
    "how-it-works": "how-it-works"
  };
  const page = pageMap[marketingPage] || "home";
  return langDict[page] || langDict.home;
}

export function getHtmlLang(language: string): string {
  return HREFLANG_MAP[language] || language;
}

/** Next.js Metadata API (server-safe — no document access). */
export function buildPageMetadata(
  page: SeoPage,
  language = "en",
  options?: { includeSiteVerification?: boolean }
) {
  const langDict = byLang[language] || byLang.en;
  const meta = langDict[page] || langDict.home;
  const path = meta.canonicalPath === "/" ? "" : meta.canonicalPath;
  const canonical = `${SITE_URL}${path}`;
  const htmlLang = getHtmlLang(language);

  const languages: Record<string, string> = { "x-default": canonical || SITE_URL };
  Object.entries(HREFLANG_MAP).forEach(([code, hreflang]) => {
    languages[hreflang] = path ? `${SITE_URL}${path}?lang=${code}` : `${SITE_URL}/?lang=${code}`;
  });

  return {
    metadataBase: new URL(SITE_URL),
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords.split(",").map((k) => k.trim()),
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
      languages,
    },
    openGraph: {
      type: "website" as const,
      url: canonical || SITE_URL,
      siteName: "TidyFlow",
      title: meta.title,
      description: meta.description,
      locale: htmlLang.replace("-", "_"),
      images: [
        {
          url: OG_IMAGE,
          width: 1200,
          height: 630,
          alt: "TidyFlow — Cleaning company software for field teams",
        },
      ],
    },
    twitter: {
      card: "summary_large_image" as const,
      site: "@tidyflowapp",
      creator: "@tidyflowapp",
      title: meta.title,
      description: meta.description,
      images: [OG_IMAGE],
    },
    ...(options?.includeSiteVerification
      ? {
          verification: {
            google: GOOGLE_SITE_VERIFICATION,
          },
        }
      : {}),
  };
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
  return map[clean] || "home";
}

export function pathForPage(pageId: string): string {
  if (pageId === "home" || pageId === "") return "/";
  if (pageId === "documentation") return "/documentation";
  return `/${pageId}`;
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
  const canonical = `${SITE_URL}${meta.canonicalPath === "/" ? "" : meta.canonicalPath}`;
  const htmlLang = getHtmlLang(language);

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
  setMeta("og:image:alt", "TidyFlow — Cleaning Operations Hub", "property");
  setMeta("og:locale", htmlLang.replace("-", "_"), "property");

  setMeta("twitter:card", "summary_large_image");
  setMeta("twitter:title", meta.title);
  setMeta("twitter:description", meta.description);
  setMeta("twitter:image", OG_IMAGE);
  setMeta("twitter:site", "@tidyflowapp");

  setLink("canonical", canonical);

  document.querySelectorAll('link[rel="alternate"][hreflang]').forEach((n) => n.remove());
  Object.entries(HREFLANG_MAP).forEach(([langCode, hreflang]) => {
    const link = document.createElement("link");
    link.rel = "alternate";
    link.hreflang = hreflang;
    link.href = `${SITE_URL}${meta.canonicalPath === "/" ? "" : meta.canonicalPath}?lang=${langCode}`;
    document.head.appendChild(link);
  });
  const xDefault = document.createElement("link");
  xDefault.rel = "alternate";
  xDefault.hreflang = "x-default";
  xDefault.href = canonical;
  document.head.appendChild(xDefault);

  injectJsonLd("seo-org", {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "TidyFlow",
    url: SITE_URL,
    logo: `${SITE_URL}/favicon.png`,
    email: "tidyflaw@gmail.com",
    description: meta.description,
    sameAs: []
  });

  injectJsonLd("seo-software", {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "TidyFlow",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web, iOS, Android",
    offers: {
      "@type": "Offer",
      price: "9",
      priceCurrency: "USD",
      description: "14-day free trial · Startup plan from $9/month"
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "1200",
      bestRating: "5"
    },
    featureList: [
      "Offline field app",
      "GPS geofenced time tracking",
      "Google Sheets two-way sync",
      "AI cleaner assignment",
      "Payroll from verified hours",
      "Client photo proof PDFs",
      "SOS lone-worker safety"
    ]
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
      "query-input": "required name=search_term_string"
    }
  });
}
