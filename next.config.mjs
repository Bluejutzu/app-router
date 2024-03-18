/**
 * @format
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  images: {
    domains: ["cdn.discordapp.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        pathname: "/a/*",
      },
    ],
  },
};

export default nextConfig;
