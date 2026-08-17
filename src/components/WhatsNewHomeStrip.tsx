"use client";

import type { ComponentType } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  CreditCard,
  Gauge,
  LineChart,
  MapPinned,
  Megaphone,
  MessagesSquare,
  Package,
  Plug,
  Sparkles,
  WifiOff,
} from "lucide-react";
import { NEW_FEATURES, getFeatureCopy, getWhatsNewUi } from "../content/newFeatures";
import { getMarketingTranslation } from "../utils/marketingTranslations";

const ICONS: Record<string, ComponentType<{ size?: number; className?: string }>> = {
  MessagesSquare,
  BookOpen,
  Plug,
  CreditCard,
  Gauge,
  LineChart,
  MapPinned,
  WifiOff,
  Sparkles,
  Megaphone,
  Package,
};

/** Homepage featured What's New — larger cards for real scanability */
export function WhatsNewHomeStrip({ language }: { language: string }) {
  const ui = getWhatsNewUi(language);

  return (
    <section
      className="relative border-y border-slate-800 bg-slate-950 py-16 sm:py-24"
      aria-labelledby="whats-new-strip"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(245,158,11,0.09)_0%,_transparent_55%)] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10 sm:mb-12">
          <div className="max-w-3xl space-y-4">
            <p className="text-sm font-mono uppercase tracking-[0.2em] text-brand-amber font-bold">
              {ui.eyebrow}
            </p>
            <h2
              id="whats-new-strip"
              className="font-display font-extrabold text-4xl sm:text-5xl lg:text-[3.25rem] text-white tracking-tight leading-[1.1]"
            >
              {ui.stripTitle}
            </h2>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              {ui.indexSubtitle}
            </p>
          </div>
          <Link
            href="/whats-new"
            className="inline-flex items-center justify-center gap-2 self-start rounded-xl bg-brand-amber text-slate-950 font-bold text-base px-6 py-3.5 hover:bg-amber-400 transition-colors"
          >
            {ui.viewAll}
            <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6">
          {NEW_FEATURES.slice(0, 6).map((feature) => {
            const copy = getFeatureCopy(feature.slug, language);
            const Icon = ICONS[feature.icon] || Sparkles;
            return (
              <Link
                key={feature.slug}
                href={`/whats-new/${feature.slug}`}
                className="group rounded-2xl border border-slate-800 bg-slate-900/70 hover:border-brand-amber/50 hover:bg-slate-900 p-6 sm:p-7 transition-all min-h-[220px] flex flex-col"
              >
                <span className="w-14 h-14 rounded-2xl bg-brand-amber/10 border border-brand-amber/25 text-brand-amber flex items-center justify-center mb-5 group-hover:bg-brand-amber/20">
                  <Icon size={26} />
                </span>
                <span className="block font-display font-bold text-xl sm:text-2xl text-white leading-snug">
                  {copy.pillShort}
                </span>
                <span className="block text-sm sm:text-base text-slate-400 mt-3 leading-relaxed line-clamp-3 flex-1">
                  {copy.headline}
                </span>
                <span className="inline-flex items-center gap-1.5 mt-5 text-base font-semibold text-brand-amber">
                  {getMarketingTranslation("learnMore", language)}
                  <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
