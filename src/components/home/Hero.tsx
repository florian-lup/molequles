'use client';

// Core imports and dependencies
import { useWaitlist } from '@/hooks';
import ProductFeaturesPanel from '@/components/ui/HeroCard';
import { GiTestTubes } from 'react-icons/gi';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import { WaitlistCtaProps } from '@/types/home';
import { useClientSide } from '@/hooks';

// Marketing panel with headline, description and waitlist CTA button
const MarketingMessagePanel = ({ openWaitlist }: WaitlistCtaProps) => {
  
  return (
    <div className="w-full lg:max-w-lg text-left mb-6 md:mb-8 lg:mb-0">
      {/* Two-part gradient headline with responsive layout */}
      <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 md:mb-3 lg:mb-4 leading-tight">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500">
          Scientifically
        </span>{' '}
        <br className="hidden lg:block" />
        <span className="text-gray-100">Crafted Scents</span>
      </h1>
      
      {/* Concise value proposition with decorative border */}
      <p className="text-base md:text-lg lg:text-xl text-gray-300 mb-4 md:mb-5 lg:mb-6 leading-relaxed font-light border-l-2 border-cyan-500 pl-3 md:pl-4">
        Personalized fragrances engineered with AI technology for your skin chemistry.
      </p>

      {/* Highlight badge with unique selling point */}
      <Badge
        icon={<GiTestTubes className="text-cyan-400 h-5 w-5" />}
        highlight="100%"
        text="Unique AI-generated formula composition"
        className="mb-6"
      />

      {/* CTA button with additional promotional text */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-0">
        <Button 
          onClick={openWaitlist}
          size="md"
          rightIcon
        >
          Join Waitlist
        </Button>
        <span className="text-xs text-cyan-600 text-center sm:text-left sm:ml-3 mt-2 sm:mt-0">Free Samples Available</span>
      </div>
    </div>
  );
};

// Main hero section combining marketing message and interactive product features
export default function Hero() {
  const { openWaitlist } = useWaitlist();

  return (
    <section 
      id="hero" 
      aria-label="Hero section" 
      className="relative py-8 sm:py-12 md:py-16 lg:py-20"
    >
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Two-column layout: marketing message and interactive product display */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between py-2 md:py-4">
          <MarketingMessagePanel openWaitlist={openWaitlist} />
          <div className="w-full lg:max-w-lg">
            <ProductFeaturesPanel />
          </div>
        </div>
      </div>
    </section>
  );
}

