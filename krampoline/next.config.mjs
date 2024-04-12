import { truncateSync } from "fs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // webpack5: true,
  // webpack: (config, options) => {
  //   config.cache = false;
  //   console.log(process.env.NODE_ENV);
  //   return config;
  // },
  // images: {
  //   domains: [
  //     "avatars.githubusercontent.com", // 기존에 추가된 도메인
  //     "cloudflare-ipfs.com", // 새로 추가될 도메인
  //     "loremflickr.com",
  //   ],
  // },
  output: "standalone",
  reactStrictMode: false,
};

export default nextConfig;
