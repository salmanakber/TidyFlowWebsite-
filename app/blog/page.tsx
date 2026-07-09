import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/src/content/blogPosts";
import { SITE_URL } from "@/src/utils/seo";

export const metadata: Metadata = {
  title: "TidyFlow Blog | Cleaning Operations, Scheduling, Payroll, and Growth Guides",
  description:
    "Actionable guides for cleaning company owners and managers: operations systems, geofenced attendance, KPI dashboards, payroll accuracy, and growth playbooks.",
  keywords: [
    "cleaning operations blog",
    "janitorial management tips",
    "cleaning business growth",
    "cleaning company software guides",
  ],
  alternates: { canonical: `${SITE_URL}/blog` },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/blog`,
    title: "TidyFlow Blog",
    description:
      "Expert articles on scaling cleaning operations with better systems, automation, and field accountability.",
    images: [{ url: `${SITE_URL}/og-image.png` }],
  },
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  const listSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: posts.map((post, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      url: `${SITE_URL}/blog/${post.slug}`,
      name: post.title,
    })),
  };

  return (
    <div className="pt-28 pb-20 min-h-screen bg-slate-950 text-slate-100">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <header className="space-y-4">
          <p className="text-brand-amber text-xs font-semibold uppercase tracking-widest">TidyFlow Insights</p>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold">
            Cleaning operations blog for owners and managers
          </h1>
          <p className="text-slate-300 max-w-3xl">
            Practical articles on scheduling, workforce reliability, payroll quality, and scaling
            your cleaning business with better operational systems.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-6">
          {posts.map((post) => (
            <article key={post.slug} className="border border-slate-800 rounded-2xl p-6 bg-slate-900/30">
              <p className="text-xs text-slate-400 mb-2">
                {new Date(post.publishedAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}{" "}
                · {post.readTime}
              </p>
              <h2 className="text-xl font-bold text-white leading-snug">{post.title}</h2>
              <p className="mt-3 text-slate-300 text-sm leading-relaxed">{post.excerpt}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {post.keywords.slice(0, 3).map((keyword) => (
                  <span
                    key={keyword}
                    className="text-[11px] px-2 py-1 rounded-full border border-slate-700 text-slate-300"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
              <Link
                href={`/blog/${post.slug}`}
                className="inline-block mt-5 text-brand-amber hover:text-amber-300 font-semibold text-sm"
              >
                Read article →
              </Link>
            </article>
          ))}
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(listSchema) }} />
    </div>
  );
}
