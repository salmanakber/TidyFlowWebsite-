export type SeoPage =
  | "home"
  | "documentation"
  | "features"
  | "pricing"
  | "integrations"
  | "contact"
  | "personas"
  | "how-it-works";

export interface SeoMeta {
  title: string;
  description: string;
  keywords: string;
  canonicalPath: string;
}
