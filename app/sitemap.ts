/**
 * Dynamic sitemap for Next.js App Router.
 * Complements public/sitemap.xml with lastModified + language alternates.
 */

import type { MetadataRoute } from "next";
import { NEW_FEATURE_SLUGS } from "@/src/content/newFeatures";
import { getAllPosts } from "@/src/content/blogPosts";
import { SITE_URL, HREFLANG_MAP } from "@/src/utils/seo";

const LANG_CODES = Object.keys(HREFLANG_MAP);

function languageAlternates(path: string): Record<string, string> {
  const clean = path === "/" ? "" : path;
  const languages: Record<string, string> = {
    "x-default": `${SITE_URL}${clean || "/"}`,
  };
  for (const code of LANG_CODES) {
    const hreflang = HREFLANG_MAP[code];
    languages[hreflang] = clean
      ? `${SITE_URL}${clean}?lang=${code}`
      : `${SITE_URL}/?lang=${code}`;
  }
  return languages;
}

function entry(
  path: string,
  priority: number,
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]
): MetadataRoute.Sitemap[number] {
  return {
    url: path === "/" ? SITE_URL : `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
    alternates: {
      languages: languageAlternates(path),
    },
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const core: MetadataRoute.Sitemap = [
    entry("/", 1.0, "weekly"),
    entry("/features", 0.9, "monthly"),
    entry("/whats-new", 0.9, "weekly"),
    ...NEW_FEATURE_SLUGS.map((slug) => entry(`/whats-new/${slug}`, 0.8, "monthly")),
    entry("/pricing", 0.9, "weekly"),
    entry("/integrations", 0.8, "monthly"),
    entry("/how-it-works", 0.8, "monthly"),
    entry("/personas", 0.7, "monthly"),
    entry("/contact", 0.8, "monthly"),
    entry("/documentation", 0.9, "weekly"),
    entry("/careers", 0.7, "weekly"),
    entry("/blog", 0.8, "weekly"),
  ];

  const posts: MetadataRoute.Sitemap = getAllPosts().map((post) =>
    entry(`/blog/${post.slug}`, 0.7, "monthly")
  );

  return [...core, ...posts];
}
