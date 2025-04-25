'use client';
import { useState } from 'react';

export default function RawIngredients() {
  const fragranceNotes = [
    {
      title: "Top Notes",
      description: "The first impression of a fragrance that evaporates quickly. These light, fresh scents typically include citrus, herbs, and light fruits that captivate immediately but last only 5-15 minutes."
    },
    {
      title: "Heart Notes",
      description: "The core character of the perfume that emerges as top notes fade. These middle notes include florals and spices that form the fragrance's main personality and last 2-4 hours."
    },
    {
      title: "Base Notes",
      description: "The foundation that anchors the entire composition. Rich, deep ingredients like woods, amber, and musk that develop fully after 30 minutes and can last 6+ hours on skin."
    }
  ];
  
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative py-16 md:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Section heading - centered at top */}
        <div className="text-center mb-14">
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-black font-bold mb-6">
            Raw Materials Diversity
          </h2>
          <p className="text-gray-600 text-xl">
            With around 4,000 perfume ingredients available, the possible combinations are practically endless. Our AI helps find unique fragrance blends that perfectly match your personal scent profile
          </p>
        </div>
        
        {/* Statistics */}
        <div className="flex justify-center mb-10">
          <div className="grid grid-cols-3 gap-10">
            <div className="text-center">
              <p className="text-4xl font-bold text-black mb-2">4,000+</p>
              <p className="text-sm text-gray-600">Available Ingredients</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-black mb-2">Billion</p>
              <p className="text-sm text-gray-600">Potential Combinations</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-black mb-2">3</p>
              <p className="text-sm text-gray-600">Fragrance Layers</p>
            </div>
          </div>
        </div>
        
        {/* Fragrance Pyramid */}
        <div className="mt-14 mx-auto max-w-4xl">
          <h3 className="text-xl md:text-2xl text-black font-semibold text-center mb-8">
            The Fragrance Pyramid
          </h3>
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-8">
            {/* Pyramid selector */}
            <div className="flex justify-center items-center mb-10">
              <div className="relative inline-flex">
                {fragranceNotes.map((_, index) => {
                  // Position in a pyramid shape (top at top, other two at bottom)
                  let posX, posY;
                  if (index === 0) { // Top note
                    posX = 50;
                    posY = 15;
                  } else if (index === 1) { // Heart note
                    posX = 35;
                    posY = 85;
                  } else { // Base note
                    posX = 65;
                    posY = 85;
                  }
                  
                  const isActive = activeIndex === index;
                  return (
                    <button
                      key={index}
                      className={`absolute w-4 h-4 rounded-full transition-all duration-300 transform -translate-x-1/2 -translate-y-1/2 ${
                        isActive ? 'scale-150 bg-black' : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                      style={{
                        left: `${posX}%`,
                        top: `${posY}%`,
                      }}
                      onClick={() => setActiveIndex(index)}
                      aria-label={fragranceNotes[index].title}
                    />
                  );
                })}
                <div className="w-28 h-28 bg-transparent border-t-0 border-l border-r border-b-2 border-gray-200" 
                     style={{clipPath: 'polygon(0% 100%, 50% 0%, 100% 100%)'}} />
              </div>
            </div>
            
            {/* Content section */}
            <div className="text-center px-6 py-6 transition-all duration-300">
              <h3 className="text-xl text-black font-bold mb-4">{fragranceNotes[activeIndex].title}</h3>
              <p className="text-gray-600">{fragranceNotes[activeIndex].description}</p>
            </div>
            
            {/* Navigation buttons */}
            <div className="flex justify-between mt-8">
              <button
                className="text-sm text-gray-600 hover:text-black flex items-center cursor-pointer"
                onClick={() => setActiveIndex((activeIndex - 1 + fragranceNotes.length) % fragranceNotes.length)}
              >
                <span className="mr-1">←</span> Previous
              </button>
              <button
                className="text-sm text-gray-600 hover:text-black flex items-center cursor-pointer"
                onClick={() => setActiveIndex((activeIndex + 1) % fragranceNotes.length)}
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
