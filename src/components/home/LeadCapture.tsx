'use client';

import Button from '@/components/ui/button';
import Badge from '@/components/ui/badge';
import Input from '@/components/ui/input';
import Section from '@/components/layout/section';

/**
 * Panel containing call-to-action message and waitlist form
 */
const LeadCapturePanel = () => {
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
      <form className="mb-8 max-w-md mx-auto">
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-0">
          <Input
            type="email"
            name="email"
            placeholder="Enter your email address"
            inputSize="lg"
            roundedVariant="left"
            className="flex-1"
            required
          />
          <Button type="submit" buttonSize="lg" className="w-full sm:w-auto sm:rounded-l-none px-6" onClick={() => { }}>
            Join Waitlist
          </Button>
        </div>
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
};

/**
 * Main LeadCapture section with waitlist signup form
 */
export default function LeadCapture() {
  return (
    <Section id="LeadCapture" ariaLabel="Call to action section" padding="md">
      {/* Centered form layout */}
      <div className="flex flex-col items-center justify-center">
        <LeadCapturePanel />
      </div>
    </Section>
  );
}
