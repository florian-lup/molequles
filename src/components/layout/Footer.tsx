'use client';

import { FiMapPin, FiMail, FiInstagram, FiTwitter } from 'react-icons/fi';
import { FaTiktok } from 'react-icons/fa';
import { getCurrentYear } from '@/utils/dateUtils';
import Image from 'next/image';

export default function Footer() {
  const currentYear = getCurrentYear();

  return (
    <footer className="bg-gray-950 text-white border-t border-cyan-900/30">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Logo and company description */}
          <div className="space-y-4">
            <div className="flex items-center">
              <Image 
                src="/icons/molecule.svg" 
                alt="Molecule" 
                width={24} 
                height={24} 
                className="text-cyan-400 mr-2" 
              />
              <h3 className="font-mono text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 font-bold text-xl">
                Molequles
              </h3>
            </div>
            <p className="text-gray-400 text-sm border-l-2 border-cyan-500 pl-3 font-light">
              Scientifically crafted scents personalized for your unique skin chemistry.
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-gray-200 font-medium text-base">Contact</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-400">
                <FiMail className="h-4 w-4 text-cyan-500" />
                <a href="mailto:info@molequles.com" className="text-sm hover:text-cyan-400 transition-colors">
                  info@molequles.com
                </a>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <FiMapPin className="h-4 w-4 text-cyan-500" />
                <span className="text-sm">London, United Kingdom</span>
              </div>
            </div>
          </div>

          {/* Social and links */}
          <div className="space-y-4">
            <h4 className="text-gray-200 font-medium text-base">Connect</h4>
            <div className="flex space-x-3">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-900/80 border border-cyan-900/30 hover:bg-cyan-900/20 transition-colors"
              >
                <FiInstagram className="h-4 w-4 text-cyan-400" />
              </a>
              <a 
                href="https://tiktok.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-900/80 border border-cyan-900/30 hover:bg-cyan-900/20 transition-colors"
              >
                <FaTiktok className="h-4 w-4 text-cyan-400" />
              </a>
              <a 
                href="https://x.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-900/80 border border-cyan-900/30 hover:bg-cyan-900/20 transition-colors"
              >
                <FiTwitter className="h-4 w-4 text-cyan-400" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-cyan-900/30">
          <p className="text-gray-500 text-xs order-2 md:order-1 mt-4 md:mt-0">
            &copy; {currentYear} Molequles. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-2 order-1 md:order-2">
            <span className="text-xs text-gray-400 font-light">
              <span className="text-cyan-500 font-mono">100%</span> Unique AI-generated formulas
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
} 