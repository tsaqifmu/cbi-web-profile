import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "213.210.21.45",
        port: "9337",
      },
    ],
  },
};

export default nextConfig;
