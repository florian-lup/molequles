'use client';

import { FC } from 'react';
import Badge from '@/components/ui/Badge';
import GradientBorder from '@/components/ui/GradientBorder';

interface BenefitCardProps {
  icon: string;
  title: string;
  description: string;
  tags: string[];
  className?: string;
  index: number;
}

const BenefitCard: FC<BenefitCardProps> = ({ icon, title, description, tags, className, index }) => {
  return (
    <div className={`bg-gray-900/40 backdrop-blur-sm rounded-xl p-3 xs:p-4 sm:p-5 md:p-6 border border-gray-800/50 hover:border-gray-700/70 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10 h-full flex flex-col ${className || ''}`}>
      <div className="mb-2 xs:mb-3 sm:mb-4 md:mb-5 flex items-center border-b border-gray-700/50 pb-1.5">
        <span className="mr-2 text-base xs:text-lg sm:text-xl md:text-2xl">{icon}</span>
        <h3 className="text-base xs:text-lg sm:text-xl font-semibold text-white truncate">{title}</h3>
      </div>
      
      <p className="text-xs xs:text-sm sm:text-base text-gray-400 leading-relaxed mb-3 xs:mb-4 flex-grow">{description}</p>
      
      {/* Tags */}
      <div className="flex flex-wrap gap-1 xs:gap-1.5 sm:gap-2 mt-auto">
        {tags.map((tag, i) => (
          <span 
            key={i} 
            className={`inline-flex items-center px-1.5 xs:px-2 py-0.5 rounded-full text-xs font-medium ${
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

export default function Benefits() {
  const benefits = [
    {
      icon: "🔬",
      title: "Personalized Signature Scent",
      description: "Enjoy a fragrance that is uniquely tailored to your skin's chemistry, creating a scent that feels inherently yours.",
      tags: ["Custom formula", "Unique profile", "Signature scent"]
    },
    {
      icon: "⏱️",
      title: "Enhanced Longevity",
      description: "Benefit from a perfume that performs reliably throughout the day, maintaining its intended balance on your skin.",
      tags: ["All-day wear", "Stable scent", "Slow release"]
    },
    {
      icon: "🛡️",
      title: "Reduced Allergy Risks",
      description: "Experience fewer irritations by eliminating ingredients that trigger sensitivities, ensuring a safer wearing experience.",
      tags: ["Hypoallergenic", "Skin-safe", "Low irritation"]
    },
    {
      icon: "♻️",
      title: "Sustainability",
      description: "Save time and money by avoiding endless experimentation through precise formulations tailored exactly to you.",
      tags: ["Cost-effective", "Time-saving", "Eco-friendly"]
    }
  ];

  return (
    <div 
      id="benefits" 
      className="bg-gray-950 relative w-full min-h-screen py-16 xs:py-20 sm:py-24 md:py-28 lg:py-32 overflow-hidden flex items-center justify-center"
      aria-label="Benefits section"
    >
      <GradientBorder />
      
      {/* Decorative elements - responsive positioning */}
      <div className="absolute top-[15%] right-[10%] w-16 xs:w-20 sm:w-24 md:w-32 lg:w-40 h-16 xs:h-20 sm:h-24 md:h-32 lg:h-40 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/10 blur-2xl"></div>
      <div className="absolute bottom-[20%] left-[8%] w-16 xs:w-20 sm:w-28 md:w-36 lg:w-44 h-16 xs:h-20 sm:h-28 md:h-36 lg:h-44 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/10 blur-2xl"></div>
      <div className="absolute top-[60%] left-[40%] w-12 xs:w-16 sm:w-20 md:w-28 h-12 xs:h-16 sm:h-20 md:h-28 rounded-full bg-gradient-to-r from-indigo-500/15 to-purple-500/10 blur-xl"></div>
      
      {/* Decorative dots - with subtle animations for consistency */}
      <div className="absolute top-1/4 right-1/3 w-1.5 xs:w-2 sm:w-3 h-1.5 xs:h-2 sm:h-3 rounded-full bg-pink-400/50 animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 left-1/4 w-1.5 xs:w-2 sm:w-3 h-1.5 xs:h-2 sm:h-3 rounded-full bg-indigo-400/50 animate-pulse"></div>
      <div className="absolute top-1/2 right-1/4 w-2 xs:w-3 sm:w-4 md:w-5 h-2 xs:h-3 sm:h-4 md:h-5 rounded-full bg-cyan-400/50 animate-pulse-slow"></div>
      <div className="absolute top-2/3 left-1/2 w-1.5 xs:w-2 h-1.5 xs:h-2 rounded-full bg-purple-400/50 animate-pulse"></div>
      <div className="absolute bottom-1/3 right-1/3 w-1.5 xs:w-2 sm:w-3 h-1.5 xs:h-2 sm:h-3 rounded-full bg-pink-300/50 animate-pulse-slow"></div>
      
      <div className="mx-auto max-w-7xl w-full px-4 xs:px-5 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col items-center">
          {/* Header section with improved spacing */}
          <div className="text-center max-w-xs xs:max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-14 lg:mb-16">
            <div className="mb-3 sm:mb-4">
              <Badge>Why Molequles</Badge>
            </div>
            <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 xs:mb-4 sm:mb-5 md:mb-6 leading-tight text-white">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-indigo-400 to-cyan-400">
                AI-Driven
              </span>
              <br className="hidden xs:block" />
              <span className="inline xs:hidden"> </span>
              Advantages
            </h2>
            <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-xs xs:max-w-sm sm:max-w-xl md:max-w-2xl mx-auto">
              Experience the advantages of AI-driven perfume creation tailored to your unique body chemistry.
            </p>
          </div>

          {/* Benefits grid with responsive columns and improved spacing */}
          <div className="w-full max-w-5xl mx-auto">
            <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 gap-4 xs:gap-5 sm:gap-6 md:gap-8">
              {benefits.map((benefit, index) => (
                <BenefitCard
                  key={index}
                  index={index}
                  icon={benefit.icon}
                  title={benefit.title}
                  description={benefit.description}
                  tags={benefit.tags}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
