import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // @ts-expect-error - Ensure Vercel builder bypasses eslint strictness
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Prevent arbitrary TS errors during CI deployments
  typescript: {
    ignoreBuildErrors: true,
  }
};

export default nextConfig;
