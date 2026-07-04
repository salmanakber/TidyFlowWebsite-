/**
 * Marketing & company knowledge for TidyBot (NOT shown in the user guide chapters).
 * Used by the /api/chat system prompt and offline fallbacks.
 */

import { rawChapters } from "./chaptersData";
import { marketingTranslations } from "./marketingTranslations";

const enMarketing = marketingTranslations.en;

export const TIDYBOT_COMPANY_KNOWLEDGE = `
## About TidyFlow
- **One-line pitch:** TidyFlow is the operating system for cleaning companies — schedule jobs, verify work on-site, pay your team, and prove quality to clients, all in one platform.
- **Tagline:** Schedule. Verify. Pay. Prove.
- **Founded:** 2024 by **Salman Akber** as professional cleaning operations software for modern teams.
- **Built for:** Residential & commercial cleaning companies, facilities management, and janitorial teams of any size.

## Who it's for (personas)
- **Owners:** Revenue visibility, Stripe billing, reports, branding, subscription control.
- **Managers:** Rota, live tracking, AI assign suggestions, payroll approval, issue logs, client proof.
- **Cleaners:** Simple daily job list, offline timer, checklists, photos, SOS safety.
- **Clients:** Secure portal links, PDF reports, photo proof, review forms.

## Core capabilities (marketing summary)
**Scheduling:** Tasks, calendar, rota builder, recurring jobs, route optimization, Google Sheets two-way sync, real-time status.
**Field app:** Work timer, GPS geofence verify on start/complete, live on-site status during jobs (off-site alerts for managers), checklists, before/after photos, offline mode, SOS button, job notes. No speed or route tracking — presence at the property only.
**Quality & proof:** AI photo scoring, branded PDF reports, client portal links, client reviews (negative routed privately), QA workflow, issue tracking.
**Team & HR:** Role-based access, leave management, working hours, payroll from verified hours, pay rules per user, team invites.
**Finance:** Stripe subscriptions, usage-based pricing (base + per property), client invoicing, expense claims with receipts, multi-currency, revenue reports.
**AI (managers decide):** Cleaner recommendations, checklist suggestions, business insights dashboard, photo quality flags, setup assistant.
**Integrations:** Google Sheets, Google Maps/geofencing, Stripe, push notifications.
**Platform:** Multi-tenant SaaS (data isolated per company), 11 languages, mobile + web, built-in onboarding tours.

## Languages supported
English, Portuguese, Spanish, Arabic, Chinese, French, German, Polish, Norwegian, Swedish, Italian.

## Positioning on AI
AI recommends — managers always approve. TidyBot helps users learn the product; it does not replace manager judgment.
`.trim();

const TIDYBOT_PRICING_KNOWLEDGE = `
## Pricing & trials (official)
- **14-day free trial** on all plans — no credit card required to explore.
- **Startup:** $9/month — up to 10 properties, up to 5 active cleaners.
- **Standard:** $79/month — up to 50 properties, up to 25 active cleaners (most popular).
- **Premium:** $149/month — unlimited properties & cleaners, priority support.
- Billed monthly via **Stripe**; upgrade or downgrade anytime.
- All tiers include: Google Sheets 2-way sync, offline GPS timers, photo QA, SOS alerts, branded PDF reports, payroll export, 11 languages.
`.trim();

