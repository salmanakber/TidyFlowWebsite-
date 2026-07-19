import { SITE_URL, OG_IMAGE } from "./seo";
import { NEW_FEATURE_SLUGS, getFeatureCopy } from "../content/newFeatures";
import { SOCIAL_SAME_AS } from "../config/appLinks";

export function getSiteJsonLdGraph() {
  const whatsNewList = NEW_FEATURE_SLUGS.map((slug, index) => {
    const copy = getFeatureCopy(slug, "en");
    return {
      "@type": "ListItem",
      position: index + 1,
      name: copy.pillShort,
      url: `${SITE_URL}/whats-new/${slug}`,
      description: copy.seoDescription,
    };
  });

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: "TidyFlow",
        url: SITE_URL,
        logo: `${SITE_URL}/logo.png`,
        image: OG_IMAGE,
        email: "tidyflaw@gmail.com",
        description:
          "All-in-one cleaning company software: offline field app, GPS geofencing, Google Sheets sync, QuickBooks invoices, task chat, payroll, and client proof for janitorial teams.",
        foundingDate: "2024",
        founder: {
          "@type": "Person",
          name: "Salman Akber",
        },
        sameAs: [...SOCIAL_SAME_AS],
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "sales",
          email: "tidyflaw@gmail.com",
          url: `${SITE_URL}/contact`,
          availableLanguage: [
            "English",
            "Portuguese",
            "Spanish",
            "Arabic",
            "Chinese",
            "French",
            "German",
            "Polish",
            "Norwegian",
            "Swedish",
            "Italian",
          ],
        },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "TidyFlow",
        description:
          "Cleaning operations software for commercial and residential cleaning companies worldwide.",
        publisher: { "@id": `${SITE_URL}/#organization` },
        inLanguage: ["en", "pt", "es", "fr", "de", "pl", "nb", "sv", "it", "ar", "zh-CN"],
        potentialAction: {
          "@type": "SearchAction",
          target: `${SITE_URL}/documentation?q={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${SITE_URL}/#software`,
        name: "TidyFlow",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web, iOS, Android",
        url: SITE_URL,
        offers: {
          "@type": "AggregateOffer",
          lowPrice: "9",
          highPrice: "149",
          priceCurrency: "USD",
          offerCount: 3,
          description: "14-day free trial · Startup from $9/month · Standard $79 · Premium $149",
          url: `${SITE_URL}/pricing`,
        },
        featureList: [
          "Offline cleaning field app",
          "GPS geofenced on-site verification",
          "Offline GPS location queue",
          "Two-way Google Sheets sync",
          "QuickBooks Online invoice sync",
          "Integrations hub (Sheets, QuickBooks, Stripe)",
          "Per-task team chat with voice notes",
          "Company announcements",
          "AI cleaner dispatch recommendations",
          "AI job setup assistant",
          "Revenue AI profit analysis",
          "Smart address autocomplete by country",
          "Supplies tracking per job",
          "Self-serve billing and plan usage meters",
          "Payroll from verified hours",
          "Before/after photo proof for clients",
          "SOS lone-worker safety alerts",
          "Branded PDF client reports",
        ],
        screenshot: OG_IMAGE,
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
      {
        "@type": "ItemList",
        "@id": `${SITE_URL}/whats-new#features`,
        name: "What's New in TidyFlow",
        url: `${SITE_URL}/whats-new`,
        numberOfItems: whatsNewList.length,
        itemListElement: whatsNewList,
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}/#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Features", item: `${SITE_URL}/features` },
          { "@type": "ListItem", position: 3, name: "What's New", item: `${SITE_URL}/whats-new` },
          { "@type": "ListItem", position: 4, name: "Pricing", item: `${SITE_URL}/pricing` },
          { "@type": "ListItem", position: 5, name: "Documentation", item: `${SITE_URL}/documentation` },
        ],
      },
    ],
  };
}
