import { truncateSync } from "fs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // webpack5: true,
  // webpack: (config, options) => {
  //   config.cache = false;
  //   console.log(process.env.NODE_ENV);
  //   return config;
  // },
  images: {
    // domains: ["k.kakaocdn.net"],
    remotePatterns: [
      {
        protocol: "http",
        hostname:"k.kakaocdn.net",
        port: "",
        pathname: "/dn/**"
      }
    ]
  },
  output: "standalone",
  reactStrictMode: false,
};

export default nextConfig;
