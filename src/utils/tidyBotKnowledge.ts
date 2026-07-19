/**
 * Marketing & company knowledge for TidyBot (NOT shown in the user guide chapters).
 * Used by the /api/chat system prompt and offline fallbacks.
 *
 * Keep in sync with the marketing site: pages, What's New features, pricing FAQ.
 */

import { NEW_FEATURES, getFeatureCopy, getWhatsNewUi } from "../content/newFeatures";
import { rawChapters } from "./chaptersData";
import { marketingTranslations } from "./marketingTranslations";

const enMarketing = marketingTranslations.en;

export const TIDYBOT_COMPANY_KNOWLEDGE = `
## About TidyFlow
- **One-line pitch:** TidyFlow is the operating system for cleaning companies — schedule jobs, verify work on-site, pay your team, and prove quality to clients, all in one platform.
- **Tagline:** Schedule. Verify. Pay. Prove.
- **Founded:** 2024 by **Salman Akber** as professional cleaning operations software for modern teams.
- **Built for:** Residential & commercial cleaning companies, facilities management, and janitorial teams of any size.
- **Website:** https://tidyflowapp.com
- **LinkedIn:** https://www.linkedin.com/company/tidyflowapp
- **Facebook:** https://www.facebook.com/tidyflowapp (@tidyflowapp)

## Who it's for (personas)
- **Owners:** Revenue visibility, Stripe billing, reports, branding, subscription control, Integrations hub, QuickBooks sync, Revenue AI.
- **Managers:** Rota, live tracking, AI assign suggestions, payroll approval, issue logs, client proof, task team chat, announcements, AI job setup.
- **Cleaners:** Simple daily job list, offline timer, checklists, photos, SOS safety, voice notes in task chat, supplies logging, offline GPS queue.
- **Clients:** Secure portal links, PDF reports, photo proof, review forms.

## Core capabilities (marketing summary)
**Scheduling:** Tasks, calendar, rota builder, recurring jobs, route optimization, Google Sheets two-way sync, real-time status, AI setup assistant on new jobs.
**Field app:** Work timer, GPS geofence verify on start/complete, live on-site status (off-site alerts), checklists, before/after photos, offline mode, offline GPS ping queue, SOS button, job notes, per-task chat + voice notes. No speed or route tracking — presence at the property only.
**Quality & proof:** AI photo scoring, branded PDF reports, client portal links, client reviews (negative routed privately), QA workflow, issue tracking.
**Team & HR:** Role-based access, leave management, working hours, payroll from verified hours, pay rules per user, team invites, company announcements.
**Finance:** Stripe subscriptions (self-serve plan change/cancel), plan usage meters, client invoicing, QuickBooks Online invoice sync, expense claims with receipts, multi-currency, Revenue dashboard + AI analysis.
**AI (managers decide):** Cleaner recommendations, checklist suggestions, business insights / Revenue AI, photo quality flags, setup assistant. AI never auto-assigns.
**Supplies:** Company supply catalog, per-job usage logging from field or office, low-stock awareness.
**Integrations hub:** Google Sheets (two-way), QuickBooks Online, Stripe, Google Maps/geofencing — connection status + activity in one screen.
**Platform:** Multi-tenant SaaS (data isolated per company), 11 languages, mobile + web, built-in onboarding tours, smart address autocomplete by company country.

## Languages supported
English, Portuguese, Spanish, Arabic, Chinese, French, German, Polish, Norwegian, Swedish, Italian.

## Positioning on AI
AI recommends — managers always approve. TidyBot helps users learn the product; it does not replace manager judgment.
`.trim();

