import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { WaitlistProvider } from "@/contexts/WaitlistContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Molequles | AI-Powered Personalized Perfumes",
  description: "Discover personalized fragrances tailored to your unique skin chemistry, powered by AI.",
  authors: [{ name: "Molequles Team" }],
  keywords: ["personalized perfume", "AI perfumery", "custom fragrance", "skin chemistry"],
  openGraph: {
    title: "Molequles | AI-Powered Personalized Perfumes",
    description: "Discover personalized fragrances tailored to your unique skin chemistry, powered by AI.",
    images: ["/images/og-image.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Molequles | AI-Powered Personalized Perfumes",
    description: "Discover personalized fragrances tailored to your unique skin chemistry, powered by AI.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  themeColor: "#0f111a",
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-gray-950 text-white overflow-x-hidden`}>
        <WaitlistProvider>
          {children}
        </WaitlistProvider>
      </body>
    </html>
  );
}
