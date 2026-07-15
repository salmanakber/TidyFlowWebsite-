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

/** Homepage horizontal strip — pills link to standalone feature pages */
export function WhatsNewHomeStrip({ language }: { language: string }) {
  const ui = getWhatsNewUi(language);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-labelledby="whats-new-strip">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-5">
        <div>
          <p className="text-xs font-mono uppercase tracking-wider text-brand-amber mb-1">{ui.eyebrow}</p>
          <h2 id="whats-new-strip" className="font-display font-bold text-xl sm:text-2xl text-white">
            {ui.stripTitle}
          </h2>
        </div>
        <Link
          href="/whats-new"
          className="text-sm font-semibold text-brand-amber hover:text-amber-300 inline-flex items-center gap-1.5 self-start sm:self-auto"
        >
          {ui.viewAll}
          <ArrowRight size={14} />
        </Link>
      </div>
      <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-none snap-x snap-mandatory">
        {NEW_FEATURES.map((feature) => {
          const copy = getFeatureCopy(feature.slug, language);
          const Icon = ICONS[feature.icon] || Sparkles;
          return (
            <Link
              key={feature.slug}
              href={`/whats-new/${feature.slug}`}
              className="snap-start shrink-0 w-[260px] sm:w-[280px] rounded-2xl border border-slate-800 bg-slate-900/50 hover:border-brand-amber/40 hover:bg-slate-900 px-4 py-3.5 sm:p-4 transition-all"
            >
              <span className="flex items-start gap-2.5">
                <span className="w-8 h-8 rounded-full bg-brand-amber/10 border border-brand-amber/20 text-brand-amber flex items-center justify-center shrink-0">
                  <Icon size={15} />
                </span>
                <span className="text-left min-w-0 flex-1">
                  <span className="block text-xs font-bold text-white truncate">{copy.pillShort}</span>
                  <span className="block text-[11px] text-slate-400 line-clamp-2 mt-0.5 leading-snug">{copy.headline}</span>
                  <span className="inline-flex items-center gap-1 mt-2 text-[11px] font-semibold text-brand-amber">
                    {getMarketingTranslation("learnMore", language)}
                    <ArrowRight size={11} />
                  </span>
                </span>
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
