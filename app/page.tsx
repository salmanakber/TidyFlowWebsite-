import type { Metadata } from "next";
import { MarketingPageView } from "@/src/components/MarketingSite";
import { getMarketingTranslation } from "@/src/utils/marketingTranslations";
import { SITE_URL, buildPageMetadata, resolveSeoLanguage } from "@/src/utils/seo";

type HomeProps = {
  searchParams: Promise<{ lang?: string }>;
};

export async function generateMetadata({ searchParams }: HomeProps): Promise<Metadata> {
  const { lang } = await searchParams;
  return buildPageMetadata("home", resolveSeoLanguage(lang));
}

export default async function HomePage({ searchParams }: HomeProps) {
  const { lang } = await searchParams;
  const language = resolveSeoLanguage(lang);
  const homeMeta = buildPageMetadata("home", language);
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [1, 2, 3, 4, 5, 6].map((n) => ({
      "@type": "Question",
      name: getMarketingTranslation(`faq${n}Q`, language),
      acceptedAnswer: {
        "@type": "Answer",
        text: getMarketingTranslation(`faq${n}A`, language),
      },
    })),
  };
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_URL}/#webpage`,
    url: SITE_URL,
    name: homeMeta.title,
    description: homeMeta.description,
    inLanguage: language === "cn" ? "zh-CN" : language === "no" ? "nb" : language,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#software` },
  };

  return (
    <>
      <MarketingPageView page="home" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
    </>
  );
}
