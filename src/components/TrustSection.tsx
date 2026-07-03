import React from "react";
import { Star, Building2, CheckCircle2, MapPin } from "lucide-react";
import { getMarketingTranslation } from "../utils/marketingTranslations";

const TRUSTED_PARTNERS = [
  { name: "BrightSpace Facilities", tag: "Commercial · London", abbr: "BS", accent: "sky" },
  { name: "PureShine Group", tag: "Residential · Manchester", abbr: "PS", accent: "emerald" },
  { name: "Apex Janitorial", tag: "Corporate · Birmingham", abbr: "AJ", accent: "violet" },
  { name: "LuxeClean Co.", tag: "Luxury homes · Edinburgh", abbr: "LC", accent: "amber" },
  { name: "EcoGlide Services", tag: "Green certified · Bristol", abbr: "EG", accent: "teal" },
  { name: "Metro Facility Care", tag: "High-rise · Leeds", abbr: "MF", accent: "rose" },
  { name: "Summit Property Clean", tag: "Mixed portfolio · Dublin", abbr: "SP", accent: "cyan" },
  { name: "Horizon Office Care", tag: "B2B contracts · Glasgow", abbr: "HO", accent: "indigo" }
];

const ACCENT_STYLES: Record<string, { badge: string; border: string; glow: string }> = {
  sky: { badge: "bg-sky-500/15 text-sky-300 border-sky-500/25", border: "border-sky-500/20", glow: "hover:shadow-sky-500/10" },
  emerald: { badge: "bg-emerald-500/15 text-emerald-300 border-emerald-500/25", border: "border-emerald-500/20", glow: "hover:shadow-emerald-500/10" },
  violet: { badge: "bg-violet-500/15 text-violet-300 border-violet-500/25", border: "border-violet-500/20", glow: "hover:shadow-violet-500/10" },
  amber: { badge: "bg-amber-500/15 text-amber-300 border-amber-500/25", border: "border-amber-500/20", glow: "hover:shadow-amber-500/10" },
  teal: { badge: "bg-teal-500/15 text-teal-300 border-teal-500/25", border: "border-teal-500/20", glow: "hover:shadow-teal-500/10" },
  rose: { badge: "bg-rose-500/15 text-rose-300 border-rose-500/25", border: "border-rose-500/20", glow: "hover:shadow-rose-500/10" },
  cyan: { badge: "bg-cyan-500/15 text-cyan-300 border-cyan-500/25", border: "border-cyan-500/20", glow: "hover:shadow-cyan-500/10" },
  indigo: { badge: "bg-indigo-500/15 text-indigo-300 border-indigo-500/25", border: "border-indigo-500/20", glow: "hover:shadow-indigo-500/10" }
};

function PartnerCard({ partner }: { partner: (typeof TRUSTED_PARTNERS)[0] }) {
  const style = ACCENT_STYLES[partner.accent] || ACCENT_STYLES.sky;

  return (
    <div
      className={`flex items-center gap-3 px-4 py-3 rounded-2xl border bg-slate-900/70 backdrop-blur-sm shrink-0 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg ${style.border} ${style.glow}`}
    >
      <div
        className={`w-10 h-10 rounded-xl border flex items-center justify-center text-[11px] font-extrabold tracking-tight ${style.badge}`}
      >
        {partner.abbr}
      </div>
      <div className="text-left min-w-[140px]">
        <p className="font-display font-bold text-sm text-slate-100 leading-tight flex items-center gap-1.5">
          {partner.name}
          <CheckCircle2 size={12} className="text-brand-amber shrink-0" aria-hidden />
        </p>
        <p className="text-[10px] text-slate-500 mt-0.5 flex items-center gap-1">
          <MapPin size={9} className="shrink-0 opacity-70" />
          {partner.tag}
        </p>
      </div>
    </div>
  );
}

function ReviewBadge({
  provider,
  rating,
  colorClass,
  icon
}: {
  provider: string;
  rating: string;
  colorClass: string;
  icon: React.ReactNode;
}) {
  return (
    <div className={`flex items-center gap-2.5 px-3 py-2 rounded-xl border bg-slate-900/60 ${colorClass}`}>
      <div className="shrink-0">{icon}</div>
      <div className="text-left leading-tight">
        <div className="flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((i) => (
            <Star key={i} size={10} className="fill-amber-400 text-amber-400" />
          ))}
        </div>
        <p className="text-[10px] font-bold text-white mt-0.5">{rating}</p>
        <p className="text-[9px] text-slate-400">{provider}</p>
      </div>
    </div>
  );
}

export function ReviewBadges({ language }: { language: string }) {
  const mt = (key: string) => getMarketingTranslation(key, language);

  return (
    <div className="flex flex-wrap gap-2 justify-start lg:justify-end">
      <ReviewBadge
        provider={mt("reviewTrustpilot")}
        rating="4.9 / 5"
        colorClass="border-emerald-500/30"
        icon={
          <div className="w-7 h-7 rounded-lg bg-[#00B67A] flex items-center justify-center text-white text-[9px] font-extrabold">
            TP
          </div>
        }
      />
      <ReviewBadge
        provider={mt("reviewG2")}
        rating="4.8 / 5"
        colorClass="border-orange-500/30"
        icon={
          <div className="w-7 h-7 rounded-lg bg-[#FF492C] flex items-center justify-center text-white text-[9px] font-extrabold">
            G2
          </div>
        }
      />
      <ReviewBadge
        provider={mt("reviewCapterra")}
        rating="4.7 / 5"
        colorClass="border-blue-500/30"
        icon={
          <div className="w-7 h-7 rounded-lg bg-[#0167FF] flex items-center justify-center text-white text-[9px] font-extrabold">
            C
          </div>
        }
      />
      <ReviewBadge
        provider={mt("reviewGoogle")}
        rating="4.9 / 5"
        colorClass="border-slate-600/40"
        icon={
          <div className="w-7 h-7 rounded-lg bg-white flex items-center justify-center text-[11px] font-bold">
            <span className="text-[#4285F4]">G</span>
          </div>
        }
      />
    </div>
  );
}

export function TrustedByStrip({ language }: { language: string }) {
  const mt = (key: string) => getMarketingTranslation(key, language);
  const marqueePartners = [...TRUSTED_PARTNERS, ...TRUSTED_PARTNERS];

  return (
    <section className="relative bg-slate-950/50 border-y border-slate-900 py-12 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(245,158,11,0.06)_0%,_transparent_65%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-800 bg-slate-900/60 text-[10px] font-mono uppercase tracking-widest text-slate-400">
            <Building2 size={12} className="text-brand-amber" />
            {mt("trustedBy")}
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-[11px] text-slate-400">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900/80 border border-slate-800">
              <span className="text-brand-amber font-bold">2,400+</span> properties
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900/80 border border-slate-800">
              <span className="text-brand-amber font-bold">12</span> countries
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900/80 border border-slate-800">
              <span className="text-brand-amber font-bold">180k+</span> verified hours / mo
            </span>
          </div>
        </div>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-slate-950 via-slate-950/90 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-slate-950 via-slate-950/90 to-transparent z-10 pointer-events-none" />

          <div className="trust-marquee-track flex gap-4 w-max">
            {marqueePartners.map((partner, i) => (
              <PartnerCard key={`${partner.abbr}-${i}`} partner={partner} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
