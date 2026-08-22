import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SeoLandingPage } from "@/src/components/SeoLandingPage";
import {
  SEO_LANDING_SLUGS,
  getSeoLandingBySlug,
  isSeoLandingSlug,
} from "@/src/content/seoLandings/registry";
import { getSeoLandingCopy } from "@/src/content/seoLandings";
import { SITE_URL, buildCustomPageMetadata, resolveSeoLanguage } from "@/src/utils/seo";
import type { SeoLandingSlug } from "@/src/content/seoLandings/types";

type LandingRouteProps = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ lang?: string }>;
};

export async function generateStaticParams() {
  return SEO_LANDING_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params, searchParams }: LandingRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const { lang } = await searchParams;
  if (!isSeoLandingSlug(slug)) {
    return { title: "Not Found | TidyFlow", robots: { index: false, follow: false } };
  }

  const language = resolveSeoLanguage(lang);
  const copy = getSeoLandingCopy(slug, language);
  return buildCustomPageMetadata({
    title: copy.seoTitle,
    description: copy.seoDescription,
    keywords: copy.keywords,
    canonicalPath: `/${slug}`,
    language,
  });
}

export default async function SeoLandingRoute({ params, searchParams }: LandingRouteProps) {
  const { slug } = await params;
  const { lang } = await searchParams;
  if (!isSeoLandingSlug(slug)) notFound();

  const language = resolveSeoLanguage(lang);
  const copy = getSeoLandingCopy(slug as SeoLandingSlug, language);
  const def = getSeoLandingBySlug(slug)!;

  const breadcrumbItems = def.isPillar
    ? [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        {
          "@type": "ListItem",
          position: 2,
          name: copy.navLabel,
          item: `${SITE_URL}/${slug}`,
        },
      ]
    : [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        {
          "@type": "ListItem",
          position: 2,
          name: "Cleaning company software",
          item: `${SITE_URL}/cleaning-company-software`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: copy.navLabel,
          item: `${SITE_URL}/${slug}`,
        },
      ];

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbItems,
  };

  const webPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: copy.seoTitle,
    description: copy.seoDescription,
    url: `${SITE_URL}/${slug}`,
    inLanguage: language === "cn" ? "zh-CN" : language === "no" ? "nb" : language,
    isPartOf: { "@type": "WebSite", name: "TidyFlow", url: SITE_URL },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: copy.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: `TidyFlow — ${copy.navLabel}`,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web, iOS, Android",
    description: copy.seoDescription,
    url: `${SITE_URL}/${slug}`,
    inLanguage: language === "cn" ? "zh-CN" : language === "no" ? "nb" : language,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      description: "14-day free trial · Plans from $25/month",
    },
    isPartOf: { "@type": "SoftwareApplication", name: "TidyFlow", url: SITE_URL },
  };

  return (
    <>
      <SeoLandingPage slug={slug as SeoLandingSlug} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
    </>
  );
}
