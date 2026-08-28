import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Heading } from "@/components/atoms";
import { PageLayout } from "@/components/molecules";
import { NetworkBanner } from "@/components/NetworkBanner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tieto TV App",
  description: "Browse your favorite TV shows",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <NetworkBanner />
        <PageLayout
          headerClassName="flex justify-center py-6"
          header={
            <Heading className="text-6xl">
              <Link href={"/"}>Tieto TV App</Link>
            </Heading>
          }
          bodyClassName="xl:px-72 lg:px-64 md:px-21"
        >
          {children}
        </PageLayout>
      </body>
    </html>
  );
}
