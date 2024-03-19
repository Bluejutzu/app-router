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
      {
        protocol: "https",
        hostname: "github.githubassets.com",
        port: "",
        pathname: "/assets/*",
      },
    ],
  },
};

export default nextConfig;
