import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.18.153", "*.local"],
  experimental: {
    webpackBuildWorker: false,
  },
  outputFileTracingRoot: process.cwd(),
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
