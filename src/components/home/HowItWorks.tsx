'use client';

import { memo, useCallback, useMemo, useState } from 'react';
import { GiChemicalDrop, GiBrain, GiPerfumeBottle } from 'react-icons/gi';
import Card from '@/components/ui/card';
import Section from '@/components/layout/section';

interface Step {
  readonly title: string;
  readonly description: string;
  readonly icon: React.ReactNode;
}

const HowItWorks = memo(() => {
  const steps: readonly Step[] = useMemo(
    () => [
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
    ],
    []
  );

  const [activeStep, setActiveStep] = useState(0);

  const handleStepClick = useCallback((index: number) => {
    setActiveStep(index);
  }, []);

  const handlePreviousStep = useCallback(() => {
    setActiveStep((prev) => Math.max(0, prev - 1));
  }, []);

  const handleNextStep = useCallback(() => {
    setActiveStep((prev) => Math.min(steps.length - 1, prev + 1));
  }, [steps.length]);

  const progressPercentage = useMemo(
    () => (activeStep / (steps.length - 1)) * 100,
    [activeStep, steps.length]
  );

  const currentStep = steps[activeStep];
  const isFirstStep = activeStep === 0;
  const isLastStep = activeStep === steps.length - 1;

  return (
    <Section id="how-it-works" ariaLabel="How it works section">
      {/* Section heading */}
      <div className="text-center mb-12">
        <div className="relative inline-block">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-black to-emerald-600 bg-clip-text text-transparent">
            How It Works
          </h2>
          {/* Decorative underline */}
          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full" />
        </div>
        <p className="text-base md:text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
          Our revolutionary process combines dermatological science with artificial intelligence to
          create fragrances that truly complement your unique skin chemistry, ensuring optimal
          performance and longevity
        </p>
      </div>

      {/* Process visualization */}
      <div className="mt-8 md:mt-12">
        {/* Step content */}
        <Card>
          {/* Step indicators */}
          <div className="flex justify-between items-center mb-8 relative">
            {steps.map((step, index) => (
              <button
                key={step.title}
                type="button"
                className="flex flex-col items-center cursor-pointer z-10 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded-lg p-2"
                onClick={() => handleStepClick(index)}
                aria-label={`Go to step ${index + 1}: ${step.title}`}
                aria-current={activeStep === index ? 'step' : undefined}
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
              </button>
            ))}

            {/* Connection line */}
            <div className="absolute h-1 bg-gray-200 left-0 right-0 top-6 md:top-8 -z-0" />
            <div
              className="absolute h-1 bg-emerald-500 left-0 top-6 md:top-8 -z-0 transition-all duration-500"
              style={{ width: `${progressPercentage}%` }}
              role="progressbar"
              aria-valuenow={activeStep + 1}
              aria-valuemin={1}
              aria-valuemax={steps.length}
              aria-label={`Step ${activeStep + 1} of ${steps.length}`}
            />
          </div>

          <div className="text-center pt-8">
            <p className="text-sm md:text-base text-gray-600 max-w-xl mx-auto">
              {currentStep.description}
            </p>
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-between items-center mt-6">
            <button
              type="button"
              className="text-xs md:text-sm text-gray-600 hover:text-black flex items-center cursor-pointer py-1 px-2 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded"
              onClick={handlePreviousStep}
              disabled={isFirstStep}
              aria-label="Go to previous step"
            >
              <span className="mr-1" aria-hidden="true">
                ←
              </span>{' '}
              Previous
            </button>

            {/* Title between buttons */}
            <h3 className="text-base md:text-lg text-black truncate max-w-[120px] md:max-w-full">
              {currentStep.title}
            </h3>

            <button
              type="button"
              className="text-xs md:text-sm text-gray-600 hover:text-black flex items-center cursor-pointer py-1 px-2 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded"
              onClick={handleNextStep}
              disabled={isLastStep}
              aria-label="Go to next step"
            >
              Next{' '}
              <span className="ml-1" aria-hidden="true">
                →
              </span>
            </button>
          </div>
        </Card>
      </div>
    </Section>
  );
});

HowItWorks.displayName = 'HowItWorks';

export default HowItWorks;
