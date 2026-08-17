"use client";

import Link from "next/link";
import { getAllPosts } from "../content/blogPosts";
import { useSite } from "../context/SiteContext";
import { getMarketingTranslation } from "../utils/marketingTranslations";
import { SITE_URL } from "../utils/seo";

const DATE_LOCALES: Record<string, string> = {
  en: "en-US",
  pt: "pt-PT",
  es: "es-ES",
  fr: "fr-FR",
  de: "de-DE",
  pl: "pl-PL",
  no: "nb-NO",
  sv: "sv-SE",
  it: "it-IT",
  ar: "ar",
  cn: "zh-CN",
};

export default function BlogIndexView() {
  const { language } = useSite();
  const mt = (key: string) => getMarketingTranslation(key, language);
  const posts = getAllPosts();
  const dateLocale = DATE_LOCALES[language] || "en-US";

  const listSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${SITE_URL}/blog#blog`,
    name: mt("blogIndexH1"),
    description: mt("blogIndexSub"),
    url: `${SITE_URL}/blog`,
    inLanguage: language === "cn" ? "zh-CN" : language === "no" ? "nb" : language,
    publisher: {
      "@type": "Organization",
      name: "TidyFlow",
      url: SITE_URL,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png` },
    },
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.excerpt,
      datePublished: post.publishedAt,
      url: `${SITE_URL}/blog/${post.slug}`,
      keywords: post.keywords.join(", "),
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: mt("footerHome"), item: SITE_URL },
      { "@type": "ListItem", position: 2, name: mt("blogEyebrow"), item: `${SITE_URL}/blog` },
    ],
  };

  return (
    <div className="pt-20 sm:pt-24 pb-16 sm:pb-20 min-h-screen bg-slate-950 text-slate-100">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
        <header className="space-y-3 sm:space-y-4">
          <p className="text-brand-amber text-[11px] sm:text-xs font-semibold uppercase tracking-widest">
            {mt("blogEyebrow")}
          </p>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
            {mt("blogIndexH1")}
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-3xl">{mt("blogIndexSub")}</p>
        </header>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="border border-slate-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 bg-slate-900/30 flex flex-col"
            >
              <p className="text-[11px] sm:text-xs text-slate-400 mb-2">
                {new Date(post.publishedAt).toLocaleDateString(dateLocale, {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}{" "}
                · {post.readTime}
              </p>
              <h2 className="text-lg sm:text-xl font-bold text-white leading-snug">
                <Link href={`/blog/${post.slug}`} className="hover:text-brand-amber transition-colors">
                  {post.title}
                </Link>
              </h2>
              <p className="mt-2 sm:mt-3 text-slate-300 text-sm leading-relaxed flex-1">{post.excerpt}</p>
              <div className="mt-3 sm:mt-4 flex flex-wrap gap-1.5 sm:gap-2">
                {post.keywords.slice(0, 3).map((keyword) => (
                  <span
                    key={keyword}
                    className="text-[10px] sm:text-[11px] px-2 py-0.5 rounded-full border border-slate-700 text-slate-400"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
              <Link
                href={`/blog/${post.slug}`}
                className="inline-block mt-4 text-brand-amber hover:text-amber-300 font-semibold text-sm"
              >
                {mt("blogReadArticle")}
              </Link>
            </article>
          ))}
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(listSchema) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </div>
  );
}