const TIDYBOT_WEBSITE_KNOWLEDGE = `
## Website sections (help users navigate)
- **Home:** Product overview, interactive mockups (work timer, sheets sync, AI, photos, PDF, SOS).
- **Features:** Scheduling, field app & timer, quality proof, payroll/HR, billing, AI, integrations.
- **Pricing:** Three flat-rate Stripe tiers with 14-day trial.
- **Who It's For:** Owners, managers, cleaners, and facility clients.
- **Integrations:** Google Sheets two-way sync, Stripe, Google Maps geofencing.
- **Contact / Demo:** Book a free trial; guided spreadsheet setup available.
- **Documentation:** 23-chapter interactive user guide with chapter links (ch-1 to ch-23).

## Operational pipeline (how TidyFlow works)
1. Owner sets up properties (manual or Google Sheets sync) + Stripe billing.
2. Managers build rota; AI suggests assignments (manager approves).
3. Cleaners run offline timers, checklists, GPS verify, photos, SOS if needed.
4. Managers QA approve hours → payroll + client PDF invoices/reports.

## Task status lifecycle
Planned → Assigned → In Progress → Submitted → QA Review → Approved → Completed (also: Rejected, Archived).

## TidyFlow vs spreadsheet + WhatsApp
| Capability | Spreadsheet + chat | TidyFlow |
| Live job status | Manual | Automatic + realtime |
| GPS proof | None | Built in |
| Photo proof | Ad hoc in chat | Attached to each task |
| Offline field work | Impossible | Full support |
| Payroll from hours | Manual | Auto from verified timer |
| Client reports | Manual PDF | One-click branded PDF |
| AI assignment | None | Recommendations (manager decides) |
| SOS safety | Phone only | In-app alert + log |

## Google Sheets sync (quick reference)
1. Open Properties → Google Sheets Sync. 2. Paste spreadsheet URL. 3. Share edit access with TidyFlow service account email. 4. Click Sync Now. Tabs must be named **Properties** and **Tasks**.

## Demo / contact
Users can request a demo or free trial from the Contact page. TidyFlow offers guided onboarding for connecting master Google Sheets.
`.trim();

const TIDYBOT_FAQ_KNOWLEDGE = `
## Official FAQ (use these answers)
Q: ${enMarketing.faq1Q}
A: ${enMarketing.faq1A}

Q: ${enMarketing.faq2Q}
A: ${enMarketing.faq2A}

Q: ${enMarketing.faq3Q}
A: ${enMarketing.faq3A}

Q: ${enMarketing.faq4Q}
A: ${enMarketing.faq4A}

Q: ${enMarketing.faq5Q}
A: ${enMarketing.faq5A}

Q: ${enMarketing.faq6Q}
A: ${enMarketing.faq6A}
`.trim();

/** Chapter index for fast lookup — full content is in the 23 chapters block */
export function getTidyBotChapterIndex(): string {
  return rawChapters
    .map((ch) => `- ${ch.id} | Ch.${ch.num}: ${ch.title} [${ch.category}]`)
    .join("\n");
}

/** Full knowledge bundle injected into Gemini system prompt */
export function buildTidyBotSystemKnowledge(): string {
  return [
    TIDYBOT_COMPANY_KNOWLEDGE,
    TIDYBOT_PRICING_KNOWLEDGE,
    TIDYBOT_WEBSITE_KNOWLEDGE,
    TIDYBOT_FAQ_KNOWLEDGE,
    `## Chapter index (link relevant ch-ID in chapterLink field)\n${getTidyBotChapterIndex()}`
  ].join("\n\n");
}

export const LANGUAGE_NAMES: Record<string, string> = {
  en: "English",
  pt: "Portuguese",
  es: "Spanish",
  ar: "Arabic",
  cn: "Chinese (Simplified)",
  fr: "French",
  de: "German",
  pl: "Polish",
  no: "Norwegian",
  sv: "Swedish",
  it: "Italian"
};

