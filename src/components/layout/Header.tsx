'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import { useWaitlist } from '@/hooks/useWaitlist';

// Interface for navigation menu items
export type NavigationItem = {
  name: string;
  href: string;
};

export default function Header() {
  // State for mobile menu toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Custom hook for waitlist modal control
  const { openWaitlist } = useWaitlist();
  const router = useRouter();

  // Navigation menu items configuration
  const navigation: NavigationItem[] = [
    { name: 'About', href: '#solution' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Pricing', href: '#pricing' },
  ];

  // Handles navigation link clicks with smooth scrolling
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();

    // Close mobile menu
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }

    // Handle smooth scrolling for anchor links
    if (href.startsWith('#')) {
      const element = document.getElementById(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        // Fall back to home page
        router.push('/');
      }
    } else {
      router.push(href);
    }
  };

  return (
    <header className="sticky top-0 left-0 w-full z-40 bg-white/80 backdrop-blur-sm">
      <div className="w-full px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between py-4">
          {/* Logo and brand name */}
          <Link href="/" className="flex items-center" onClick={() => setIsMenuOpen(false)}>
            <Image src="/icons/logo.svg" alt="Molecule" width={24} height={24} className="mr-2" />
            <span className="text-black font-bold text-lg">Molequles</span>
          </Link>

          <div className="flex items-center">
            {/* Desktop navigation menu */}
            <nav className="hidden md:flex items-center space-x-8 mr-6">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-gray-700 hover:text-black transition-colors text-sm font-medium"
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* Waitlist call-to-action button */}
            <Button onClick={openWaitlist} size="sm" rightIcon>
              Join Waitlist
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
