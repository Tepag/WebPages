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
  assetPrefix: process.env.NODE_ENV === 'production' ? '/WebPagesRefactor' : '',
  // Add base path for GitHub Pages subdirectory deployment
  basePath: process.env.NODE_ENV === 'production' ? '/WebPagesRefactor' : '',
};

export default nextConfig;
