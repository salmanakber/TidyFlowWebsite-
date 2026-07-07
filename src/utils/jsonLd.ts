import { SITE_URL, OG_IMAGE } from "./seo";

export function getSiteJsonLdGraph() {
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
          "All-in-one cleaning company software: offline field app, GPS geofencing, Google Sheets sync, payroll, and client proof for janitorial teams.",
        sameAs: [],
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
        offers: {
          "@type": "Offer",
          price: "9",
          priceCurrency: "USD",
          description: "14-day free trial · Startup plan from $9/month",
          url: `${SITE_URL}/pricing`,
        },
        featureList: [
          "Offline cleaning field app",
          "GPS geofenced on-site verification",
          "Two-way Google Sheets sync",
          "AI cleaner dispatch recommendations",
          "Payroll from verified hours",
          "Before/after photo proof for clients",
          "SOS lone-worker safety alerts",
          "Branded PDF client reports",
        ],
        screenshot: OG_IMAGE,
      },
    ],
  };
}
