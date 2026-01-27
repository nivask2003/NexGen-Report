import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LayoutWrapper from "@/components/layout/LayoutWrapper";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "TrendWatch360 - Latest Trending News & Updates",
    template: "%s | TrendWatch360"
  },
  description: "Stay updated with the latest news on technology, business, lifestyle, and more at TrendWatch360. Fast, reliable, and professional news reporting.",
  keywords: ["news", "latest news", "trending topics", "technology", "business", "TrendWatch360", "world news", "lifestyle news"],
  authors: [{ name: "TrendWatch360 Team" }],
  creator: "TrendWatch360",
  publisher: "TrendWatch360",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://trend-watch360.vercel.app"), // Updated with actual domain
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "TrendWatch360 - Latest Trending News & Updates",
    description: "Stay updated with the latest news on technology, business, lifestyle, and more at TrendWatch360.",
    url: 'https://trend-watch360.vercel.app',
    siteName: 'TrendWatch360',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'TrendWatch360 News',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "TrendWatch360 - Latest Trending News & Updates",
    description: "Stay updated with the latest news on technology, business, lifestyle, and more at TrendWatch360.",
    creator: '@trendwatch360',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    "google-adsense-account": "ca-pub-6285124566181151",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "TrendWatch360",
    "url": "https://trend-watch360.vercel.app",
    "logo": "https://trend-watch360.vercel.app/og-image.png",
    "sameAs": [
      "https://twitter.com/trendwatch360",
      "https://facebook.com/trendwatch360"
    ]
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "TrendWatch360",
    "url": "https://trend-watch360.vercel.app",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://trend-watch360.vercel.app/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <html lang="en">
      <body className={`${inter.className} antialiased min-h-screen flex flex-col`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6285124566181151"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <LayoutWrapper>
          {children}
        </LayoutWrapper>
      </body>
    </html>
  );
}
