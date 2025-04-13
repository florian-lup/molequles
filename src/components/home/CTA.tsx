'use client';

// Imports
import Button from '@/components/ui/Button';
import Container from '@/components/ui/layout/Container';
import Section from '@/components/ui/layout/Section';
import { FiArrowRight } from 'react-icons/fi';
import { useWaitlist } from '@/contexts/WaitlistContext';
import { motion } from 'framer-motion';
import { createFlowAnimation, createPercentageAnimation } from '@/utils/animationUtils';
import GradientBorder from '@/components/ui/GradientBorder';
import { useState, useEffect } from 'react';

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

// Cylinder component representing scent composition
const NoteCylinder = () => {
  // Animate between 30% and 75%
  const flowAnimation = createFlowAnimation(30, 75, 8); // min 30%, max 75%, duration 8s
  
  return (
    <div className="relative h-full w-1.5 rounded-full overflow-hidden bg-gray-700/30">
      <motion.div 
        className="absolute w-full bottom-0 left-0 rounded-full"
        style={{ 
          background: 'linear-gradient(to top, #fbbf24, #f472b6, #60a5fa)'
        }}
        {...flowAnimation}
      />
    </div>
  );
};

// Scent components grid display
const IngredientList = () => {
  // Client-side check for animations
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Note data with type, color, and numeric value
  const notes = [
    { 
      type: "Top Notes", 
      colorClass: "text-blue-400", 
      value: 25, // Changed from percentage: "25%"
      ingredients: "Citrus, Bergamot, Lavender" 
    },
    { 
      type: "Middle Notes", 
      colorClass: "text-pink-400", 
      value: 60, // Changed from percentage: "60%"
      ingredients: "Rose, Jasmine, Spice" 
    },
    { 
      type: "Base Notes", 
      colorClass: "text-amber-400", 
      value: 40, // Changed from percentage: "40%"
      ingredients: "Sandalwood, Vanilla, Musk" 
    }
  ];

  return (
    <div>

      <div className="flex gap-3 md:gap-4">
        <div className="flex flex-col gap-2 md:gap-3 flex-1">
          {notes.map((note, index) => {
            // Use note.value directly for animation
            // Destructure correctly: animation object, count motion value, rounded motion value
            const { animation, count, rounded } = createPercentageAnimation(isClient, note.value); // Pass note.value directly

            return (
              <div key={index} className="bg-gray-800/50 rounded-lg p-2 md:p-3">
                <div className="flex justify-between items-center mb-1">
                  <span className={`text-xs md:text-sm font-medium ${note.colorClass}`}>{note.type}</span>
                  {/* Animated percentage */}
                  <motion.span 
                    className={`text-xs md:text-sm ${note.colorClass}`}
                    // Apply animation properties directly from the animation object
                    animate={animation.animate} 
                    transition={animation.transition}
                    // Use the separate 'count' motion value in onUpdate
                    onUpdate={(latest) => {
                      if (typeof latest.number === 'number') {
                        count.set(latest.number); // Use count directly
                      }
                    }}
                  >
                    {/* Wrap rounded value in motion.span and add % outside */}
                    <motion.span>{rounded}</motion.span>%
                  </motion.span>
                </div>
                <p className="text-xs text-gray-400">{note.ingredients}</p>
              </div>
            );
          })}
        </div>
        
        {/* Cylinder positioned to the right */}
        <div className="flex items-center">
          <NoteCylinder />
        </div>
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
      <GradientBorder />
      
      <Container className="flex flex-col justify-center items-center lg:flex-row lg:justify-between">
        <WaitlistPromotionPanel openWaitlist={openWaitlist} />
        <PerfumeFormulaCard />
      </Container>
    </Section>
  );
}
