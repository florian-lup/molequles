'use client';

import { useState } from 'react';
import { GiChemicalDrop, GiBrain, GiPerfumeBottle } from 'react-icons/gi';

export default function HowItWorks() {
  const steps = [
    {
      title: "Collecting Skin Data",
      description: "Visit a local dermatologist to identify your unique skin parameters.",
      icon: <GiChemicalDrop className="h-8 w-8 text-black" />
    },
    {
      title: "AI-Powered Analysis",
      description: "Our AI interprets your data and predicts the ideal ingredient blend.",
      icon: <GiBrain className="h-8 w-8 text-black" />
    },
    {
      title: "Creating Your Scent",
      description: "We craft your unique perfume using the AI-recommended ingredients.",
      icon: <GiPerfumeBottle className="h-8 w-8 text-black" />
    }
  ];

  const [activeStep, setActiveStep] = useState(0);

  return (
    <section
      id="how-it-works" 
      aria-label="How it works section" 
      className="relative py-16 md:py-20 lg:py-24 bg-white overflow-hidden">
      
      <div className="container mx-auto px-4 max-w-4xl z-10 relative">
        {/* Section heading */}
        <div className="text-center mb-12">
          <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-4">
            Scientifically Crafted Scents
          </h2>
          <p className="text-gray-600 text-xs md:text-lg lg:text-xl">
            We match your skin and raw ingredients with molecular precision.
          </p>
        </div>
        
        {/* Process visualization */}
        <div className="mt-8 md:mt-12">
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
                    ${activeStep === index ? 'bg-amber-50 shadow-md' : 'bg-gray-100'} 
                    transition-all duration-300`}
                >
                  {step.icon}
                </div>
                <span className="text-xs md:text-sm font-medium mt-2 text-center">Step {index + 1}</span>
              </div>
            ))}
            
            {/* Connection line */}
            <div className="absolute h-1 bg-gray-200 left-0 right-0 top-6 md:top-8 -z-0" />
            <div 
              className="absolute h-1 bg-gray-400 left-0 top-6 md:top-8 -z-0 transition-all duration-500"
              style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
            />
          </div>
          
          {/* Step content */}
          <div className="bg-amber-50/30 rounded-xl border border-gray-200 p-6 shadow-sm bg-[linear-gradient(#33333310_1px,transparent_1px),linear-gradient(90deg,#33333310_1px,transparent_1px)] bg-[size:16px_16px]">
            <div className="text-center py-8">
              <h3 className="text-xl md:text-2xl font-semibold mb-4">{steps[activeStep].title}</h3>
              <p className="text-gray-600 text-sm md:text-base max-w-xl mx-auto">{steps[activeStep].description}</p>
            </div>
            
            {/* Navigation buttons */}
            <div className="flex justify-between items-center mt-6">
              <button
                className="text-xs md:text-sm text-gray-600 hover:text-black flex items-center cursor-pointer py-1 px-2 disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={() => setActiveStep(prev => Math.max(0, prev - 1))}
                disabled={activeStep === 0}
              >
                <span className="mr-1">←</span> Previous
              </button>

              <button
                className="text-xs md:text-sm text-gray-600 hover:text-black flex items-center cursor-pointer py-1 px-2 disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={() => setActiveStep(prev => Math.min(steps.length - 1, prev + 1))}
                disabled={activeStep === steps.length - 1}
              >
                Next <span className="ml-1">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
