import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
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
          
          {/* Unique Scroll Indicator */}
          <div className="scroll-indicator" id="scroll-indicator"></div>
          
          {/* Unique Custom Cursor */}
          <div className="custom-cursor" id="custom-cursor"></div>
          
          <Navbar />
          <main>{children}</main>
          <Footer />
          
          {/* Unique Scroll Indicator Script */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                // Scroll Indicator
                window.addEventListener('scroll', () => {
                  const scrollIndicator = document.getElementById('scroll-indicator');
                  const scrollTop = window.pageYOffset;
                  const docHeight = document.body.scrollHeight - window.innerHeight;
                  const scrollPercent = (scrollTop / docHeight) * 100;
                  scrollIndicator.style.transform = \`scaleX(\${scrollPercent / 100})\`;
                });
                
                // Custom Cursor
                const cursor = document.getElementById('custom-cursor');
                document.addEventListener('mousemove', (e) => {
                  cursor.style.left = e.clientX + 'px';
                  cursor.style.top = e.clientY + 'px';
                });
                
                // Add hover effect to interactive elements
                document.addEventListener('mouseover', (e) => {
                  if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('.hover-lift')) {
                    cursor.classList.add('hover');
                  }
                });
                
                document.addEventListener('mouseout', (e) => {
                  if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('.hover-lift')) {
                    cursor.classList.remove('hover');
                  }
                });
              `,
            }}
          />
        </LoadingProvider>
      </body>
    </html>
  );
}
