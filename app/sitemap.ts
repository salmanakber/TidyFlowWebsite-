/**
 * Dynamic sitemap — clean canonical URLs only (no ?lang= variants).
 * Language is handled client-side / via cookie after middleware redirect.
 */

import type { MetadataRoute } from "next";
import { NEW_FEATURE_SLUGS } from "@/src/content/newFeatures";
import { getAllPosts } from "@/src/content/blogPosts";
import { SITE_URL } from "@/src/utils/seo";

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
