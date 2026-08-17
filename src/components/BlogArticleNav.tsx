"use client";

import Link from "next/link";
import { useSite } from "../context/SiteContext";
import { getMarketingTranslation } from "../utils/marketingTranslations";

export function BlogArticleNav({ currentTitle }: { currentTitle: string }) {
  const { language } = useSite();
  const mt = (key: string) => getMarketingTranslation(key, language);

  return (
    <>
      <nav aria-label="Breadcrumb" className="text-xs sm:text-sm text-slate-500 mb-4">
        <ol className="flex flex-wrap items-center gap-1.5">
          <li>
            <Link href="/" className="hover:text-brand-amber">
              {mt("footerHome")}
            </Link>
          </li>
          <li aria-hidden>/</li>
          <li>
            <Link href="/blog" className="hover:text-brand-amber">
              {mt("blogEyebrow")}
            </Link>
          </li>
          <li aria-hidden>/</li>
          <li className="text-slate-400 truncate max-w-[12rem] sm:max-w-xs">{currentTitle}</li>
        </ol>
      </nav>
      {language !== "en" && (
        <p className="mb-4 text-xs sm:text-sm text-slate-400 border border-slate-800 rounded-xl px-3 py-2">
          {mt("blogEnglishNote")}
        </p>
      )}
    </>
  );
}