const TIDYBOT_PRICING_KNOWLEDGE = `
## Pricing & trials (official — always send users to /pricing for live rates)
- **14-day free trial** on all plans — no credit card required to explore.
- Plans: **Startup**, **Standard** (most popular), **Premium** — billed monthly via **Stripe**.
- Live prices & limits sync from management (typical fallback: Startup from **$9/mo**, Standard **$79/mo**, Premium **$149/mo** — confirm on Pricing page).
- Limits include properties, cleaners/managers, and monthly quotas for AI ops, invoices, photo AI, PDFs (reset each Stripe billing cycle).
- **Self-serve billing:** owners/admins change plan, start trial, or cancel in-app (trial cancel anytime; paid cancel at period end via Stripe).
- Upgrade immediately; downgrades schedule for next period.
- All tiers include core ops: Sheets sync, offline field app, GPS proof, photo QA, SOS, PDFs, payroll export, 11 languages. Advanced AI / accounting features may vary by plan.
`.trim();

const TIDYBOT_WEBSITE_KNOWLEDGE = `
## Full website map (tidyflowapp.com — help users navigate)
- **/** Home — hero, offline/GPS/Sheets/AI/photo/SOS showcases, What's New strip, pillars, FAQ, CTA.
- **/features** — tabbed product features (scheduling, field, quality, payroll, finance, AI, integrations).
- **/whats-new** — changelog + FAQ for latest releases; each feature has a deep page.
- **/whats-new/{slug}** — standalone feature explainers (see What's New knowledge below).
- **/pricing** — live Startup / Standard / Premium plans + trial.
- **/how-it-works** — spreadsheet → field → payroll pipeline.
- **/personas** — owners, managers, cleaners, facility clients.
- **/integrations** — Sheets, QuickBooks, Stripe, Maps / Integrations hub.
- **/contact** — book demo / 14-day free trial (no card required).
- **/documentation** — 23-chapter interactive user guide + TidyBot.
- **/blog** (+ individual posts) — cleaning ops education content.
- **/careers** — open roles at TidyFlow.
- App stores: iOS App Store + Google Play (offline field app).

## Operational pipeline (how TidyFlow works)
1. Owner sets up properties (manual, smart addresses, or Google Sheets sync) + Stripe billing / company country.
2. Managers build rota; AI suggests assignments & checklists (manager approves). New jobs can use AI setup assistant.
3. Cleaners run offline timers, checklists, GPS verify (offline queue if no signal), photos, task chat/voice notes, supplies logs, SOS if needed.
4. Managers QA approve hours → payroll + client invoices/PDF reports; invoices can sync to QuickBooks.
5. Owners review Revenue dashboard + optional AI analysis; manage plan/usage in Billing.

## Task status lifecycle
Planned → Assigned → In Progress → Submitted → QA Review → Approved → Completed (also: Rejected, Archived).

## TidyFlow vs spreadsheet + WhatsApp
| Capability | Spreadsheet + chat | TidyFlow |
| Live job status | Manual | Automatic + realtime |
| Per-job messaging | Group chat chaos | Task team chat + voice |
| GPS proof | None | Built in (+ offline queue) |
| Photo proof | Ad hoc in chat | Attached to each task |
| Offline field work | Impossible | Full support |
| Payroll from hours | Manual | Auto from verified timer |
| Client reports | Manual PDF | One-click branded PDF |
| Accounting | Re-type invoices | QuickBooks sync |
| AI assignment | None | Recommendations (manager decides) |
| SOS safety | Phone only | In-app alert + log |
| Team broadcast | WhatsApp forwards | Company announcements |

## Google Sheets sync (quick reference)
1. Open Properties → Google Sheets Sync. 2. Paste spreadsheet URL. 3. Share edit access with TidyFlow service account email. 4. Click Sync Now. Tabs must be named **Properties** and **Tasks**. Addresses geocode using company country.

## Demo / contact
Users can request a demo or free trial from **/contact**. Guided onboarding for connecting master Google Sheets is available.
`.trim();

