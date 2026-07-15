import type { Metadata } from "next";
import { WhatsNewIndexPage } from "@/src/components/WhatsNewPages";
import { getWhatsNewIndexSeo, getWhatsNewUi } from "@/src/content/newFeatures";
import { SITE_URL, buildCustomPageMetadata, resolveSeoLanguage } from "@/src/utils/seo";

type WhatsNewProps = {
  searchParams: Promise<{ lang?: string }>;
};

export async function generateMetadata({ searchParams }: WhatsNewProps): Promise<Metadata> {
  const { lang } = await searchParams;
  const language = resolveSeoLanguage(lang);
  return buildCustomPageMetadata({
    ...getWhatsNewIndexSeo(language),
    canonicalPath: "/whats-new",
    language,
  });
}

export default async function WhatsNewRoute({ searchParams }: WhatsNewProps) {
  const { lang } = await searchParams;
  const language = resolveSeoLanguage(lang);
  const ui = getWhatsNewUi(language);
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: ui.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: ui.indexTitle,
    itemListElement: [
      "task-chat",
      "quickbooks",
      "integrations-hub",
      "self-serve-billing",
      "plan-limits",
      "revenue-ai",
      "smart-addresses",
      "offline-gps",
      "ai-setup",
      "announcements",
      "supplies",
    ].map((slug, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${SITE_URL}/whats-new/${slug}`,
    })),
  };

  return (
    <>
      <WhatsNewIndexPage />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
    </>
  );
}
