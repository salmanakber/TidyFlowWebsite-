/**
 * Sitemap includes language variants (?lang=) for marketing pages so
 * each locale can rank. Blog articles stay English canonical URLs.
 */

import type { MetadataRoute } from "next";
import { NEW_FEATURE_SLUGS } from "@/src/content/newFeatures";
import { SEO_LANDING_SLUGS } from "@/src/content/seoLandings/registry";
import { getAllPosts } from "@/src/content/blogPosts";
import { SEO_LANGUAGE_CODES, localizedUrl } from "@/src/utils/seo";

function entry(
  path: string,
  lang: string,
  priority: number,
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]
): MetadataRoute.Sitemap[number] {
  return {
    url: localizedUrl(path, lang),
    lastModified: new Date(),
    changeFrequency,
    priority: lang === "en" ? priority : Math.max(0.4, priority - 0.15),
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const corePaths: { path: string; priority: number; freq: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "/", priority: 1.0, freq: "weekly" },
    { path: "/features", priority: 0.9, freq: "monthly" },
    { path: "/whats-new", priority: 0.9, freq: "weekly" },
    ...NEW_FEATURE_SLUGS.map((slug) => ({
      path: `/whats-new/${slug}`,
      priority: 0.8,
      freq: "monthly" as const,
    })),
    { path: "/pricing", priority: 0.9, freq: "weekly" },
    { path: "/integrations", priority: 0.8, freq: "monthly" },
    { path: "/how-it-works", priority: 0.8, freq: "monthly" },
    { path: "/personas", priority: 0.7, freq: "monthly" },
    { path: "/contact", priority: 0.8, freq: "monthly" },
    { path: "/documentation", priority: 0.9, freq: "weekly" },
    { path: "/careers", priority: 0.7, freq: "weekly" },
    { path: "/blog", priority: 0.8, freq: "weekly" },
    ...SEO_LANDING_SLUGS.map((slug) => ({
      path: `/${slug}`,
      priority: slug === "cleaning-company-software" ? 0.85 : 0.75,
      freq: "monthly" as const,
    })),
  ];

  const localized: MetadataRoute.Sitemap = corePaths.flatMap(({ path, priority, freq }) =>
    SEO_LANGUAGE_CODES.map((lang) => entry(path, lang, priority, freq))
  );

  const posts: MetadataRoute.Sitemap = getAllPosts().map((post) =>
    entry(`/blog/${post.slug}`, "en", 0.7, "monthly")
  );

  return [...localized, ...posts];
}
