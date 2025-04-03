import Link from 'next/link';
import { getCurrentYear } from '@/utils/dateUtils';

export default function Footer() {
  return (
    <footer className="bg-gray-50 py-8 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
              Molequles
            </span>
          </Link>
          
          <p className="mt-4 text-sm text-gray-500 text-center">
            &copy; {getCurrentYear()} Molequles. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 