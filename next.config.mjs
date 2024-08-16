/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
        port: "",
        pathname: "/v0/b/championslogistics-4d112.appspot.com/o/**",
      },
      {
        protocol: 'https',
        hostname: 'champion-logistics.vercel.app',
        port: '',
        pathname: '/_next/image/**',
      },
      // Add more patterns as needed
    ],
  },
};

export default nextConfig;
