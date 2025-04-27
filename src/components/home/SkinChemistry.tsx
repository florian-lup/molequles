'use client';
import Image from 'next/image';
import { useState } from 'react';

export default function SkinChemistry() {
  const skinFactors = [
    {
      title: "Temperature",
      description: "Increases scent projection and evolution speed, allowing fragrance molecules to diffuse at different rates on your skin."
    },
    {
      title: "Hydration",
      description: "Maintains fragrance integrity and longevity, ensuring your personalized scent lasts throughout the day."
    },
    {
      title: "pH",
      description: "Influences the overall composition balance, affecting how certain fragrance notes present themselves on your skin."
    },
    {
      title: "Sebum",
      description: "Can enhance notes and accelerate oxidation, creating a unique signature scent that evolves with your natural oils."
    }
  ];
  
  const [activeFactor, setActiveFactor] = useState(skinFactors[0].title);

  const getActiveFactorIndex = () => {
    return skinFactors.findIndex(factor => factor.title === activeFactor);
  };

  return (
    <section className="relative py-12 md:py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Section heading */}
        <div className="text-center mb-8 md:mb-10 lg:mb-14">
          <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
            The Role of Skin Chemistry
          </h2>
          <p className="text-gray-600 text-xs md:text-lg lg:text-xl">
            Your body chemistry transforms every scent. Our algorithms analyze key factors to find the optimal fragrance blends for your skin
          </p>
        </div>
        
        {/* Vitruvian man image with skin factors */}
        <div className="mt-6 md:mt-8 lg:mt-10 mx-auto max-w-4xl">
          <div className="bg-amber-50/30 rounded-xl border p-4 md:p-6 border-gray-200 shadow-sm bg-[linear-gradient(#33333310_1px,transparent_1px),linear-gradient(90deg,#33333310_1px,transparent_1px)] bg-[size:16px_16px]">
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
                  <p className="text-xs md:text-base text-gray-600 mt-5">
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
                <h3 className="text-base md:text-xl text-black truncate max-w-[120px] md:max-w-full">
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
          </div>
        </div>
      </div>
    </section>
  );
}
