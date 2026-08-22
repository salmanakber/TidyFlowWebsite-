"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ArrowRight,
  Building,
  Building2,
  CalendarDays,
  CheckCircle,
  ClipboardCheck,
  Clock,
  LayoutDashboard,
  Sparkles,
  TrendingUp,
  Wallet,
  WifiOff,
} from "lucide-react";
import { MarketingShell } from "./MarketingSite";
import { useSite } from "../context/SiteContext";
import { getSeoLandingCopy } from "../content/seoLandings";
import { getSeoLandingBySlug } from "../content/seoLandings/registry";
import { getSeoLandingUi } from "../content/seoLandings/uiLocales";
import type { SeoLandingSlug } from "../content/seoLandings/types";

const ICONS: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Building2,
  LayoutDashboard,
  Sparkles,
  Building,
  CalendarDays,
  Wallet,
  ClipboardCheck,
  Clock,
  WifiOff,
  TrendingUp,
};

function LandingIcon({ name, className }: { name: string; className?: string }) {
  const Icon = ICONS[name] || Sparkles;
  return <Icon size={22} className={className} />;
}

function CtaRow({
  ui,
  onTrial,
  compact,
}: {
  ui: ReturnType<typeof getSeoLandingUi>;
  onTrial: () => void;
  compact?: boolean;
}) {
  return (
    <div className={`flex flex-wrap gap-3 ${compact ? "" : "pt-2"}`}>
      <button
        type="button"
        onClick={onTrial}
        className="px-6 py-3.5 bg-brand-amber hover:bg-brand-amber/90 text-slate-950 font-bold rounded-xl text-sm transition-all inline-flex items-center gap-2"
      >
        {ui.ctaTrial}
        <ArrowRight size={15} />
      </button>
      <Link
        href="/pricing"
        className="px-6 py-3.5 bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-200 font-semibold rounded-xl text-sm transition-all"
      >
        {ui.ctaPricing}
      </Link>
      <Link
        href="/features"
        className="px-6 py-3.5 bg-slate-900/60 border border-slate-800 hover:border-slate-700 text-slate-300 font-semibold rounded-xl text-sm transition-all hidden sm:inline-flex"
      >
        {ui.ctaFeatures}
      </Link>
    </div>
  );
}

