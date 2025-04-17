'use client';

import { GiHeartBeats, GiShieldReflect, GiRecycle } from 'react-icons/gi';
import { useEffect, useState } from 'react';
import Badge from '@/components/ui/Badge';
import FeaturesCard from '@/components/ui/FeaturesCard';

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
          icon={<GiShieldReflect className="text-cyan-400 h-5 w-5" />}
          highlight="Our AI"
          text="analyzes your unique skin chemistry to create a personalized fragrance formula"
          className="mb-4 max-w-2xl"
        />
      </div>
      
      <div className="grid md:grid-cols-3 gap-5 mt-10">
        {/* Benefit 1 */}
        <FeaturesCard
          icon={<GiHeartBeats className="h-6 w-6" />}
          title="Consistent Performance"
          description="Performs reliably throughout the day, maintaining its intended balance and longevity."
          gradientFrom="cyan-400"
          gradientTo="blue-500"
          iconColor="text-cyan-400"
        />
        
        {/* Benefit 2 */}
        <FeaturesCard
          icon={<GiShieldReflect className="h-6 w-6" />}
          title="Reduced Allergy Risks"
          description="Experience fewer irritations by eliminating ingredients that trigger sensitivities."
          gradientFrom="blue-400"
          gradientTo="indigo-500"
          iconColor="text-blue-400"
        />
        
        {/* Benefit 3 */}
        <FeaturesCard
          icon={<GiRecycle className="h-6 w-6" />}
          title="Sustainability"
          description="Save time and money by avoiding endless experimentation through precise formulations."
          gradientFrom="indigo-400"
          gradientTo="purple-500"
          iconColor="text-indigo-400"
        />
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