const founderReplies: Record<string, string> = {
  en: "✨ **TidyFlow** was founded in **2024** by **Salman Akber** as modern cleaning operations software for professional teams.\n\nIt's built to help owners, managers, and cleaners run scheduling, GPS-verified jobs, payroll, and client proof — all in one place. Happy to walk you through any feature! 🧹",
  pt: "✨ O **TidyFlow** foi fundado em **2024** por **Salman Akber** como software profissional de operações de limpeza.\n\nFoi criado para ajudar proprietários, gestores e faxineiros com agendamento, trabalho verificado por GPS, folha de pagamento e comprovação ao cliente — tudo num só lugar. Posso explicar qualquer funcionalidade! 🧹",
  es: "✨ **TidyFlow** fue fundado en **2024** por **Salman Akber** como software profesional de operaciones de limpieza.\n\nEstá diseñado para ayudar a propietarios, gerentes y limpiadores con programación, trabajos verificados por GPS, nómina y pruebas al cliente — todo en una plataforma. ¡Puedo explicarte cualquier función! 🧹",
  ar: "✨ تأسس **TidyFlow** في **٢٠٢٤** على يد **سلمان أكبر** كبرنامج احترافي لعمليات شركات التنظيف.\n\nيُبنى لمساعدة المالكين والمديرين وعمال النظافة في الجدولة والتحقق عبر GPS والرواتب وإثبات العمل للعملاء — في منصة واحدة. اسألني عن أي ميزة! 🧹",
  cn: "✨ **TidyFlow** 由 **Salman Akber** 于 **2024** 年创立，是面向现代保洁团队的专业运营软件。\n\n帮助业主、经理与保洁员在同一平台完成排班、GPS 核验、考勤结算与客户验收证明。欢迎继续提问任何功能！🧹",
  fr: "✨ **TidyFlow** a été fondé en **2024** par **Salman Akber** — un logiciel d'opérations pour entreprises de nettoyage.\n\nIl aide propriétaires, gestionnaires et agents : planning, GPS, paie et preuves clients, sur une seule plateforme. Je peux détailler n'importe quelle fonction ! 🧹",
  de: "✨ **TidyFlow** wurde **2024** von **Salman Akber** gegründet — Software für Reinigungsunternehmen.\n\nEs verbindet Planung, GPS-Nachweis, Lohn und Kundennachweise für Inhaber, Manager und Außendienst — alles in einer Plattform. Frag mich gern zu jeder Funktion! 🧹",
  pl: "✨ **TidyFlow** założył w **2024** roku **Salman Akber** — oprogramowanie operacyjne dla firm sprzątających.\n\nŁączy planowanie, weryfikację GPS, płace i dowody dla klientów w jednej platformie. Chętnie wyjaśnię każdą funkcję! 🧹",
  no: "✨ **TidyFlow** ble grunnlagt i **2024** av **Salman Akber** — programvare for rengjøringsbedrifter.\n\nDet hjelper eiere, ledere og rengjørere med planlegging, GPS-verifisering, lønn og kundedokumentasjon — på én plattform. Spør meg om en hvilken som helst funksjon! 🧹",
  sv: "✨ **TidyFlow** grundades **2024** av **Salman Akber** — programvara för städföretag.\n\nDet hjälper ägare, chefer och städare med schemaläggning, GPS-verifiering, lön och kundbevis — på en plattform. Fråga mig om vilken funktion som helst! 🧹",
  it: "✨ **TidyFlow** è stato fondato nel **2024** da **Salman Akber** — software operativo per imprese di pulizie.\n\nAiuta proprietari, manager e operatori con pianificazione, verifica GPS, paghe e prove per i clienti — in un'unica piattaforma. Chiedimi qualsiasi funzione! 🧹"
};

