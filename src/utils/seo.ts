export type SeoPage = "home" | "documentation" | "features" | "pricing" | "integrations" | "contact" | "personas" | "how-it-works";

interface SeoMeta {
  title: string;
  description: string;
  keywords: string;
}

const en: Record<SeoPage, SeoMeta> = {
  home: {
    title: "TidyFlow — Cleaning Operations Hub | Scheduling, Sheets Sync & Field App",
    description:
      "TidyFlow is the all-in-one operations platform for cleaning companies. Offline-first field app, two-way Google Sheets sync, AI dispatch, payroll, and client proof — in 11 languages.",
    keywords: "cleaning software, operations hub, Google Sheets sync, field service app, payroll, scheduling"
  },
  documentation: {
    title: "TidyFlow User Guide — 23-Chapter Interactive Documentation",
    description:
      "Official TidyFlow documentation: setup, Google Sheets sync, cleaner app, SOS safety, payroll, offline mode, and AI features. Available in 11 languages with TidyBot AI assistant.",
    keywords: "TidyFlow docs, user guide, cleaning app documentation, Google Sheets integration"
  },
  features: {
    title: "TidyFlow Features — Scheduling, Field App, AI & Integrations",
    description: "Explore TidyFlow features: rota builder, cleaner mobile app, photo proof, PDF reports, Stripe billing, and live spreadsheet sync.",
    keywords: "cleaning app features, rota scheduling, field tracker, AI dispatch"
  },
  pricing: {
    title: "TidyFlow Pricing — Plans for Cleaning Businesses",
    description: "Transparent pricing for cleaning and facilities companies. Scale by properties and cleaners with Startup, Growth, and Enterprise tiers.",
    keywords: "cleaning software pricing, SaaS plans, operations platform cost"
  },
  integrations: {
    title: "TidyFlow Integrations — Google Sheets, Stripe & Maps",
    description: "Connect TidyFlow to Google Sheets for two-way property and task sync, plus Stripe payments and mapping tools.",
    keywords: "Google Sheets cleaning software, Stripe integration, spreadsheet sync"
  },
  contact: {
    title: "Book a TidyFlow Demo — Contact Sales",
    description: "Schedule a live demo of TidyFlow. Tell us about your team size, spreadsheet workflow, and operations goals.",
    keywords: "TidyFlow demo, contact sales, cleaning software trial"
  },
  personas: {
    title: "TidyFlow for Owners, Managers & Cleaners",
    description: "See how TidyFlow serves business owners, operations managers, and field cleaners with role-tailored workflows.",
    keywords: "cleaning business owner software, manager dashboard, cleaner app"
  },
  "how-it-works": {
    title: "How TidyFlow Works — From Spreadsheet to Field to Payroll",
    description: "Learn the TidyFlow workflow: sync your master sheet, dispatch jobs, track hours offline, approve payroll, and invoice clients.",
    keywords: "cleaning workflow, operations pipeline, field to office sync"
  }
};

const pt: Record<SeoPage, SeoMeta> = {
  home: {
    title: "TidyFlow — Hub de Operações de Limpeza | Agendamento e Sincronização",
    description:
      "TidyFlow é a plataforma completa para empresas de limpeza. App offline, sincronização Google Sheets, IA, folha de pagamento e comprovativos — em 11 idiomas.",
    keywords: "software de limpeza, operações, Google Sheets, app de campo"
  },
  documentation: {
    title: "Guia do Usuário TidyFlow — Documentação Interativa",
    description: "Documentação oficial TidyFlow: configuração, Google Sheets, app do faxineiro, SOS, folha de pagamento e modo offline.",
    keywords: "documentação TidyFlow, guia do usuário"
  },
  features: {
    title: "Recursos TidyFlow — Agendamento, App e Integrações",
    description: "Explore escalas, app móvel, fotos, PDFs, Stripe e sincronização de planilhas.",
    keywords: "recursos software limpeza"
  },
  pricing: {
    title: "Preços TidyFlow — Planos para Empresas de Limpeza",
    description: "Preços transparentes por propriedades e faxineiros.",
    keywords: "preços software limpeza"
  },
  integrations: {
    title: "Integrações TidyFlow — Google Sheets e Stripe",
    description: "Sincronização bidirecional com Google Sheets e pagamentos Stripe.",
    keywords: "integração Google Sheets"
  },
  contact: {
    title: "Agendar Demo TidyFlow",
    description: "Marque uma demonstração ao vivo do TidyFlow.",
    keywords: "demo TidyFlow"
  },
  personas: {
    title: "TidyFlow para Proprietários, Gestores e Faxineiros",
    description: "Fluxos por função para donos, gestores e equipas de campo.",
    keywords: "software limpeza por função"
  },
  "how-it-works": {
    title: "Como o TidyFlow Funciona",
    description: "Da planilha ao campo e à folha de pagamento.",
    keywords: "fluxo operações limpeza"
  }
};

