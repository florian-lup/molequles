import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Molequles",
    default: "Molequles | AI-Powered Personalized Perfumes",
  },
  description: "Molequles leverages AI to create personalized perfumes based on your unique skin chemistry.",
  keywords: ["AI perfume", "personalized fragrance", "custom scent", "skin chemistry", "AI-driven perfumery"],
  authors: [{ name: "Molequles Team" }],
  creator: "Molequles",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://molequles.com",
    title: "Molequles | AI-Powered Personalized Perfumes",
    description: "AI-generated personalized perfumes based on your unique skin chemistry",
    siteName: "Molequles",
  },
  twitter: {
    card: "summary_large_image",
    title: "Molequles | AI-Powered Personalized Perfumes",
    description: "AI-generated personalized perfumes based on your unique skin chemistry",
    creator: "@molequles",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
