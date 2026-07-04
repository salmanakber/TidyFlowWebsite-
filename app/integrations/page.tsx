import type { Metadata } from "next";
import { MarketingPageView } from "@/src/components/MarketingSite";
import { buildPageMetadata } from "@/src/utils/seo";

export const metadata: Metadata = buildPageMetadata("integrations");

export default function IntegrationsRoute() {
  return <MarketingPageView page="integrations" />;
}
