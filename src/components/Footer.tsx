"use client";

import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import { Mail, Globe, Shield, Scale, ChevronRight, Linkedin } from "lucide-react";
import { getMarketingTranslation } from "../utils/marketingTranslations";
import {
  IOS_APP_URL,
  ANDROID_APP_URL,
  LINKEDIN_URL,
  FACEBOOK_URL,
} from "../config/appLinks";

interface FooterProps {
  language: string;
}

function FacebookIcon({ size = 14 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M24 12.073C24 5.404 18.627 0 12 0S0 5.404 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.513c-1.491 0-1.956.928-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
    </svg>
  );
}

export default function Footer({ language }: FooterProps) {
  const getT = (key: string) => getMarketingTranslation(key, language);

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 pt-20 pb-10 text-left relative overflow-hidden">
      {/* Soft background glow */}
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[250px] bg-brand-amber/[0.01] rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 border-b border-slate-900 pb-16 mb-12">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="cursor-pointer inline-block transition-transform hover:scale-[1.01]">
              <Logo size={44} />
            </Link>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              {getT("footerDesc")}
            </p>
            <div className="space-y-3 pt-2 text-xs">
              {/* Replaced Physical HQ with Cloud-First Operations */}
              <div className="flex items-center gap-2.5">
                <Globe size={13} className="text-brand-amber animate-pulse" />
                <span>{getT("footerCloudOps")}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={13} className="text-brand-amber" />
                <a href="mailto:tidyflaw@gmail.com" className="hover:text-white transition-colors">
                  tidyflaw@gmail.com
                </a>
              </div>
            </div>
            <div className="pt-1 space-y-2">
              <p className="text-[10px] font-mono uppercase tracking-widest text-slate-500">
                {getT("followUs")}
              </p>
              <div className="flex items-center gap-2.5">
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer me"
                  aria-label="TidyFlow on LinkedIn"
                  className="inline-flex items-center justify-center w-9 h-9 rounded-xl border border-slate-800 bg-slate-900/60 text-slate-300 hover:text-[#0A66C2] hover:border-slate-700 transition-colors"
                >
                  <Linkedin size={15} />
                </a>
                <a
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer me"
                  aria-label="TidyFlow on Facebook (@tidyflowapp)"
                  className="inline-flex items-center justify-center w-9 h-9 rounded-xl border border-slate-800 bg-slate-900/60 text-slate-300 hover:text-[#1877F2] hover:border-slate-700 transition-colors"
                >
                  <FacebookIcon size={15} />
                </a>
              </div>
            </div>
          </div>

          {/* Product Links */}
          <div className="space-y-4">
            <h4 className="font-display font-bold text-xs text-slate-100 uppercase tracking-widest border-l-2 border-brand-amber pl-2.5">
              {getT("sitemapPages")}
            </h4>
            <div className="flex flex-col gap-3 text-xs sm:text-sm">
              <Link href="/" className="hover:text-brand-amber transition-colors">{getT("footerHome")}</Link>
              <Link href="/features" className="hover:text-brand-amber transition-colors">{getT("footerFeatures")}</Link>
              <Link href="/whats-new" className="hover:text-brand-amber transition-colors">{getT("footerWhatsNew")}</Link>
              <Link href="/pricing" className="hover:text-brand-amber transition-colors">{getT("footerPricing")}</Link>
              <Link href="/how-it-works" className="hover:text-brand-amber transition-colors">{getT("footerHowItWorks")}</Link>
              <Link href="/contact" className="hover:text-brand-amber transition-colors">{getT("footerContactDemo")}</Link>
              <Link href="/careers" className="hover:text-brand-amber transition-colors">{getT("footerCareers")}</Link>
              <Link href="/blog" className="hover:text-brand-amber transition-colors">{getT("footerBlog")}</Link>
            </div>
          </div>

          {/* Persona Pages */}
          <div className="space-y-4">
            <h4 className="font-display font-bold text-xs text-slate-100 uppercase tracking-widest border-l-2 border-brand-amber pl-2.5">
              {getT("whoItsFor")}
            </h4>
            <div className="flex flex-col gap-3 text-xs sm:text-sm">
              <Link href="/personas" className="hover:text-brand-amber transition-colors">{getT("ownersLabel")}</Link>
              <Link href="/personas" className="hover:text-brand-amber transition-colors">{getT("managersLabel")}</Link>
              <Link href="/personas" className="hover:text-brand-amber transition-colors">{getT("cleanersLabel")}</Link>
              <Link href="/documentation" className="text-brand-amber hover:text-white transition-colors flex items-center gap-1 font-semibold">
                {getT("docPortalLink")} <ChevronRight size={11} />
              </Link>
            </div>
          </div>

          {/* App Download Stores (Improved high-fidelity UI) */}
          <div className="space-y-4">
            <h4 className="font-display font-bold text-xs text-slate-100 uppercase tracking-widest border-l-2 border-brand-amber pl-2.5">
              {getT("downloadApp")}
            </h4>
            <p className="text-[11px] text-slate-400">
              {getT("minimumOS")}
            </p>
            <div className="space-y-3 pt-2">
              {/* Apple Store Button */}
              <a
                href={IOS_APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-2.5 bg-slate-900 hover:bg-slate-850 border border-slate-800 rounded-xl transition-all hover:border-slate-700 hover:translate-y-[-1px] group shadow-sm"
              >
                <svg className="w-5 h-5 text-white fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42.14-.61.32M15.97 4.17c.66-.81 1.11-1.93.99-3.06-1 .05-2.2.68-2.92 1.5-.63.73-1.18 1.87-1.03 2.98 1.12.09 2.26-.56 2.96-1.42z" />
                </svg>
                <div className="text-left font-sans">
                  <span className="block text-[8px] uppercase tracking-wider font-mono text-slate-450 leading-none">{getT("downloadOn")}</span>
                  <span className="font-bold text-xs sm:text-sm text-white group-hover:text-brand-amber transition-colors">{getT("appleStore")}</span>
                </div>
              </a>

              {/* Google Play Store Button */}
              <a
                href={ANDROID_APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-2.5 bg-slate-900 hover:bg-slate-850 border border-slate-800 rounded-xl transition-all hover:border-slate-700 hover:translate-y-[-1px] group shadow-sm"
              >
                <svg className="w-5 h-5 text-white fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M3 5.27v13.46c0 .87.8 1.43 1.57 1.05l14.22-7.06c.64-.32.64-1.24 0-1.55L4.57 4.22C3.8 3.84 3 4.4 3 5.27zm1.5 2l11.11 4.73-11.11 4.73V7.27z" />
                </svg>
                <div className="text-left font-sans">
                  <span className="block text-[8px] uppercase tracking-wider font-mono text-slate-450 leading-none">{getT("getItOn")}</span>
                  <span className="font-bold text-xs sm:text-sm text-white group-hover:text-brand-amber transition-colors">{getT("playStore")}</span>
                </div>
              </a>
            </div>
          </div>

        </div>

        {/* Footer Base bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-xs gap-4 text-slate-500 font-mono">
          <div>
            &copy; {new Date().getFullYear()} {getT("copyright")}
          </div>
          <div className="flex items-center gap-6">
            <button className="hover:text-slate-350 flex items-center gap-1.5 cursor-pointer transition-colors focus:outline-none"
            onClick={() => {
              window.open('https://app.tidyflowapp.com/privacy', '_blank');
            }}
            >
              <Shield size={12} /> {getT("privacyPolicy")}
            </button>
            <button className="hover:text-slate-350 flex items-center gap-1.5 cursor-pointer transition-colors focus:outline-none"
            onClick={() => {
              window.open('https://app.tidyflowapp.com/terms', '_blank');
            }}
            >
              <Scale size={12} /> {getT("termsOfService")}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
