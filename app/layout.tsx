import type { Metadata, Viewport } from "next";
import SiteChrome from "@/src/components/SiteChrome";
import { SiteProvider } from "@/src/context/SiteContext";
import SiteJsonLd from "@/src/components/SiteJsonLd";
import { buildPageMetadata } from "@/src/utils/seo";
import "./globals.css";

export const metadata: Metadata = {
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

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
    { media: "(prefers-color-scheme: light)", color: "#0f172a" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-slate-950 text-slate-100 antialiased">
        <SiteJsonLd />
        <SiteProvider>
          <SiteChrome>{children}</SiteChrome>
        </SiteProvider>
      </body>
    </html>
  );
}
