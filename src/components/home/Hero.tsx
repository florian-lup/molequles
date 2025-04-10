'use client';

// Imports
import Button from '@/components/ui/Button';
import Container from '@/components/ui/layout/Container';
import GradientBorder from '@/components/ui/GradientBorder';
import Section from '@/components/ui/layout/Section';
import { FiArrowRight } from 'react-icons/fi';
import { useWaitlist } from '@/contexts/WaitlistContext';
import PercentageCard from '@/components/ui/PercentageCard';
import ProgressBar from '@/components/ui/ProgressBar';

// Props types
interface WaitlistCtaProps {
  openWaitlist: () => void;
}

interface ProductFeaturesPanelProps {}

// Marketing content and CTA section
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

// Skin chemistry metrics display
const SkinChemistryDisplay = () => (
  <div className="mb-3 md:mb-4 lg:mb-5">
    <div className="flex items-center mb-2 md:mb-3 border-b border-gray-700/50 pb-1 md:pb-1.5">
      <span className="mr-1.5 md:mr-2 text-sm md:text-base">🧪</span>
      <h3 className="text-xs md:text-sm font-semibold text-gray-300 uppercase tracking-wide">
        Skin Chemistry
      </h3>
    </div>
    <div className="grid grid-cols-3 gap-2 md:gap-3">
      <PercentageCard
        value={44}
        label="Hydration"
        bgColor="bg-blue-900/30"
        textColor="text-blue-400"
      />
      <PercentageCard
        value={55}
        label="pH Level"
        bgColor="bg-emerald-900/30"
        textColor="text-emerald-400"
      />
      <PercentageCard
        value={40}
        label="Sebum"
        bgColor="bg-purple-900/30"
        textColor="text-purple-400"
      />
    </div>
  </div>
);

// Scent profile visualization
const ScentProfileVisualizer = () => (
  <div>
    <div className="flex items-center mb-2 md:mb-3 border-b border-gray-700/50 pb-1 md:pb-1.5">
      <span className="mr-1.5 md:mr-2 text-sm md:text-base">🌸</span>
      <h3 className="text-xs md:text-sm font-semibold text-gray-300 uppercase tracking-wide">
        Scent Profile
      </h3>
    </div>
    <div className="space-y-0.5 md:space-y-1 lg:space-y-1.5">
      <ProgressBar label="Citrus" value={68} color="bg-yellow-400" />
      <ProgressBar label="Floral" value={55} color="bg-pink-400" />
      <ProgressBar label="Musk" value={66} color="bg-purple-400" />
    </div>
  </div>
);

// Interactive product metrics panel
const ProductFeaturesPanel = ({}: ProductFeaturesPanelProps) => (
  <div className="w-full md:max-w-xl lg:max-w-sm bg-gray-900/40 backdrop-blur-sm rounded-xl p-3 md:p-4 lg:p-5 border border-gray-800/50">
    <SkinChemistryDisplay />
    <ScentProfileVisualizer />
  </div>
);

// Main hero section
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
