"use client";

import React from "react";
import { IOS_APP_URL, ANDROID_APP_URL } from "../config/appLinks";
import { getMarketingTranslation } from "../utils/marketingTranslations";

type AppStoreButtonsProps = {
  language: string;
  layout?: "row" | "stack";
  showNote?: boolean;
  size?: "sm" | "md";
  className?: string;
};

function AppleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42.14-.61.32M15.97 4.17c.66-.81 1.11-1.93.99-3.06-1 .05-2.2.68-2.92 1.5-.63.73-1.18 1.87-1.03 2.98 1.12.09 2.26-.56 2.96-1.42z" />
    </svg>
  );
}

function PlayIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M3 5.27v13.46c0 .87.8 1.43 1.57 1.05l14.22-7.06c.64-.32.64-1.24 0-1.55L4.57 4.22C3.8 3.84 3 4.4 3 5.27z" />
    </svg>
  );
}

/**
 * Official-style store badges that stay readable in light and dark themes.
 * Uses theme CSS variables instead of hard-coded white-on-dark only.
 */
export default function AppStoreButtons({
  language,
  layout = "row",
  showNote = false,
  size = "md",
  className = "",
}: AppStoreButtonsProps) {
  const mt = (key: string) => getMarketingTranslation(key, language);
  const stack = layout === "stack";
  const compact = size === "sm";

  const btnBase =
    "app-store-btn group relative inline-flex items-center gap-3 rounded-xl border transition-all duration-200 " +
    "hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-amber focus-visible:ring-offset-2 " +
    (compact ? "px-3.5 py-2" : "px-4 py-2.5 sm:px-5 sm:py-3");

  const iconClass = compact ? "w-6 h-6 shrink-0" : "w-7 h-7 shrink-0";

  return (
    <div
      className={`${stack ? "flex flex-col gap-2.5 w-full max-w-xs" : "flex flex-wrap gap-3 items-center"} ${className}`}
    >
      <a
        href={IOS_APP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${mt("downloadOn")} ${mt("appleStore")}`}
        className={`${btnBase} ${stack ? "w-full" : ""}`}
      >
        <span className="app-store-btn__icon flex items-center justify-center rounded-lg">
          <AppleIcon className={iconClass} />
        </span>
        <span className="text-left min-w-0 leading-tight">
          <span className="app-store-btn__eyebrow block text-[9px] sm:text-[10px] font-medium tracking-wide uppercase">
            {mt("downloadOn")}
          </span>
          <span className={`app-store-btn__title block font-semibold tracking-tight ${compact ? "text-sm" : "text-sm sm:text-[15px]"}`}>
            {mt("appleStore")}
          </span>
        </span>
      </a>

      <a
        href={ANDROID_APP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${mt("getItOn")} ${mt("playStore")}`}
        className={`${btnBase} ${stack ? "w-full" : ""}`}
      >
        <span className="app-store-btn__icon flex items-center justify-center rounded-lg">
          <PlayIcon className={iconClass} />
        </span>
        <span className="text-left min-w-0 leading-tight">
          <span className="app-store-btn__eyebrow block text-[9px] sm:text-[10px] font-medium tracking-wide uppercase">
            {mt("getItOn")}
          </span>
          <span className={`app-store-btn__title block font-semibold tracking-tight ${compact ? "text-sm" : "text-sm sm:text-[15px]"}`}>
            {mt("playStore")}
          </span>
        </span>
      </a>

      {showNote && (
        <p className="app-store-btn__note text-[10px] sm:text-[11px] font-medium w-full basis-full pt-0.5">
          {mt("downloadHeroNote")}
        </p>
      )}
    </div>
  );
}
