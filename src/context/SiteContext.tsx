"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

type Theme = "light" | "dark" | "system";

interface SiteContextValue {
  language: string;
  setLanguage: (lang: string) => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
  docJumpChapter: string | null;
  setDocJumpChapter: (id: string | null) => void;
}

const SiteContext = createContext<SiteContextValue | null>(null);

export function SiteProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState("en");
  const [theme, setThemeState] = useState<Theme>("dark");
  const [docJumpChapter, setDocJumpChapter] = useState<string | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const storedLang = localStorage.getItem("tidyflow_language");
    const params = new URLSearchParams(window.location.search);
    const queryLang = params.get("lang");
    if (queryLang) {
      setLanguageState(queryLang);
      localStorage.setItem("tidyflow_language", queryLang);
    } else if (storedLang) {
      setLanguageState(storedLang);
    }

    const storedTheme = localStorage.getItem("tidyflow_theme") as Theme | null;
    if (storedTheme === "light" || storedTheme === "dark" || storedTheme === "system") {
      setThemeState(storedTheme);
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    localStorage.setItem("tidyflow_theme", theme);
  }, [theme, ready]);

  useEffect(() => {
    if (!ready) return;
    document.documentElement.lang = language === "cn" ? "zh-CN" : language === "no" ? "nb" : language;
  }, [language, ready]);

  const setLanguage = (lang: string) => {
    setLanguageState(lang);
    localStorage.setItem("tidyflow_language", lang);
  };

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      theme,
      setTheme: setThemeState,
      docJumpChapter,
      setDocJumpChapter,
    }),
    [language, theme, docJumpChapter]
  );

  return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>;
}

export function useSite() {
  const ctx = useContext(SiteContext);
  if (!ctx) throw new Error("useSite must be used within SiteProvider");
  return ctx;
}
