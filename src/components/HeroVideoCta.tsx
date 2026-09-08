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
      <section className="relative w-full" aria-label={t("videoCtaAria")}>
        <motion.button
          type="button"
          onClick={openModal}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="group relative block w-full min-h-[72vh] sm:min-h-[80vh] lg:min-h-[88vh] h-[min(960px,90vh)] text-left overflow-hidden bg-slate-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-amber focus-visible:ring-inset cursor-pointer"
        >
          {/* Full-bleed cover image */}
          <Image
            src={VIDEO_THUMBNAIL}
            alt={t("videoCtaAlt")}
            fill
            priority={false}
            sizes="100vw"
            className="object-cover object-center transition-transform duration-[1.1s] ease-out group-hover:scale-[1.035]"
          />

          {/* Very dark overlays — CTA stays sharp and readable */}
          <div className="absolute inset-0 bg-black/75 transition-[background-color] duration-500 group-hover:bg-black/70" aria-hidden />
          <div
            className="absolute inset-0 bg-gradient-to-b from-black/85 via-slate-950/70 to-black/90"
            aria-hidden
          />
          <div
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(15,23,42,0.2)_0%,rgba(0,0,0,0.82)_68%)]"
            aria-hidden
          />

          {/* Soft amber atmosphere */}
          <div
            className="pointer-events-none absolute inset-0 opacity-40 mix-blend-screen"
            aria-hidden
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[58%] w-[min(70vw,520px)] h-[min(70vw,520px)] rounded-full bg-brand-amber/[0.12] blur-[90px]" />
          </div>

          {/* Thin cinematic edge frame */}
          <div
            className="pointer-events-none absolute inset-4 sm:inset-6 lg:inset-8 border border-white/[0.07] rounded-sm opacity-80 group-hover:border-brand-amber/20 transition-colors duration-500"
            aria-hidden
          />

          {/* Content */}
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 sm:px-10 text-center">
            {/* Animated play */}
            <div className="relative mb-7 sm:mb-9">
              <span
                className="absolute inset-0 rounded-full bg-brand-amber/30 animate-ping"
                style={{ animationDuration: "2.6s" }}
                aria-hidden
              />
              <span
                className="absolute -inset-4 sm:-inset-5 rounded-full border border-brand-amber/35 animate-[pulse_2.8s_ease-in-out_infinite]"
                aria-hidden
              />
              <span
                className="absolute -inset-8 sm:-inset-10 rounded-full border border-white/10 group-hover:border-brand-amber/25 transition-colors duration-500"
                aria-hidden
              />
              <span
                className="absolute -inset-12 sm:-inset-14 rounded-full border border-white/[0.04] hidden sm:block"
                aria-hidden
              />
              <span className="relative flex h-[4.5rem] w-[4.5rem] sm:h-24 sm:w-24 items-center justify-center rounded-full bg-gradient-to-br from-brand-amber via-amber-400 to-amber-600 text-slate-950 shadow-[0_0_60px_-4px_rgba(245,158,11,0.85),0_12px_40px_rgba(0,0,0,0.45)] ring-2 ring-white/25 transition-transform duration-400 group-hover:scale-110">
                <Play
                  size={34}
                  className="ml-1 fill-current sm:w-10 sm:h-10 drop-shadow-sm"
                  aria-hidden
                />
              </span>
            </div>

            <p className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.28em] text-brand-amber mb-3">
              {t("videoCtaEyebrow")}
            </p>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl xl:text-[3.25rem] text-white tracking-tight leading-[1.1] max-w-3xl drop-shadow-[0_4px_24px_rgba(0,0,0,0.65)]">
              {t("videoCtaTitle")}
            </h2>
            <p className="mt-4 sm:mt-5 text-sm sm:text-base lg:text-lg text-slate-200/95 max-w-xl leading-relaxed drop-shadow-[0_2px_12px_rgba(0,0,0,0.7)]">
              {t("videoCtaSubtitle")}
            </p>

            <div className="mt-7 sm:mt-8 inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-black/50 backdrop-blur-xl px-5 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-[0_8px_32px_rgba(0,0,0,0.4)] transition-colors duration-300 group-hover:border-brand-amber/40 group-hover:bg-black/55">
              <span className="w-2 h-2 rounded-full bg-brand-amber shadow-[0_0_10px_rgba(245,158,11,0.9)] animate-pulse" aria-hidden />
              {t("videoCtaWatch")}
              <span className="text-white/35">·</span>
              <span className="text-slate-300 font-mono font-medium tracking-wide">{t("videoCtaDuration")}</span>
            </div>
          </div>

          {/* Bottom fade into page */}
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950 to-transparent"
            aria-hidden
          />
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
              className="absolute inset-0 bg-black/90 backdrop-blur-md cursor-pointer"
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
