import type { Metadata } from "next";
import { Suspense } from "react";
import DocPortal from "@/src/components/DocPortal";
import { buildPageMetadata } from "@/src/utils/seo";

export const metadata: Metadata = buildPageMetadata("documentation");

export default function DocumentationRoute() {
  return (
    <div className="pt-24 min-h-screen bg-slate-950 text-slate-100">
      <Suspense fallback={<div className="p-10 text-center text-slate-400">Loading guide…</div>}>
        <DocPortal />
      </Suspense>
    </div>
  );
}
