import type { Metadata } from "next";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { BLOG_SLUG_REDIRECTS, getAllPosts, getPostBySlug } from "@/src/content/blogPosts";
import { SITE_URL, buildCustomPageMetadata, OG_IMAGE } from "@/src/utils/seo";

type BlogPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) {
    return {
      title: "Blog Post Not Found | TidyFlow",
      robots: { index: false, follow: false },
    };
  }

  return {
    ...buildCustomPageMetadata({
      title: post.metaTitle,
      description: post.excerpt,
      keywords: post.keywords.join(", "),
      canonicalPath: `/blog/${post.slug}`,
    }),
    openGraph: {
      type: "article",
      url: `${SITE_URL}/blog/${post.slug}`,
      title: post.metaTitle,
      description: post.excerpt,
      publishedTime: post.publishedAt,
      modifiedTime: post.publishedAt,
      authors: [post.author],
      siteName: "TidyFlow",
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      site: "@tidyflowapp",
      title: post.metaTitle,
      description: post.excerpt,
      images: [OG_IMAGE],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPageProps) {
  const { slug } = await params;

  if (BLOG_SLUG_REDIRECTS[slug]) {
    redirect(`/blog/${BLOG_SLUG_REDIRECTS[slug]}`);
  }

  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getAllPosts()
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  const postSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: {
      "@type": "Organization",
      name: post.author,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "TidyFlow",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${post.slug}`,
    },
    image: OG_IMAGE,
    keywords: post.keywords.join(", "),
    inLanguage: "en",
    isPartOf: {
      "@type": "Blog",
      "@id": `${SITE_URL}/blog#blog`,
      name: "TidyFlow Blog",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `${SITE_URL}/blog/${post.slug}`,
      },
    ],
  };

  return (
    <article className="pt-20 sm:pt-24 pb-16 sm:pb-20 min-h-screen bg-slate-950 text-slate-100">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="text-xs sm:text-sm text-slate-500 mb-4">
          <ol className="flex flex-wrap items-center gap-1.5">
            <li>
              <Link href="/" className="hover:text-brand-amber">
                Home
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li>
              <Link href="/blog" className="hover:text-brand-amber">
                Blog
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li className="text-slate-400 truncate max-w-[12rem] sm:max-w-xs">{post.metaTitle}</li>
          </ol>
        </nav>

        <header className="mt-2 space-y-3 sm:space-y-4">
          <p className="text-[11px] sm:text-xs text-slate-400">
            <time dateTime={post.publishedAt}>
              {new Date(post.publishedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>{" "}
            · {post.readTime} · {post.author}
          </p>
          <h1 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight">
            {post.title}
          </h1>
          <p className="text-slate-300 text-sm sm:text-base">{post.excerpt}</p>
        </header>

        <div className="mt-8 sm:mt-10 space-y-8 sm:space-y-10">
          {post.sections.map((section) => (
            <section key={section.heading} className="space-y-3 sm:space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white">{section.heading}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className="text-slate-300 text-sm sm:text-base leading-7">
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
        </div>

        <aside className="mt-10 sm:mt-14 border border-slate-800 rounded-xl sm:rounded-2xl p-5 sm:p-6 bg-slate-900/40">
          <h3 className="font-bold text-white text-base sm:text-lg">Want this in your operation?</h3>
          <p className="text-slate-300 mt-2 text-sm">
            Book a TidyFlow demo and get a practical rollout plan for your team — offline field app,
            GPS proof, QuickBooks sync, and payroll from verified hours.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Link
              href="/contact"
              className="inline-block px-4 py-2 rounded-lg bg-brand-amber text-slate-950 font-semibold text-sm"
            >
              Book Demo
            </Link>
            <Link
              href="/pricing"
              className="inline-block px-4 py-2 rounded-lg border border-slate-700 text-slate-200 font-semibold text-sm hover:border-brand-amber/50"
            >
              See pricing
            </Link>
          </div>
        </aside>

        {related.length > 0 && (
          <section className="mt-12 sm:mt-14 border-t border-slate-800 pt-8">
            <h2 className="text-lg sm:text-xl font-bold text-white mb-4">Related guides</h2>
            <ul className="space-y-3">
              {related.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/blog/${item.slug}`}
                    className="block rounded-lg border border-slate-800 bg-slate-900/30 p-3 sm:p-4 hover:border-brand-amber/40 transition-colors"
                  >
                    <span className="font-semibold text-sm sm:text-base text-white">{item.title}</span>
                    <span className="block mt-1 text-xs sm:text-sm text-slate-400 line-clamp-2">
                      {item.excerpt}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(postSchema) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </article>
  );
}
