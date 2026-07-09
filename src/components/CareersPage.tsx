"use client";

import { useEffect, useState } from "react";
import { Briefcase, Send } from "lucide-react";
import TurnstileWidget from "./TurnstileWidget";
import { SITE_URL } from "@/src/utils/seo";
import { useSite } from "../context/SiteContext";
import { getMarketingTranslation } from "../utils/marketingTranslations";

type CareerForm = {
  fullName: string;
  email: string;
  phone: string;
  role: string;
  location: string;
  experience: string;
  cvLink: string;
  message: string;
  website: string;
};

type CareersConfig = {
  configured: boolean;
  turnstileSiteKey?: string | null;
};

const OPEN_ROLES = [
  {
    title: "Operations Manager (Cleaning SaaS)",
    description:
      "Own onboarding playbooks, rollout execution, and customer outcomes for cleaning companies using TidyFlow.",
    employmentType: "FULL_TIME",
    locationType: "TELECOMMUTE",
    country: "GB",
  },
  {
    title: "Customer Success Specialist",
    description:
      "Help operations managers and field teams adopt TidyFlow faster with training, support, and workflow optimization.",
    employmentType: "FULL_TIME",
    locationType: "TELECOMMUTE",
    country: "GB",
  },
  {
    title: "Frontend Engineer (React/Next.js)",
    description:
      "Build high-performance product experiences for web and mobile-adjacent operations workflows.",
    employmentType: "FULL_TIME",
    locationType: "TELECOMMUTE",
    country: "GB",
  },
];

const CAREERS_FAQS = [
  {
    question: "Do you hire remotely?",
    answer:
      "Yes. TidyFlow is remote-first and hires across multiple time zones where collaboration overlap is possible.",
  },
  {
    question: "What is the hiring process?",
    answer:
      "Our process typically includes application review, a role-specific interview, and a final culture/ownership discussion.",
  },
  {
    question: "Do I need cleaning industry experience?",
    answer:
      "It helps but is not required for every role. We value strong execution, communication, and customer empathy.",
  },
];

