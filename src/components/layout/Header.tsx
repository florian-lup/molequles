'use client';

import Link from 'next/link';
import { HiMenu, HiX } from 'react-icons/hi';
import { useMenu } from '@/hooks/useMenu';

export default function Header() {
  const { isOpen: isMenuOpen, toggle: toggleMenu } = useMenu();

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
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
            <Link href="#benefits" className="text-gray-700 hover:text-purple-600">
              Benefits
            </Link>
            <Link href="#how-it-works" className="text-gray-700 hover:text-purple-600">
              How It Works
            </Link>
            <Link href="#start-journey" className="text-gray-700 hover:text-purple-600">
              Get Started
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-purple-600">
              About
            </Link>
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <Link 
              href="/login" 
              className="text-gray-700 hover:text-purple-600">
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
              className="text-gray-700"
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
          <div className="pt-2 pb-4 space-y-1 px-4 bg-white border-t border-gray-100">
            <Link 
              href="#benefits" 
              className="block py-2 text-gray-700"
              onClick={() => toggleMenu()}
            >
              Benefits
            </Link>
            <Link 
              href="#how-it-works" 
              className="block py-2 text-gray-700"
              onClick={() => toggleMenu()}
            >
              How It Works
            </Link>
            <Link 
              href="#start-journey" 
              className="block py-2 text-gray-700"
              onClick={() => toggleMenu()}
            >
              Get Started
            </Link>
            <Link 
              href="/about" 
              className="block py-2 text-gray-700"
              onClick={() => toggleMenu()}
            >
              About
            </Link>
            <div className="pt-4 border-t border-gray-100 flex flex-col space-y-2">
              <Link 
                href="/login" 
                className="block py-2 text-gray-700"
                onClick={() => toggleMenu()}
              >
                Log in
              </Link>
              <Link 
                href="/signup" 
                className="block py-2 px-4 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-center"
                onClick={() => toggleMenu()}
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