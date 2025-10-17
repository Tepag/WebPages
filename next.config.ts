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
  // GitHub Pages configuration
  basePath: process.env.NODE_ENV === 'production' ? '/WebPagesRefactor' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/WebPagesRefactor' : '',
};

export default nextConfig;
