import type { Metadata } from "next";
import { MarketingPageView } from "@/src/components/MarketingSite";
import { buildPageMetadata } from "@/src/utils/seo";

export const metadata: Metadata = buildPageMetadata("personas");

export default function PersonasRoute() {
  return <MarketingPageView page="personas" />;
}
