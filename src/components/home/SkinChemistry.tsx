'use client';
import Image from 'next/image';
import { useState } from 'react';
import Card from '@/components/ui/card';
import Section from '@/components/layout/section';

export default function SkinChemistry() {
  const skinFactors = [
    {
      title: 'Temperature',
      description:
        'Affects how quickly your scent evolves and projects.',
    },
    {
      title: 'Hydration',
      description:
        'Helps your fragrance last longer on your skin.',
    },
    {
      title: 'pH',
      description:
        'Changes how certain notes appear in your scent.',
    },
    {
      title: 'Sebum',
      description:
        'Blends with fragrance oils to create your unique signature.',
    },
  ];

  const [activeFactor, setActiveFactor] = useState(skinFactors[0].title);

  const getActiveFactorIndex = () => {
    return skinFactors.findIndex((factor) => factor.title === activeFactor);
  };

  return (
    <Section padding="md">
      {/* Section heading */}
      <div className="text-center mb-8 md:mb-10 lg:mb-14">
        <div className="relative inline-block">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-gray-900 via-black to-emerald-600 bg-clip-text text-transparent">
            Your skin chemistry makes every scent unique
          </h2>
          {/* Decorative underline */}
          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full"></div>
        </div>
        <p className="text-base md:text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
          Your skin's natural characteristics interact with fragrance molecules to create a scent that's uniquely yours. Understanding these factors helps us craft the perfect personalized fragrance.
        </p>
      </div>

      {/* Vitruvian man image with skin factors */}
      <div className="mt-6 md:mt-8 lg:mt-10 mx-auto max-w-4xl">
        <Card padding="md">
          {/* Image with embedded skin factors */}
          <div className="max-w-lg mx-auto relative flex justify-center border border-gray-500">
            <div className="relative w-full max-w-md aspect-[5/5] border border-gray-500 rounded-full">
              <Image
                src="/images/vitruvian_man.png"
                alt="Skin chemistry measurement diagram"
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-contain"
              />
            </div>
          </div>

          {/* Content section */}
          <div className="text-center ">
            {getActiveFactorIndex() >= 0 && (
              <>
                <p className="text-sm md:text-base text-gray-600 mt-8">
                  {skinFactors[getActiveFactorIndex()].description}
                </p>
              </>
            )}
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-between items-center mt-3">
            <button
              className="text-xs md:text-sm text-gray-600 hover:text-black flex items-center cursor-pointer py-1 px-2"
              onClick={() => {
                const currentIndex = getActiveFactorIndex();
                const newIndex = (currentIndex - 1 + skinFactors.length) % skinFactors.length;
                setActiveFactor(skinFactors[newIndex].title);
              }}
            >
              <span className="mr-1">←</span> Previous
            </button>

            {/* Title between buttons */}
            {getActiveFactorIndex() >= 0 && (
              <h3 className="text-base md:text-lg text-black truncate max-w-[120px] md:max-w-full">
                {skinFactors[getActiveFactorIndex()].title}
              </h3>
            )}

            <button
              className="text-xs md:text-sm text-gray-600 hover:text-black flex items-center cursor-pointer py-1 px-2"
              onClick={() => {
                const currentIndex = getActiveFactorIndex();
                const newIndex = (currentIndex + 1) % skinFactors.length;
                setActiveFactor(skinFactors[newIndex].title);
              }}
            >
              Next <span className="ml-1">→</span>
            </button>
          </div>
        </Card>
      </div>
    </Section>
  );
}
