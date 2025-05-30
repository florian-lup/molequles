'use client';

import { useState } from 'react';
import { GiChemicalDrop, GiBrain, GiPerfumeBottle } from 'react-icons/gi';
import Card from '@/components/ui/card';
import Section from '@/components/layout/section';

export default function HowItWorks() {
  const steps = [
    {
      title: 'Collecting Skin Data',
      description: 'Visit a local dermatologist to identify your unique skin parameters.',
      icon: <GiChemicalDrop className="h-8 w-8 text-black" />,
    },
    {
      title: 'AI-Powered Analysis',
      description: 'Our AI interprets your data and predicts the ideal ingredient blend.',
      icon: <GiBrain className="h-8 w-8 text-black" />,
    },
    {
      title: 'Creating Your Scent',
      description: 'We craft your unique perfume using the AI-recommended ingredients.',
      icon: <GiPerfumeBottle className="h-8 w-8 text-black" />,
    },
  ];

  const [activeStep, setActiveStep] = useState(0);

  return (
    <Section id="how-it-works" ariaLabel="How it works section">
      {/* Section heading */}
      <div className="text-center mb-12">
        <div className="relative inline-block">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-black to-emerald-600 bg-clip-text text-transparent">
            How It Works
          </h2>
          {/* Decorative underline */}
          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full"></div>
        </div>
        <p className="text-base md:text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
          Our revolutionary process combines dermatological science with artificial intelligence to create fragrances that truly complement your unique skin chemistry, ensuring optimal performance and longevity.
        </p>
      </div>

      {/* Process visualization */}
      <div className="mt-8 md:mt-12">
        {/* Step content */}
        <Card>
          {/* Step indicators */}
          <div className="flex justify-between items-center mb-8 relative">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-center cursor-pointer z-10"
                onClick={() => setActiveStep(index)}
              >
                <div
                  className={`w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center 
                    ${activeStep === index ? 'bg-emerald-50 shadow-md' : 'bg-gray-100'} 
                    transition-all duration-300`}
                >
                  {step.icon}
                </div>
                <span className="text-xs md:text-sm font-medium mt-2 text-center">
                  Step {index + 1}
                </span>
              </div>
            ))}

            {/* Connection line */}
            <div className="absolute h-1 bg-gray-200 left-0 right-0 top-6 md:top-8 -z-0" />
            <div
              className="absolute h-1 bg-emerald-500 left-0 top-6 md:top-8 -z-0 transition-all duration-500"
              style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
            />
          </div>

          <div className="text-center pt-8">
            <p className="text-sm md:text-base text-gray-600 max-w-xl mx-auto">
              {steps[activeStep].description}
            </p>
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-between items-center mt-6">
            <button
              className="text-xs md:text-sm text-gray-600 hover:text-black flex items-center cursor-pointer py-1 px-2 disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
              disabled={activeStep === 0}
            >
              <span className="mr-1">←</span> Previous
            </button>

            {/* Title between buttons */}
            <h3 className="text-base md:text-lg text-black truncate max-w-[120px] md:max-w-full">
              {steps[activeStep].title}
            </h3>

            <button
              className="text-xs md:text-sm text-gray-600 hover:text-black flex items-center cursor-pointer py-1 px-2 disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={() => setActiveStep((prev) => Math.min(steps.length - 1, prev + 1))}
              disabled={activeStep === steps.length - 1}
            >
              Next <span className="ml-1">→</span>
            </button>
          </div>
        </Card>
      </div>
    </Section>
  );
}
