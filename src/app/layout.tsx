import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { WaitlistProvider } from '@/contexts/WaitlistContext';

const inter = Inter({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Molequles | AI-Powered Personalized Perfumes',
  description:
    'Discover personalized fragrances tailored to your unique skin chemistry, powered by AI.',
  authors: [{ name: 'Molequles Team' }],
  keywords: ['personalized perfume', 'AI perfumery', 'custom fragrance', 'skin chemistry'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased overflow-x-hidden`}>
        <WaitlistProvider>{children}</WaitlistProvider>
      </body>
    </html>
  );
}
