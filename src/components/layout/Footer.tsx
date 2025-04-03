import Link from 'next/link';
import Container from '@/components/ui/Container';
import { FiInstagram, FiTwitter, FiLinkedin, FiFacebook } from 'react-icons/fi';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: 'Company',
      links: [
        { name: 'About', href: '/about' },
        { name: 'Careers', href: '/careers' },
        { name: 'Press', href: '/press' },
        { name: 'Blog', href: '/blog' },
      ]
    },
    {
      title: 'Product',
      links: [
        { name: 'How It Works', href: '/how-it-works' },
        { name: 'Pricing', href: '/pricing' },
        { name: 'FAQ', href: '/faq' },
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Help Center', href: '/help' },
        { name: 'Terms of Service', href: '/terms' },
        { name: 'Privacy Policy', href: '/privacy' },
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
    <footer className="bg-gray-50 border-t border-gray-200">
      <Container className="py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-16">
          <div className="col-span-2 mb-8 md:mb-0">
            <Link href="/" className="inline-block mb-6">
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                Molequles
              </span>
            </Link>
            <p className="text-gray-600 mb-6 max-w-md">
              Personalized fragrances crafted using AI to match your unique skin chemistry and preferences.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, i) => (
                <a 
                  key={i} 
                  href={link.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="text-gray-500 hover:text-indigo-600 transition-colors"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          
          {footerLinks.map((group, i) => (
            <div key={i}>
              <h3 className="font-semibold text-gray-900 mb-4">{group.title}</h3>
              <ul className="space-y-3">
                {group.links.map((link, j) => (
                  <li key={j}>
                    <Link 
                      href={link.href} 
                      className="text-gray-600 hover:text-indigo-600 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Molequles. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <a href="mailto:info@molequles.com" className="text-gray-500 hover:text-indigo-600 text-sm">
              info@molequles.com
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
} 