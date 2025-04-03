'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiInstagram, FiTwitter, FiLinkedin, FiFacebook, FiArrowRight, FiMapPin } from 'react-icons/fi';
import { getCurrentYear } from '@/utils/dateUtils';

export default function Footer() {
  const [emailInput, setEmailInput] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      // Mock submission - in a real app you'd call an API
      setIsSubmitted(true);
      setEmailInput('');
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };
  
  const currentYear = getCurrentYear();

  const footerSections = [
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Careers', href: '/careers' },
        { name: 'Press', href: '/press' },
        { name: 'Sustainability', href: '/sustainability' },
      ]
    },
    {
      title: 'Products',
      links: [
        { name: 'Discovery Kit', href: '/products/discovery' },
        { name: 'Signature Scents', href: '/products/signature' },
        { name: 'Gift Collections', href: '/products/gifts' },
        { name: 'Accessories', href: '/products/accessories' },
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'Help Center', href: '/support' },
        { name: 'Contact Us', href: '/contact' },
        { name: 'Shipping & Returns', href: '/shipping' },
        { name: 'FAQ', href: '/faq' },
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Terms of Service', href: '/terms' },
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Cookie Policy', href: '/cookies' },
        { name: 'Accessibility', href: '/accessibility' },
      ]
    }
  ];

  const socialLinks = [
    { icon: <FiInstagram className="w-5 h-5" />, href: 'https://instagram.com', label: 'Instagram' },
    { icon: <FiTwitter className="w-5 h-5" />, href: 'https://twitter.com', label: 'Twitter' },
    { icon: <FiLinkedin className="w-5 h-5" />, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: <FiFacebook className="w-5 h-5" />, href: 'https://facebook.com', label: 'Facebook' }
  ];

  return (
    <footer className="bg-gray-950 text-white">
      {/* Top gradient border */}
      <div className="h-px w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
      
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto pt-16 pb-12 px-4 sm:px-6 lg:px-8">
        {/* Newsletter signup section */}
        <div className="relative mb-16 p-6 lg:p-10 rounded-2xl overflow-hidden border border-gray-800 backdrop-blur-sm">
          {/* Background effects */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-indigo-900/20 blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-purple-900/20 blur-3xl"></div>
          </div>
          
          <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <div className="inline-flex rounded-full bg-indigo-900/30 px-3 py-1 text-sm font-medium text-indigo-400 mb-4">
                Stay Informed
              </div>
              <h3 className="text-2xl font-bold mb-2">Join Our Scent Community</h3>
              <p className="text-gray-400 mb-0 max-w-xl">
                Get exclusive updates, early access to new fragrances, and personalized recommendations.
              </p>
            </div>
            
            <div className="w-full md:w-auto">
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
                <div className="relative flex-1">
                  <input
                    type="email"
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full py-3 px-4 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent focus:outline-none text-white placeholder-gray-500"
                    required
                  />
                  {isSubmitted && (
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-5 h-5 text-green-400"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </motion.div>
                    </div>
                  )}
                </div>
                <button
                  type="submit"
                  className="py-3 px-6 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 rounded-lg font-medium text-white transition-all flex items-center justify-center"
                >
                  Subscribe
                  <FiArrowRight className="ml-2" />
                </button>
              </form>
            </div>
          </div>
        </div>
        
        {/* Main footer grid */}
        <div className="grid grid-cols-2 md:grid-cols-6 lg:grid-cols-12 gap-8 pb-12 border-b border-gray-800">
          {/* Logo and company description */}
          <div className="col-span-2 md:col-span-6 lg:col-span-4">
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                Molequles
              </span>
            </Link>
            
            <p className="text-gray-400 mb-6 max-w-md">
              We combine AI technology with artisanal perfumery to create personalized fragrances that adapt to your unique body chemistry.
            </p>
            
            <div className="flex items-center space-x-2 text-gray-400 mb-6">
              <FiMapPin />
              <span className="text-sm">Headquartered in London & New York</span>
            </div>
            
            <div className="flex space-x-4">
              {socialLinks.map((link, i) => (
                <a 
                  key={i} 
                  href={link.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-900 hover:bg-gray-800 text-gray-400 hover:text-white transition-colors border border-gray-800"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          
          {/* Footer navigation sections */}
          <div className="col-span-2 md:col-span-6 lg:col-span-7 grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerSections.map((section, i) => (
              <div key={i}>
                <h3 className="text-gray-300 font-semibold mb-4 text-sm tracking-wider uppercase">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link, j) => (
                    <li key={j}>
                      <Link 
                        href={link.href} 
                        className="text-gray-400 hover:text-indigo-400 transition-colors text-sm"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          {/* App download links */}
          <div className="col-span-2 md:col-span-6 lg:col-span-1 flex flex-col justify-start">
            <h3 className="text-gray-300 font-semibold mb-4 text-sm tracking-wider uppercase">
              Download App
            </h3>
            <div className="space-y-2">
              <a href="#" className="inline-block">
                <img src="/apple-app-store.svg" alt="Download on the App Store" className="h-10" />
              </a>
              <a href="#" className="inline-block">
                <img src="/google-play.svg" alt="Get it on Google Play" className="h-10" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom copyright section */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm order-2 md:order-1 mt-4 md:mt-0">
            &copy; {currentYear} Molequles. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-4 order-1 md:order-2">
            <a href="#" className="text-gray-400 hover:text-white text-sm">
              Cookie Settings
            </a>
            <span className="text-gray-700">•</span>
            <a href="mailto:info@molequles.com" className="text-gray-400 hover:text-white text-sm">
              info@molequles.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
} 