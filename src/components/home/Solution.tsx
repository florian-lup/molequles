'use client';

import { FC } from 'react';
import Badge from '@/components/ui/Badge';
import GradientBorder from '@/components/ui/GradientBorder';
import Tag from '@/components/ui/Tag';

interface SolutionCardProps {
  icon: string;
  title: string;
  description: string;
  tags: string[];
  className?: string;
}

const SolutionCard: FC<SolutionCardProps> = ({ icon, title, description, tags, className }) => {
  return (
    <div className={`bg-gray-900/40 backdrop-blur-sm rounded-xl p-3 xs:p-4 sm:p-5 md:p-6 border border-gray-800/50 hover:border-gray-700/70 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10 flex flex-col h-full ${className}`}>
      <div className="mb-2 xs:mb-3 sm:mb-4 md:mb-5 flex items-center border-b border-gray-700/50 pb-1.5">
        <span className="mr-2 xs:mr-3 text-lg xs:text-xl sm:text-2xl">{icon}</span>
        <h3 className="text-base xs:text-lg sm:text-xl font-semibold text-white truncate">{title}</h3>
      </div>
      
      <p className="text-xs xs:text-sm sm:text-base text-gray-400 leading-relaxed mb-3 xs:mb-4">{description}</p>
      
      {/* Tags */}
      <div className="flex flex-wrap gap-1 xs:gap-1.5 sm:gap-2 mt-auto">
        {tags.map((tag, i) => (
          <Tag key={i} text={tag} index={i} />
        ))}
      </div>
    </div>
  );
};

