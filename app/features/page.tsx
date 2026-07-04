import type { Metadata } from "next";
import { MarketingPageView } from "@/src/components/MarketingSite";
import { buildPageMetadata } from "@/src/utils/seo";

export const metadata: Metadata = buildPageMetadata("features");

export default function FeaturesRoute() {
  return <MarketingPageView page="features" />;
}
