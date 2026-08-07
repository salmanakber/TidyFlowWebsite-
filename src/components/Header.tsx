"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Logo from "./Logo";
import { Menu, X, BookOpen, ChevronRight, ChevronDown, Check, Sun, Moon, Monitor } from "lucide-react";
import { getMarketingTranslation } from "../utils/marketingTranslations";
import { pathForPage } from "../utils/seo";

export const SUPPORTED_LANGUAGES = [
  { code: "en", label: "English", flag: "🇬🇧", short: "EN" },
  { code: "pt", label: "Português", flag: "🇵🇹", short: "PT" },
  { code: "es", label: "Español", flag: "🇪🇸", short: "ES" },
  { code: "ar", label: "العربية", flag: "🇸🇦", short: "AR" },
  { code: "cn", label: "中文", flag: "🇨🇳", short: "CN" },
  { code: "fr", label: "Français", flag: "🇫🇷", short: "FR" },
  { code: "de", label: "Deutsch", flag: "🇩🇪", short: "DE" },
  { code: "pl", label: "Polski", flag: "🇵🇱", short: "PL" },
  { code: "no", label: "Norsk", flag: "🇳🇴", short: "NO" },
  { code: "sv", label: "Svenska", flag: "🇸🇪", short: "SV" },
  { code: "it", label: "Italiano", flag: "🇮🇹", short: "IT" },
] as const;

interface HeaderProps {
  activeTab: "marketing" | "documentation";
  marketingPage: string;
  language: string;
  setLanguage: (lang: string) => void;
  theme: "light" | "dark" | "system";
  setTheme: (theme: "light" | "dark" | "system") => void;
}

const iconBtn =
  "inline-flex items-center justify-center h-8 w-8 rounded-md border border-slate-700/80 bg-slate-800/50 text-slate-300 hover:bg-slate-800 hover:border-slate-600 hover:text-white transition-colors cursor-pointer";