/** Build What's New knowledge from the same source as marketing pages (EN). */
export function buildWhatsNewKnowledge(): string {
  const ui = getWhatsNewUi("en");
  const lines: string[] = [
    "## What's New in TidyFlow (latest product releases)",
    `Index page: https://tidyflowapp.com/whats-new — ${ui.indexSubtitle}`,
    "",
    "When users ask about new features, WhatsApp replacement, QuickBooks, billing, Revenue AI, addresses, offline GPS, announcements, or supplies — use this section and link the matching /whats-new/{slug} URL.",
    "",
  ];

  for (const feature of NEW_FEATURES) {
    const copy = getFeatureCopy(feature.slug, "en");
    lines.push(`### ${copy.pillShort} → /whats-new/${feature.slug}`);
    lines.push(`**Headline:** ${copy.headline}`);
    lines.push(copy.body);
    for (const b of copy.bullets) lines.push(`- ${b}`);
    lines.push(`**CTA:** ${copy.cta}`);
    lines.push("");
  }

  lines.push("### What's New FAQ");
  for (const faq of ui.faqs) {
    lines.push(`Q: ${faq.q}`);
    lines.push(`A: ${faq.a}`);
    lines.push("");
  }

  lines.push("### Changelog highlights");
  ui.changelog.forEach((item, i) => lines.push(`${i + 1}. ${item}`));

  return lines.join("\n").trim();
}

const TIDYBOT_FAQ_KNOWLEDGE = `
## Official homepage FAQ (use these answers)
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
    buildWhatsNewKnowledge(),
    TIDYBOT_FAQ_KNOWLEDGE,
    `## Chapter index (link relevant ch-ID in chapterLink field)\n${getTidyBotChapterIndex()}`,
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
  it: "Italian",
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
  it: "✨ **TidyFlow** è stato fondato nel **2024** da **Salman Akber** — software operativo per imprese di pulizie.\n\nAiuta proprietari, manager e operatori con pianificazione, verifica GPS, paghe e prove per i clienti — in un'unica piattaforma. Chiedimi qualsiasi funzione! 🧹",
};

