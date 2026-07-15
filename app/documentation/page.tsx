import type { Metadata } from "next";
import { Suspense } from "react";
import DocPortal from "@/src/components/DocPortal";
import { buildPageMetadata, resolveSeoLanguage } from "@/src/utils/seo";

type PageProps = {
  searchParams: Promise<{ lang?: string }>;
};

export async function generateMetadata({ searchParams }: PageProps): Promise<Metadata> {
  const { lang } = await searchParams;
  return buildPageMetadata("documentation", resolveSeoLanguage(lang));
}

export default function DocumentationRoute() {
  return (
    <div className="pt-24 min-h-screen bg-slate-950 text-slate-100">
      <Suspense fallback={<div className="p-10 text-center text-slate-400">Loading guide…</div>}>
        <DocPortal />
      </Suspense>
    </div>
  );
}
