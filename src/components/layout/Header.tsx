'use client';

import { useState } from 'react';
import Link from 'next/link';
import { HiMenu, HiX } from 'react-icons/hi';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
                Molequles
              </span>
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <Link href="#benefits" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400">
              Benefits
            </Link>
            <Link href="#how-it-works" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400">
              How It Works
            </Link>
            <Link href="#start-journey" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400">
              Get Started
            </Link>
            <Link href="/about" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400">
              About
            </Link>
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <Link 
              href="/login" 
              className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400">
              Log in
            </Link>
            <Link 
              href="/signup" 
              className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white transition-all hover:shadow-md">
              Sign up
            </Link>
          </div>
          
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-700 dark:text-gray-300"
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Toggle menu</span>
              {isMenuOpen ? (
                <HiX className="h-6 w-6" />
              ) : (
                <HiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="pt-2 pb-4 space-y-1 px-4 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
            <Link 
              href="#benefits" 
              className="block py-2 text-gray-700 dark:text-gray-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Benefits
            </Link>
            <Link 
              href="#how-it-works" 
              className="block py-2 text-gray-700 dark:text-gray-300"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link 
              href="#start-journey" 
              className="block py-2 text-gray-700 dark:text-gray-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Started
            </Link>
            <Link 
              href="/about" 
              className="block py-2 text-gray-700 dark:text-gray-300"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <div className="pt-4 border-t border-gray-100 dark:border-gray-800 flex flex-col space-y-2">
              <Link 
                href="/login" 
                className="block py-2 text-gray-700 dark:text-gray-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Log in
              </Link>
              <Link 
                href="/signup" 
                className="block py-2 px-4 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
} 