import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static.tvmaze.com",
      },
    ],
  },
  redirects() {
    return [
      {
        source: "/show/:show",
        destination: "/shows/:show",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
