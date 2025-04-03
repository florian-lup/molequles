'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '@/components/ui/Button';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activePath, setActivePath] = useState('');

  // Update active path based on current URL
  useEffect(() => {
    setActivePath(window.location.pathname);
    
    // Track scroll position to change header style
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'How It Works', href: '/#how-it-works' },
    {
      name: 'Products',
      href: '#',
      submenu: [
        { name: 'Discovery Kit', href: '/products/discovery' },
        { name: 'Signature Scents', href: '/products/signature' },
        { name: 'Gift Collections', href: '/products/gifts' },
      ]
    },
    { name: 'Technology', href: '/#technology' },
    { name: 'Testimonials', href: '/#testimonials' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'py-2 bg-black/80 backdrop-blur-lg shadow-lg' 
        : 'py-4 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link 
            href="/" 
            className="relative z-10"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center"
            >
              <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                Molequles
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => {
              // Check if the item has a submenu
              if (item.submenu) {
                return (
                  <div key={item.name} className="relative group">
                    <button className="px-4 py-2 text-gray-300 hover:text-white flex items-center group">
                      <span>{item.name}</span>
                      <FiChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
                    </button>
                    
                    <div className="absolute left-0 top-full mt-1 w-48 origin-top-left opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <div className="py-2 bg-gray-900/80 backdrop-blur-lg border border-gray-800 rounded-lg shadow-xl">
                        {item.submenu.map((subitem) => (
                          <Link 
                            key={subitem.name} 
                            href={subitem.href}
                            className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800/50"
                          >
                            {subitem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }
              
              // Regular navigation item
              return (
                <Link 
                  key={item.name} 
                  href={item.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                    (activePath === item.href || (activePath === '/' && item.href === '/')) 
                      ? 'text-white' 
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item.name}
                  {(activePath === item.href || (activePath === '/' && item.href === '/')) && (
                    <motion.span 
                      layoutId="activeIndicator"
                      className="absolute inset-x-3 -bottom-px h-px bg-gradient-to-r from-indigo-400 to-pink-400"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button 
              variant="neon"
              size="sm"
              shape="pill"
              href="/get-started"
            >
              Get Started
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
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden"
          >
            <div className="pt-2 pb-4 bg-gray-900/95 backdrop-blur-md border-t border-gray-800">
              <div className="px-4 space-y-1 max-h-[70vh] overflow-y-auto">
                {navigation.map((item) => {
                  // Mobile submenu items
                  if (item.submenu) {
                    return (
                      <div key={item.name} className="py-2">
                        <div className="px-3 py-2 text-gray-300 font-medium">
                          {item.name}
                        </div>
                        <div className="pl-5 space-y-1 border-l border-gray-700">
                          {item.submenu.map((subitem) => (
                            <Link
                              key={subitem.name}
                              href={subitem.href}
                              onClick={() => setIsMenuOpen(false)}
                              className="block px-3 py-2 text-sm text-gray-400 hover:text-white"
                            >
                              {subitem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    );
                  }
                  
                  // Regular mobile nav item
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block px-3 py-2 text-base font-medium ${
                        (activePath === item.href || (activePath === '/' && item.href === '/')) 
                          ? 'text-white bg-gray-800/50 rounded-md' 
                          : 'text-gray-300 hover:text-white hover:bg-gray-800/30 rounded-md'
                      }`}
                    >
                      {item.name}
                    </Link>
                  );
                })}
                
                <div className="pt-4">
                  <Button
                    variant="neon"
                    shape="pill"
                    fullWidth
                    href="/get-started"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Get Started
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
} 