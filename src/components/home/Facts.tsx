'use client';

import { useClientSide } from '@/hooks/useClientSide';
import { GiChemicalDrop } from 'react-icons/gi';
import Badge from '@/components/ui/Badge';
import { InfluenceData } from '@/types/home';

// Data for skin factors and their effects on fragrance
const FactsData: InfluenceData[] = [
  {
    factor: 'Sebum',
    scentEffect: 'Can enhance notes and accelerate oxidation',
  },
  {
    factor: 'Temperature',
    scentEffect: 'Increases scent projection and evolution speed',
  },
  {
    factor: 'Hydration',
    scentEffect: 'Maintains fragrance integrity and longevity',
  },
  {
    factor: 'pH Level',
    scentEffect: 'Influences the overall composition balance',
  },
];

// Main content component for the skin-scent connection section
const SkinInfluenceContent = () => {
  
  return (
    <div className="w-full">
      {/* Two-column layout for desktop */}
      <div className="flex flex-col lg:flex-row lg:items-start lg:gap-8">
        {/* Left column: section intro */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-4 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500">
              Skin-Scent
            </span>{' '}
            <span className="text-gray-100">Connection</span>
          </h2>
          
          {/* Educational context about perfumery materials */}
          <p className="text-base md:text-lg text-gray-300 mb-8 leading-relaxed font-light border-l-2 border-cyan-500 pl-4">
            There are around 5,000 commonly used raw materials in perfumery. When combined, they can create billions of unique perfume formulas.
          </p>
          
          {/* Product relevance badge */}
          <Badge 
            icon={<GiChemicalDrop className="text-cyan-400 h-5 w-5" />}
            highlight="Your skin's"
            text="unique properties influence how fragrance molecules express themselves."
            className="mb-5"
          />
        </div>
        
        {/* Right column: skin factors data display */}
        <div className="lg:w-1/2">
          <div className="overflow-hidden rounded-xl shadow-xl border border-cyan-900/50 bg-gradient-to-b from-gray-900 to-gray-950 p-6">
            <h3 className="text-center mb-6 text-sm font-medium text-cyan-400 uppercase tracking-wider">Skin Factors & Effects</h3>
            
            {/* Grid of skin factor cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {FactsData.map((item, idx) => (
                <div 
                  key={idx} 
                  className="hover:bg-cyan-900/10 transition-colors duration-150 ease-in-out rounded-lg p-4 border border-cyan-900/50"
                >
                  <div className="flex items-center mb-2">
                    <div className="text-sm font-medium bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                      {item.factor}
                    </div>
                  </div>
                  <div className="text-sm text-gray-300 leading-relaxed">{item.scentEffect}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main section wrapper with ID for navigation targeting
export default function SkinInfluence() {
  return (
    <section 
      id="skin-influence" 
      aria-label="Skin chemistry and fragrance interaction" 
      className="relative py-12 md:py-16 lg:py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SkinInfluenceContent />
      </div>
    </section>
  );
}
