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
    <div className="bg-gray-900/40 backdrop-blur-sm rounded-xl p-6 border border-gray-800/50 hover:border-gray-700/70 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10">
      {/* Updated icon styling to match HeroCard */}
      <div className={`mb-5 flex items-center border-b border-gray-700/50 pb-1.5`}>
        <span className="mr-2 text-xl">{icon}</span>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
      </div>
      
      <p className="text-gray-400 leading-relaxed mb-5">{description}</p>
      
      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, i) => (
          <span 
            key={i} 
            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
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
      icon: "⚠️",
      tags: ["Skin irritation", "Headaches", "Synthetic compounds"]
    },
    {
      title: "Endless Trial & Error",
      description: "Wasted time and money testing countless fragrances trying to find \"the one\".",
      icon: "🔍",
      tags: ["Time-consuming", "Expensive", "Disappointing"]
    }
  ];

  return (
    <div 
      id="problem" 
      className="bg-gray-950 relative w-full overflow-hidden text-white py-12 sm:py-16 md:py-20"
      aria-label="Problem section"
    >
      <GradientBorder />
      
      {/* Decorative elements */}
      <div className="absolute top-24 left-12 w-32 h-32 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/10 blur-2xl"></div>
      <div className="absolute bottom-24 right-12 w-40 h-40 rounded-full bg-gradient-to-r from-indigo-500/20 to-blue-500/10 blur-2xl"></div>
      
      {/* Animated dots */}
      <div className="absolute top-1/4 right-1/4 w-4 h-4 rounded-full bg-indigo-400/50 animate-pulse"></div>
      <div className="absolute bottom-1/3 left-1/3 w-3 h-3 rounded-full bg-pink-400/50 animate-pulse-slow"></div>
      <div className="absolute top-1/2 right-1/2 w-5 h-5 rounded-full bg-purple-400/50 animate-pulse"></div>
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="mb-4">
              <Badge color="primary">The Challenge</Badge>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-indigo-400 to-cyan-400">
                Why Traditional
              </span>
              <br />
              Fragrance Fails You
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
              Generic, one-size-fits-all perfumes are mass-produced with standardized formulas, leading to unpredictable results.
            </p>
          </div>

          <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
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