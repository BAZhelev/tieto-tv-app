"use client";

import dynamic from "next/dynamic";

const Banner = dynamic(
  import("./Banner").then((mod) => mod.NetworkBanner),
  { ssr: false },
);

export function NetworkBanner() {
  return <Banner />;
}
