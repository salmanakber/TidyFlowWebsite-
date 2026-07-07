"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import InteractiveMockup from "./InteractiveMockup";
import { getTranslation } from "../utils/translations";
import { getSheetTranslation } from "../utils/sheetMockupTranslations";
import { getMarketingTranslation, formatMarketingTranslation } from "../utils/marketingTranslations";
import {
  fetchPublicPlans,
  formatAiOps,
  formatPlanLimit,
  recommendPlanCode,
  type NormalizedPlan,
  type PlanCode
} from "../utils/plansApi";
import { IOS_APP_URL, ANDROID_APP_URL } from "../config/appLinks";
import { useSite } from "../context/SiteContext";
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
  X,
  Shield,
  Check,
  MapPin,
  WifiOff,
  CloudOff
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function MarketingShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="pt-24 min-h-screen flex flex-col bg-slate-950 text-slate-100 selection:bg-brand-amber/30 selection:text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-amber/[0.04] rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute top-[800px] left-[-300px] w-[900px] h-[900px] bg-blue-500/[0.03] rounded-full blur-[200px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-[-200px] w-[800px] h-[800px] bg-emerald-500/[0.03] rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_80%,transparent_100%)] opacity-25 pointer-events-none -z-10" />
      <div className="absolute top-6 left-6 w-16 h-16 border-l border-t border-slate-800/80 pointer-events-none hidden lg:block" />
      <div className="absolute top-6 right-6 w-16 h-16 border-r border-t border-slate-800/80 pointer-events-none hidden lg:block" />
      <div className="absolute bottom-6 left-6 w-16 h-16 border-l border-b border-slate-800/80 pointer-events-none hidden lg:block" />
      <div className="absolute bottom-6 right-6 w-16 h-16 border-r border-b border-slate-800/80 pointer-events-none hidden lg:block" />
      <div className="flex-1 z-10">{children}</div>
    </div>
  );
}

/** Route-level marketing page renderer (uses SiteContext language). */
export function MarketingPageView({ page }: { page: string }) {
  const { language } = useSite();
  return (
    <MarketingShell>
      {page === "home" && <HomePage language={language} />}
      {page === "features" && <FeaturesPage language={language} />}
      {page === "pricing" && <PricingPage language={language} />}
      {page === "how-it-works" && <HowItWorksPage language={language} />}
      {page === "personas" && <PersonasPage language={language} />}
      {page === "integrations" && <IntegrationsPage language={language} />}
      {page === "contact" && <ContactPage language={language} />}
    </MarketingShell>
  );
}

// ==========================================
// PHYSICAL Flagship SMARTPHONE CHASSIS (Adaptive Heights)
// ==========================================
interface PhoneFrameProps {
  children: React.ReactNode;
}

function PhoneFrame({ children }: PhoneFrameProps) {
  return (
    <div className="relative mx-auto w-full max-w-[340px] sm:max-w-[370px] transition-all duration-500 hover:translate-y-[-6px] select-none">
      {/* Outer ambient glow */}
      <div className="absolute inset-0 bg-brand-amber/[0.14] rounded-[60px] blur-3xl -z-10 transition-opacity duration-500" />

      {/* Physical Hardware Frame */}
      <div className="p-[11px] bg-slate-900 rounded-[60px] border border-slate-800 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.9)] relative overflow-hidden ring-1 ring-white/10">
        
        {/* Screen glass glare overlay */}
        <div className="absolute top-0 left-0 w-full h-[150%] bg-gradient-to-tr from-transparent via-white/[0.04] to-transparent pointer-events-none transform -translate-y-24 z-20 rotate-12" />

        {/* Physical hardware button representations */}
        <div className="absolute -left-[2px] top-28 w-[3px] h-14 bg-slate-750 rounded-l" />
        <div className="absolute -left-[2px] top-48 w-[3px] h-14 bg-slate-750 rounded-l" />
        <div className="absolute -right-[2px] top-36 w-[3px] h-20 bg-slate-750 rounded-r" />

        {/* Screen Bezel and Inner Display */}
        <div className="bg-slate-950 rounded-[50px] overflow-hidden border border-slate-950 relative shadow-inner">
          
          {/* Top Notch - Island */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-36 h-7 bg-slate-950 rounded-b-2xl z-30 flex items-center justify-between px-5">
            <div className="w-3.5 h-3.5 bg-slate-900 rounded-full border border-slate-800 flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-blue-950 rounded-full" />
            </div>
            <div className="w-2 h-2 bg-slate-900 rounded-full" />
          </div>

          {/* Device Top Status Information Bar */}
          <div className="absolute top-0 left-0 right-0 h-9 flex items-center justify-between px-7 z-20 text-[10px] font-mono font-medium text-slate-400">
            <span>09:41 AM</span>
            <div className="flex items-center gap-1.5 pt-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block animate-pulse" />
              <span className="text-[9px] uppercase tracking-wider text-slate-400">GPS Active</span>
            </div>
          </div>

          {/* Actual Screen Content - High-Fidelity & Fully Responsive viewport */}
          <div className="w-full pt-10 pb-6 h-[640px] sm:h-[700px] flex flex-col justify-start overflow-y-auto scrollbar-none relative bg-slate-950">
            {children}
          </div>

          {/* Bottom Home Swipe Bar Indicator */}
          <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-32 h-1 bg-slate-800 rounded-full z-20" />
        </div>
      </div>
    </div>
  );
}

function AppDownloadButtons({ language, layout = "row" }: { language: string; layout?: "row" | "stack" }) {
  const mt = (key: string) => getMarketingTranslation(key, language);
  const stack = layout === "stack";

  return (
    <div className={`${stack ? "flex flex-col gap-3 w-full" : "flex flex-wrap gap-3 items-center"}`}>
      <a
        href={IOS_APP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-center gap-3 px-4 py-2.5 bg-slate-900 hover:bg-slate-850 border border-slate-800 hover:border-brand-amber/30 rounded-xl transition-all hover:-translate-y-0.5 group shadow-sm ${stack ? "w-full justify-center sm:justify-start" : ""}`}
      >
        <svg className="w-6 h-6 text-white fill-current shrink-0" viewBox="0 0 24 24" aria-hidden>
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42.14-.61.32M15.97 4.17c.66-.81 1.11-1.93.99-3.06-1 .05-2.2.68-2.92 1.5-.63.73-1.18 1.87-1.03 2.98 1.12.09 2.26-.56 2.96-1.42z" />
        </svg>
        <div className="text-left">
          <span className="block text-[8px] uppercase tracking-wider font-mono text-slate-500 leading-none">{mt("downloadOn")}</span>
          <span className="font-bold text-sm text-white group-hover:text-brand-amber transition-colors">{mt("appleStore")}</span>
        </div>
      </a>
      <a
        href={ANDROID_APP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-center gap-3 px-4 py-2.5 bg-slate-900 hover:bg-slate-850 border border-slate-800 hover:border-brand-amber/30 rounded-xl transition-all hover:-translate-y-0.5 group shadow-sm ${stack ? "w-full justify-center sm:justify-start" : ""}`}
      >
        <svg className="w-6 h-6 text-white fill-current shrink-0" viewBox="0 0 24 24" aria-hidden>
          <path d="M3 5.27v13.46c0 .87.8 1.43 1.57 1.05l14.22-7.06c.64-.32.64-1.24 0-1.55L4.57 4.22C3.8 3.84 3 4.4 3 5.27zm1.5 2l11.11 4.73-11.11 4.73V7.27z" />
        </svg>
        <div className="text-left">
          <span className="block text-[8px] uppercase tracking-wider font-mono text-slate-500 leading-none">{mt("getItOn")}</span>
          <span className="font-bold text-sm text-white group-hover:text-brand-amber transition-colors">{mt("playStore")}</span>
        </div>
      </a>
      <p className={`text-[10px] text-slate-500 font-mono ${stack ? "text-center sm:text-left" : "w-full basis-full pt-1"}`}>
        {mt("downloadHeroNote")}
      </p>
    </div>
  );
}

// ==========================================
// HIGH-FIDELITY SIMULATORS (AUTO-SCROLLING & CLICKING)
// ==========================================

function LocalReviewBadges() {
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-4 items-center">
        {/* Rating platform 1 */}
        <div className="flex items-center gap-2.5 bg-slate-900/30 border border-slate-900 px-4 py-2 rounded-xl backdrop-blur-sm shadow-sm">
          <div className="flex text-brand-amber gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={11} fill="currentColor" className="stroke-none" />
            ))}
          </div>
          <div className="text-[10px] text-slate-400 font-medium">
            <span className="text-white font-bold">4.8 / 5</span> on Capterra
          </div>
        </div>

        {/* Rating platform 2 */}
        <div className="flex items-center gap-2.5 bg-slate-900/30 border border-slate-900 px-4 py-2 rounded-xl backdrop-blur-sm shadow-sm">
          <div className="flex text-brand-amber gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={11} fill="currentColor" className="stroke-none" />
            ))}
          </div>
          <div className="text-[10px] text-slate-400 font-medium">
            <span className="text-white font-bold">4.9 / 5</span> on G2 Crowd
          </div>
        </div>
      </div>

      {/* Mini Customer Testimonial Row */}
      <div className="flex items-center gap-3 bg-slate-900/20 p-2 rounded-xl border border-slate-900/80 max-w-sm">
        <div className="flex -space-x-1.5">
          <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&h=64&q=80" alt="User" className="w-6 h-6 rounded-full border border-slate-950 object-cover" />
          <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=64&h=64&q=80" alt="User" className="w-6 h-6 rounded-full border border-slate-950 object-cover" />
          <img src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=64&h=64&q=80" alt="User" className="w-6 h-6 rounded-full border border-slate-950 object-cover" />
        </div>
        <div className="text-[10px] text-slate-400 leading-tight">
          Trusted by <span className="text-white font-semibold">1,200+ field operators</span> and coordinators.
        </div>
      </div>
    </div>
  );
}

