'use client';
import { useState } from 'react';

export default function SkinChemistry() {
  const skinFactors = [
    {
      title: "Sebum",
      description: "Can enhance notes and accelerate oxidation, creating a unique signature scent that evolves with your natural oils."
    },
    {
      title: "Temperature",
      description: "Increases scent projection and evolution speed, allowing fragrance molecules to diffuse at different rates on your skin."
    },
    {
      title: "Hydration",
      description: "Maintains fragrance integrity and longevity, ensuring your personalized scent lasts throughout the day."
    },
    {
      title: "pH Level",
      description: "Influences the overall composition balance, affecting how certain fragrance notes present themselves on your skin."
    }
  ];
  
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative py-16 md:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Section heading - now centered at top */}
        <div className="text-center mb-14">
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-black font-bold mb-6">
            Skin-Scent Connection
          </h2>
          <p className="text-gray-600 text-xl">
            Your chemistry changes how every perfume smells. Our AI analyzes key factors like moisture, pH, and natural oils to find a fragrance blend that works with your skin.
          </p>
        </div>
        
        {/* Skin factors - circular selector now centered */}
        <div className="mt-10 mx-auto max-w-4xl">
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-8">
            {/* Circle selector */}
            <div className="flex justify-center items-center mb-10">
              <div className="relative inline-flex">
                {skinFactors.map((_, index) => {
                  const angle = (360 / skinFactors.length) * index;
                  const isActive = activeIndex === index;
                  return (
                    <button
                      key={index}
                      className={`absolute w-4 h-4 rounded-full transition-all duration-300 transform -translate-x-1/2 -translate-y-1/2 ${
                        isActive ? 'scale-150 bg-black' : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                      style={{
                        left: `${50 + 45 * Math.cos((angle * Math.PI) / 180)}%`,
                        top: `${50 + 45 * Math.sin((angle * Math.PI) / 180)}%`,
                      }}
                      onClick={() => setActiveIndex(index)}
                      aria-label={skinFactors[index].title}
                    />
                  );
                })}
                <div className="w-24 h-24 rounded-full border-2 border-gray-200" />
              </div>
            </div>
            
            {/* Content section */}
            <div className="text-center px-6 py-6 transition-all duration-300">
              <h3 className="text-xl text-black font-bold mb-4">{skinFactors[activeIndex].title}</h3>
              <p className="text-gray-600">{skinFactors[activeIndex].description}</p>
            </div>
            
            {/* Navigation buttons */}
            <div className="flex justify-between mt-8">
              <button
                className="text-sm text-gray-600 hover:text-black flex items-center cursor-pointer"
                onClick={() => setActiveIndex((activeIndex - 1 + skinFactors.length) % skinFactors.length)}
              >
                <span className="mr-1">←</span> Previous
              </button>
              <button
                className="text-sm text-gray-600 hover:text-black flex items-center cursor-pointer"
                onClick={() => setActiveIndex((activeIndex + 1) % skinFactors.length)}
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
