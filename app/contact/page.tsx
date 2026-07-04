import type { Metadata } from "next";
import { MarketingPageView } from "@/src/components/MarketingSite";
import { buildPageMetadata } from "@/src/utils/seo";

export const metadata: Metadata = buildPageMetadata("contact");

export default function ContactRoute() {
  return <MarketingPageView page="contact" />;
}