const es: Record<SeoPage, SeoMeta> = {
  home: {
    title: "TidyFlow — Hub de Operaciones de Limpieza",
    description: "Plataforma integral para empresas de limpieza: app offline, Google Sheets, IA y nómina en 11 idiomas.",
    keywords: "software limpieza, operaciones, Google Sheets"
  },
  documentation: {
    title: "Guía de Usuario TidyFlow — Documentación Interactiva",
    description: "Documentación oficial: configuración, Sheets, app de limpieza, SOS y modo offline.",
    keywords: "documentación TidyFlow"
  },
  features: {
    title: "Funciones TidyFlow",
    description: "Programación, app móvil, fotos, PDFs e integraciones.",
    keywords: "funciones software limpieza"
  },
  pricing: {
    title: "Precios TidyFlow",
    description: "Planes transparentes para empresas de limpieza.",
    keywords: "precios software limpieza"
  },
  integrations: {
    title: "Integraciones TidyFlow",
    description: "Google Sheets, Stripe y herramientas de mapas.",
    keywords: "integración Google Sheets"
  },
  contact: {
    title: "Reservar Demo TidyFlow",
    description: "Agende una demostración en vivo.",
    keywords: "demo TidyFlow"
  },
  personas: {
    title: "TidyFlow para Propietarios, Gerentes y Limpiadores",
    description: "Flujos adaptados a cada rol.",
    keywords: "software limpieza roles"
  },
  "how-it-works": {
    title: "Cómo Funciona TidyFlow",
    description: "De la hoja de cálculo a la nómina.",
    keywords: "flujo operaciones limpieza"
  }
};

const fr: Record<SeoPage, SeoMeta> = {
  home: {
    title: "TidyFlow — Hub d'opérations de nettoyage",
    description: "Plateforme tout-en-un pour entreprises de nettoyage : app hors ligne, Google Sheets, IA et paie.",
    keywords: "logiciel nettoyage, opérations, Google Sheets"
  },
  documentation: {
    title: "Guide utilisateur TidyFlow — Documentation interactive",
    description: "Documentation officielle : configuration, Sheets, app terrain, SOS et mode hors ligne.",
    keywords: "documentation TidyFlow"
  },
  features: { title: "Fonctionnalités TidyFlow", description: "Planning, app mobile, photos et intégrations.", keywords: "fonctionnalités nettoyage" },
  pricing: { title: "Tarifs TidyFlow", description: "Plans pour entreprises de nettoyage.", keywords: "tarifs logiciel nettoyage" },
  integrations: { title: "Intégrations TidyFlow", description: "Google Sheets, Stripe et cartes.", keywords: "intégration Google Sheets" },
  contact: { title: "Réserver une démo TidyFlow", description: "Planifiez une démonstration.", keywords: "démo TidyFlow" },
  personas: { title: "TidyFlow pour propriétaires, gestionnaires et agents", description: "Parcours par rôle.", keywords: "logiciel nettoyage rôles" },
  "how-it-works": { title: "Comment fonctionne TidyFlow", description: "De la feuille de calcul à la paie.", keywords: "workflow nettoyage" }
};

const de: Record<SeoPage, SeoMeta> = {
  home: {
    title: "TidyFlow — Reinigungs-Operations-Hub",
    description: "All-in-one Plattform für Reinigungsunternehmen: Offline-App, Google Sheets, KI und Lohn.",
    keywords: "Reinigungssoftware, Google Sheets"
  },
  documentation: {
    title: "TidyFlow Benutzerhandbuch",
    description: "Offizielle Dokumentation: Einrichtung, Sheets, Außendienst-App, SOS und Offline-Modus.",
    keywords: "TidyFlow Dokumentation"
  },
  features: { title: "TidyFlow Funktionen", description: "Einsatzplanung, App, Fotos und Integrationen.", keywords: "Reinigungssoftware Funktionen" },
  pricing: { title: "TidyFlow Preise", description: "Transparente Pläne für Reinigungsfirmen.", keywords: "Preise Reinigungssoftware" },
  integrations: { title: "TidyFlow Integrationen", description: "Google Sheets, Stripe und Karten.", keywords: "Google Sheets Integration" },
  contact: { title: "TidyFlow Demo buchen", description: "Live-Demo vereinbaren.", keywords: "TidyFlow Demo" },
  personas: { title: "TidyFlow für Inhaber, Manager und Kräfte", description: "Rollenbasierte Workflows.", keywords: "Reinigungssoftware Rollen" },
  "how-it-works": { title: "So funktioniert TidyFlow", description: "Vom Tabellenblatt zur Lohnabrechnung.", keywords: "Reinigungs-Workflow" }
};

