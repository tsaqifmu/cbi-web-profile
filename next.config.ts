import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    largePageDataBytes: 128 * 1000 * 1000,
  },
  async headers() {
    return [
      {
        source: "/api/media-proxy",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=3600",
          },
        ],
      },
    ];
  },
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
