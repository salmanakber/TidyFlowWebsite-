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
  const marketingPage = seoPage === "documentation" ? "home" : seoPage === "home" ? "home" : seoPage;

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
        pageContext={activeTab === "documentation" ? "documentation" : `marketing:${marketingPage}`}
        onChapterLink={(chapterId) => {
          setDocJumpChapter(chapterId);
          router.push(`/documentation?chapter=${encodeURIComponent(chapterId)}`);
        }}
      />

      <Footer language={language} />
    </div>
  );
}
