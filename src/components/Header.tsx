import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import { Menu, X, BookOpen, ChevronRight, HelpCircle, Globe, ChevronDown, Check, Sun, Moon, Monitor } from "lucide-react";
import { getMarketingTranslation } from "../utils/marketingTranslations";

export const SUPPORTED_LANGUAGES = [
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'pt', label: 'Português', flag: '🇵🇹' },
  { code: 'es', label: 'Español', flag: '🇪🇸' },
  { code: 'ar', label: 'العربية', flag: '🇸🇦' },
  { code: 'cn', label: '中文', flag: '🇨🇳' },
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
  { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
  { code: 'pl', label: 'Polski', flag: '🇵🇱' },
  { code: 'no', label: 'Norsk', flag: '🇳🇴' },
  { code: 'sv', label: 'Svenska', flag: '🇸🇪' },
  { code: 'it', label: 'Italiano', flag: '🇮🇹' },
] as const;

interface HeaderProps {
  activeTab: "marketing" | "documentation";
  setActiveTab: (tab: "marketing" | "documentation") => void;
  marketingPage: string;
  setMarketingPage: (page: string) => void;
  language: string;
  setLanguage: (lang: string) => void;
  theme: "light" | "dark" | "system";
  setTheme: (theme: "light" | "dark" | "system") => void;
}

