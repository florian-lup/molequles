'use client';

import { memo, useCallback, useMemo, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { FiMenu, FiX } from 'react-icons/fi';
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

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
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

  const handleWaitlistClick = useCallback(() => {
    closeMenu();
    openWaitlist();
  }, [closeMenu, openWaitlist]);

  return (
    <header className="sticky top-0 left-0 w-full z-40 bg-white/80 backdrop-blur-sm border-b border-gray-100">
      <div className="w-full px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between py-3 md:py-4">
          {/* Logo and brand name */}
          <Link
            href="/"
            className="flex items-center focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded-lg p-1 -m-1"
            onClick={handleLogoClick}
            aria-label={`${COMPANY_INFO.name} home page`}
          >
            <Image
              src="/logo/molequles_logo.svg"
              alt=""
              width={24}
              height={24}
              className="mr-2 w-5 h-5 sm:w-6 sm:h-6"
              priority
            />
            <span className="text-lg sm:text-xl font-bold text-black">{COMPANY_INFO.name}</span>
          </Link>

          <div className="flex items-center">
            {/* Desktop navigation menu */}
            <nav
              className="hidden lg:flex items-center space-x-6 xl:space-x-8 mr-4 xl:mr-6"
              role="navigation"
              aria-label="Main navigation"
            >
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-sm font-medium text-gray-700 hover:text-black transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded-md px-2 py-1 whitespace-nowrap"
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* Waitlist call-to-action button - Desktop */}
            <div className="hidden sm:block">
              <Button
                onClick={handleWaitlistClick}
                buttonSize="sm"
                rightIcon
                aria-label="Join our waitlist"
              >
                Join Waitlist
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              type="button"
              className="lg:hidden ml-2 p-2 rounded-md text-gray-700 hover:text-black hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition-colors"
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? (
                <FiX className="h-6 w-6" aria-hidden="true" />
              ) : (
                <FiMenu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div
            id="mobile-menu"
            className="lg:hidden border-t border-gray-100 py-4 bg-white/95 backdrop-blur-sm"
          >
            <nav
              className="flex flex-col space-y-1"
              role="navigation"
              aria-label="Mobile navigation"
            >
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-black hover:bg-gray-50 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                >
                  {item.name}
                </a>
              ))}

              {/* Mobile waitlist button */}
              <div className="pt-4 mt-4 border-t border-gray-100 sm:hidden">
                <Button
                  onClick={handleWaitlistClick}
                  buttonSize="md"
                  rightIcon
                  className="w-full justify-center"
                  aria-label="Join our waitlist"
                >
                  Join Waitlist
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
});

Header.displayName = 'Header';

export default Header;
