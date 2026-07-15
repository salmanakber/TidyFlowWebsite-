/**
 * New TidyFlow feature pages — content + SEO for all supported marketing languages.
 * Standalone routes: /whats-new and /whats-new/[slug]
 */

import { NEW_FEATURE_LOCALES } from "./newFeatureLocales";

export const NEW_FEATURE_LANGS = [
  "en",
  "pt",
  "es",
  "fr",
  "de",
  "pl",
  "no",
  "sv",
  "it",
  "ar",
  "cn",
] as const;

export type NewFeatureLang = (typeof NEW_FEATURE_LANGS)[number];

export type NewFeatureSlug =
  | "task-chat"
  | "quickbooks"
  | "integrations-hub"
  | "self-serve-billing"
  | "plan-limits"
  | "revenue-ai"
  | "smart-addresses"
  | "offline-gps"
  | "ai-setup"
  | "announcements"
  | "supplies";

export interface FeatureCopy {
  pill: string;
  pillShort: string;
  headline: string;
  body: string;
  bullets: string[];
  cta: string;
  caption: string;
  seoTitle: string;
  seoDescription: string;
  keywords: string;
}

export interface NewFeatureDef {
  slug: NewFeatureSlug;
  /** Lucide icon name key used by the page component */
  icon: string;
  related: NewFeatureSlug[];
}

export const NEW_FEATURES: NewFeatureDef[] = [
  {
    slug: "task-chat",
    icon: "MessagesSquare",
    related: ["announcements", "ai-setup", "offline-gps"],
  },
  {
    slug: "quickbooks",
    icon: "BookOpen",
    related: ["integrations-hub", "revenue-ai", "self-serve-billing"],
  },
  {
    slug: "integrations-hub",
    icon: "Plug",
    related: ["quickbooks", "self-serve-billing", "smart-addresses"],
  },
  {
    slug: "self-serve-billing",
    icon: "CreditCard",
    related: ["plan-limits", "integrations-hub", "revenue-ai"],
  },
  {
    slug: "plan-limits",
    icon: "Gauge",
    related: ["self-serve-billing", "revenue-ai", "ai-setup"],
  },
  {
    slug: "revenue-ai",
    icon: "LineChart",
    related: ["quickbooks", "plan-limits", "ai-setup"],
  },
  {
    slug: "smart-addresses",
    icon: "MapPinned",
    related: ["offline-gps", "integrations-hub", "ai-setup"],
  },
  {
    slug: "offline-gps",
    icon: "WifiOff",
    related: ["smart-addresses", "task-chat", "ai-setup"],
  },
  {
    slug: "ai-setup",
    icon: "Sparkles",
    related: ["task-chat", "plan-limits", "revenue-ai"],
  },
  {
    slug: "announcements",
    icon: "Megaphone",
    related: ["task-chat", "supplies", "ai-setup"],
  },
  {
    slug: "supplies",
    icon: "Package",
    related: ["announcements", "task-chat", "plan-limits"],
  },
];

export const NEW_FEATURE_SLUGS = NEW_FEATURES.map((f) => f.slug);

/** Shared chrome + FAQ + index copy per language */
export interface WhatsNewUiCopy {
  eyebrow: string;
  indexTitle: string;
  indexSubtitle: string;
  stripTitle: string;
  viewAll: string;
  backToWhatsNew: string;
  backToFeatures: string;
  relatedTitle: string;
  ctaTrial: string;
  ctaDocs: string;
  changelogTitle: string;
  faqTitle: string;
  faqs: { q: string; a: string }[];
  changelog: string[];
}

