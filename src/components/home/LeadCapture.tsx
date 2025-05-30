'use client';

import { memo, useCallback, useState, type FormEvent } from 'react';
import Button from '@/components/ui/button';
import Badge from '@/components/ui/badge';
import Input from '@/components/ui/input';
import Section from '@/components/layout/section';

/**
 * Panel containing call-to-action message and waitlist form
 */
const LeadCapturePanel = memo(() => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = useCallback(async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email.trim()) return;

    setIsSubmitting(true);

    try {
      // TODO: Implement actual form submission logic
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
      setIsSubmitted(true);
      setEmail('');
    } catch (error) {
      console.error('Form submission error:', error);
      // TODO: Add error handling UI
    } finally {
      setIsSubmitting(false);
    }
  }, [email]);

  const handleEmailChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }, []);

  if (isSubmitted) {
    return (
      <div className="w-full text-center mx-auto px-4">
        <div className="relative inline-block">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-black leading-tight bg-gradient-to-r from-gray-900 via-black to-emerald-600 bg-clip-text text-transparent">
            Thank you for joining!
          </h2>
        </div>
        <p className="text-base md:text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          We'll be in touch soon with your exclusive early access and discount code.
        </p>
        <div className="flex justify-center">
          <Badge
            text="You're on the list!"
            textSize="xs"
            variant="success"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="w-full text-center mx-auto px-4">
      {/* Centered headline */}
      <div className="relative inline-block">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-black leading-tight bg-gradient-to-r from-gray-900 via-black to-emerald-600 bg-clip-text text-transparent">
          Ready to Find Your Signature Scent?
        </h2>
      </div>

      {/* Paragraph */}
      <p className="text-base md:text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
        Sign up now and get <span className="text-emerald-600 font-semibold">20%</span> off your first order, plus <span className="text-emerald-600 font-semibold">free</span> shipping.
      </p>

      {/* Waitlist form */}
      <form onSubmit={handleSubmit} className="mb-8 max-w-md mx-auto" noValidate>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-0">
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
          />
          <Button
            type="submit"
            buttonSize="lg"
            className="w-full sm:w-auto sm:rounded-l-none px-6"
            disabled={isSubmitting || !email.trim()}
          >
            {isSubmitting ? 'Joining...' : 'Join Waitlist'}
          </Button>
        </div>
        <p id="email-help" className="sr-only">
          Enter your email to join the waitlist and receive exclusive offers
        </p>
      </form>

      {/* Badge */}
      <div className="flex justify-center">
        <Badge
          text="Free Samples Available"
          textSize="xs"
          variant="success"
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
    <Section id="LeadCapture" ariaLabel="Call to action section" padding="md">
      {/* Centered form layout */}
      <div className="flex flex-col items-center justify-center">
        <LeadCapturePanel />
      </div>
    </Section>
  );
});

LeadCapture.displayName = 'LeadCapture';

export default LeadCapture;