const pl: Record<SeoPage, SeoMeta> = {
  home: { title: "TidyFlow — Hub operacji sprzątania", description: "Platforma dla firm sprzątających: app offline, Google Sheets, AI i płace.", keywords: "oprogramowanie sprzątanie" },
  documentation: { title: "Przewodnik użytkownika TidyFlow", description: "Oficjalna dokumentacja: konfiguracja, Sheets, aplikacja terenowa.", keywords: "dokumentacja TidyFlow" },
  features: { title: "Funkcje TidyFlow", description: "Grafiki, aplikacja mobilna i integracje.", keywords: "funkcje sprzątanie" },
  pricing: { title: "Cennik TidyFlow", description: "Plany dla firm sprzątających.", keywords: "cennik oprogramowanie" },
  integrations: { title: "Integracje TidyFlow", description: "Google Sheets i Stripe.", keywords: "integracja Google Sheets" },
  contact: { title: "Zamów demo TidyFlow", description: "Umów demonstrację.", keywords: "demo TidyFlow" },
  personas: { title: "TidyFlow dla właścicieli, menedżerów i pracowników", description: "Workflow według ról.", keywords: "oprogramowanie sprzątanie role" },
  "how-it-works": { title: "Jak działa TidyFlow", description: "Od arkusza do listy płac.", keywords: "workflow sprzątanie" }
};

const no: Record<SeoPage, SeoMeta> = {
  home: { title: "TidyFlow — Driftssenter for rengjøring", description: "Alt-i-ett-plattform: offline-app, Google Sheets, AI og lønn.", keywords: "rengjøringsprogramvare" },
  documentation: { title: "TidyFlow brukerveiledning", description: "Offisiell dokumentasjon på 23 kapitler.", keywords: "TidyFlow dokumentasjon" },
  features: { title: "TidyFlow-funksjoner", description: "Planlegging, app og integrasjoner.", keywords: "funksjoner rengjøring" },
  pricing: { title: "TidyFlow-priser", description: "Planer for rengjøringsbedrifter.", keywords: "priser programvare" },
  integrations: { title: "TidyFlow-integrasjoner", description: "Google Sheets og Stripe.", keywords: "Google Sheets integrasjon" },
  contact: { title: "Bestill TidyFlow-demo", description: "Planlegg en live demo.", keywords: "demo TidyFlow" },
  personas: { title: "TidyFlow for eiere, ledere og rengjørere", description: "Rollebaserte arbeidsflyter.", keywords: "rengjøring roller" },
  "how-it-works": { title: "Slik fungerer TidyFlow", description: "Fra regneark til lønn.", keywords: "arbeidsflyt rengjøring" }
};

const sv: Record<SeoPage, SeoMeta> = {
  home: { title: "TidyFlow — Operationsnav för städning", description: "Allt-i-ett-plattform: offline-app, Google Sheets, AI och lön.", keywords: "städprogramvara" },
  documentation: { title: "TidyFlow användarhandbok", description: "Officiell dokumentation med 23 kapitel.", keywords: "TidyFlow dokumentation" },
  features: { title: "TidyFlow-funktioner", description: "Schemaläggning, app och integrationer.", keywords: "städfunktioner" },
  pricing: { title: "TidyFlow-priser", description: "Planer för städföretag.", keywords: "priser programvara" },
  integrations: { title: "TidyFlow-integrationer", description: "Google Sheets och Stripe.", keywords: "Google Sheets integration" },
  contact: { title: "Boka TidyFlow-demo", description: "Boka en livedemo.", keywords: "demo TidyFlow" },
  personas: { title: "TidyFlow för ägare, chefer och städare", description: "Rollbaserade flöden.", keywords: "städning roller" },
  "how-it-works": { title: "Så fungerar TidyFlow", description: "Från kalkylblad till lön.", keywords: "arbetsflöde städning" }
};

const it: Record<SeoPage, SeoMeta> = {
  home: { title: "TidyFlow — Hub operativo per pulizie", description: "Piattaforma completa: app offline, Google Sheets, IA e paghe.", keywords: "software pulizie" },
  documentation: { title: "Guida utente TidyFlow", description: "Documentazione ufficiale in 23 capitoli.", keywords: "documentazione TidyFlow" },
  features: { title: "Funzionalità TidyFlow", description: "Pianificazione, app mobile e integrazioni.", keywords: "funzionalità pulizie" },
  pricing: { title: "Prezzi TidyFlow", description: "Piani per imprese di pulizia.", keywords: "prezzi software" },
  integrations: { title: "Integrazioni TidyFlow", description: "Google Sheets e Stripe.", keywords: "integrazione Google Sheets" },
  contact: { title: "Prenota demo TidyFlow", description: "Pianifica una dimostrazione.", keywords: "demo TidyFlow" },
  personas: { title: "TidyFlow per proprietari, manager e operatori", description: "Flussi per ruolo.", keywords: "software pulizie ruoli" },
  "how-it-works": { title: "Come funziona TidyFlow", description: "Dal foglio di calcolo alle paghe.", keywords: "workflow pulizie" }
};