export default function Header({
  activeTab,
  setActiveTab,
  marketingPage,
  setMarketingPage,
  language,
  setLanguage,
  theme,
  setTheme
}: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [themeDropdownOpen, setThemeDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLanguageChange = (code: string) => {
    setLanguage(code);
    localStorage.setItem("tidyflow_language", code);
    setLangDropdownOpen(false);
  };

  const activeLangInfo = SUPPORTED_LANGUAGES.find((l) => l.code === language) || SUPPORTED_LANGUAGES[0];

  // Translation Dictionaries for Navigation elements
  const translations: Record<string, Record<string, string>> = {
    home: {
      en: "Home", pt: "Início", es: "Inicio", ar: "الرئيسية", cn: "首页",
      fr: "Accueil", de: "Startseite", pl: "Główna", no: "Hjem", sv: "Hem", it: "Home"
    },
    features: {
      en: "Features", pt: "Funcionalidades", es: "Características", ar: "الميزات", cn: "功能特点",
      fr: "Fonctionnalités", de: "Funktionen", pl: "Funkcje", no: "Funksjoner", sv: "Funktioner", it: "Funzioni"
    },
    pricing: {
      en: "Pricing", pt: "Planos", es: "Precios", ar: "الأسعار", cn: "价格方案",
      fr: "Tarifs", de: "Preise", pl: "Cennik", no: "Priser", sv: "Priser", it: "Prezzi"
    },
    "how-it-works": {
      en: "How It Works", pt: "Como Funciona", es: "Cómo Funciona", ar: "كيف يعمل", cn: "运作原理",
      fr: "Comment ça marche", de: "Anleitung", pl: "Jak działa", no: "Hvordan det virker", sv: "Hur det fungerar", it: "Come funziona"
    },
    personas: {
      en: "Who It's For", pt: "Para Quem", es: "Para Quién Es", ar: "لمن هذا", cn: "适用角色",
      fr: "Pour qui", de: "Für wen", pl: "Dla kogo", no: "For hvem", sv: "För vem", it: "Per chi"
    },
    integrations: {
      en: "Integrations", pt: "Integrações", es: "Integraciones", ar: "التكاملات", cn: "集成",
      fr: "Intégrations", de: "Integrationen", pl: "Integracje", no: "Integrasjoner", sv: "Integrationer", it: "Integrazioni"
    },
    userGuide: {
      en: "User Guide", pt: "Guia de Uso", es: "Guía de Uso", ar: "دليل المستخدم", cn: "用户指南",
      fr: "Guide de l'utilisateur", de: "Handbuch", pl: "Instrukcja", no: "Brukerveiledning", sv: "Användarguide", it: "Guida d'uso"
    },
    getStarted: {
      en: "Get Started", pt: "Iniciar", es: "Comenzar", ar: "ابدأ الآن", cn: "立即开始",
      fr: "Démarrer", de: "Loslegen", pl: "Zacznij", no: "Kom i gang", sv: "Kom igång", it: "Inizia"
    },
    themeLight: {
      en: "Light Mode", pt: "Modo Claro", es: "Modo Claro", ar: "الوضع الفاتح", cn: "浅色模式",
      fr: "Mode Clair", de: "Heller Modus", pl: "Tryb Jasny", no: "Lys Modus", sv: "Ljust Läge", it: "Modalità Chiara"
    },
    themeDark: {
      en: "Dark Mode", pt: "Modo Escuro", es: "Modo Oscuro", ar: "الوضع الداكن", cn: "深色模式",
      fr: "Mode Sombre", de: "Dunkler Modus", pl: "Tryb Ciemny", no: "Mørk Modus", sv: "Mörkt Läge", it: "Modalità Scura"
    },
    themeSystem: {
      en: "System Default", pt: "Padrão do Sistema", es: "Predeterminado", ar: "تلقائي النظام", cn: "系统默认",
      fr: "Système", de: "Systemstandard", pl: "Domyślny", no: "Systemstandard", sv: "Systemstandard", it: "Predefinito"
    }
  };

  const getTranslated = (key: string): string => {
    return translations[key]?.[language] || translations[key]?.["en"] || key;
  };

  const navItems = [
    { id: "home", label: getTranslated("home") },
    { id: "features", label: getTranslated("features") },
    { id: "pricing", label: getTranslated("pricing") },
    { id: "how-it-works", label: getTranslated("how-it-works") },
    { id: "personas", label: getTranslated("personas") },
    { id: "integrations", label: getTranslated("integrations") }
  ];

  const handleNavClick = (pageId: string) => {
    setActiveTab("marketing");
    setMarketingPage(pageId);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDocClick = () => {
    setActiveTab("documentation");
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-slate-800/80 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Brand Logo Clickable to Home */}
          <div className="cursor-pointer" onClick={() => handleNavClick("home")}>
            <Logo size={36} />
          </div>

          {/* Desktop Nav links */}
          <nav className="hidden lg:flex items-center gap-5">
            {navItems.map((item) => {
              const isActive = activeTab === "marketing" && marketingPage === item.id;
              const isIntegrations = item.id === "integrations";
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-sm font-medium tracking-wide transition-all hover:text-brand-amber cursor-pointer ${
                    isIntegrations
                      ? isActive
                        ? "text-emerald-300 bg-emerald-500/15 border border-emerald-400/50 px-3 py-1.5 rounded-full font-semibold shadow-[0_0_12px_rgba(16,185,129,0.15)]"
                        : "text-emerald-400/90 hover:text-emerald-300 border border-emerald-500/25 px-3 py-1.5 rounded-full bg-emerald-500/5 hover:bg-emerald-500/10"
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

          {/* Desktop Action buttons */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Language Selector Dropdown */}
            <div className="relative">
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="text-xs font-semibold px-3 py-2 bg-slate-800/40 border border-slate-700 text-slate-200 hover:bg-slate-800 hover:border-slate-600 rounded-lg flex items-center gap-1.5 transition-all cursor-pointer"
                title="Select Language"
              >
                <span className="text-sm">{activeLangInfo.flag}</span>
                <span className="font-medium">{activeLangInfo.label}</span>
                <ChevronDown size={12} className={`text-slate-400 transition-transform ${langDropdownOpen ? "rotate-180" : ""}`} />
              </button>

              {langDropdownOpen && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setLangDropdownOpen(false)} />
                  <div className="absolute right-0 mt-2 w-48 bg-slate-950 border border-slate-850 rounded-xl shadow-2xl py-1.5 z-50 max-h-72 overflow-y-auto">
                    {SUPPORTED_LANGUAGES.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => handleLanguageChange(lang.code)}
                        className={`w-full text-left px-3 py-2 text-xs flex items-center justify-between hover:bg-slate-900 transition-colors cursor-pointer ${
                          language === lang.code ? "text-brand-amber font-bold bg-slate-900" : "text-slate-300"
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-sm">{lang.flag}</span>
                          <span>{lang.label}</span>
                        </div>
                        {language === lang.code && <Check size={11} className="text-brand-amber" />}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Theme Selector Dropdown */}
            <div className="relative">
              <button
                onClick={() => setThemeDropdownOpen(!themeDropdownOpen)}
                className="text-xs font-semibold px-3 py-2 bg-slate-800/40 border border-slate-700 text-slate-200 hover:bg-slate-800 hover:border-slate-600 rounded-lg flex items-center gap-1.5 transition-all cursor-pointer"
                title="Select Theme"
              >
                {theme === "light" && <Sun size={13} className="text-amber-500" />}
                {theme === "dark" && <Moon size={13} className="text-blue-400" />}
                {theme === "system" && <Monitor size={13} className="text-slate-400" />}
                <span className="font-medium">
                  {theme === "light" && getTranslated("themeLight")}
                  {theme === "dark" && getTranslated("themeDark")}
                  {theme === "system" && getTranslated("themeSystem")}
                </span>
                <ChevronDown size={12} className={`text-slate-400 transition-transform ${themeDropdownOpen ? "rotate-180" : ""}`} />
              </button>

              {themeDropdownOpen && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setThemeDropdownOpen(false)} />
                  <div className="absolute right-0 mt-2 w-44 bg-slate-950 border border-slate-850 rounded-xl shadow-2xl py-1.5 z-50">
                    <button
                      onClick={() => {
                        setTheme("light");
                        setThemeDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3 py-2 text-xs flex items-center justify-between hover:bg-slate-900 transition-colors cursor-pointer ${
                        theme === "light" ? "text-brand-amber font-bold bg-slate-900" : "text-slate-300"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <Sun size={12} className={theme === "light" ? "text-brand-amber" : "text-slate-400"} />
                        <span>{getTranslated("themeLight")}</span>
                      </div>
                      {theme === "light" && <Check size={11} className="text-brand-amber" />}
                    </button>

                    <button
                      onClick={() => {
                        setTheme("dark");
                        setThemeDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3 py-2 text-xs flex items-center justify-between hover:bg-slate-900 transition-colors cursor-pointer ${
                        theme === "dark" ? "text-brand-amber font-bold bg-slate-900" : "text-slate-300"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <Moon size={12} className={theme === "dark" ? "text-brand-amber" : "text-slate-400"} />
                        <span>{getTranslated("themeDark")}</span>
                      </div>
                      {theme === "dark" && <Check size={11} className="text-brand-amber" />}
                    </button>

                    <button
                      onClick={() => {
                        setTheme("system");
                        setThemeDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3 py-2 text-xs flex items-center justify-between hover:bg-slate-900 transition-colors cursor-pointer ${
                        theme === "system" ? "text-brand-amber font-bold bg-slate-900" : "text-slate-300"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <Monitor size={12} className={theme === "system" ? "text-brand-amber" : "text-slate-400"} />
                        <span>{getTranslated("themeSystem")}</span>
                      </div>
                      {theme === "system" && <Check size={11} className="text-brand-amber" />}
                    </button>
                  </div>
                </>
              )}
            </div>
 
            <button
              onClick={handleDocClick}
              className={`text-xs font-semibold px-4 py-2 rounded-lg flex items-center gap-2 border transition-all cursor-pointer ${
                activeTab === "documentation"
                  ? "bg-brand-amber border-brand-amber text-slate-950 shadow-md"
                  : "bg-slate-800/40 border-slate-700 text-slate-200 hover:bg-slate-800 hover:border-slate-600"
              }`}
            >
              <BookOpen size={13} />
              {getTranslated("userGuide")}
            </button>
 
            <button
              onClick={() => handleNavClick("contact")}
              className="text-xs font-semibold bg-gradient-to-r from-brand-amber to-amber-500 hover:from-amber-400 hover:to-brand-amber text-slate-950 px-4 py-2 rounded-lg shadow-md hover:shadow-brand-amber/10 transition-all cursor-pointer"
            >
              {getTranslated("getStarted")}
            </button>
          </div>

          {/* Mobile hamburger menu toggle */}
          <div className="lg:hidden flex items-center gap-3">
            <button
              onClick={handleDocClick}
              className={`p-2 rounded-lg border transition-colors ${
                activeTab === "documentation"
                  ? "bg-brand-amber border-brand-amber text-slate-950"
                  : "bg-slate-800/60 border-slate-700 text-slate-300"
              }`}
              title="Open documentation"
            >
              <BookOpen size={16} />
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-slate-800/60 border border-slate-700 text-slate-300 hover:bg-slate-800 transition-colors cursor-pointer"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu panel with slide transition */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-slate-900 border-b border-slate-800 shadow-xl overflow-hidden py-4 px-4 space-y-4">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => {
              const isActive = activeTab === "marketing" && marketingPage === item.id;
              const isIntegrations = item.id === "integrations";
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left py-2 px-3 rounded-lg text-sm transition-colors cursor-pointer ${
                    isIntegrations
                      ? isActive
                        ? "bg-emerald-500/15 text-emerald-300 border border-emerald-500/40 font-semibold"
                        : "text-emerald-400 border border-emerald-500/20 bg-emerald-500/5"
                      : isActive
                        ? "bg-brand-navy-light text-brand-amber font-semibold"
                        : "text-slate-300 hover:bg-slate-800/40"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          <div className="border-t border-slate-800 pt-4 flex flex-col gap-2.5">
            {/* Mobile Language Row */}
            <div className="mb-2">
              <span className="block text-[10px] font-mono uppercase text-slate-500 mb-2">
                {getMarketingTranslation("selectLanguage", language)}
              </span>
              <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
                {SUPPORTED_LANGUAGES.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang.code)}
                    className={`shrink-0 flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border text-xs cursor-pointer ${
                      language === lang.code
                        ? "bg-brand-amber border-brand-amber text-slate-950 font-bold"
                        : "bg-slate-950 border-slate-850 text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Theme Row */}
            <div className="mb-2">
              <span className="block text-[10px] font-mono uppercase text-slate-500 mb-2">
                {getTranslated("themeLabel") || "Theme"}
              </span>
              <div className="flex gap-2">
                <button
                  onClick={() => setTheme("light")}
                  className={`flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg border text-xs cursor-pointer transition-colors ${
                    theme === "light"
                      ? "bg-brand-amber border-brand-amber text-slate-950 font-bold"
                      : "bg-slate-950 border-slate-850 text-slate-400 hover:text-slate-200"
                  }`}
                >
                  <Sun size={13} />
                  <span>{theme === "light" ? "Light" : (getTranslated("themeLight")?.split(" ")?.[0] || "Light")}</span>
                </button>

                <button
                  onClick={() => setTheme("dark")}
                  className={`flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg border text-xs cursor-pointer transition-colors ${
                    theme === "dark"
                      ? "bg-brand-amber border-brand-amber text-slate-950 font-bold"
                      : "bg-slate-950 border-slate-850 text-slate-400 hover:text-slate-200"
                  }`}
                >
                  <Moon size={13} />
                  <span>{theme === "dark" ? "Dark" : (getTranslated("themeDark")?.split(" ")?.[0] || "Dark")}</span>
                </button>

                <button
                  onClick={() => setTheme("system")}
                  className={`flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg border text-xs cursor-pointer transition-colors ${
                    theme === "system"
                      ? "bg-brand-amber border-brand-amber text-slate-950 font-bold"
                      : "bg-slate-950 border-slate-850 text-slate-400 hover:text-slate-200"
                  }`}
                >
                  <Monitor size={13} />
                  <span>{getTranslated("themeSystem")?.split(" ")?.[0] || "System"}</span>
                </button>
              </div>
            </div>

            <button
              onClick={handleDocClick}
              className={`w-full py-2.5 px-3 text-xs font-bold rounded-lg flex items-center justify-center gap-2 border cursor-pointer ${
                activeTab === "documentation"
                  ? "bg-brand-amber border-brand-amber text-slate-950"
                  : "bg-slate-800 text-slate-200 border-slate-700"
              }`}
            >
              <BookOpen size={14} />
              {getMarketingTranslation("openDocPortal", language)}
            </button>

            <button
              onClick={() => handleNavClick("contact")}
              className="w-full py-2.5 px-3 bg-gradient-to-r from-brand-amber to-amber-500 text-slate-950 text-xs font-bold rounded-lg flex items-center justify-center gap-1.5 cursor-pointer"
            >
              {getMarketingTranslation("startFreeTrial", language)} <ChevronRight size={13} />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