export default function Solution() {
  return (
    <div 
      id="solution" 
      className="bg-gray-950 relative w-full min-h-screen py-16 xs:py-20 sm:py-24 md:py-28 lg:py-32 overflow-hidden flex items-center justify-center"
      aria-label="Solution section"
    >
      <GradientBorder />
      
      {/* Decorative elements - positioned with percentages for better scaling */}
      <div className="absolute top-[20%] right-[8%] w-20 xs:w-24 sm:w-28 md:w-32 h-20 xs:h-24 sm:h-28 md:h-32 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/10 blur-2xl"></div>
      <div className="absolute bottom-[10%] left-[10%] w-24 xs:w-28 sm:w-32 md:w-36 h-24 xs:h-28 sm:h-32 md:h-36 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/10 blur-2xl"></div>
      
      {/* Animated dots - smaller and better positioned */}
      <div className="absolute top-1/3 right-1/4 w-2 xs:w-3 sm:w-4 h-2 xs:h-3 sm:h-4 rounded-full bg-pink-400/50 animate-pulse"></div>
      <div className="absolute bottom-1/4 left-1/4 w-1.5 xs:w-2 sm:w-3 h-1.5 xs:h-2 sm:h-3 rounded-full bg-cyan-400/50 animate-pulse-slow"></div>
      <div className="absolute top-1/2 left-1/2 w-2 xs:w-3 sm:w-4 md:w-5 h-2 xs:h-3 sm:h-4 md:h-5 rounded-full bg-indigo-400/50 animate-pulse"></div>
      <div className="absolute top-1/4 left-1/3 w-1.5 xs:w-2 h-1.5 xs:h-2 rounded-full bg-purple-400/50 animate-pulse-slow"></div>
      
      <div className="mx-auto max-w-7xl w-full px-4 xs:px-5 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col items-center">
          {/* Header section with improved spacing */}
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
              Perfumery
            </h2>
            <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-xs xs:max-w-sm sm:max-w-xl md:max-w-2xl mx-auto">
              We use AI to analyze skin traits and find perfume ingredients that complement your natural chemistry.
            </p>
          </div>

          {/* Main content with better spacing for small screens */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
            {/* Left side - Visual representation with better sizing */}
            <div className="relative flex items-center justify-center order-last lg:order-first mt-8 sm:mt-10 lg:mt-0">
              <div className="relative w-full max-w-[260px] xs:max-w-xs sm:max-w-sm md:max-w-md h-[220px] xs:h-[260px] sm:h-[300px] md:h-[350px] flex items-center justify-center">
                {/* AI visualization - scaled better for small screens */}
                <div className="relative w-40 xs:w-48 sm:w-56 md:w-64 lg:w-72 h-40 xs:h-48 sm:h-56 md:h-64 lg:h-72 rounded-full bg-gradient-to-r from-indigo-500/30 to-pink-500/30 flex items-center justify-center animate-pulse-very-slow">
                  <div className="absolute w-32 xs:w-40 sm:w-48 md:w-56 lg:w-64 h-32 xs:h-40 sm:h-48 md:h-56 lg:h-64 rounded-full border border-indigo-400/40 animate-spin-slow"></div>
                  <div className="absolute w-24 xs:w-32 sm:w-40 md:w-48 lg:w-56 h-24 xs:h-32 sm:h-40 md:h-48 lg:h-56 rounded-full border border-pink-400/30 animate-reverse-spin-slow"></div>
                  
                  {/* Data points - smaller for better scaling */}
                  <div className="absolute top-2 xs:top-3 sm:top-4 left-1/2 transform -translate-x-1/2 bg-cyan-400/90 w-1.5 xs:w-2 sm:w-3 h-1.5 xs:h-2 sm:h-3 rounded-full"></div>
                  <div className="absolute top-1/4 right-2 xs:right-3 sm:right-4 bg-pink-400/90 w-1.5 xs:w-2 sm:w-3 h-1.5 xs:h-2 sm:h-3 rounded-full"></div>
                  <div className="absolute bottom-1/4 right-3 xs:right-4 sm:right-6 bg-indigo-400/90 w-1.5 xs:w-2 sm:w-3 h-1.5 xs:h-2 sm:h-3 rounded-full"></div>
                  <div className="absolute bottom-3 xs:bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 bg-cyan-400/90 w-1.5 xs:w-2 sm:w-3 h-1.5 xs:h-2 sm:h-3 rounded-full"></div>
                  <div className="absolute top-1/2 left-2 xs:left-3 sm:left-4 transform -translate-y-1/2 bg-pink-400/90 w-1.5 xs:w-2 sm:w-3 h-1.5 xs:h-2 sm:h-3 rounded-full"></div>
                  
                  {/* Center icon - smaller for mobile */}
                  <div className="z-10 w-14 xs:w-16 sm:w-20 md:w-24 h-14 xs:h-16 sm:h-20 md:h-24 rounded-full bg-gray-900/80 backdrop-blur-sm flex items-center justify-center border border-gray-700/50">
                    <span className="text-xl xs:text-2xl sm:text-3xl">🧪</span>
                  </div>
                </div>
                
                {/* Connection lines */}
                <div className="absolute w-full h-full pointer-events-none">
                  <svg className="w-full h-full" viewBox="0 0 400 400">
                    <path d="M200,120 L200,90" stroke="rgba(168, 85, 247, 0.4)" strokeWidth="1" />
                    <path d="M280,150 L310,130" stroke="rgba(236, 72, 153, 0.4)" strokeWidth="1" />
                    <path d="M280,250 L310,270" stroke="rgba(99, 102, 241, 0.4)" strokeWidth="1" />
                    <path d="M200,280 L200,310" stroke="rgba(14, 165, 233, 0.4)" strokeWidth="1" />
                    <path d="M120,200 L90,200" stroke="rgba(236, 72, 153, 0.4)" strokeWidth="1" />
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Right side - Text content with better spacing */}
            <div className="flex flex-col gap-4 xs:gap-5 sm:gap-6 lg:gap-8">
              <SolutionCard
                icon="✨"
                title="Personalized to Your Skin"
                description="Instead of forcing your skin to adapt to a generic scent, we craft a formula that works with your unique chemistry."
                tags={["Bespoke formulas", "Skin-matched", "Long-lasting"]}
                className="mb-1 xs:mb-2"
              />
              
              <SolutionCard
                icon="🔬"
                title="Scientific Precision"
                description="Our AI analyzes various skin parameters to predict how different ingredients will interact with your body chemistry."
                tags={["AI-powered", "Data-driven", "Chemistry analysis"]}
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative element beside cards - moved inside container for better control */}
      <div className="hidden lg:block h-16 sm:h-20 md:h-24 lg:h-28 w-16 sm:w-20 md:w-24 lg:w-28 absolute right-[5%] bottom-[10%] rounded-full bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 blur-xl animate-pulse-slow"></div>
    </div>
  );
}
