'use client';

import { FC } from 'react';
import Badge from '@/components/ui/Badge';
import GradientBorder from '@/components/ui/GradientBorder';
import Tag from '@/components/ui/Tag';
import { motion } from 'framer-motion';

interface TimelineStepProps {
  step: number;
  title: string;
  description: string;
  icon: string;
  tags: string[];
}

// Timeline steps with responsive design for all screen sizes
const TimelineStep: FC<TimelineStepProps> = ({ step, title, description, icon, tags }) => {
  const isLastStep = step === 4; // Identify the last step
  const isFirstStep = step === 1; // Identify the first step
  
  return (
    <div className="relative">
      {/* Vertical line - hidden on smaller screens */}
      <div className={`absolute left-1/2 transform -translate-x-1/2 ${isFirstStep ? 'h-1/2 top-1/2' : isLastStep ? 'h-1/2' : 'h-full'} w-0.5 bg-gradient-to-b from-indigo-400/50 to-pink-400/50 top-0 z-0 hidden lg:block`}></div>
      
      {/* Content container - no bottom margin for tight stacking */}
      <div className="flex items-center justify-center relative z-10">
        {/* Step number - hidden on smaller screens */}
        <div className="flex-shrink-0 hidden lg:flex items-center justify-center w-8 xs:w-10 sm:w-12 md:w-14 h-8 xs:h-10 sm:h-12 md:h-14 rounded-full bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 text-white font-bold text-xs xs:text-sm sm:text-base md:text-lg z-20 absolute left-1/2 transform -translate-x-1/2">
          {step}
        </div>
        
        {/* Card - centered on mobile, alternating on desktop */}
        <div className={`w-full lg:w-5/12 ${step % 2 === 0 ? 'lg:ml-auto' : 'lg:mr-auto'}`}>
          <div className="bg-gray-900/40 backdrop-blur-sm rounded-xl p-3 xs:p-4 sm:p-5 md:p-6 border border-gray-800/50 hover:border-gray-700/70 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10 my-4 xs:my-5 sm:my-6 md:my-7 lg:my-8">
            <div className="mb-2 xs:mb-3 sm:mb-4 md:mb-5 flex items-center border-b border-gray-700/50 pb-1.5">
              <span className="mr-2 text-base xs:text-lg sm:text-xl md:text-2xl">{icon}</span>
              <h3 className="text-base xs:text-lg sm:text-xl font-semibold text-white truncate">{title}</h3>
              {/* Display step number within the card on smaller screens */}
              <span className="ml-auto text-xs xs:text-sm sm:text-base font-medium text-gray-400 lg:hidden">Step {step}</span>
            </div>
            
            <p className="text-xs xs:text-sm sm:text-base text-gray-400 leading-relaxed mb-3 xs:mb-4">{description}</p>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-1 xs:gap-1.5 sm:gap-2">
              {tags.map((tag, i) => (
                <Tag key={i} text={tag} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function HowItWorks() {
  const steps = [
    {
      step: 1,
      icon: "📊",
      title: "Collecting Skin Data",
      description: "Start the journey by visiting a local dermatologist to discover your unique skin parameters.",
      tags: ["Biomarkers", "Skin chemistry", "Dermatology"]
    },
    {
      step: 2,
      icon: "🧠",
      title: "AI-Powered Analysis",
      description: "Advanced AI interprets your data using insights from chemistry, dermatology, and perfumery.",
      tags: ["Machine learning", "Data analysis", "Research integration"]
    },
    {
      step: 3,
      icon: "🌸",
      title: "Creating Scent Profile",
      description: "An LLM predicts the ideal ingredient blend, crafting a custom scent with consistent performance.",
      tags: ["Bespoke formula", "Ingredient matching", "Scent optimization"]
    },
    {
      step: 4,
      icon: "🔄",
      title: "Continuous Optimization",
      description: "A feedback loop refines future versions based on your experience, so your scent evolves with you.",
      tags: ["Feedback loop", "Iterative process", "Evolution"]
    }
  ];

  return (
    <div 
      id="how-it-works" 
      className="bg-gray-950 relative w-full min-h-screen py-16 xs:py-20 sm:py-24 md:py-28 lg:py-32 overflow-hidden flex items-center justify-center"
      aria-label="How it works section"
    >
      <GradientBorder />
      
      {/* Decorative elements - responsive positioning */}
      <div className="absolute top-[15%] right-[10%] w-16 xs:w-20 sm:w-24 md:w-32 lg:w-40 h-16 xs:h-20 sm:h-24 md:h-32 lg:h-40 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/10 blur-2xl"></div>
      <div className="absolute bottom-[20%] left-[8%] w-16 xs:w-20 sm:w-28 md:w-36 lg:w-44 h-16 xs:h-20 sm:h-28 md:h-36 lg:h-44 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/10 blur-2xl"></div>
      <div className="absolute top-[40%] right-[25%] w-12 xs:w-16 sm:w-20 md:w-28 h-12 xs:h-16 sm:h-20 md:h-28 rounded-full bg-gradient-to-r from-indigo-500/15 to-purple-500/10 blur-xl"></div>
      
      {/* Decorative dots */}
      <div className="absolute top-1/4 right-1/3 w-1.5 xs:w-2 sm:w-3 h-1.5 xs:h-2 sm:h-3 rounded-full bg-pink-400/50 animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 left-1/4 w-1.5 xs:w-2 sm:w-3 h-1.5 xs:h-2 sm:h-3 rounded-full bg-indigo-400/50 animate-pulse"></div>
      <div className="absolute top-1/2 right-1/4 w-2 xs:w-3 sm:w-4 md:w-5 h-2 xs:h-3 sm:h-4 md:h-5 rounded-full bg-cyan-400/50 animate-pulse-slow"></div>
      <div className="absolute top-2/3 left-1/2 w-1.5 xs:w-2 h-1.5 xs:h-2 rounded-full bg-purple-400/50 animate-pulse"></div>
      <div className="absolute bottom-1/3 right-1/3 w-1.5 xs:w-2 sm:w-3 h-1.5 xs:h-2 sm:h-3 rounded-full bg-pink-300/50 animate-pulse-slow"></div>
      
      <div className="mx-auto max-w-7xl w-full px-4 xs:px-5 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col items-center">
          {/* Header section */}
          <div className="text-center max-w-xs xs:max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-14 lg:mb-16">
            <div className="mb-3 sm:mb-4">
              <Badge>The Process</Badge>
            </div>
            <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 xs:mb-4 sm:mb-5 md:mb-6 leading-tight text-white">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-indigo-400 to-cyan-400">
                Scientific
              </span>
              <br className="hidden xs:block" />
              <span className="inline xs:hidden"> </span>
              Approach
            </h2>
            <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-xs xs:max-w-sm sm:max-w-xl md:max-w-2xl mx-auto">
              Our scientific approach combines AI technology with cosmetic chemistry expertise to create your perfect signature scent.
            </p>
          </div>

          {/* Unified responsive timeline */}
          <div className="w-full max-w-5xl mx-auto relative">
            {steps.map((step, index) => (
              <TimelineStep
                key={index}
                step={step.step}
                icon={step.icon}
                title={step.title}
                description={step.description}
                tags={step.tags}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
