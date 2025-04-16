'use client';

import { useEffect, useState } from 'react';
import { useWaitlist } from '@/contexts/WaitlistContext';
import Button from '@/components/ui/Button';
import { TbFlask, TbPlant, TbLeaf } from 'react-icons/tb';

// Ingredients Section Component
const IngredientsSection = () => {
  return (
    <div>
      <div className="mb-6">
        <div className="flex items-center mb-3 border-b border-cyan-900/50 pb-2">
          <div className="mr-2 text-cyan-500">
            <TbFlask size={18} />
          </div>
          <h3 className="text-xs md:text-sm font-mono font-semibold text-cyan-400 uppercase tracking-wide">
            Personalized Scent Formula
          </h3>
        </div>
      </div>
      
      <div className="flex items-center mb-3 border-b border-cyan-900/50 pb-2">
        <div className="mr-2 text-indigo-500">
          <TbPlant size={18} />
        </div>
        <h3 className="text-xs md:text-sm font-mono font-semibold text-indigo-400 tracking-wide">
          Key Ingredients
        </h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="bg-gradient-to-r from-cyan-900/20 to-blue-900/20 rounded-lg p-3 border border-cyan-900/30">
          <div className="flex items-start gap-3">
            <div className="bg-cyan-500/20 rounded-full p-2 mt-1">
              <TbLeaf size={18} className="text-cyan-400" />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-center">
                <div className="text-sm text-cyan-400 font-semibold">Bergamot</div>
                <div className="text-xs text-cyan-500 font-mono">35%</div>
              </div>
              <div className="w-full bg-gray-800/50 h-2 rounded-full mt-1.5 overflow-hidden">
                <div className="bg-gradient-to-r from-cyan-500 to-cyan-400 h-full rounded-full" style={{ width: '35%' }}></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-blue-900/20 to-indigo-900/20 rounded-lg p-3 border border-blue-900/30">
          <div className="flex items-start gap-3">
            <div className="bg-blue-500/20 rounded-full p-2 mt-1">
              <TbLeaf size={18} className="text-blue-400" />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-center">
                <div className="text-sm text-blue-400 font-semibold">Neroli</div>
                <div className="text-xs text-blue-500 font-mono">28%</div>
              </div>
              <div className="w-full bg-gray-800/50 h-2 rounded-full mt-1.5 overflow-hidden">
                <div className="bg-gradient-to-r from-blue-500 to-blue-400 h-full rounded-full" style={{ width: '28%' }}></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-indigo-900/20 to-purple-900/20 rounded-lg p-3 border border-indigo-900/30">
          <div className="flex items-start gap-3">
            <div className="bg-indigo-500/20 rounded-full p-2 mt-1">
              <TbLeaf size={18} className="text-indigo-400" />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-center">
                <div className="text-sm text-indigo-400 font-semibold">Amber</div>
                <div className="text-xs text-indigo-500 font-mono">22%</div>
              </div>
              <div className="w-full bg-gray-800/50 h-2 rounded-full mt-1.5 overflow-hidden">
                <div className="bg-gradient-to-r from-indigo-500 to-indigo-400 h-full rounded-full" style={{ width: '22%' }}></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-lg p-3 border border-purple-900/30">
          <div className="flex items-start gap-3">
            <div className="bg-purple-500/20 rounded-full p-2 mt-1">
              <TbLeaf size={18} className="text-purple-400" />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-center">
                <div className="text-sm text-purple-400 font-semibold">Sandalwood</div>
                <div className="text-xs text-purple-500 font-mono">15%</div>
              </div>
              <div className="w-full bg-gray-800/50 h-2 rounded-full mt-1.5 overflow-hidden">
                <div className="bg-gradient-to-r from-purple-500 to-purple-400 h-full rounded-full" style={{ width: '15%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// IngredientProfile Component
function IngredientProfile  () {
  const [, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="w-full bg-gray-900/80 backdrop-blur-sm rounded-xl p-5 border border-cyan-900/30 shadow-inner shadow-cyan-500/5">
      <IngredientsSection />
    </div>
  );
}

// CTA content panel component
const CTAMessagePanel = () => {
  const { openWaitlist } = useWaitlist();
  
  return (
    <div className="w-full lg:max-w-lg text-left mb-8 lg:mb-0">
      {/* Headline with gradient styling */}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
        <span className="font-mono text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500">
          Discover Your
        </span>{' '}
        <br className="hidden sm:block" />
        <span className="text-gray-100">Signature Scent</span>
      </h2>
      
      <p className="text-base md:text-lg lg:text-xl text-gray-300 mb-6 leading-relaxed font-light border-l-2 border-cyan-500 pl-3 md:pl-4">
        Join the waitlist for early access to our personalized perfume technology.
      </p>

      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-0">
        <Button 
          onClick={openWaitlist}
          size="lg"
          rightIcon
        >
          Join Waitlist
        </Button>
        <span className="text-xs text-cyan-600 font-mono sm:ml-3 mt-2 sm:mt-0">Free Samples Available</span>
      </div>
    </div>
  );
};

// Main CTA section
export default function CTA() {
  return (
    <section 
      id="cta" 
      aria-label="Call to action section" 
      className="relative py-16 md:py-20 lg:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between py-2 md:py-4">
          <CTAMessagePanel />
          <div className="w-full lg:max-w-lg">
            <IngredientProfile />
          </div>
        </div>
      </div>
    </section>
  );
}
