'use client';

import { useEffect, useState } from 'react';
import { GiChemicalDrop } from 'react-icons/gi';
import Badge from '@/components/ui/Badge';

interface InfluenceData {
  factor: string;
  scentEffect?: string;
}

const FactsData: InfluenceData[] = [
  {
    factor: 'Sebum',
    scentEffect: 'Enhances notes while potentially accelerating oxidation',
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
    scentEffect: 'Can alter and influence the overall composition balance',
  },
];

const SkinInfluenceContent = () => {
  const [, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  return (
    <div className="w-full">
      <div className="flex flex-col lg:flex-row lg:items-start lg:gap-8">
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-4 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500">
              Skin-Scent
            </span>{' '}
            <span className="text-gray-100">Connection</span>
          </h2>
          
          <p className="text-base md:text-lg text-gray-300 mb-8 leading-relaxed font-light border-l-2 border-cyan-500 pl-4">
            Your skin's unique properties dramatically influence how fragrance molecules express themselves.
          </p>
          
          <Badge 
            icon={<GiChemicalDrop className="text-cyan-400 h-5 w-5" />}
            highlight="4x"
            text="more consistent fragrance performance with personalized formulas"
            className="mb-5"
          />
          
          <div className="text-sm text-gray-400 italic">
            Note: Individual results may vary based on unique skin composition, diet, and lifestyle factors.
          </div>
        </div>
        
        <div className="lg:w-1/2">
          <div className="overflow-hidden rounded-xl shadow-xl border border-cyan-900/50 bg-gradient-to-b from-gray-900 to-gray-950">
            <table className="min-w-full">
              <thead>
                <tr className="border-b border-cyan-900/30">
                  <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-cyan-400 uppercase tracking-wider">
                    Skin Factor
                  </th>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-cyan-400 uppercase tracking-wider">
                    Effect on Scent
                  </th>
                </tr>
              </thead>
              <tbody>
                {FactsData.map((item, idx) => (
                  <tr 
                    key={idx} 
                    className="hover:bg-cyan-900/10 transition-colors duration-150 ease-in-out"
                  >
                    <td className="px-6 py-5 whitespace-nowrap border-b border-gray-800/50">
                      <div className="flex items-center">
                        <div className="text-sm font-medium bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                          {item.factor}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-5 border-b border-gray-800/50">
                      <div className="text-sm text-gray-300 leading-relaxed">{item.scentEffect}</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

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
