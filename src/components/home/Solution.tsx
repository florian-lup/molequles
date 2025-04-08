'use client';

import { FC } from 'react';
import Badge from '@/components/ui/Badge';
import GradientBorder from '@/components/ui/GradientBorder';
import Tag from '@/components/ui/Tag';
import { motion } from 'framer-motion';
import { SolutionDecorations } from '@/components/ui/DecorativeElements';

interface SolutionCardProps {
  icon: string;
  title: string;
  description: string;
  tags: string[];
  className?: string;
}

const SolutionCard: FC<SolutionCardProps> = ({ icon, title, description, tags, className }) => {
  return (
    <div className={`bg-gray-900/40 backdrop-blur-sm rounded-xl p-3 xs:p-4 sm:p-5 md:p-6 border border-gray-800/50 hover:border-gray-700/70 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10 flex flex-col h-full ${className || ''}`}>
      <div className="mb-2 xs:mb-3 sm:mb-4 md:mb-5 flex items-center border-b border-gray-700/50 pb-1.5">
        <span className="mr-2 xs:mr-3 text-lg xs:text-xl sm:text-2xl">{icon}</span>
        <h3 className="text-base xs:text-lg sm:text-xl font-semibold text-white truncate">{title}</h3>
      </div>
      
      <p className="text-xs xs:text-sm sm:text-base text-gray-400 leading-relaxed mb-3 xs:mb-4">{description}</p>
      
      <div className="flex flex-wrap gap-1 xs:gap-1.5 sm:gap-2 mt-auto">
        {tags.map((tag, i) => (
          <Tag key={i} text={tag} index={i} />
        ))}
      </div>
    </div>
  );
};

// Separate AI Visualization component for better organization
const AIVisualization = () => (
  <div className="relative w-40 xs:w-48 sm:w-56 md:w-64 lg:w-72 h-40 xs:h-48 sm:h-56 md:h-64 lg:h-72 rounded-full bg-gradient-to-r from-indigo-500/30 to-pink-500/30 flex items-center justify-center animate-pulse-very-slow">
    <motion.div 
      className="absolute w-32 xs:w-40 sm:w-48 md:w-56 lg:w-64 h-32 xs:h-40 sm:h-48 md:h-56 lg:h-64 rounded-full border border-indigo-400/40 flex items-center justify-center"
      animate={{ rotate: 360 }}
      transition={{ 
        duration: 20, 
        repeat: Infinity, 
        ease: "linear" 
      }}
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-indigo-400"></div>
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-indigo-400"></div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-indigo-400"></div>
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-indigo-400"></div>
    </motion.div>
    
    <motion.div 
      className="absolute w-24 xs:w-32 sm:w-40 md:w-48 lg:w-56 h-24 xs:h-32 sm:h-40 md:h-48 lg:h-56 rounded-full border border-pink-400/30 flex items-center justify-center"
      animate={{ rotate: -360 }}
      transition={{ 
        duration: 15, 
        repeat: Infinity, 
        ease: "linear" 
      }}
    >
      <div className="absolute top-1/4 right-0 w-2 h-2 rounded-full bg-pink-400"></div>
      <div className="absolute bottom-1/4 left-0 w-2 h-2 rounded-full bg-pink-400"></div>
      <div className="absolute top-0 left-1/4 w-2 h-2 rounded-full bg-pink-400"></div>
      <div className="absolute bottom-0 right-1/4 w-2 h-2 rounded-full bg-pink-400"></div>
    </motion.div>
    
    {/* Center icon */}
    <div className="z-10 w-14 xs:w-16 sm:w-20 md:w-24 h-14 xs:h-16 sm:h-20 md:h-24 rounded-full bg-gray-900/80 backdrop-blur-sm flex items-center justify-center border border-gray-700/50">
      <span className="text-xl xs:text-2xl sm:text-3xl">🧪</span>
    </div>
  </div>
);

// Solution data
const solutionCards = [
  {
    icon: "✨",
    title: "Personalized to Your Skin",
    description: "Instead of forcing your skin to adapt to a generic scent, we craft a formula that works with your unique chemistry.",
    tags: ["Bespoke formulas", "Skin-matched", "Long-lasting"]
  },
  {
    icon: "🔬",
    title: "Scientific Precision",
    description: "Our AI analyzes various skin parameters to predict how different ingredients will interact with your body chemistry.",
    tags: ["AI-powered", "Data-driven", "Chemistry analysis"]
  }
];

export default function Solution() {
  return (
    <div 
      id="solution" 
      className="bg-gray-950 relative w-full min-h-screen py-16 xs:py-20 sm:py-24 md:py-28 lg:py-32 overflow-hidden flex items-center justify-center"
      aria-label="Solution section"
    >
      <GradientBorder />
      <SolutionDecorations />
      
      <div className="mx-auto max-w-7xl w-full px-4 xs:px-5 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col items-center">
          {/* Header section */}
          <div className="text-center max-w-xs xs:max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16">
            <div className="mb-3 sm:mb-4">
              <Badge>Our Approach</Badge>
            </div>
            <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 xs:mb-4 sm:mb-5 md:mb-6 leading-tight text-white">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-indigo-400 to-cyan-400">
                Redesigning
              </span>
              <br className="hidden xs:block" />
              <span className="inline xs:hidden"> </span>
              <span className="whitespace-nowrap">Perfumery</span>
            </h2>
            <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-xs xs:max-w-sm sm:max-w-xl md:max-w-2xl mx-auto">
              We use advanced AI to analyze your skin traits and identify perfume ingredients that complement your natural chemistry.
            </p>
          </div>

          {/* Main content */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
            {/* Left side - Visual representation */}
            <div className="relative flex items-center justify-center order-last lg:order-first mt-8 sm:mt-10 lg:mt-0">
              <div className="relative w-full max-w-[260px] xs:max-w-xs sm:max-w-sm md:max-w-md h-[220px] xs:h-[260px] sm:h-[300px] md:h-[350px] flex items-center justify-center">
                <AIVisualization />
              </div>
            </div>
            
            {/* Right side - Solution cards */}
            <div className="flex flex-col gap-4 xs:gap-5 sm:gap-6 lg:gap-8">
              {solutionCards.map((card, index) => (
                <SolutionCard
                  key={index}
                  icon={card.icon}
                  title={card.title}
                  description={card.description}
                  tags={card.tags}
                  className={index === 0 ? "mb-1 xs:mb-2" : ""}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
