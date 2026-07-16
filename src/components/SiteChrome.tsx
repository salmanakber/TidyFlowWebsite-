"use client";

import React, { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";
import TidyBotWidget from "./TidyBotWidget";
import { useSite } from "../context/SiteContext";
import { pageFromPath } from "../utils/seo";

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
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

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
