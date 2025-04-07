'use client';

import { FC } from 'react';
import Badge from '@/components/ui/Badge';
import GradientBorder from '@/components/ui/GradientBorder';

interface FrustrationCardProps {
  icon: string;
  title: string;
  description: string;
  tags: string[];
  index: number;
}

const FrustrationCard: FC<FrustrationCardProps> = ({ icon, title, description, tags, index }) => {
  
  return (
    <div className="bg-gray-900/40 backdrop-blur-sm rounded-xl p-4 sm:p-5 md:p-6 border border-gray-800/50 hover:border-gray-700/70 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10 h-full flex flex-col">
      {/* Updated icon styling to match HeroCard */}
      <div className={`mb-3 sm:mb-4 md:mb-5 flex items-center border-b border-gray-700/50 pb-1.5`}>
        <span className="mr-2 text-lg sm:text-xl">{icon}</span>
        <h3 className="text-lg sm:text-xl font-semibold text-white truncate">{title}</h3>
      </div>
      
      <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-4 md:mb-5 flex-grow">{description}</p>
      
      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 sm:gap-2">
        {tags.map((tag, i) => (
          <span 
            key={i} 
            className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
              i % 3 === 0 ? 'bg-pink-400/10 text-pink-300' : 
              i % 3 === 1 ? 'bg-indigo-400/10 text-indigo-300' :
              'bg-cyan-400/10 text-cyan-300'
            }`}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default function Problem() {
  const frustrations = [
    {
      title: "Poor Performance",
      description: "Fragrances that fade quickly or transform unpredictably on your skin throughout the day.",
      icon: "⏳",
      tags: ["Short-lived", "Inconsistent", "Low sillage"]
    },
    {
      title: "Allergic Reactions",
      description: "Irritation and sensitivities from ingredients that don't work with your unique skin chemistry.",
      icon: "🤧",
      tags: ["Skin irritation", "Headaches", "Synthetic compounds"]
    },
    {
      title: "Endless Trial & Error",
      description: "Wasted time and money testing countless fragrances trying to find \"the one\".",
      icon: "🔄",
      tags: ["Time-consuming", "Expensive", "Disappointing"]
    }
  ];

  return (
    <div 
      id="problem" 
      className="bg-gray-950 relative w-full h-screen flex items-center justify-center overflow-hidden text-white py-10 sm:py-14 md:py-20"
      aria-label="Problem section"
    >
      <GradientBorder />
      
      {/* Decorative elements - more responsive */}
      <div className="hidden sm:block absolute top-24 left-[5%] w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/10 blur-2xl"></div>
      <div className="hidden sm:block absolute bottom-24 right-[5%] w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-r from-indigo-500/20 to-blue-500/10 blur-2xl"></div>
      
      {/* Animated dots - more responsive */}
      <div className="absolute top-1/4 right-1/4 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-indigo-400/50 animate-pulse"></div>
      <div className="absolute bottom-1/3 left-1/3 w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-pink-400/50 animate-pulse-slow"></div>
      <div className="absolute top-1/2 right-1/2 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 rounded-full bg-purple-400/50 animate-pulse"></div>
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16">
            <div className="mb-3 sm:mb-4">
              <Badge>The Challenge</Badge>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-indigo-400 to-cyan-400">
                Why Generic
              </span>
              <br className="hidden xs:block" />
              <span className="inline xs:hidden"> </span>
              Fragrances Fail
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              Traditional perfumes are mass-produced using standardized formulas that overlook individual skin chemistry, leading to inconsistent scents.
            </p>
          </div>

          <div className="w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {frustrations.map((item, index) => (
                <FrustrationCard
                  key={index}
                  index={index}
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                  tags={item.tags}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 