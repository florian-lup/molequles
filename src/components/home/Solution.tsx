'use client';

import { GiMolecule, GiHeartBeats, GiShieldReflect, GiRecycle } from 'react-icons/gi';
import { useEffect, useState } from 'react';
import Badge from '@/components/ui/Badge';

const SolutionContent = () => {
  const [, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  return (
    <div className="w-full text-left">
      <div className="max-w-2xl mb-10">
        <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-4 leading-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500">
            Beyond Traditional
          </span>{' '}
          <span className="text-gray-100">Perfumery</span>
        </h2>
        
        <p className="text-base md:text-lg text-gray-300 mb-6 leading-relaxed font-light border-l-2 border-cyan-500 pl-4 max-w-2xl">
          Unlock smarter scents, greater skin compatibility, and more consistent performance beyond what traditional perfumery can offer.
        </p>
        
        <Badge 
          icon={<GiMolecule className="text-cyan-400 h-6 w-6" />}
          text="Our AI analyzes your unique skin chemistry to create a personalized fragrance formula"
          className="mb-4 max-w-2xl"
        />
      </div>
      
      <div className="grid md:grid-cols-3 gap-5 mt-10">
        {/* Benefit 1 */}
        <div className="bg-gray-900/60 border border-gray-800 rounded-lg p-5 hover:bg-gray-800/60 transition-all duration-300 transform hover:-translate-y-1">
          <div className="flex items-center gap-2 mb-3">
            <GiHeartBeats className="text-cyan-400 h-6 w-6" />
            <h3 className="text-base md:text-lg lg:text-xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Consistent Performance
            </h3>
          </div>
          <p className="text-gray-300 font-light text-sm md:text-base">
            Performs reliably throughout the day, maintaining its intended balance and longevity on your skin.
          </p>
        </div>
        
        {/* Benefit 2 */}
        <div className="bg-gray-900/60 border border-gray-800 rounded-lg p-5 hover:bg-gray-800/60 transition-all duration-300 transform hover:-translate-y-1">
          <div className="flex items-center gap-2 mb-3">
            <GiShieldReflect className="text-blue-400 h-6 w-6" />
            <h3 className="text-base md:text-lg lg:text-xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
              Reduced Allergy Risks
            </h3>
          </div>
          <p className="text-gray-300 font-light text-sm md:text-base">
            Experience fewer irritations by eliminating ingredients that trigger sensitivities, ensuring a safer wearing.
          </p>
        </div>
        
        {/* Benefit 3 */}
        <div className="bg-gray-900/60 border border-gray-800 rounded-lg p-5 hover:bg-gray-800/60 transition-all duration-300 transform hover:-translate-y-1">
          <div className="flex items-center gap-2 mb-3">
            <GiRecycle className="text-indigo-400 h-6 w-6" />
            <h3 className="text-base md:text-lg lg:text-xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">
              Sustainability
            </h3>
          </div>
          <p className="text-gray-300 font-light text-sm md:text-base">
            Save time and money by avoiding endless experimentation through precise formulations tailored exactly to you.
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
      className="relative py-12 md:py-16 lg:py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SolutionContent />
      </div>
    </section>
  );
}
