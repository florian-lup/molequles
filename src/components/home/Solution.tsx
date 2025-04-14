'use client';

import { GiMolecule } from 'react-icons/gi';
import { useEffect, useState } from 'react';

const SolutionContent = () => {
  const [, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  return (
    <div className="w-full text-left">
      <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-3 lg:mb-4 leading-tight">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500">
          Beyond Traditional
        </span>{' '}
        <span className="text-gray-100">Perfumery</span>
      </h2>
      
      <p className="text-base md:text-lg text-gray-300 mb-6 leading-relaxed font-light border-l-2 border-cyan-500 pl-3 md:pl-4 max-w-2xl">
        Unlock smarter scents, greater skin compatibility, and more consistent performance beyond what traditional perfumery can offer.
      </p>
      
      <div className="p-3 bg-gray-900/40 rounded-lg border border-gray-800 mb-4 max-w-2xl">
        <div className="flex gap-2 items-center">
          <GiMolecule className="text-cyan-400 h-6 w-6" />
          <p className="text-gray-200 text-sm font-light">
            Our AI analyzes thousands of molecular combinations to create your perfect scent profile
          </p>
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6 mt-8 max-w-4xl">
        <div className="bg-gray-900/60 border border-gray-800 rounded-lg p-5 hover:bg-gray-800/60 transition-all duration-200">
          <h3 className="text-xl font-medium mb-3">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Scientifically Crafted
            </span>
          </h3>
          <p className="text-gray-300 font-light border-l-2 border-cyan-500 pl-3">
            Using cutting-edge AI algorithms to analyze molecular compatibility with your skin chemistry.
          </p>
        </div>
        
        <div className="bg-gray-900/60 border border-gray-800 rounded-lg p-5 hover:bg-gray-800/60 transition-all duration-200">
          <h3 className="text-xl font-medium mb-3">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Personalized Performance
            </span>
          </h3>
          <p className="text-gray-300 font-light border-l-2 border-cyan-500 pl-3">
            Fragrances that adapt to your body's chemistry for optimal scent expression throughout the day.
          </p>
        </div>
      </div>
    </div>
  );
};

export default function Solution() {
  return (
    <section 
      id="solution" 
      aria-label="Solution section" 
      className="bg-gradient-to-b from-gray-900 to-gray-950 relative py-12 md:py-16 lg:py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SolutionContent />
      </div>
    </section>
  );
}