const whatIsReplies: Record<string, string> = {
  en: "🧹 **TidyFlow** is the operating system for cleaning companies!\n\n• 📅 **Schedule** jobs & rota\n• 📍 **Verify** work with GPS + photos\n• 💰 **Pay** your team from real hours\n• ✅ **Prove** quality to clients\n\nAlso: **task chat**, **QuickBooks**, **Revenue AI**, offline GPS, and more — see **/whats-new**.\n\nWorks **offline** and syncs with **Google Sheets**. Want details on a specific area?",
  pt: "🧹 O **TidyFlow** é o sistema operacional para empresas de limpeza!\n\n• 📅 **Agendar** trabalhos e escalas\n• 📍 **Verificar** com GPS + fotos\n• 💰 **Pagar** a equipa com horas reais\n• ✅ **Comprovar** qualidade ao cliente\n\nTambém: **chat por tarefa**, **QuickBooks**, **Revenue AI** e mais — veja **/whats-new**.\n\nFunciona **offline** e sincroniza com **Google Sheets**. Quer detalhes?",
  es: "🧹 **TidyFlow** es el sistema operativo para empresas de limpieza.\n\n• 📅 **Programar** trabajos y turnos\n• 📍 **Verificar** con GPS + fotos\n• 💰 **Pagar** al equipo con horas reales\n• ✅ **Demostrar** calidad al cliente\n\nTambién: **chat por tarea**, **QuickBooks**, **Revenue AI** — ver **/whats-new**.\n\nFunciona **sin conexión** y sincroniza con **Google Sheets**.",
  ar: "🧹 **TidyFlow** هو نظام التشغيل لشركات التنظيف!\n\n• 📅 **جدولة** المهام\n• 📍 **التحقق** عبر GPS والصور\n• 💰 **الرواتب** من ساعات حقيقية\n• ✅ **إثبات** الجودة للعملاء\n\nويشمل أيضاً دردشة المهام وQuickBooks وRevenue AI — راجع **/whats-new**.",
  cn: "🧹 **TidyFlow** 是保洁公司的运营操作系统！\n\n• 📅 **排班**与轮班\n• 📍 **GPS + 照片**核验\n• 💰 按真实工时**结算工资**\n• ✅ 向客户**证明**服务质量\n\n还有任务聊天、QuickBooks、Revenue AI 等 — 见 **/whats-new**。",
  fr: "🧹 **TidyFlow** est le système d'exploitation des entreprises de nettoyage !\n\n• 📅 **Planifier** • 📍 **Vérifier** GPS + photos • 💰 **Payer** • ✅ **Prouver**\n\nAussi : chat par tâche, QuickBooks, Revenue AI — voir **/whats-new**.",
  de: "🧹 **TidyFlow** ist das Betriebssystem für Reinigungsfirmen!\n\n• 📅 **Planen** • 📍 **GPS + Fotos** • 💰 **Bezahlen** • ✅ **Nachweisen**\n\nNeu: Task-Chat, QuickBooks, Revenue AI — **/whats-new**.",
  pl: "🧹 **TidyFlow** to system operacyjny firm sprzątających!\n\n• 📅 **Grafik** • 📍 **GPS + zdjęcia** • 💰 **Płace** • ✅ **Dowód**\n\nNowości: czat zadań, QuickBooks, Revenue AI — **/whats-new**.",
  no: "🧹 **TidyFlow** er operativsystemet for rengjøringsbedrifter!\n\n• 📅 **Planlegg** • 📍 **GPS + bilder** • 💰 **Lønn** • ✅ **Bevis**\n\nNytt: oppgavechat, QuickBooks, Revenue AI — **/whats-new**.",
  sv: "🧹 **TidyFlow** är operativsystemet för städföretag!\n\n• 📅 **Schemalägg** • 📍 **GPS + foton** • 💰 **Lön** • ✅ **Bevisa**\n\nNytt: uppgiftschatt, QuickBooks, Revenue AI — **/whats-new**.",
  it: "🧹 **TidyFlow** è il sistema operativo per imprese di pulizie!\n\n• 📅 **Pianifica** • 📍 **GPS + foto** • 💰 **Paga** • ✅ **Prova**\n\nNovità: chat per task, QuickBooks, Revenue AI — **/whats-new**.",
};

const pricingReplies: Record<string, string> = {
  en: "💰 **TidyFlow pricing** — live plans via Stripe:\n\n• **Startup** — from **$9/mo** (10 properties, 5 cleaners)\n• **Standard** — **$79/mo** (50 properties, 25 cleaners) ⭐ most popular\n• **Premium** — **$149/mo** (unlimited + priority support)\n\n**14-day free trial**. Change or cancel in-app (self-serve billing). Visit **/pricing** for live rates & usage limits!",
  pt: "💰 **Preços TidyFlow** — planos via Stripe:\n\n• **Startup** — a partir de **$9/mês**\n• **Standard** — **$79/mês**\n• **Premium** — **$149/mês**\n\n**Teste grátis 14 dias**. Veja **/pricing** para valores ao vivo!",
  es: "💰 **Precios TidyFlow** — planes Stripe:\n\n• **Startup** — desde **$9/mes**\n• **Standard** — **$79/mes**\n• **Premium** — **$149/mes**\n\n**Prueba 14 días**. Visita **/pricing** para precios en vivo!",
  ar: "💰 **أسعار TidyFlow** عبر Stripe:\n\n• **Startup** من **٩$/شهر**\n• **Standard** **٧٩$/شهر**\n• **Premium** **١٤٩$/شهر**\n\n**تجربة ١٤ يوماً**. راجع **/pricing**!",
  cn: "💰 **TidyFlow 定价**（Stripe）：\n\n• **Startup** 起 **$9/月**\n• **Standard** **$79/月**\n• **Premium** **$149/月**\n\n**14 天试用**。请查看 **/pricing** 实时价格！",
  fr: "💰 **Tarifs TidyFlow** (Stripe) :\n\n• **Startup** dès **9 $/mois**\n• **Standard** **79 $/mois**\n• **Premium** **149 $/mois**\n\n**Essai 14 jours**. Voir **/pricing** !",
  de: "💰 **TidyFlow Preise** (Stripe):\n\n• **Startup** ab **9 $/Monat**\n• **Standard** **79 $/Monat**\n• **Premium** **149 $/Monat**\n\n**14 Tage Test**. Siehe **/pricing**!",
  pl: "💰 **Cennik TidyFlow** (Stripe):\n\n• **Startup** od **9 $/mies.**\n• **Standard** **79 $/mies.**\n• **Premium** **149 $/mies.**\n\n**14 dni trial**. Zobacz **/pricing**!",
  no: "💰 **TidyFlow-priser** (Stripe):\n\n• **Startup** fra **$9/mnd**\n• **Standard** **$79/mnd**\n• **Premium** **$149/mnd**\n\n**14 dagers prøve**. Se **/pricing**!",
  sv: "💰 **TidyFlow-priser** (Stripe):\n\n• **Startup** från **$9/mån**\n• **Standard** **$79/mån**\n• **Premium** **$149/mån**\n\n**14 dagars prov**. Se **/pricing**!",
  it: "💰 **Prezzi TidyFlow** (Stripe):\n\n• **Startup** da **$9/mese**\n• **Standard** **$79/mese**\n• **Premium** **$149/mese**\n\n**Prova 14 giorni**. Vedi **/pricing**!",
};

