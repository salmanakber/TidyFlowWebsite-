"use client";

import React, { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import InteractiveMockup from "./InteractiveMockup";
import { useSite } from "../context/SiteContext";
import { rawChapters } from "../utils/chaptersData";
import {
  portalTranslations,
  getDocTranslation,
  getCategoryTranslation,
  STATIC_CHAPTER_LANGS
} from "../utils/docTranslations";
import {
  getDocTableRow,
  getTranslatingChapterMessage,
  getMasterSheetDocsLabel
} from "../utils/docTableTranslations";
import {
  Search,
  Book,
  Smartphone,
  ChevronRight,
  Database,
  Users,
  Calendar,
  Layers,
  Sparkles,
  ShieldAlert,
  Clock,
  Printer,
  Copy,
  Check,
  Menu,
  X,
  FileText
} from "lucide-react";

interface Chapter {
  id: string;
  num: number;
  title: string;
  category: "Overview" | "Role Guides" | "Core Features" | "Advanced" | "Support";
  categoryLabel: string;
  content: string;
  mockupType?: "timer" | "sheets" | "ai" | "photos" | "pdf" | "sos";
}

export default function DocPortal({
  language: languageProp,
  jumpToChapterId = null,
  onJumpHandled
}: {
  language?: string;
  jumpToChapterId?: string | null;
  onJumpHandled?: () => void;
} = {}) {
  const { language: ctxLanguage, docJumpChapter, setDocJumpChapter } = useSite();
  const language = languageProp || ctxLanguage;
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedChapterId, setSelectedChapterId] = useState("ch-1");
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [copiedChapterId, setCopiedChapterId] = useState<string | null>(null);

  const chapterFromUrl = searchParams.get("chapter");
  const effectiveJump = jumpToChapterId || docJumpChapter || chapterFromUrl;

  // Dynamic Translations for Missing Languages in chapterTranslations
  const [dynChapters, setDynChapters] = useState<Record<string, { title: string; content: string }>>({});
  const [loadingTranslation, setLoadingTranslation] = useState<boolean>(false);

  useEffect(() => {
    try {
      const cached = localStorage.getItem("tidyflow_dyn_chapters");
      if (cached) setDynChapters(JSON.parse(cached));
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    if (effectiveJump) {
      setSelectedChapterId(effectiveJump);
      setMobileSidebarOpen(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
      onJumpHandled?.();
      setDocJumpChapter(null);
    }
  }, [effectiveJump, onJumpHandled, setDocJumpChapter]);

  // Dynamically translate active chapter on-the-fly when switching to any missing language
  useEffect(() => {
    if ((STATIC_CHAPTER_LANGS as readonly string[]).includes(language)) {
      return;
    }

    const cacheKey = `${language}_${selectedChapterId}`;
    if (dynChapters[cacheKey]) {
      return;
    }

    // Locate the base chapter content
    const baseCh = rawChapters.find((c) => c.id === selectedChapterId);
    if (!baseCh) return;

    setLoadingTranslation(true);
    fetch("/api/translate-chapter", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chapterId: selectedChapterId,
        title: baseCh.title,
        content: baseCh.content,
        language
      })
    })
    .then((res) => {
      if (!res.ok) throw new Error("Failed to load translation.");
      return res.json();
    })
    .then((data) => {
      if (data.title && data.content) {
        setDynChapters((prev) => {
          const updated = {
            ...prev,
            [cacheKey]: { title: data.title, content: data.content }
          };
          try {
            localStorage.setItem("tidyflow_dyn_chapters", JSON.stringify(updated));
          } catch (e) {
            console.error("Local storage caching failed:", e);
          }
          return updated;
        });
      }
    })
    .catch((err) => {
      console.error("Failed to translate active chapter:", err);
    })
    .finally(() => {
      setLoadingTranslation(false);
    });
  }, [language, selectedChapterId]);

  // Drop stale API translation cache for languages with full static chapters
  useEffect(() => {
    if (!(STATIC_CHAPTER_LANGS as readonly string[]).includes(language)) return;
    setDynChapters((prev) => {
      const next = { ...prev };
      let changed = false;
      for (const key of Object.keys(next)) {
        if (key.startsWith(`${language}_`)) {
          delete next[key];
          changed = true;
        }
      }
      if (changed) {
        try {
          localStorage.setItem("tidyflow_dyn_chapters", JSON.stringify(next));
        } catch {
          /* ignore quota errors */
        }
      }
      return changed ? next : prev;
    });
  }, [language]);

  const chapters = useMemo<Chapter[]>(() => {
    const hasStaticTranslation = (STATIC_CHAPTER_LANGS as readonly string[]).includes(language);
    return rawChapters.map((ch) => {
      const cacheKey = `${language}_${ch.id}`;
      const dyn = dynChapters[cacheKey];
      const useDyn = !hasStaticTranslation && dyn;
      return {
        id: ch.id,
        num: ch.num,
        title: useDyn ? dyn.title : getDocTranslation(ch.id, "title", language, ch.title),
        content: useDyn ? dyn.content : getDocTranslation(ch.id, "content", language, ch.content),
        category: ch.category as Chapter["category"],
        categoryLabel: getCategoryTranslation(ch.category, language),
        mockupType: ch.mockupType as Chapter["mockupType"]
      };
    });
  }, [language, dynChapters]);

  // Filter chapters based on search query
  const filteredChapters = useMemo(() => {
    if (!searchQuery.trim()) return chapters;
    const query = searchQuery.toLowerCase();
    return chapters.filter(
      (c) =>
        c.title.toLowerCase().includes(query) ||
        c.content.toLowerCase().includes(query) ||
        c.categoryLabel.toLowerCase().includes(query) ||
        c.category.toLowerCase().includes(query)
    );
  }, [searchQuery, chapters]);

  const activeChapter = useMemo(() => {
    return chapters.find((c) => c.id === selectedChapterId) || chapters[0];
  }, [selectedChapterId, chapters]);

  const handleSelectChapter = (id: string) => {
    setSelectedChapterId(id);
    setMobileSidebarOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const copyChapterText = (chapter: Chapter) => {
    navigator.clipboard.writeText(`${chapter.title}\n\n${chapter.content}`);
    setCopiedChapterId(chapter.id);
    setTimeout(() => setCopiedChapterId(null), 2000);
  };

  // Group chapters by category for sidebar navigation
  const categories = ["Overview", "Role Guides", "Core Features", "Advanced", "Support"] as const;

  return (
    <div className="pt-24 min-h-screen flex flex-col bg-slate-900 text-slate-100 text-left">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex flex-col lg:flex-row gap-8 pb-16 relative">
        
        {/* MOBILE SIDEBAR TOGGLE BANNER */}
        <div className="lg:hidden flex items-center justify-between bg-slate-950 p-3 rounded-xl border border-slate-800 mb-2">
          <button
            onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
            className="flex items-center gap-2 text-xs font-bold text-brand-amber cursor-pointer"
          >
            <Menu size={16} />
            {mobileSidebarOpen 
              ? (portalTranslations[language]?.hideTOC || portalTranslations["en"].hideTOC) 
              : (portalTranslations[language]?.showTOC || portalTranslations["en"].showTOC)
            }
          </button>
          <span className="text-[10px] font-mono text-slate-400">
            {(portalTranslations[language]?.chaptersCount || portalTranslations["en"].chaptersCount).replace("{num}", String(activeChapter.num))}
          </span>
        </div>

        {/* SIDEBAR TABLE OF CONTENTS */}
        <aside
          className={`shrink-0 w-full lg:w-64 bg-slate-950/60 p-5 rounded-2xl border border-slate-800/80 max-h-[calc(100vh-140px)] overflow-y-auto space-y-6 lg:sticky lg:top-24 z-30 transition-all ${
            mobileSidebarOpen ? "block" : "hidden lg:block"
          }`}
        >
          {/* Master Documentation Sheet Link */}
          <a
            href="https://docs.google.com/spreadsheets/d/1TwpA0HeIB6hyfKMd3Y6u8X4v9jxujtAFhxD3rXLFghk/edit?gid=97592833#gid=97592833"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-2 bg-emerald-950/40 hover:bg-emerald-900/30 border border-emerald-800/60 text-emerald-400 hover:text-emerald-300 rounded-xl text-xs font-bold transition-all shadow-sm group cursor-pointer text-center justify-center mb-4 leading-relaxed"
          >
            <div className="w-5 h-5 bg-emerald-600 text-white font-bold rounded flex items-center justify-center shrink-0 text-[10px]">田</div>
            <span className="truncate">{getMasterSheetDocsLabel(language)}</span>
            <ChevronRight size={13} className="shrink-0 text-emerald-500 group-hover:translate-x-0.5 transition-transform" />
          </a>

          {/* SEARCH FIELD */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={13} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={portalTranslations[language]?.searchPlaceholder || portalTranslations["en"].searchPlaceholder}
              className="w-full pl-8 pr-3 py-2 bg-slate-900 border border-slate-800 rounded-lg text-xs text-white focus:outline-none focus:border-brand-amber focus:ring-1 focus:ring-brand-amber"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 text-[10px] uppercase font-mono font-bold"
              >
                {portalTranslations[language]?.clearBtn || portalTranslations["en"].clearBtn}
              </button>
            )}
          </div>

          <div className="space-y-5">
            {categories.map((cat) => {
              const catChapters = filteredChapters.filter((c) => c.category === cat);
              if (catChapters.length === 0) return null;
              return (
                <div key={cat} className="space-y-1.5">
                  <h4 className="text-[10px] font-mono tracking-widest text-slate-500 uppercase font-extrabold flex items-center gap-1.5">
                    <Book size={10} className="text-brand-amber" /> {getCategoryTranslation(cat, language)}
                  </h4>
                  <ul className="space-y-1 text-xs">
                    {catChapters.map((c) => {
                      const isSelected = c.id === selectedChapterId;
                      return (
                        <li key={c.id}>
                          <button
                            onClick={() => handleSelectChapter(c.id)}
                            className={`w-full text-left py-1.5 px-2.5 rounded-lg flex items-center justify-between transition-all cursor-pointer ${
                              isSelected
                                ? "bg-brand-navy text-brand-amber font-bold border-l-2 border-brand-amber"
                                : "text-slate-400 hover:bg-slate-900/50 hover:text-slate-200"
                            }`}
                          >
                            <span className="truncate">
                              {c.num}. {c.title}
                            </span>
                            {isSelected && <ChevronRight size={10} className="text-brand-amber" />}
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </aside>

        {/* MAIN DOCUMENTATION WRITER */}
        <main className="flex-1 space-y-8 min-w-0">
          <div className="bg-slate-950 p-6 md:p-8 rounded-2xl border border-slate-900 shadow-xl space-y-6 relative overflow-hidden">
            {/* Header section info */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-slate-900 pb-5 gap-3">
              <div className="space-y-1.5">
                <span className="text-[10px] font-mono text-brand-amber uppercase tracking-widest font-bold">
                  {portalTranslations[language]?.title || portalTranslations["en"].title}
                </span>
                <h1 className="font-display font-bold text-2xl sm:text-3xl text-white">
                  {(portalTranslations[language]?.chaptersCount || portalTranslations["en"].chaptersCount).replace("{num}", String(activeChapter.num))}: {activeChapter.title}
                </h1>
                <div className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-slate-900 rounded text-[10px] text-slate-400 border border-slate-800">
                  <span>{portalTranslations[language]?.categoryLabel || portalTranslations["en"].categoryLabel}</span>
                  <span className="text-slate-300 font-semibold">{activeChapter.categoryLabel}</span>
                </div>
              </div>

              {/* Utility actions */}
              <div className="flex items-center gap-2.5 shrink-0">
                <button
                  onClick={() => copyChapterText(activeChapter)}
                  className="p-2 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg text-slate-300 hover:text-white transition-colors cursor-pointer"
                  title={portalTranslations[language]?.copyBtn || portalTranslations["en"].copyBtn}
                >
                  {copiedChapterId === activeChapter.id ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
                </button>
                <button
                  onClick={() => window.print()}
                  className="p-2 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg text-slate-300 hover:text-white transition-colors cursor-pointer"
                  title={portalTranslations[language]?.printBtn || portalTranslations["en"].printBtn}
                >
                  <Printer size={14} />
                </button>
              </div>
            </div>

            {/* Rich chapter narrative body */}
            <div className="relative min-h-[120px]">
              {loadingTranslation && (
                <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-[1px] flex flex-col items-center justify-center gap-3 rounded-lg z-10 animate-in fade-in duration-300">
                  <div className="w-6 h-6 rounded-full border-2 border-brand-amber border-t-transparent animate-spin"></div>
                  <span className="text-xs font-mono text-brand-amber font-semibold tracking-wider flex items-center gap-1.5">
                    <Sparkles size={12} className="animate-pulse" />
                    {getTranslatingChapterMessage(language)}
                  </span>
                </div>
              )}
              <div className={`text-sm sm:text-base text-slate-300 leading-relaxed font-sans max-w-3xl whitespace-pre-line transition-all duration-300 ${loadingTranslation ? "opacity-25 blur-[1px]" : "opacity-100"}`}>
                {activeChapter.content}
              </div>
            </div>

            {/* Simulated app settings reference table inside ch-5 */}
            {activeChapter.id === "ch-5" && (
              <div className="border-t border-slate-900 pt-6 mt-6 space-y-4">
                <h4 className="font-display font-bold text-xs text-white uppercase tracking-wider">
                  {portalTranslations[language]?.recTemplateCols || portalTranslations["en"].recTemplateCols}
                </h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs text-slate-400 border-collapse border border-slate-900">
                    <thead>
                      <tr className="bg-slate-900 text-white border-b border-slate-800">
                        <th className="p-2 border border-slate-900">{portalTranslations[language]?.colName || portalTranslations["en"].colName}</th>
                        <th className="p-2 border border-slate-900">{portalTranslations[language]?.colLocation || portalTranslations["en"].colLocation}</th>
                        <th className="p-2 border border-slate-900">{portalTranslations[language]?.colRequired || portalTranslations["en"].colRequired}</th>
                        <th className="p-2 border border-slate-900">{portalTranslations[language]?.colNotes || portalTranslations["en"].colNotes}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {(["propertyId", "address", "assignedEmail"] as const).map((rowKey) => {
                        const row = getDocTableRow(rowKey, language);
                        const isRequired = row.colRequired.toLowerCase() === "yes" || row.colRequired === "是" || row.colRequired === "sim" || row.colRequired === "sí" || row.colRequired === "نعم" || row.colRequired === "oui" || row.colRequired === "ja" || row.colRequired === "tak" || row.colRequired === "sì";
                        return (
                          <tr key={rowKey} className="border-b border-slate-900/60">
                            <td className="p-2 font-mono text-brand-amber font-bold border border-slate-900">{row.colName}</td>
                            <td className="p-2 border border-slate-900">{row.colLocation}</td>
                            <td className={`p-2 border border-slate-900 font-semibold ${isRequired ? "text-emerald-400" : "text-slate-500"}`}>{row.colRequired}</td>
                            <td className="p-2 border border-slate-900">{row.colNotes}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>

          {/* Contextual live functional mockup sandbox */}
          {activeChapter.mockupType && (
            <div className="space-y-3.5">
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-extrabold block">
                {portalTranslations[language]?.interactiveSimLabel || portalTranslations["en"].interactiveSimLabel}
              </span>
              <InteractiveMockup type={activeChapter.mockupType} language={language} />
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
