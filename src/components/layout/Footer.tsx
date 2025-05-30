'use client';

import { FiMapPin, FiMail, FiPhone, FiInstagram, FiTwitter, FiFacebook, FiYoutube } from 'react-icons/fi';

export default function Footer() {
  // Get current year for copyright text
  const getCurrentYear = () => new Date().getFullYear();

  return (
    <footer className="bg-gray-50 text-black border-t border-gray-200">
      {/* Main footer content container */}
      <div className="w-full px-4 sm:px-6 lg:px-10 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">

          {/* Company Info */}
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <h3 className="text-lg font-semibold text-black">Molequles</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Discover your signature scent with our curated collection of premium fragrances.
              Quality craftsmanship meets modern elegance.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-black transition-colors duration-200 p-1">
                <FiInstagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-500 hover:text-black transition-colors duration-200 p-1">
                <FiTwitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-500 hover:text-black transition-colors duration-200 p-1">
                <FiFacebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-500 hover:text-black transition-colors duration-200 p-1">
                <FiYoutube className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-black">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-gray-600 hover:text-black transition-colors duration-200 py-1 block">About Us</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-black transition-colors duration-200 py-1 block">Shop</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-black transition-colors duration-200 py-1 block">Collections</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-black transition-colors duration-200 py-1 block">Gift Cards</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-black transition-colors duration-200 py-1 block">Reviews</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-black">Customer Service</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-gray-600 hover:text-black transition-colors duration-200 py-1 block">Contact Us</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-black transition-colors duration-200 py-1 block">Shipping & Returns</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-black transition-colors duration-200 py-1 block">Size Guide</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-black transition-colors duration-200 py-1 block">FAQ</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-black transition-colors duration-200 py-1 block">Track Your Order</a></li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <h3 className="text-lg font-semibold text-black">Stay Connected</h3>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-start space-x-3 text-sm text-gray-600">
                <FiMapPin className="h-4 w-4 text-gray-500 flex-shrink-0 mt-0.5" />
                <span>London, United Kingdom</span>
              </div>
              <div className="flex items-start space-x-3 text-sm text-gray-600">
                <FiMail className="h-4 w-4 text-gray-500 flex-shrink-0 mt-0.5" />
                <a href="mailto:hello@molequles.com" className="hover:text-black transition-colors duration-200 break-all">
                  hello@molequles.com
                </a>
              </div>
              <div className="flex items-start space-x-3 text-sm text-gray-600">
                <FiPhone className="h-4 w-4 text-gray-500 flex-shrink-0 mt-0.5" />
                <a href="tel:+44123456789" className="hover:text-black transition-colors duration-200">
                  +44 123 456 789
                </a>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="pt-2">
              <p className="text-sm text-gray-600 mb-4">Subscribe for exclusive offers and updates</p>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-0">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-3 sm:py-2 text-sm border border-gray-300 rounded-md sm:rounded-l-md sm:rounded-r-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
                />
                <button className="px-4 py-3 sm:py-2 bg-black text-white text-sm rounded-md sm:rounded-l-none sm:rounded-r-md hover:bg-gray-800 transition-colors duration-200 font-medium">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom footer */}
      <div className="border-t border-gray-200 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-10 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0 text-center sm:text-left">
            {/* Copyright */}
            <p className="text-gray-500 text-xs">
              &copy; {getCurrentYear()} Molequles. All rights reserved.
            </p>

            {/* Legal Links */}
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 text-xs">
              <a href="#" className="text-gray-500 hover:text-black transition-colors duration-200 py-1">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-black transition-colors duration-200 py-1">Terms of Service</a>
              <a href="#" className="text-gray-500 hover:text-black transition-colors duration-200 py-1">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
