import { hostname } from 'os';

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Disables ESLint during the build process
  },
    images: {
        domains: ['images.unsplash.com',"cdn.prod.website-files.com","img.freepik.com"],
      },
};

export default nextConfig;
