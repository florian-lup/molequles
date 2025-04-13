'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import { FiMenu, FiX } from 'react-icons/fi';
import { useWaitlist } from '@/contexts/WaitlistContext';
import { useRouter } from 'next/navigation';

// Define types for the navigation items
type NavigationItem = {
  name: string;
  href: string;
};

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { openWaitlist } = useWaitlist();
  const router = useRouter();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navigation: NavigationItem[] = [
    { name: 'Home', href: '#hero' },
    { name: 'Solution', href: '#solution' },
    { name: 'Benefits', href: '#benefits' },
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
    <header className="fixed top-0 w-full z-50 py-4 bg-gray-950 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link 
            href="/" 
            className="relative z-10 flex items-center"
          >
            <div className="flex items-center">
              <Image 
                src="/icons/molequles-logo.svg" 
                alt="Molequles Logo" 
                width={25} 
                height={25} 
              />
              <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-indigo-400 to-cyan-400">
                Molequles
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <a 
                key={item.name} 
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="relative px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors cursor-pointer"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button 
              variant="neon"
              size="sm"
              shape="pill"
              onClick={openWaitlist}
            >
              Join Waitlist
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <FiX className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <FiMenu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 w-full shadow-lg">
          <div className="pt-2 pb-4 bg-gray-950/90 backdrop-blur-lg border-t border-gray-800">
            <div className="px-4 space-y-1 max-h-[calc(100vh-10rem)] overflow-y-auto">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="block px-3 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-md transition-colors duration-150 cursor-pointer"
                >
                  {item.name}
                </a>
              ))}
              
              <div className="pt-4 border-t border-gray-800 mt-3">
                <Button
                  variant="neon"
                  shape="pill"
                  fullWidth
                  onClick={() => {
                    setIsMenuOpen(false);
                    openWaitlist();
                  }}
                >
                  Join Waitlist
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
} 