import type { Metadata } from "next";
import CareersPage from "@/src/components/CareersPage";
import { buildCustomPageMetadata, getExtraPageSeo, resolveSeoLanguage } from "@/src/utils/seo";

type CareersProps = {
  searchParams: Promise<{ lang?: string }>;
};

export async function generateMetadata({ searchParams }: CareersProps): Promise<Metadata> {
  const { lang } = await searchParams;
  const language = resolveSeoLanguage(lang);
  const extra = getExtraPageSeo("careers", language);
  return buildCustomPageMetadata({
    ...extra,
    canonicalPath: "/careers",
    language,
  });
}

export default function CareersRoute() {
  return <CareersPage />;
}
