'use client';

import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';

/**
 * Panel containing call-to-action message and waitlist form
 */
const CTAMessagePanel = () => {
  return (
    <div className="w-full text-center mx-auto px-4">
      {/* Centered headline */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-black leading-tight">
        Ready to Find Your Signature Scent?
      </h2>

      {/* Paragraph */}
      <p className="text-base sm:text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
        Sign up now and get <span className="text-emerald-600 font-semibold">20%</span> off your first order, plus <span className="text-emerald-600 font-semibold">free</span> shipping.
      </p>

      {/* Waitlist form */}
      <form className="mb-8 max-w-md mx-auto">
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-0">
          <input
            type="email"
            name="email"
            placeholder="Enter your email address"
            className="flex-1 px-4 py-4 sm:py-3 rounded-lg sm:rounded-l-lg sm:rounded-r-none border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all duration-200 text-base"
            required
          />
          <Button type="submit" size="lg" className="w-full sm:w-auto sm:rounded-l-none px-6" onClick={() => { }}>
            Join Waitlist
          </Button>
        </div>
      </form>

      {/* Badge */}
      <div className="flex justify-center">
        <Badge
          text="Free Samples Available"
          textSize="xs"
          dotColor="bg-green-500"
          bgColor="bg-green-50"
          textColor="text-green-700"
        />
      </div>
    </div>
  );
};

/**
 * Main CTA section with waitlist signup form
 */
export default function CTA() {
  return (
    <section
      id="cta"
      aria-label="Call to action section"
      className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-white"
    >
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Centered form layout */}
        <div className="flex flex-col items-center justify-center">
          <CTAMessagePanel />
        </div>
      </div>
    </section>
  );
}
