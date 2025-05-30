'use client';

import { memo, useEffect, useRef, useCallback, useState, type FormEvent, type FC } from 'react';
import { FiX, FiMail } from 'react-icons/fi';
import Button from '@/components/ui/button';
import Badge from '@/components/ui/badge';
import Input from '@/components/ui/input';

// Props interface for WaitlistModal component
export interface WaitlistModalProps {
  readonly isOpen: boolean; // Controls visibility of the modal
  readonly onClose: () => void; // Callback function to close the modal
}

const WaitlistModal: FC<WaitlistModalProps> = memo(({ isOpen, onClose }) => {
  // Element references for modal and input focus
  const modalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Form state
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleEmailChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }, []);

  const handleSubmit = useCallback(async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email.trim()) return;

    setIsSubmitting(true);

    try {
      // TODO: Implement actual waitlist submission logic
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
      setIsSubmitted(true);
    } catch (error) {
      console.error('Waitlist submission error:', error);
      // TODO: Add error handling UI
    } finally {
      setIsSubmitting(false);
    }
  }, [email]);

  const handleClose = useCallback(() => {
    if (!isSubmitting) {
      onClose();
      // Reset form when closing
      setTimeout(() => {
        setEmail('');
        setIsSubmitted(false);
      }, 300); // Delay to avoid flash during transition
    }
  }, [onClose, isSubmitting]);

  // Modal clickout detection and body scroll management
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        handleClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden'; // Prevent scrolling

      // Focus input on open for immediate typing
      const focusTimeout = setTimeout(() => {
        inputRef.current?.focus();
      }, 100);

      return () => {
        clearTimeout(focusTimeout);
      };
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'auto'; // Restore scrolling
    };
  }, [isOpen, handleClose]);

  // Keyboard escape key handler
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscapeKey);
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isOpen, handleClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      {/* Semi-transparent backdrop with blur */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" aria-hidden="true" />

      {/* Modal container */}
      <div
        ref={modalRef}
        className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6 lg:p-8 shadow-lg w-full max-w-md relative z-10"
        role="dialog"
        aria-modal="true"
        aria-labelledby="waitlist-title"
        aria-describedby="waitlist-description"
      >
        {/* Modal close button */}
        <button
          type="button"
          onClick={handleClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 p-1 rounded-full transition-colors duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
          aria-label="Close modal"
          disabled={isSubmitting}
        >
          <FiX size={20} />
        </button>

        {isSubmitted ? (
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Badge
                text="Welcome to the Waitlist!"
                textSize="xs"
                variant="success"
              />
            </div>
            <h2 id="waitlist-title" className="text-lg font-semibold text-black mb-4">
              Thank you for joining!
            </h2>
            <p id="waitlist-description" className="text-sm md:text-base text-gray-600 mb-5 leading-relaxed">
              We'll notify you as soon as we're ready to launch. Get ready to discover your perfect scent!
            </p>
            <Button onClick={handleClose} variant="primary">
              Close
            </Button>
          </div>
        ) : (
          <>
            <div className="flex justify-left mb-4">
              <Badge
                text="No Credit Card Required"
                textSize="xs"
                variant="success"
              />
            </div>

            <h2 id="waitlist-title" className="text-lg font-semibold text-black mb-2">
              Join Our Waitlist
            </h2>

            <p id="waitlist-description" className="text-sm md:text-base text-gray-600 mb-5 leading-relaxed font-light border-l-2 border-gray-300 pl-3">
              Be among the first to experience our AI personalized perfume technology.
            </p>

            {/* Email submission form */}
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <Input
                ref={inputRef}
                type="email"
                id="waitlist-email"
                name="email"
                value={email}
                onChange={handleEmailChange}
                autoComplete="email"
                variant="filled"
                inputSize="md"
                leftIcon={<FiMail size={18} />}
                placeholder="your-email@example.com"
                className="text-[16px]"
                required
                aria-describedby="email-help"
              />
              <p id="email-help" className="sr-only">
                Enter your email address to join our waitlist
              </p>

              <div className="flex flex-col">
                <Button
                  type="submit"
                  rightIcon
                  disabled={isSubmitting || !email.trim()}
                  aria-describedby="submit-help"
                >
                  {isSubmitting ? 'Joining...' : 'Join Waitlist'}
                </Button>
                <p id="submit-help" className="sr-only">
                  Submit your email to join the waitlist
                </p>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
});

WaitlistModal.displayName = 'WaitlistModal';

export default WaitlistModal;
