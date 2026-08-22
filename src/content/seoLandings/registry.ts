import type { SeoLandingDefinition, SeoLandingSlug } from "./types";

export const SEO_LANDING_SLUGS: SeoLandingSlug[] = [
  "cleaning-company-software",
  "cleaning-management-software",
  "janitorial-software",
  "commercial-cleaning-software",
  "cleaning-scheduling-software",
  "cleaning-payroll-software",
  "cleaning-inspection-software",
  "cleaning-time-tracking-software",
  "offline-cleaning-software",
  "cleaning-business-software",
];

export const SEO_LANDING_DEFINITIONS: SeoLandingDefinition[] = [
  {
    slug: "cleaning-company-software",
    icon: "Building2",
    isPillar: true,
    targetKeyword: "cleaning company software",
    related: [
      "cleaning-management-software",
      "janitorial-software",
      "commercial-cleaning-software",
      "cleaning-scheduling-software",
      "cleaning-payroll-software",
      "cleaning-inspection-software",
      "cleaning-time-tracking-software",
      "offline-cleaning-software",
    ],
  },
  {
    slug: "cleaning-management-software",
    icon: "LayoutDashboard",
    targetKeyword: "cleaning management software",
    related: ["cleaning-company-software", "cleaning-scheduling-software", "cleaning-business-software"],
  },
  {
    slug: "janitorial-software",
    icon: "Sparkles",
    targetKeyword: "janitorial software",
    related: ["commercial-cleaning-software", "cleaning-scheduling-software", "offline-cleaning-software"],
  },
  {
    slug: "commercial-cleaning-software",
    icon: "Building",
    targetKeyword: "commercial cleaning software",
    related: ["janitorial-software", "cleaning-inspection-software", "cleaning-company-software"],
  },
  {
    slug: "cleaning-scheduling-software",
    icon: "CalendarDays",
    targetKeyword: "cleaning scheduling software",
    related: ["cleaning-management-software", "cleaning-time-tracking-software", "janitorial-software"],
  },
  {
    slug: "cleaning-payroll-software",
    icon: "Wallet",
    targetKeyword: "cleaning payroll software",
    related: ["cleaning-time-tracking-software", "cleaning-company-software", "cleaning-scheduling-software"],
  },
  {
    slug: "cleaning-inspection-software",
    icon: "ClipboardCheck",
    targetKeyword: "cleaning inspection software",
    related: ["commercial-cleaning-software", "offline-cleaning-software", "cleaning-company-software"],
  },
  {
    slug: "cleaning-time-tracking-software",
    icon: "Clock",
    targetKeyword: "cleaning time tracking software",
    related: ["cleaning-payroll-software", "cleaning-scheduling-software", "offline-cleaning-software"],
  },
  {
    slug: "offline-cleaning-software",
    icon: "WifiOff",
    targetKeyword: "offline cleaning software",
    related: ["cleaning-time-tracking-software", "cleaning-inspection-software", "janitorial-software"],
  },
  {
    slug: "cleaning-business-software",
    icon: "TrendingUp",
    targetKeyword: "cleaning business software",
    related: ["cleaning-company-software", "cleaning-management-software", "cleaning-payroll-software"],
  },
];

export function getSeoLandingBySlug(slug: string): SeoLandingDefinition | undefined {
  return SEO_LANDING_DEFINITIONS.find((d) => d.slug === slug);
}

export function isSeoLandingSlug(slug: string): slug is SeoLandingSlug {
  return SEO_LANDING_SLUGS.includes(slug as SeoLandingSlug);
}
