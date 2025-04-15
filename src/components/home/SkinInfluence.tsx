'use client';

import { useEffect, useState } from 'react';

interface InfluenceData {
  factor: string;
  description: string;
  scentEffect: string;
}

const skinInfluenceData: InfluenceData[] = [
  {
    factor: 'Sebum',
    description: 'Natural skin oils that vary in composition and quantity',
    scentEffect: 'Enhances warm, rich notes while potentially accelerating oxidation',
  },
  {
    factor: 'Temperature',
    description: 'Skin warmth affects evaporation rate and molecular activity',
    scentEffect: 'Higher temperature increases scent projection and evolution speed',
  },
  {
    factor: 'Hydration',
    description: 'Moisture level of skin affects scent retention and diffusion',
    scentEffect: 'Well-hydrated skin maintains fragrance integrity and longevity',
  },
  {
    factor: 'pH Level',
    description: 'Skin acidity affects molecular stability of fragrance compounds',
    scentEffect: 'Can alter perception of notes and influence overall composition balance',
  },
];

const SkinInfluenceContent = () => {
  const [, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  return (
    <div className="w-full">
      <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-4 leading-tight">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500">
          Skin Chemistry
        </span>{' '}
        <span className="text-gray-100">and Scent Interaction</span>
      </h2>
      
      <p className="text-base md:text-lg text-gray-300 mb-8 leading-relaxed font-light border-l-2 border-cyan-500 pl-4">
        Your skin's unique properties dramatically influence how fragrance molecules express themselves.
      </p>
      
      <div className="w-full overflow-x-auto rounded-lg shadow-xl">
        <table className="min-w-full divide-y divide-gray-800 bg-gray-900/90 border border-gray-800">
          <thead className="bg-gradient-to-r from-gray-800 to-gray-900">
            <tr>
              <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Skin Factor
              </th>
              <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Description
              </th>
              <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Effect on Scent
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800">
            {skinInfluenceData.map((item, idx) => (
              <tr key={idx} className={idx % 2 === 0 ? 'bg-gray-900/50' : 'bg-gray-900/80'}>
                <td className="px-4 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-cyan-400">{item.factor}</div>
                </td>
                <td className="px-4 py-4">
                  <div className="text-sm text-gray-300">{item.description}</div>
                </td>
                <td className="px-4 py-4">
                  <div className="text-sm text-gray-300">{item.scentEffect}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="mt-6 text-sm text-gray-400 italic">
        Note: Individual results may vary based on unique skin composition, diet, and lifestyle factors.
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
