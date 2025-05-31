'use client';

import { memo, useCallback, useMemo, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Button from '@/components/ui/button';
import { useWaitlist } from '@/hooks/useWaitlist';
import { scrollToElement } from '@/utils';
import { COMPANY_INFO } from '@/constants';
import type { NavigationItem } from '@/types';

const Header = memo(() => {
  // State for mobile menu toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Custom hook for waitlist modal control
  const { openWaitlist } = useWaitlist();
  const router = useRouter();

  // Navigation menu items configuration
  const navigation: readonly NavigationItem[] = useMemo(
    () => [
      { name: 'Solution', href: '#value-proposition' },
      { name: 'Features', href: '#features' },
      { name: 'Reviews', href: '#social-proof' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'FAQ', href: '#faq' },
    ],
    []
  );

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  // Handles navigation link clicks with smooth scrolling
  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();

      // Close mobile menu
      if (isMenuOpen) {
        closeMenu();
      }

      // Handle smooth scrolling for anchor links
      if (href.startsWith('#')) {
        const elementId = href.substring(1);
        // Account for sticky header height
        const headerOffset = 80;
        scrollToElement(elementId, headerOffset);
      } else {
        router.push(href);
      }
    },
    [isMenuOpen, closeMenu, router]
  );

  const handleLogoClick = useCallback(() => {
    closeMenu();
    // Scroll to top when logo is clicked
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [closeMenu]);

  return (
    <header className="sticky top-0 left-0 w-full z-40 bg-white/80 backdrop-blur-sm">
      <div className="w-full px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between py-4">
          {/* Logo and brand name */}
          <Link
            href="/"
            className="flex items-center focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded-lg"
            onClick={handleLogoClick}
            aria-label={`${COMPANY_INFO.name} home page`}
          >
            <Image
              src="/logo/molequles_logo.svg"
              alt=""
              width={24}
              height={24}
              className="mr-2"
              priority
            />
            <span className="text-xl font-bold text-black">{COMPANY_INFO.name}</span>
          </Link>

          <div className="flex items-center">
            {/* Desktop navigation menu */}
            <nav
              className="hidden md:flex items-center space-x-8 mr-6"
              role="navigation"
              aria-label="Main navigation"
            >
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-sm font-medium text-gray-700 hover:text-black transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded-md px-2 py-1"
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* Waitlist call-to-action button */}
            <Button onClick={openWaitlist} buttonSize="sm" rightIcon aria-label="Join our waitlist">
              Join Waitlist
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
});

Header.displayName = 'Header';

export default Header;
