"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ArrowRight,
  BookOpen,
  CheckCircle,
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
import { MarketingShell } from "./MarketingSite";
import { useSite } from "../context/SiteContext";
import {
  NEW_FEATURES,
  getFeatureBySlug,
  getFeatureCopy,
  getWhatsNewUi,
  type NewFeatureSlug,
} from "../content/newFeatures";
import { getMarketingTranslation } from "../utils/marketingTranslations";

const ICONS: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
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

function FeatureIcon({ name, className }: { name: string; className?: string }) {
  const Icon = ICONS[name] || Sparkles;
  return <Icon size={22} className={className} />;
}

export function WhatsNewIndexPage() {
  const { language } = useSite();
  const ui = getWhatsNewUi(language);
  const router = useRouter();

  return (
    <MarketingShell>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-28 space-y-16">
        <header className="max-w-3xl space-y-4 pt-4">
          <p className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-brand-amber/25 bg-brand-amber/10 text-brand-amber text-xs font-semibold">
            <Sparkles size={12} />
            {ui.eyebrow}
          </p>
          <h1 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-tight">
            {ui.indexTitle}
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">{ui.indexSubtitle}</p>
          <div className="flex flex-wrap gap-3 pt-2">
            <button
              type="button"
              onClick={() => router.push("/contact")}
              className="px-6 py-3 bg-brand-amber hover:bg-brand-amber/90 text-slate-950 font-bold rounded-xl text-sm transition-all"
            >
              {ui.ctaTrial}
            </button>
            <Link
              href="/features"
              className="px-6 py-3 bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-200 font-semibold rounded-xl text-sm transition-all"
            >
              {ui.backToFeatures}
            </Link>
          </div>
        </header>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {NEW_FEATURES.map((feature) => {
            const copy = getFeatureCopy(feature.slug, language);
            return (
              <Link
                key={feature.slug}
                href={`/whats-new/${feature.slug}`}
                className="group rounded-2xl border border-slate-800 bg-slate-900/40 hover:border-brand-amber/35 hover:bg-slate-900/70 p-6 transition-all hover:-translate-y-0.5"
              >
                <div className="w-11 h-11 rounded-xl bg-brand-amber/10 border border-brand-amber/20 text-brand-amber flex items-center justify-center mb-4">
                  <FeatureIcon name={feature.icon} />
                </div>
                <h2 className="font-display font-bold text-lg text-white group-hover:text-brand-amber transition-colors">
                  {copy.pillShort}
                </h2>
                <p className="text-slate-400 text-sm mt-2 leading-relaxed line-clamp-3">{copy.headline}</p>
                <span className="inline-flex items-center gap-1.5 mt-4 text-xs font-semibold text-brand-amber">
                  {getMarketingTranslation("learnMore", language)}
                  <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                </span>
              </Link>
            );
          })}
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 pt-4">
          <div className="space-y-4">
            <h2 className="font-display font-bold text-xl text-white">{ui.changelogTitle}</h2>
            <ol className="space-y-2.5">
              {ui.changelog.map((item, i) => (
                <li key={item} className="flex gap-3 text-sm text-slate-300">
                  <span className="font-mono text-[10px] text-brand-amber/80 mt-1 w-5 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
          </div>
          <div className="space-y-4">
            <h2 className="font-display font-bold text-xl text-white">{ui.faqTitle}</h2>
            <div className="space-y-3">
              {ui.faqs.map((faq) => (
                <details
                  key={faq.q}
                  className="rounded-xl border border-slate-800 bg-slate-900/40 px-4 py-3 group"
                >
                  <summary className="cursor-pointer text-sm font-semibold text-slate-100 list-none flex items-center justify-between gap-3">
                    {faq.q}
                    <span className="text-slate-500 group-open:rotate-45 transition-transform text-lg leading-none">
                      +
                    </span>
                  </summary>
                  <p className="text-sm text-slate-400 mt-2 leading-relaxed">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </div>
    </MarketingShell>
  );
}

export function WhatsNewFeaturePage({ slug }: { slug: NewFeatureSlug }) {
  const { language } = useSite();
  const ui = getWhatsNewUi(language);
  const feature = getFeatureBySlug(slug);
  const copy = getFeatureCopy(slug, language);
  const router = useRouter();

  if (!feature) return null;

  const related = feature.related
    .map((id) => {
      const def = getFeatureBySlug(id);
      if (!def) return null;
      return { def, copy: getFeatureCopy(id, language) };
    })
    .filter(Boolean) as { def: (typeof NEW_FEATURES)[number]; copy: ReturnType<typeof getFeatureCopy> }[];

  return (
    <MarketingShell>
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-28">
        <nav className="flex flex-wrap items-center gap-3 text-xs mb-8">
          <Link href="/whats-new" className="text-brand-amber hover:text-amber-300 font-semibold">
            ← {ui.backToWhatsNew}
          </Link>
          <span className="text-slate-700">/</span>
          <Link href="/features" className="text-slate-400 hover:text-white">
            {ui.backToFeatures}
          </Link>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-7 space-y-8">
            <header className="space-y-5">
              <p className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-brand-amber/25 bg-brand-amber/10 text-brand-amber text-xs font-semibold">
                <FeatureIcon name={feature.icon} className="text-brand-amber" />
                {copy.pillShort}
              </p>
              <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-[1.15]">
                {copy.headline}
              </h1>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">{copy.body}</p>
              <p className="text-brand-amber/90 text-sm font-medium italic">{copy.cta}</p>
            </header>

            <ul className="space-y-3">
              {copy.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3 items-start text-sm text-slate-300">
                  <CheckCircle size={16} className="text-brand-amber shrink-0 mt-0.5" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3 pt-2">
              <button
                type="button"
                onClick={() => router.push("/contact")}
                className="px-6 py-3.5 bg-brand-amber hover:bg-brand-amber/90 text-slate-950 font-bold rounded-xl text-sm transition-all inline-flex items-center gap-2"
              >
                {ui.ctaTrial}
                <ArrowRight size={15} />
              </button>
              <Link
                href="/documentation"
                className="px-6 py-3.5 bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-200 font-semibold rounded-xl text-sm transition-all"
              >
                {ui.ctaDocs}
              </Link>
            </div>
          </div>

          <aside className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900/80 to-slate-950 p-6 sm:p-8">
              <div className="w-14 h-14 rounded-2xl bg-brand-amber/10 border border-brand-amber/25 text-brand-amber flex items-center justify-center mb-5">
                <FeatureIcon name={feature.icon} />
              </div>
              <p className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-2">{ui.eyebrow}</p>
              <p className="font-display font-bold text-xl text-white leading-snug">{copy.caption}</p>
              <p className="text-sm text-slate-400 mt-3 leading-relaxed">{copy.pill}</p>
            </div>

            {related.length > 0 && (
              <div className="space-y-3">
                <h2 className="font-display font-bold text-sm text-slate-200 uppercase tracking-wider">
                  {ui.relatedTitle}
                </h2>
                <div className="space-y-2">
                  {related.map(({ def, copy: relCopy }) => (
                    <Link
                      key={def.slug}
                      href={`/whats-new/${def.slug}`}
                      className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900/40 hover:border-brand-amber/30 px-4 py-3 transition-colors"
                    >
                      <FeatureIcon name={def.icon} className="text-brand-amber shrink-0" />
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-white truncate">{relCopy.pillShort}</p>
                        <p className="text-[11px] text-slate-500 truncate">{relCopy.headline}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </article>
    </MarketingShell>
  );
}
