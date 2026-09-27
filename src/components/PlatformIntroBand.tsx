"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight, CheckCircle, MonitorSmartphone } from "lucide-react";
import { getPlatformIntro } from "../content/platformIntroI18n";

/** Soft cinematic presentation for transparent product screenshots */
function PromoVisual({
  src,
  alt,
  width,
  height,
  sizes,
  className = "",
  priority = false,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  sizes: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div className={`relative promo-visual ${className}`}>
      {/* Ambient glow — reads well on dark canvas; softened in light mode via CSS */}
      <div className="promo-visual__glow pointer-events-none absolute inset-[-8%] sm:inset-[-12%]" aria-hidden />
      <div className="relative z-10">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="promo-visual__img w-full h-auto object-contain"
          sizes={sizes}
          priority={priority}
        />
      </div>
    </div>
  );
}

export function PlatformIntroBand({ language }: { language: string }) {
  const router = useRouter();
  const copy = getPlatformIntro(language);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        <div className="lg:col-span-5 space-y-5 text-left">
          <p className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-brand-amber/10 text-brand-amber text-xs font-semibold rounded-full border border-brand-amber/20">
            <MonitorSmartphone size={13} />
            {copy.platformEyebrow}
          </p>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight leading-[1.15]">
            {copy.platformTitle}
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">{copy.platformSubtitle}</p>
          <ul className="space-y-3 pt-1">
            {[copy.platformPoint1, copy.platformPoint2, copy.platformPoint3].map((item) => (
              <li key={item.slice(0, 40)} className="flex gap-2.5 items-start text-sm text-slate-400">
                <CheckCircle size={16} className="text-brand-amber shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-3 pt-2">
            <button
              type="button"
              onClick={() => router.push("/contact")}
              className="px-6 py-3 bg-brand-amber hover:bg-brand-amber/90 text-slate-950 font-bold rounded-xl text-sm transition-all inline-flex items-center gap-2"
            >
              {copy.platformCtaPrimary}
              <ArrowRight size={15} />
            </button>
            <Link
              href="/features"
              className="px-6 py-3 bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-200 font-semibold rounded-xl text-sm transition-all"
            >
              {copy.platformCtaSecondary}
            </Link>
          </div>
        </div>

        <div className="lg:col-span-7">
          <PromoVisual
            src="/images/web-mobile-operations-dashboard.png"
            alt={copy.platformImgAlt}
            width={1704}
            height={1100}
            sizes="(max-width: 1024px) 100vw, 60vw"
          />
        </div>
      </div>
    </section>
  );
}

export function FeaturePromoImage({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <PromoVisual
      src={src}
      alt={alt}
      width={1600}
      height={1000}
      sizes="(max-width: 1024px) 100vw, 55vw"
      className={className}
    />
  );
}
