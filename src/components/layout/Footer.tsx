'use client';

import { FiMapPin } from 'react-icons/fi';
import { getCurrentYear } from '@/utils/dateUtils';

export default function Footer() {
  const currentYear = getCurrentYear();

  return (
    <footer className="bg-gray-950 text-white">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto p-4">
        {/* Bottom copyright section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm order-2 md:order-1 mt-4 md:mt-0">
            &copy; {currentYear} Molequles. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-2 order-1 md:order-2 text-gray-400">
            <FiMapPin />
            <span className="text-sm">Headquartered in London</span>
          </div>
        </div>
      </div>
    </footer>
  );
} 