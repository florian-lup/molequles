'use client';

// Imports
import Button from '@/components/ui/Button';
import Container from '@/components/ui/layout/Container';
import Section from '@/components/ui/layout/Section';
import { FiArrowRight } from 'react-icons/fi';
import { useWaitlist } from '@/contexts/WaitlistContext';
import ProgressBar from '@/components/ui/ProgressBar';

// Props types
interface WaitlistCtaProps {
  openWaitlist: () => void;
}

interface PerfumeFormulaCardProps {}

// Marketing content and CTA section
const WaitlistPromotionPanel = ({ openWaitlist }: WaitlistCtaProps) => (
  <div className="w-full md:max-w-xl lg:max-w-lg text-left mb-10 lg:mb-0">
    {/* Headline with gradient text */}
    <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-2 md:mb-3 lg:mb-4 leading-tight text-white">
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-indigo-400 to-cyan-400">
        Discover Your
      </span>{' '}
      <br className="hidden lg:block" />
      <span className="whitespace-nowrap">Signature Scent</span>
    </h2>
    <p className="text-lg md:text-2xl lg:text-2xl text-gray-300 mb-2 md:mb-3 lg:mb-4 leading-relaxed">
      Join the waitlist for early access to our personalized perfume technology.
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

// Formula card header
const FormulaCardHeader = () => (
  <div className="flex items-center justify-between mb-2 md:mb-3 border-b border-gray-700/50 pb-1 md:pb-1.5">
    <div className="flex items-center">
      <h3 className="text-xs md:text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-indigo-400 to-cyan-400">
        Molequles
      </h3>
    </div>
    <span className="text-xs px-2 py-0.5 rounded-full bg-gray-800/50 text-gray-300 border border-gray-700/50">
      BETA
    </span>
  </div>
);

// Scent components grid display
const ScentIngredientGrid = () => (
  <div className="mb-3 md:mb-4">
    <h4 className="text-sm md:text-base font-semibold text-white mb-1 md:mb-2">
      Custom Scent Formula
    </h4>
    <p className="text-xs md:text-sm text-gray-300 mb-3 md:mb-4">
      Personalized based on your profile
    </p>

    <div className="grid grid-cols-2 gap-2 md:gap-3">
      {/* Citrus component */}
      <div className="bg-gray-800/50 rounded-lg p-2 md:p-3">
        <div className="space-y-0.5 md:space-y-1">
          <ProgressBar 
            label="Citrus" 
            value={75} 
            color="bg-blue-400"
            marginClassName="mb-0" 
          />
        </div>
      </div>

      {/* Floral component */}
      <div className="bg-gray-800/50 rounded-lg p-2 md:p-3">
        <div className="space-y-0.5 md:space-y-1">
          <ProgressBar 
            label="Floral" 
            value={55} 
            color="bg-pink-400"
            marginClassName="mb-0" 
          />
        </div>
      </div>

      {/* Woody component */}
      <div className="bg-gray-800/50 rounded-lg p-2 md:p-3">
        <div className="space-y-0.5 md:space-y-1">
          <ProgressBar 
            label="Woody" 
            value={65} 
            color="bg-amber-400"
            marginClassName="mb-0" 
          />
        </div>
      </div>

      {/* Spice component */}
      <div className="bg-gray-800/50 rounded-lg p-2 md:p-3">
        <div className="space-y-0.5 md:space-y-1">
          <ProgressBar 
            label="Spice" 
            value={50} 
            color="bg-red-400"
            marginClassName="mb-0" 
          />
        </div>
      </div>
    </div>
  </div>
);

// Card footer component
const FormulaCardFooter = () => (
  <div className="w-full bg-gray-800/40 rounded-lg p-1.5 md:p-2 text-center pointer-events-none">
    <span className="text-xs md:text-sm font-medium text-white">Get Your Perfume</span>
  </div>
);

// Formula card panel component
const PerfumeFormulaCard = ({}: PerfumeFormulaCardProps) => (
  <div className="w-full md:max-w-xl lg:max-w-sm bg-gray-900/40 backdrop-blur-sm rounded-xl p-3 md:p-4 lg:p-5 border border-gray-800/50">
    <FormulaCardHeader />
    <ScentIngredientGrid />
    <FormulaCardFooter />
  </div>
);

// Main CTA section
export default function CTA() {
  const { openWaitlist } = useWaitlist();

  return (
    <Section id="cta" ariaLabel="Call to action section">
      <Container>
        <div className="flex flex-col justify-center items-center lg:flex-row lg:justify-between min-h-screen">
          <WaitlistPromotionPanel openWaitlist={openWaitlist} />
          <PerfumeFormulaCard />
        </div>
      </Container>
    </Section>
  );
}
