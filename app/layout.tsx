import type { Metadata } from "next";
import { SiteProvider } from "@/src/context/SiteContext";
import SiteChrome from "@/src/components/SiteChrome";
import { buildPageMetadata, SITE_URL } from "@/src/utils/seo";
import "./globals.css";

export const metadata: Metadata = {
  ...buildPageMetadata("home"),
  metadataBase: new URL(SITE_URL),
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen antialiased">
        <SiteProvider>
          <SiteChrome>{children}</SiteChrome>
        </SiteProvider>
      </body>
    </html>
  );
}
