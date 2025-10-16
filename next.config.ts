import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  poweredByHeader: false,
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Ensure proper static export
  distDir: 'out',
  assetPrefix: '',
};

export default nextConfig;
