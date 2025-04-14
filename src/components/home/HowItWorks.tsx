'use client';

import { FC } from 'react';
import Badge from '@/components/ui/Badge';
import Container from '@/components/ui/layout/Container';
import Section from '@/components/ui/layout/Section';

interface StepProps {
  step: number;
  title: string;
  description: string;
  isLast?: boolean;
}

// Timeline style step component with connecting elements
const StepItem: FC<StepProps> = ({ title, description, step, isLast = false }) => {
  return (
    <div className="w-full mb-8 border border-gray-800 rounded-lg overflow-hidden">
      <div className="flex flex-col md:flex-row">
        {/* Left column - Content */}
        <div className="p-6 md:w-3/4">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs bg-gray-800 text-white px-2 py-1 rounded">Step {step}</span>
            <h3 className="text-base xs:text-lg sm:text-xl lg:text-2xl font-semibold text-white">{title}</h3>
          </div>
          <p className="text-xs xs:text-sm sm:text-base lg:text-lg text-gray-400 leading-relaxed">{description}</p>
        </div>
        
        {/* Right column - Custom content for each step */}
        <div className="flex items-stretch justify-center p-0 md:w-1/4 bg-transparent">
          <div className="w-full h-full flex items-center justify-center p-2">
            {step === 1 && (
              <div className="w-full h-full">
                <div className="grid grid-cols-2 gap-3 h-full">
                  <div className="bg-blue-900/30 rounded p-3 flex flex-col items-center justify-center">
                    <div className="text-xs text-white mb-1">pH Level</div>
                    <div className="text-base font-medium text-white">5.5</div>
                  </div>
                  <div className="bg-blue-900/30 rounded p-3 flex flex-col items-center justify-center">
                    <div className="text-xs text-white mb-1">Moisture</div>
                    <div className="text-base font-medium text-white">65%</div>
                  </div>
                </div>
              </div>
            )}
            
            {step === 2 && (
              <div className="w-full h-full bg-indigo-900/30 rounded p-3 flex flex-col justify-center">
                <div className="text-xs text-white mb-2">Compatibility</div>
                <div className="flex items-center gap-2">
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <div className="bg-indigo-400 h-2.5 rounded-full" style={{ width: '87%' }}></div>
                  </div>
                  <span className="text-xs text-white">87%</span>
                </div>
              </div>
            )}
            
            {step === 3 && (
              <div className="w-full h-full bg-teal-900/30 rounded p-3 flex flex-col justify-center">
                <div className="text-xs text-white mb-2">Top Ingredients</div>
                <div className="flex flex-wrap gap-1.5 justify-start mt-1">
                  <span className="text-xs bg-teal-500/30 text-white px-2 py-1 rounded">Jasmine</span>
                  <span className="text-xs bg-teal-500/30 text-white px-2 py-1 rounded">Bergamot</span>
                  <span className="text-xs bg-teal-500/30 text-white px-2 py-1 rounded">Vanilla</span>
                  <span className="text-xs bg-teal-500/30 text-white px-2 py-1 rounded">Amber</span>
                </div>
              </div>
            )}
          </div>
        </div>
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
    title: "Creating Your Scent",
    description: "We craft your unique perfume using the AI-recommended ingredients.",
  },
];

// Steps list component
const StepsList = () => {
  return (
    <div className="w-full mx-auto flex flex-col gap-4 mt-8">
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
      <Container className="flex flex-col justify-center items-center">
        {/* Header section */}
        <div className="text-left w-full mb-4">
          <div className="mb-2">
            <Badge>The Process</Badge>
          </div>
          <h3 className="text-base md:text-2xl text-white leading-relaxed">
            From skin data collection and AI analysis to personalized scent creation.
          </h3>
        </div>

        {/* Steps list */}
        <StepsList />
      </Container>
    </Section>
  );
}
