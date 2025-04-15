'use client';

import { GiMolecule, GiMicroscope, GiChemicalDrop, GiTestTubes } from 'react-icons/gi';
import { useEffect, useState } from 'react';

const HowItWorksContent = () => {
  const [, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  return (
    <div className="w-full text-left grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
      {/* Left Column - Main Content */}
      <div className="max-w-xl">
        <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-4 leading-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500">
            The Process
          </span>{' '}
          <span className="text-gray-100">Behind The Scent</span>
        </h2>
        
        <p className="text-base md:text-lg text-gray-300 mb-6 leading-relaxed font-light border-l-2 border-cyan-500 pl-4">
          From analysis to creation, our scientific approach ensures your perfume perfectly matches your unique skin chemistry.
        </p>
        
        <div className="mt-8 hidden md:block">
          <div className="inline-block py-1 px-2 bg-gray-800/50 rounded text-xs font-mono text-gray-400 border border-gray-700">
            <span className="text-cyan-400">99.8%</span> molecular precision
          </div>
        </div>
      </div>
      
      {/* Right Column - Scientific Process Timeline */}
      <div className="relative">
        <div className="absolute left-3.5 top-0 h-full w-px bg-gradient-to-b from-cyan-500 via-blue-500 to-indigo-500"></div>
        
        {/* Step 1 */}
        <div className="relative pl-10 pb-8">
          <div className="absolute left-0 w-7 h-7 rounded-full bg-gray-900 border-2 border-cyan-500 flex items-center justify-center">
            <GiMicroscope className="text-cyan-400" size={16} />
          </div>
          <h3 className="text-base md:text-lg lg:text-xl font-medium text-cyan-400">Step 1: Collecting Skin Data</h3>
          <p className="text-sm md:text-base text-gray-400 mt-1">
            Visit a local dermatologist to identify your unique skin parameters.
          </p>
        </div>
        
        {/* Step 2 */}
        <div className="relative pl-10 pb-8">
          <div className="absolute left-0 w-7 h-7 rounded-full bg-gray-900 border-2 border-blue-500 flex items-center justify-center">
            <GiMolecule className="text-blue-400" size={16} />
          </div>
          <h3 className="text-base md:text-lg lg:text-xl font-medium text-blue-400">Step 2: AI-Powered Analysis</h3>
          <p className="text-sm md:text-base text-gray-400 mt-1">
            Our AI interprets your data and predicts the ideal ingredient blend.
          </p>
        </div>
        
        {/* Step 3 */}
        <div className="relative pl-10">
          <div className="absolute left-0 w-7 h-7 rounded-full bg-gray-900 border-2 border-indigo-500 flex items-center justify-center">
            <GiTestTubes className="text-indigo-400" size={16} />
          </div>
          <h3 className="text-base md:text-lg lg:text-xl font-medium text-indigo-400">Step 3: Creating Your Scent</h3>
          <p className="text-sm md:text-base text-gray-400 mt-1">
            We craft your unique perfume using the AI-recommended ingredients.
          </p>
        </div>
        
        <div className="mt-5 ml-10 md:hidden">
          <div className="inline-block py-1 px-2 bg-gray-800/50 rounded text-[10px] md:text-xs font-mono text-gray-400 border border-gray-700">
            <span className="text-cyan-400">99.8%</span> molecular precision
          </div>
        </div>
      </div>
    </div>
  );
};

export default function HowItWorks() {
  return (
    <section 
      id="how-it-works" 
      aria-label="How it works section" 
      className="relative py-12 md:py-16 lg:py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <HowItWorksContent />
      </div>
    </section>
  );
}
