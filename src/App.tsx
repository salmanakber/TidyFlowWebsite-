/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import MarketingSite from "./components/MarketingSite";
import DocPortal from "./components/DocPortal";
import Footer from "./components/Footer";
import TidyBotWidget from "./components/TidyBotWidget";
import { applySeoMeta, getSeoMeta } from "./utils/seo";

export default function App() {
  // Navigation states: 'marketing' (Marketing website) or 'documentation' (User Guide Docs portal)
  const [activeTab, setActiveTab] = useState<"marketing" | "documentation">("marketing");

  // Sub-pages inside the marketing funnel
  const [marketingPage, setMarketingPage] = useState<string>("home");

  const [docJumpChapter, setDocJumpChapter] = useState<string | null>(null);

  // Selected language state
  const [language, setLanguage] = useState<string>(() => {
    return localStorage.getItem("tidyflow_language") || "en";
  });

  // Selected Theme state ('light', 'dark', or 'system' default)
  const [theme, setTheme] = useState<"light" | "dark" | "system">(() => {
    return (localStorage.getItem("tidyflow_theme") as "light" | "dark" | "system") || "dark";
  });

  // Keep page scrolled to the top on transition
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activeTab, marketingPage]);

  // Sync theme with localstorage
  useEffect(() => {
    localStorage.setItem("tidyflow_theme", theme);
  }, [theme]);

  // Update document title, meta tags, and lang for SEO
  useEffect(() => {
    applySeoMeta(getSeoMeta(activeTab, marketingPage, language), language);
  }, [activeTab, marketingPage, language]);

  const isRTL = language === "ar";
  const themeClass = theme === "light" ? "light-mode" : theme === "dark" ? "dark-mode" : "system-mode";

  return (
    <div 
      className={`min-h-screen flex flex-col justify-between transition-colors duration-300 ${themeClass}`}
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Universal Sticky Responsive Navigation Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        marketingPage={marketingPage}
        setMarketingPage={setMarketingPage}
        language={language}
        setLanguage={setLanguage}
        theme={theme}
        setTheme={setTheme}
      />

      {/* Main Container rendering active route content */}
      <main className="flex-1">
        {activeTab === "marketing" ? (
          <MarketingSite
            page={marketingPage}
            setPage={setMarketingPage}
            setActiveTab={setActiveTab}
            language={language}
          />
        ) : (
          <DocPortal
            language={language}
            jumpToChapterId={docJumpChapter}
            onJumpHandled={() => setDocJumpChapter(null)}
          />
        )}
      </main>

      <TidyBotWidget
        language={language}
        pageContext={activeTab === "documentation" ? "documentation" : `marketing:${marketingPage}`}
        onChapterLink={(chapterId) => {
          setDocJumpChapter(chapterId);
          setActiveTab("documentation");
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      />

      {/* Universal Sitemap Footer */}
      <Footer
        setMarketingPage={setMarketingPage}
        setActiveTab={setActiveTab}
        language={language}
      />
    </div>
  );
}

