'use client';

import { memo, useCallback, useMemo, useState } from 'react';
import Image from 'next/image';
import Card from '@/components/ui/card';
import Section from '@/components/layout/section';
import { PRODUCT_INFO } from '@/constants';

interface SkinFactor {
  readonly title: string;
  readonly description: string;
}

const Features = memo(() => {
  const skinFactors: readonly SkinFactor[] = useMemo(
    () => [
      {
        title: 'Skin Chemistry',
        description:
          "Your unique biological makeup interacts with fragrance molecules to create a scent that's distinctively and exclusively yours.",
      },
      {
        title: 'Temperature',
        description:
          "The warmth of your skin influences how quickly fragrance notes evolve and project, shaping your scent's unique journey throughout the day.",
      },
      {
        title: 'Hydration',
        description:
          'The moisture level of your skin helps fragrance molecules adhere and last longer, enhancing the depth and longevity of your personal scent.',
      },
      {
        title: 'pH',
        description:
          "Your skin's natural pH subtly alters how certain fragrance notes appear, ensuring the scent develops in a way that's distinctly yours.",
      },
      {
        title: 'Sebum',
        description:
          "The natural oils produced by your skin blend with fragrance molecules, amplifying and personalizing your scent's signature character.",
      },
    ],
    []
  );

  const [activeFactor, setActiveFactor] = useState(skinFactors[0].title);

  const getActiveFactorIndex = useCallback(() => {
    return skinFactors.findIndex((factor) => factor.title === activeFactor);
  }, [skinFactors, activeFactor]);

  const handlePrevious = useCallback(() => {
    const currentIndex = getActiveFactorIndex();
    const newIndex = (currentIndex - 1 + skinFactors.length) % skinFactors.length;
    setActiveFactor(skinFactors[newIndex].title);
  }, [getActiveFactorIndex, skinFactors]);

  const handleNext = useCallback(() => {
    const currentIndex = getActiveFactorIndex();
    const newIndex = (currentIndex + 1) % skinFactors.length;
    setActiveFactor(skinFactors[newIndex].title);
  }, [getActiveFactorIndex, skinFactors]);

  const activeFactorIndex = getActiveFactorIndex();
  const currentFactor = skinFactors[activeFactorIndex];

  return (
    <Section id="features" padding="md" maxWidth="4xl" showFrame={false}>
      {/* Full width card with 3-column grid layout */}
      <Card padding="md">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Column 1: Content and navigation */}
          <div className="lg:col-span-1">
            <div className="h-full flex flex-col items-center justify-center text-center">
              {/* Current factor title */}
              {currentFactor && (
                <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">
                  {currentFactor.title}
                </h3>
              )}

              {/* Factor description - Fixed height container */}
              <div className="h-[100px] md:h-[80px] mb-8 flex items-start overflow-hidden">
                {currentFactor && (
                  <p className="text-base md:text-lg text-gray-600">{currentFactor.description}</p>
                )}
              </div>

              {/* Navigation buttons */}
              <div className="flex justify-between items-center w-full max-w-xs">
                <button
                  type="button"
                  onClick={handlePrevious}
                  disabled={activeFactorIndex === 0}
                  aria-label="View previous skin factor"
                  className="text-xs md:text-sm text-gray-600 hover:text-black flex items-center py-1 px-2 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded"
                >
                  <span className="mr-1" aria-hidden="true">
                    ←
                  </span>{' '}
                  Previous
                </button>

                <button
                  type="button"
                  onClick={handleNext}
                  disabled={activeFactorIndex === skinFactors.length - 1}
                  aria-label="View next skin factor"
                  className="text-xs md:text-sm text-gray-600 hover:text-black flex items-center py-1 px-2 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded"
                >
                  Next{' '}
                  <span className="ml-1" aria-hidden="true">
                    →
                  </span>
                </button>
              </div>

              {/* Factor indicators */}
              <div className="flex justify-center gap-2 mt-6">
                {skinFactors.map((factor, index) => (
                  <button
                    key={factor.title}
                    type="button"
                    onClick={() => setActiveFactor(factor.title)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === activeFactorIndex
                        ? 'bg-emerald-600'
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to ${factor.title}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Sample bottle image */}
          <div className="lg:col-span-1">
            <div className="h-full flex items-center justify-center">
              <div className="relative w-full aspect-square max-w-xs">
                <Image
                  src="/images/sample_bottle.png"
                  alt="Perfume bottle showcasing our personalized fragrance creation"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 300px"
                  className="object-contain"
                  priority={false}
                />
              </div>
            </div>
          </div>

          {/* Column 3: Statistics */}
          <div className="lg:col-span-1">
            <div className="h-full flex flex-col items-center justify-center space-y-6">
              <div className="w-full text-center p-2">
                <p
                  className="text-xl md:text-2xl font-bold text-black mb-2"
                  aria-label={`Over ${PRODUCT_INFO.ingredientCount} available ingredients`}
                >
                  {PRODUCT_INFO.ingredientCount}
                </p>
                <p className="text-sm md:text-base text-gray-600">Available Ingredients</p>
              </div>
              <div className="w-full text-center p-2">
                <p
                  className="text-xl md:text-2xl font-bold text-black mb-2"
                  aria-label="Billions of potential combinations"
                >
                  Billions
                </p>
                <p className="text-sm md:text-base text-gray-600">Potential Combinations</p>
              </div>
              <div className="w-full text-center p-2">
                <p
                  className="text-xl md:text-2xl font-bold text-black mb-2"
                  aria-label="100 percent personalized formulas"
                >
                  100%
                </p>
                <p className="text-sm md:text-base text-gray-600">Personalized Formulas</p>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </Section>
  );
});

Features.displayName = 'Features';

export default Features;
