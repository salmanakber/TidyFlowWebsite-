import type { Metadata, Viewport } from "next";
import { cookies, headers } from "next/headers";
import SiteChrome from "@/src/components/SiteChrome";
import { SiteProvider } from "@/src/context/SiteContext";
import SiteJsonLd from "@/src/components/SiteJsonLd";
import { buildPageMetadata, getHtmlLang, resolveSeoLanguage } from "@/src/utils/seo";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  return {
    ...buildPageMetadata("home", "en", { includeSiteVerification: true }),
    icons: {
      icon: [
        { url: "/logo.png", type: "image/png" },
        { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      ],
      apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
      shortcut: "/logo.png",
    },
    manifest: "/manifest.json",
    appleWebApp: {
      capable: true,
      title: "TidyFlow",
      statusBarStyle: "black-translucent",
    },
  };
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
    { media: "(prefers-color-scheme: light)", color: "#0f172a" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const headerStore = await headers();
  const cookieStore = await cookies();
  const language = resolveSeoLanguage(
    headerStore.get("x-tidyflow-lang") || cookieStore.get("tidyflow_language")?.value
  );

  return (
    <html lang={getHtmlLang(language)} suppressHydrationWarning>
      <body className="min-h-screen antialiased">
        <SiteJsonLd />
        <SiteProvider initialLanguage={language}>
          <SiteChrome>{children}</SiteChrome>
        </SiteProvider>
      </body>
    </html>
  );
}
