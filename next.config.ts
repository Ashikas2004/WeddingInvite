import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,

  allowedDevOrigins: [
    '10.183.148.37',
  ],

  images: {
    unoptimized: true,
  },
};

export default nextConfig;