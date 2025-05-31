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
      {/* Mobile-first responsive card layout */}
      <Card padding="md">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
          {/* Column 1: Content and navigation - better mobile layout */}
          <div className="lg:col-span-1 order-2 lg:order-1">
            <div className="h-full flex flex-col items-center justify-center text-center">
              {/* Current factor title - responsive typography */}
              {currentFactor && (
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-black mb-3 sm:mb-4">
                  {currentFactor.title}
                </h3>
              )}

              {/* Factor description - Fixed height container */}
              <div className="h-[100px] md:h-[80px] mb-8 flex items-start overflow-hidden">
                {currentFactor && (
                  <p className="text-base md:text-lg text-gray-600">{currentFactor.description}</p>
                )}
              </div>

              {/* Navigation buttons - better mobile touch targets */}
              <div className="flex justify-between items-center w-full max-w-xs mb-4 sm:mb-6">
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

              {/* Factor indicators - improved mobile touch targets */}
              <div className="flex justify-center gap-2 sm:gap-3">
                {skinFactors.map((factor, index) => (
                  <button
                    key={factor.title}
                    type="button"
                    onClick={() => setActiveFactor(factor.title)}
                    className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-200 touch-manipulation ${index === activeFactorIndex
                      ? 'bg-emerald-600 scale-110'
                      : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                    aria-label={`Go to ${factor.title}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Sample bottle image - hidden on mobile/tablets, shown on desktop */}
          <div className="lg:col-span-1 hidden lg:block lg:order-2">
            <div className="h-full flex items-center justify-center py-4 lg:py-0">
              <div className="relative w-full aspect-square max-w-[240px] sm:max-w-xs">
                <Image
                  src="/images/sample_bottle.png"
                  alt="Perfume bottle showcasing our personalized fragrance creation"
                  fill
                  sizes="(max-width: 640px) 240px, (max-width: 1024px) 320px, 300px"
                  className="object-contain"
                  priority={false}
                />
              </div>
            </div>
          </div>

          {/* Column 3: Statistics - horizontal on mobile/tablets, vertical on desktop */}
          <div className="lg:col-span-1 order-1 lg:order-3">
            <div className="h-full flex flex-row lg:flex-col items-center justify-center gap-4 sm:gap-6">
              <div className="flex-1 lg:w-full text-center p-2 sm:p-3">
                <p
                  className="text-lg sm:text-xl lg:text-2xl font-bold text-black mb-1 sm:mb-2"
                  aria-label={`Over ${PRODUCT_INFO.ingredientCount} available ingredients`}
                >
                  {PRODUCT_INFO.ingredientCount}
                </p>
                <p className="text-xs sm:text-sm lg:text-base text-gray-600">Available Ingredients</p>
              </div>
              <div className="flex-1 lg:w-full text-center p-2 sm:p-3">
                <p
                  className="text-lg sm:text-xl lg:text-2xl font-bold text-black mb-1 sm:mb-2"
                  aria-label="Billions of potential combinations"
                >
                  Billions
                </p>
                <p className="text-xs sm:text-sm lg:text-base text-gray-600">Potential Combinations</p>
              </div>
              <div className="flex-1 lg:w-full text-center p-2 sm:p-3">
                <p
                  className="text-lg sm:text-xl lg:text-2xl font-bold text-black mb-1 sm:mb-2"
                  aria-label="100 percent personalized formulas"
                >
                  100%
                </p>
                <p className="text-xs sm:text-sm lg:text-base text-gray-600">Personalized Formulas</p>
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
