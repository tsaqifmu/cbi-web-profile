import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cbi-backend.my.id",
      },
    ],
  },
};

export default nextConfig;
