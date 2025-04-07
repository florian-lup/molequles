'use client';

import { FC } from 'react';
import Badge from '@/components/ui/Badge';
import GradientBorder from '@/components/ui/GradientBorder';

interface SolutionCardProps {
  icon: string;
  title: string;
  description: string;
  tags: string[];
  className?: string;
}

const SolutionCard: FC<SolutionCardProps> = ({ icon, title, description, tags, className }) => {
  return (
    <div className={`bg-gray-900/40 backdrop-blur-sm rounded-xl p-5 md:p-6 border border-gray-800/50 hover:border-gray-700/70 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10 flex flex-col h-full ${className}`}>
      <div className="mb-4 md:mb-5 flex items-center border-b border-gray-700/50 pb-1.5">
        <span className="mr-3 text-xl sm:text-2xl">{icon}</span>
        <h3 className="text-lg sm:text-xl font-semibold text-white">{title}</h3>
      </div>
      
      <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-4">{description}</p>
      
      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-auto">
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

export default function Solution() {
  return (
    <div 
      id="solution" 
      className="bg-gray-950 relative w-full min-h-screen flex items-center justify-center overflow-hidden text-white py-8 sm:py-12 md:py-16"
      aria-label="Solution section"
    >
      <GradientBorder />
      
      {/* Decorative elements */}
      <div className="absolute top-[20%] right-[8%] w-40 h-40 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/10 blur-2xl"></div>
      <div className="absolute bottom-[30%] left-[10%] w-48 h-48 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/10 blur-2xl"></div>
      
      {/* Animated dots */}
      <div className="absolute top-1/3 right-1/4 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-pink-400/50 animate-pulse"></div>
      <div className="absolute bottom-1/4 left-1/4 w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-cyan-400/50 animate-pulse-slow"></div>
      <div className="absolute top-1/2 left-1/2 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 rounded-full bg-indigo-400/50 animate-pulse"></div>
      <div className="absolute top-1/4 left-1/3 w-2 h-2 rounded-full bg-purple-400/50 animate-pulse-slow"></div>
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16">
            <div className="mb-3 sm:mb-4">
              <Badge>Our Approach</Badge>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-indigo-400 to-cyan-400">
                Redesigning
              </span>
              <br className="hidden xs:block" />
              <span className="inline xs:hidden"> </span>
              Perfumery
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              We’ve reinvented perfumery using AI and skin analysis to create scents tailored to your unique chemistry.
            </p>
          </div>

          {/* Main content */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
            {/* Left side - Visual representation */}
            <div className="relative flex items-center justify-center order-last lg:order-first">
              <div className="relative w-full max-w-md h-[400px] flex items-center justify-center">
                {/* AI visualization */}
                <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-full bg-gradient-to-r from-indigo-500/30 to-pink-500/30 flex items-center justify-center animate-pulse-very-slow">
                  <div className="absolute w-56 h-56 md:w-64 md:h-64 rounded-full border border-indigo-400/40 animate-spin-slow"></div>
                  <div className="absolute w-48 h-48 md:w-56 md:h-56 rounded-full border border-pink-400/30 animate-reverse-spin-slow"></div>
                  
                  {/* Data points */}
                  <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-cyan-400/90 w-3 h-3 rounded-full"></div>
                  <div className="absolute top-1/4 right-4 bg-pink-400/90 w-3 h-3 rounded-full"></div>
                  <div className="absolute bottom-1/4 right-6 bg-indigo-400/90 w-3 h-3 rounded-full"></div>
                  <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-cyan-400/90 w-3 h-3 rounded-full"></div>
                  <div className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-pink-400/90 w-3 h-3 rounded-full"></div>
                  
                  {/* Center icon */}
                  <div className="z-10 w-24 h-24 rounded-full bg-gray-900/80 backdrop-blur-sm flex items-center justify-center border border-gray-700/50">
                    <span className="text-3xl">🧪</span>
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
            
            {/* Right side - Text content */}
            <div className="flex flex-col gap-6 lg:gap-8">
              <SolutionCard
                icon="✨"
                title="Personalized to Your Skin"
                description="Instead of forcing your skin to adapt to a generic scent, we craft a formula that works with your unique chemistry."
                tags={["Bespoke formulas", "Skin-matched", "Long-lasting"]}
                className="mb-2"
              />
              
              <SolutionCard
                icon="🔬"
                title="Scientific Precision"
                description="Our AI analyzes various skin parameters to predict how different ingredients will interact with your body chemistry."
                tags={["AI-powered", "Data-driven", "Chemistry analysis"]}
              />
              
              {/* Decorative element beside cards */}
              <div className="hidden lg:block h-32 w-32 absolute -right-16 bottom-16 rounded-full bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 blur-xl animate-pulse-slow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
