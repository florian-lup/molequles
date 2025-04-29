'use client';

import { FiMapPin } from 'react-icons/fi';
import { getCurrentYear } from '@/utils/dateUtils';

export default function Footer() {
  // Get current year for copyright text
  const currentYear = getCurrentYear();

  return (
    <footer className="bg-white text-black border-t border-gray-200">
      {/* Main footer content container */}
      <div className="w-full px-4 sm:px-6 lg:px-10 py-4 md:py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <p className="text-gray-500 text-xs order-2 md:order-1 mt-4 md:mt-0">
            &copy; {currentYear} Molequles. All rights reserved.
          </p>
          
          {/* Location */}
          <div className="flex items-center space-x-2 order-1 md:order-2 mb-4 md:mb-0">
            <div className="flex items-center space-x-2 text-gray-600">
              <FiMapPin className="h-4 w-4 text-gray-500" />
              <span className="text-xs">London, United Kingdom</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 