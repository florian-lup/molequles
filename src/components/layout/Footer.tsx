'use client';

import { memo, useCallback, useMemo, useState, type FormEvent } from 'react';
import {
  FiMapPin,
  FiMail,
  FiPhone,
  FiInstagram,
  FiTwitter,
  FiFacebook,
  FiYoutube,
} from 'react-icons/fi';
import Input from '@/components/ui/input';
import Button from '@/components/ui/button';

interface SocialLink {
  readonly name: string;
  readonly href: string;
  readonly icon: React.ReactNode;
  readonly label: string;
}

interface NavLink {
  readonly name: string;
  readonly href: string;
}

interface ContactInfo {
  readonly icon: React.ReactNode;
  readonly content: React.ReactNode;
  readonly label: string;
}

const Footer = memo(() => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Get current year for copyright text
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  const socialLinks: readonly SocialLink[] = useMemo(
    () => [
      {
        name: 'instagram',
        href: '#',
        icon: <FiInstagram className="h-6 w-6" />,
        label: 'Follow us on Instagram',
      },
      {
        name: 'twitter',
        href: '#',
        icon: <FiTwitter className="h-6 w-6" />,
        label: 'Follow us on Twitter',
      },
      {
        name: 'facebook',
        href: '#',
        icon: <FiFacebook className="h-6 w-6" />,
        label: 'Follow us on Facebook',
      },
      {
        name: 'youtube',
        href: '#',
        icon: <FiYoutube className="h-6 w-6" />,
        label: 'Subscribe to our YouTube channel',
      },
    ],
    []
  );

  const quickLinks: readonly NavLink[] = useMemo(
    () => [
      { name: 'About Us', href: '#' },
      { name: 'Shop', href: '#' },
      { name: 'Collections', href: '#' },
      { name: 'Gift Cards', href: '#' },
      { name: 'Reviews', href: '#' },
    ],
    []
  );

  const customerServiceLinks: readonly NavLink[] = useMemo(
    () => [
      { name: 'Contact Us', href: '#' },
      { name: 'Shipping & Returns', href: '#' },
      { name: 'Size Guide', href: '#' },
      { name: 'FAQ', href: '#' },
      { name: 'Track Your Order', href: '#' },
    ],
    []
  );

  const contactInfo: readonly ContactInfo[] = useMemo(
    () => [
      {
        icon: <FiMapPin className="h-4 w-4 text-gray-500 flex-shrink-0 mt-0.5" />,
        content: <span>London, United Kingdom</span>,
        label: 'Our location',
      },
      {
        icon: <FiMail className="h-4 w-4 text-gray-500 flex-shrink-0 mt-0.5" />,
        content: (
          <a
            href="mailto:hello@molequles.com"
            className="hover:text-black transition-colors duration-200 break-all"
          >
            hello@molequles.com
          </a>
        ),
        label: 'Email us',
      },
      {
        icon: <FiPhone className="h-4 w-4 text-gray-500 flex-shrink-0 mt-0.5" />,
        content: (
          <a href="tel:+44123456789" className="hover:text-black transition-colors duration-200">
            +44 123 456 789
          </a>
        ),
        label: 'Call us',
      },
    ],
    []
  );

  const legalLinks: readonly NavLink[] = useMemo(
    () => [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
    ],
    []
  );

  const handleEmailChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }, []);

  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (!email.trim()) return;

      setIsSubmitting(true);

      try {
        // TODO: Implement actual newsletter submission logic
        await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API call
        setIsSubmitted(true);
        setEmail('');
      } catch (error) {
        console.error('Newsletter submission error:', error);
        // TODO: Add error handling UI
      } finally {
        setIsSubmitting(false);
      }
    },
    [email]
  );

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
            <div className="flex space-x-6" role="list" aria-label="Social media links">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-gray-500 hover:text-black transition-colors duration-200 p-1"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-black">Quick Links</h3>
            <ul className="space-y-3" role="list">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-black transition-colors duration-200 py-1 block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-black">Customer Service</h3>
            <ul className="space-y-3" role="list">
              {customerServiceLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-black transition-colors duration-200 py-1 block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <h3 className="text-lg font-semibold text-black">Stay Connected</h3>

            {/* Contact Info */}
            <div className="space-y-3">
              {contactInfo.map((contact, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 text-sm text-gray-600"
                  aria-label={contact.label}
                >
                  {contact.icon}
                  {contact.content}
                </div>
              ))}
            </div>

            {/* Newsletter Signup */}
            <div className="pt-2">
              <p className="text-sm text-gray-600 mb-4">
                Subscribe for exclusive offers and updates
              </p>

              {isSubmitted ? (
                <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-sm text-green-800">
                    Thank you for subscribing! Check your email for confirmation.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col sm:flex-row gap-2 sm:gap-0"
                  noValidate
                >
                  <Input
                    type="email"
                    id="newsletter-email"
                    name="email"
                    value={email}
                    onChange={handleEmailChange}
                    autoComplete="email"
                    placeholder="Enter your email"
                    inputSize="sm"
                    roundedVariant="left"
                    className="flex-1 text-sm"
                    required
                    aria-describedby="newsletter-help"
                  />
                  <Button
                    type="submit"
                    buttonSize="sm"
                    variant="primary"
                    className="w-full sm:w-auto sm:rounded-l-none px-4 py-3 sm:py-2 text-sm font-medium"
                    disabled={isSubmitting || !email.trim()}
                  >
                    {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                  </Button>
                  <p id="newsletter-help" className="sr-only">
                    Subscribe to our newsletter for exclusive offers and updates
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom footer */}
      <div className="border-t border-gray-200 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-10 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0 text-center sm:text-left">
            {/* Copyright */}
            <p className="text-xs text-gray-500">
              &copy; {currentYear} Molequles. All rights reserved.
            </p>

            {/* Legal Links */}
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 text-xs">
              {legalLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-500 hover:text-black transition-colors duration-200 py-1"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;
