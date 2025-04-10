'use client';

// Core imports and dependencies
import Button from '@/components/ui/Button';
import Container from '@/components/ui/layout/Container';
import GradientBorder from '@/components/ui/GradientBorder';
import Section from '@/components/ui/layout/Section';
import { FiArrowRight } from 'react-icons/fi';
import { useWaitlist } from '@/contexts/WaitlistContext';
import MetricCard from '@/components/ui/hero/MetricCard';
import ProgressBar from '@/components/ui/hero/ProgressBar';

// Type definitions
interface WaitlistCtaProps {
  openWaitlist: () => void;
}

interface ProductFeaturesPanelProps {}

// Marketing message component with CTA button
const MarketingMessagePanel = ({ openWaitlist }: WaitlistCtaProps) => (
  <div className="w-full md:max-w-xl lg:max-w-lg text-left mb-10 lg:mb-0">
    {/* Headline with gradient text */}
    <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-2 md:mb-3 lg:mb-4 leading-tight text-white">
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-indigo-400 to-cyan-400">
        Scientifically
      </span>{' '}
      <br className="hidden lg:block" />
      Crafted Scents
    </h1>
    <p className="text-lg md:text-2xl lg:text-2xl text-gray-300 mb-2 md:mb-3 lg:mb-4 leading-relaxed">
      Personalized fragrances engineered with AI technology for your skin chemistry.
    </p>

    <div>
      <Button
        variant="neon"
        size="md"
        shape="pill"
        icon={<FiArrowRight />}
        iconPosition="right"
        onClick={openWaitlist}
      >
        Join Waitlist
      </Button>
    </div>
  </div>
);

// Displays skin chemistry metrics with animated percentage counters
const SkinChemistryDisplay = () => {
  return (
    <div className="mb-10 lg:mb-6">
      <div className="flex items-center mb-2 md:mb-3 border-b border-gray-700/50 pb-1 md:pb-1.5">
        <span className="mr-1.5 md:mr-2 text-sm md:text-base">🧪</span>
        <h3 className="text-xs md:text-sm font-semibold text-gray-300 uppercase tracking-wide">
          Skin Chemistry
        </h3>
      </div>
      <div className="grid grid-cols-3 gap-2 md:gap-3">
        <MetricCard 
          value={44}
          label="Hydration"
          bgColorClass="bg-cyan-900/30"
          textColorClass="text-cyan-400"
        />
        <MetricCard 
          value={55}
          label="pH Level"
          bgColorClass="bg-amber-900/30"
          textColorClass="text-amber-400"
        />
        <MetricCard 
          value={40}
          label="Sebum"
          bgColorClass="bg-rose-900/30"
          textColorClass="text-rose-400"
        />
      </div>
    </div>
  );
};

// Displays scent profile with animated progress bars
const ScentProfileDisplay = () => {
  return (
    <div>
      <div className="flex items-center mb-2 md:mb-3 border-b border-gray-700/50 pb-1 md:pb-1.5">
        <span className="mr-1.5 md:mr-2 text-sm md:text-base">🌸</span>
        <h3 className="text-xs md:text-sm font-semibold text-gray-300 uppercase tracking-wide">
          Scent Profile
        </h3>
      </div>
      <div className="space-y-2">
        <ProgressBar 
          label="Citrus"
          value={68}
          barColorClass="bg-yellow-400"
        />
        <ProgressBar 
          label="Floral"
          value={55}
          barColorClass="bg-pink-400"
        />
        <ProgressBar 
          label="Musk"
          value={66}
          barColorClass="bg-purple-400"
        />
      </div>
    </div>
  );
};

// Container for skin chemistry and scent profile displays
const ProductFeaturesPanel = ({}: ProductFeaturesPanelProps) => (
  <div className="w-full md:max-w-xl lg:max-w-sm bg-gray-900/40 backdrop-blur-sm rounded-xl p-5 border border-gray-800/50">
    <SkinChemistryDisplay />
    <ScentProfileDisplay />
  </div>
);

// Main hero section combining marketing message and product features
export default function Hero() {
  const { openWaitlist } = useWaitlist();

  return (
    <Section id="hero" ariaLabel="Hero section">
      <GradientBorder />

      <Container>
        <div className="flex flex-col justify-center items-center lg:flex-row lg:justify-between min-h-screen">
          <MarketingMessagePanel openWaitlist={openWaitlist} />
          <ProductFeaturesPanel />
        </div>
      </Container>
    </Section>
  );
}
