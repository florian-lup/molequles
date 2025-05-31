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
import { useFormSubmission } from '@/hooks/useFormSubmission';
import { isValidEmail } from '@/utils';
import { API_ENDPOINTS, COMPANY_INFO, EXTERNAL_LINKS, ANIMATION_DURATION } from '@/constants';
import type { SocialLink, NavigationItem } from '@/types';

interface ContactInfo {
  readonly icon: React.ReactNode;
  readonly content: React.ReactNode;
  readonly label: string;
}

const Footer = memo(() => {
  const [email, setEmail] = useState('');
  const [validationError, setValidationError] = useState<string | null>(null);
  const { isSubmitting, error, submitForm } = useFormSubmission();
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Get current year for copyright text
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  const socialLinks: readonly SocialLink[] = useMemo(
    () => [
      {
        name: 'instagram',
        href: EXTERNAL_LINKS.social.instagram,
        icon: <FiInstagram className="h-5 w-5 sm:h-6 sm:w-6" />,
        label: 'Follow us on Instagram',
      },
      {
        name: 'twitter',
        href: EXTERNAL_LINKS.social.twitter,
        icon: <FiTwitter className="h-5 w-5 sm:h-6 sm:w-6" />,
        label: 'Follow us on Twitter',
      },
      {
        name: 'facebook',
        href: EXTERNAL_LINKS.social.facebook,
        icon: <FiFacebook className="h-5 w-5 sm:h-6 sm:w-6" />,
        label: 'Follow us on Facebook',
      },
      {
        name: 'youtube',
        href: EXTERNAL_LINKS.social.youtube,
        icon: <FiYoutube className="h-5 w-5 sm:h-6 sm:w-6" />,
        label: 'Subscribe to our YouTube channel',
      },
    ],
    []
  );

  const quickLinks: readonly NavigationItem[] = useMemo(
    () => [
      { name: 'About Us', href: '#' },
      { name: 'Shop', href: '#' },
      { name: 'Collections', href: '#' },
      { name: 'Gift Cards', href: '#' },
      { name: 'Reviews', href: '#' },
    ],
    []
  );

  const customerServiceLinks: readonly NavigationItem[] = useMemo(
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
        content: <span>{COMPANY_INFO.location}</span>,
        label: 'Our location',
      },
      {
        icon: <FiMail className="h-4 w-4 text-gray-500 flex-shrink-0 mt-0.5" />,
        content: (
          <a
            href={`mailto:${COMPANY_INFO.email}`}
            className="hover:text-black transition-colors duration-200 break-all"
          >
            {COMPANY_INFO.email}
          </a>
        ),
        label: 'Email us',
      },
      {
        icon: <FiPhone className="h-4 w-4 text-gray-500 flex-shrink-0 mt-0.5" />,
        content: (
          <a
            href={`tel:${COMPANY_INFO.phone.replace(/\s/g, '')}`}
            className="hover:text-black transition-colors duration-200"
          >
            {COMPANY_INFO.phone}
          </a>
        ),
        label: 'Call us',
      },
    ],
    []
  );

  const legalLinks: readonly NavigationItem[] = useMemo(
    () => [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
    ],
    []
  );

  const handleEmailChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setValidationError(null);
  }, []);

  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setValidationError(null);

      if (!email.trim()) {
        setValidationError('Please enter your email address');
        return;
      }

      if (!isValidEmail(email)) {
        setValidationError('Please enter a valid email address');
        return;
      }

      await submitForm(async () => {
        const response = await fetch(API_ENDPOINTS.newsletter, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email }),
        });

        if (!response.ok) {
          throw new Error('Failed to subscribe to newsletter');
        }

        setIsSubmitted(true);
        setEmail('');

        // Reset form after 3 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 3000);
      });
    },
    [email, submitForm]
  );

  return (
    <footer className="bg-gray-50 text-black border-t border-gray-200">
      {/* Main footer content container - improved mobile layout */}
      <div className="w-full px-3 sm:px-6 lg:px-10 py-6 sm:py-8 lg:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info - better mobile spacing */}
          <div className="space-y-3 sm:space-y-4 sm:col-span-2 lg:col-span-1">
            <h3 className="text-base sm:text-lg font-semibold text-black">{COMPANY_INFO.name}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Discover your signature scent with our curated collection of premium fragrances.
              Quality craftsmanship meets modern elegance.
            </p>
            {/* Improved mobile social links with better touch targets */}
            <div
              className="flex items-center gap-3 sm:gap-4"
              role="list"
              aria-label="Social media links"
            >
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-gray-500 hover:text-black transition-colors duration-200 p-2 rounded-lg hover:bg-gray-100 touch-manipulation"
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links - improved mobile layout */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-base sm:text-lg font-semibold text-black">Quick Links</h3>
            <ul className="space-y-2 sm:space-y-3" role="list">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-black transition-colors duration-200 py-1 block touch-manipulation"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service - improved mobile layout */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-base sm:text-lg font-semibold text-black">Customer Service</h3>
            <ul className="space-y-2 sm:space-y-3" role="list">
              {customerServiceLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-black transition-colors duration-200 py-1 block touch-manipulation"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter - better mobile layout */}
          <div className="space-y-4 sm:space-y-5 sm:col-span-2 lg:col-span-1">
            <h3 className="text-base sm:text-lg font-semibold text-black">Stay Connected</h3>

            {/* Contact Info - improved mobile spacing */}
            <div className="space-y-2 sm:space-y-3">
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

            {/* Newsletter Signup - improved mobile form */}
            <div className="pt-2">
              <p className="text-sm text-gray-600 mb-3 sm:mb-4">
                Subscribe for exclusive offers and updates
              </p>

              {isSubmitted ? (
                <div
                  className="p-3 bg-green-50 border border-green-200 rounded-lg transition-opacity"
                  style={{ animationDuration: `${ANIMATION_DURATION.normal}ms` }}
                >
                  <p className="text-sm text-green-800">
                    Thank you for subscribing! Check your email for confirmation.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-3 sm:flex-row sm:gap-0"
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
                    aria-invalid={!!validationError || !!error}
                  />
                  <Button
                    type="submit"
                    buttonSize="sm"
                    variant="primary"
                    className="w-full sm:w-auto sm:rounded-l-none px-4 py-3 sm:py-2 text-sm font-medium min-h-[44px] sm:min-h-[38px]"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                  </Button>
                </form>
              )}

              {(validationError || error) && !isSubmitted && (
                <p className="text-red-600 text-sm mt-2" role="alert">
                  {validationError || error?.message || 'Something went wrong. Please try again.'}
                </p>
              )}

              <p id="newsletter-help" className="sr-only">
                Subscribe to our newsletter for exclusive offers and updates
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom footer - improved mobile layout */}
      <div className="border-t border-gray-200 bg-white">
        <div className="w-full px-3 sm:px-6 lg:px-10 py-3 sm:py-4 lg:py-6">
          <div className="flex flex-col space-y-3 sm:flex-row sm:justify-between sm:items-center sm:space-y-0 text-center sm:text-left">
            {/* Copyright */}
            <p className="text-xs text-gray-500">
              &copy; {currentYear} {COMPANY_INFO.name}. All rights reserved.
            </p>

            {/* Legal Links - improved mobile spacing */}
            <div className="flex flex-wrap justify-center sm:justify-end gap-x-4 gap-y-2 text-xs">
              {legalLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-500 hover:text-black transition-colors duration-200 py-1 touch-manipulation"
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
