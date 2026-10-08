import type { NextConfig } from 'next';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

const nextConfig: NextConfig = {
  output: 'export',
  basePath,
  trailingSlash: true,

  allowedDevOrigins: [
    '10.183.148.37',
  ],

  images: {
    unoptimized: true,
  },
};

export default nextConfig;