const enFeatures: Record<NewFeatureSlug, FeatureCopy> = {
  "task-chat": {
    pill: "Task chat — Message your team on every job, not in WhatsApp",
    pillShort: "Task chat",
    headline: "Stop losing job instructions in WhatsApp",
    body: "Every cleaning task has its own team thread. Managers and assigned cleaners chat in context — with full history, real-time delivery, and voice messages when typing isn’t practical.",
    bullets: [
      "Per-task messaging (not another group chat)",
      "Instant updates when online",
      "Voice notes from the field",
      "Works alongside notifications and announcements",
    ],
    cta: "Replace scattered chats with one thread per job.",
    caption: "Chat on the job — text and voice",
    seoTitle: "Task Team Chat for Cleaning Jobs | Voice Notes | TidyFlow",
    seoDescription:
      "Per-task team chat for cleaning companies. Keep job instructions, updates, and voice notes in one thread — not lost in WhatsApp groups.",
    keywords:
      "cleaning team chat, task messaging cleaners, replace WhatsApp cleaning, voice notes field cleaners, janitorial communication app",
  },
  quickbooks: {
    pill: "QuickBooks sync — Client invoices flow straight into your books",
    pillShort: "QuickBooks sync",
    headline: "Client invoices in TidyFlow → automatically in QuickBooks",
    body: "Connect QuickBooks Online once from the Integrations screen. TidyFlow syncs client invoices with customers, line items, and totals — so your bookkeeper doesn’t re-type every job.",
    bullets: [
      "One-tap OAuth connect",
      "Sync single invoices or bulk-select pending",
      "Optional sync on create, send, or mark-paid",
      "Payroll bill sync for approved runs (plan-dependent)",
      "Activity log shows what synced and when",
    ],
    cta: "Operations and accounting finally speak the same language.",
    caption: "Invoices sync to QuickBooks automatically",
    seoTitle: "QuickBooks Integration for Cleaning Companies | TidyFlow",
    seoDescription:
      "Sync TidyFlow client invoices to QuickBooks Online with customers, line items, and totals. OAuth connect, bulk sync, and automation rules for janitorial teams.",
    keywords:
      "QuickBooks cleaning software, invoice sync QuickBooks Online, janitorial accounting integration, cleaning company QuickBooks",
  },
  "integrations-hub": {
    pill: "Integrations hub — See Sheets, QuickBooks & Stripe in one place",
    pillShort: "Integrations hub",
    headline: "One screen for everything you’ve connected",
    body: "Owners see Google Sheets, QuickBooks, Stripe, and sync health in a single Integrations hub — with recent activity and connection status at a glance.",
    bullets: [
      "Google Sheets — live two-way sync",
      "QuickBooks — invoice & payroll automation",
      "Quick links to fix or reconnect",
    ],
    cta: "No more digging through settings to see what’s linked.",
    caption: "All connections in one place",
    seoTitle: "Integrations Hub — Sheets, QuickBooks & Stripe | TidyFlow",
    seoDescription:
      "Manage Google Sheets, QuickBooks, and Stripe connections from one TidyFlow Integrations hub. See sync health, activity, and reconnect in seconds.",
    keywords:
      "cleaning software integrations, Google Sheets sync, QuickBooks Stripe hub, janitorial integrations dashboard",
  },
  "self-serve-billing": {
    pill: "Self-serve billing — Change plan or cancel from the app",
    pillShort: "Self-serve billing",
    headline: "Manage your TidyFlow plan without emailing support",
    body: "Owners and company admins handle subscription billing inside the app: view usage, change plan, start a trial, or cancel — with clear messaging for trial vs paid cancellation.",
    bullets: [
      "Current plan, next bill date, and billing history",
      "Upgrade immediately; schedule downgrades for next period",
      "Cancel free trial anytime (no charge)",
      "Cancel paid plan at period end via Stripe",
      "Email + in-app alerts for payments, trials, and renewals",
    ],
    cta: "Transparent SaaS billing your team controls.",
    caption: "See plan usage before you hit limits",
    seoTitle: "Self-Serve Billing & Subscriptions | TidyFlow",
    seoDescription:
      "Change plan, start a trial, or cancel TidyFlow from the app. Transparent Stripe billing with usage history for cleaning company owners.",
    keywords:
      "TidyFlow billing, cancel subscription, change plan SaaS cleaning, self-serve Stripe billing",
  },
  "plan-limits": {
    pill: "Plan limits — Live usage meters for team, AI & PDFs",
    pillShort: "Plan limits",
    headline: "Know exactly what your plan includes — before you hit a wall",
    body: "TidyFlow shows live usage for properties, cleaners, managers, and monthly quotas for AI, invoices, photo verification, and PDFs. Limits come from your plan; monthly quotas reset each billing cycle.",
    bullets: [
      "Fixed caps: team size & property count",
      "Monthly quotas: AI ops, invoices, photo AI, PDFs",
      "In-app warnings as you approach limits",
      "Upgrade path when you need more capacity",
    ],
    cta: "Scale from Startup to Premium without surprises.",
    caption: "See plan usage before you hit limits",
    seoTitle: "Plan Limits & Usage Meters for Cleaning SaaS | TidyFlow",
    seoDescription:
      "Track properties, cleaners, AI, invoices, and PDF quotas against your TidyFlow plan. Live meters and warnings before you hit limits.",
    keywords:
      "SaaS usage meters, cleaning software plan limits, AI quota cleaning app, TidyFlow pricing limits",
  },
  "revenue-ai": {
    pill: "Revenue AI — Ask AI why margins moved this month",
    pillShort: "Revenue AI",
    headline: "See profit — then ask AI what changed",
    body: "The owner Revenue dashboard shows net profit, cash collected, expenses, and margins by property or client. Tap Analyze with AI for a plain-language report on what drove the numbers.",
    bullets: [
      "Custom date range reporting",
      "Paid vs outstanding invoices",
      "Property and client margin breakdown",
      "AI explains risks, costs, and cash flow in seconds",
    ],
    cta: "CFO-style insight without a finance hire.",
    caption: "AI explains your profit and margins",
    seoTitle: "Revenue Reports + AI Profit Analysis | TidyFlow",
    seoDescription:
      "Owner revenue dashboard for cleaning companies: net profit, margins by property, and AI analysis that explains what changed in plain language.",
    keywords:
      "cleaning company revenue report, profit margins janitorial, AI financial analysis cleaning, owner dashboard cleaning software",
  },
  "smart-addresses": {
    pill: "Smarter addresses — Autocomplete + map pins by country",
    pillShort: "Smart addresses",
    headline: "Add properties faster — with the right country and map pin",
    body: "Set your company country once. Address search autocomplete follows that region, and new properties (including imports from Google Sheets) geocode automatically for GPS, maps, and routing.",
    bullets: [
      "Country-scoped address suggestions",
      "Auto lat/long on create and sheet sync",
      "Correct pins for geofence and live tracking",
      "Owner sets country in company profile",
    ],
    cta: "Less typing, fewer wrong addresses, better GPS proof.",
    caption: "Add properties with country-smart search",
    seoTitle: "Smart Address Autocomplete & Map Pins | TidyFlow",
    seoDescription:
      "Country-scoped address autocomplete and automatic geocoding for cleaning properties. Better map pins for GPS geofencing and routing.",
    keywords:
      "property address autocomplete, geocode cleaning properties, country address search, GPS map pins janitorial",
  },
  "offline-gps": {
    pill: "Offline GPS — Location proof even in basements",
    pillShort: "Offline GPS",
    headline: "GPS proof that works underground",
    body: "When signal drops, cleaners keep working. Location pings queue locally and sync when they’re back online — so managers still get a trail for active jobs.",
    bullets: [
      "No interruption to timer or photos",
      "Automatic sync when connected",
      "Complements on-site verification flags",
    ],
    cta: "Low-signal buildings are no longer a blind spot.",
    caption: "Location proof that syncs when signal returns",
    seoTitle: "Offline GPS Queue for Low-Signal Sites | TidyFlow",
    seoDescription:
      "Queue GPS location pings offline in basements and towers. TidyFlow syncs proof when cleaners reconnect — without stopping timers or photos.",
    keywords:
      "offline GPS cleaning app, basement geofencing, low signal location tracking cleaners, offline location queue",
  },
  "ai-setup": {
    pill: "AI setup — New jobs configured in under a minute",
    pillShort: "AI setup",
    headline: "New jobs configured in under a minute",
    body: "When a manager opens a new or in-progress task, TidyFlow offers a guided setup: manual checklist or AI-assisted suggestions for checklists and assignment. Finished or submitted jobs skip the prompt automatically.",
    bullets: [
      "AI checklist suggestions from property context",
      "Quick assign recommendations",
      "Only shows when the job still needs setup",
      "Managers always confirm — AI never auto-assigns",
    ],
    cta: "Less admin time on every new job.",
    caption: "AI helps set up new jobs in seconds",
    seoTitle: "TidyFlow AI Setup Assistant for New Cleaning Jobs",
    seoDescription:
      "Guided AI setup for new cleaning tasks: checklist suggestions and assign recommendations. Managers confirm — AI never auto-assigns.",
    keywords:
      "AI checklist cleaning, AI job setup janitorial, cleaning task assistant, TidyFlow AI setup",
  },
  announcements: {
    pill: "Company announcements — Broadcast to your whole team",
    pillShort: "Announcements",
    headline: "Broadcast to your whole team in one tap",
    body: "Owners and managers send company-wide announcements inside TidyFlow — policy updates, weather alerts, holiday schedules — without a separate email blast.",
    bullets: [
      "Reach all cleaners in the app",
      "Complements per-task chat",
      "Keeps ops communication in one platform",
    ],
    cta: "One message, entire team, zero WhatsApp forwards.",
    caption: "Broadcast to your entire team",
    seoTitle: "Company Announcements for Cleaning Teams | TidyFlow",
    seoDescription:
      "Send company-wide announcements to cleaners inside TidyFlow — policies, weather, holidays — without WhatsApp forwards or email blasts.",
    keywords:
      "cleaning team announcements, company broadcast cleaners, replace WhatsApp ops messaging, janitorial internal comms",
  },
  supplies: {
    pill: "Supplies tracking — Know what was used on each job",
    pillShort: "Supplies",
    headline: "Know what was used on each job",
    body: "Maintain a company supply catalog and log consumption from the field or office. Managers get low-stock awareness tied to real job usage.",
    bullets: [
      "Catalog with stock levels",
      "Log usage per task",
      "Cleaner-friendly mobile entry",
    ],
    cta: "Stop guessing how much chemical each property uses.",
    caption: "Log supply usage per job from the field",
    seoTitle: "Cleaning Supplies Tracking per Job | TidyFlow",
    seoDescription:
      "Track cleaning supplies with a company catalog and per-job usage logs from the field. Low-stock awareness tied to real consumption.",
    keywords:
      "cleaning supplies tracking, chemical usage per job, janitorial inventory app, field supply logging",
  },
};

