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
