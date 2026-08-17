import type { Metadata } from "next";
import BlogIndexView from "@/src/components/BlogIndexView";
import { buildCustomPageMetadata, getExtraPageSeo, resolveSeoLanguage } from "@/src/utils/seo";

type BlogPageProps = {
  searchParams: Promise<{ lang?: string }>;
};

export async function generateMetadata({ searchParams }: BlogPageProps): Promise<Metadata> {
  const { lang } = await searchParams;
  const language = resolveSeoLanguage(lang);
  const extra = getExtraPageSeo("blog", language);
  return buildCustomPageMetadata({
    ...extra,
    canonicalPath: "/blog",
    language,
  });
}

export default function BlogIndexPage() {
  return <BlogIndexView />;
}