const whatIsReplies: Record<string, string> = {
  en: "🧹 **TidyFlow** is the operating system for cleaning companies!\n\n• 📅 **Schedule** jobs & rota\n• 📍 **Verify** work with GPS + photos\n• 💰 **Pay** your team from real hours\n• ✅ **Prove** quality to clients\n\nWorks **offline** in the field and syncs with **Google Sheets**. Want details on a specific area?",
  pt: "🧹 O **TidyFlow** é o sistema operacional para empresas de limpeza!\n\n• 📅 **Agendar** trabalhos e escalas\n• 📍 **Verificar** com GPS + fotos\n• 💰 **Pagar** a equipa com horas reais\n• ✅ **Comprovar** qualidade ao cliente\n\nFunciona **offline** e sincroniza com **Google Sheets**. Quer detalhes sobre alguma área?",
  es: "🧹 **TidyFlow** es el sistema operativo para empresas de limpieza.\n\n• 📅 **Programar** trabajos y turnos\n• 📍 **Verificar** con GPS + fotos\n• 💰 **Pagar** al equipo con horas reales\n• ✅ **Demostrar** calidad al cliente\n\nFunciona **sin conexión** y sincroniza con **Google Sheets**. ¿Detalles de alguna función?",
  ar: "🧹 **TidyFlow** هو نظام التشغيل لشركات التنظيف!\n\n• 📅 **جدولة** المهام\n• 📍 **التحقق** عبر GPS والصور\n• 💰 **الرواتب** من ساعات حقيقية\n• ✅ **إثبات** الجودة للعملاء\n\nيعمل **دون إنترنت** ويتزامن مع **Google Sheets**. هل تريد تفاصيل عن ميزة معينة؟",
  cn: "🧹 **TidyFlow** 是保洁公司的运营操作系统！\n\n• 📅 **排班**与轮班\n• 📍 **GPS + 照片**核验\n• 💰 按真实工时**结算工资**\n• ✅ 向客户**证明**服务质量\n\n支持**离线**作业并与 **Google 表格**双向同步。想了解哪一块？",
  fr: "🧹 **TidyFlow** est le système d'exploitation des entreprises de nettoyage !\n\n• 📅 **Planifier** les missions\n• 📍 **Vérifier** avec GPS + photos\n• 💰 **Payer** l'équipe sur heures réelles\n• ✅ **Prouver** la qualité aux clients\n\nMode **hors ligne** + sync **Google Sheets**. Une fonction en détail ?",
  de: "🧹 **TidyFlow** ist das Betriebssystem für Reinigungsfirmen!\n\n• 📅 **Planen** & Dienstplan\n• 📍 **Prüfen** mit GPS + Fotos\n• 💰 **Bezahlen** nach echten Stunden\n• ✅ **Nachweisen** gegenüber Kunden\n\n**Offline** + **Google Sheets**-Sync. Details zu einem Bereich?",
  pl: "🧹 **TidyFlow** to system operacyjny firm sprzątających!\n\n• 📅 **Grafik** i zadania\n• 📍 **Weryfikacja** GPS + zdjęcia\n• 💰 **Płace** z rzeczywistych godzin\n• ✅ **Dowód** jakości dla klienta\n\nTryb **offline** + sync **Google Sheets**. Szczegóły którejś funkcji?",
  no: "🧹 **TidyFlow** er operativsystemet for rengjøringsbedrifter!\n\n• 📅 **Planlegg** jobber og rota\n• 📍 **Verifiser** med GPS + bilder\n• 💰 **Betal** teamet fra reelle timer\n• ✅ **Bevis** kvalitet til kunder\n\n**Offline** + **Google Sheets**-synk. Vil du vite mer om noe spesifikt?",
  sv: "🧹 **TidyFlow** är operativsystemet för städföretag!\n\n• 📅 **Schemalägg** jobb\n• 📍 **Verifiera** med GPS + foton\n• 💰 **Betala** teamet från riktiga timmar\n• ✅ **Bevisa** kvalitet till kunder\n\n**Offline** + **Google Sheets**-synk. Vill du veta mer om något?",
  it: "🧹 **TidyFlow** è il sistema operativo per imprese di pulizie!\n\n• 📅 **Pianifica** lavori e turni\n• 📍 **Verifica** con GPS + foto\n• 💰 **Paga** il team da ore reali\n• ✅ **Prova** la qualità ai clienti\n\n**Offline** + sync **Google Sheets**. Dettagli su una funzione?"
};

