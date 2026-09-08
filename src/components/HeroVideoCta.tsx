"use client";

import React, { useCallback, useEffect, useId, useState } from "react";
import Image from "next/image";
import { Play, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { getMarketingTranslation } from "../utils/marketingTranslations";

export const TIDYFLOW_DEMO_VIDEO_ID = "6-BmD8CsnZo";
export const TIDYFLOW_DEMO_VIDEO_URL = `https://youtu.be/${TIDYFLOW_DEMO_VIDEO_ID}`;

const VIDEO_THUMBNAIL = "/video-thumbnail.png";

type HeroVideoCtaProps = {
  language: string;
};

export default function HeroVideoCta({ language }: HeroVideoCtaProps) {
  const [open, setOpen] = useState(false);
  const titleId = useId();
  const t = (key: string) => getMarketingTranslation(key, language);

  const close = useCallback(() => setOpen(false), []);
  const openModal = useCallback(() => setOpen(true), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close]);

  return (
    <>
      <section className="w-full" aria-label={t("videoCtaAria")}>
        <motion.button
          type="button"
          onClick={openModal}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ scale: 1.008 }}
          whileTap={{ scale: 0.992 }}
          className="group relative w-full text-left overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 bg-slate-950 shadow-[0_24px_80px_-32px_rgba(0,0,0,0.85)] focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-amber focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 cursor-pointer"
        >
          {/* Thumbnail */}
          <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full">
            <Image
              src={VIDEO_THUMBNAIL}
              alt={t("videoCtaAlt")}
              fill
              priority={false}
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-cover object-center scale-[1.01] transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            />

            {/* Sharp, low-opacity dark veil — keeps image detail */}
            <div
              className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-slate-950/25 to-slate-950/15 transition-opacity duration-500 group-hover:from-slate-950/50 group-hover:via-slate-950/20"
              aria-hidden
            />
            <div
              className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(2,6,23,0.35)_100%)]"
              aria-hidden
            />

            {/* Amber edge glow */}
            <div
              className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              aria-hidden
            >
              <div className="absolute inset-0 ring-1 ring-inset ring-brand-amber/25 rounded-2xl sm:rounded-3xl" />
              <div className="absolute -inset-px bg-[radial-gradient(circle_at_30%_40%,rgba(245,158,11,0.12),transparent_45%)]" />
            </div>

            {/* Content overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center px-5 sm:px-8 text-center">
              {/* Animated play control */}
              <div className="relative mb-5 sm:mb-6">
                <span
                  className="absolute inset-0 rounded-full bg-brand-amber/25 animate-ping opacity-40"
                  style={{ animationDuration: "2.4s" }}
                  aria-hidden
                />
                <span
                  className="absolute -inset-3 rounded-full border border-brand-amber/30 animate-[pulse_2.8s_ease-in-out_infinite]"
                  aria-hidden
                />
                <span
                  className="absolute -inset-6 rounded-full border border-white/10 opacity-70 group-hover:border-brand-amber/20 transition-colors"
                  aria-hidden
                />
                <span className="relative flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-gradient-to-br from-brand-amber via-amber-400 to-amber-600 text-slate-950 shadow-[0_0_40px_-6px_rgba(245,158,11,0.75)] ring-1 ring-white/30 transition-transform duration-300 group-hover:scale-105">
                  <Play size={28} className="ml-0.5 fill-current sm:w-8 sm:h-8" aria-hidden />
                </span>
              </div>

              <p className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.22em] text-brand-amber/95 mb-2 drop-shadow-sm">
                {t("videoCtaEyebrow")}
              </p>
              <h2 className="font-display font-extrabold text-xl sm:text-2xl lg:text-3xl text-white tracking-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)] max-w-xl">
                {t("videoCtaTitle")}
              </h2>
              <p className="mt-2 sm:mt-2.5 text-xs sm:text-sm text-slate-200/90 max-w-md leading-relaxed drop-shadow-sm">
                {t("videoCtaSubtitle")}
              </p>

              <div className="mt-4 sm:mt-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-slate-950/45 backdrop-blur-md px-3.5 py-1.5 text-[11px] sm:text-xs font-semibold text-slate-100">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-amber animate-pulse" aria-hidden />
                {t("videoCtaWatch")}
                <span className="text-slate-500">·</span>
                <span className="text-slate-300 font-mono font-medium">{t("videoCtaDuration")}</span>
              </div>
            </div>
          </div>
        </motion.button>
      </section>

      {/* Video modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
          >
            <button
              type="button"
              className="absolute inset-0 bg-slate-950/85 backdrop-blur-md cursor-pointer"
              aria-label={t("videoCtaClose")}
              onClick={close}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 8 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 w-full max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-slate-950 shadow-[0_40px_120px_-20px_rgba(0,0,0,0.9)]"
            >
              <div className="flex items-center justify-between gap-3 border-b border-white/8 px-4 sm:px-5 py-3 bg-slate-900/80">
                <div className="min-w-0">
                  <p id={titleId} className="font-display font-bold text-sm sm:text-base text-white truncate">
                    {t("videoCtaTitle")}
                  </p>
                  <p className="text-[11px] text-slate-400 truncate">{t("videoCtaSubtitle")}</p>
                </div>
                <button
                  type="button"
                  onClick={close}
                  className="shrink-0 inline-flex h-9 w-9 items-center justify-center rounded-xl border border-slate-700 bg-slate-900 text-slate-300 hover:text-white hover:border-slate-500 transition-colors cursor-pointer"
                  aria-label={t("videoCtaClose")}
                >
                  <X size={16} />
                </button>
              </div>

              <div className="relative aspect-video w-full bg-black">
                <iframe
                  title={t("videoCtaTitle")}
                  src={`https://www.youtube.com/embed/${TIDYFLOW_DEMO_VIDEO_ID}?autoplay=1&rel=0&modestbranding=1`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
