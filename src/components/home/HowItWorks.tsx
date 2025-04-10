'use client';

import { FC } from 'react';
import Badge from '@/components/ui/Badge';
import GradientBorder from '@/components/ui/GradientBorder';
import Tag from '@/components/ui/Tag';

interface TimelineStepProps {
  step: number;
  title: string;
  description: string;
  icon: string;
  tags: { text: string; colorIndex: number }[];
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
            
            <div className="flex flex-wrap gap-1 xs:gap-1.5 sm:gap-2">
              {tags.map((tag, i) => (
                <Tag key={i} text={tag.text} colorIndex={tag.colorIndex as 0 | 1 | 2} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Define timeline steps data
const steps = [
  {
    step: 1,
    icon: "📊",
    title: "Collecting Skin Data",
    description: "Start the journey by visiting a local dermatologist to discover your unique skin parameters.",
    tags: [
      { text: "Biomarkers", colorIndex: 0 },
      { text: "Skin chemistry", colorIndex: 1 },
      { text: "Dermatology", colorIndex: 2 }
    ]
  },
  {
    step: 2,
    icon: "🧠",
    title: "AI-Powered Analysis",
    description: "Advanced AI interprets your data using insights from chemistry, dermatology, and perfumery.",
    tags: [
      { text: "Machine learning", colorIndex: 2 },
      { text: "Data analysis", colorIndex: 0 },
      { text: "Research integration", colorIndex: 1 }
    ]
  },
  {
    step: 3,
    icon: "🌸",
    title: "Creating Scent Profile",
    description: "An LLM predicts the ideal ingredient blend, crafting a custom scent with consistent performance.",
    tags: [
      { text: "Bespoke formula", colorIndex: 1 },
      { text: "Ingredient matching", colorIndex: 2 },
      { text: "Scent optimization", colorIndex: 0 }
    ]
  },
  {
    step: 4,
    icon: "🔄",
    title: "Continuous Optimization",
    description: "A feedback loop refines future versions based on your experience, so your scent evolves with you.",
    tags: [
      { text: "Feedback loop", colorIndex: 0 },
      { text: "Iterative process", colorIndex: 1 },
      { text: "Evolution", colorIndex: 2 }
    ]
  }
];

export default function HowItWorks() {
  return (
    <div 
      id="how-it-works" 
      className="bg-gray-950 relative w-full min-h-[550px] flex items-center justify-center overflow-hidden py-12 xs:py-16 sm:py-20 md:py-24"
      aria-label="How it works section"
    >
      <GradientBorder />
      
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
              <span className="whitespace-nowrap">Approach</span>
            </h2>
            <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-xs xs:max-w-sm sm:max-w-xl md:max-w-2xl mx-auto">
              Our scientific approach combines AI technology with cosmetic chemistry expertise to create your perfect signature scent.
            </p>
          </div>

          {/* Unified responsive timeline */}
          <div className="w-full max-w-5xl mx-auto relative">
            {steps.map((step) => (
              <TimelineStep
                key={step.step}
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