function LocalTrustedByStrip() {
  const companies = [
    { name: "CBRE Facilities", industry: "Commercial Portfolio", initials: "CB" },
    { name: "JLL Vanguard", industry: "Asset Management", initials: "JL" },
    { name: "Mitie Care", industry: "Facilities Group", initials: "MT" },
    { name: "Compass Group", industry: "Corporate Support", initials: "CP" },
    { name: "Aramark Logistics", industry: "Property Services", initials: "AR" }
  ];

  return (
    <section className="border-y border-slate-900/80 bg-slate-950/60 py-12 relative backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-[10px] font-mono tracking-widest text-slate-550 uppercase font-semibold mb-10">
          trusted by operators in leading facilities enterprises
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-center">
          {companies.map((co, idx) => (
            <div 
              key={idx} 
              className="flex items-center gap-3 justify-center group opacity-60 hover:opacity-100 transition-all duration-300"
            >
              {/* Virtual Corporate Logo */}
              <div className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-[12px] font-mono font-extrabold text-brand-amber group-hover:border-brand-amber/30 transition-colors">
                {co.initials}
              </div>
              <div className="text-left">
                <span className="block font-display font-bold text-xs text-white tracking-wide">{co.name}</span>
                <span className="text-[9px] text-slate-500 block leading-none font-mono mt-1">{co.industry}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


// Simulator 1: Live Field Timer & Geofenced Checklist
function LiveTimerSimulator() {
  const [seconds, setSeconds] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const steps = [
    { id: 1, text: "Sanitize lobby main entry handles", done: true },
    { id: 2, text: "Dust partition glass shelves", done: true },
    { id: 3, text: "Vacuum primary walkway carpets", done: false },
    { id: 4, text: "Sanitize workspace tabletop setups", done: false },
    { id: 5, text: "Refill washroom paper towels", done: false },
    { id: 6, text: "Empty central waste receptacles", done: false },
  ];

  // Simulated Timer Clock
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => (prev + 1) % 3600);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Simulated Auto-Click & Auto-Scroll checklist actions
  useEffect(() => {
    const stepInterval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % (steps.length + 1));
    }, 3500);
    return () => clearInterval(stepInterval);
  }, [steps.length]);

  useEffect(() => {
    if (scrollContainerRef.current) {
      const activeElement = scrollContainerRef.current.children[Math.min(activeStep, steps.length - 1)] as HTMLElement;
      if (activeElement) {
        scrollContainerRef.current.scrollTo({
          top: activeElement.offsetTop - 80,
          behavior: "smooth",
        });
      }
    }
  }, [activeStep, steps.length]);

  const formatClock = (sec: number) => {
    const m = Math.floor(sec / 60).toString().padStart(2, "0");
    const s = (sec % 60).toString().padStart(2, "0");
    return `02:14:${m}:${s}`;
  };

  return (
    <div className="flex flex-col h-full text-left p-4 justify-between bg-slate-950">
      {/* Top Header Card */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 space-y-3 shadow-md">
        <div className="flex justify-between items-center">
          <div>
            <span className="text-[10px] font-mono text-brand-amber font-bold uppercase tracking-wider block">Currently Cleaning</span>
            <h4 className="text-sm font-bold text-white mt-0.5">Vanguard Corporate Hub</h4>
          </div>
          <span className="px-2.5 py-1 bg-emerald-500/10 text-emerald-400 font-mono text-[9px] font-bold rounded-lg border border-emerald-500/20">
            Geofenced
          </span>
        </div>

        {/* Counter Widget */}
        <div className="flex items-center gap-3 bg-slate-950 p-2.5 rounded-xl border border-slate-800">
          <Clock size={16} className="text-brand-amber animate-pulse" />
          <span className="text-base font-mono font-bold text-white tracking-widest">
            {formatClock(seconds)}
          </span>
          <span className="text-[9px] font-mono text-slate-550 ml-auto">EST. 03:00h</span>
        </div>
      </div>

      {/* Auto Scrolling Checklist Stream */}
      <div className="flex-1 my-4 space-y-2 overflow-y-auto pr-1 scrollbar-none" ref={scrollContainerRef}>
        {steps.map((step, idx) => {
          const isItemDone = idx < activeStep;
          const isCurrent = idx === activeStep;

          return (
            <div
              key={step.id}
              className={`p-3.5 rounded-xl border transition-all duration-300 flex items-start gap-3 ${
                isCurrent
                  ? "bg-brand-amber/10 border-brand-amber/30 shadow-inner scale-[1.01]"
                  : isItemDone
                    ? "bg-slate-900/40 border-slate-900 opacity-60"
                    : "bg-slate-900/20 border-slate-900/60"
              }`}
            >
              <div
                className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 border transition-all duration-300 ${
                  isItemDone
                    ? "bg-brand-amber border-brand-amber text-slate-950"
                    : isCurrent
                      ? "border-brand-amber bg-brand-amber/5 animate-pulse"
                      : "border-slate-800"
                }`}
              >
                {isItemDone && <Check size={12} strokeWidth={3} />}
              </div>
              <span className={`text-xs leading-normal transition-colors ${
                isCurrent ? "text-white font-semibold" : isItemDone ? "text-slate-500 line-through" : "text-slate-400"
              }`}>
                {step.text}
              </span>
            </div>
          );
        })}
      </div>

      {/* Floating GPS Sync Indicator */}
      <div className="bg-slate-900/60 border border-slate-800 p-3 rounded-xl flex items-center gap-2.5 text-[10px] text-slate-400 font-mono">
        <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-ping shrink-0" />
        <span>Location tracking verified coordinates</span>
      </div>
    </div>
  );
}

// Simulator 2: AI Dispatch & Optimizer
function AiDispatchSimulator() {
  const [dispatchStage, setDispatchStage] = useState(0);

  useEffect(() => {
    const cycle = setInterval(() => {
      setDispatchStage((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(cycle);
  }, []);

  return (
    <div className="flex flex-col h-full p-4 justify-between bg-slate-950 text-left">
      <div className="space-y-1">
        <div className="flex items-center gap-1.5">
          <Sparkles size={14} className="text-brand-amber animate-pulse" />
          <span className="text-[10px] font-mono text-brand-amber font-bold uppercase tracking-wider">TidyFlow Optimizer AI</span>
        </div>
        <h4 className="text-sm font-bold text-white">Smart dispatch recommender</h4>
      </div>

      {/* Live Matching Visual Core */}
      <div className="flex-1 my-5 bg-slate-900/40 rounded-2xl border border-slate-900 p-4 flex flex-col justify-center relative overflow-hidden backdrop-blur-sm">
        
        {/* Animated Background Scan Wave */}
        {dispatchStage === 0 && (
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-amber/[0.04] to-transparent animate-scan" />
        )}

        <div className="space-y-4 relative z-10">
          {/* Target property card */}
          <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800 flex justify-between items-center">
            <div>
              <span className="text-[9px] font-mono text-slate-550 block">Target Property</span>
              <span className="text-xs font-bold text-white">Central Plaza Penthouse</span>
            </div>
            <span className="text-[9px] font-mono bg-rose-500/10 text-rose-400 px-2 py-0.5 rounded border border-rose-500/20">Unassigned</span>
          </div>

          {/* Match Progression HUD */}
          <div className="space-y-3 py-2">
            <div className="flex justify-between text-[10px] font-mono text-slate-400">
              <span>Roster Engine Search</span>
              <span className="text-brand-amber font-bold">
                {dispatchStage === 0 ? "Analyzing..." : dispatchStage === 1 ? "Mapping Grid..." : "Analysis Done"}
              </span>
            </div>

            {/* Simulated matching log stream */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs">
                <div className={`w-1.5 h-1.5 rounded-full transition-colors ${dispatchStage >= 1 ? "bg-emerald-500" : "bg-slate-700 animate-pulse"}`} />
                <span className="text-slate-350 text-[11px]">Validating availability calendars</span>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <div className={`w-1.5 h-1.5 rounded-full transition-colors ${dispatchStage >= 2 ? "bg-emerald-500" : "bg-slate-700 animate-pulse"}`} />
                <span className="text-slate-350 text-[11px]">Computing GPS transport vectors</span>
              </div>
            </div>
          </div>

          {/* Dynamic matching results container */}
          <div className="h-20 flex items-center justify-center relative">
            <AnimatePresence mode="wait">
              {dispatchStage === 0 && (
                <motion.div
                  key="stage-0"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="text-xs text-slate-500 font-mono italic"
                >
                  Calculating proximity matches...
                </motion.div>
              )}

              {dispatchStage === 1 && (
                <motion.div
                  key="stage-1"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  className="w-full text-center space-y-1"
                >
                  <span className="text-[10px] font-mono text-brand-amber animate-pulse inline-block bg-brand-amber/5 px-2 py-0.5 rounded border border-brand-amber/10">Scanning 8 Field Agents</span>
                </motion.div>
              )}

              {dispatchStage >= 2 && (
                <motion.div
                  key="stage-2"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="w-full bg-emerald-500/[0.03] border border-emerald-500/20 rounded-xl p-3 flex items-center gap-3"
                >
                  <div className="w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center font-bold text-xs text-emerald-400">
                    AR
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="block text-xs font-bold text-white truncate">Alex Rodriguez</span>
                    <span className="block text-[9px] font-mono text-emerald-450">0.4 km away · 98% rating fit</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Dispatch Actions Bar */}
      <button className="w-full py-3 bg-brand-amber text-slate-950 font-bold text-xs rounded-xl shadow-md flex items-center justify-center gap-1.5 hover:bg-brand-amber/90 transition-colors">
        <Sparkles size={12} /> Auto-Approve Match
      </button>
    </div>
  );
}

// Simulator: Offline mode — queue & sync animation
function OfflineAppSimulator() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const cycle = setInterval(() => setPhase((p) => (p + 1) % 4), 2800);
    return () => clearInterval(cycle);
  }, []);

  const queueItems = [
    { label: "Timer session · 02:14:08", status: phase >= 2 ? "synced" : "queued" },
    { label: "Checklist · 4/6 tasks", status: phase >= 2 ? "synced" : "queued" },
    { label: "Photo · Kitchen after", status: phase >= 3 ? "synced" : "queued" }
  ];

  return (
    <div className="flex flex-col h-full p-4 justify-between bg-slate-950 text-left">
      <div className="flex justify-between items-start">
        <div>
          <span className="text-[10px] font-mono text-brand-amber font-bold uppercase tracking-wider block">Field Terminal</span>
          <h4 className="text-sm font-bold text-white mt-0.5">Basement Level · B2</h4>
        </div>
        <AnimatePresence mode="wait">
          {phase < 2 ? (
            <motion.span
              key="offline"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-1 px-2 py-1 bg-rose-500/10 text-rose-400 text-[9px] font-mono font-bold rounded-lg border border-rose-500/25"
            >
              <WifiOff size={10} /> NO SIGNAL
            </motion.span>
          ) : (
            <motion.span
              key="online"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center gap-1 px-2 py-1 bg-emerald-500/10 text-emerald-400 text-[9px] font-mono font-bold rounded-lg border border-emerald-500/25"
            >
              <Zap size={10} /> SYNCING
            </motion.span>
          )}
        </AnimatePresence>
      </div>

      <div className="flex-1 my-4 space-y-3">
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 space-y-2">
          <div className="flex items-center gap-2 text-[10px] font-mono text-slate-400">
            <Clock size={12} className="text-brand-amber animate-pulse" />
            <span>Work timer running locally</span>
          </div>
          <span className="text-2xl font-mono font-bold text-white tracking-widest block">02:14:08</span>
          <span className="text-[9px] text-slate-500 font-mono">Saved to device · cloud pending</span>
        </div>

        <div className="space-y-2">
          <span className="text-[9px] font-mono text-slate-500 uppercase tracking-wider">Offline upload queue</span>
          {queueItems.map((item, i) => (
            <motion.div
              key={item.label}
              animate={{ opacity: phase >= 2 && i <= phase - 2 ? 0.5 : 1 }}
              className="flex items-center justify-between p-2.5 bg-slate-900/60 border border-slate-850 rounded-xl text-[10px]"
            >
              <span className="text-slate-300 truncate pr-2">{item.label}</span>
              <span
                className={`shrink-0 font-mono font-bold text-[9px] px-1.5 py-0.5 rounded ${
                  item.status === "synced"
                    ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                    : "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                }`}
              >
                {item.status === "synced" ? "✓ SYNCED" : "⏳ QUEUED"}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="bg-slate-900/60 border border-slate-800 p-3 rounded-xl flex items-center gap-2 text-[10px] text-slate-400 font-mono">
        <CloudOff size={12} className={phase < 2 ? "text-rose-400" : "text-emerald-400"} />
        <span>{phase < 2 ? "Working offline — data safe on device" : "Connection restored · auto-uploading queue…"}</span>
      </div>
    </div>
  );
}

// Simulator: Live GPS tracker with geofence
function GpsTrackerSimulator() {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setTick((t) => t + 1), 2800);
    return () => clearInterval(interval);
  }, []);

  // Cycle: on-site (verified) → brief off-site alert → back on-site
  const phase = tick % 5;
  const onSite = phase !== 3;

  return (
    <div className="flex flex-col h-full p-4 justify-between bg-slate-950 text-left">
      <div className="space-y-1">
        <div className="flex items-center gap-1.5">
          <MapPin size={14} className={onSite ? "text-emerald-400 animate-pulse" : "text-amber-400 animate-pulse"} />
          <span className={`text-[10px] font-mono font-bold uppercase tracking-wider ${onSite ? "text-emerald-400" : "text-amber-400"}`}>
            On-site Geofence
          </span>
        </div>
        <h4 className="text-sm font-bold text-white">Vanguard Corporate Hub</h4>
      </div>

      <div className="flex-1 my-4 relative bg-slate-900/50 rounded-2xl border border-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <svg className="w-full h-full" viewBox="0 0 200 200" preserveAspectRatio="none">
            <defs>
              <pattern id="gps-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#334155" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="200" height="200" fill="url(#gps-grid)" />
          </svg>
        </div>

        {/* Property geofence boundary */}
        <motion.div
          className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full border-2 ${
            onSite ? "border-emerald-500/50 bg-emerald-500/10" : "border-amber-500/50 bg-amber-500/10"
          }`}
          animate={{ scale: [1, 1.06, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2.2, repeat: Infinity }}
        />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full border border-dashed border-slate-600/60 pointer-events-none" />

        {/* Cleaner pin — stays on property when on-site, drifts outside when off-site */}
        <motion.div
          className={`absolute w-3.5 h-3.5 rounded-full shadow-lg z-10 ${
            onSite ? "bg-emerald-400 shadow-emerald-400/40" : "bg-amber-400 shadow-amber-400/40"
          }`}
          animate={
            onSite
              ? { left: "48%", top: "47%" }
              : { left: "78%", top: "22%" }
          }
          transition={{ duration: 0.9, ease: "easeInOut" }}
        >
          <span className={`absolute inset-0 rounded-full animate-ping ${onSite ? "bg-emerald-400/40" : "bg-amber-400/40"}`} />
        </motion.div>

        <div className="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-slate-950/80 border border-slate-800 text-[8px] font-mono text-slate-400">
          Property boundary
        </div>

        <div className="absolute bottom-2 left-2 right-2 bg-slate-950/90 border border-slate-800 rounded-lg p-2 text-[9px] font-mono space-y-0.5">
          <div className="flex justify-between text-slate-400">
            <span>Lat 51.5074° N</span>
            <span>Lng 0.1278° W</span>
          </div>
          <div className={`font-bold ${onSite ? "text-emerald-400" : "text-amber-400"}`}>
            {onSite
              ? "✓ Inside geofence · on-site verified"
              : "⚠ Outside geofence · manager alerted"}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 text-center">
        {[
          { label: "Status", val: onSite ? "On-site" : "Off-site" },
          { label: "Geofence", val: "Active" },
          { label: "Clock-in", val: onSite ? "Verified" : "Flagged" }
        ].map((stat) => (
          <div key={stat.label} className="bg-slate-900 border border-slate-850 rounded-lg py-2 px-1">
            <span className="block text-[8px] font-mono text-slate-500 uppercase">{stat.label}</span>
            <span className={`block text-xs font-bold font-mono ${
              stat.label === "Status" || stat.label === "Clock-in"
                ? onSite ? "text-emerald-400" : "text-amber-400"
                : "text-white"
            }`}>{stat.val}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// Simulator 3: Photo Proof-of-Work Review Feed
function PhotoProofSimulator() {
  const [photoStep, setPhotoStep] = useState(0);

  useEffect(() => {
    const cycle = setInterval(() => {
      setPhotoStep((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(cycle);
  }, []);

  return (
    <div className="flex flex-col h-full p-4 justify-between bg-slate-950 text-left">
      <div className="space-y-1">
        <span className="text-[10px] font-mono text-brand-amber font-bold uppercase tracking-wider block">Verifiable Quality portal</span>
        <h4 className="text-sm font-bold text-white">Real-Time Client Reports</h4>
      </div>

      {/* Simulator Viewer Frame */}
      <div className="flex-1 my-5 bg-slate-900/30 rounded-2xl border border-slate-900 overflow-hidden flex flex-col justify-between shadow-lg relative">
        
        {/* Main Photo Swap Section */}
        <div className="flex-1 relative overflow-hidden bg-slate-950">
          <AnimatePresence mode="wait">
            {photoStep === 0 && (
              <motion.div
                key="p-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 flex flex-col"
              >
                <img
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=400&q=80"
                  alt="Before clean"
                  className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute top-3 left-3 bg-slate-950/80 px-2 py-0.5 rounded text-[9px] font-mono font-bold text-brand-amber border border-brand-amber/20">
                  BEFORE CLEAN
                </div>
              </motion.div>
            )}

            {photoStep >= 1 && (
              <motion.div
                key="p-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 flex flex-col"
              >
                <img
                  src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=400&q=80"
                  alt="After clean"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 bg-slate-950/80 px-2 py-0.5 rounded text-[9px] font-mono font-bold text-emerald-450 border border-emerald-500/20">
                  AFTER CLEAN
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Floating watermarked timestamp HUD */}
          <div className="absolute bottom-3 left-3 right-3 bg-slate-950/80 backdrop-blur-sm p-2 rounded-xl border border-slate-800/80 text-[8px] font-mono text-slate-400 space-y-0.5">
            <div className="flex justify-between text-white font-semibold text-[9px]">
              <span>GPS Watermarked</span>
              <span className="text-emerald-400">Validated✓</span>
            </div>
            <div>Time: Jul 03, 2026 - 11:06 PM</div>
            <div>Coords: 51.5074° N, 0.1278° W</div>
          </div>
        </div>

        {/* Verification Status Banner */}
        <div className="p-3.5 bg-slate-900 border-t border-slate-850 flex items-center justify-between">
          <div>
            <span className="text-[10px] font-mono text-slate-500 block leading-none">Task Verified</span>
            <span className="text-xs font-bold text-white mt-1 block">Sanitize main workstation rows</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-colors ${
              photoStep >= 2 ? "bg-emerald-500 text-slate-950" : "bg-slate-850 text-slate-500 animate-pulse"
            }`}>
              <CheckSquare size={13} strokeWidth={2.5} />
            </div>
            <span className="text-[10px] font-mono text-slate-350">
              {photoStep >= 2 ? "Approved" : "Pending Approval"}
            </span>
          </div>
        </div>
      </div>

      {/* Share / Verification log feedback */}
      <div className="bg-slate-900/30 border border-slate-900 p-3 rounded-xl flex justify-between items-center text-[10px] text-slate-400">
        <span>Branded client portal URL active</span>
        <span className="text-brand-amber font-mono font-bold hover:underline cursor-pointer">Copy Link</span>
      </div>
    </div>
  );
}

// Simulator 4: Live Sheet Integration Sync Grid
function SheetIntegrationSimulator() {
  const [syncCount, setSyncCount] = useState(0);
  const [syncStatus, setSyncStatus] = useState("synced");

  const rows = [
    { cell1: "Central Plaza Hub", cell2: "Alex R.", cell3: "$140.00", status: "Completed", isNew: false },
    { cell1: "Vanguard HQ Office", cell2: "Jane D.", cell3: "$95.00", status: "Active", isNew: false },
    { cell1: "Crest Towers", cell2: "Bob S.", cell3: "$220.00", status: "Pending", isNew: true },
  ];

  useEffect(() => {
    const cycle = setInterval(() => {
      setSyncStatus("syncing");
      setTimeout(() => {
        setSyncStatus("synced");
        setSyncCount((prev) => prev + 1);
      }, 1200);
    }, 5000);
    return () => clearInterval(cycle);
  }, []);

  return (
    <div className="bg-slate-950 rounded-2xl border border-slate-900/80 p-5 space-y-5 text-left w-full h-full flex flex-col justify-between">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 bg-emerald-600 rounded-lg text-white font-bold flex items-center justify-center text-xs">田</div>
          <div>
            <h4 className="text-sm font-bold text-white">Google Sheet Sync Stream</h4>
            <p className="text-[10px] text-slate-400">Two-way operational spreadsheet pipeline</p>
          </div>
        </div>

        {/* Sync Indicator badge */}
        <div className={`px-2.5 py-1 rounded-full text-[9px] font-mono font-semibold flex items-center gap-1.5 transition-colors border ${
          syncStatus === "syncing"
            ? "bg-brand-amber/10 border-brand-amber/20 text-brand-amber"
            : "bg-emerald-500/10 border-emerald-500/20 text-emerald-400"
        }`}>
          <span className={`w-1.5 h-1.5 rounded-full inline-block ${syncStatus === "syncing" ? "bg-brand-amber animate-spin" : "bg-emerald-500"}`} />
          <span className="uppercase tracking-wider">{syncStatus === "syncing" ? "Writing changes..." : "Google Sync active"}</span>
        </div>
      </div>

      {/* Grid Table Container */}
      <div className="flex-1 overflow-x-auto border border-slate-900 rounded-xl bg-slate-950/60 scrollbar-none my-2">
        <table className="w-full border-collapse text-left text-[11px] font-mono">
          <thead>
            <tr className="bg-slate-900/60 text-slate-450 border-b border-slate-900">
              <th className="p-3 font-semibold uppercase tracking-wider text-[9px]">Property Row</th>
              <th className="p-3 font-semibold uppercase tracking-wider text-[9px]">Operator</th>
              <th className="p-3 font-semibold uppercase tracking-wider text-[9px]">Earnings</th>
              <th className="p-3 font-semibold uppercase tracking-wider text-[9px]">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-900/40">
            {rows.map((row, idx) => (
              <tr key={idx} className="hover:bg-slate-900/20 transition-colors">
                <td className="p-3 font-semibold text-white truncate max-w-[120px]">{row.cell1}</td>
                <td className="p-3 text-slate-350">{row.cell2}</td>
                <td className="p-3 text-slate-350 font-bold">{row.cell3}</td>
                <td className="p-3">
                  <span className={`inline-block px-2 py-0.5 rounded text-[9px] border font-semibold ${
                    row.status === "Completed"
                      ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400"
                      : row.status === "Active"
                        ? "bg-blue-500/10 border-blue-500/20 text-blue-400"
                        : "bg-brand-amber/10 border-brand-amber/20 text-brand-amber"
                  }`}>
                    {row.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Live sync update stats block */}
      <div className="bg-slate-900/40 p-3 rounded-xl border border-slate-900 flex justify-between items-center text-[10px] text-slate-550 font-mono">
        <span>Updates written this hour:</span>
        <span className="text-white font-bold">{syncCount} write events</span>
      </div>
    </div>
  );
}

// FAQ Accordion Helper Component
function FaqAccordion({ language }: { language: string }) {
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
            className="bg-slate-900/20 backdrop-blur-sm rounded-2xl border border-slate-900 overflow-hidden transition-all duration-200"
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full p-5 sm:p-6 text-left font-display font-semibold text-sm sm:text-base text-white flex justify-between items-center hover:bg-slate-900/40 cursor-pointer transition-colors focus:outline-none"
            >
              <span className="pr-4">{faq.q}</span>
              <ChevronDown
                size={18}
                className={`text-brand-amber shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
              />
            </button>

            {isOpen && (
              <div className="px-6 pb-6 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-900/60 pt-4 animate-fadeIn">
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
// 1. HOME PAGE VIEW (LONG-FORM LANDING)
// ==========================================
function HomePage({
  language
}: {
  language: string;
}) {
  const router = useRouter();
  const mt = (key: string) => getMarketingTranslation(key, language);

  return (
    <div className="space-y-40 pb-32 relative">
      
      {/* SECTION 1: HERO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 lg:pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          <div className="lg:col-span-6 space-y-8 text-left relative z-10">
            <div className="flex flex-col gap-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-brand-amber/10 text-brand-amber text-xs font-semibold rounded-full border border-brand-amber/20 self-start backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-amber inline-block animate-pulse"></span>
                {getTranslation("heroBadge", language)}
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-500/10 text-blue-400 text-[10px] font-mono font-bold rounded-lg border border-blue-500/20 self-start">
                ✨ {getTranslation("langSupported", language)}
              </div>
            </div>

            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6.5xl leading-[1.1] text-white tracking-tight">
              {getTranslation("heroTitle", language)}
            </h1>

            <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl">
              {getTranslation("heroSub", language)}
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={() => router.push("/contact")}
                className="px-8 py-4.5 bg-brand-amber hover:bg-brand-amber/90 active:scale-[0.98] text-slate-950 font-bold rounded-xl text-sm transition-all shadow-lg shadow-brand-amber/15 hover:shadow-brand-amber/25 cursor-pointer flex items-center gap-2 group"
              >
                {getTranslation("startTrial", language)} 
                <ArrowRight size={16} className="transform group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                onClick={() => router.push("/documentation")}
                className="px-8 py-4.5 bg-slate-900 border border-slate-800 hover:border-slate-700 hover:bg-slate-850 active:scale-[0.98] text-slate-200 font-semibold rounded-xl text-sm transition-all cursor-pointer flex items-center gap-2"
              >
                {getTranslation("userDocs", language)}
              </button>
            </div>

            <p className="text-xs text-slate-500 font-medium">
              {getTranslation("heroTrialNote", language)}
            </p>

            <AppDownloadButtons language={language} />

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

            <div className="pt-3 border-t border-slate-900">
              <LocalReviewBadges />
            </div>
          </div>

          {/* Hero Smartphone Visualization with Live Timer Simulation */}
          <div className="lg:col-span-6 flex justify-center items-center relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-amber/10 via-transparent to-transparent opacity-60 blur-3xl pointer-events-none" />
            <PhoneFrame>
              <LiveTimerSimulator />
            </PhoneFrame>
          </div>
        </div>
      </section>

      <LocalTrustedByStrip />

      {/* SECTION 2: LANDING SHOWCASE - FEATURE STEPS */}
      <section className="space-y-48">

        {/* Module 0: Offline-first field app */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-6 flex justify-center relative order-last lg:order-first">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-violet-500/5 via-transparent to-transparent opacity-50 blur-2xl pointer-events-none" />
              <PhoneFrame>
                <OfflineAppSimulator />
              </PhoneFrame>
            </div>
            <div className="lg:col-span-6 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-violet-500/10 text-violet-300 text-xs font-semibold rounded-full border border-violet-500/20">
                <WifiOff size={13} />
                <span>{mt("offlineBadge")}</span>
              </div>
              <h3 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight leading-[1.15]">
                {mt("offlineTitle")}
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">{mt("offlineDesc")}</p>
              <ul className="space-y-4 text-xs sm:text-sm text-slate-400 pt-2">
                {[mt("offlineCheck1"), mt("offlineCheck2"), mt("offlineCheck3")].map((text) => (
                  <li key={text} className="flex gap-3 items-start">
                    <span className="w-5.5 h-5.5 rounded-lg bg-violet-500/10 border border-violet-500/20 text-violet-300 flex items-center justify-center font-mono font-bold shrink-0 mt-0.5">✓</span>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Module 0b: GPS live tracker */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-6 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-emerald-500/10 text-emerald-400 text-xs font-semibold rounded-full border border-emerald-500/20">
                <MapPin size={13} />
                <span>{mt("gpsBadge")}</span>
              </div>
              <h3 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight leading-[1.15]">
                {mt("gpsTitle")}
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">{mt("gpsDesc")}</p>
              <ul className="space-y-4 text-xs sm:text-sm text-slate-400 pt-2">
                {[mt("gpsCheck1"), mt("gpsCheck2"), mt("gpsCheck3")].map((text) => (
                  <li key={text} className="flex gap-3 items-start">
                    <span className="w-5.5 h-5.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center font-mono font-bold shrink-0 mt-0.5">✓</span>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-6 flex justify-center relative">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-500/5 via-transparent to-transparent opacity-40 blur-2xl pointer-events-none" />
              <PhoneFrame>
                <GpsTrackerSimulator />
              </PhoneFrame>
            </div>
          </div>
        </div>
        
        {/* Module 1: Two-Way Google Sheets Sync */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            <div className="lg:col-span-5 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-emerald-500/10 text-emerald-400 text-xs font-semibold rounded-full border border-emerald-500/20">
                <Database size={13} />
                <span>{mt("homeSheetsBadge")}</span>
              </div>
              <h3 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight leading-[1.15]">
                {mt("homeSheetsTitle")}
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {mt("homeSheetsDesc")}
              </p>
              <ul className="space-y-4 text-xs sm:text-sm text-slate-400 pt-2">
                <li className="flex gap-3 items-start">
                  <span className="w-5.5 h-5.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center font-mono font-bold shrink-0 mt-0.5">✓</span>
                  <span>{mt("homeSheetsCheck1")}</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="w-5.5 h-5.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center font-mono font-bold shrink-0 mt-0.5">✓</span>
                  <span>{mt("homeSheetsCheck2")}</span>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-7 bg-slate-900/30 p-4 rounded-2xl border border-slate-900/80 max-w-full overflow-hidden shadow-2xl relative">
              <div className="absolute inset-0 bg-gradient-to-b from-brand-amber/[0.02] to-transparent pointer-events-none" />
              <div className="h-96 md:h-[450px]">
                <SheetIntegrationSimulator />
              </div>
            </div>

          </div>
        </div>

        {/* Module 2: AI Dispatch & Analysis */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Visual Phone Mockup on Left */}
            <div className="lg:col-span-6 flex justify-center relative order-last lg:order-first">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/5 via-transparent to-transparent opacity-40 blur-2xl pointer-events-none" />
              <PhoneFrame>
                <AiDispatchSimulator />
              </PhoneFrame>
            </div>

            {/* Description Text on Right */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-brand-amber/10 text-brand-amber text-xs font-semibold rounded-full border border-brand-amber/20">
                <Sparkles size={13} />
                <span>{mt("homeAiBadge")}</span>
              </div>
              <h3 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight leading-[1.15]">
                {mt("homeAiTitle")}
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {mt("homeAiDesc")}
              </p>
              <ul className="space-y-4 text-xs sm:text-sm text-slate-400 pt-2">
                <li className="flex gap-3 items-start">
                  <span className="w-5.5 h-5.5 rounded-lg bg-brand-amber/10 border border-brand-amber/20 text-brand-amber flex items-center justify-center font-mono font-bold shrink-0 mt-0.5">✓</span>
                  <span>{mt("homeAiCheck1")}</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="w-5.5 h-5.5 rounded-lg bg-brand-amber/10 border border-brand-amber/20 text-brand-amber flex items-center justify-center font-mono font-bold shrink-0 mt-0.5">✓</span>
                  <span>{mt("homeAiCheck2")}</span>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Module 3: Visual Proof-of-Work Portals */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            <div className="lg:col-span-6 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-emerald-500/10 text-emerald-400 text-xs font-semibold rounded-full border border-emerald-500/20">
                <CameraIcon className="w-3.5 h-3.5" />
                <span>{mt("homePhotoBadge")}</span>
              </div>
              <h3 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight leading-[1.15]">
                {mt("homePhotoTitle")}
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {mt("homePhotoDesc")}
              </p>
              <ul className="space-y-4 text-xs sm:text-sm text-slate-400 pt-2">
                <li className="flex gap-3 items-start">
                  <span className="w-5.5 h-5.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center font-mono font-bold shrink-0 mt-0.5">✓</span>
                  <span>{mt("homePhotoCheck1")}</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="w-5.5 h-5.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center font-mono font-bold shrink-0 mt-0.5">✓</span>
                  <span>{mt("homePhotoCheck2")}</span>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-6 flex justify-center relative">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-500/5 via-transparent to-transparent opacity-40 blur-2xl pointer-events-none" />
              <PhoneFrame>
                <PhotoProofSimulator />
              </PhoneFrame>
            </div>

          </div>
        </div>

        {/* Module 4: Safe Lone-Worker SOS System */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Visual on Left */}
            <div className="lg:col-span-6 flex justify-center relative order-last lg:order-first">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-rose-500/5 via-transparent to-transparent opacity-40 blur-2xl pointer-events-none" />
              <PhoneFrame>
                <div className="p-5 flex flex-col h-full justify-between bg-slate-950 text-left">
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-rose-450 font-bold uppercase tracking-wider block">{mt("homeSosMockBadge")}</span>
                    <h4 className="text-sm font-bold text-white">{mt("homeSosMockTitle")}</h4>
                  </div>

                  <div className="flex-1 my-6 bg-rose-500/[0.02] border border-rose-500/10 rounded-2xl p-5 flex flex-col justify-center items-center text-center space-y-4">
                    <div className="w-20 h-20 rounded-full bg-rose-500/10 border border-rose-500/30 flex items-center justify-center relative animate-pulse">
                      <div className="absolute inset-0 bg-rose-500/20 rounded-full animate-ping scale-110" />
                      <ShieldAlert size={36} className="text-rose-500 relative z-10" />
                    </div>
                    <div className="space-y-1">
                      <span className="text-xs font-bold text-white block">{mt("homeSosMockActive")}</span>
                      <p className="text-[10px] text-slate-450 leading-relaxed max-w-[200px] mx-auto">
                        {mt("homeSosMockDesc")}
                      </p>
                    </div>
                  </div>

                  <div className="bg-slate-900 border border-slate-800 p-3 rounded-xl space-y-1 font-mono text-[9px] text-slate-400">
                    <div className="flex justify-between font-bold text-rose-400">
                      <span>{mt("homeSosMockBroadcast")}</span>
                      <span className="animate-pulse">{mt("homeSosMockActive2")}</span>
                    </div>
                    <div>{mt("homeSosMockQueued")}</div>
                    <div>{mt("homeSosMockTarget")}</div>
                  </div>
                </div>
              </PhoneFrame>
            </div>

            {/* Content on Right */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-rose-500/10 text-rose-400 text-xs font-semibold rounded-full border border-rose-500/20">
                <ShieldAlert size={13} />
                <span>{mt("homeSosBadge")}</span>
              </div>
              <h3 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight leading-[1.15]">
                {mt("homeSosTitle")}
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {mt("homeSosDesc")}
              </p>
              <ul className="space-y-4 text-xs sm:text-sm text-slate-400 pt-2">
                <li className="flex gap-3 items-start">
                  <span className="w-5.5 h-5.5 rounded-lg bg-rose-500/10 border border-rose-500/20 text-rose-400 flex items-center justify-center font-mono font-bold shrink-0 mt-0.5">✓</span>
                  <span>{mt("homeSosCheck1")}</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="w-5.5 h-5.5 rounded-lg bg-rose-500/10 border border-rose-500/20 text-rose-400 flex items-center justify-center font-mono font-bold shrink-0 mt-0.5">✓</span>
                  <span>{mt("homeSosCheck2")}</span>
                </li>
              </ul>
            </div>

          </div>
        </div>

      </section>

      {/* SECTION 3: THE CHAOS PROBLEM OVERVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-24">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">{mt("chaosTitle")}</h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">{mt("chaosDesc")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-slate-900/10 backdrop-blur-sm border border-slate-900 p-8 rounded-2xl text-left space-y-4 hover:border-slate-800 hover:-translate-y-1 transition-all duration-300 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-rose-500/10 flex items-center justify-center text-rose-400 border border-rose-500/20 font-bold">
              <X size={18} />
            </div>
            <h4 className="font-display font-bold text-white text-lg">{mt("whatsappTitle")}</h4>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{mt("whatsappDesc")}</p>
          </div>
          <div className="bg-slate-900/10 backdrop-blur-sm border border-slate-900 p-8 rounded-2xl text-left space-y-4 hover:border-slate-800 hover:-translate-y-1 transition-all duration-300 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-rose-500/10 flex items-center justify-center text-rose-400 border border-rose-500/20 font-bold">
              <X size={18} />
            </div>
            <h4 className="font-display font-bold text-white text-lg">{mt("spreadsheetTitle")}</h4>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{mt("spreadsheetDesc")}</p>
          </div>
          <div className="bg-slate-900/10 backdrop-blur-sm border border-slate-900 p-8 rounded-2xl text-left space-y-4 hover:border-slate-800 hover:-translate-y-1 transition-all duration-300 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-rose-500/10 flex items-center justify-center text-rose-400 border border-rose-500/20 font-bold">
              <X size={18} />
            </div>
            <h4 className="font-display font-bold text-white text-lg">{mt("payrollTitle")}</h4>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{mt("payrollDesc")}</p>
          </div>
        </div>
      </section>

      {/* SECTION 4: DIAGRAM OVERVIEW */}
      <section className="bg-slate-950/40 border-y border-slate-900/80 py-28 text-left relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-brand-amber/5 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 space-y-6">
              <h3 className="font-display font-bold text-3xl text-white tracking-tight">{mt("pipelineTitle")}</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{mt("pipelineDesc")}</p>

              <div className="space-y-6 pt-6 border-t border-slate-900">
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

            <div className="lg:col-span-7 bg-slate-950/60 p-8 sm:p-10 rounded-3xl border border-slate-900 shadow-xl relative backdrop-blur-sm">
              <h4 className="font-display font-bold text-[10px] text-slate-500 mb-8 uppercase tracking-widest">{mt("diagramTitle")}</h4>
              <div className="space-y-4">
                {[
                  { role: mt("diagramRole1"), sub: mt("diagramRole1Sub"), meta: mt("diagramRole1Meta"), accent: "text-brand-amber bg-brand-amber/5 border-brand-amber/20" },
                  { role: mt("diagramRole2"), sub: mt("diagramRole2Sub"), meta: mt("diagramRole2Meta"), accent: "text-brand-amber bg-brand-amber/5 border-brand-amber/20" },
                  { role: mt("diagramRole3"), sub: mt("diagramRole3Sub"), meta: mt("diagramRole3Meta"), accent: "text-brand-amber bg-brand-amber/5 border-brand-amber/20" },
                  { role: mt("diagramRole4"), sub: mt("diagramRole4Sub"), meta: mt("diagramRole4Meta"), accent: "text-emerald-400 bg-emerald-400/5 border-emerald-400/20" },
                ].map((item, i) => (
                  <React.Fragment key={i}>
                    <div className="flex justify-between items-center bg-slate-900/40 p-4 rounded-xl border border-slate-850 backdrop-blur-sm">
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

      {/* SECTION 5: PILLARS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-24">
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
              <div key={i} className="bg-slate-900/10 backdrop-blur-sm p-8 rounded-2xl border border-slate-900 hover:border-brand-amber/20 transition-all duration-300 group space-y-4 shadow-sm hover:shadow-md hover:shadow-brand-amber/[0.02]">
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
      <section className="bg-slate-950/40 border-y border-slate-900/80 py-28 text-left relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-amber/5 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-24">
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

      {/* SECTION 7: BILLING PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <div className="bg-gradient-to-br from-slate-900 to-slate-950 p-8 md:p-16 rounded-3xl border border-slate-850 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-brand-amber/[0.03] via-transparent to-transparent pointer-events-none" />
          <div className="lg:col-span-6 space-y-6 relative z-10">
            <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 text-[10px] font-mono font-bold rounded-lg border border-emerald-500/20">{mt("billingBadge")}</span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight leading-none">{mt("billingTitle")}</h2>
            <p className="text-xs sm:text-sm text-slate-305 leading-relaxed">
              {mt("billingDesc")}
            </p>
            <ul className="space-y-4 text-xs sm:text-sm text-slate-400 pt-2">
              <li className="flex gap-3 items-center"><span className="text-brand-amber text-lg">✓</span><span>{mt("billingCheck1")}</span></li>
              <li className="flex gap-3 items-center"><span className="text-brand-amber text-lg">✓</span><span>{mt("billingCheck2")}</span></li>
            </ul>
          </div>

          <div className="lg:col-span-6 relative z-10 flex justify-center">
            <InteractiveMockup type="pdf" language={language} />
          </div>
        </div>
      </section>

      {/* SECTION 8: FAQ */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <h3 className="font-display font-bold text-3xl text-white text-center mb-12 tracking-tight">{mt("faqTitle")}</h3>
        <FaqAccordion language={language} />
      </section>

      {/* SECTION 9: CALL TO ACTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-brand-amber to-amber-600 rounded-3xl p-10 md:p-20 text-center space-y-6 shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent pointer-events-none" />
          
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-slate-950 tracking-tight">{mt("ctaTitle")}</h2>
          <p className="text-slate-900 font-medium text-xs sm:text-base max-w-xl mx-auto leading-relaxed">{mt("ctaSub")}</p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-6">
            <button
              onClick={() => router.push("/contact")}
              className="w-full sm:w-auto px-8 py-4.5 bg-slate-950 text-brand-amber hover:text-white hover:bg-slate-900 text-sm font-bold rounded-xl transition-all shadow-lg active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2"
            >
              {mt("ctaTrialBtn")}
            </button>
            <button
              onClick={() => router.push("/documentation")}
              className="w-full sm:w-auto px-8 py-4.5 bg-transparent border border-slate-950 text-slate-950 hover:bg-slate-950 hover:text-white text-sm font-bold rounded-xl transition-all active:scale-[0.98] cursor-pointer"
            >
              {mt("ctaGuideBtn")}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

// ==========================================
// 2. FEATURES PAGE VIEW
// ==========================================
function FeaturesPage({ language }: { language: string }) {
  const [activeTab, setActiveTab] = useState<"scheduling" | "field" | "quality" | "payroll" | "finance" | "ai" | "integrations">("scheduling");
  const st = (key: Parameters<typeof getSheetTranslation>[0]) => getSheetTranslation(key, language);
  const mt = (key: string) => getMarketingTranslation(key, language);

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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16 text-left relative">
      
      {/* Page corner indicator decoration */}
      <div className="absolute top-10 right-10 w-24 h-24 text-brand-amber/[0.02] pointer-events-none hidden md:block">
        <svg viewBox="0 0 100 100" fill="currentColor">
          <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="2" fill="none" strokeDasharray="6 6" />
        </svg>
      </div>

      <div className="space-y-4 max-w-3xl">
        <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
          {getTranslation("featuresHeading", language)}
        </h1>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          {getTranslation("featuresSubtitle", language)}
        </p>
      </div>

      {/* Feature Navigation Tabs - Unified Pill Control */}
      <div className="bg-slate-900/40 p-2.5 rounded-2xl border border-slate-900 flex flex-wrap gap-2.5">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveTab(cat.id as any)}
            className={`px-4.5 py-3 text-[10px] sm:text-xs font-semibold rounded-xl border transition-all cursor-pointer focus:outline-none ${
              activeTab === cat.id
                ? "bg-brand-amber border-brand-amber/30 text-slate-950 font-bold shadow-md"
                : "bg-transparent border-transparent text-slate-400 hover:text-slate-200"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Render selected feature specs with active simulations */}
      <div className="bg-slate-950 p-6 md:p-12 rounded-3xl border border-slate-900 shadow-xl">
        {activeTab === "scheduling" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-6">
              <h3 className="font-display font-bold text-2xl text-white">{mt("featuresSchedTitle")}</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                {mt("featuresSchedDesc")}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-slate-900/40 rounded-xl border border-slate-850">
                  <h5 className="font-bold text-xs text-brand-amber">{mt("featuresSchedCard1Title")}</h5>
                  <p className="text-[10px] text-slate-400 mt-1 leading-relaxed">{mt("featuresSchedCard1Desc")}</p>
                </div>
                <div className="p-4 bg-slate-900/40 rounded-xl border border-slate-850">
                  <h5 className="font-bold text-xs text-brand-amber">{mt("featuresSchedCard2Title")}</h5>
                  <p className="text-[10px] text-slate-400 mt-1 leading-relaxed">{mt("featuresSchedCard2Desc")}</p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7 max-w-full overflow-hidden">
              <SheetIntegrationSimulator />
            </div>
          </div>
        )}

        {activeTab === "field" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <h3 className="font-display font-bold text-2xl text-white">{mt("featuresFieldTitle")}</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                {mt("featuresFieldDesc")}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-slate-900/40 rounded-xl border border-slate-850">
                  <h5 className="font-bold text-xs text-brand-amber">{mt("featuresFieldCard1Title")}</h5>
                  <p className="text-[10px] text-slate-400 mt-1 leading-relaxed">{mt("featuresFieldCard1Desc")}</p>
                </div>
                <div className="p-4 bg-slate-900/40 rounded-xl border border-slate-850">
                  <h5 className="font-bold text-xs text-brand-amber">{mt("featuresFieldCard2Title")}</h5>
                  <p className="text-[10px] text-slate-400 mt-1 leading-relaxed">{mt("featuresFieldCard2Desc")}</p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-6 flex justify-center">
              <PhoneFrame>
                <LiveTimerSimulator />
              </PhoneFrame>
            </div>
          </div>
        )}

        {activeTab === "quality" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <h3 className="font-display font-bold text-2xl text-white">{mt("featuresQualityTitle")}</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                {mt("featuresQualityDesc")}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-slate-900/40 rounded-xl border border-slate-850">
                  <h5 className="font-bold text-xs text-brand-amber">{mt("featuresQualityCard1Title")}</h5>
                  <p className="text-[10px] text-slate-400 mt-1 leading-relaxed">{mt("featuresQualityCard1Desc")}</p>
                </div>
                <div className="p-4 bg-slate-900/40 rounded-xl border border-slate-850">
                  <h5 className="font-bold text-xs text-brand-amber">{mt("featuresQualityCard2Title")}</h5>
                  <p className="text-[10px] text-slate-400 mt-1 leading-relaxed">{mt("featuresQualityCard2Desc")}</p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-6 flex justify-center">
              <PhoneFrame>
                <PhotoProofSimulator />
              </PhoneFrame>
            </div>
          </div>
        )}

        {activeTab === "payroll" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <h3 className="font-display font-bold text-2xl text-white">{mt("featuresPayrollTitle")}</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                {mt("featuresPayrollDesc")}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-slate-900/40 rounded-xl border border-slate-850">
                  <h5 className="font-bold text-xs text-brand-amber">{mt("featuresPayrollCard1Title")}</h5>
                  <p className="text-[10px] text-slate-400 mt-1 leading-relaxed">{mt("featuresPayrollCard1Desc")}</p>
                </div>
                <div className="p-4 bg-slate-900/40 rounded-xl border border-slate-850">
                  <h5 className="font-bold text-xs text-brand-amber">{mt("featuresPayrollCard2Title")}</h5>
                  <p className="text-[10px] text-slate-400 mt-1 leading-relaxed">{mt("featuresPayrollCard2Desc")}</p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-6 bg-slate-900/30 p-8 rounded-2xl border border-slate-850 text-xs sm:text-sm text-center text-slate-400 italic backdrop-blur-sm">
              <Users size={32} className="mx-auto text-brand-amber mb-3 animate-pulse" />
              {mt("featuresPayrollPlaceholder")}
            </div>
          </div>
        )}

        {activeTab === "finance" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <h3 className="font-display font-bold text-2xl text-white">{mt("featuresFinanceTitle")}</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                {mt("featuresFinanceDesc")}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-slate-900/40 rounded-xl border border-slate-850">
                  <h5 className="font-bold text-xs text-brand-amber">{mt("featuresFinanceCard1Title")}</h5>
                  <p className="text-[10px] text-slate-400 mt-1 leading-relaxed">{mt("featuresFinanceCard1Desc")}</p>
                </div>
                <div className="p-4 bg-slate-900/40 rounded-xl border border-slate-850">
                  <h5 className="font-bold text-xs text-brand-amber">{mt("featuresFinanceCard2Title")}</h5>
                  <p className="text-[10px] text-slate-400 mt-1 leading-relaxed">{mt("featuresFinanceCard2Desc")}</p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-6 flex justify-center">
              <InteractiveMockup type="pdf" language={language} />
            </div>
          </div>
        )}

        {activeTab === "ai" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <h3 className="font-display font-bold text-2xl text-white">{mt("featuresAiTitle")}</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                {mt("featuresAiDesc")}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-slate-900/40 rounded-xl border border-slate-850">
                  <h5 className="font-bold text-xs text-brand-amber">{mt("featuresAiCard1Title")}</h5>
                  <p className="text-[10px] text-slate-400 mt-1 leading-relaxed">{mt("featuresAiCard1Desc")}</p>
                </div>
                <div className="p-4 bg-slate-900/40 rounded-xl border border-slate-850">
                  <h5 className="font-bold text-xs text-brand-amber">{mt("featuresAiCard2Title")}</h5>
                  <p className="text-[10px] text-slate-400 mt-1 leading-relaxed">{mt("featuresAiCard2Desc")}</p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-6 flex justify-center">
              <PhoneFrame>
                <AiDispatchSimulator />
              </PhoneFrame>
            </div>
          </div>
        )}

        {activeTab === "integrations" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 space-y-5">
              <h3 className="font-display font-bold text-xl text-white">{st("featuresIntegTitle")}</h3>
              <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed">{st("featuresIntegDesc")}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div className="p-3 bg-slate-900/40 rounded-xl border border-slate-850">
                  <h5 className="font-bold text-[11px] text-brand-amber">{st("featuresIntegMaps")}</h5>
                  <p className="text-[10px] text-slate-400 mt-1 leading-relaxed">{st("featuresIntegMapsDesc")}</p>
                </div>
                <div className="p-3 bg-slate-900/40 rounded-xl border border-slate-850">
                  <h5 className="font-bold text-[11px] text-brand-amber">{st("featuresIntegStripe")}</h5>
                  <p className="text-[10px] text-slate-400 mt-1 leading-relaxed">{st("featuresIntegStripeDesc")}</p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7 max-w-full overflow-hidden">
              <div className="rounded-xl border border-slate-850 bg-slate-900/30 p-2.5 shadow-lg">
                <SheetIntegrationSimulator />
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
  const [plans, setPlans] = useState<NormalizedPlan[]>([]);
  const [plansLoading, setPlansLoading] = useState(true);
  const [plansSource, setPlansSource] = useState<"live" | "fallback">("live");
  const mt = (key: string, vars?: Record<string, string | number>) =>
    formatMarketingTranslation(key, language, vars);

  useEffect(() => {
    let cancelled = false;
    setPlansLoading(true);
    fetchPublicPlans()
      .then(({ plans: loaded, fromApi }) => {
        if (cancelled) return;
        setPlans(loaded);
        setPlansSource(fromApi ? "live" : "fallback");
      })
      .catch(() => {
        if (!cancelled) setPlansSource("fallback");
      })
      .finally(() => {
        if (!cancelled) setPlansLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const recommendedCode: PlanCode =
    plans.length > 0
      ? recommendPlanCode(estimatedProperties, estimatedCleaners, plans)
      : estimatedProperties <= 10 && estimatedCleaners <= 5
        ? "STARTUP"
        : estimatedProperties <= 50 && estimatedCleaners <= 25
          ? "STANDARD"
          : "PREMIUM";

  const formatPrice = (amount: number) =>
    Number.isInteger(amount) ? String(amount) : amount.toFixed(2).replace(/\.00$/, "");

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20 text-left relative">
      
      {/* Decorative vector */}
      <div className="absolute top-4 right-4 w-32 h-32 text-brand-amber/[0.02] pointer-events-none">
        <svg viewBox="0 0 100 100" fill="currentColor">
          <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="1" fill="none" />
        </svg>
      </div>

      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-[10px] font-mono font-bold text-brand-amber uppercase tracking-widest bg-brand-amber/5 px-3 py-1.5 rounded-full border border-brand-amber/15">
          {mt("pricingBadge")}
        </span>
        <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">{getTranslation("pricingHeading", language)}</h1>
        <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
          {getTranslation("pricingSubtitle", language)}
        </p>
        {plansSource === "live" && !plansLoading && (
          <p className="text-[10px] font-mono text-emerald-400/90 pt-1">
            {mt("pricingLiveRates")}
          </p>
        )}

        {/* Annual / Monthly Toggle */}
        <div className="flex items-center justify-center gap-3.5 pt-8">
          <span className={`text-xs sm:text-sm font-semibold transition-colors duration-200 ${!isAnnual ? "text-white" : "text-slate-450"}`}>{mt("pricingBilledMonthly")}</span>
          <button
            onClick={() => setIsAnnual(!isAnnual)}
            className="w-13 h-7.5 bg-slate-900 border border-slate-800 rounded-full relative p-1 transition-colors focus:outline-none cursor-pointer"
          >
            <div
              className={`w-5.5 h-5.5 bg-brand-amber rounded-full shadow-md transform transition-transform duration-250 ${
                isAnnual ? "translate-x-5.5" : "translate-x-0"
              }`}
            />
          </button>
          <span className={`text-xs sm:text-sm font-semibold transition-colors duration-200 ${isAnnual ? "text-brand-amber" : "text-slate-450"} flex items-center gap-1.5`}>
            {mt("pricingBilledAnnually")}
            <span className="px-2 py-0.5 bg-brand-amber/15 text-brand-amber text-[9px] font-mono font-bold rounded-md">
              {mt("pricingSave20")}
            </span>
          </span>
        </div>
      </div>

      {/* Roster Estimator Tool */}
      <div className="bg-slate-950/60 p-6 sm:p-10 rounded-3xl border border-slate-900 max-w-4xl mx-auto space-y-8 relative overflow-hidden shadow-2xl backdrop-blur-sm">
        <div className="absolute top-0 right-0 p-3 bg-brand-amber/10 border-bl border-slate-900 text-brand-amber rounded-bl-xl font-mono text-[9px] font-bold">
          {mt("pricingAdvisorBadge")}
        </div>
        <div className="space-y-2 max-w-xl">
          <h3 className="font-display font-bold text-xs uppercase tracking-wider text-slate-300">{mt("pricingAdvisorTitle")}</h3>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            {mt("pricingAdvisorDesc")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
          {/* Properties Slider */}
          <div className="space-y-4 bg-slate-900/30 p-6 rounded-2xl border border-slate-850">
            <div className="flex justify-between items-center text-xs font-semibold">
              <span className="text-slate-400">{mt("pricingEstProperties")}</span>
              <span className="text-brand-amber font-mono font-bold text-lg">
                {estimatedProperties === 150 ? mt("pricing150PlusProperties") : mt("pricingUnits", { num: estimatedProperties })}
              </span>
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
              <span>{mt("pricing1Property")}</span>
              <span>{mt("pricing75Properties")}</span>
              <span>{mt("pricing150PlusProperties")}</span>
            </div>
          </div>

          {/* Cleaners Slider */}
          <div className="space-y-4 bg-slate-900/30 p-6 rounded-2xl border border-slate-850">
            <div className="flex justify-between items-center text-xs font-semibold">
              <span className="text-slate-400">{mt("pricingEstCleaners")}</span>
              <span className="text-brand-amber font-mono font-bold text-lg">
                {estimatedCleaners === 100 ? mt("pricing100PlusCleaners") : mt("pricingStaff", { num: estimatedCleaners })}
              </span>
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
              <span>{mt("pricing1Cleaner")}</span>
              <span>{mt("pricing50Cleaners")}</span>
              <span>{mt("pricing100PlusCleaners")}</span>
            </div>
          </div>
        </div>

        <div className="bg-slate-900/50 border border-brand-amber/15 p-5 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs sm:text-sm">
          <div className="flex items-center gap-2.5 text-slate-300">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-amber inline-block shrink-0"></span>
            <span>{mt("pricingRecommendText", { properties: estimatedProperties, cleaners: estimatedCleaners })}</span>
          </div>
          <span className="px-5 py-2 bg-brand-amber text-slate-950 font-black rounded-lg uppercase tracking-wider text-[10px] shadow-sm select-none shrink-0">
            {mt("pricingTierLabel", { code: recommendedCode })}
          </span>
        </div>
      </div>

      {plansLoading && (
        <p className="text-center text-xs text-slate-500 font-mono animate-pulse">
          {mt("pricingLoading")}
        </p>
      )}

      {/* Plan Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto pt-6">
        {plans.map((plan) => {
          const isRecommended = plan.code === recommendedCode;
          const price = isAnnual ? plan.annualMonthlyPrice : plan.monthlyPrice;
          const showPopular = plan.isPopular || plan.code === "STANDARD";

          return (
            <div
              key={plan.code}
              className={`bg-slate-950 p-6 sm:p-10 rounded-3xl border flex flex-col justify-between space-y-6 relative transition-all duration-300 ${
                isRecommended
                  ? "border-brand-amber ring-2 ring-brand-amber/25 shadow-2xl shadow-brand-amber/[0.03] scale-[1.02]"
                  : "border-slate-900 text-slate-300 opacity-95 hover:border-slate-800"
              }`}
            >
              {isRecommended && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-brand-amber text-slate-950 text-[10px] font-mono tracking-wider font-extrabold rounded-full shadow-lg uppercase">
                  {mt("pricingRecommendedBadge")}
                </div>
              )}
              {!isRecommended && showPopular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-slate-800 text-brand-amber text-[10px] font-mono tracking-wider font-bold rounded-full border border-slate-700 uppercase">
                  {mt("pricingPopularBadge")}
                </div>
              )}

              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="font-display font-bold text-2xl text-white">{plan.name}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed min-h-[40px]">{plan.description}</p>
                </div>

                <div className="flex items-baseline gap-1.5 pt-2 border-b border-slate-900 pb-5">
                  <span className="text-5xl font-extrabold text-white font-mono">
                    {plan.currency === "USD" ? "$" : `${plan.currency} `}
                    {formatPrice(price)}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">{mt("pricingPerMonth")}</span>
                </div>

                {/* Capacity Limits List */}
                <div className="bg-slate-900/30 rounded-xl p-5 border border-slate-900 text-xs space-y-3.5">
                  <div className="flex justify-between">
                    <span className="text-slate-400">{mt("pricingPropertiesLbl")}</span>
                    <strong className="text-white font-semibold">{formatPlanLimit(plan.maxProperties)}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">{mt("pricingCleanersLbl")}</span>
                    <strong className="text-white font-semibold">{formatPlanLimit(plan.maxCleaners)}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">{mt("pricingManagersLbl")}</span>
                    <strong className="text-white font-semibold">{formatPlanLimit(plan.maxManagers)}</strong>
                  </div>
                  <div className="flex justify-between border-t border-slate-850 pt-3 mt-1.5">
                    <span className="text-slate-400 font-medium">{mt("pricingAiOpsLbl")}</span>
                    <strong className="text-brand-amber font-mono font-bold">{formatAiOps(plan.maxAiOperations)}</strong>
                  </div>
                  {plan.maxInvoicesPerMonth !== null && (
                    <div className="flex justify-between">
                      <span className="text-slate-400">{mt("pricingInvoicesLbl")}</span>
                      <strong className="text-white font-semibold">{formatPlanLimit(plan.maxInvoicesPerMonth)}</strong>
                    </div>
                  )}
                  {plan.maxPhotoVerificationsPerMonth !== null && (
                    <div className="flex justify-between">
                      <span className="text-slate-400">{mt("pricingPhotoVerifLbl")}</span>
                      <strong className="text-white font-semibold">{formatPlanLimit(plan.maxPhotoVerificationsPerMonth)}</strong>
                    </div>
                  )}
                  {plan.maxPdfGenerationsPerMonth !== null && (
                    <div className="flex justify-between">
                      <span className="text-slate-400">{mt("pricingPdfLbl")}</span>
                      <strong className="text-white font-semibold">{formatPlanLimit(plan.maxPdfGenerationsPerMonth)}</strong>
                    </div>
                  )}
                </div>

                {/* Features Checklist */}
                <div className="space-y-3 pt-2">
                  <span className="text-[10px] font-mono tracking-widest text-slate-500 uppercase font-bold block">{mt("pricingIncludedCaps")}</span>
                  <ul className="space-y-3 text-xs text-slate-400">
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
                  className={`w-full py-4 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1.5 active:scale-[0.98] focus:outline-none ${
                    isRecommended
                      ? "bg-brand-amber hover:bg-brand-amber/90 text-slate-950 font-bold shadow-md shadow-brand-amber/10"
                      : "bg-slate-900 hover:bg-slate-850 text-slate-200 border border-slate-800"
                  }`}
                >
                  {mt("pricingStartTrialDays", { days: plan.trialDays })}
                </button>
                <p className="text-[10px] text-slate-500 text-center leading-normal">
                  {mt("pricingNoCard")}
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
function HowItWorksPage({ language }: { language: string }) {
  const mt = (key: string) => getMarketingTranslation(key, language);

  const steps = [
    { step: "1", titleKey: "howPageStep1Title", descKey: "howPageStep1Desc" },
    { step: "2", titleKey: "howPageStep2Title", descKey: "howPageStep2Desc" },
    { step: "3", titleKey: "howPageStep3Title", descKey: "howPageStep3Desc" },
    { step: "4", titleKey: "howPageStep4Title", descKey: "howPageStep4Desc", emerald: true }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16 text-left relative">
      
      {/* Background shape */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/[0.02] blur-xl" />

      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-[10px] font-mono font-bold text-brand-amber uppercase tracking-widest bg-brand-amber/5 px-3 py-1.5 rounded-full border border-brand-amber/15">
          {mt("howPageBadge")}
        </span>
        <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">{mt("howPageTitle")}</h1>
        <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
          {mt("howPageSub")}
        </p>
      </div>

      <div className="space-y-8 max-w-4xl mx-auto">
        {steps.map((item, idx) => (
          <div key={idx} className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start bg-slate-950/40 p-6 sm:p-8 rounded-2xl border border-slate-900/80 hover:border-slate-800 transition-colors duration-205 backdrop-blur-sm">
            <div className="md:col-span-2 text-left md:text-center shrink-0">
              <div className={`w-14 h-14 rounded-2xl border-2 flex items-center justify-center text-lg font-mono font-bold mx-auto md:mx-auto ${
                item.emerald ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400" : "bg-brand-amber/10 border-brand-amber/30 text-brand-amber"
              }`}>
                {item.step}
              </div>
            </div>
            <div className="md:col-span-10 space-y-2">
              <h4 className="font-display font-bold text-white text-lg tracking-tight">{mt(item.titleKey)}</h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{mt(item.descKey)}</p>
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
  const mt = (key: string) => getMarketingTranslation(key, language);

  const personaTabs = [
    { id: "owner" as const, titleKey: "personaTabOwner", metaKey: "personaTabOwnerMeta" },
    { id: "manager" as const, titleKey: "personaTabManager", metaKey: "personaTabManagerMeta" },
    { id: "cleaner" as const, titleKey: "personaTabCleaner", metaKey: "personaTabCleanerMeta" },
    { id: "client" as const, titleKey: "personaTabClient", metaKey: "personaTabClientMeta" }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16 text-left relative">
      
      {/* Decorative dots */}
      <div className="absolute top-12 left-4 w-12 h-12 text-slate-800 opacity-20 hidden md:block">
        <div className="grid grid-cols-3 gap-2">
          {[...Array(9)].map((_, i) => <div key={i} className="w-1 h-1 bg-current rounded-full" />)}
        </div>
      </div>

      <div className="space-y-3 max-w-3xl">
        <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">{mt("personasPageTitle")}</h1>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          {mt("personasPageSub")}
        </p>
      </div>

      {/* Role Navigation Button Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border-b border-slate-900 pb-6">
        {personaTabs.map((p) => (
          <button
            key={p.id}
            onClick={() => setActivePersona(p.id)}
            className={`py-4 px-6 rounded-2xl border text-left transition-all cursor-pointer focus:outline-none ${
              activePersona === p.id
                ? "bg-slate-950 border-brand-amber text-brand-amber ring-2 ring-brand-amber/25 shadow-md"
                : "bg-slate-900/20 border-slate-900 text-slate-400 hover:bg-slate-900 hover:border-slate-800"
            }`}
          >
            <span className="block font-display font-bold text-sm sm:text-base">{mt(p.titleKey)}</span>
            <span className="text-[10px] text-slate-500 font-mono tracking-wider block mt-0.5">{mt(p.metaKey)}</span>
          </button>
        ))}
      </div>

      {/* Render Persona specifics with active simulated engines */}
      <div className="bg-slate-950 p-6 md:p-12 rounded-3xl border border-slate-900 shadow-xl">
        {activePersona === "owner" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="px-3 py-1 bg-brand-amber/10 text-brand-amber text-[10px] font-mono font-bold rounded-lg border border-brand-amber/20">
                {mt("personaOwnerBadge")}
              </span>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight">{mt("personaOwnerTitle")}</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {mt("personaOwnerDesc")}
              </p>
              <div className="space-y-4 pt-4 text-xs sm:text-sm text-slate-400 border-t border-slate-900">
                {[mt("personaOwnerCheck1"), mt("personaOwnerCheck2"), mt("personaOwnerCheck3")].map((text) => (
                  <p key={text} className="flex gap-3 items-center">
                    <span className="text-brand-amber font-bold">✓</span>
                    <span>{text}</span>
                  </p>
                ))}
              </div>
            </div>
            <div className="lg:col-span-5 flex justify-center">
              <InteractiveMockup type="pdf" language={language} />
            </div>
          </div>
        )}

        {activePersona === "manager" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="px-3 py-1 bg-brand-amber/10 text-brand-amber text-[10px] font-mono font-bold rounded-lg border border-brand-amber/20">
                {mt("personaManagerBadge")}
              </span>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight">{mt("personaManagerTitle")}</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {mt("personaManagerDesc")}
              </p>
              <div className="space-y-4 pt-4 text-xs sm:text-sm text-slate-400 border-t border-slate-900">
                {[mt("personaManagerCheck1"), mt("personaManagerCheck2"), mt("personaManagerCheck3")].map((text) => (
                  <p key={text} className="flex gap-3 items-center">
                    <span className="text-brand-amber font-bold">✓</span>
                    <span>{text}</span>
                  </p>
                ))}
              </div>
            </div>
            <div className="lg:col-span-5 flex justify-center">
              <PhoneFrame>
                <AiDispatchSimulator />
              </PhoneFrame>
            </div>
          </div>
        )}

        {activePersona === "cleaner" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="px-3 py-1 bg-brand-amber/10 text-brand-amber text-[10px] font-mono font-bold rounded-lg border border-brand-amber/20">
                {mt("personaCleanerBadge")}
              </span>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight">{mt("personaCleanerTitle")}</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {mt("personaCleanerDesc")}
              </p>
              <div className="space-y-4 pt-4 text-xs sm:text-sm text-slate-400 border-t border-slate-900">
                {[mt("personaCleanerCheck1"), mt("personaCleanerCheck2"), mt("personaCleanerCheck3")].map((text) => (
                  <p key={text} className="flex gap-3 items-center">
                    <span className="text-brand-amber font-bold">✓</span>
                    <span>{text}</span>
                  </p>
                ))}
              </div>
            </div>
            <div className="lg:col-span-5 flex justify-center">
              <PhoneFrame>
                <LiveTimerSimulator />
              </PhoneFrame>
            </div>
          </div>
        )}

        {activePersona === "client" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 text-[10px] font-mono font-bold rounded-lg border border-emerald-500/20">
                {mt("personaClientBadge")}
              </span>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight">{mt("personaClientTitle")}</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {mt("personaClientDesc")}
              </p>
              <div className="space-y-4 pt-4 text-xs sm:text-sm text-slate-400 border-t border-slate-900">
                {[mt("personaClientCheck1"), mt("personaClientCheck2"), mt("personaClientCheck3")].map((text) => (
                  <p key={text} className="flex gap-3 items-center">
                    <span className="text-brand-amber font-bold">✓</span>
                    <span>{text}</span>
                  </p>
                ))}
              </div>
            </div>
            <div className="lg:col-span-5 flex justify-center">
              <PhoneFrame>
                <PhotoProofSimulator />
              </PhoneFrame>
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16 text-left relative">
      
      <div className="absolute top-12 right-12 w-24 h-24 text-slate-900/60 pointer-events-none hidden md:block">
        <svg viewBox="0 0 100 100" fill="currentColor">
          <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="2" fill="none" strokeDasharray="4 4" />
        </svg>
      </div>

      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-[10px] font-mono font-bold text-brand-amber uppercase tracking-widest bg-brand-amber/5 px-3 py-1.5 rounded-full border border-brand-amber/15">
          {t("integPageBadge")}
        </span>
        <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">{t("integPageTitle")}</h1>
        <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">{t("integPageSubtitle")}</p>
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-5">
            <h3 className="font-display font-bold text-2xl text-white tracking-tight">{t("integPageSheetsTitle")}</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{t("integPageSheetsDesc")}</p>

            <div className="pt-2">
              <a
                href="https://docs.google.com/spreadsheets/d/1TwpA0HeIB6hyfKMd3Y6u8X4v9jxujtAFhxD3rXLFghk/edit?gid=97592833#gid=97592833"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-4.5 py-3 bg-emerald-950/40 hover:bg-emerald-900/30 border border-emerald-800/40 text-emerald-400 hover:text-emerald-300 rounded-xl text-xs font-bold transition-all shadow-sm group cursor-pointer"
              >
                <div className="w-5.5 h-5.5 bg-emerald-600 text-white font-bold rounded flex items-center justify-center shrink-0 text-[10px]">田</div>
                <span>{t("integPageOpenTemplate")}</span>
              </a>
            </div>

            <div className="bg-slate-900/20 p-5 rounded-2xl border border-slate-900 space-y-3 backdrop-blur-sm">
              <span className="text-[10px] font-mono text-brand-amber uppercase tracking-wider font-semibold block">
                {t("integPageFormatTitle")}
              </span>
              <p className="text-xs text-slate-400 leading-relaxed">{t("integPageFormatDesc")}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs pt-2">
              <div className="p-4 bg-slate-900/20 backdrop-blur-sm border border-slate-900 rounded-xl">
                <h5 className="font-bold text-white text-sm">{t("integPageStripeTitle")}</h5>
                <p className="text-[11px] mt-1.5 text-slate-400 leading-relaxed">{t("integPageStripeDesc")}</p>
              </div>
              <div className="p-4 bg-slate-900/20 backdrop-blur-sm border border-slate-900 rounded-xl">
                <h5 className="font-bold text-white text-sm">{t("integPageMapsTitle")}</h5>
                <p className="text-[11px] mt-1.5 text-slate-400 leading-relaxed">{t("integPageMapsDesc")}</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 max-w-full overflow-hidden">
            <div className="rounded-xl border border-slate-800 bg-slate-950/40 p-2.5 shadow-lg backdrop-blur-md">
              <SheetIntegrationSimulator />
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
  const mt = (key: string) => getMarketingTranslation(key, language);
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
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [mailConfig, setMailConfig] = useState<{
    configured: boolean;
    provider?: string;
  } | null>(null);

  useEffect(() => {
    fetch("/api/contact/config")
      .then((res) => res.json())
      .then(setMailConfig)
      .catch(() => setMailConfig({ configured: false }));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setSubmitError(null);

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
      setSubmitted(true);
    } catch (err: any) {
      setSubmitError(err.message || "Failed to send message.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-left relative">
      
      <div className="absolute top-4 left-4 w-12 h-12 border-l border-t border-slate-900 pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Info Column */}
        <div className="lg:col-span-6 space-y-8">
          <div className="space-y-4">
            <span className="px-3 py-1.5 bg-brand-amber/10 text-brand-amber text-[10px] font-mono font-bold rounded-lg border border-brand-amber/20">
              {mt("contactTrialBadge")}
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
              <div className="w-6.5 h-6.5 rounded-lg bg-brand-amber/10 text-brand-amber flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                ✓
              </div>
              <p className="text-xs sm:text-sm text-slate-400">
                <span className="text-white font-bold block mb-1">{mt("contactTrialTitle")}</span>
                {mt("contactTrialDesc")}
              </p>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-6.5 h-6.5 rounded-lg bg-brand-amber/10 text-brand-amber flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                ✓
              </div>
              <p className="text-xs sm:text-sm text-slate-400">
                <span className="text-white font-bold block mb-1">{mt("contactSheetsTitle")}</span>
                {mt("contactSheetsDesc")}
              </p>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-6.5 h-6.5 rounded-lg bg-brand-amber/10 text-brand-amber flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                ✓
              </div>
              <p className="text-xs sm:text-sm text-slate-400">
                <span className="text-white font-bold block mb-1">{mt("contactNoCardTitle")}</span>
                {mt("contactNoCardDesc")}
              </p>
            </div>
          </div>
        </div>

        {/* Form Column */}
        <div className="lg:col-span-6 bg-slate-950 p-6 sm:p-12 rounded-3xl border border-slate-900 shadow-2xl relative">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-5 text-xs sm:text-sm">
              {submitError && (
                <div className="p-3 rounded-xl bg-rose-950/40 border border-rose-900/50 text-rose-300 text-[11px] leading-relaxed">
                  {submitError}
                </div>
              )}
              {!mailConfig?.configured && mailConfig !== null && (
                <div className="p-3.5 rounded-xl bg-amber-950/30 border border-amber-900/45 text-amber-200/90 text-[11px] leading-relaxed">
                  {mt("contactEmailNotConfigured")}
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
                    className="w-full p-4 bg-slate-900 border border-slate-800 rounded-xl focus:border-brand-amber focus:ring-1 focus:ring-brand-amber text-slate-200 text-xs sm:text-sm placeholder-slate-600 focus:outline-none"
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
                    className="w-full p-4 bg-slate-900 border border-slate-800 rounded-xl focus:border-brand-amber focus:ring-1 focus:ring-brand-amber text-slate-200 text-xs sm:text-sm placeholder-slate-600 focus:outline-none"
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
                  className="w-full p-4 bg-slate-900 border border-slate-800 rounded-xl focus:border-brand-amber focus:ring-1 focus:ring-brand-amber text-slate-200 text-xs sm:text-sm placeholder-slate-600 focus:outline-none"
                  placeholder="e.g. Sparkle Facilities Group"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="block text-slate-400 font-semibold">{getTranslation("formTeam", language)}</label>
                  <select
                    value={formData.size}
                    onChange={(e) => setFormData({ ...formData, size: e.target.value })}
                    className="w-full p-4 bg-slate-900 border border-slate-800 rounded-xl text-slate-300 focus:border-brand-amber text-xs sm:text-sm focus:outline-none"
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
                    className="w-full p-4 bg-slate-900 border border-slate-800 rounded-xl text-slate-300 focus:border-brand-amber text-xs sm:text-sm focus:outline-none"
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
                  className="w-full p-4 bg-slate-900 border border-slate-800 rounded-xl text-slate-200 text-xs sm:text-sm h-28 resize-none focus:border-brand-amber placeholder-slate-600 focus:outline-none"
                  placeholder={mt("contactFormPlaceholder")}
                />
              </div>

              <button
                type="submit"
                disabled={isSending}
                className="w-full py-4.5 px-6 bg-brand-amber hover:bg-brand-amber/90 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed text-slate-950 font-bold rounded-xl text-xs sm:text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                {isSending ? (
                  <>
                    <span className="w-4 h-4 border-2 border-slate-950/30 border-t-slate-950 rounded-full animate-spin" />
                    {mt("contactBtnSubmitting")}
                  </>
                ) : (
                  <>
                    <Send size={14} /> {getTranslation("formSubmit", language)}
                  </>
                )}
              </button>
            </form>
          ) : (
            <div className="text-center py-20 space-y-6">
              <span className="text-6xl inline-block">✓</span>
              <h3 className="font-display font-bold text-2xl text-white">{mt("contactSuccessTitle")}</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm mx-auto">
                {mt("contactSuccessDesc")}
              </p>
              <p className="text-xs text-slate-400 leading-relaxed max-w-sm mx-auto">
                {mt("contactDemoDetails")}
              </p>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setSubmitError(null);
                }}
                className="px-6 py-3 bg-slate-900 text-xs sm:text-sm font-semibold rounded-xl text-slate-300 border border-slate-800 hover:bg-slate-850 cursor-pointer"
              >
                {mt("contactBackBtn")}
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
