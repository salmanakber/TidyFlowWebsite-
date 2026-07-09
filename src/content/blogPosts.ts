export interface BlogSection {
  heading: string;
  paragraphs: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  keywords: string[];
  publishedAt: string;
  readTime: string;
  author: string;
  sections: BlogSection[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "cleaning-company-software-buying-guide-2026",
    title: "Cleaning Company Software Buying Guide (2026): What To Compare Before You Commit",
    excerpt:
      "A practical framework for owners and operations managers to evaluate janitorial software without wasting 3 months on wrong-fit tools.",
    keywords: [
      "cleaning company software",
      "janitorial software",
      "cleaning business management software",
      "cleaning operations platform",
    ],
    publishedAt: "2026-07-09",
    readTime: "8 min read",
    author: "TidyFlow Operations Team",
    sections: [
      {
        heading: "Start with workflow fit, not feature count",
        paragraphs: [
          "Many cleaning companies choose software by counting checkboxes. In practice, the best platform is the one that matches how your team actually works from first job assignment to payroll export.",
          "Before demos, map your current process for scheduling, cleaner check-ins, quality proof, and payroll approvals. If a tool creates extra handoffs at any of those stages, total admin time will rise even if the product looks modern.",
        ],
      },
      {
        heading: "Require offline capability for field reliability",
        paragraphs: [
          "Basements, hospitals, and large concrete facilities still break mobile signal. If your app needs live internet to clock in or complete checklists, your data quality drops immediately.",
          "Ask vendors to show full offline behavior: timer start/stop, checklist completion, photos, and background sync recovery. This single requirement prevents costly payroll and client-proof disputes later.",
        ],
      },
      {
        heading: "Treat payroll and client proof as core outcomes",
        paragraphs: [
          "A scheduling tool alone does not solve operational stress. You need verified hours that finance trusts and proof-of-work reports that clients accept without back-and-forth emails.",
          "When testing options, run a live scenario and confirm that one completed job can flow into payroll-ready records and branded client evidence with minimal manual formatting.",
        ],
      },
      {
        heading: "Choose integrations that remove duplicate data entry",
        paragraphs: [
          "Most cleaning businesses already rely on spreadsheets. Replacing them overnight is unrealistic, so prioritize software that can sync bidirectionally with your existing Google Sheets structure.",
          "The right setup lets managers keep strategic reporting in sheets while field data remains accurate and standardized in the operations app.",
        ],
      },
    ],
  },
  {
    slug: "reduce-no-shows-with-geofenced-clock-ins",
    title: "How Geofenced Clock-Ins Reduce No-Shows and Payroll Disputes",
    excerpt:
      "Learn how on-site verification improves cleaner accountability while staying privacy-safe (presence only, no speed tracking).",
    keywords: [
      "geofenced clock in",
      "cleaner attendance tracking",
      "cleaning payroll disputes",
      "on-site job verification",
    ],
    publishedAt: "2026-07-09",
    readTime: "6 min read",
    author: "TidyFlow Operations Team",
    sections: [
      {
        heading: "Why manual attendance fails in distributed cleaning teams",
        paragraphs: [
          "When teams report hours by chat or memory at the end of a shift, disputes become normal. Managers cannot verify exactly where shifts started, clients question invoices, and payroll takes longer to approve.",
          "Geofencing fixes this by validating presence at the worksite boundary during clock-in and completion events.",
        ],
      },
      {
        heading: "Presence verification without invasive tracking",
        paragraphs: [
          "Good geofencing for cleaning operations should focus on presence, not route surveillance. You need confirmation that work happened at the right property, not a full movement log.",
          "This approach improves trust with cleaners while still giving management evidence for job completion and invoice defense.",
        ],
      },
      {
        heading: "Where this creates measurable ROI",
        paragraphs: [
          "Operations teams usually report three gains in the first month: fewer no-show disputes, faster payroll sign-off, and fewer client escalations around completed work.",
          "Those outcomes happen because every stakeholder is reading the same timestamped operational record.",
        ],
      },
    ],
  },
  {
    slug: "google-sheets-to-cleaning-operations-system",
    title: "From Google Sheets Chaos to a Real Cleaning Operations System",
    excerpt:
      "A migration path for teams that depend on spreadsheets today but need stronger scheduling, proof, and payroll automation.",
    keywords: [
      "google sheets cleaning schedule",
      "cleaning operations system",
      "spreadsheet migration cleaning",
      "cleaning automation software",
    ],
    publishedAt: "2026-07-09",
    readTime: "7 min read",
    author: "TidyFlow Operations Team",
    sections: [
      {
        heading: "Keep your existing sheet model, then connect operations",
        paragraphs: [
          "Most cleaning businesses have years of data in sheets. A successful migration starts by preserving that structure and layering an operational app on top.",
          "That avoids retraining everyone at once and reduces deployment risk for active contracts.",
        ],
      },
      {
        heading: "Move the high-friction tasks first",
        paragraphs: [
          "The highest ROI sequence is usually: cleaner attendance, checklists, before/after photos, then payroll export. These are the tasks where manual workflows break most often.",
          "Once these are stabilized, schedule updates and client communication become faster with less manager intervention.",
        ],
      },
      {
        heading: "Use synchronization as an audit layer",
        paragraphs: [
          "Bidirectional sync helps teams keep spreadsheet familiarity while introducing operational controls. Owners still see high-level reporting in sheets, while daily execution is captured in real-time and validated in the field app.",
          "This gives you better accountability without forcing a hard system cutover on day one.",
        ],
      },
    ],
  },
  {
    slug: "cleaning-company-kpis-that-actually-matter",
    title: "7 Cleaning Company KPIs That Actually Improve Profitability",
    excerpt:
      "Track fewer metrics, but track the right ones: utilization, verified hours, callback rate, payroll leakage, and client proof cycle time.",
    keywords: [
      "cleaning company KPIs",
      "janitorial business metrics",
      "cleaning profitability",
      "operations KPI dashboard",
    ],
    publishedAt: "2026-07-09",
    readTime: "9 min read",
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
    ],
  },
  {
    slug: "how-to-scale-commercial-cleaning-company",
    title: "How To Scale a Commercial Cleaning Company Without Breaking Operations",
    excerpt:
      "A practical operating model for growing from small local teams to multi-site regional contracts while protecting service quality.",
    keywords: [
      "scale commercial cleaning company",
      "cleaning operations management",
      "multi-site cleaning software",
      "commercial janitorial growth",
    ],
    publishedAt: "2026-07-09",
    readTime: "8 min read",
    author: "TidyFlow Operations Team",
    sections: [
      {
        heading: "Standardize dispatch rules before adding headcount",
        paragraphs: [
          "Growth fails when assignment logic remains tribal knowledge in one manager's head. Build explicit rules for travel radius, skill matching, and shift overlap before expanding crews.",
          "With clear dispatch standards, new managers can operate consistently without degrading service levels.",
        ],
      },
      {
        heading: "Create one source of truth for field execution",
        paragraphs: [
          "As contract volume rises, WhatsApp threads and disconnected checklists become operational blind spots. Use one system where schedules, checklists, and completion proof are recorded against each site.",
          "This visibility is what allows owners to scale confidently across multiple supervisors.",
        ],
      },
      {
        heading: "Automate reporting to protect client confidence",
        paragraphs: [
          "Enterprise and facilities clients expect professional evidence. If reports are manually built from scattered photos, delays and errors are inevitable.",
          "Automated report generation tied to verified job logs helps you maintain trust while account volume grows.",
        ],
      },
    ],
  },
];

export function getAllPosts(): BlogPost[] {
  return BLOG_POSTS;
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}
