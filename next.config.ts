import { NextConfig } from 'next';

const config: NextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true
  },
  images: {
    unoptimized: true
  }
};

export default config;
