export interface BlogSection {
  heading: string;
  paragraphs: string[];
}

export interface BlogPost {
  slug: string;
  /** Short SEO title (≤60 chars). H1 can still use `title`. */
  metaTitle: string;
  title: string;
  excerpt: string;
  keywords: string[];
  publishedAt: string;
  readTime: string;
  author: string;
  sections: BlogSection[];
}

/** Old long slugs → current canonical (for redirects / bookmarks). */
export const BLOG_SLUG_REDIRECTS: Record<string, string> = {
  "cleaning-company-software-buying-guide-2026": "cleaning-software-buying-guide",
  "reduce-no-shows-with-geofenced-clock-ins": "geofenced-clock-ins",
  "google-sheets-to-cleaning-operations-system": "sheets-to-operations",
  "cleaning-company-kpis-that-actually-matter": "cleaning-company-kpis",
  "how-to-scale-commercial-cleaning-company": "scale-commercial-cleaning",
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "quickbooks-cleaning-invoices",
    metaTitle: "QuickBooks Invoices for Cleaning Cos | TidyFlow",
    title: "How Cleaning Companies Sync Client Invoices to QuickBooks Without Retyping Jobs",
    excerpt:
      "Stop copying customers and line items from ops software into QuickBooks Online. Connect once, sync invoices from completed cleans, and keep AR aligned with fieldwork.",
    keywords: [
      "QuickBooks cleaning company",
      "QuickBooks Online invoices janitorial",
      "cleaning invoice sync QuickBooks",
      "bookkeeping for cleaning businesses",
    ],
    publishedAt: "2026-08-07",
    readTime: "9 min read",
    author: "TidyFlow Operations Team",
    sections: [
      {
        heading: "Why ops and books drift apart",
        paragraphs: [
          "Commercial cleaning companies usually create work in a field app or spreadsheet, then rebuild the same customers and amounts in QuickBooks for accounting. Every manual hop invents typos, missing line items, and “which invoice is real?” arguments at month-end.",
          "The fix is not another spreadsheet export ritual. It is keeping job completion as the system of record for what was delivered, then pushing a clean accounting copy into QuickBooks Online when finance is ready.",
        ],
      },
      {
        heading: "What a cleaning-friendly QuickBooks sync should do",
        paragraphs: [
          "Connect QuickBooks Online once with OAuth from an Integrations hub — not a buried developer setting. Map customers and push invoice totals with line items so AR matches the jobs managers already approved.",
          "Support single-invoice sync and bulk sync for a batch of pending bills. Optional rules (sync on create, send, or mark-paid) let bookkeepers choose how hands-on they want to be.",
          "On supported plans, approved payroll runs can flow as vendor bills so labor cost hits the books without a second spreadsheet. An activity log should show what synced and when when something fails.",
        ],
      },
      {
        heading: "How TidyFlow closes the loop",
        paragraphs: [
          "In TidyFlow, managers build client invoices from approved, unbilled tasks with branding and tax rules already configured. With QuickBooks connected, those invoices can sync as customers, line items, and totals — so the field proof that produced the bill is the same record finance posts.",
          "Website /integrations explains the partnership story; the in-app Integrations hub is where owners check Sheets, QuickBooks, and Stripe health and reconnect OAuth if a token expires.",
        ],
      },
      {
        heading: "Rollout checklist for owners and bookkeepers",
        paragraphs: [
          "Week one: connect QuickBooks, sync five recent invoices manually, and reconcile totals against TidyFlow. Week two: turn on the automation rule that matches how you already send or mark invoices paid.",
          "Keep inventing jobs in WhatsApp and you will still retype forever. Put completed commercial work on payroll-ready jobs first — QuickBooks sync amplifies clean ops data; it cannot repair missing checklists.",
          "See invoice sync and the Integrations hub on a 14-day trial, or walk your current AR process on a demo at /contact.",
        ],
      },
    ],
  },
  {
    slug: "cleaning-rota-leave-management",
    metaTitle: "Cleaning Rota & Leave Management | TidyFlow",
    title: "Build a Cleaning Rota That Respects Leave, Conflicts, and Travel Time",
    excerpt:
      "Weekly rota grids fail when leave is tribal knowledge. Use leave-aware assignment, conflict warnings, and route-aware scheduling so night crews stay covered.",
    keywords: [
      "cleaning rota software",
      "janitorial scheduling leave",
      "cleaner roster management",
      "commercial cleaning dispatch",
    ],
    publishedAt: "2026-08-07",
    readTime: "8 min read",
    author: "TidyFlow Operations Team",
    sections: [
      {
        heading: "The Friday scramble is a systems problem",
        paragraphs: [
          "When the only person who “knows who is off” is a manager’s memory or a sticky note, double-bookings and uncovered sites become normal. Cleaners burn out; facilities clients escalate.",
          "A modern cleaning rota is not a pretty calendar screenshot. It is a weekly timeline where leave locks, unassigned filters, conflict warnings, and travel-aware suggestions are visible before you publish the week.",
        ],
      },
      {
        heading: "What “leave-aware” actually means",
        paragraphs: [
          "Cleaners submit sick and holiday requests in-app. Managers approve or reject once. Approved leave must disable those dates in the rota picker — not rely on someone remembering to check a separate sheet.",
          "Conflict warnings for overlapping assignments protect both payroll honesty and service levels. Unassigned filters help dispatchers clear the backlog before shift start instead of discovering gaps at 9pm.",
        ],
      },
      {
        heading: "Travel radius and AI suggestions — after the rules exist",
        paragraphs: [
          "Route optimization between properties cuts windshield time once pins are accurate. AI best-match suggestions help only after leave and skills rules exist; otherwise you automate chaos.",
          "In TidyFlow, managers confirm every AI suggestion. Recurring jobs fill the calendar for weekly commercial cleans so the rota is editing exceptions — not retyping the same sites every Monday.",
        ],
      },
      {
        heading: "A one-week rollout",
        paragraphs: [
          "Import properties and staff, approve existing leave, then build next week only in the rota builder. Require task chat for access notes so instructions travel with the job, not a separate WhatsApp thread.",
          "Measure uncovered sites and last-minute swaps for 14 days. If both drop, your schedule is finally a system of record — start at /pricing or book a walkthrough at /contact.",
        ],
      },
    ],
  },
  {
    slug: "payroll-verified-cleaner-hours",
    metaTitle: "Payroll From Verified Cleaner Hours | TidyFlow",
    title: "Approve Cleaning Payroll From GPS-Verified Hours — Not Chat Screenshots",
    excerpt:
      "Payroll cleanup shrinks when timers, geofence presence, and breaks feed one pending-hours queue managers can trust before payday.",
    keywords: [
      "cleaning payroll software",
      "verified hours cleaners",
      "janitorial timesheet approval",
      "GPS time tracking cleaning",
    ],
    publishedAt: "2026-08-06",
    readTime: "9 min read",
    author: "TidyFlow Operations Team",
    sections: [
      {
        heading: "Why cleaning payroll turns into archaeology",
        paragraphs: [
          "End-of-week chat dumps (“I started at 6 but forgot to clock”) force managers to reconstruct nights from memory. Finance distrusts the hours; honest cleaners feel accused; margins hide inside overtime noise.",
          "Verified field timers solve the data problem only when they work underground, respect breaks, and land in a single approval queue — not three different apps.",
        ],
      },
      {
        heading: "The payroll-ready chain",
        paragraphs: [
          "Cleaners start/stop timers on the job with geofenced presence checks and offline continuity. Breaks are excluded from paid time. Submitted hours appear in Payroll → Pending Hours for manager review and adjustment.",
          "Pay rules per user (hourly rates, salary types, overtime) compile into payroll periods, PDF payslips, and exports owners can hand to accountants. Expense claims with receipts travel the same approval path.",
        ],
      },
      {
        heading: "Where GPS helps — and where it should not",
        paragraphs: [
          "Presence at the property boundary for clock-in and completion is enough for most cleaning disputes. All-day route surveillance is usually the wrong culture fit and the wrong compliance conversation.",
          "Offline GPS queues keep a trail when basements kill signal, so low-signal buildings do not become “free edit” hours. Pair geofence proof with checklist and photo completion so payroll is defending quality, not only minutes on site.",
        ],
      },
      {
        heading: "KPI to track for 30 days",
        paragraphs: [
          "Track hours submitted vs hours verified on-site, and calendar days from period close to payslip export. Closing those gaps is often the highest-ROI systems change a multi-site cleaner can make.",
          "On supported plans, approved payroll can optionally sync toward QuickBooks as vendor bills — but only after the field hours are trustworthy. See verified timers and payroll approval on a free trial at tidyflowapp.com/pricing.",
        ],
      },
    ],
  },
  {
    slug: "revenue-ai-cleaning-margins",
    metaTitle: "Revenue AI for Cleaning Margins | TidyFlow",
    title: "See Which Cleaning Sites Make Money — Then Ask AI What Changed",
    excerpt:
      "Busy is not profitable. Use property-level margins, cash vs outstanding invoices, and Revenue AI narratives to spot cost drivers before quarter-end surprises.",
    keywords: [
      "cleaning company margins",
      "janitorial profit by site",
      "Revenue AI cleaning",
      "cleaning business cash flow",
    ],
    publishedAt: "2026-08-06",
    readTime: "8 min read",
    author: "TidyFlow Operations Team",
    sections: [
      {
        heading: "Occupancy without margin is a vanity metric",
        paragraphs: [
          "Owners often celebrate a full rota while petrol, overtime, callbacks, and chemical burn erase the contract. If you cannot see margin by property and client for a chosen date range, you are managing vibes — not a P&L.",
          "A Revenue dashboard should show net profit, cash collected, expenses, paid vs outstanding invoices, and site-level contribution before you hire the next crew.",
        ],
      },
      {
        heading: "What Revenue AI is (and is not)",
        paragraphs: [
          "Revenue AI reads the same period you selected and explains risks, cost drivers, and cash-flow pressure in plain language — overall, margin-focused, cash-focused, or cost-focused modes depending on the question.",
          "It is not a black-box price setter and it does not replace your judgment. Like TidyFlow’s dispatch AI, it recommends; owners decide. Plan quotas apply so usage stays fair across Startup, Standard, and Premium.",
        ],
      },
      {
        heading: "Feed AI real operations data",
        paragraphs: [
          "AI narratives are only as good as the jobs behind them. Verified hours, completed checklists, supplies logged per job, and invoices that can sync to QuickBooks turn the dashboard into decision fuel.",
          "If proof still lives in WhatsApp, fix field capture first — then open Revenue AI. Otherwise you will get confident stories about incomplete data.",
        ],
      },
      {
        heading: "Questions to ask in your first month",
        paragraphs: [
          "Which three sites dragged margin last month? Is cash collected lagging approvals? Did overtime spike on routes with bad pins or uncovered leave?",
          "Run those questions on a live portfolio during a 14-day trial. For a guided walkthrough of Revenue + Integrations, book a demo at /contact.",
        ],
      },
    ],
  },
  {
    slug: "tidyflow-vs-jobber-cleaning",
    metaTitle: "TidyFlow vs Jobber for Cleaning | TidyFlow",
    title: "TidyFlow vs Jobber for Cleaning Companies: Which Fits Janitorial Ops?",
    excerpt:
      "Jobber is strong for general home-service CRM. TidyFlow is built for cleaning ops: offline field work, GPS presence, Sheets sync, payroll proof, and client reports.",
    keywords: [
      "TidyFlow vs Jobber",
      "Jobber alternative cleaning",
      "janitorial software vs Jobber",
      "cleaning company field service software",
    ],
    publishedAt: "2026-07-20",
    readTime: "11 min read",
    author: "TidyFlow Operations Team",
    sections: [
      {
        heading: "Start with the job you actually run",
        paragraphs: [
          "Jobber is a well-known field service platform used by many home-service trades. Cleaning companies evaluating it often like the polished quoting and client CRM story — then discover nightly commercial sites, basement signal drops, and spreadsheet-heavy dispatch need a different stack.",
          "TidyFlow is cleaning operations software first: schedule and dispatch jobs, verify presence with geofencing, run checklists and photos offline, approve payroll from verified hours, and send branded client proof. If your day is janitorial or facilities cleaning — not HVAC quotes — feature fit matters more than brand familiarity.",
          "This comparison is not “Jobber is bad.” It is “which product matches how cleaning teams actually work from rota to payroll.”",
        ],
      },
      {
        heading: "Feature comparison for cleaning operations",
        paragraphs: [
          "Offline field app: Commercial towers and plant rooms kill signal. TidyFlow keeps timers, checklists, and photos working offline, with GPS pings queued until reconnect. General field apps that assume live internet often force cleaners outside just to clock in — that is a cleaning-specific failure mode.",
          "On-site geofencing: TidyFlow verifies presence at the property boundary for clock-in and completion — proof of presence, not all-day route surveillance. Cleaning payroll disputes shrink when finance trusts the same timestamped record managers see.",
          "Google Sheets two-way sync: Most cleaning companies already live in Sheets. TidyFlow syncs properties and schedules instead of forcing a hard cutover. If your ops still need a master spreadsheet for bidding or client lists, that integration is a buying criterion — not a nice-to-have.",
          "Client proof & payroll: Before/after photos, checklists, and verified hours flow into payroll-ready records and white-labeled PDF reports. Cleaning margins die in callbacks and unverified overtime; the platform should close that loop, not stop at “job completed” status.",
          "Cleaning-native extras: Per-task team chat (instead of WhatsApp chaos), company announcements, supplies logging per job, QuickBooks invoice sync, Revenue AI for margin-by-property, and live plan usage meters. Those are day-to-day janitorial needs — not generic trade CRM add-ons.",
        ],
      },
      {
        heading: "Where Jobber-style tools still make sense",
        paragraphs: [
          "If your business is primarily residential quoting, estimates, and consumer CRM across mixed trades, a general field service suite can be the right center of gravity.",
          "If your revenue is commercial cleaning contracts, multi-site facilities, night crews, and payroll accuracy, prioritize offline reliability, GPS presence, spreadsheet continuity, and proof-to-invoice workflows — the areas TidyFlow is built around.",
        ],
      },
      {
        heading: "A practical decision scorecard",
        paragraphs: [
          "Score any vendor 1–5 on: offline basement reliability, geofenced attendance, checklist + photo proof on first pass, payroll export speed, Google Sheets or accounting sync, and cleaner UX for night shifts.",
          "Run one live commercial site through both demos. If the app cannot clock in underground or produce payroll-ready hours without spreadsheet archaeology, it will cost more than the subscription price.",
          "Ready to see TidyFlow on your sites? Start a 14-day free trial or book a demo at tidyflowapp.com/contact — bring your current Sheet structure and one hard basement site.",
        ],
      },
    ],
  },
  {
    slug: "replace-whatsapp-cleaning-ops",
    metaTitle: "Replace WhatsApp for Cleaning Ops | TidyFlow",
    title: "Stop Running Your Cleaning Company Inside WhatsApp",
    excerpt:
      "Group chats bury access codes, photos, and payroll disputes. Move job chat, announcements, and proof into one ops system built for cleaners.",
    keywords: [
      "WhatsApp cleaning company",
      "cleaning team communication",
      "replace WhatsApp janitorial",
      "task chat cleaners",
    ],
    publishedAt: "2026-07-19",
    readTime: "9 min read",
    author: "TidyFlow Operations Team",
    sections: [
      {
        heading: "Why WhatsApp feels free — until it is not",
        paragraphs: [
          "Every cleaning owner knows the pattern: a group for each crew, a side chat for keys, photos dumped into a feed nobody can search next month, and a Friday argument about who finished the lobby.",
          "WhatsApp is excellent for personal messaging. It is a weak system of record for commercial cleaning — no geofenced attendance, no payroll-grade timestamps, no property-linked checklist history, and no branded client report at the end.",
          "The cost shows up as callbacks, unpaid re-cleans, and managers reconstructing nights from chat screenshots.",
        ],
      },
      {
        heading: "What belongs in chat vs what belongs in ops software",
        paragraphs: [
          "Keep consumer messaging for informal team bonding if you want. Move job instructions, access notes, completion proof, and hours into TidyFlow where they attach to the property and the shift.",
          "Per-task team chat keeps conversation on the job — managers and assigned cleaners only — with voice notes when gloves are on. Company announcements broadcast policy, weather, and holiday schedules without forwarding through five groups.",
          "Photos and checklists stay on the job record. When a facilities manager asks what happened Tuesday, you open the task — not scroll a chat from three months ago.",
        ],
      },
      {
        heading: "A 14-day migration that does not scare the field",
        paragraphs: [
          "Week one: put new commercial jobs into TidyFlow only. Leave WhatsApp for emergencies while cleaners learn the roster and timer.",
          "Week two: require checklist + before/after on those jobs, and approve payroll from verified hours. Turn group chats into “urgent only.”",
          "Announce the rule once inside TidyFlow: job talk lives on the task; company news is an announcement. Consistency beats another memo nobody reads.",
        ],
      },
      {
        heading: "The marketing upside clients notice",
        paragraphs: [
          "Facilities buyers trust operators who send branded proof PDFs instead of a zip of WhatsApp images. Faster proof cycles support faster payment conversations.",
          "Internally, managers stop being human search engines. That is how you scale past the owner who lives inside their phone.",
          "See task chat, announcements, and offline field proof on a free trial — or walk through your current chat chaos on a demo at /contact.",
        ],
      },
    ],
  },
  {
    slug: "why-offline-cleaning-apps-win",
    metaTitle: "Why Offline Cleaning Apps Win | TidyFlow",
    title: "Why Offline-First Cleaning Apps Beat “Always Online” Field Tools",
    excerpt:
      "Basements, hospitals, and concrete cores kill signal. If your cleaner app needs Wi‑Fi to clock in, your payroll and client proof are already broken.",
    keywords: [
      "offline cleaning app",
      "janitorial mobile app offline",
      "basement GPS cleaning",
      "field service offline mode",
    ],
    publishedAt: "2026-07-18",
    readTime: "8 min read",
    author: "TidyFlow Operations Team",
    sections: [
      {
        heading: "The sites that pay your invoices are the sites that kill signal",
        paragraphs: [
          "Commercial cleaning money lives in towers, hospitals, parking decks, and plant rooms. Those are exactly where mobile data fails. An “always online” field app that cannot start a timer underground is not enterprise-ready for janitorial work — it is a demo-room product.",
          "TidyFlow is offline-first: cleaners run timers, tick digital checklists, and capture before/after photos with local caching. When signal returns, the app syncs automatically. Offline GPS queues location pings so managers still get a presence trail for active jobs.",
        ],
      },
      {
        heading: "What breaks when the app needs live internet",
        paragraphs: [
          "Buddy-punching and forgotten clock-outs rise when cleaners must walk outside to punch. Photos pile up in personal galleries “to upload later” and never reach the client report.",
          "Payroll becomes archaeology: managers rebuild hours from memory and chat. Clients dispute invoices because proof arrives late or incomplete.",
          "If a vendor cannot show offline timer + checklist + photo + sync recovery in a live basement demo, score them zero on field reliability.",
        ],
      },
      {
        heading: "Offline plus geofencing is the accountability combo",
        paragraphs: [
          "Offline alone is not enough — you still want on-site verification at clock-in and completion. TidyFlow pairs geofenced presence with queued GPS so low-signal buildings are not a blind spot.",
          "That combination protects honest cleaners from false accusations and protects owners from payroll leakage. Presence-focused proof beats invasive all-day tracking for cleaning culture and compliance conversations.",
        ],
      },
      {
        heading: "How to evaluate vendors in one afternoon",
        paragraphs: [
          "Turn on airplane mode mid-job in the demo. Complete a checklist item, take a photo, stop the timer, then restore signal and confirm sync.",
          "Ask what happens to GPS when the phone is underground for forty minutes. If the answer is “nothing,” your commercial contracts will invent their own workaround — usually WhatsApp.",
          "Put TidyFlow on your hardest site first during a 14-day trial. If it survives that building, the rest of your portfolio is easier — start at tidyflowapp.com/pricing.",
        ],
      },
    ],
  },
  {
    slug: "cleaning-software-buying-guide",
    metaTitle: "Cleaning Software Buying Guide | TidyFlow",
    title: "Cleaning Company Software Buying Guide (2026): What To Compare Before You Commit",
    excerpt:
      "Compare janitorial software on offline field work, GPS proof, Sheets sync, payroll export, and client reports — not feature checklists alone.",
    keywords: [
      "cleaning company software",
      "janitorial software",
      "cleaning business management software",
      "cleaning operations platform",
    ],
    publishedAt: "2026-07-09",
    readTime: "10 min read",
    author: "TidyFlow Operations Team",
    sections: [
      {
        heading: "Start with workflow fit, not feature count",
        paragraphs: [
          "Many cleaning companies choose software by counting checkboxes. In practice, the best platform is the one that matches how your team actually works from first job assignment to payroll export.",
          "Before demos, map your current process for scheduling, cleaner check-ins, quality proof, and payroll approvals. If a tool creates extra handoffs at any of those stages, total admin time will rise even if the product looks modern.",
          "Write the path for one commercial site: who assigns the job, how the cleaner clocks in, what checklist and photos are required, who approves hours, and how the client gets proof. Score every vendor against that path.",
        ],
      },
      {
        heading: "Require offline capability for field reliability",
        paragraphs: [
          "Basements, hospitals, and large concrete facilities still break mobile signal. If your app needs live internet to clock in or complete checklists, your data quality drops immediately.",
          "Ask vendors to show full offline behavior: timer start/stop, checklist completion, photos, and background sync recovery. This single requirement prevents costly payroll and client-proof disputes later.",
          "In TidyFlow, timers and photos keep working offline and GPS pings can queue until the phone reconnects — which is exactly the behavior you should demand in a live demo.",
        ],
      },
      {
        heading: "Treat payroll and client proof as core outcomes",
        paragraphs: [
          "A scheduling tool alone does not solve operational stress. You need verified hours that finance trusts and proof-of-work reports that clients accept without back-and-forth emails.",
          "When testing options, run a live scenario and confirm that one completed job can flow into payroll-ready records and branded client evidence with minimal manual formatting.",
          "If the demo ends at “nice calendar,” keep shopping. Commercial cleaning margins are won in verified hours and first-pass client evidence.",
        ],
      },
      {
        heading: "Choose integrations that remove duplicate data entry",
        paragraphs: [
          "Most cleaning businesses already rely on spreadsheets. Replacing them overnight is unrealistic, so prioritize software that can sync bidirectionally with your existing Google Sheets structure.",
          "The right setup lets managers keep strategic reporting in sheets while field data remains accurate and standardized in the operations app.",
          "Also ask how invoices reach accounting. QuickBooks Online sync, Stripe billing for your SaaS subscription, and a single integrations status screen save weeks of spreadsheet gymnastics each quarter.",
        ],
      },
      {
        heading: "A short evaluation scorecard",
        paragraphs: [
          "Score each vendor 1–5 on: offline field reliability, on-site GPS presence (not invasive tracking), checklist + photo proof, payroll export speed, Sheets or accounting sync, and self-serve plan clarity.",
          "Anything below a 4 on offline or payroll is a red flag for multi-site commercial work. Pretty dashboards cannot fix missing basement clock-ins.",
        ],
      },
    ],
  },
  {
    slug: "geofenced-clock-ins",
    metaTitle: "Geofenced Clock-Ins for Cleaners | TidyFlow",
    title: "How Geofenced Clock-Ins Reduce No-Shows and Payroll Disputes",
    excerpt:
      "On-site GPS verification cuts no-show disputes and payroll cleanup while staying presence-focused — not all-day route surveillance.",
    keywords: [
      "geofenced clock in",
      "cleaner attendance tracking",
      "cleaning payroll disputes",
      "on-site job verification",
    ],
    publishedAt: "2026-07-09",
    readTime: "8 min read",
    author: "TidyFlow Operations Team",
    sections: [
      {
        heading: "Why manual attendance fails in distributed cleaning teams",
        paragraphs: [
          "When teams report hours by chat or memory at the end of a shift, disputes become normal. Managers cannot verify exactly where shifts started, clients question invoices, and payroll takes longer to approve.",
          "Geofencing fixes this by validating presence at the worksite boundary during clock-in and completion events.",
          "The operational win is shared truth: cleaner, manager, and finance all read the same timestamped presence record instead of reconstructing a night shift from WhatsApp.",
        ],
      },
      {
        heading: "Presence verification without invasive tracking",
        paragraphs: [
          "Good geofencing for cleaning operations should focus on presence, not route surveillance. You need confirmation that work happened at the right property, not a full movement log.",
          "This approach improves trust with cleaners while still giving management evidence for job completion and invoice defense.",
          "Pair geofence checks with offline GPS queuing so basements and concrete cores do not erase proof when signal drops mid-job.",
        ],
      },
      {
        heading: "Where this creates measurable ROI",
        paragraphs: [
          "Operations teams usually report three gains in the first month: fewer no-show disputes, faster payroll sign-off, and fewer client escalations around completed work.",
          "Those outcomes happen because every stakeholder is reading the same timestamped operational record.",
          "Track a simple KPI for 30 days: hours submitted vs hours verified on-site. Closing that gap is often the highest-ROI systems change a cleaning company can make.",
        ],
      },
      {
        heading: "Rollout tips that keep cleaners onboard",
        paragraphs: [
          "Explain that geofencing protects honest teams from false accusations and protects payroll from buddy-punching — it is not a speed tracker.",
          "Train on what to do when GPS is weak: stay on the job, keep the timer running, and let the app sync when signal returns.",
          "Start with commercial sites that already have clear boundaries, then expand to campuses once pins and address geocoding are accurate.",
        ],
      },
    ],
  },
  {
    slug: "sheets-to-operations",
    metaTitle: "From Google Sheets to Ops System | TidyFlow",
    title: "From Google Sheets Chaos to a Real Cleaning Operations System",
    excerpt:
      "Keep your master Sheet, then layer scheduling, offline proof, GPS, and payroll so field work stops living in chat threads.",
    keywords: [
      "google sheets cleaning schedule",
      "cleaning operations system",
      "spreadsheet migration cleaning",
      "cleaning automation software",
    ],
    publishedAt: "2026-07-09",
    readTime: "9 min read",
    author: "TidyFlow Operations Team",
    sections: [
      {
        heading: "Keep your existing sheet model, then connect operations",
        paragraphs: [
          "Most cleaning businesses have years of data in sheets. A successful migration starts by preserving that structure and layering an operational app on top.",
          "That avoids retraining everyone at once and reduces deployment risk for active contracts.",
          "TidyFlow’s two-way Google Sheets sync is built for this reality: owners keep familiar tabs while the field app becomes the system of record for attendance and proof.",
        ],
      },
      {
        heading: "Move the high-friction tasks first",
        paragraphs: [
          "The highest ROI sequence is usually: cleaner attendance, checklists, before/after photos, then payroll export. These are the tasks where manual workflows break most often.",
          "Once these are stabilized, schedule updates and client communication become faster with less manager intervention.",
          "Only after those flows are trusted should you push hard on AI job setup, Revenue AI, or supply logging — they compound a solid base, they do not replace it.",
        ],
      },
      {
        heading: "Use synchronization as an audit layer",
        paragraphs: [
          "Bidirectional sync helps teams keep spreadsheet familiarity while introducing operational controls. Owners still see high-level reporting in sheets, while daily execution is captured in real-time and validated in the field app.",
          "This gives you better accountability without forcing a hard system cutover on day one.",
          "Watch the Integrations hub for sync health so a broken OAuth session or sheet permission change does not silently stall schedules.",
        ],
      },
      {
        heading: "When to stop living in the sheet for day-to-day ops",
        paragraphs: [
          "Keep sheets for pricing models, bid templates, and long-range planning. Move day-of dispatch, chat, announcements, and verified hours into the app.",
          "If managers still paste GPS screenshots into cells, you have not finished the migration — you have only added another tool.",
        ],
      },
    ],
  },
  {
    slug: "cleaning-company-kpis",
    metaTitle: "7 Cleaning Company KPIs That Matter | TidyFlow",
    title: "7 Cleaning Company KPIs That Actually Improve Profitability",
    excerpt:
      "Track utilization, verified hours, callbacks, payroll cycle time, proof completeness, AR days, and chemical burn — not vanity dashboards.",
    keywords: [
      "cleaning company KPIs",
      "janitorial business metrics",
      "cleaning profitability",
      "operations KPI dashboard",
    ],
    publishedAt: "2026-07-09",
    readTime: "11 min read",
    author: "TidyFlow Operations Team",
    sections: [
      {
        heading: "1) Planned hours vs verified hours",
        paragraphs: [
          "This is your baseline control metric. The larger the gap, the more margin leakage and payroll correction work you create.",
          "Use on-site verified timers so finance can trust submitted hours before payroll closes.",
        ],
      },
      {
        heading: "2) Site completion proof on first pass",
        paragraphs: [
          "Measure the percentage of jobs completed with checklist confirmation and before/after evidence attached. This directly reduces back-office follow-up and client disputes.",
          "If this metric is low, train field leads before expanding team size.",
        ],
      },
      {
        heading: "3) Callback and re-clean rate by site",
        paragraphs: [
          "Callbacks destroy profitability because they create unpaid operational overhead. Group callback data by site and by crew to identify where SOPs are breaking.",
          "Use this KPI to prioritize coaching and quality assurance resources.",
        ],
      },
      {
        heading: "4) Payroll processing time",
        paragraphs: [
          "If payroll takes days of cleanup, your operational data quality is not strong enough. Better field verification should compress this cycle dramatically.",
          "A shorter payroll cycle usually correlates with higher cleaner trust and lower management stress.",
        ],
      },
      {
        heading: "5) Cleaner utilization vs overtime",
        paragraphs: [
          "Utilization without overtime context lies. A crew at 95% utilization with rising OT is often a dispatch or travel-radius problem, not a “heroic hustle” story.",
          "Use rota tools and travel-aware assignment so growth does not silently burn margin in petrol and fatigue.",
        ],
      },
      {
        heading: "6) Client proof cycle time",
        paragraphs: [
          "Measure hours from job submit to branded PDF or report in the client’s inbox. Slow proof cycles create payment delays even when the clean was excellent.",
          "Automated report generation tied to verified job logs is how multi-site contractors keep facilities managers confident.",
        ],
      },
      {
        heading: "7) Supply and chemical burn per site",
        paragraphs: [
          "When consumables are guessed monthly, high-burn sites hide inside “miscellaneous.” Log usage per job so restocking and client cost conversations are evidence-based.",
          "Pair this with Revenue AI or margin-by-property views so chemical cost shows up next to labor — not as a surprise at quarter end.",
        ],
      },
    ],
  },
  {
    slug: "scale-commercial-cleaning",
    metaTitle: "Scale a Commercial Cleaning Company | TidyFlow",
    title: "How To Scale a Commercial Cleaning Company Without Breaking Operations",
    excerpt:
      "Standardize dispatch, keep one source of truth for field proof, and automate client reporting before you add the next crew.",
    keywords: [
      "scale commercial cleaning company",
      "cleaning operations management",
      "multi-site cleaning software",
      "commercial janitorial growth",
    ],
    publishedAt: "2026-07-09",
    readTime: "10 min read",
    author: "TidyFlow Operations Team",
    sections: [
      {
        heading: "Standardize dispatch rules before adding headcount",
        paragraphs: [
          "Growth fails when assignment logic remains tribal knowledge in one manager's head. Build explicit rules for travel radius, skill matching, and shift overlap before expanding crews.",
          "With clear dispatch standards, new managers can operate consistently without degrading service levels.",
          "AI assign suggestions help only after those rules exist — otherwise you automate chaos.",
        ],
      },
      {
        heading: "Create one source of truth for field execution",
        paragraphs: [
          "As contract volume rises, WhatsApp threads and disconnected checklists become operational blind spots. Use one system where schedules, checklists, and completion proof are recorded against each site.",
          "This visibility is what allows owners to scale confidently across multiple supervisors.",
          "Task chat and company announcements belong in that same system so instructions are not split across five apps.",
        ],
      },
      {
        heading: "Automate reporting to protect client confidence",
        paragraphs: [
          "Enterprise and facilities clients expect professional evidence. If reports are manually built from scattered photos, delays and errors are inevitable.",
          "Automated report generation tied to verified job logs helps you maintain trust while account volume grows.",
        ],
      },
      {
        heading: "Watch plan capacity as you grow",
        paragraphs: [
          "Scaling also means more properties, cleaners, invoices, and AI ops. Live plan-limit meters prevent a busy month from colliding with a hard SaaS cap mid-payroll.",
          "Self-serve billing lets owners upgrade when growth is real — without waiting on a sales email to unblock the field.",
        ],
      },
    ],
  },
];

export function getAllPosts(): BlogPost[] {
  return [...BLOG_POSTS].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  const canonical = BLOG_SLUG_REDIRECTS[slug] || slug;
  return BLOG_POSTS.find((post) => post.slug === canonical);
}
