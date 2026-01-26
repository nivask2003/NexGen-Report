import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LayoutWrapper from "@/components/layout/LayoutWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Uplike News - Latest Trending News & Updates",
    template: "%s | Uplike News"
  },
  description: "Stay updated with the latest news on technology, business, lifestyle, and more at Uplike News. Fast, reliable, and professional news reporting.",
  keywords: ["news", "latest news", "trending topics", "technology", "business", "Uplike News"],
  authors: [{ name: "Uplike News Team" }],
  creator: "Uplike News",
  publisher: "Uplike News",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://uplikenews.com"), // Replace with actual domain
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased min-h-screen flex flex-col`}>
        <LayoutWrapper>
          {children}
        </LayoutWrapper>
      </body>
    </html>
  );
}
