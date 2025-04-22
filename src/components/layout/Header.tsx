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
    { name: 'Solution', href: '#solution' },
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
    <header 
      className="sticky top-0 left-0 w-full z-40 "
    >
      <div className="max-w-7xl mx-auto p-2 sm:p-4 lg:p-6">
        <div className="bg-gray-950 flex items-center justify-between p-2 rounded-full border border-cyan-900/30">
          {/* Logo and brand name */}
          <Link 
            href="/" 
            className="flex items-center"
            onClick={() => setIsMenuOpen(false)}
          >
            <Image
              src="/icons/logo.svg"
              alt="Molecule"
              width={20}
              height={20}
              className="text-cyan-400 mx-2"
            />
            <span className=" text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 font-bold text-lg">
              Molequles
            </span>
          </Link>

          <div className="flex items-center">
            {/* Desktop navigation menu */}
            <nav className="hidden md:flex items-center space-x-8 mr-6">
              {navigation.map((item) => (
                <a 
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* Waitlist call-to-action button */}
            <Button
              onClick={openWaitlist}
              size="sm"
              rightIcon
            >
              Join Waitlist
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu removed */}
    </header>
  );
}
