import { getAllPosts } from "@/src/content/blogPosts";
import { SITE_URL } from "@/src/utils/seo";

function xmlEscape(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  const posts = getAllPosts();
  const buildDate =
    posts.length > 0
      ? new Date(posts[0].publishedAt).toUTCString()
      : new Date().toUTCString();

  const items = posts
    .map((post) => {
      const link = `${SITE_URL}/blog/${post.slug}`;
      return `
    <item>
      <title>${xmlEscape(post.title)}</title>
      <link>${link}</link>
      <guid>${link}</guid>
      <description>${xmlEscape(post.excerpt)}</description>
      <pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate>
      <author>hello@tidyflowapp.com (${xmlEscape(post.author)})</author>
      <category>${xmlEscape(post.keywords[0] || "Cleaning Operations")}</category>
    </item>`;
    })
    .join("\n");

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>TidyFlow Blog</title>
    <link>${SITE_URL}/blog</link>
    <description>Cleaning operations insights, guides, and best practices from TidyFlow.</description>
    <language>en-us</language>
    <lastBuildDate>${buildDate}</lastBuildDate>
    <atom:link href="${SITE_URL}/blog/rss.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