export default function CareersPage() {
  const { language } = useSite();
  const mt = (key: string) => getMarketingTranslation(key, language);
  const [formData, setFormData] = useState<CareerForm>({
    fullName: "",
    email: "",
    phone: "",
    role: "Operations Manager",
    location: "",
    experience: "",
    cvLink: "",
    message: "",
    website: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const [turnstileKey, setTurnstileKey] = useState(0);
  const [config, setConfig] = useState<CareersConfig | null>(null);

  useEffect(() => {
    fetch("/api/careers/config")
      .then((res) => res.json())
      .then(setConfig)
      .catch(() => setConfig({ configured: false }));
  }, []);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setIsSending(true);

    const needsCaptcha = Boolean(config?.turnstileSiteKey);
    if (needsCaptcha && !turnstileToken) {
      setError(mt("careersSpamRequired"));
      setIsSending(false);
      return;
    }

    try {
      const res = await fetch("/api/careers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, turnstileToken }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || `Server error ${res.status}`);
      setSubmitted(true);
    } catch (err: any) {
      setError(err.message || mt("careersSubmitFailed"));
      setTurnstileToken(null);
      setTurnstileKey((k) => k + 1);
    } finally {
      setIsSending(false);
    }
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: CAREERS_FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const jobPostingSchema = {
    "@context": "https://schema.org",
    "@graph": OPEN_ROLES.map((role) => ({
      "@type": "JobPosting",
      title: role.title,
      description: role.description,
      employmentType: role.employmentType,
      datePosted: "2026-07-09",
      validThrough: "2026-12-31T23:59",
      hiringOrganization: {
        "@type": "Organization",
        name: "TidyFlow",
        sameAs: SITE_URL,
        logo: `${SITE_URL}/logo.png`,
      },
      jobLocationType: role.locationType,
      applicantLocationRequirements: {
        "@type": "Country",
        name: role.country,
      },
      directApply: true,
      url: `${SITE_URL}/careers`,
    })),
  };

  return (
    <div className="pt-28 pb-20 min-h-screen bg-slate-950 text-slate-100">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-amber/15 border border-brand-amber/25 text-brand-amber text-xs font-semibold">
              <Briefcase size={14} />
              {mt("careersBadge")}
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold leading-tight">
              {mt("careersTitle")}
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {mt("careersSubtitle")}
            </p>
            <ul className="text-slate-300 text-sm space-y-3">
              <li>- {mt("careersPoint1")}</li>
              <li>- {mt("careersPoint2")}</li>
              <li>- {mt("careersPoint3")}</li>
            </ul>
          </div>

          <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 sm:p-8">
            {!submitted ? (
              <form onSubmit={onSubmit} className="space-y-4">
                <div className="absolute -left-[9999px] top-0 h-0 w-0 overflow-hidden opacity-0" aria-hidden="true">
                  <label htmlFor="career-website">Website</label>
                  <input
                    id="career-website"
                    type="text"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    value={formData.website}
                    onChange={(e) => setFormData((p) => ({ ...p, website: e.target.value }))}
                  />
                </div>

                {error && (
                  <div className="p-3 rounded-xl bg-rose-950/40 border border-rose-900/50 text-rose-300 text-sm">
                    {error}
                  </div>
                )}

                {!config?.configured && config !== null && (
                  <div className="p-3 rounded-xl bg-amber-950/30 border border-amber-900/40 text-amber-200 text-sm">
                    {mt("careersEmailNotConfigured")}
                  </div>
                )}

                <input
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData((p) => ({ ...p, fullName: e.target.value }))}
                  placeholder={mt("careersFullName")}
                  className="w-full p-3.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-brand-amber outline-none"
                />
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
                  placeholder={mt("careersWorkEmail")}
                  className="w-full p-3.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-brand-amber outline-none"
                />
                <input
                  value={formData.phone}
                  onChange={(e) => setFormData((p) => ({ ...p, phone: e.target.value }))}
                  placeholder={mt("careersPhone")}
                  className="w-full p-3.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-brand-amber outline-none"
                />
                <select
                  value={formData.role}
                  onChange={(e) => setFormData((p) => ({ ...p, role: e.target.value }))}
                  className="w-full p-3.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-brand-amber outline-none"
                >
                  <option>Operations Manager</option>
                  <option>Customer Success Specialist</option>
                  <option>Sales / Partnerships</option>
                  <option>Frontend Engineer</option>
                  <option>Backend Engineer</option>
                  <option>Other</option>
                </select>
                <input
                  value={formData.location}
                  onChange={(e) => setFormData((p) => ({ ...p, location: e.target.value }))}
                  placeholder={mt("careersLocation")}
                  className="w-full p-3.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-brand-amber outline-none"
                />
                <input
                  value={formData.experience}
                  onChange={(e) => setFormData((p) => ({ ...p, experience: e.target.value }))}
                  placeholder={mt("careersExperience")}
                  className="w-full p-3.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-brand-amber outline-none"
                />
                <input
                  value={formData.cvLink}
                  onChange={(e) => setFormData((p) => ({ ...p, cvLink: e.target.value }))}
                  placeholder={mt("careersCv")}
                  className="w-full p-3.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-brand-amber outline-none"
                />
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData((p) => ({ ...p, message: e.target.value }))}
                  placeholder={mt("careersMessage")}
                  className="w-full p-3.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-brand-amber outline-none h-28"
                />

                {config?.turnstileSiteKey && (
                  <div className="space-y-2">
                    <TurnstileWidget
                      key={turnstileKey}
                      siteKey={config.turnstileSiteKey}
                      onToken={setTurnstileToken}
                    />
                    <p className="text-[10px] text-slate-500 text-center">{mt("careersSpamProtectedBy")}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSending || (Boolean(config?.turnstileSiteKey) && !turnstileToken)}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl bg-brand-amber text-slate-950 font-bold disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <Send size={14} />
                  {isSending ? mt("careersSubmitting") : mt("careersSubmit")}
                </button>
              </form>
            ) : (
              <div className="text-center py-12 space-y-4">
                <h2 className="text-2xl font-bold text-white">{mt("careersSuccessTitle")}</h2>
                <p className="text-slate-300">
                  {mt("careersSuccessDesc")}
                </p>
                <button
                  type="button"
                  className="px-5 py-2.5 rounded-lg border border-slate-700 text-slate-200 hover:bg-slate-800"
                  onClick={() => {
                    setSubmitted(false);
                    setError(null);
                  }}
                >
                  {mt("careersSubmitAnother")}
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingSchema) }}
      />
    </div>
  );
}
