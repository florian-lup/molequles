'use client';

// Imports
import Button from '@/components/ui/Button';
import Container from '@/components/ui/layout/Container';
import Section from '@/components/ui/layout/Section';
import { FiArrowRight } from 'react-icons/fi';
import { useWaitlist } from '@/contexts/WaitlistContext';

// Props types
interface WaitlistCtaProps {
  openWaitlist: () => void;
}

interface PerfumeFormulaCardProps {}

// Marketing content and CTA section
const WaitlistPromotionPanel = ({ openWaitlist }: WaitlistCtaProps) => (
  <div className="w-full lg:max-w-lg text-left mb-10 lg:mb-0">
    {/* Headline with gradient text */}
    <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-2 md:mb-3 lg:mb-4 leading-tight text-white">
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-indigo-400 to-cyan-400">
        Discover Your
      </span>{' '}
      <br className="hidden lg:block" />
      Signature Scent
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
const IngredientList = () => {
  // Note data with type, color, percentage range, and ingredients
  const notes = [
    { 
      type: "Top Notes", 
      colorClass: "text-blue-400", 
      percentage: "25%", 
      ingredients: "Citrus, Bergamot, Lavender" 
    },
    { 
      type: "Middle Notes", 
      colorClass: "text-pink-400", 
      percentage: "60%", 
      ingredients: "Rose, Jasmine, Spice" 
    },
    { 
      type: "Base Notes", 
      colorClass: "text-amber-400", 
      percentage: "40%", 
      ingredients: "Sandalwood, Vanilla, Musk" 
    }
  ];

  return (
    <div>
      <p className="text-xs md:text-sm text-gray-300 mb-3 md:mb-4">
        Your signature scent, scientifically personalized for you.
      </p>

      <div className="flex flex-col gap-2 md:gap-3">
        {notes.map((note, index) => (
          <div key={index} className="bg-gray-800/50 rounded-lg p-2 md:p-3">
            <div className="flex justify-between items-center mb-1">
              <span className={`text-xs md:text-sm font-medium ${note.colorClass}`}>{note.type}</span>
              <span className="text-xs md:text-sm text-gray-300">{note.percentage}</span>
            </div>
            <p className="text-xs text-gray-400">{note.ingredients}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Formula card panel component
const PerfumeFormulaCard = ({}: PerfumeFormulaCardProps) => (
  <div className="w-full lg:max-w-md bg-gray-900/40 backdrop-blur-sm rounded-xl p-3 md:p-4 lg:p-5 border border-gray-800/50">
    <FormulaCardHeader />
    <IngredientList />
  </div>
);

// Main CTA section
export default function CTA() {
  const { openWaitlist } = useWaitlist();

  return (
    <Section id="cta" ariaLabel="Call to action section">

      <Container className="flex flex-col justify-center items-center lg:flex-row lg:justify-between">
        <WaitlistPromotionPanel openWaitlist={openWaitlist} />
        <PerfumeFormulaCard />
      </Container>
    </Section>
  );
}
