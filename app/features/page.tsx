import type { Metadata } from "next";
import { MarketingPageView } from "@/src/components/MarketingSite";
import { buildPageMetadata, resolveSeoLanguage } from "@/src/utils/seo";

type PageProps = {
  searchParams: Promise<{ lang?: string }>;
};

export async function generateMetadata({ searchParams }: PageProps): Promise<Metadata> {
  const { lang } = await searchParams;
  return buildPageMetadata("features", resolveSeoLanguage(lang));
}

export default function FeaturesRoute() {
  return <MarketingPageView page="features" />;
}
