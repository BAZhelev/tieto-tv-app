import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
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
