import type { Metadata } from "next";
import { MarketingPageView } from "@/src/components/MarketingSite";
import { buildPageMetadata } from "@/src/utils/seo";

export const metadata: Metadata = buildPageMetadata("how-it-works");

export default function HowItWorksRoute() {
  return <MarketingPageView page="how-it-works" />;
}
