import type { Metadata } from "next";
import CareersPage from "@/src/components/CareersPage";
import { SITE_URL } from "@/src/utils/seo";

export const metadata: Metadata = {
  title: "Careers at TidyFlow | Join Our Cleaning Operations Software Team",
  description:
    "Explore careers at TidyFlow across operations, customer success, sales, and engineering. Apply directly for remote-first roles helping cleaning companies run better.",
  keywords: [
    "tidyflow careers",
    "cleaning software jobs",
    "remote saas jobs",
    "operations manager careers",
    "customer success jobs",
  ],
  alternates: {
    canonical: `${SITE_URL}/careers`,
  },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/careers`,
    title: "Careers at TidyFlow",
    description:
      "Join TidyFlow and help build the operating system for cleaning companies worldwide.",
    images: [{ url: `${SITE_URL}/og-image.png` }],
  },
};

export default function CareersRoute() {
  return <CareersPage />;
}
