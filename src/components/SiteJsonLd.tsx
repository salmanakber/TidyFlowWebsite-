import { getSiteJsonLdGraph } from "@/src/utils/jsonLd";

/** Server-rendered JSON-LD for crawlers (Organization, WebSite, SoftwareApplication). */
export default function SiteJsonLd() {
  const data = getSiteJsonLdGraph();
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
