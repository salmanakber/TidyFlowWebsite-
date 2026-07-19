import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/src/content/blogPosts";
import { SITE_URL } from "@/src/utils/seo";

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
    title: post.metaTitle,
    description: post.excerpt,
    keywords: post.keywords,
    alternates: { canonical: `${SITE_URL}/blog/${post.slug}` },
    openGraph: {
      type: "article",
      url: `${SITE_URL}/blog/${post.slug}`,
      title: post.metaTitle,
      description: post.excerpt,
      publishedTime: post.publishedAt,
      authors: [post.author],
      images: [{ url: `${SITE_URL}/og-image.png` }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle,
      description: post.excerpt,
      images: [`${SITE_URL}/og-image.png`],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

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
    },
    publisher: {
      "@type": "Organization",
      name: "TidyFlow",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
      },
    },
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
    image: `${SITE_URL}/og-image.png`,
    keywords: post.keywords.join(", "),
  };

  return (
    <article className="pt-28 pb-20 min-h-screen bg-slate-950 text-slate-100">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/blog" className="text-brand-amber hover:text-amber-300 text-sm font-semibold">
          ← Back to blog
        </Link>

        <header className="mt-5 space-y-4">
          <p className="text-xs text-slate-400">
            {new Date(post.publishedAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}{" "}
            · {post.readTime}
          </p>
          <h1 className="font-display text-3xl sm:text-4xl font-extrabold leading-tight">{post.title}</h1>
          <p className="text-slate-300">{post.excerpt}</p>
        </header>

        <div className="mt-10 space-y-10">
          {post.sections.map((section) => (
            <section key={section.heading} className="space-y-4">
              <h2 className="text-2xl font-bold text-white">{section.heading}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-slate-300 leading-7">
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
        </div>

        <aside className="mt-14 border border-slate-800 rounded-2xl p-6 bg-slate-900/40">
          <h3 className="font-bold text-white text-lg">Want this in your operation?</h3>
          <p className="text-slate-300 mt-2 text-sm">
            Book a TidyFlow demo and get a practical rollout plan for your team.
          </p>
          <Link
            href="/contact"
            className="inline-block mt-4 px-4 py-2 rounded-lg bg-brand-amber text-slate-950 font-semibold text-sm"
          >
            Book Demo
          </Link>
        </aside>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(postSchema) }} />
    </article>
  );
}
