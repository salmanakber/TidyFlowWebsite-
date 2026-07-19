/**
 * Long-form English sections for What's New feature pages.
 * Grounded in real TidyFlow product behavior — used to fix thin-content SEO.
 * Non-English pages fall back to these sections so every locale stays substantive.
 */

import type { NewFeatureSlug } from "./newFeatures";

export type FeatureSection = {
  heading: string;
  paragraphs: string[];
};

export type FeatureFaq = { q: string; a: string };

export type FeaturePageExtra = {
  whoFor: FeatureSection;
  howItWorks: FeatureSection;
  whyItMatters: FeatureSection;
  faqs: FeatureFaq[];
};

export const FEATURE_PAGE_EXTRA: Record<NewFeatureSlug, FeaturePageExtra> = {
  "task-chat": {
    whoFor: {
      heading: "Who task chat is for",
      paragraphs: [
        "Operations managers who assign cleaners to commercial sites and need job-specific instructions to stay attached to the task — not buried in a company WhatsApp group.",
        "Field cleaners who need to ask a quick question, send a voice note from a noisy plant room, or confirm a key code without starting a new group thread.",
      ],
    },
    howItWorks: {
      heading: "How task chat works in TidyFlow",
      paragraphs: [
        "Open any cleaning task and you get a dedicated team thread with the people assigned to that job. Messages stay on the task history so a late-shift replacement can read what was already agreed.",
        "When the phone has signal, delivery is real-time. Voice notes are available when typing is awkward — gloves on, wet hands, or standing in a stairwell.",
        "Company announcements still broadcast company-wide; task chat stays scoped to the job so noise stays low.",
      ],
    },
    whyItMatters: {
      heading: "Why it matters for cleaning ops",
      paragraphs: [
        "WhatsApp groups mix payroll questions, client complaints, and site notes. That creates missed instructions and weak audit trails when a client asks what happened on Tuesday’s deep clean.",
        "Per-task chat gives managers one place to leave access notes, checklist clarifications, and photo follow-ups — tied to the same job that feeds payroll and client proof.",
      ],
    },
    faqs: [
      {
        q: "Can clients see task chat?",
        a: "No. Task chat is internal for your assigned team and managers — not a client-facing channel.",
      },
      {
        q: "Does chat replace notifications?",
        a: "No. You still get assignment and status notifications; chat is for conversation on that specific job.",
      },
    ],
  },
  quickbooks: {
    whoFor: {
      heading: "Who QuickBooks sync is for",
      paragraphs: [
        "Cleaning company owners and bookkeepers who invoice clients in TidyFlow but post revenue in QuickBooks Online.",
        "Teams tired of re-typing customer names, line items, and totals after every completed contract cycle.",
      ],
    },
    howItWorks: {
      heading: "How QuickBooks sync works",
      paragraphs: [
        "Connect QuickBooks Online once with OAuth from the Integrations screen. TidyFlow maps customers and pushes invoice totals with line items so your books stay aligned with operations.",
        "Sync a single invoice or bulk-select pending ones. Optional automation can sync when an invoice is created, sent, or marked paid — depending on how your finance team works.",
        "Approved payroll runs can sync as bills on supported plans. The activity log records what synced and when so support and accountants can audit failures quickly.",
      ],
    },
    whyItMatters: {
      heading: "Why it matters",
      paragraphs: [
        "Operations and accounting diverge when invoices live only in the field system. Syncing into QuickBooks keeps cash collection, AR, and tax reporting consistent without duplicate data entry.",
        "Your team still creates and manages client invoices in TidyFlow — QuickBooks receives the accounting copy, it does not replace TidyFlow invoicing.",
      ],
    },
    faqs: [
      {
        q: "Does this work with QuickBooks Desktop?",
        a: "The integration targets QuickBooks Online via OAuth. Desktop workflows are not the primary path.",
      },
      {
        q: "Can I turn off auto-sync?",
        a: "Yes. Use manual sync or choose which invoice events trigger automation.",
      },
    ],
  },
  "integrations-hub": {
    whoFor: {
      heading: "Who the Integrations hub is for",
      paragraphs: [
        "Owners and company admins who need one screen to confirm Google Sheets, QuickBooks, and Stripe are healthy — without hunting through nested settings.",
        "Ops leads who reconnect a sheet or OAuth session after a password change or expired token.",
      ],
    },
    howItWorks: {
      heading: "What you see in the hub",
      paragraphs: [
        "The hub lists each connection with status, recent sync activity, and shortcuts to fix or reconnect. Google Sheets two-way sync, QuickBooks invoice automation, and Stripe subscription billing all surface here.",
        "Unlike the marketing Integrations overview page (which explains what TidyFlow connects to), the in-app hub is the live control panel for your company’s linked accounts.",
      ],
    },
    whyItMatters: {
      heading: "Why a hub beats scattered settings",
      paragraphs: [
        "When sheet sync stalls or QuickBooks disconnects, managers lose trust in payroll and invoices. A single health view shortens time-to-fix and prevents silent data drift.",
        "New admins can onboard faster because connection state is visible without tribal knowledge of which menu holds which token.",
      ],
    },
    faqs: [
      {
        q: "Is the hub different from /integrations on the website?",
        a: "Yes. The website page is marketing education. The in-app Integrations hub is where you connect and monitor live accounts.",
      },
      {
        q: "Which connections appear?",
        a: "Google Sheets, QuickBooks Online, and Stripe billing status, plus related sync activity.",
      },
    ],
  },
  "self-serve-billing": {
    whoFor: {
      heading: "Who self-serve billing is for",
      paragraphs: [
        "Owners and company admins who want to start a trial, change plan, or cancel without emailing support.",
        "Growing teams that upgrade when property or cleaner counts approach plan limits.",
      ],
    },
    howItWorks: {
      heading: "How billing works in the app",
      paragraphs: [
        "Open Billing to see your current plan, next bill date, usage summary, and history. Upgrades apply immediately; downgrades can be scheduled for the next Stripe period so you are not surprised mid-cycle.",
        "Cancel a free trial anytime with no charge. Cancel a paid plan at period end through Stripe’s hosted flow. Email and in-app alerts cover payments, trial endings, and renewals.",
      ],
    },
    whyItMatters: {
      heading: "Why owners care",
      paragraphs: [
        "Cleaning companies expand and contract seasonally. Self-serve plan changes reduce admin friction and keep subscription state transparent for finance.",
        "Clear trial vs paid cancellation messaging prevents accidental charges and support tickets.",
      ],
    },
    faqs: [
      {
        q: "Where do I change plan?",
        a: "In the app Billing screen, or start from tidyflowapp.com/pricing which deep-links into subscribe flows.",
      },
      {
        q: "Is billing handled by Stripe?",
        a: "Yes. TidyFlow uses Stripe for subscription payments, invoices, and cancellations.",
      },
    ],
  },
  "plan-limits": {
    whoFor: {
      heading: "Who plan limits help",
      paragraphs: [
        "Owners comparing Startup, Standard, and Premium capacity before hiring more cleaners or adding sites.",
        "Managers who need early warning when monthly AI, invoice, photo verification, or PDF quotas are nearly exhausted.",
      ],
    },
    howItWorks: {
      heading: "How usage meters work",
      paragraphs: [
        "TidyFlow shows live usage against fixed caps (properties, cleaners, managers) and monthly quotas (AI operations, invoices, photo AI, PDFs). Quotas reset each Stripe billing cycle.",
        "In-app warnings appear as you approach limits so you can upgrade before a blocked action hits a busy Friday payroll run.",
      ],
    },
    whyItMatters: {
      heading: "Why meters beat surprise blocks",
      paragraphs: [
        "SaaS limits only frustrate teams when they are invisible. Live meters turn plan selection into an operations decision instead of a support emergency.",
        "Finance can forecast when growth requires Standard or Premium without guessing from a static pricing table.",
      ],
    },
    faqs: [
      {
        q: "Do AI limits reset monthly?",
        a: "Yes. Monthly quotas reset with each Stripe billing cycle.",
      },
      {
        q: "What happens at a hard cap?",
        a: "You see a clear limit message and an upgrade path — the goal is visibility before you hit the wall.",
      },
    ],
  },
  "revenue-ai": {
    whoFor: {
      heading: "Who Revenue AI is for",
      paragraphs: [
        "Owners who want net profit, cash collected, and margin by property without exporting spreadsheets every month.",
        "Operators who need a plain-language explanation when margins move — not just another chart.",
      ],
    },
    howItWorks: {
      heading: "How the revenue dashboard works",
      paragraphs: [
        "Pick a date range on the owner Revenue view. Review paid vs outstanding invoices, expenses, and margins by property or client.",
        "Tap Analyze with AI for a short report on what drove the numbers — cost spikes, soft collections, or site-level margin risk — written for operators, not accountants.",
      ],
    },
    whyItMatters: {
      heading: "Why it matters",
      paragraphs: [
        "Commercial cleaning margins hide in labor overruns and slow AR. Seeing profit by site, then asking AI what changed, shortens the path from dashboard to decision.",
        "It complements QuickBooks sync: books stay accurate while operators get an ops-first profit narrative inside TidyFlow.",
      ],
    },
    faqs: [
      {
        q: "Does AI change my invoices?",
        a: "No. Analysis is read-only insight on your revenue data.",
      },
      {
        q: "Is Revenue AI on every plan?",
        a: "Availability and AI quota depend on your plan — check Pricing and the in-app usage meters.",
      },
    ],
  },
  "smart-addresses": {
    whoFor: {
      heading: "Who smart addresses help",
      paragraphs: [
        "Managers adding commercial properties across one country who need autocomplete that matches local address formats.",
        "Teams importing sites from Google Sheets who still need accurate map pins for geofencing.",
      ],
    },
    howItWorks: {
      heading: "How address autocomplete works",
      paragraphs: [
        "Set the company country once in company profile. Address search suggestions follow that region so UK postcodes, US ZIP formats, and other locales behave correctly.",
        "New properties — including sheet imports — geocode automatically so GPS geofences, live maps, and routing start with the right pin instead of a manual lat/long hunt.",
      ],
    },
    whyItMatters: {
      heading: "Why pins must be right",
      paragraphs: [
        "Wrong coordinates break on-site verification and confuse cleaners navigating multi-building campuses. Country-scoped autocomplete plus auto geocoding cuts that failure mode.",
        "Less typing also means faster onboarding when you win a 40-site facilities contract.",
      ],
    },
    faqs: [
      {
        q: "Can I override a pin?",
        a: "Yes — correct the address or coordinates if a campus needs a specific entrance pin.",
      },
      {
        q: "Does sheet sync geocode too?",
        a: "Yes. Properties coming from Google Sheets sync are geocoded for maps and GPS.",
      },
    ],
  },
  "offline-gps": {
    whoFor: {
      heading: "Who offline GPS is for",
      paragraphs: [
        "Cleaners working basements, hospitals, concrete towers, and rural sites where mobile signal drops mid-shift.",
        "Managers who still need a location trail for active jobs when the phone reconnects.",
      ],
    },
    howItWorks: {
      heading: "How the offline GPS queue works",
      paragraphs: [
        "When signal drops, timers and photos keep working. Location pings queue locally on the device and sync automatically when connectivity returns.",
        "That trail complements on-site verification flags so payroll and client proof are not blank just because the building killed the radio.",
      ],
    },
    whyItMatters: {
      heading: "Why low-signal sites matter",
      paragraphs: [
        "Many cleaning contracts fail GPS in the places that need proof most — plant rooms, underground parking, and interior cores. Queued GPS keeps accountability without forcing cleaners to walk outside to clock in.",
        "Managers reduce “I was there” disputes because the app recovers the trail instead of losing it.",
      ],
    },
    faqs: [
      {
        q: "Does offline GPS track speed or routes all day?",
        a: "TidyFlow focuses on job presence and proof for active work — not invasive all-day surveillance.",
      },
      {
        q: "Do photos still save offline?",
        a: "Yes. Photos and timers continue; GPS pings queue and sync later.",
      },
    ],
  },
  "ai-setup": {
    whoFor: {
      heading: "Who AI setup helps",
      paragraphs: [
        "Managers opening new or in-progress tasks who want checklist and assignment suggestions in under a minute.",
        "Teams standardizing SOPs across similar property types without copy-pasting checklists by hand every time.",
      ],
    },
    howItWorks: {
      heading: "How AI setup works",
      paragraphs: [
        "When a job still needs setup, TidyFlow offers guided setup: build the checklist manually or accept AI-assisted suggestions based on property context, then confirm cleaner assignment.",
        "Finished or submitted jobs skip the prompt. Managers always confirm — AI never auto-assigns staff without approval.",
      ],
    },
    whyItMatters: {
      heading: "Why guided setup saves money",
      paragraphs: [
        "Every empty checklist or wrong assignee creates callbacks and payroll noise. Faster, confirmed setup reduces admin minutes on every new job — especially when volume spikes.",
        "AI stays assistive so your SOPs remain under human control.",
      ],
    },
    faqs: [
      {
        q: "Can I ignore AI and set up manually?",
        a: "Yes. Manual checklist and assign flows remain available.",
      },
      {
        q: "Does AI use monthly quota?",
        a: "AI-assisted setup counts toward plan AI operations where applicable — see plan limits meters.",
      },
    ],
  },
  announcements: {
    whoFor: {
      heading: "Who company announcements are for",
      paragraphs: [
        "Owners and managers broadcasting policy updates, weather alerts, holiday schedules, or uniform changes to every cleaner.",
        "Teams that want ops communication inside TidyFlow instead of forwarding WhatsApp messages that get lost.",
      ],
    },
    howItWorks: {
      heading: "How announcements work",
      paragraphs: [
        "Compose a company-wide announcement and send it in-app so cleaners see it alongside their schedule — not in a personal chat flood.",
        "Use announcements for broadcast truth; use task chat for job-specific discussion. Together they replace most internal group-chat chaos.",
      ],
    },
    whyItMatters: {
      heading: "Why broadcast belongs in the ops app",
      paragraphs: [
        "Critical updates fail when they compete with memes and side chats. In-app announcements keep compliance and safety messages where attendance already lives.",
        "You also keep a clearer record of what the company told the field — useful for audits and disputes.",
      ],
    },
    faqs: [
      {
        q: "Do announcements replace task chat?",
        a: "No. Announcements are company-wide; task chat is per job.",
      },
      {
        q: "Who can send announcements?",
        a: "Owners and managers with the right permissions.",
      },
    ],
  },
  supplies: {
    whoFor: {
      heading: "Who supplies tracking is for",
      paragraphs: [
        "Managers who need a company supply catalog and want usage logged against real jobs — not a separate inventory spreadsheet nobody updates.",
        "Cleaners who can quickly log chemical or consumable use from the mobile app after a shift.",
      ],
    },
    howItWorks: {
      heading: "How supplies logging works",
      paragraphs: [
        "Maintain a catalog with stock levels in the office. From the field or dashboard, log consumption against a task so usage ties to the property and crew that used it.",
        "Low-stock awareness follows real job consumption, which is more accurate than guessing monthly burn from purchase orders alone.",
      ],
    },
    whyItMatters: {
      heading: "Why per-job supply data matters",
      paragraphs: [
        "Chemical cost hides inside “miscellaneous.” Per-job logs expose which sites burn product and where restocking should happen before a crew arrives empty-handed.",
        "Owners get cleaner cost conversations with facility clients when usage is evidenced, not estimated.",
      ],
    },
    faqs: [
      {
        q: "Is this a full warehouse WMS?",
        a: "No. It is job-linked supplies tracking for cleaning operations — catalog, usage logs, and low-stock awareness.",
      },
      {
        q: "Can cleaners log from mobile?",
        a: "Yes. Field entry is designed to be quick after or during a job.",
      },
    ],
  },
};

export function getFeaturePageExtra(slug: NewFeatureSlug): FeaturePageExtra {
  return FEATURE_PAGE_EXTRA[slug];
}
