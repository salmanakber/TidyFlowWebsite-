"use client";

import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import { Mail, Globe, Shield, Scale, ChevronRight, Linkedin } from "lucide-react";
import { getMarketingTranslation } from "../utils/marketingTranslations";
import {
  LINKEDIN_URL,
  FACEBOOK_URL,
} from "../config/appLinks";
import { getSeoLandingNavLabel } from "../content/seoLandings";
import AppStoreButtons from "./AppStoreButtons";

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
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 pt-12 sm:pt-16 lg:pt-20 pb-8 sm:pb-10 text-left relative overflow-hidden">
      {/* Soft background glow */}
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[250px] bg-brand-amber/[0.01] rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-6 gap-8 sm:gap-10 lg:gap-12 border-b border-slate-900 pb-10 sm:pb-16 mb-8 sm:mb-12">
          
          {/* Brand Info */}
          <div className="col-span-2 space-y-4 sm:space-y-5">
            <Link href="/" className="cursor-pointer inline-block transition-transform hover:scale-[1.01]">
              <Logo size={36} />
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

          {/* Solutions — SEO landing pages */}
          <div className="space-y-4">
            <h4 className="font-display font-bold text-xs text-slate-100 uppercase tracking-widest border-l-2 border-brand-amber pl-2.5">
              {getT("footerSolutions")}
            </h4>
            <div className="flex flex-col gap-3 text-xs sm:text-sm">
              <Link href="/cleaning-company-software" className="hover:text-brand-amber transition-colors">
                {getSeoLandingNavLabel("cleaning-company-software", language)}
              </Link>
              <Link href="/janitorial-software" className="hover:text-brand-amber transition-colors">
                {getSeoLandingNavLabel("janitorial-software", language)}
              </Link>
              <Link href="/commercial-cleaning-software" className="hover:text-brand-amber transition-colors">
                {getSeoLandingNavLabel("commercial-cleaning-software", language)}
              </Link>
              <Link href="/cleaning-scheduling-software" className="hover:text-brand-amber transition-colors">
                {getSeoLandingNavLabel("cleaning-scheduling-software", language)}
              </Link>
              <Link href="/cleaning-payroll-software" className="hover:text-brand-amber transition-colors">
                {getSeoLandingNavLabel("cleaning-payroll-software", language)}
              </Link>
              <Link href="/cleaning-inspection-software" className="hover:text-brand-amber transition-colors">
                {getSeoLandingNavLabel("cleaning-inspection-software", language)}
              </Link>
              <Link href="/offline-cleaning-software" className="hover:text-brand-amber transition-colors">
                {getSeoLandingNavLabel("offline-cleaning-software", language)}
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
            <div className="pt-1">
              <AppStoreButtons language={language} layout="stack" size="sm" />
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
