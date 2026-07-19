import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  outputFileTracingRoot: path.join(__dirname),
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: false },
  images: {
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
  async redirects() {
    return [
      {
        source: "/blog/cleaning-company-software-buying-guide-2026",
        destination: "/blog/cleaning-software-buying-guide",
        permanent: true,
      },
      {
        source: "/blog/reduce-no-shows-with-geofenced-clock-ins",
        destination: "/blog/geofenced-clock-ins",
        permanent: true,
      },
      {
        source: "/blog/google-sheets-to-cleaning-operations-system",
        destination: "/blog/sheets-to-operations",
        permanent: true,
      },
      {
        source: "/blog/cleaning-company-kpis-that-actually-matter",
        destination: "/blog/cleaning-company-kpis",
        permanent: true,
      },
      {
        source: "/blog/how-to-scale-commercial-cleaning-company",
        destination: "/blog/scale-commercial-cleaning",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
      {
        source: "/sitemap.xml",
        headers: [{ key: "Cache-Control", value: "public, max-age=3600, s-maxage=86400" }],
      },
      {
        source: "/llms.txt",
        headers: [{ key: "Cache-Control", value: "public, max-age=3600, s-maxage=86400" }],
      },
      {
        source: "/og-image.png",
        headers: [{ key: "Cache-Control", value: "public, max-age=86400, immutable" }],
      },
    ];
  },
};

export default nextConfig;
