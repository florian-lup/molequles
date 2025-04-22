'use client';

import { GiChemicalDrop } from 'react-icons/gi';
import { TbDroplet, TbTemperature, TbCircleHalf, TbRulerMeasure } from 'react-icons/tb';
import Badge from '@/components/ui/Badge';
import { InfluenceData } from '@/types/home';
import FeaturesCard from '@/components/ui/FeaturesCard';
import React from 'react';

// Data for skin factors and their effects on fragrance
const FactsData: InfluenceData[] = [
  {
    factor: 'Sebum',
    scentEffect: 'Can enhance notes and accelerate oxidation',
    gradient: 'bg-gradient-to-r from-cyan-400 to-blue-500',
    iconColor: 'text-cyan-500',
    icon: TbDroplet
  },
  {
    factor: 'Temperature',
    scentEffect: 'Increases scent projection and evolution speed',
    gradient: 'bg-gradient-to-r from-blue-400 to-indigo-500',
    iconColor: 'text-blue-500',
    icon: TbTemperature
  },
  {
    factor: 'Hydration',
    scentEffect: 'Maintains fragrance integrity and longevity',
    gradient: 'bg-gradient-to-r from-indigo-400 to-purple-500',
    iconColor: 'text-cyan-500',
    icon: TbCircleHalf
  },
  {
    factor: 'pH Level',
    scentEffect: 'Influences the overall composition balance',
    gradient: 'bg-gradient-to-r from-purple-400 to-pink-500',
    iconColor: 'text-indigo-500',
    icon: TbRulerMeasure
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
          {/* Grid of skin factor cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {FactsData.map((item, idx) => (
              <FeaturesCard
                key={idx}
                icon={item.icon && React.createElement(item.icon, { className: "h-6 w-6" })}
                title={item.factor}
                description={item.scentEffect || ""}
                titleClassName={item.gradient}
                iconColor={item.iconColor}
                className="p-4"
              />
            ))}
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
