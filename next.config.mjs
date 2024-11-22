/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
  images: {
    domains: [
      "placeimg.com",
      "unsplash.com",
      "imgur.com",
      "veirdo.in",
      "i.imgur.com"
    ]
  
  },
};

export default nextConfig;