const ar: Record<SeoPage, SeoMeta> = {
  home: {
    title: "TidyFlow — مركز عمليات التنظيف",
    description: "منصة متكاملة لشركات التنظيف: تطبيق بدون إنترنت، مزامنة Google Sheets، ذكاء اصطناعي ورواتب.",
    keywords: "برنامج تنظيف, Google Sheets"
  },
  documentation: {
    title: "دليل مستخدم TidyFlow التفاعلي",
    description: "التوثيق الرسمي: الإعداد، Sheets، تطبيق الميدان، SOS والوضع دون اتصال.",
    keywords: "توثيق TidyFlow"
  },
  features: { title: "ميزات TidyFlow", description: "جدولة وتطبيق ميداني وتكاملات.", keywords: "ميزات برنامج تنظيف" },
  pricing: { title: "أسعار TidyFlow", description: "خطط لشركات التنظيف.", keywords: "أسعار برنامج تنظيف" },
  integrations: { title: "تكاملات TidyFlow", description: "Google Sheets وStripe.", keywords: "تكامل Google Sheets" },
  contact: { title: "احجز عرض TidyFlow", description: "جدولة عرض مباشر.", keywords: "عرض TidyFlow" },
  personas: { title: "TidyFlow للمالكين والمديرين وعمال النظافة", description: "سير عمل حسب الدور.", keywords: "برنامج تنظيف أدوار" },
  "how-it-works": { title: "كيف يعمل TidyFlow", description: "من الجدول إلى الرواتب.", keywords: "سير عمل تنظيف" }
};

const cn: Record<SeoPage, SeoMeta> = {
  home: {
    title: "TidyFlow — 保洁运营中枢 | 排班、表格同步与外勤 App",
    description: "TidyFlow 是保洁公司一体化运营平台：离线外勤 App、谷歌表格双向同步、AI 派单与考勤结算，支持 11 种语言。",
    keywords: "保洁软件, Google 表格同步, 外勤管理"
  },
  documentation: {
    title: "TidyFlow 交互式用户手册 — 23 章官方文档",
    description: "官方文档：配置、表格同步、外勤 App、SOS 安全、离线模式与 AI 功能。",
    keywords: "TidyFlow 文档, 用户手册"
  },
  features: { title: "TidyFlow 功能", description: "排班、外勤 App、照片质检与集成。", keywords: "保洁软件功能" },
  pricing: { title: "TidyFlow 定价", description: "保洁企业透明定价方案。", keywords: "保洁软件价格" },
  integrations: { title: "TidyFlow 集成", description: "Google Sheets、Stripe 与地图。", keywords: "谷歌表格集成" },
  contact: { title: "预约 TidyFlow 演示", description: "安排现场产品演示。", keywords: "TidyFlow 演示" },
  personas: { title: "TidyFlow 面向业主、经理与保洁员", description: "按角色定制工作流。", keywords: "保洁软件角色" },
  "how-it-works": { title: "TidyFlow 如何运作", description: "从表格到外勤再到工资。", keywords: "保洁运营流程" }
};

const byLang: Record<string, Record<SeoPage, SeoMeta>> = { en, pt, es, fr, de, pl, no, sv, it, ar, cn };

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
  if (language === "cn") return "zh-CN";
  if (language === "no") return "nb";
  return language;
}

export function applySeoMeta(meta: SeoMeta, language: string): void {
  document.title = meta.title;
  document.documentElement.lang = getHtmlLang(language);

  const setMeta = (name: string, content: string, attr: "name" | "property" = "name") => {
    let el = document.querySelector(`meta[${attr}="${name}"]`);
    if (!el) {
      el = document.createElement("meta");
      el.setAttribute(attr, name);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  };

  setMeta("description", meta.description);
  setMeta("keywords", meta.keywords);
  setMeta("og:title", meta.title, "property");
  setMeta("og:description", meta.description, "property");
  setMeta("og:type", "website", "property");
  setMeta("og:image", "/og-image.png", "property");
  setMeta("twitter:card", "summary_large_image");
  setMeta("twitter:title", meta.title);
  setMeta("twitter:description", meta.description);
  setMeta("twitter:image", "/og-image.png");
}
