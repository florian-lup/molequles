'use client';

import { memo, useEffect, useRef, useCallback, useState, type FormEvent, type FC } from 'react';
import { FiX, FiMail } from 'react-icons/fi';
import Button from '@/components/ui/button';
import Badge from '@/components/ui/badge';
import Input from '@/components/ui/input';
import { useFormSubmission } from '@/hooks/useFormSubmission';
import { isValidEmail } from '@/utils';
import { API_ENDPOINTS, ANIMATION_DURATION } from '@/constants';

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
  const [validationError, setValidationError] = useState<string | null>(null);
  const { isSubmitting, error, submitForm } = useFormSubmission();
  const [isSubmitted, setIsSubmitted] = useState(false);

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
        const response = await fetch(API_ENDPOINTS.waitlist, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email }),
        });

        if (!response.ok) {
          throw new Error('Failed to join waitlist');
        }

        setIsSubmitted(true);
      });
    },
    [email, submitForm]
  );

  const handleClose = useCallback(() => {
    if (!isSubmitting) {
      onClose();
      // Reset form when closing
      setTimeout(() => {
        setEmail('');
        setIsSubmitted(false);
        setValidationError(null);
      }, ANIMATION_DURATION.normal); // Use constant for animation duration
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
        document.removeEventListener('mousedown', handleClickOutside);
        document.body.style.overflow = 'auto'; // Restore scrolling
      };
    } else {
      // Restore scrolling when modal is closed
      document.body.style.overflow = 'auto';
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
        className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6 lg:p-8 shadow-lg w-full max-w-md relative z-10 transition-all"
        style={{ transitionDuration: `${ANIMATION_DURATION.normal}ms` }}
        role="dialog"
        aria-modal="true"
        aria-labelledby="waitlist-title"
        aria-describedby="waitlist-description"
      >
        {/* Modal close button */}
        <button
          type="button"
          onClick={handleClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 p-1 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
          aria-label="Close modal"
          disabled={isSubmitting}
        >
          <FiX size={20} />
        </button>

        {isSubmitted ? (
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Badge text="Welcome to the Waitlist!" textSize="xs" variant="success" />
            </div>
            <h2 id="waitlist-title" className="text-lg font-semibold text-black mb-4">
              Thank you for joining!
            </h2>
            <p
              id="waitlist-description"
              className="text-sm md:text-base text-gray-600 mb-5 leading-relaxed"
            >
              We&apos;ll notify you as soon as we&apos;re ready to launch. Get ready to discover
              your perfect scent!
            </p>
            <Button onClick={handleClose} variant="primary">
              Close
            </Button>
          </div>
        ) : (
          <>
            <div className="flex justify-left mb-4">
              <Badge text="No Credit Card Required" textSize="xs" variant="success" />
            </div>

            <h2 id="waitlist-title" className="text-lg font-semibold text-black mb-2">
              Join Our Waitlist
            </h2>

            <p
              id="waitlist-description"
              className="text-sm md:text-base text-gray-600 mb-5 leading-relaxed font-light border-l-2 border-gray-300 pl-3"
            >
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
                aria-invalid={!!validationError || !!error}
              />
              {(validationError || error) && (
                <p className="text-red-600 text-sm -mt-2" role="alert">
                  {validationError || error?.message || 'Something went wrong. Please try again.'}
                </p>
              )}
              <p id="email-help" className="sr-only">
                Enter your email address to join our waitlist
              </p>

              <div className="flex flex-col">
                <Button
                  type="submit"
                  rightIcon
                  disabled={isSubmitting}
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
