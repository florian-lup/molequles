import Link from 'next/link';
import { FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { getCurrentYear } from '@/utils/dateUtils';

export default function Footer() {
  return (
    <footer className="bg-gray-50 py-12 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
                Molequles
              </span>
            </Link>
            <p className="mt-4 text-sm text-gray-600">
              Redefining perfumery with AI-driven personalization for your unique skin chemistry.
            </p>
          </div>
          
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link href="#benefits" className="text-sm text-gray-600 hover:text-purple-600">Benefits</Link></li>
              <li><Link href="#how-it-works" className="text-sm text-gray-600 hover:text-purple-600">How It Works</Link></li>
              <li><Link href="#start-journey" className="text-sm text-gray-600 hover:text-purple-600">Get Started</Link></li>
              <li><Link href="/about" className="text-sm text-gray-600 hover:text-purple-600">About</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="/privacy" className="text-sm text-gray-600 hover:text-purple-600">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-sm text-gray-600 hover:text-purple-600">Terms of Service</Link></li>
              <li><Link href="/cookies" className="text-sm text-gray-600 hover:text-purple-600">Cookie Policy</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li><Link href="/contact" className="text-sm text-gray-600 hover:text-purple-600">Contact Us</Link></li>
              <li><Link href="mailto:info@molequles.com" className="text-sm text-gray-600 hover:text-purple-600">info@molequles.com</Link></li>
              <li className="flex space-x-4 mt-4">
                <a href="https://twitter.com/molequles" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-purple-600">
                  <span className="sr-only">Twitter</span>
                  <FaTwitter className="h-5 w-5" />
                </a>
                <a href="https://instagram.com/molequles" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-purple-600">
                  <span className="sr-only">Instagram</span>
                  <FaInstagram className="h-5 w-5" />
                </a>
                <a href="https://linkedin.com/company/molequles" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-purple-600">
                  <span className="sr-only">LinkedIn</span>
                  <FaLinkedin className="h-5 w-5" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-100">
          <p className="text-sm text-gray-500 text-center">
            &copy; {getCurrentYear()} Molequles. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 