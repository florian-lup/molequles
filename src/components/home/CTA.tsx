'use client';

import { useWaitlist } from '@/contexts/WaitlistContext';
import Button from '@/components/ui/Button';
import CtaFeatures from '@/components/ui/CtaFeatures';

// CTA content panel component
const CTAMessagePanel = () => {
  const { openWaitlist } = useWaitlist();
  
  return (
    <div className="w-full lg:max-w-lg text-left mb-8 lg:mb-0">
      {/* Headline with gradient styling */}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
        <span className="font-mono text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500">
          Discover Your
        </span>{' '}
        <br className="hidden sm:block" />
        <span className="text-gray-100">Signature Scent</span>
      </h2>
      
      <p className="text-base md:text-lg lg:text-xl text-gray-300 mb-6 leading-relaxed font-light border-l-2 border-cyan-500 pl-3 md:pl-4">
        Join the waitlist for early access to our personalized perfume technology.
      </p>

      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-0">
        <Button 
          onClick={openWaitlist}
          size="lg"
          rightIcon
        >
          Join Waitlist
        </Button>
        <span className="text-xs text-cyan-600 font-mono sm:ml-3 mt-2 sm:mt-0">Free Samples Available</span>
      </div>
    </div>
  );
};

// Main CTA section
export default function CTA() {
  return (
    <section 
      id="cta" 
      aria-label="Call to action section" 
      className="relative py-16 md:py-20 lg:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between py-2 md:py-4">
          <CTAMessagePanel />
          <div className="w-full lg:max-w-lg">
            <CtaFeatures />
          </div>
        </div>
      </div>
    </section>
  );
}
