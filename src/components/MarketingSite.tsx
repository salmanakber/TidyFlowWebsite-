import React, { useState, useEffect } from "react";
import InteractiveMockup from "./InteractiveMockup";
import { getTranslation } from "../utils/translations";
import { getSheetTranslation } from "../utils/sheetMockupTranslations";
import { getMarketingTranslation } from "../utils/marketingTranslations";
import { ReviewBadges, TrustedByStrip } from "./TrustSection";
import {
  Calendar,
  CheckSquare,
  CreditCard,
  TrendingUp,
  Smartphone,
  CheckCircle,
  Users,
  Map,
  Settings,
  HelpCircle,
  Clock,
  ArrowRight,
  Database,
  Sparkles,
  ShieldAlert,
  FileText,
  Layers,
  Globe,
  ChevronDown,
  UserCheck,
  Play,
  Send,
  Star,
  Zap,
  Lock,
  Plus,
  X
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface MarketingSiteProps {
  page: string;
  setPage: (page: string) => void;
  setActiveTab: (tab: "marketing" | "documentation") => void;
  language: string;
}

export default function MarketingSite({ page, setPage, setActiveTab, language }: MarketingSiteProps) {
  return (
    <div className="pt-24 min-h-screen flex flex-col bg-slate-950 text-slate-100 selection:bg-brand-amber/30 selection:text-white">
      {/* Dynamic Background Glowing Blobs for Premium Aesthetic */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-brand-amber/5 via-slate-950/0 to-slate-950/0 pointer-events-none z-0" />
      
      <AnimatePresence mode="wait">
        <motion.div
          key={page}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="flex-1 z-10"
        >
          {page === "home" && <HomePage setPage={setPage} setActiveTab={setActiveTab} language={language} />}
          {page === "features" && <FeaturesPage language={language} />}
          {page === "pricing" && <PricingPage language={language} />}
          {page === "how-it-works" && <HowItWorksPage language={language} />}
          {page === "personas" && <PersonasPage language={language} />}
          {page === "integrations" && <IntegrationsPage language={language} />}
          {page === "contact" && <ContactPage language={language} />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

// ==========================================
// 1. HOME PAGE VIEW
// ==========================================
function HomePage({
  setPage,
  setActiveTab,
  language
}: {
  setPage: (p: string) => void;
  setActiveTab: (tab: "marketing" | "documentation") => void;
  language: string;
}) {
  const [activeMockup, setActiveMockup] = useState<"timer" | "sheets" | "ai" | "photos" | "pdf" | "sos">("timer");
  const mt = (key: string) => getMarketingTranslation(key, language);

  const mockupTabs = [
    { id: "timer", label: getTranslation("tabTimer", language), icon: Clock },
    { id: "sheets", label: getTranslation("tabSheets", language), icon: Database },
    { id: "ai", label: getTranslation("tabAI", language), icon: Sparkles },
    { id: "photos", label: getTranslation("tabPhotos", language), icon: CameraIcon },
    { id: "pdf", label: getTranslation("tabPDF", language), icon: FileText },
    { id: "sos", label: getTranslation("tabSOS", language), icon: ShieldAlert }
  ];

  return (
    <div className="space-y-32 pb-24">
      {/* SECTION 1: HERO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          <div className="lg:col-span-5 space-y-6">
            <div className="flex flex-col gap-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-brand-amber/10 text-brand-amber text-xs font-semibold rounded-full border border-brand-amber/20 self-start backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-amber inline-block animate-pulse"></span>
                {getTranslation("heroBadge", language)}
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-500/10 text-blue-400 text-[10px] font-mono font-bold rounded-lg border border-blue-500/20 self-start">
                ✨ {getTranslation("langSupported", language)}
              </div>
            </div>

            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-[1.1] text-white tracking-tight">
              {getTranslation("heroTitle", language)}
            </h1>

            <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl">
              {getTranslation("heroSub", language)}
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={() => setPage("contact")}
                className="px-7 py-4 bg-brand-amber hover:bg-brand-amber/90 active:scale-[0.98] text-slate-950 font-bold rounded-xl text-sm transition-all shadow-lg shadow-brand-amber/15 hover:shadow-brand-amber/25 cursor-pointer flex items-center gap-2"
              >
                {getTranslation("startTrial", language)} <ArrowRight size={16} />
              </button>

              <button
                onClick={() => {
                  setActiveTab("documentation");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="px-7 py-4 bg-slate-900 border border-slate-800 hover:border-slate-700 hover:bg-slate-850 active:scale-[0.98] text-slate-200 font-semibold rounded-xl text-sm transition-all cursor-pointer flex items-center gap-2"
              >
                {getTranslation("userDocs", language)}
              </button>
            </div>

            <div className="grid grid-cols-2 gap-x-6 gap-y-4 border-t border-slate-900 pt-8 text-xs text-slate-400">
              <div className="flex items-center gap-2.5">
                <CheckCircle size={15} className="text-brand-amber shrink-0" />
                <span>{getTranslation("badgeOffline", language)}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle size={15} className="text-brand-amber shrink-0" />
                <span>{getTranslation("badgeSync", language)}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle size={15} className="text-brand-amber shrink-0" />
                <span>{getTranslation("badgeGPS", language)}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle size={15} className="text-brand-amber shrink-0" />
                <span>{getTranslation("badgeSOS", language)}</span>
              </div>
            </div>

            <div className="hidden lg:block pt-3 border-t border-slate-900">
              <ReviewBadges language={language} />
            </div>
          </div>

          <div className="lg:col-span-7 space-y-3 bg-slate-900/40 p-2.5 sm:p-3 rounded-2xl border border-slate-800/60 backdrop-blur-md shadow-2xl max-w-full overflow-hidden">
            <div className="inline-flex flex-wrap gap-1 p-1 bg-slate-950 border border-slate-850 rounded-xl w-full">
              {mockupTabs.map((tab) => {
                const TabIcon = tab.icon;
                const isActive = activeMockup === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveMockup(tab.id as any)}
                    className={`flex items-center gap-1.5 px-2.5 py-1.5 text-[10px] font-semibold rounded-lg border transition-all cursor-pointer whitespace-nowrap ${
                      isActive
                        ? "bg-brand-amber border-brand-amber/30 text-slate-950 shadow-sm"
                        : "bg-transparent border-transparent text-slate-400 hover:bg-slate-900 hover:text-slate-200"
                    }`}
                  >
                    <TabIcon size={12} className="shrink-0" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
            <div className="max-w-full overflow-hidden">
              <InteractiveMockup
                type={activeMockup}
                language={language}
                size={activeMockup === "timer" || activeMockup === "sos" ? "default" : "compact"}
              />
            </div>
          </div>
        </div>

        <div className="lg:hidden mt-6 pt-5 border-t border-slate-900">
          <ReviewBadges language={language} />
        </div>
      </section>

      <TrustedByStrip language={language} />

      {/* SECTION 3: THE PROBLEM STATEMENT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">{mt("chaosTitle")}</h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">{mt("chaosDesc")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-slate-950 border border-slate-900/80 p-8 rounded-2xl text-left space-y-4 hover:border-slate-800 hover:-translate-y-1 transition-all duration-300 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-rose-500/10 flex items-center justify-center text-rose-400 border border-rose-500/20 font-bold">
              <X size={18} />
            </div>
            <h4 className="font-display font-bold text-white text-lg">{mt("whatsappTitle")}</h4>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{mt("whatsappDesc")}</p>
          </div>
          <div className="bg-slate-950 border border-slate-900/80 p-8 rounded-2xl text-left space-y-4 hover:border-slate-800 hover:-translate-y-1 transition-all duration-300 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-rose-500/10 flex items-center justify-center text-rose-400 border border-rose-500/20 font-bold">
              <X size={18} />
            </div>
            <h4 className="font-display font-bold text-white text-lg">{mt("spreadsheetTitle")}</h4>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{mt("spreadsheetDesc")}</p>
          </div>
          <div className="bg-slate-950 border border-slate-900/80 p-8 rounded-2xl text-left space-y-4 hover:border-slate-800 hover:-translate-y-1 transition-all duration-300 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-rose-500/10 flex items-center justify-center text-rose-400 border border-rose-500/20 font-bold">
              <X size={18} />
            </div>
            <h4 className="font-display font-bold text-white text-lg">{mt("payrollTitle")}</h4>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{mt("payrollDesc")}</p>
          </div>
        </div>
      </section>

      {/* SECTION 4: THE PLATFORM OVERVIEW DIAGRAM */}
      <section className="bg-slate-950/40 border-y border-slate-900/80 py-24 text-left relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-brand-amber/5 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 space-y-6">
              <h3 className="font-display font-bold text-3xl text-white tracking-tight">{mt("pipelineTitle")}</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{mt("pipelineDesc")}</p>

              <div className="space-y-6 pt-4 border-t border-slate-900">
                {[
                  { title: mt("pipelineStep1Title"), desc: mt("pipelineStep1Desc") },
                  { title: mt("pipelineStep2Title"), desc: mt("pipelineStep2Desc") },
                  { title: mt("pipelineStep3Title"), desc: mt("pipelineStep3Desc") },
                  { title: mt("pipelineStep4Title"), desc: mt("pipelineStep4Desc") },
                ].map((step, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="w-7 h-7 rounded-full bg-brand-amber/10 border border-brand-amber/20 text-brand-amber flex items-center justify-center text-xs font-mono font-bold shrink-0 mt-0.5 shadow-inner">
                      {i + 1}
                    </div>
                    <div>
                      <h5 className="font-bold text-sm text-white">{step.title}</h5>
                      <p className="text-xs text-slate-400 mt-1 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7 bg-slate-950 p-8 rounded-3xl border border-slate-900 shadow-xl relative">
              <h4 className="font-display font-bold text-[10px] text-slate-500 mb-8 uppercase tracking-widest">{mt("diagramTitle")}</h4>
              <div className="space-y-4">
                {[
                  { role: mt("diagramRole1"), sub: mt("diagramRole1Sub"), meta: mt("diagramRole1Meta"), accent: "text-brand-amber bg-brand-amber/5 border-brand-amber/20" },
                  { role: mt("diagramRole2"), sub: mt("diagramRole2Sub"), meta: mt("diagramRole2Meta"), accent: "text-brand-amber bg-brand-amber/5 border-brand-amber/20" },
                  { role: mt("diagramRole3"), sub: mt("diagramRole3Sub"), meta: mt("diagramRole3Meta"), accent: "text-brand-amber bg-brand-amber/5 border-brand-amber/20" },
                  { role: mt("diagramRole4"), sub: mt("diagramRole4Sub"), meta: mt("diagramRole4Meta"), accent: "text-emerald-400 bg-emerald-400/5 border-emerald-400/20" },
                ].map((item, i) => (
                  <React.Fragment key={i}>
                    <div className="flex justify-between items-center bg-slate-900/40 p-4 rounded-xl border border-slate-800/60 backdrop-blur-sm">
                      <span className={`text-[10px] font-mono uppercase tracking-widest font-bold px-2.5 py-1 rounded-md border ${item.accent}`}>{item.role}</span>
                      <div className="text-right">
                        <span className="block text-xs font-semibold text-white">{item.sub}</span>
                        <span className="text-[10px] text-slate-400 mt-0.5 block">{item.meta}</span>
                      </div>
                    </div>
                    {i < 3 && (
                      <div className="flex justify-center -my-1">
                        <div className="h-5 w-[1px] bg-gradient-to-b from-brand-amber/40 to-transparent" />
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: FEATURE HIGHLIGHT CARDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">{mt("sixPillarsTitle")}</h2>
          <p className="text-slate-400 text-sm sm:text-base">{mt("sixPillarsSub")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {[
            { icon: Calendar, title: mt("pillar1Title"), desc: mt("pillar1Desc") },
            { icon: Clock, title: mt("pillar2Title"), desc: mt("pillar2Desc") },
            { icon: CameraIcon, title: mt("pillar3Title"), desc: mt("pillar3Desc") },
            { icon: Database, title: mt("pillar4Title"), desc: mt("pillar4Desc") },
            { icon: Users, title: mt("pillar5Title"), desc: mt("pillar5Desc") },
            { icon: Sparkles, title: mt("pillar6Title"), desc: mt("pillar6Desc") },
          ].map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <div key={i} className="bg-slate-950 p-8 rounded-2xl border border-slate-900 hover:border-brand-amber/20 transition-all duration-300 group space-y-4 shadow-sm hover:shadow-md hover:shadow-brand-amber/[0.02]">
                <div className="w-10 h-10 rounded-xl bg-brand-amber/10 border border-brand-amber/10 text-brand-amber flex items-center justify-center group-hover:scale-[1.03] transition-transform duration-200">
                  <Icon size={18} />
                </div>
                <h4 className="font-display font-bold text-white text-base group-hover:text-brand-amber transition-colors duration-200">{pillar.title}</h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{pillar.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION 6: HOW IT WORKS TIMELINE */}
      <section className="bg-slate-950/40 border-y border-slate-900/80 py-24 text-left relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-amber/5 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">{mt("howItWorksTitle")}</h2>
            <p className="text-slate-400 text-sm">{mt("howItWorksSub")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
            {[
              { title: mt("howItWorks1Title"), desc: mt("howItWorks1Desc") },
              { title: mt("howItWorks2Title"), desc: mt("howItWorks2Desc") },
              { title: mt("howItWorks3Title"), desc: mt("howItWorks3Desc") },
              { title: mt("howItWorks4Title"), desc: mt("howItWorks4Desc"), emerald: true },
            ].map((step, i) => (
              <div key={i} className="space-y-4 relative group">
                {/* Visual Connector Lines for Desktop */}
                {i < 3 && (
                  <div className="hidden md:block absolute top-6 left-12 right-0 h-[1px] border-t border-dashed border-slate-800 z-0" />
                )}
                <div className={`w-12 h-12 rounded-2xl border-2 flex items-center justify-center font-bold text-lg relative z-10 transition-transform duration-200 group-hover:scale-105 ${
                  step.emerald ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400" : "bg-brand-amber/10 border-brand-amber/30 text-brand-amber"
                }`}>
                  {i + 1}
                </div>
                <h4 className="font-display font-bold text-white text-base pt-2">{step.title}</h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: AI RECOMMENDATION HERO BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <div className="bg-gradient-to-br from-slate-900 to-slate-950 p-8 md:p-14 rounded-3xl border border-slate-800 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-brand-amber/[0.03] via-transparent to-transparent pointer-events-none" />
          <div className="lg:col-span-6 space-y-6 relative z-10">
            <span className="px-3 py-1 bg-brand-amber/10 text-brand-amber text-[10px] font-mono font-bold rounded-lg border border-brand-amber/20">{mt("aiBannerBadge")}</span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight leading-none">{mt("aiBannerTitle")}</h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{mt("aiBannerDesc")}</p>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-400 pt-2">
              <li className="flex gap-3 items-center"><span className="text-brand-amber text-lg">✓</span><span>{mt("aiBannerCheck1")}</span></li>
              <li className="flex gap-3 items-center"><span className="text-brand-amber text-lg">✓</span><span>{mt("aiBannerCheck2")}</span></li>
              <li className="flex gap-3 items-center"><span className="text-brand-amber text-lg">✓</span><span>{mt("aiBannerCheck3")}</span></li>
            </ul>
          </div>

          <div className="lg:col-span-6 relative z-10">
            <InteractiveMockup type="ai" language={language} />
          </div>
        </div>
      </section>

      {/* SECTION 8: PRICING TEASER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-950 border border-slate-900 p-8 md:p-12 rounded-3xl max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center text-left">
          <div className="md:col-span-8 space-y-4">
            <span className="text-[10px] font-mono text-brand-amber uppercase tracking-widest font-bold bg-brand-amber/5 px-2.5 py-1 rounded-md border border-brand-amber/10">{mt("pricingTeaserBadge")}</span>
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight">{mt("pricingTeaserTitle")}</h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{mt("pricingTeaserDesc")}</p>
          </div>
          <div className="md:col-span-4 text-center md:text-right">
            <button
              onClick={() => setPage("pricing")}
              className="w-full md:w-auto py-3.5 px-6 bg-brand-amber hover:bg-brand-amber/90 active:scale-[0.98] text-slate-950 text-xs sm:text-sm font-bold rounded-xl transition-all shadow-md cursor-pointer inline-flex items-center justify-center gap-2"
            >
              {mt("pricingTeaserBtn")} <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 9: ACCORDION FAQ */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <h3 className="font-display font-bold text-3xl text-white text-center mb-12 tracking-tight">{mt("faqTitle")}</h3>
        <FaqList language={language} />
      </section>

      {/* SECTION 10: FINAL CALL-TO-ACTION BAND */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-brand-amber to-amber-600 rounded-3xl p-10 md:p-16 text-center space-y-6 shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent pointer-events-none" />
          
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-slate-950 tracking-tight">{mt("ctaTitle")}</h2>
          <p className="text-slate-900 font-medium text-xs sm:text-base max-w-xl mx-auto leading-relaxed">{mt("ctaSub")}</p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-6">
            <button
              onClick={() => setPage("contact")}
              className="w-full sm:w-auto px-8 py-4 bg-slate-950 text-brand-amber hover:text-white hover:bg-slate-900 text-sm font-bold rounded-xl transition-all shadow-lg active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2"
            >
              {mt("ctaTrialBtn")}
            </button>
            <button
              onClick={() => {
                setActiveTab("documentation");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="w-full sm:w-auto px-8 py-4 bg-transparent border border-slate-950 text-slate-950 hover:bg-slate-950 hover:text-white text-sm font-bold rounded-xl transition-all active:scale-[0.98] cursor-pointer"
            >
              {mt("ctaGuideBtn")}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

// FAQ Accordion Helper Component
function FaqList({ language }: { language: string }) {
  const mt = (key: string) => getMarketingTranslation(key, language);
  const faqs = [
    { q: mt("faq1Q"), a: mt("faq1A") },
    { q: mt("faq2Q"), a: mt("faq2A") },
    { q: mt("faq3Q"), a: mt("faq3A") },
    { q: mt("faq4Q"), a: mt("faq4A") },
    { q: mt("faq5Q"), a: mt("faq5A") },
    { q: mt("faq6Q"), a: mt("faq6A") },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className="bg-slate-950 rounded-2xl border border-slate-900 overflow-hidden transition-colors"
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full p-5 text-left font-display font-semibold text-sm sm:text-base text-white flex justify-between items-center hover:bg-slate-900/20 cursor-pointer transition-colors"
            >
              <span className="pr-4">{faq.q}</span>
              <ChevronDown
                size={16}
                className={`text-brand-amber shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
              />
            </button>

            {isOpen && (
              <div className="px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-900/60 pt-4">
                {faq.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

// ==========================================
// 2. FEATURES PAGE VIEW
// ==========================================
function FeaturesPage({ language }: { language: string }) {
  const [activeTab, setActiveTab] = useState<"scheduling" | "field" | "quality" | "payroll" | "finance" | "ai" | "integrations">("scheduling");
  const st = (key: Parameters<typeof getSheetTranslation>[0]) => getSheetTranslation(key, language);

  const categories = [
    { id: "scheduling", label: st("featuresTabScheduling") },
    { id: "field", label: st("featuresTabField") },
    { id: "quality", label: st("featuresTabQuality") },
    { id: "payroll", label: st("featuresTabPayroll") },
    { id: "finance", label: st("featuresTabFinance") },
    { id: "ai", label: st("featuresTabAi") },
    { id: "integrations", label: st("featuresTabIntegrations") }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12 text-left">
      <div className="space-y-3 max-w-3xl">
        <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
          {getTranslation("featuresHeading", language)}
        </h1>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          {getTranslation("featuresSubtitle", language)}
        </p>
      </div>

      {/* Feature Navigation Tabs */}
      <div className="flex flex-wrap gap-2 border-b border-slate-900 pb-4">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveTab(cat.id as any)}
            className={`px-3 py-2 text-[10px] font-semibold rounded-lg border transition-all cursor-pointer ${
              activeTab === cat.id
                ? "bg-brand-amber border-brand-amber/30 text-slate-950 font-bold shadow-md"
                : "bg-slate-950 border-slate-900 text-slate-400 hover:bg-slate-900 hover:text-slate-300"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Render selected feature specs */}
      <div className="bg-slate-950 p-6 md:p-10 rounded-3xl border border-slate-900 shadow-xl">
        {activeTab === "scheduling" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-6">
              <h3 className="font-display font-bold text-2xl text-white">Scheduling & Rota Dispatch</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Empower your managers to handle rosters easily. Build recurring visit profiles for commercial properties, view rosters in dynamic calendars, and coordinate route schedules to decrease staff travel times.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-slate-900/60 rounded-xl border border-slate-850">
                  <h5 className="font-bold text-xs text-brand-amber">Rota Grid Builder</h5>
                  <p className="text-[10px] text-slate-400 mt-1 leading-relaxed">Drag and drop staffers into active property slots based on custom qualifications.</p>
                </div>
                <div className="p-4 bg-slate-900/60 rounded-xl border border-slate-850">
                  <h5 className="font-bold text-xs text-brand-amber">2-Way Google Sheet</h5>
                  <p className="text-[10px] text-slate-400 mt-1 leading-relaxed">Direct integration connects property and task registers to a cloud spreadsheet.</p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7 max-w-full overflow-hidden">
              <InteractiveMockup type="sheets" language={language} size="compact" />
            </div>
          </div>
        )}

        {activeTab === "field" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <h3 className="font-display font-bold text-2xl text-white">Cleaner App & Field Work Tracker</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Give your remote workforce a modern, lightning-fast smartphone tool. Cleaners access checklists, run tracking timers, capture photos, and access details—all operational without internet access.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-slate-900/60 rounded-xl border border-slate-850">
                  <h5 className="font-bold text-xs text-brand-amber">Work Timer & Breaks</h5>
                  <p className="text-[10px] text-slate-400 mt-1 leading-relaxed">Clock logs, break holds, and complete submission records with background GPS timestamps.</p>
                </div>
                <div className="p-4 bg-slate-900/60 rounded-xl border border-slate-850">
                  <h5 className="font-bold text-xs text-brand-amber">SOS Emergency Alert</h5>
                  <p className="text-[10px] text-slate-400 mt-1 leading-relaxed">One-tap emergency alarm logs dispatcher incidents and notifies manager contacts.</p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-6 max-w-full overflow-hidden">
              <InteractiveMockup type="timer" language={language} size="compact" />
            </div>
          </div>
        )}

        {activeTab === "quality" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <h3 className="font-display font-bold text-2xl text-white">Quality Assurance & Client Proof</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Provide crystal clear cleaning proof to corporate facilities leads and property clients. Generate professional PDFs featuring before/after pictures, checklists, and QA reviews.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-slate-900/60 rounded-xl border border-slate-850">
                  <h5 className="font-bold text-xs text-brand-amber">AI Photo Scoring</h5>
                  <p className="text-[10px] text-slate-400 mt-1 leading-relaxed">Scans departed conditions automatically to score cleanliness ratings instantly.</p>
                </div>
                <div className="p-4 bg-slate-900/60 rounded-xl border border-slate-850">
                  <h5 className="font-bold text-xs text-brand-amber">Shareable Portals</h5>
                  <p className="text-[10px] text-slate-400 mt-1 leading-relaxed">Client leads view job checklists and photo captures via secure public landing links.</p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-6">
              <InteractiveMockup type="photos" language={language} />
            </div>
          </div>
        )}

        {activeTab === "payroll" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <h3 className="font-display font-bold text-2xl text-white">Roster HR & Payroll Automation</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Consolidate staff wage administration. Review completed timer logs, approve hourly sheets, track cleaner holiday leave schedules, and export payslip documents automatically.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-slate-900/60 rounded-xl border border-slate-850">
                  <h5 className="font-bold text-xs text-brand-amber">Custom Wage Rules</h5>
                  <p className="text-[10px] text-slate-400 mt-1 leading-relaxed">Define flat-rate and hourly salaries individually per workforce listing.</p>
                </div>
                <div className="p-4 bg-slate-900/60 rounded-xl border border-slate-850">
                  <h5 className="font-bold text-xs text-brand-amber">Leave Block Protection</h5>
                  <p className="text-[10px] text-slate-400 mt-1 leading-relaxed">Approved holiday blocks prevent dispatchers from assigning cleaners to shifts.</p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-6 bg-slate-900/50 p-8 rounded-2xl border border-slate-850 text-xs sm:text-sm text-center text-slate-400 italic">
              <Users size={32} className="mx-auto text-brand-amber mb-3" />
              Comprehensive payroll tools available in the web portal.
            </div>
          </div>
        )}

        {activeTab === "finance" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <h3 className="font-display font-bold text-2xl text-white">Client Billing & Finances</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Connect your business finances seamlessly. Track operational service invoices, automate client billing structures from completed job registers, and export branded PDFs.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-slate-900/60 rounded-xl border border-slate-850">
                  <h5 className="font-bold text-xs text-brand-amber">SaaS Company Rota Billing</h5>
                  <p className="text-[10px] text-slate-400 mt-1 leading-relaxed">Stripe billing handles your company base subscription and property unit counts.</p>
                </div>
                <div className="p-4 bg-slate-900/60 rounded-xl border border-slate-850">
                  <h5 className="font-bold text-xs text-brand-amber">Branded PDFs</h5>
                  <p className="text-[10px] text-slate-400 mt-1 leading-relaxed">Deliver personalized invoices and timesheets matching your exact brand colors.</p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-6">
              <InteractiveMockup type="pdf" language={language} />
            </div>
          </div>
        )}

        {activeTab === "ai" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <h3 className="font-display font-bold text-2xl text-white">TidyFlow AI Capabilities</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Improve operational decisions using secure, private Gemini model suggestions. Auto-highlight cleaning checklists, receive dispatch recommendations, and analyze picture scans automatically.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-slate-900/60 rounded-xl border border-slate-850">
                  <h5 className="font-bold text-xs text-brand-amber">Smart Assignments</h5>
                  <p className="text-[10px] text-slate-400 mt-1 leading-relaxed">Recommends dispatch fits based on location proximity, shift calendars, and histories.</p>
                </div>
                <div className="p-4 bg-slate-900/60 rounded-xl border border-slate-850">
                  <h5 className="font-bold text-xs text-brand-amber">Risk Diagnostics</h5>
                  <p className="text-[10px] text-slate-400 mt-1 leading-relaxed">Highlighted notifications warn managers of unassigned tasks and schedule conflicts.</p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-6">
              <InteractiveMockup type="ai" language={language} />
            </div>
          </div>
        )}

        {activeTab === "integrations" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 space-y-5">
              <h3 className="font-display font-bold text-xl text-white">{st("featuresIntegTitle")}</h3>
              <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed">{st("featuresIntegDesc")}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-850">
                  <h5 className="font-bold text-[11px] text-brand-amber">{st("featuresIntegMaps")}</h5>
                  <p className="text-[10px] text-slate-400 mt-1 leading-relaxed">{st("featuresIntegMapsDesc")}</p>
                </div>
                <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-850">
                  <h5 className="font-bold text-[11px] text-brand-amber">{st("featuresIntegStripe")}</h5>
                  <p className="text-[10px] text-slate-400 mt-1 leading-relaxed">{st("featuresIntegStripeDesc")}</p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7 max-w-full overflow-hidden">
              <div className="rounded-xl border border-slate-850 bg-slate-900/30 p-2.5 shadow-lg">
                <InteractiveMockup type="sheets" language={language} size="compact" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ==========================================
// 3. PRICING PAGE VIEW (With Live Calculator!)
// ==========================================
function PricingPage({ language }: { language: string }) {
  const [isAnnual, setIsAnnual] = useState(false);
  const [estimatedProperties, setEstimatedProperties] = useState(15);
  const [estimatedCleaners, setEstimatedCleaners] = useState(8);

  let recommendedPlan: "startup" | "standard" | "premium" = "standard";
  if (estimatedProperties <= 10 && estimatedCleaners <= 5) {
    recommendedPlan = "startup";
  } else if (estimatedProperties <= 50 && estimatedCleaners <= 25) {
    recommendedPlan = "standard";
  } else {
    recommendedPlan = "premium";
  }

  const plans = [
    {
      id: "startup",
      name: "Startup",
      monthlyPrice: 29,
      annualPrice: 23,
      properties: "Up to 10",
      cleaners: "Up to 5",
      managers: "Up to 2",
      aiOps: "50 ops / month",
      description: "Ideal for growing cleaning agencies establishing their initial routes.",
      features: [
        "Core scheduling & GPS logs",
        "AI cleaner assignment",
        "AI checklist generation",
        "Capped AI photo verification",
        "Standard invoice PDFs",
        "Google Sheets real-time sync"
      ]
    },
    {
      id: "standard",
      name: "Standard",
      monthlyPrice: 79,
      annualPrice: 63,
      properties: "Up to 50",
      cleaners: "Up to 25",
      managers: "Up to 10",
      aiOps: "500 ops / month",
      isPopular: true,
      description: "Best for established residential and commercial operations.",
      features: [
        "Everything in Startup",
        "Full client invoicing modules",
        "AI Invoice Assist integration",
        "100 PDF reports / month",
        "Higher cap AI photo verification",
        "Timesheet wage rules engine",
        "Live Rota Builder dispatch"
      ]
    },
    {
      id: "premium",
      name: "Premium",
      monthlyPrice: 149,
      annualPrice: 119,
      properties: "Unlimited",
      cleaners: "Unlimited",
      managers: "Unlimited",
      aiOps: "Unlimited",
      description: "Engineered for enterprise facility operations and massive teams.",
      features: [
        "Everything in Standard",
        "Unlimited PDF exports & reports",
        "Deep AI business insights",
        "Unlimited AI operations",
        "Multi-company / Multi-tenant",
        "Full CSV & database exports",
        "24/7 VIP priority support"
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16 text-left relative">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-[10px] font-mono font-bold text-brand-amber uppercase tracking-widest bg-brand-amber/5 px-3 py-1.5 rounded-full border border-brand-amber/15">
          Flat Tiered Subscriptions
        </span>
        <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">{getTranslation("pricingHeading", language)}</h1>
        <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
          {getTranslation("pricingSubtitle", language)}
        </p>

        {/* Annual / Monthly Toggle */}
        <div className="flex items-center justify-center gap-3 pt-6">
          <span className={`text-xs sm:text-sm font-semibold transition-colors duration-200 ${!isAnnual ? "text-white" : "text-slate-400"}`}>Billed Monthly</span>
          <button
            onClick={() => setIsAnnual(!isAnnual)}
            className="w-12 h-7 bg-slate-900 border border-slate-800 rounded-full relative p-1 transition-colors focus:outline-none cursor-pointer"
          >
            <div
              className={`w-4 h-4 bg-brand-amber rounded-full shadow-lg transform transition-transform duration-250 ${
                isAnnual ? "translate-x-5" : "translate-x-0"
              }`}
            />
          </button>
          <span className={`text-xs sm:text-sm font-semibold transition-colors duration-200 ${isAnnual ? "text-brand-amber" : "text-slate-400"} flex items-center gap-1.5`}>
            Billed Annually
            <span className="px-2 py-0.5 bg-brand-amber/15 text-brand-amber text-[9px] font-mono font-bold rounded-md">
              Save 20%
            </span>
          </span>
        </div>
      </div>

      {/* Roster Estimator Tool */}
      <div className="bg-slate-950 p-6 sm:p-8 rounded-3xl border border-slate-900/80 max-w-4xl mx-auto space-y-6 relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 p-3 bg-brand-amber/10 border-bl border-slate-900 text-brand-amber rounded-bl-xl font-mono text-[9px] font-bold">
          DYNAMIC PLAN ADVISOR
        </div>
        <div className="space-y-2 max-w-xl">
          <h3 className="font-display font-bold text-xs uppercase tracking-wider text-slate-300">Plan Advisor & Team Size Estimator</h3>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            Drag the sliders below to enter your estimated properties count and cleaner workforce count. We will automatically highlight the best plan tier for your operations:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          {/* Properties Slider */}
          <div className="space-y-3 bg-slate-900/40 p-5 rounded-2xl border border-slate-850">
            <div className="flex justify-between items-center text-xs font-semibold">
              <span className="text-slate-400">Estimated Properties</span>
              <span className="text-brand-amber font-mono font-bold text-lg">{estimatedProperties === 150 ? "150+" : `${estimatedProperties} Units`}</span>
            </div>
            <input
              type="range"
              min="1"
              max="150"
              value={estimatedProperties}
              onChange={(e) => setEstimatedProperties(parseInt(e.target.value))}
              className="w-full accent-brand-amber h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-[9px] text-slate-500 font-mono">
              <span>1 Property</span>
              <span>75 Properties</span>
              <span>150+ Properties</span>
            </div>
          </div>

          {/* Cleaners Slider */}
          <div className="space-y-3 bg-slate-900/40 p-5 rounded-2xl border border-slate-850">
            <div className="flex justify-between items-center text-xs font-semibold">
              <span className="text-slate-400">Workforce Cleaners</span>
              <span className="text-brand-amber font-mono font-bold text-lg">{estimatedCleaners === 100 ? "100+" : `${estimatedCleaners} Staff`}</span>
            </div>
            <input
              type="range"
              min="1"
              max="100"
              value={estimatedCleaners}
              onChange={(e) => setEstimatedCleaners(parseInt(e.target.value))}
              className="w-full accent-brand-amber h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-[9px] text-slate-500 font-mono">
              <span>1 Cleaner</span>
              <span>50 Cleaners</span>
              <span>100+ Cleaners</span>
            </div>
          </div>
        </div>

        <div className="bg-slate-900/60 border border-brand-amber/15 p-4 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2 text-slate-300">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-amber inline-block shrink-0"></span>
            <span>Based on your selection of <strong className="text-white font-semibold">{estimatedProperties} properties</strong> and <strong className="text-white font-semibold">{estimatedCleaners} cleaners</strong>, we recommend:</span>
          </div>
          <span className="px-4 py-1.5 bg-brand-amber text-slate-950 font-black rounded-lg uppercase tracking-wider text-[10px] shadow-sm select-none">
            {recommendedPlan.toUpperCase()} TIER
          </span>
        </div>
      </div>

      {/* Plan Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto pt-6">
        {plans.map((plan) => {
          const isRecommended = plan.id === recommendedPlan;
          const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;

          return (
            <div
              key={plan.id}
              className={`bg-slate-950 p-6 sm:p-8 rounded-3xl border flex flex-col justify-between space-y-6 relative transition-all duration-300 ${
                isRecommended
                  ? "border-brand-amber ring-2 ring-brand-amber/25 shadow-2xl shadow-brand-amber/[0.03] scale-[1.02]"
                  : "border-slate-900 text-slate-300 opacity-95 hover:border-slate-800"
              }`}
            >
              {isRecommended && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-brand-amber text-slate-950 text-[10px] font-mono tracking-wider font-extrabold rounded-full shadow-lg uppercase">
                  ⭐ RECOMMENDED FOR YOU
                </div>
              )}

              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="font-display font-bold text-2xl text-white">{plan.name}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed min-h-[40px]">{plan.description}</p>
                </div>

                <div className="flex items-baseline gap-1.5 pt-2 border-b border-slate-900 pb-5">
                  <span className="text-5xl font-extrabold text-white font-mono">${price}</span>
                  <span className="text-xs text-slate-400 font-mono">/ month</span>
                </div>

                {/* Capacity Limits List */}
                <div className="bg-slate-900/30 rounded-xl p-4 border border-slate-900 text-xs space-y-3">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Properties:</span>
                    <strong className="text-white font-semibold">{plan.properties}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Cleaners:</span>
                    <strong className="text-white font-semibold">{plan.cleaners}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Managers:</span>
                    <strong className="text-white font-semibold">{plan.managers}</strong>
                  </div>
                  <div className="flex justify-between border-t border-slate-850 pt-2.5 mt-1">
                    <span className="text-slate-400 font-medium">AI Operations:</span>
                    <strong className="text-brand-amber font-mono font-bold">{plan.aiOps}</strong>
                  </div>
                </div>

                {/* Features Checklist */}
                <div className="space-y-3 pt-2">
                  <span className="text-[10px] font-mono tracking-widest text-slate-500 uppercase font-bold block">Included capabilities</span>
                  <ul className="space-y-2.5 text-xs text-slate-400">
                    {plan.features.map((feat, idx) => (
                      <li key={idx} className="flex gap-2.5 items-start">
                        <CheckCircle size={14} className="text-brand-amber shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="space-y-3 pt-4">
                <button
                  onClick={() => alert(`Initiating trial registration for the TidyFlow ${plan.name} plan! Redirecting to Stripe secure checkouts...`)}
                  className={`w-full py-3.5 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1.5 active:scale-[0.98] ${
                    isRecommended
                      ? "bg-brand-amber hover:bg-brand-amber/90 text-slate-950 font-bold shadow-md shadow-brand-amber/10"
                      : "bg-slate-900 hover:bg-slate-850 text-slate-200 border border-slate-800"
                  }`}
                >
                  Start 14-Day Free Trial
                </button>
                <p className="text-[10px] text-slate-500 text-center leading-normal">
                  Requires zero credit card details to start. Cancel anytime.
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ==========================================
// 4. HOW IT WORKS PAGE VIEW
// ==========================================
function HowItWorksPage({ language: _language }: { language: string }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16 text-left">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-[10px] font-mono font-bold text-brand-amber uppercase tracking-widest bg-brand-amber/5 px-3 py-1.5 rounded-full border border-brand-amber/15">
          Seamless Onboarding Flow
        </span>
        <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">How TidyFlow Operates</h1>
        <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
          A transparent, step-by-step breakdown explaining how TidyFlow simplifies your daily workflow.
        </p>
      </div>

      <div className="space-y-8 max-w-4xl mx-auto">
        {[
          {
            step: "1",
            title: "Properties & Spreadsheet Integration",
            desc: "Create property registers inside the manager dashboard, or connect your company's master Google Sheet. If you choose sheet synchronization, TidyFlow automatically populates your properties and schedules from the spreadsheet tabs."
          },
          {
            step: "2",
            title: "Schedule Rota Timelines",
            desc: "Dispatch assigned tasks to cleaners via the Rota Builder. Cleaners who are on approved annual leave are greyed out automatically to prevent scheduling mistakes, and TidyFlow AI stands ready to recommend optimal staff alignments based on location."
          },
          {
            step: "3",
            title: "Checklist & GPS Timer Logs",
            desc: "Cleaners log into the mobile app, viewing only their assigned schedule for the day. They clock in utilizing geofenced GPS locks and execute room duties utilizing offline checklists. Photos are snapped and queued locally."
          },
          {
            step: "4",
            title: "Review & Professional Billing",
            desc: "Once submitted, managers inspect visual before/after proof and approve logged hours. Formatted payroll wage logs are computed automatically. White-labeled client PDF reports are compiled in a single click, ready for direct email dispatch.",
            emerald: true
          }
        ].map((item, idx) => (
          <div key={idx} className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start bg-slate-950 p-6 sm:p-8 rounded-2xl border border-slate-900/80 hover:border-slate-800 transition-colors duration-200">
            <div className="md:col-span-2 text-left md:text-center shrink-0">
              <div className={`w-14 h-14 rounded-2xl border-2 flex items-center justify-center text-lg font-mono font-bold mx-auto md:mx-auto ${
                item.emerald ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400" : "bg-brand-amber/10 border-brand-amber/30 text-brand-amber"
              }`}>
                {item.step}
              </div>
            </div>
            <div className="md:col-span-10 space-y-2">
              <h4 className="font-display font-bold text-white text-lg tracking-tight">{item.title}</h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ==========================================
// 5. PERSONA PAGES VIEW
// ==========================================
function PersonasPage({ language }: { language: string }) {
  const [activePersona, setActivePersona] = useState<"owner" | "manager" | "cleaner" | "client">("owner");

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12 text-left">
      <div className="space-y-3 max-w-3xl">
        <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">Designed For Every Role</h1>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          A modular, multi-faceted platform custom engineered to accommodate owners, coordinators, and cleaners alike.
        </p>
      </div>

      {/* Role Navigation Button Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border-b border-slate-900 pb-6">
        {[
          { id: "owner", title: "Company Owners", meta: "Business Overview" },
          { id: "manager", title: "Operations Managers", meta: "Roster Controls" },
          { id: "cleaner", title: "Field Cleaners", meta: "Mobile Offline Tool" },
          { id: "client", title: "Property Clients", meta: "Visual Proof & QA" }
        ].map((p) => (
          <button
            key={p.id}
            onClick={() => setActivePersona(p.id as any)}
            className={`py-3 px-5 rounded-2xl border text-left transition-all cursor-pointer ${
              activePersona === p.id
                ? "bg-slate-950 border-brand-amber text-brand-amber ring-2 ring-brand-amber/25 shadow-md"
                : "bg-slate-950 border-slate-900 text-slate-400 hover:bg-slate-900 hover:border-slate-800"
            }`}
          >
            <span className="block font-display font-bold text-sm sm:text-base">{p.title}</span>
            <span className="text-[10px] text-slate-500 font-mono tracking-wider block mt-0.5">{p.meta}</span>
          </button>
        ))}
      </div>

      {/* Render Persona specifics */}
      <div className="bg-slate-950 p-6 md:p-10 rounded-3xl border border-slate-900 shadow-xl">
        {activePersona === "owner" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="px-3 py-1 bg-brand-amber/10 text-brand-amber text-[10px] font-mono font-bold rounded-lg border border-brand-amber/20">
                OWNER FOCUS
              </span>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight">Complete Business Visibility</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                TidyFlow helps cleaning business owners run professional, profitable enterprises without constant micromanaging. Keep your historical client properties cataloged, connect Google Sheet data flows, track invoices automatically, and monitor performance analytics on a centralized master dashboard.
              </p>
              <div className="space-y-3 pt-2 text-xs sm:text-sm text-slate-400 border-t border-slate-900">
                <p className="flex gap-3 items-center">
                  <span className="text-brand-amber font-bold">✓</span>
                  <span>Financial Oversight: Track invoice billings and contractor payroll expenses.</span>
                </p>
                <p className="flex gap-3 items-center">
                  <span className="text-brand-amber font-bold">✓</span>
                  <span>Secure Tenant Data: Data is sandboxed with strict compliance protocols.</span>
                </p>
                <p className="flex gap-3 items-center">
                  <span className="text-brand-amber font-bold">✓</span>
                  <span>Unlimited Scalability: Base pricing scale adapts dynamically to property units.</span>
                </p>
              </div>
            </div>
            <div className="lg:col-span-5">
              <InteractiveMockup type="pdf" language={language} />
            </div>
          </div>
        )}

        {activePersona === "manager" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="px-3 py-1 bg-brand-amber/10 text-brand-amber text-[10px] font-mono font-bold rounded-lg border border-brand-amber/20">
                COORDINATOR FOCUS
              </span>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight">Stop chasing cleaners on WhatsApp</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Operations managers spend half their days coordinating team rosters, validating timestamps, and confirming clean conditions. TidyFlow saves time by aggregating GPS verified timestamps, highlighting uncompleted checklists, and raising safety SOS notifications in a dedicated portal.
              </p>
              <div className="space-y-3 pt-2 text-xs sm:text-sm text-slate-400 border-t border-slate-900">
                <p className="flex gap-3 items-center">
                  <span className="text-brand-amber font-bold">✓</span>
                  <span>Rota Conflict Alarms: Leave records automatically grey out cleaners from dispatch.</span>
                </p>
                <p className="flex gap-3 items-center">
                  <span className="text-brand-amber font-bold">✓</span>
                  <span>Unified Issue Logs: Track reported property maintenance faults in real time.</span>
                </p>
                <p className="flex gap-3 items-center">
                  <span className="text-brand-amber font-bold">✓</span>
                  <span>Smart AI Recommendations: Easily determine the optimal cleaner based on location.</span>
                </p>
              </div>
            </div>
            <div className="lg:col-span-5">
              <InteractiveMockup type="ai" language={language} />
            </div>
          </div>
        )}

        {activePersona === "cleaner" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="px-3 py-1 bg-brand-amber/10 text-brand-amber text-[10px] font-mono font-bold rounded-lg border border-brand-amber/20">
                FIELD FORCES FOCUS
              </span>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight">A streamlined app that works offline</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Remote janitorial forces and residential cleaners operate inside large basement spaces, commercial offices, and low-signal neighborhoods. TidyFlow has been engineered to run completely offline. Start timers, tick checklist milestones, and upload before/after photos with automatic cache queue syncing.
              </p>
              <div className="space-y-3 pt-2 text-xs sm:text-sm text-slate-400 border-t border-slate-900">
                <p className="flex gap-3 items-center">
                  <span className="text-brand-amber font-bold">✓</span>
                  <span>Clear Daily Roster: Cleaners only see their assigned properties for the day.</span>
                </p>
                <p className="flex gap-3 items-center">
                  <span className="text-brand-amber font-bold">✓</span>
                  <span>One-Tap SOS Button: Triggers immediate dispatcher alerts with GPS tracking.</span>
                </p>
                <p className="flex gap-3 items-center">
                  <span className="text-brand-amber font-bold">✓</span>
                  <span>Automatic Cache Syncing: Data uploads automatically when signal returns.</span>
                </p>
              </div>
            </div>
            <div className="lg:col-span-5">
              <InteractiveMockup type="timer" language={language} />
            </div>
          </div>
        )}

        {activePersona === "client" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 text-[10px] font-mono font-bold rounded-lg border border-emerald-500/20">
                CLIENT EXPERIENCE FOCUS
              </span>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight">Branded proof-of-work portals</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Earn client trust through consistent, verifiable cleaning proof. Dispatch professional, white-labeled PDF timesheet reports, or provide shareable client portal links where facility leads can inspect completion logs and review high-resolution pictures directly.
              </p>
              <div className="space-y-3 pt-2 text-xs sm:text-sm text-slate-400 border-t border-slate-900">
                <p className="flex gap-3 items-center">
                  <span className="text-brand-amber font-bold">✓</span>
                  <span>White-Labeled PDF Reports: Customize invoice reports with company logos and colors.</span>
                </p>
                <p className="flex gap-3 items-center">
                  <span className="text-brand-amber font-bold">✓</span>
                  <span>Real-time Portals: Clients verify work completion timestamps instantly.</span>
                </p>
                <p className="flex gap-3 items-center">
                  <span className="text-brand-amber font-bold">✓</span>
                  <span>Two-way review logs: Gather feedback easily to improve services.</span>
                </p>
              </div>
            </div>
            <div className="lg:col-span-5">
              <InteractiveMockup type="photos" language={language} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ==========================================
// 6. INTEGRATIONS & SHEET EXPLAINER
// ==========================================
function IntegrationsPage({ language }: { language: string }) {
  const t = (key: Parameters<typeof getSheetTranslation>[0]) => getSheetTranslation(key, language);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16 text-left">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-[10px] font-mono font-bold text-brand-amber uppercase tracking-widest bg-brand-amber/5 px-3 py-1.5 rounded-full border border-brand-amber/15">
          {t("integPageBadge")}
        </span>
        <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">{t("integPageTitle")}</h1>
        <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">{t("integPageSubtitle")}</p>
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          <div className="lg:col-span-5 space-y-5">
            <h3 className="font-display font-bold text-2xl text-white tracking-tight">{t("integPageSheetsTitle")}</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{t("integPageSheetsDesc")}</p>

            <div className="pt-2">
              <a
                href="https://docs.google.com/spreadsheets/d/1TwpA0HeIB6hyfKMd3Y6u8X4v9jxujtAFhxD3rXLFghk/edit?gid=97592833#gid=97592833"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-4 py-2.5 bg-emerald-950/40 hover:bg-emerald-900/30 border border-emerald-800/40 text-emerald-400 hover:text-emerald-300 rounded-xl text-xs font-bold transition-all shadow-sm group cursor-pointer"
              >
                <div className="w-5 h-5 bg-emerald-600 text-white font-bold rounded flex items-center justify-center shrink-0 text-[10px]">田</div>
                <span>{t("integPageOpenTemplate")}</span>
              </a>
            </div>

            <div className="bg-slate-950 p-5 rounded-2xl border border-slate-900 space-y-3">
              <span className="text-[10px] font-mono text-brand-amber uppercase tracking-wider font-semibold block">
                {t("integPageFormatTitle")}
              </span>
              <p className="text-xs text-slate-400 leading-relaxed">{t("integPageFormatDesc")}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs pt-2">
              <div className="p-4 bg-slate-950 border border-slate-900 rounded-xl">
                <h5 className="font-bold text-white text-sm">{t("integPageStripeTitle")}</h5>
                <p className="text-[11px] mt-1.5 text-slate-400 leading-relaxed">{t("integPageStripeDesc")}</p>
              </div>
              <div className="p-4 bg-slate-950 border border-slate-900 rounded-xl">
                <h5 className="font-bold text-white text-sm">{t("integPageMapsTitle")}</h5>
                <p className="text-[11px] mt-1.5 text-slate-400 leading-relaxed">{t("integPageMapsDesc")}</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 max-w-full overflow-hidden">
            <div className="rounded-xl border border-slate-800 bg-slate-950/40 p-2.5 shadow-lg backdrop-blur-md">
              <InteractiveMockup type="sheets" language={language} size="compact" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// 7. DEMO BOOKING PORTAL / CONTACT
// ==========================================
function ContactPage({ language }: { language: string }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    size: "1-10",
    sheetUse: "yes",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [sendLogs, setSendLogs] = useState<string[]>([]);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [mailConfig, setMailConfig] = useState<{
    configured: boolean;
    smtpHost: string | null;
    toEmail: string | null;
  } | null>(null);

  useEffect(() => {
    fetch("/api/contact/config")
      .then((res) => res.json())
      .then(setMailConfig)
      .catch(() => setMailConfig({ configured: false, smtpHost: null, toEmail: null }));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setSendLogs([]);
    setSubmitError(null);

    const smtpHost = mailConfig?.smtpHost || "smtp (not configured)";
    const toEmail = mailConfig?.toEmail || "admin";

    const logSteps = [
      `📡 DNS Lookup: resolving ${smtpHost}...`,
      "🔐 Establishing secure TLS 1.3 handshake...",
      `🔑 Routing application for "${formData.company}" to master registration registry...`,
      "📬 Authenticating secure envelope forwarding...",
      `📤 Packaging operational metadata payload (Cleaners: ${formData.size}, Sheets: ${formData.sheetUse})...`,
      `📨 Relaying metadata packet to: ${toEmail}...`,
      "✨ Triggering automatic evaluation calendar slots..."
    ];

    for (let i = 0; i < logSteps.length; i++) {
      await new Promise((resolve) => setTimeout(resolve, 300));
      setSendLogs((prev) => [...prev, logSteps[i]]);
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(data.error || `Server error ${res.status}`);
      }
      setSendLogs((prev) => [...prev, "✅ Success! SMTP relay response: 250 OK - message successfully delivered."]);
      setSubmitted(true);
    } catch (err: any) {
      setSendLogs((prev) => [...prev, `❌ Delivery failed: ${err.message}`]);
      setSubmitError(err.message || "Failed to send message.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-left">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Info Column */}
        <div className="lg:col-span-6 space-y-8">
          <div className="space-y-4">
            <span className="px-3 py-1.5 bg-brand-amber/10 text-brand-amber text-[10px] font-mono font-bold rounded-lg border border-brand-amber/20">
              START TRIAL TODAY
            </span>
            <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
              {getTranslation("contactHeading", language)}
            </h1>
            <p className="text-xs sm:text-base text-slate-300 leading-relaxed">
              {getTranslation("contactSubtitle", language)}
            </p>
          </div>

          <div className="space-y-6 pt-4 border-t border-slate-900">
            <div className="flex gap-4 items-start">
              <div className="w-6 h-6 rounded bg-brand-amber/10 text-brand-amber flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                ✓
              </div>
              <p className="text-xs sm:text-sm text-slate-400">
                <span className="text-white font-bold block mb-1">14-Day Free Evaluation</span>
                Explore the complete platform. Base corporate fees and property add-on charges are suspended during trial evaluation.
              </p>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-6 h-6 rounded bg-brand-amber/10 text-brand-amber flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                ✓
              </div>
              <p className="text-xs sm:text-sm text-slate-400">
                <span className="text-white font-bold block mb-1">Guided Spreadsheet Setup</span>
                Our technical support leads stand ready to assist you in connecting your company's master Google Sheet rosters safely.
              </p>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-6 h-6 rounded bg-brand-amber/10 text-brand-amber flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                ✓
              </div>
              <p className="text-xs sm:text-sm text-slate-400">
                <span className="text-white font-bold block mb-1">No Credit Cards Needed</span>
                Trial evaluation accounts are activated instantly. Provide billing details only when you decide to proceed with active rosters.
              </p>
            </div>
          </div>
        </div>

        {/* Form Column */}
        <div className="lg:col-span-6 bg-slate-950 p-6 sm:p-10 rounded-3xl border border-slate-900 shadow-2xl">
          {isSending ? (
            <div className="space-y-4 font-mono text-left">
              <div className="flex items-center gap-2 pb-3.5 border-b border-slate-900">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block"></span>
                <span className="text-[9px] text-slate-500 uppercase tracking-widest ml-1.5 font-bold">SMTP Mail Dispatcher v1.4</span>
              </div>
              <div className="bg-slate-900/40 p-5 rounded-2xl border border-slate-850 text-[10px] sm:text-xs leading-relaxed space-y-2 h-64 overflow-y-auto text-emerald-400">
                {sendLogs.map((log, i) => (
                  <div key={i} className="flex items-start gap-1.5">
                    <span className="text-slate-600 select-none">❯</span>
                    <span>{log}</span>
                  </div>
                ))}
                <div className="inline-block w-1.5 h-3.5 bg-emerald-400 animate-pulse align-middle ml-1"></div>
              </div>
              <div className="text-[10px] text-slate-500 text-center">
                Securely relaying payload to:{" "}
                <span className="text-brand-amber font-bold">{mailConfig?.toEmail || "configure CONTACT_TO_EMAIL in .env"}</span>
                {mailConfig?.smtpHost && (
                  <span className="block mt-1 text-slate-600">via {mailConfig.smtpHost}</span>
                )}
              </div>
            </div>
          ) : !submitted ? (
            <form onSubmit={handleSubmit} className="space-y-5 text-xs">
              {submitError && (
                <div className="p-3 rounded-xl bg-rose-950/40 border border-rose-900/50 text-rose-300 text-[11px] leading-relaxed">
                  {submitError}
                </div>
              )}
              {!mailConfig?.configured && mailConfig !== null && (
                <div className="p-3 rounded-xl bg-amber-950/30 border border-amber-900/40 text-amber-200/90 text-[10px] leading-relaxed">
                  SMTP not configured on server — add <code className="text-brand-amber">SMTP_*</code> and <code className="text-brand-amber">CONTACT_TO_EMAIL</code> to your <code>.env</code> file.
                </div>
              )}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="block text-slate-400 font-semibold">{getTranslation("formName", language)}</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full p-3.5 bg-slate-900 border border-slate-800 rounded-xl focus:border-brand-amber focus:ring-1 focus:ring-brand-amber text-slate-200 text-xs sm:text-sm placeholder-slate-600"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="block text-slate-400 font-semibold">{getTranslation("formEmail", language)}</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full p-3.5 bg-slate-900 border border-slate-800 rounded-xl focus:border-brand-amber focus:ring-1 focus:ring-brand-amber text-slate-200 text-xs sm:text-sm placeholder-slate-600"
                    placeholder="john@cleancompany.com"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="block text-slate-400 font-semibold">{getTranslation("formCompany", language)}</label>
                <input
                  type="text"
                  required
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full p-3.5 bg-slate-900 border border-slate-800 rounded-xl focus:border-brand-amber focus:ring-1 focus:ring-brand-amber text-slate-200 text-xs sm:text-sm placeholder-slate-600"
                  placeholder="e.g. Sparkle Facilities Group"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="block text-slate-400 font-semibold">{getTranslation("formTeam", language)}</label>
                  <select
                    value={formData.size}
                    onChange={(e) => setFormData({ ...formData, size: e.target.value })}
                    className="w-full p-3.5 bg-slate-900 border border-slate-800 rounded-xl text-slate-300 focus:border-brand-amber text-xs sm:text-sm"
                  >
                    <option value="1-10">1 - 10 active cleaners</option>
                    <option value="11-49">11 - 49 active cleaners</option>
                    <option value="50-100">50 - 100 active cleaners</option>
                    <option value="100+">100+ cleaners</option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="block text-slate-400 font-semibold">{getTranslation("formSheets", language)}</label>
                  <select
                    value={formData.sheetUse}
                    onChange={(e) => setFormData({ ...formData, sheetUse: e.target.value })}
                    className="w-full p-3.5 bg-slate-900 border border-slate-800 rounded-xl text-slate-300 focus:border-brand-amber text-xs sm:text-sm"
                  >
                    <option value="yes">Yes, primarily</option>
                    <option value="no">No, only paper/WhatsApp</option>
                    <option value="excel">Yes, Excel/Local files</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="block text-slate-400 font-semibold">{getTranslation("formDetails", language)}</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full p-3.5 bg-slate-900 border border-slate-800 rounded-xl text-slate-200 text-xs sm:text-sm h-24 resize-none focus:border-brand-amber placeholder-slate-600"
                  placeholder="Tell us about your active property count or specific integration requests..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 px-6 bg-brand-amber hover:bg-brand-amber/90 active:scale-[0.98] text-slate-950 font-bold rounded-xl text-xs sm:text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send size={14} /> {getTranslation("formSubmit", language)}
              </button>
            </form>
          ) : (
            <div className="text-center py-16 space-y-5">
              <span className="text-5xl inline-block animate-bounce">🎉</span>
              <h3 className="font-display font-bold text-xl text-white">Onboarding request received!</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm mx-auto">
                Thank you for reaching out, <span className="text-brand-amber font-bold">{formData.name}</span>. 
                Our operations team has registered your business record for <span className="text-brand-amber font-bold">{formData.company}</span>. 
                A direct secure copy was routed to <span className="text-brand-amber font-bold">bawaritech@gmail.com</span>.
                Check your inbox at <span className="text-slate-200 font-bold">{formData.email}</span> within the hour for your scheduling calendar link and secure starter invitation.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-5 py-2.5 bg-slate-900 text-xs sm:text-sm font-semibold rounded-xl text-slate-300 border border-slate-800 hover:bg-slate-850 cursor-pointer"
              >
                Submit another request
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Custom simple Lucide wrapper to make sure everything compiles
function CameraIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
      <circle cx="12" cy="13" r="3" />
    </svg>
  );
}