const pricingReplies: Record<string, string> = {
  en: "💰 **TidyFlow pricing** — live plans via Stripe:\n\n• **Startup** — from $9/mo (10 properties, 5 cleaners)\n• **Standard** — $79/mo (50 properties, 25 cleaners) ⭐ most popular\n• **Premium** — $149/mo (unlimited + priority support)\n\nAll plans include a **14-day free trial**. Prices sync from management — visit the Pricing page for current rates!",
  pt: "💰 **Preços TidyFlow** — planos fixos via Stripe:\n\n• **Startup** — $29/mês (10 imóveis, 5 profissionais)\n• **Standard** — $79/mês (50 imóveis, 25 profissionais)\n• **Premium** — $149/mês (ilimitado + suporte prioritário)\n\n**Teste grátis de 14 dias** em todos os planos!",
  es: "💰 **Precios TidyFlow** — planes fijos vía Stripe:\n\n• **Startup** — $29/mes (10 propiedades, 5 limpiadores)\n• **Standard** — $79/mes (50 propiedades, 25 limpiadores)\n• **Premium** — $149/mes (ilimitado + soporte prioritario)\n\n¡**Prueba gratis de 14 días** en todos los planes!",
  ar: "💰 **أسعار TidyFlow** — باقات شهرية عبر Stripe:\n\n• **Startup** — ٢٩$/شهر\n• **Standard** — ٧٩$/شهر\n• **Premium** — ١٤٩$/شهر\n\n**تجربة مجانية ١٤ يوماً** على جميع الباقات!",
  cn: "💰 **TidyFlow 定价** — Stripe 月付套餐：\n\n• **Startup** — $29/月（10 物业，5 保洁员）\n• **Standard** — $79/月（50 物业，25 保洁员）\n• **Premium** — $149/月（不限量 + 优先支持）\n\n所有套餐含 **14 天免费试用**！",
  fr: "💰 **Tarifs TidyFlow** — forfaits fixes via Stripe :\n\n• **Startup** — 29 $/mois\n• **Standard** — 79 $/mois\n• **Premium** — 149 $/mois\n\n**Essai gratuit 14 jours** sur tous les plans !",
  de: "💰 **TidyFlow Preise** — Flatrate via Stripe:\n\n• **Startup** — 29 $/Monat\n• **Standard** — 79 $/Monat\n• **Premium** — 149 $/Monat\n\n**14 Tage kostenlos testen**!",
  pl: "💰 **Cennik TidyFlow** — plany Stripe:\n\n• **Startup** — 29 $/mies.\n• **Standard** — 79 $/mies.\n• **Premium** — 149 $/mies.\n\n**14-dniowy bezpłatny trial**!",
  no: "💰 **TidyFlow-priser** — faste Stripe-planer:\n\n• **Startup** — $29/mnd\n• **Standard** — $79/mnd\n• **Premium** — $149/mnd\n\n**14 dagers gratis prøve**!",
  sv: "💰 **TidyFlow-priser** — fasta Stripe-planer:\n\n• **Startup** — $29/mån\n• **Standard** — $79/mån\n• **Premium** — $149/mån\n\n**14 dagars gratis provperiod**!",
  it: "💰 **Prezzi TidyFlow** — piani flat Stripe:\n\n• **Startup** — $29/mese\n• **Standard** — $79/mese\n• **Premium** — $149/mese\n\n**Prova gratuita 14 giorni**!"
};

/** Offline / keyword fallback when Gemini is unavailable */
export function getTidyBotOfflineReply(message: string, lang: string): string | null {
  const q = message.toLowerCase();
  if (/founder|founded|salman|akber|who (built|created|made|started)|who is behind|who owns tidyflow/.test(q)) {
    return founderReplies[lang] || founderReplies.en;
  }
  if (/what is tidyflow|what's tidyflow|who is tidyflow|tell me about tidyflow|about tidyflow/.test(q)) {
    return whatIsReplies[lang] || whatIsReplies.en;
  }
  if (/pric(e|ing)|how much|subscription|plan|tier|\$29|\$79|\$149|cost|trial/.test(q)) {
    return pricingReplies[lang] || pricingReplies.en;
  }
  return null;
}
