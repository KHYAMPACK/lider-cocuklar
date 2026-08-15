import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

// Next 16 CSP guide: 'unsafe-eval' is only needed in development (React error stacks).
// Production omits it unless a runtime CSP violation proves otherwise.
const contentSecurityPolicy = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' blob: data: https://maps.google.com https://www.google.com https://maps.gstatic.com https://*.gstatic.com https://*.googleapis.com",
  "font-src 'self'",
  "connect-src 'self' https://maps.google.com https://www.google.com https://maps.gstatic.com https://*.gstatic.com https://*.googleapis.com",
  "frame-src https://maps.google.com https://www.google.com",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: contentSecurityPolicy },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
  { key: "X-Frame-Options", value: "DENY" },
];

if (process.env.VERCEL_ENV && process.env.VERCEL_ENV !== "production") {
  securityHeaders.push({
    key: "X-Robots-Tag",
    value: "noindex, nofollow",
  });
}

const nextConfig: NextConfig = {
  reactCompiler: true,
  poweredByHeader: false,
  turbopack: {
    root: process.cwd(),
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
