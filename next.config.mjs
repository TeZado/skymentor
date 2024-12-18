import { hostname } from 'os';

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['images.unsplash.com',"cdn.prod.website-files.com","img.freepik.com"],
      },
};

export default nextConfig;
