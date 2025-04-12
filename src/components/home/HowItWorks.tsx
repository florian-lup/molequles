'use client';

import { FC } from 'react';
import Badge from '@/components/ui/Badge';
import GradientBorder from '@/components/ui/GradientBorder';
import Container from '@/components/ui/layout/Container';
import Section from '@/components/ui/layout/Section';

// Define colors for each step
const stepColors = [
  'bg-cyan-500/20 border-cyan-400 text-cyan-400', // Step 1
  'bg-teal-500/20 border-teal-400 text-teal-400',     // Step 2
  'bg-pink-500/20 border-pink-400 text-pink-400',     // Step 3
  // Add more colors if needed
];

interface StepProps {
  step: number;
  title: string;
  description: string;
  isLast?: boolean;
}

// Timeline style step component with connecting elements
const StepItem: FC<StepProps> = ({ title, description, step, isLast = false }) => {
  // Select color based on step number (use fallback for safety)
  const colorClass = stepColors[step - 1] || 'bg-gray-500/20 border-gray-500 text-gray-500'; 
  
  return (
    <div className="relative flex flex-col items-center">
      {/* Step number bubble */}
      <div className={`w-8 h-8 md:w-12 md:h-12 rounded-full ${colorClass} border-2 flex items-center justify-center font-bold text-sm md:text-base mb-4 z-10`}>
        {step}
      </div>
      
      {/* Content */}
      <div className="text-center px-4">
        <h3 className="text-base xs:text-lg sm:text-xl lg:text-2xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-xs xs:text-sm sm:text-base lg:text-lg text-gray-400 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

// Define steps data
const steps = [
  {
    step: 1,
    title: "Collecting Skin Data",
    description: "Visit a local dermatologist to identify your unique skin parameters.",
  },
  {
    step: 2,
    title: "AI-Powered Analysis",
    description: "Our AI interprets your data and predicts the ideal ingredient blend.",
  },
  {
    step: 3,
    title: "Creating Scent Profile",
    description: "We craft your unique perfume using the AI-recommended ingredients.",
  },
];

// Steps list component
const StepsList = () => {
  return (
    <div className="w-full mx-auto flex flex-col md:flex-row items-center justify-center gap-16 md:gap-10 mt-4">
      {steps.map((step, index) => (
        <StepItem
          key={index}
          title={step.title}
          description={step.description}
          step={step.step}
          isLast={index === steps.length - 1}
        />
      ))}
    </div>
  );
};

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
        <div className="text-center w-full mb-4">
          <div className="mb-2">
            <Badge>The Process</Badge>
          </div>
          <h3 className="text-base md:text-2xl text-white leading-relaxed">
            From skin data collection and AI analysis to personalized scent creation.
          </h3>
        </div>

        {/* Divider */}
        <div className="w-full border-t border-gray-700 my-5"></div>

        {/* Steps list */}
        <StepsList />
      </Container>
    </Section>
  );
}