const whatsNewReplies: Record<string, string> = {
  en: "🆕 **What's New in TidyFlow** — latest releases:\n\n• **Task chat** + voice notes (replace WhatsApp job threads)\n• **QuickBooks** invoice sync\n• **Integrations hub** (Sheets, QuickBooks, Stripe)\n• **Self-serve billing** & plan usage meters\n• **Revenue AI** profit analysis\n• **Smart addresses**, **offline GPS** queue\n• **AI setup**, **announcements**, **supplies** logging\n\nBrowse all: **/whats-new** — or ask about any feature!",
  pt: "🆕 **Novidades no TidyFlow**: chat por tarefa, QuickBooks, hub de integrações, faturação self-service, Revenue AI, endereços inteligentes, GPS offline, setup IA, anúncios e consumíveis.\n\nVeja tudo em **/whats-new**!",
  es: "🆕 **Novedades en TidyFlow**: chat por tarea, QuickBooks, hub de integraciones, facturación self-service, Revenue AI, direcciones inteligentes, GPS offline, setup IA, anuncios y suministros.\n\nTodo en **/whats-new**!",
  ar: "🆕 **ما الجديد في TidyFlow**: دردشة المهام، QuickBooks، مركز التكاملات، الفوترة الذاتية، Revenue AI والمزيد.\n\nراجع **/whats-new**!",
  cn: "🆕 **TidyFlow 新功能**：任务聊天、QuickBooks、集成中心、自助计费、Revenue AI、智能地址、离线 GPS、AI 设置、公告与耗材。\n\n详见 **/whats-new**！",
  fr: "🆕 **Nouveautés TidyFlow** : chat par tâche, QuickBooks, hub d'intégrations, facturation self-service, Revenue AI, adresses intelligentes, GPS offline, et plus.\n\nVoir **/whats-new** !",
  de: "🆕 **Neu bei TidyFlow**: Task-Chat, QuickBooks, Integrations-Hub, Self-Serve-Billing, Revenue AI, Smart Addresses, Offline-GPS und mehr.\n\nSiehe **/whats-new**!",
  pl: "🆕 **Nowości TidyFlow**: czat zadań, QuickBooks, hub integracji, self-serve billing, Revenue AI i więcej.\n\nZobacz **/whats-new**!",
  no: "🆕 **Nytt i TidyFlow**: oppgavechat, QuickBooks, integrasjonshub, selvbetjent fakturering, Revenue AI og mer.\n\nSe **/whats-new**!",
  sv: "🆕 **Nytt i TidyFlow**: uppgiftschatt, QuickBooks, integrationsnav, self-serve billing, Revenue AI med mera.\n\nSe **/whats-new**!",
  it: "🆕 **Novità TidyFlow**: chat per task, QuickBooks, hub integrazioni, billing self-service, Revenue AI e altro.\n\nVedi **/whats-new**!",
};

