'use client';

import { FC } from 'react';
import Badge from '@/components/ui/Badge';
import GradientBorder from '@/components/ui/GradientBorder';
import Tag from '@/components/ui/Tag';
import { ProblemDecorations } from '@/components/ui/DecorativeElements';

interface FrustrationCardProps {
  icon: string;
  title: string;
  description: string;
  tags: string[];
  index: number;
}

const FrustrationCard: FC<FrustrationCardProps> = ({ icon, title, description, tags }) => {
  return (
    <div className="bg-gray-900/40 backdrop-blur-sm rounded-xl p-3 xs:p-4 sm:p-5 md:p-6 border border-gray-800/50 hover:border-gray-700/70 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10 h-full flex flex-col">
      <div className="mb-2 xs:mb-3 sm:mb-4 md:mb-5 flex items-center border-b border-gray-700/50 pb-1.5">
        <span className="mr-2 text-base xs:text-lg sm:text-xl">{icon}</span>
        <h3 className="text-base xs:text-lg sm:text-xl font-semibold text-white truncate">{title}</h3>
      </div>
      
      <p className="text-xs xs:text-sm sm:text-base text-gray-400 leading-relaxed mb-3 xs:mb-4 md:mb-5 flex-grow">{description}</p>
      
      <div className="flex flex-wrap gap-1 xs:gap-1.5 sm:gap-2">
        {tags.map((tag, i) => (
          <Tag key={i} text={tag} index={i} />
        ))}
      </div>
    </div>
  );
};

// Define frustrations data outside the component
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

export default function Problem() {
  return (
    <section
      id="problem" 
      className="bg-gray-950 relative w-full min-h-[550px] h-[100svh] flex items-center justify-center overflow-hidden text-white py-6 xs:py-8 sm:py-12 md:py-16"
      aria-label="Problem section"
    >
      <GradientBorder />
      <ProblemDecorations />
      
      <div className="mx-auto max-w-7xl w-full px-3 xs:px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center w-full">
          {/* Header section */}
          <div className="text-left w-full mb-6 xs:mb-8 sm:mb-10 md:mb-12 lg:mb-16">
            <div className="mb-2 xs:mb-3 sm:mb-4">
              <Badge>The Challenge</Badge>
            </div>
            <h3 className="text-base xs:text-lg sm:text-xl md:text-2xl text-white mb-2 xs:mb-3 leading-relaxed">
              Traditional perfumes are mass-produced using standardized formulas that overlook individual skin chemistry, leading to inconsistent scents.
            </h3>
          </div>

          {/* Frustrations section */}
          <div className="w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 xs:gap-4 sm:gap-5 md:gap-6 lg:gap-8">
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
    </section>
  );
} 