export default function Header({
  activeTab,
  marketingPage,
  language,
  setLanguage,
  theme,
  setTheme,
}: HeaderProps) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [themeDropdownOpen, setThemeDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  const handleLanguageChange = (code: string) => {
    setLanguage(code);
    localStorage.setItem("tidyflow_language", code);
    setLangDropdownOpen(false);
  };

  const activeLangInfo = SUPPORTED_LANGUAGES.find((l) => l.code === language) || SUPPORTED_LANGUAGES[0];

  const translations: Record<string, Record<string, string>> = {
    home: {
      en: "Home", pt: "Início", es: "Inicio", ar: "الرئيسية", cn: "首页",
      fr: "Accueil", de: "Startseite", pl: "Główna", no: "Hjem", sv: "Hem", it: "Home",
    },
    features: {
      en: "Features", pt: "Funcionalidades", es: "Características", ar: "الميزات", cn: "功能特点",
      fr: "Fonctionnalités", de: "Funktionen", pl: "Funkcje", no: "Funksjoner", sv: "Funktioner", it: "Funzioni",
    },
    pricing: {
      en: "Pricing", pt: "Planos", es: "Precios", ar: "الأسعار", cn: "价格方案",
      fr: "Tarifs", de: "Preise", pl: "Cennik", no: "Priser", sv: "Priser", it: "Prezzi",
    },
    "how-it-works": {
      en: "How It Works", pt: "Como Funciona", es: "Cómo Funciona", ar: "كيف يعمل", cn: "运作原理",
      fr: "Comment ça marche", de: "Anleitung", pl: "Jak działa", no: "Hvordan det virker", sv: "Hur det fungerar", it: "Come funziona",
    },
    personas: {
      en: "Who It's For", pt: "Para Quem", es: "Para Quién Es", ar: "لمن هذا", cn: "适用角色",
      fr: "Pour qui", de: "Für wen", pl: "Dla kogo", no: "For hvem", sv: "För vem", it: "Per chi",
    },
    integrations: {
      en: "Integrations", pt: "Integrações", es: "Integraciones", ar: "التكاملات", cn: "集成",
      fr: "Intégrations", de: "Integrationen", pl: "Integracje", no: "Integrasjoner", sv: "Integrationer", it: "Integrazioni",
    },
    blog: {
      en: "Blog", pt: "Blog", es: "Blog", ar: "المدونة", cn: "博客",
      fr: "Blog", de: "Blog", pl: "Blog", no: "Blogg", sv: "Blogg", it: "Blog",
    },
    whatsNew: {
      en: "What's New", pt: "Novidades", es: "Novedades", ar: "الجديد", cn: "新功能",
      fr: "Nouveautés", de: "Neuheiten", pl: "Nowości", no: "Nyheter", sv: "Nyheter", it: "Novità",
    },
    userGuide: {
      en: "Guide", pt: "Guia", es: "Guía", ar: "الدليل", cn: "指南",
      fr: "Guide", de: "Handbuch", pl: "Przewodnik", no: "Guide", sv: "Guide", it: "Guida",
    },
    getStarted: {
      en: "Get Started", pt: "Iniciar", es: "Comenzar", ar: "ابدأ", cn: "开始",
      fr: "Démarrer", de: "Loslegen", pl: "Start", no: "Start", sv: "Start", it: "Inizia",
    },
    theme: {
      en: "Theme", pt: "Tema", es: "Tema", ar: "المظهر", cn: "主题",
      fr: "Thème", de: "Design", pl: "Motyw", no: "Tema", sv: "Tema", it: "Tema",
    },
    themeLight: {
      en: "Light", pt: "Claro", es: "Claro", ar: "فاتح", cn: "浅色",
      fr: "Clair", de: "Hell", pl: "Jasny", no: "Lys", sv: "Ljust", it: "Chiaro",
    },
    themeDark: {
      en: "Dark", pt: "Escuro", es: "Oscuro", ar: "داكن", cn: "深色",
      fr: "Sombre", de: "Dunkel", pl: "Ciemny", no: "Mørk", sv: "Mörkt", it: "Scuro",
    },
    themeSystem: {
      en: "System", pt: "Sistema", es: "Sistema", ar: "نظام", cn: "系统",
      fr: "Système", de: "System", pl: "System", no: "System", sv: "System", it: "Sistema",
    },
  };

  const t = (key: string): string => translations[key]?.[language] || translations[key]?.en || key;

  const navItems = [
    { id: "home", label: t("home") },
    { id: "features", label: t("features") },
    { id: "pricing", label: t("pricing") },
    { id: "how-it-works", label: t("how-it-works") },
    { id: "personas", label: t("personas") },
    { id: "integrations", label: t("integrations") },
  ];

  const ThemeIcon = theme === "light" ? Sun : theme === "dark" ? Moon : Monitor;
  const themeIconClass =
    theme === "light" ? "text-amber-400" : theme === "dark" ? "text-sky-400" : "text-slate-400";

  const handleNavClick = (pageId: string) => {
    setIsOpen(false);
    router.push(pathForPage(pageId));
  };

  const handleDocClick = () => {
    setIsOpen(false);
    router.push("/documentation");
  };

  const openLang = () => {
    setThemeDropdownOpen(false);
    setLangDropdownOpen((v) => !v);
  };

  const openTheme = () => {
    setLangDropdownOpen(false);
    setThemeDropdownOpen((v) => !v);
  };

  const ThemeMenu = ({ align = "right" }: { align?: "left" | "right" }) => (
    <>
      <div className="fixed inset-0 z-40" onClick={() => setThemeDropdownOpen(false)} aria-hidden />
      <div
        className={`absolute ${align === "right" ? "right-0" : "left-0"} mt-1.5 w-36 bg-slate-950 border border-slate-800 rounded-lg shadow-xl py-1 z-50`}
        role="menu"
      >
        {(
          [
            { id: "light" as const, Icon: Sun, label: t("themeLight") },
            { id: "dark" as const, Icon: Moon, label: t("themeDark") },
            { id: "system" as const, Icon: Monitor, label: t("themeSystem") },
          ] as const
        ).map(({ id, Icon, label }) => (
          <button
            key={id}
            type="button"
            role="menuitem"
            onClick={() => {
              setTheme(id);
              setThemeDropdownOpen(false);
            }}
            className={`w-full text-left px-2.5 py-1.5 text-[11px] flex items-center justify-between hover:bg-slate-900 transition-colors cursor-pointer ${
              theme === id ? "text-brand-amber font-semibold bg-slate-900/80" : "text-slate-300"
            }`}
          >
            <span className="flex items-center gap-1.5">
              <Icon size={12} className={theme === id ? "text-brand-amber" : "text-slate-500"} />
              {label}
            </span>
            {theme === id && <Check size={10} className="text-brand-amber" />}
          </button>
        ))}
      </div>
    </>
  );

  const LangMenu = ({ align = "right" }: { align?: "left" | "right" }) => (
    <>
      <div className="fixed inset-0 z-40" onClick={() => setLangDropdownOpen(false)} aria-hidden />
      <div
        className={`absolute ${align === "right" ? "right-0" : "left-0"} mt-1.5 w-40 bg-slate-950 border border-slate-800 rounded-lg shadow-xl py-1 z-50 max-h-64 overflow-y-auto`}
        role="menu"
      >
        {SUPPORTED_LANGUAGES.map((lang) => (
          <button
            key={lang.code}
            type="button"
            role="menuitem"
            onClick={() => handleLanguageChange(lang.code)}
            className={`w-full text-left px-2.5 py-1.5 text-[11px] flex items-center justify-between hover:bg-slate-900 transition-colors cursor-pointer ${
              language === lang.code ? "text-brand-amber font-semibold bg-slate-900/80" : "text-slate-300"
            }`}
          >
            <span className="flex items-center gap-1.5">
              <span className="text-xs leading-none">{lang.flag}</span>
              <span>{lang.label}</span>
            </span>
            {language === lang.code && <Check size={10} className="text-brand-amber" />}
          </button>
        ))}
      </div>
    </>
  );

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-slate-800/80 py-2"
          : "bg-transparent py-2.5 sm:py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center gap-2 min-h-10">
          <Link
            href="/"
            className="cursor-pointer shrink-0"
            onClick={() => setIsOpen(false)}
            aria-label="TidyFlow home"
          >
            <Logo size={28} className="sm:hidden" />
            <Logo size={32} className="hidden sm:flex" />
          </Link>

          <nav className="hidden lg:flex items-center gap-2.5 xl:gap-3.5" aria-label="Primary">
            {navItems.map((item) => {
              const isActive = activeTab === "marketing" && marketingPage === item.id;
              const isIntegrations = item.id === "integrations";
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleNavClick(item.id)}
                  className={`text-[12px] xl:text-[13px] font-medium tracking-wide transition-all hover:text-brand-amber cursor-pointer whitespace-nowrap ${
                    isIntegrations
                      ? isActive
                        ? "text-emerald-300 bg-emerald-500/15 border border-emerald-400/40 px-1.5 xl:px-2 py-0.5 rounded-full font-semibold"
                        : "text-emerald-400/90 hover:text-emerald-300 border border-emerald-500/25 px-1.5 xl:px-2 py-0.5 rounded-full bg-emerald-500/5"
                      : isActive
                        ? "text-brand-amber font-semibold"
                        : "text-slate-300"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Desktop / large actions */}
          <div className="hidden lg:flex items-center gap-1.5">
            <div className="relative">
              <button
                type="button"
                onClick={openLang}
                className={`${iconBtn} w-auto px-2 gap-1`}
                title="Language"
                aria-label="Select language"
                aria-expanded={langDropdownOpen}
              >
                <span className="text-sm leading-none">{activeLangInfo.flag}</span>
                <span className="text-[10px] font-semibold tracking-wide">{activeLangInfo.short}</span>
                <ChevronDown
                  size={11}
                  className={`text-slate-500 transition-transform ${langDropdownOpen ? "rotate-180" : ""}`}
                />
              </button>
              {langDropdownOpen && <LangMenu />}
            </div>

            <div className="relative">
              <button
                type="button"
                onClick={openTheme}
                className={iconBtn}
                title={t("theme")}
                aria-label={`${t("theme")}: ${theme}`}
                aria-expanded={themeDropdownOpen}
              >
                <ThemeIcon size={14} className={themeIconClass} />
              </button>
              {themeDropdownOpen && <ThemeMenu />}
            </div>

            <button
              type="button"
              onClick={handleDocClick}
              className={`h-8 text-[11px] font-semibold px-2.5 rounded-md flex items-center gap-1 border transition-all cursor-pointer ${
                activeTab === "documentation"
                  ? "bg-brand-amber border-brand-amber text-slate-950"
                  : "bg-slate-800/50 border-slate-700/80 text-slate-200 hover:bg-slate-800"
              }`}
            >
              <BookOpen size={12} />
              <span className="hidden xl:inline">{t("userGuide")}</span>
            </button>

            <button
              type="button"
              onClick={() => handleNavClick("contact")}
              className="h-8 text-[11px] font-semibold bg-gradient-to-r from-brand-amber to-amber-500 hover:from-amber-400 hover:to-brand-amber text-slate-950 px-3 rounded-md shadow-sm transition-all cursor-pointer whitespace-nowrap"
            >
              {t("getStarted")}
            </button>
          </div>

          {/* Mobile / tablet bar */}
          <div className="lg:hidden flex items-center gap-1">
            <div className="relative">
              <button
                type="button"
                onClick={openLang}
                className={iconBtn}
                aria-label="Select language"
                aria-expanded={langDropdownOpen}
              >
                <span className="text-sm leading-none">{activeLangInfo.flag}</span>
              </button>
              {langDropdownOpen && <LangMenu />}
            </div>

            <div className="relative">
              <button
                type="button"
                onClick={openTheme}
                className={iconBtn}
                aria-label={`${t("theme")}: ${theme}`}
                aria-expanded={themeDropdownOpen}
              >
                <ThemeIcon size={14} className={themeIconClass} />
              </button>
              {themeDropdownOpen && <ThemeMenu />}
            </div>

            <button
              type="button"
              onClick={handleDocClick}
              className={`h-8 w-8 inline-flex items-center justify-center rounded-md border transition-colors ${
                activeTab === "documentation"
                  ? "bg-brand-amber border-brand-amber text-slate-950"
                  : "bg-slate-800/50 border-slate-700/80 text-slate-300"
              }`}
              aria-label="Open documentation"
            >
              <BookOpen size={14} />
            </button>

            <button
              type="button"
              onClick={() => {
                setLangDropdownOpen(false);
                setThemeDropdownOpen(false);
                setIsOpen(!isOpen);
              }}
              className={iconBtn}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full max-h-[min(80vh,640px)] overflow-y-auto bg-slate-900/98 backdrop-blur-md border-b border-slate-800 shadow-xl py-3 px-3 space-y-3 overscroll-contain">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => {
              const isActive = activeTab === "marketing" && marketingPage === item.id;
              const isIntegrations = item.id === "integrations";
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left py-2 px-2.5 rounded-md text-sm transition-colors cursor-pointer ${
                    isIntegrations
                      ? isActive
                        ? "bg-emerald-500/15 text-emerald-300 border border-emerald-500/40 font-semibold"
                        : "text-emerald-400 border border-emerald-500/20 bg-emerald-500/5"
                      : isActive
                        ? "bg-slate-800 text-brand-amber font-semibold"
                        : "text-slate-300 hover:bg-slate-800/50"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
            <Link
              href="/whats-new"
              onClick={() => setIsOpen(false)}
              className={`w-full text-left py-2 px-2.5 rounded-md text-sm transition-colors ${
                marketingPage === "whats-new"
                  ? "bg-slate-800 text-brand-amber font-semibold"
                  : "text-slate-300 hover:bg-slate-800/50"
              }`}
            >
              {t("whatsNew")}
            </Link>
            <Link
              href="/blog"
              onClick={() => setIsOpen(false)}
              className={`w-full text-left py-2 px-2.5 rounded-md text-sm transition-colors ${
                marketingPage === "blog"
                  ? "bg-slate-800 text-brand-amber font-semibold"
                  : "text-slate-300 hover:bg-slate-800/50"
              }`}
            >
              {t("blog")}
            </Link>
          </div>

          <div className="border-t border-slate-800 pt-3 flex flex-col gap-2">
            <button
              type="button"
              onClick={handleDocClick}
              className={`w-full py-2 px-3 text-xs font-bold rounded-md flex items-center justify-center gap-1.5 border cursor-pointer ${
                activeTab === "documentation"
                  ? "bg-brand-amber border-brand-amber text-slate-950"
                  : "bg-slate-800 text-slate-200 border-slate-700"
              }`}
            >
              <BookOpen size={13} />
              {getMarketingTranslation("openDocPortal", language)}
            </button>

            <button
              type="button"
              onClick={() => handleNavClick("contact")}
              className="w-full py-2 px-3 bg-gradient-to-r from-brand-amber to-amber-500 text-slate-950 text-xs font-bold rounded-md flex items-center justify-center gap-1 cursor-pointer"
            >
              {getMarketingTranslation("startFreeTrial", language)} <ChevronRight size={12} />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