const quickbooksReplies: Record<string, string> = {
  en: "📒 **QuickBooks Online** sync: create client invoices in TidyFlow — they sync to QuickBooks with customers, line items, and totals.\n\n• One-tap OAuth connect from Integrations\n• Sync one invoice or bulk pending\n• Optional sync on create / send / mark-paid\n• Activity log shows what synced\n\nQuickBooks does **not** replace TidyFlow invoicing — it receives synced invoices for your accountant.\n\nDetails: **/whats-new/quickbooks** · Hub: **/whats-new/integrations-hub**",
  pt: "📒 **QuickBooks Online**: faturas criadas no TidyFlow sincronizam com clientes, linhas e totais. Não substitui a faturação TidyFlow.\n\nDetalhes: **/whats-new/quickbooks**",
  es: "📒 **QuickBooks Online**: las facturas de TidyFlow se sincronizan con clientes, líneas y totales. No reemplaza la facturación de TidyFlow.\n\nDetalles: **/whats-new/quickbooks**",
  ar: "📒 مزامنة **QuickBooks Online**: تنشئ الفواتير في TidyFlow وتُزامَن إلى QuickBooks.\n\nالتفاصيل: **/whats-new/quickbooks**",
  cn: "📒 **QuickBooks Online** 同步：在 TidyFlow 开票后同步到 QuickBooks（客户、明细、总额）。\n\n详情：**/whats-new/quickbooks**",
  fr: "📒 **QuickBooks Online** : les factures TidyFlow se synchronisent (clients, lignes, totaux).\n\nDétails : **/whats-new/quickbooks**",
  de: "📒 **QuickBooks Online**: TidyFlow-Rechnungen synchronisieren Kunden, Positionen und Summen.\n\nDetails: **/whats-new/quickbooks**",
  pl: "📒 **QuickBooks Online**: faktury z TidyFlow synchronizują klientów, pozycje i sumy.\n\nSzczegóły: **/whats-new/quickbooks**",
  no: "📒 **QuickBooks Online**: TidyFlow-fakturaer synkes med kunder, linjer og summer.\n\nDetaljer: **/whats-new/quickbooks**",
  sv: "📒 **QuickBooks Online**: TidyFlow-fakturor synkas med kunder, rader och summor.\n\nDetaljer: **/whats-new/quickbooks**",
  it: "📒 **QuickBooks Online**: le fatture TidyFlow si sincronizzano con clienti, righe e totali.\n\nDettagli: **/whats-new/quickbooks**",
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
  if (/quickbooks|quick books|qbo|accounting sync|invoice sync/.test(q)) {
    return quickbooksReplies[lang] || quickbooksReplies.en;
  }
  if (
    /what'?s new|whats new|new feature|novidades|novedades|nouveautés|neuigkeiten|nowości|nyheter|novità|ما الجديد|新功能|task chat|revenue ai|integrations hub|self-?serve billing|plan limits|smart address|offline gps|announcement|supplies tracking|voice note/.test(
      q
    )
  ) {
    return whatsNewReplies[lang] || whatsNewReplies.en;
  }
  if (/pric(e|ing)|how much|subscription|plan|tier|\$9|\$29|\$79|\$149|cost|trial|billing|cancel (plan|subscription)/.test(q)) {
    return pricingReplies[lang] || pricingReplies.en;
  }
  return null;
}
