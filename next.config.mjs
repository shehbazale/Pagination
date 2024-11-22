/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "placeimg.com",
      "unsplash.com",
      "imgur.com",
      "veirdo.in",
      "i.imgur.com"
    ]
    // remotePatterns: [
    //   {
    //     protocol: '*',
    //     hostname: "*",
    //     port: '',
    //     pathname: '/**',
    //   },
    // ],
  },
};

export default nextConfig;
