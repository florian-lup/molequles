'use client';

import { memo, useCallback, useState, type FormEvent } from 'react';
import Button from '@/components/ui/button';
import Badge from '@/components/ui/badge';
import Input from '@/components/ui/input';
import Section from '@/components/layout/section';
import { useFormSubmission } from '@/hooks/useFormSubmission';
import { isValidEmail } from '@/utils';
import { API_ENDPOINTS } from '@/constants';

/**
 * Panel containing call-to-action message and waitlist form
 */
const LeadCapturePanel = memo(() => {
  const [email, setEmail] = useState('');
  const [validationError, setValidationError] = useState<string | null>(null);
  const { isSubmitting, error, submitForm } = useFormSubmission();
  const [isSubmitted, setIsSubmitted] = useState(false);

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
          throw new Error('Failed to join waitlist');
        }

        setIsSubmitted(true);
        setEmail('');
      });
    },
    [email, submitForm]
  );

  const handleEmailChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setValidationError(null);
  }, []);

  if (isSubmitted) {
    return (
      <div className="w-full text-center mx-auto px-3 sm:px-4">
        <div className="relative inline-block">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-black leading-tight bg-gradient-to-r from-gray-900 via-black to-emerald-600 bg-clip-text text-transparent">
            Thank you for joining!
          </h2>
        </div>
        <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
          We&apos;ll be in touch soon with your exclusive early access and discount code.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full text-center mx-auto px-3 sm:px-4">
      {/* Centered headline - improved mobile typography */}
      <div className="relative inline-block">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-black leading-tight bg-gradient-to-r from-gray-900 via-black to-emerald-600 bg-clip-text text-transparent">
          Ready to Find Your Signature Scent?
        </h2>
      </div>

      {/* Paragraph - improved mobile spacing and typography */}
      <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
        Sign up now and get <span className="text-emerald-600 font-semibold">20%</span> off your
        first order, plus <span className="text-emerald-600 font-semibold">free</span> shipping
      </p>

      {/* Waitlist form - improved mobile layout */}
      <form onSubmit={handleSubmit} className="mb-6 sm:mb-8 max-w-md mx-auto" noValidate>
        <div className="flex flex-col gap-3 sm:flex-row sm:gap-0">
          <Input
            type="email"
            id="leadcapture-email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            autoComplete="email"
            placeholder="Enter your email address"
            inputSize="lg"
            roundedVariant="left"
            className="flex-1"
            required
            aria-describedby="email-help"
            aria-invalid={!!validationError || !!error}
          />
          <Button
            type="submit"
            buttonSize="lg"
            className="w-full sm:w-auto sm:rounded-l-none px-6 min-h-[52px]"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Joining...' : 'Join Waitlist'}
          </Button>
        </div>
        {(validationError || error) && (
          <p className="text-red-600 text-sm mt-2" role="alert">
            {validationError || error?.message || 'Something went wrong. Please try again.'}
          </p>
        )}
        <p id="email-help" className="sr-only">
          Enter your email to join the waitlist and receive exclusive offers
        </p>
      </form>

      {/* Trust badges - improved mobile layout and spacing */}
      <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 mt-4 sm:mt-6">
        <Badge
          text="30-Day Money Back Guarantee"
          variant="default"
          textSize="xs"
          icon={<span className="text-yellow-500">🏅</span>}
          showDot={false}
        />
        <Badge
          text="Cruelty-Free & Sustainable"
          variant="default"
          textSize="xs"
          icon={<span className="text-green-600">🌿</span>}
          showDot={false}
        />
        <Badge
          text="Dermatologist Approved"
          variant="default"
          textSize="xs"
          icon={<span className="text-blue-600">🧪</span>}
          showDot={false}
        />
      </div>
    </div>
  );
});

LeadCapturePanel.displayName = 'LeadCapturePanel';

/**
 * Main LeadCapture section with waitlist signup form
 */
const LeadCapture = memo(() => {
  return (
    <Section id="LeadCapture" ariaLabel="Call to action section" padding="md" frameStyle="gradient">
      {/* Centered form layout */}
      <div className="flex flex-col items-center justify-center">
        <LeadCapturePanel />
      </div>
    </Section>
  );
});

LeadCapture.displayName = 'LeadCapture';

export default LeadCapture;
