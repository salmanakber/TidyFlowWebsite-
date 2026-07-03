import React from "react";
import Logo from "./Logo";
import { Mail, Phone, MapPin, Globe, Shield, Scale, ChevronRight } from "lucide-react";
import { getMarketingTranslation } from "../utils/marketingTranslations";

interface FooterProps {
  setMarketingPage: (page: string) => void;
  setActiveTab: (tab: "marketing" | "documentation") => void;
  language: string;
}

export default function Footer({ setMarketingPage, setActiveTab, language }: FooterProps) {
  const navigateTo = (pageId: string) => {
    setActiveTab("marketing");
    setMarketingPage(pageId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openDoc = () => {
    setActiveTab("documentation");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const getT = (key: string) => getMarketingTranslation(key, language);

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 pt-16 pb-8 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 border-b border-slate-900 pb-12 mb-10">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="cursor-pointer inline-block" onClick={() => navigateTo("home")}>
              <Logo size={42} />
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              {getT("footerDesc")}
            </p>
            <div className="space-y-2.5 pt-2 text-xs">
              <div className="flex items-center gap-2.5">
                <MapPin size={13} className="text-brand-amber" />
                <span>{getT("hqLocation")}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={13} className="text-brand-amber" />
                <span>support@tidyflowapp.com</span>
              </div>
            </div>
          </div>

          {/* Product Links */}
          <div className="space-y-4">
            <h4 className="font-display font-bold text-xs text-slate-100 uppercase tracking-widest">
              {getT("sitemapPages")}
            </h4>
            <div className="flex flex-col gap-2.5 text-xs">
              <button onClick={() => navigateTo("home")} className="hover:text-brand-amber cursor-pointer transition-colors text-left">{language === "ar" ? "الرئيسية" : "Home"}</button>
              <button onClick={() => navigateTo("features")} className="hover:text-brand-amber cursor-pointer transition-colors text-left">{language === "ar" ? "الميزات الكاملة" : "Full Features"}</button>
              <button onClick={() => navigateTo("pricing")} className="hover:text-brand-amber cursor-pointer transition-colors text-left">{language === "ar" ? "الأسعار والخطط" : "Plans & Pricing"}</button>
              <button onClick={() => navigateTo("how-it-works")} className="hover:text-brand-amber cursor-pointer transition-colors text-left">{language === "ar" ? "آلية العمل" : "How It Works"}</button>
              <button onClick={() => navigateTo("contact")} className="hover:text-brand-amber cursor-pointer transition-colors text-left">{language === "ar" ? "طلب نسخة تجريبية" : "Request Demo"}</button>
            </div>
          </div>

          {/* Persona Pages */}
          <div className="space-y-4">
            <h4 className="font-display font-bold text-xs text-slate-100 uppercase tracking-widest">
              {getT("whoItsFor")}
            </h4>
            <div className="flex flex-col gap-2.5 text-xs">
              <button onClick={() => navigateTo("personas")} className="hover:text-brand-amber cursor-pointer transition-colors text-left">{getT("ownersLabel")}</button>
              <button onClick={() => navigateTo("personas")} className="hover:text-brand-amber cursor-pointer transition-colors text-left">{getT("managersLabel")}</button>
              <button onClick={() => navigateTo("personas")} className="hover:text-brand-amber cursor-pointer transition-colors text-left">{getT("cleanersLabel")}</button>
              <button onClick={openDoc} className="text-brand-amber hover:underline cursor-pointer transition-all text-left flex items-center gap-1">
                {getT("docPortalLink")} <ChevronRight size={11} />
              </button>
            </div>
          </div>

          {/* App Download Stores */}
          <div className="space-y-4">
            <h4 className="font-display font-bold text-xs text-slate-100 uppercase tracking-widest">
              {getT("downloadApp")}
            </h4>
            <p className="text-[11px] text-slate-400">
              {getT("minimumOS")}
            </p>
            <div className="space-y-2.5 pt-2">
              <a
                href="#appstore"
                className="block p-2 bg-slate-900 hover:bg-slate-850 border border-slate-800 rounded-lg text-center transition-colors"
                onClick={(e) => e.preventDefault()}
              >
                <span className="block text-[8px] uppercase tracking-widest font-mono text-slate-400">{getT("downloadOn")}</span>
                <span className="font-bold text-xs text-white">{getT("appleStore")}</span>
              </a>
              <a
                href="#playstore"
                className="block p-2 bg-slate-900 hover:bg-slate-850 border border-slate-800 rounded-lg text-center transition-colors"
                onClick={(e) => e.preventDefault()}
              >
                <span className="block text-[8px] uppercase tracking-widest font-mono text-slate-400">{getT("getItOn")}</span>
                <span className="font-bold text-xs text-white">{getT("playStore")}</span>
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
            <button className="hover:text-slate-300 flex items-center gap-1 cursor-pointer"><Shield size={12} /> {getT("privacyPolicy")}</button>
            <button className="hover:text-slate-300 flex items-center gap-1 cursor-pointer"><Scale size={12} /> {getT("termsOfService")}</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
