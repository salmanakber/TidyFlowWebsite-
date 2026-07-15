import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { WhatsNewFeaturePage } from "@/src/components/WhatsNewPages";
import {
  NEW_FEATURE_SLUGS,
  getFeatureBySlug,
  getFeatureCopy,
  type NewFeatureSlug,
} from "@/src/content/newFeatures";
import { SITE_URL, buildCustomPageMetadata, resolveSeoLanguage } from "@/src/utils/seo";

type FeaturePageProps = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ lang?: string }>;
};

export async function generateStaticParams() {
  return NEW_FEATURE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params, searchParams }: FeaturePageProps): Promise<Metadata> {
  const { slug } = await params;
  const { lang } = await searchParams;
  const feature = getFeatureBySlug(slug);
  if (!feature) {
    return { title: "Feature Not Found | TidyFlow", robots: { index: false, follow: false } };
  }

  const language = resolveSeoLanguage(lang);
  const copy = getFeatureCopy(feature.slug, language);
  return buildCustomPageMetadata({
    title: copy.seoTitle,
    description: copy.seoDescription,
    keywords: copy.keywords,
    canonicalPath: `/whats-new/${feature.slug}`,
    language,
  });
}

export default async function WhatsNewFeatureRoute({ params, searchParams }: FeaturePageProps) {
  const { slug } = await params;
  const { lang } = await searchParams;
  const feature = getFeatureBySlug(slug);
  if (!feature) notFound();

  const language = resolveSeoLanguage(lang);
  const copy = getFeatureCopy(feature.slug, language);
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: `TidyFlow — ${copy.pillShort}`,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web, iOS, Android",
    description: copy.seoDescription,
    url: `${SITE_URL}/whats-new/${feature.slug}`,
    inLanguage: language === "cn" ? "zh-CN" : language === "no" ? "nb" : language,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      description: "Included with applicable TidyFlow plans · 14-day free trial",
    },
    featureList: copy.bullets,
    isPartOf: {
      "@type": "SoftwareApplication",
      name: "TidyFlow",
      url: SITE_URL,
    },
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "What’s New", item: `${SITE_URL}/whats-new` },
      {
        "@type": "ListItem",
        position: 3,
        name: copy.pillShort,
        item: `${SITE_URL}/whats-new/${feature.slug}`,
      },
    ],
  };

  return (
    <>
      <WhatsNewFeaturePage slug={feature.slug as NewFeatureSlug} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
    </>
  );
}
