"use client";

import React, { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";
import TidyBotWidget from "./TidyBotWidget";
import { useSite } from "../context/SiteContext";
import { applySeoMeta, getExtraPageSeo, getSeoMeta, pageFromPath } from "../utils/seo";
import { getFeatureBySlug, getFeatureCopy, getWhatsNewIndexSeo } from "../content/newFeatures";

export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() || "/";
  const router = useRouter();
  const { language, setLanguage, theme, setTheme, setDocJumpChapter } = useSite();

  const seoPage = pageFromPath(pathname);
  const activeTab = seoPage === "documentation" ? "documentation" : "marketing";
  const pathParts = pathname.replace(/^\/+|\/+$/g, "").split("/").filter(Boolean);
  const pathPageId = pathParts[0] || "home";
  const whatsNewSlug = pathPageId === "whats-new" && pathParts[1] ? pathParts[1] : null;
  const marketingPage =
    seoPage === "documentation"
      ? "home"
      : ["blog", "careers", "whats-new"].includes(pathPageId)
        ? pathPageId
        : seoPage === "home"
          ? "home"
          : seoPage;

  const tidyBotPageContext =
    activeTab === "documentation"
      ? "documentation"
      : whatsNewSlug
        ? `marketing:whats-new:${whatsNewSlug}`
        : `marketing:${marketingPage}`;

  const isRTL = language === "ar";
  const themeClass = theme === "light" ? "light-mode" : theme === "dark" ? "dark-mode" : "system-mode";

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("light-mode", "dark-mode", "system-mode");
    root.classList.add(themeClass);
    const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
    root.style.colorScheme = theme === "light" || (theme === "system" && prefersLight) ? "light" : "dark";
  }, [themeClass, theme]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  useEffect(() => {
    if (pathPageId === "blog") {
      const slug = pathParts[1];
      if (slug) return;
      const extra = getExtraPageSeo("blog", language);
      applySeoMeta({ ...extra, canonicalPath: "/blog" }, language);
      return;
    }
    if (pathPageId === "careers") {
      const extra = getExtraPageSeo("careers", language);
      applySeoMeta({ ...extra, canonicalPath: "/careers" }, language);
      return;
    }
    if (whatsNewSlug) {
      const feature = getFeatureBySlug(whatsNewSlug);
      if (!feature) return;
      const copy = getFeatureCopy(feature.slug, language);
      applySeoMeta(
        {
          title: copy.seoTitle,
          description: copy.seoDescription,
          keywords: copy.keywords,
          canonicalPath: `/whats-new/${feature.slug}`,
        },
        language
      );
      return;
    }
    if (pathPageId === "whats-new") {
      const extra = getWhatsNewIndexSeo(language);
      applySeoMeta({ ...extra, canonicalPath: "/whats-new" }, language);
      return;
    }
    applySeoMeta(getSeoMeta(activeTab, marketingPage, language), language);
  }, [language, pathname, activeTab, marketingPage, pathPageId, whatsNewSlug]);

  return (
    <div
      className={`min-h-screen flex flex-col justify-between transition-colors duration-300 ${themeClass}`}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <Header
        activeTab={activeTab}
        marketingPage={marketingPage}
        language={language}
        setLanguage={setLanguage}
        theme={theme}
        setTheme={setTheme}
      />

      <main className="flex-1">{children}</main>

      <TidyBotWidget
        language={language}
        pageContext={tidyBotPageContext}
        onChapterLink={(chapterId) => {
          setDocJumpChapter(chapterId);
          router.push(`/documentation?chapter=${encodeURIComponent(chapterId)}`);
        }}
      />

      <Footer language={language} />
    </div>
  );
}
