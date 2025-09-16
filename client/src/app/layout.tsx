import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import WordPressStatus from "@/components/WordPressStatus";
import ScrollIndicator from "@/components/ScrollIndicator";
import { LoadingProvider } from "@/contexts/LoadingContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MokuSetu Group G.K. - Bridging Global Business with Japan",
  description: "MokuSetu Group G.K. is a Japan-based business services company that connects international businesses with opportunities in the Japanese market. We specialize in market entry strategies, supplier procurement, sales support, quality inspection, and project management.",
  keywords: "Japan market entry, Japanese business services, supplier sourcing, quality inspection, regulatory compliance, cultural advisory, business development, MokuSetu Group",
  openGraph: {
    title: "MokuSetu Group G.K. - Bridging Global Business with Japan",
    description: "Connect your business with Japan through our comprehensive market entry solutions and local expertise.",
    url: "https://mokusetu.com",
    siteName: "MokuSetu Group G.K.",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MokuSetu Group G.K. - Bridging Global Business with Japan",
    description: "Connect your business with Japan through our comprehensive market entry solutions and local expertise.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <LoadingProvider>
          {/* Modern Loader */}
          <Loader />
          
          {/* Scroll Indicator - Client Component */}
          <ScrollIndicator />
          
          
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WordPressStatus />
        </LoadingProvider>
      </body>
    </html>
  );
}
