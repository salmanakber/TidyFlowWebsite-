export type SeoLandingSlug =
  | "cleaning-company-software"
  | "cleaning-management-software"
  | "janitorial-software"
  | "commercial-cleaning-software"
  | "cleaning-scheduling-software"
  | "cleaning-payroll-software"
  | "cleaning-inspection-software"
  | "cleaning-time-tracking-software"
  | "offline-cleaning-software"
  | "cleaning-business-software";

export type SeoLandingFeature = {
  title: string;
  description: string;
  benefit: string;
  linkHref: string;
  linkLabel: string;
};

export type SeoLandingStep = {
  title: string;
  description: string;
};

export type SeoLandingUseCase = {
  title: string;
  description: string;
};

export type SeoLandingFaq = { q: string; a: string };

export type SeoLandingCopy = {
  seoTitle: string;
  seoDescription: string;
  keywords: string;
  eyebrow: string;
  h1: string;
  heroSubtitle: string;
  problems: { title: string; items: string[] };
  solution: { title: string; paragraphs: string[] };
  features: SeoLandingFeature[];
  howItWorks: { title: string; steps: SeoLandingStep[] };
  useCases: { title: string; items: SeoLandingUseCase[] };
  faqs: SeoLandingFaq[];
  navLabel: string;
};

export type SeoLandingUi = {
  ctaTrial: string;
  ctaPricing: string;
  ctaFeatures: string;
  problemsLabel: string;
  solutionLabel: string;
  featuresLabel: string;
  howItWorksLabel: string;
  useCasesLabel: string;
  faqLabel: string;
  relatedSolutions: string;
  pillarLink: string;
  learnMore: string;
  trustEyebrow: string;
  trustTitle: string;
  trustBullets: string[];
};

export type SeoLandingDefinition = {
  slug: SeoLandingSlug;
  icon: string;
  isPillar?: boolean;
  targetKeyword: string;
  related: SeoLandingSlug[];
};
