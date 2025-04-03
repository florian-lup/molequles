'use client';

import { useState } from 'react';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'How It Works', href: '/#how-it-works' },
    { name: 'Solutions', href: '/#solutions' },
    { name: 'Testimonials', href: '/#testimonials' },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 backdrop-blur-md bg-white/90">
      <Container>
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                Molequles
              </span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link 
                key={item.name} 
                href={item.href}
                className="text-gray-600 hover:text-indigo-600 font-medium"
              >
                {item.name}
              </Link>
            ))}
            <Button href="/get-started" variant="gradient" size="small">
              Get Started
            </Button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600 focus:outline-none"
            >
              {isMenuOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <Container padding={false} className="px-4 pb-4">
            <div className="flex flex-col space-y-3 pt-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-600 hover:text-indigo-600 py-2 font-medium"
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-2">
                <Button href="/get-started" variant="gradient" fullWidth>
                  Get Started
                </Button>
              </div>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
} 