import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Compress responses for faster mobile load
  compress: true,

  // Optimize images
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000, // 1 year
  },

  // Performance headers
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          // Cache static assets aggressively
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
      {
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

  // Optimize for production
  poweredByHeader: false,
};

export default nextConfig;
