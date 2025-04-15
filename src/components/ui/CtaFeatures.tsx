'use client';

import { useEffect, useState } from 'react';
import { TbFlask, TbDroplet, TbTemperature, TbCircleHalf, TbPlant, TbLeaf, TbAtom } from 'react-icons/tb';

// Skin Parameters Section Component
const SkinParametersSection = () => {
  return (
    <div className="mb-6">
      <div className="flex items-center mb-3 border-b border-cyan-900/50 pb-2">
        <div className="mr-2 text-cyan-500">
          <TbFlask size={18} />
        </div>
        <h3 className="text-xs md:text-sm font-mono font-semibold text-cyan-400 uppercase tracking-wide">
          Your Skin Parameters
        </h3>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
        {/* Sebum */}
        <div className="bg-cyan-900/20 border border-cyan-800/20 rounded-lg p-2 text-center">
          <div className="flex justify-center text-cyan-500 mb-1">
            <TbDroplet size={16} />
          </div>
          <div className="text-base font-bold text-cyan-400">
            <span>75</span>
            <span className="text-xs font-normal"> μg</span>
          </div>
          <div className="text-xs text-gray-400">Sebum</div>
        </div>

        {/* Temperature */}
        <div className="bg-cyan-900/20 border border-cyan-800/20 rounded-lg p-2 text-center">
          <div className="flex justify-center text-blue-500 mb-1">
            <TbTemperature size={16} />
          </div>
          <div className="text-base font-bold text-blue-400">
            <span>33</span>
            <span className="text-xs font-normal"> °C</span>
          </div>
          <div className="text-xs text-gray-400">Temp</div>
        </div>

        {/* pH Level */}
        <div className="bg-cyan-900/20 border border-cyan-800/20 rounded-lg p-2 text-center">
          <div className="flex justify-center text-indigo-500 mb-1">
            <TbAtom size={16} />
          </div>
          <div className="text-base font-bold text-indigo-400">
            <span className="text-xs font-normal">~</span>
            <span>5.5</span>
          </div>
          <div className="text-xs text-gray-400">pH Level</div>
        </div>

        {/* Hydration */}
        <div className="bg-cyan-900/20 border border-cyan-800/20 rounded-lg p-2 text-center">
          <div className="flex justify-center text-cyan-500 mb-1">
            <TbCircleHalf size={16} />
          </div>
          <div className="text-base font-bold text-cyan-400">
            <span>60</span>
            <span className="text-xs font-normal"> AU</span>
          </div>
          <div className="text-xs text-gray-400">Hydration</div>
        </div>
      </div>
    </div>
  );
};

// Ingredients Section Component
const IngredientsSection = () => {
  return (
    <div>
      <div className="flex items-center mb-3 border-b border-cyan-900/50 pb-2">
        <div className="mr-2 text-indigo-500">
          <TbPlant size={18} />
        </div>
        <h3 className="text-xs md:text-sm font-mono font-semibold text-indigo-400 uppercase tracking-wide">
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

// Main container component
export default function CtaFeatures() {
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="w-full bg-gray-900/80 backdrop-blur-sm rounded-xl p-5 border border-cyan-900/30 shadow-inner shadow-cyan-500/5">
      <SkinParametersSection />
      <IngredientsSection />
    </div>
  );
}
