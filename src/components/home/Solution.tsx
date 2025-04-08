'use client';

import { FC } from 'react';
import Badge from '@/components/ui/Badge';
import GradientBorder from '@/components/ui/GradientBorder';
import Tag from '@/components/ui/Tag';
import { SolutionDecorations } from '@/components/ui/DecorativeElements';

interface SolutionCardProps {
  icon: string;
  title: string;
  description: string;
  tags: string[];
  className?: string;
}

const SolutionCard: FC<SolutionCardProps> = ({ icon, title, description, tags, className }) => {
  return (
    <div className={`bg-gray-900/40 backdrop-blur-sm rounded-xl p-3 xs:p-4 sm:p-5 md:p-6 border border-gray-800/50 hover:border-gray-700/70 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10 flex flex-col h-full ${className || ''}`}>
      <div className="mb-2 xs:mb-3 sm:mb-4 md:mb-5 flex items-center border-b border-gray-700/50 pb-1.5">
        <span className="mr-2 xs:mr-3 text-lg xs:text-xl sm:text-2xl">{icon}</span>
        <h3 className="text-base xs:text-lg sm:text-xl font-semibold text-white truncate">{title}</h3>
      </div>
      
      <p className="text-xs xs:text-sm sm:text-base text-gray-400 leading-relaxed mb-3 xs:mb-4">{description}</p>
      
      <div className="flex flex-wrap gap-1 xs:gap-1.5 sm:gap-2 mt-auto">
        {tags.map((tag, i) => (
          <Tag key={i} text={tag} index={i} />
        ))}
      </div>
    </div>
  );
};

// New Skin Analysis Card component
const SkinAnalysisCard = () => {
  const skinParameters = [
    { name: 'pH Level', value: 58, color: 'bg-emerald-400', icon: '⚖️' },
    { name: 'Sebum', value: 42, color: 'bg-purple-400', icon: '🫧' }
  ];

  const ingredientCompatibility = [
    { name: 'Floral', compatibility: 76, color: 'bg-pink-400' },
    { name: 'Woody', compatibility: 68, color: 'bg-amber-400' },
  ];

  return (
    <div className="w-full max-w-md bg-gray-900/50 backdrop-blur-md rounded-xl p-4 xs:p-5 sm:p-6 md:p-7 shadow-2xl border border-gray-800/60">
      {/* Removed header as requested */}
      
      {/* Skin Parameters Section */}
      <div className="mb-6">
        <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wide mb-3">Skin Parameters</h4>
        <div className="grid grid-cols-2 gap-3 mb-6">
          {skinParameters.map((param, index) => (
            <div key={index} className="bg-gray-800/50 rounded-lg p-3 flex items-center">
              <div className="w-8 h-8 rounded-full bg-gray-700/50 flex items-center justify-center mr-3">
                <span>{param.icon}</span>
              </div>
              <div>
                <div className="text-xs text-gray-400">{param.name}</div>
                <div className="text-base font-medium text-white">{param.value}%</div>
              </div>
            </div>
          ))}
        </div>

        {/* Ingredient Compatibility Section */}
        <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wide mb-3">Ingredient Compatibility</h4>
        <div className="space-y-3">
          {ingredientCompatibility.map((item, index) => (
            <div key={index} className="bg-gray-800/50 rounded-lg p-3">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-white/90">{item.name}</span>
                <span className="text-xs font-medium text-gray-400">{item.compatibility}%</span>
              </div>
              <div className="w-full h-2 bg-gray-700/50 rounded-full overflow-hidden">
                <div className={`h-full ${item.color} rounded-full`} style={{ width: `${item.compatibility}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Solution data
const solutionCards = [
  {
    icon: "✨",
    title: "Personalized to Your Skin",
    description: "Instead of forcing your skin to adapt to a generic scent, we craft a formula that works with your unique chemistry.",
    tags: ["Bespoke formulas", "Skin-matched", "Long-lasting"]
  },
  {
    icon: "🔬",
    title: "Scientific Precision",
    description: "Our AI analyzes various skin parameters to predict how different ingredients will interact with your body chemistry.",
    tags: ["AI-powered", "Data-driven", "Chemistry analysis"]
  }
];

export default function Solution() {
  return (
    <div 
      id="solution" 
      className="bg-gray-950 relative w-full min-h-screen py-16 xs:py-20 sm:py-24 md:py-28 lg:py-32 overflow-hidden flex items-center justify-center"
      aria-label="Solution section"
    >
      <GradientBorder />
      <SolutionDecorations />
      
      <div className="mx-auto max-w-7xl w-full px-4 xs:px-5 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col items-center">
          {/* Header section */}
          <div className="text-center max-w-xs xs:max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16">
            <div className="mb-3 sm:mb-4">
              <Badge>Our Approach</Badge>
            </div>
            <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 xs:mb-4 sm:mb-5 md:mb-6 leading-tight text-white">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-indigo-400 to-cyan-400">
                Redesigning
              </span>
              <br className="hidden xs:block" />
              <span className="inline xs:hidden"> </span>
              <span className="whitespace-nowrap">Perfumery</span>
            </h2>
            <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-xs xs:max-w-sm sm:max-w-xl md:max-w-2xl mx-auto">
              We use advanced AI to analyze your skin traits and identify perfume ingredients that complement your natural chemistry.
            </p>
          </div>

          {/* Main content */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
            {/* Left side - Skin Analysis Card */}
            <div className="relative flex items-center justify-center lg:justify-start order-last lg:order-first mt-8 sm:mt-10 lg:mt-0">
              <SkinAnalysisCard />
            </div>
            
            {/* Right side - Solution cards */}
            <div className="flex flex-col gap-4 xs:gap-5 sm:gap-6 lg:gap-8">
              {solutionCards.map((card, index) => (
                <SolutionCard
                  key={index}
                  icon={card.icon}
                  title={card.title}
                  description={card.description}
                  tags={card.tags}
                  className={index === 0 ? "mb-1 xs:mb-2" : ""}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
