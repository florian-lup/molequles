'use client';

// Core imports and dependencies
import { useWaitlist } from '@/contexts/WaitlistContext';
import ProductFeaturesPanel from '@/components/ui/HeroFeatures';
import { GiMolecule } from 'react-icons/gi';
import { useEffect, useState } from 'react';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';

// Type definitions
interface WaitlistCtaProps {
  openWaitlist: () => void;
}

// Scientific marketing message component with CTA button
const MarketingMessagePanel = ({ openWaitlist }: WaitlistCtaProps) => {
  const [, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  return (
    <div className="w-full lg:max-w-lg text-left mb-6 md:mb-8 lg:mb-0">
      {/* Headline with laboratory-inspired styling */}
      <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 md:mb-3 lg:mb-4 leading-tight">
        <span className="font-mono text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500">
          Scientifically
        </span>{' '}
        <br className="hidden lg:block" />
        <span className="text-gray-100">Crafted Scents</span>
      </h1>
      
      <p className="text-base md:text-lg lg:text-xl text-gray-300 mb-4 md:mb-5 lg:mb-6 leading-relaxed font-light border-l-2 border-cyan-500 pl-3 md:pl-4">
        Personalized fragrances engineered with AI technology for your skin chemistry.
      </p>

      {/* Scientific credibility badge */}
      <Badge
        icon={<GiMolecule className="text-cyan-400 h-5 w-5" />}
        highlight="100%"
        text="Unique AI-generated formula composition"
        className="mb-6"
      />

      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-0">
        <Button 
          onClick={openWaitlist}
          size="md"
          rightIcon
        >
          Join Waitlist
        </Button>
        <span className="text-xs text-cyan-600 font-mono sm:ml-3 mt-2 sm:mt-0">Free Samples Available</span>
      </div>
    </div>
  );
};

// Main hero section combining marketing message and product features
export default function Hero() {
  const { openWaitlist } = useWaitlist();

  return (
    <section 
      id="hero" 
      aria-label="Hero section" 
      className="relative py-8 sm:py-12 md:py-16 lg:py-20"
    >
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

