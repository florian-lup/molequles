'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import { useWaitlist } from '@/contexts/WaitlistContext';

// Define types for the navigation items
type NavigationItem = {
  name: string;
  href: string;
};

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { openWaitlist } = useWaitlist();
  const router = useRouter();
  

  const navigation: NavigationItem[] = [
    { name: 'Solution', href: '#solution' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Pricing', href: '#pricing' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    // Close mobile menu if open
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
    
    // If it's a hash link, handle smooth scrolling
    if (href.startsWith('#')) {
      const element = document.getElementById(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        // If element doesn't exist, navigate to home page
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
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 py-2 sm:py-4 lg:py-6">
        <div className="bg-gray-950 flex items-center justify-between p-3 rounded-full border border-cyan-900/30">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center"
            onClick={() => setIsMenuOpen(false)}
          >
            <Image
              src="/icons/logo.svg"
              alt="Molecule"
              width={24}
              height={24}
              className="text-cyan-400 mr-2"
            />
            <span className="font-mono text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 font-bold text-xl">
              Molequles
            </span>
          </Link>

          <div className="flex items-center">
            {/* Desktop Navigation - hidden on mobile */}
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

            {/* Waitlist Button - visible on all screen sizes */}
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

      {/* Mobile Menu - Removed in favor of direct waitlist button */}
    </header>
  );
}