export function SeoLandingPage({ slug }: { slug: SeoLandingSlug }) {
  const { language } = useSite();
  const router = useRouter();
  const def = getSeoLandingBySlug(slug);
  const copy = getSeoLandingCopy(slug, language);
  const ui = getSeoLandingUi(language);

  if (!def) return null;

  const related = def.related
    .map((relSlug) => {
      const relDef = getSeoLandingBySlug(relSlug);
      if (!relDef) return null;
      const relCopy = getSeoLandingCopy(relSlug, language);
      return { slug: relSlug, def: relDef, copy: relCopy };
    })
    .filter(Boolean) as {
    slug: SeoLandingSlug;
    def: NonNullable<ReturnType<typeof getSeoLandingBySlug>>;
    copy: ReturnType<typeof getSeoLandingCopy>;
  }[];

  const goTrial = () => router.push("/contact");

  return (
    <MarketingShell>
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-28">
        <nav className="flex flex-wrap items-center gap-3 text-xs mb-8 pt-2">
          <Link href="/" className="text-brand-amber hover:text-amber-300 font-semibold">
            TidyFlow
          </Link>
          <span className="text-slate-700">/</span>
          {def.isPillar ? (
            <span className="text-slate-400">{copy.eyebrow}</span>
          ) : (
            <>
              <Link href="/cleaning-company-software" className="text-slate-400 hover:text-white">
                {ui.pillarLink}
              </Link>
              <span className="text-slate-700">/</span>
              <span className="text-slate-400">{copy.eyebrow}</span>
            </>
          )}
        </nav>

        {/* Hero */}
        <header className="max-w-3xl space-y-5 mb-16 sm:mb-20">
          <p className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-brand-amber/25 bg-brand-amber/10 text-brand-amber text-xs font-semibold">
            <LandingIcon name={def.icon} className="text-brand-amber" />
            {copy.eyebrow}
          </p>
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-[1.12]">
            {copy.h1}
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">{copy.heroSubtitle}</p>
          <CtaRow ui={ui} onTrial={goTrial} />
        </header>

        {/* Problems */}
        <section className="mb-16 sm:mb-20" aria-labelledby="problems-heading">
          <p className="text-[11px] font-mono uppercase tracking-widest text-brand-amber/80 mb-3">{ui.problemsLabel}</p>
          <h2 id="problems-heading" className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight mb-6">
            {copy.problems.title}
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {copy.problems.items.map((item) => (
              <li
                key={item.slice(0, 40)}
                className="flex gap-3 items-start rounded-xl border border-slate-800 bg-slate-900/40 px-4 py-3.5 text-sm text-slate-300 leading-relaxed"
              >
                <span className="text-brand-amber mt-0.5 shrink-0">—</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <CtaRow ui={ui} onTrial={goTrial} compact />
          </div>
        </section>

        {/* Solution */}
        <section className="mb-16 sm:mb-20 rounded-2xl border border-brand-amber/20 bg-gradient-to-br from-brand-amber/5 to-slate-900/40 p-6 sm:p-10" aria-labelledby="solution-heading">
          <p className="text-[11px] font-mono uppercase tracking-widest text-brand-amber/80 mb-3">{ui.solutionLabel}</p>
          <h2 id="solution-heading" className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight mb-5">
            {copy.solution.title}
          </h2>
          <div className="space-y-4 max-w-3xl">
            {copy.solution.paragraphs.map((p) => (
              <p key={p.slice(0, 48)} className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        </section>

        {/* Features */}
        <section className="mb-16 sm:mb-20" aria-labelledby="features-heading">
          <p className="text-[11px] font-mono uppercase tracking-widest text-brand-amber/80 mb-3">{ui.featuresLabel}</p>
          <h2 id="features-heading" className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight mb-8">
            {copy.eyebrow}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {copy.features.map((feat) => (
              <div
                key={feat.title}
                className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 flex flex-col gap-3 hover:border-brand-amber/25 transition-colors"
              >
                <h3 className="font-display font-bold text-lg text-white">{feat.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed flex-1">{feat.description}</p>
                <p className="text-xs text-brand-amber/90 font-medium">{feat.benefit}</p>
                <Link
                  href={feat.linkHref}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-amber hover:text-amber-300 mt-1"
                >
                  {feat.linkLabel}
                  <ArrowRight size={12} />
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section className="mb-16 sm:mb-20" aria-labelledby="how-heading">
          <p className="text-[11px] font-mono uppercase tracking-widest text-brand-amber/80 mb-3">{ui.howItWorksLabel}</p>
          <h2 id="how-heading" className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight mb-8">
            {copy.howItWorks.title}
          </h2>
          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {copy.howItWorks.steps.map((step, i) => (
              <li
                key={step.title}
                className="rounded-xl border border-slate-800 bg-slate-900/50 p-5 flex flex-col gap-2"
              >
                <span className="font-mono text-[10px] text-brand-amber/80">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="font-display font-bold text-sm text-white">{step.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{step.description}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* Use cases */}
        <section className="mb-16 sm:mb-20" aria-labelledby="usecases-heading">
          <p className="text-[11px] font-mono uppercase tracking-widest text-brand-amber/80 mb-3">{ui.useCasesLabel}</p>
          <h2 id="usecases-heading" className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight mb-8">
            {copy.useCases.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {copy.useCases.items.map((uc) => (
              <div key={uc.title} className="rounded-xl border border-slate-800 bg-slate-900/40 px-5 py-4">
                <h3 className="font-semibold text-sm text-white mb-1.5">{uc.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{uc.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Trust */}
        <section className="mb-16 sm:mb-20 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8" aria-labelledby="trust-heading">
          <p className="text-[11px] font-mono uppercase tracking-widest text-brand-amber/80 mb-2">{ui.trustEyebrow}</p>
          <h2 id="trust-heading" className="font-display font-bold text-xl sm:text-2xl text-white mb-5">
            {ui.trustTitle}
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {ui.trustBullets.map((b) => (
              <li key={b} className="flex gap-2.5 items-start text-sm text-slate-300">
                <CheckCircle size={16} className="text-brand-amber shrink-0 mt-0.5" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* FAQ */}
        <section className="mb-16 sm:mb-20 max-w-3xl" aria-labelledby="faq-heading">
          <p className="text-[11px] font-mono uppercase tracking-widest text-brand-amber/80 mb-3">{ui.faqLabel}</p>
          <h2 id="faq-heading" className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight mb-6">
            {ui.faqLabel}
          </h2>
          <div className="space-y-3">
            {copy.faqs.map((faq) => (
              <details
                key={faq.q}
                className="rounded-xl border border-slate-800 bg-slate-900/40 px-4 py-3 group"
              >
                <summary className="cursor-pointer text-sm font-semibold text-slate-100 list-none flex items-center justify-between gap-3">
                  {faq.q}
                  <span className="text-slate-500 group-open:rotate-45 transition-transform text-lg leading-none shrink-0">
                    +
                  </span>
                </summary>
                <p className="text-sm text-slate-400 mt-2 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Bottom CTA + related */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pt-4 border-t border-slate-800">
          <div className="lg:col-span-7 space-y-6">
            <CtaRow ui={ui} onTrial={goTrial} />
          </div>
          {related.length > 0 && (
            <aside className="lg:col-span-5 space-y-4">
              <h2 className="font-display font-bold text-sm text-slate-200 uppercase tracking-wider">
                {ui.relatedSolutions}
              </h2>
              <div className="space-y-2">
                {related.map(({ slug: relSlug, def: relDef, copy: relCopy }) => (
                  <Link
                    key={relSlug}
                    href={`/${relSlug}`}
                    className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900/40 hover:border-brand-amber/30 px-4 py-3 transition-colors"
                  >
                    <LandingIcon name={relDef.icon} className="text-brand-amber shrink-0" />
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-white truncate">{relCopy.navLabel}</p>
                      <p className="text-[11px] text-slate-500 truncate">{relCopy.h1}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </aside>
          )}
        </div>
      </article>
    </MarketingShell>
  );
}
