import type { Metadata } from "next";
import CareersPage from "@/src/components/CareersPage";
import { buildCustomPageMetadata } from "@/src/utils/seo";

export const metadata: Metadata = buildCustomPageMetadata({
  title: "Careers at TidyFlow",
  description:
    "Remote-first roles in operations, customer success, sales, and engineering. Apply with your desired pay — help cleaning companies run better with TidyFlow.",
  keywords:
    "tidyflow careers, cleaning software jobs, remote saas jobs, operations manager careers, customer success jobs, desired salary application",
  canonicalPath: "/careers",
  language: "en",
});

export default function CareersRoute() {
  return <CareersPage />;
}
