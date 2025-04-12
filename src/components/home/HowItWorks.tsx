'use client';

import { FC } from 'react';
import Badge from '@/components/ui/Badge';
import GradientBorder from '@/components/ui/GradientBorder';
import Container from '@/components/ui/layout/Container';
import Section from '@/components/ui/layout/Section';

interface StepProps {
  step: number;
  title: string;
  description: string;
  icon: string;
}

// Redesigned step card without animation
const StepCard: FC<StepProps> = ({ step, title, description, icon }) => {
  return (
    <div 
      className="relative bg-gray-900/40 backdrop-blur-sm rounded-xl p-4 sm:p-5 md:p-6 border border-gray-800/50 hover:border-gray-700/70 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10 flex flex-col h-full"
    >
      {/* Step Number Badge */}
      <div className="absolute top-3 left-3 w-8 h-8 flex items-center justify-center rounded-full bg-indigo-600/30 border border-indigo-500/50 text-indigo-300 font-semibold text-sm shadow-md">
        {step}
      </div>
      
      {/* Icon and Title */}
      <div className="mb-3 sm:mb-4 text-center pt-8"> {/* Added padding top to avoid overlap with badge */}
        <span className="text-2xl sm:text-3xl md:text-4xl mb-2 inline-block">{icon}</span>
        <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white truncate">{title}</h3>
      </div>
      
      {/* Description */}
      <p className="text-xs sm:text-sm text-gray-400 leading-relaxed text-center flex-grow">{description}</p>
    </div>
  );
};

// Define steps data
const steps = [
  {
    step: 1,
    icon: "📊",
    title: "Collecting Skin Data",
    description: "Start the journey by visiting a local dermatologist to discover your unique skin parameters.",
  },
  {
    step: 2,
    icon: "🧠",
    title: "AI-Powered Analysis",
    description: "Advanced AI interprets your data using insights from chemistry, dermatology, and perfumery.",
  },
  {
    step: 3,
    icon: "🧪",
    title: "Creating Scent Profile",
    description: "An LLM predicts the ideal ingredient blend, crafting a custom scent with consistent performance.",
  },
];

// Main HowItWorks component
export default function HowItWorks() {
  return (
    <Section 
      id="how-it-works" 
      ariaLabel="How it works section"
    >
      <GradientBorder />
      
      <Container className="flex flex-col justify-center items-center">
        {/* Header section */}
        <div className="text-center max-w-xs md:max-w-2xl lg:max-w-3xl mx-auto mb-8 md:mb-12 lg:mb-16">
          <div className="mb-3 sm:mb-4">
            <Badge>The Process</Badge>
          </div>
          <p className="text-sm md:text-lg lg:text-xl text-gray-300 max-w-xs md:max-w-2xl mx-auto">
            Our scientific approach combines AI technology with cosmetic chemistry expertise to create your perfect signature scent.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {steps.map((step) => (
            <StepCard
              key={step.step}
              step={step.step}
              icon={step.icon}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