const enUi: WhatsNewUiCopy = {
  eyebrow: "New in TidyFlow",
  indexTitle: "What’s new in TidyFlow",
  indexSubtitle:
    "Task chat, QuickBooks, Revenue AI, self-serve billing, smarter addresses, and more — built for real cleaning operations.",
  stripTitle: "What’s new",
  viewAll: "View all new features",
  backToWhatsNew: "Back to What’s New",
  backToFeatures: "All features",
  relatedTitle: "Related features",
  ctaTrial: "Start free trial",
  ctaDocs: "Open user guide",
  changelogTitle: "Changelog highlights",
  faqTitle: "Questions about the new features",
  faqs: [
    {
      q: "Do we still need WhatsApp?",
      a: "For clients, maybe — but internal job coordination moves to per-task chat inside TidyFlow.",
    },
    {
      q: "Does QuickBooks replace TidyFlow invoicing?",
      a: "No. You create invoices in TidyFlow; they sync to QuickBooks for your accountant.",
    },
    {
      q: "Can I cancel without calling support?",
      a: "Yes. Owners manage trial and paid subscriptions from the Billing screen.",
    },
    {
      q: "Do monthly AI limits reset?",
      a: "Yes — monthly quotas reset each Stripe billing cycle (AI, invoices, photo AI, PDFs).",
    },
    {
      q: "Is chat included on all plans?",
      a: "Core messaging is part of the platform; some advanced AI and accounting features vary by plan — see Pricing.",
    },
  ],
  changelog: [
    "Task team chat with voice messages",
    "QuickBooks Online invoice sync + automation rules",
    "Integrations hub for Sheets, QuickBooks & Stripe",
    "Self-serve billing — plan change & cancellation in-app",
    "Usage meters for plan limits and monthly AI/PDF quotas",
    "Revenue AI analysis on owner dashboard",
    "Smart address autocomplete by company country",
    "Offline GPS queue for low-signal sites",
    "TidyFlow AI setup on new tasks only",
    "Company announcements broadcast",
    "Supplies logging per job",
    "Public pricing API for website integration",
  ],
};

export function getWhatsNewUi(lang: string): WhatsNewUiCopy {
  const pack = NEW_FEATURE_LOCALES[lang] || NEW_FEATURE_LOCALES.en;
  return pack.ui as WhatsNewUiCopy;
}

export function getFeatureCopy(slug: NewFeatureSlug, lang: string): FeatureCopy {
  const pack = NEW_FEATURE_LOCALES[lang] || NEW_FEATURE_LOCALES.en;
  return (pack.features[slug] || NEW_FEATURE_LOCALES.en.features[slug]) as FeatureCopy;
}

export function getFeatureBySlug(slug: string): NewFeatureDef | undefined {
  return NEW_FEATURES.find((f) => f.slug === slug);
}

export function getAllFeatureSlugs(): NewFeatureSlug[] {
  return NEW_FEATURE_SLUGS;
}

export function getWhatsNewIndexSeo(lang: string): {
  title: string;
  description: string;
  keywords: string;
} {
  const pack = NEW_FEATURE_LOCALES[lang] || NEW_FEATURE_LOCALES.en;
  return pack.indexSeo;
}

/** Re-export EN as fallback base for locale builder scripts */
export const EN_FEATURE_COPY = enFeatures;
export const EN_WHATS_NEW_UI = enUi;
