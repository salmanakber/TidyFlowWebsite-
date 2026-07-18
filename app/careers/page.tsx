import type { Metadata } from "next";
import CareersPage from "@/src/components/CareersPage";
import { buildCustomPageMetadata } from "@/src/utils/seo";

export const metadata: Metadata = buildCustomPageMetadata({
  title: "Careers at TidyFlow | Join Our Cleaning Operations Software Team",
  description:
    "Explore careers at TidyFlow across operations, customer success, sales, and engineering. Apply with your desired compensation — remote-first roles helping cleaning companies run better.",
  keywords:
    "tidyflow careers, cleaning software jobs, remote saas jobs, operations manager careers, customer success jobs, desired salary application",
  canonicalPath: "/careers",
  language: "en",
});

export default function CareersRoute() {
  return <CareersPage />;
}
