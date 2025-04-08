'use client';

import Button from '@/components/ui/Button';
import GradientBorder from '@/components/ui/GradientBorder';
import { FiArrowRight } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { useWaitlist } from '@/contexts/WaitlistContext';
import { DecorativeElements } from '@/components/ui/DecorativeElements';

interface BarProps {
  label: string;
  value: number;
  color: string;
  className?: string;
  isLast?: boolean;
}

const ProgressBar: React.FC<BarProps> = ({ label, value, color, className, isLast = false }) => {
  // Clamp value between 0 and 100
  const clampedValue = Math.max(0, Math.min(100, value));
  
  return (
    <div className={`flex items-center w-full ${isLast ? 'mb-0' : 'mb-4'} ${className || ''}`}>
      <div className="flex items-center w-full">
        <span className="font-sans text-sm text-white/90 w-[70px] flex-shrink-0 font-medium">{label}</span>
        <div className="relative w-full h-2 flex-grow ml-3 overflow-hidden rounded-md">
          {/* Background bar with gradient */}
          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-gray-800/70 to-gray-700/50" />
          
          {/* Main continuously animating bar */}
          <motion.div 
            className={`absolute inset-y-0 left-0 h-full ${color} rounded-md`}
            animate={{ 
              width: [
                `${clampedValue * 0.2}%`, 
                `${clampedValue}%`, 
                `${clampedValue * 0.5}%`,
                `${clampedValue * 0.8}%`,
                `${clampedValue * 0.4}%`,
                `${clampedValue * 0.6}%`
              ]
            }}
            transition={{ 
              duration: 8,
              times: [0, 0.3, 0.5, 0.7, 0.85, 1],
              repeat: Infinity, 
              ease: "easeInOut",
              repeatType: "loop"
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default function Hero() {
  const { openWaitlist } = useWaitlist();
  
  return (
    <div 
      id="hero"
      className="bg-gray-950 relative w-full min-h-[600px] h-[100svh] overflow-hidden text-white"
      aria-label="Hero section"
    >
      {/* Gradient borders */}
      <GradientBorder />
      
      {/* Decorative elements */}
      <DecorativeElements />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex flex-col lg:flex-row h-full items-center justify-center lg:justify-between py-8 sm:py-10 md:py-12 lg:py-0">
          {/* Content panel */}
          <div className="w-full lg:w-1/2 relative z-10 flex items-center justify-center lg:justify-start mb-4 xs:mb-6 sm:mb-8 lg:mb-0">
            <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto lg:mx-0 text-center lg:text-left">
              <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-indigo-400 to-cyan-400">Scientifically</span>
                <br />
                <span className="whitespace-nowrap">Crafted Scents</span>
              </h1>
              
              <p className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-300 mb-5 sm:mb-6 md:mb-8 leading-relaxed mx-auto lg:mx-0 max-w-xs sm:max-w-sm md:max-w-md">
                Personalized fragrances engineered with AI technology for your skin chemistry.
              </p>
              
              <div className="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start mb-6 xs:mb-8 sm:mb-10 lg:mb-0">
                <Button
                  variant="neon"
                  size="lg"
                  shape="pill"
                  icon={<FiArrowRight />}
                  iconPosition="right"
                  onClick={openWaitlist}
                >
                  Join Waitlist
                </Button>
              </div>
            </div>
          </div>
          
          {/* Visual panel */}
          <div className="flex w-full lg:w-1/2 items-center justify-center lg:justify-end pt-2 xs:pt-4 sm:pt-6 lg:pt-0">
            <div className="w-full max-w-[280px] xs:max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg bg-gray-900/40 backdrop-blur-sm rounded-xl p-4 shadow-xl border border-gray-800/50">
              {/* Skin Chemistry Section - Grid layout */}
              <div className="mb-5">
                <div className="flex items-center mb-3 border-b border-gray-700/50 pb-1.5">
                  <span className="mr-2 text-base">🧪</span>
                  <h3 className="text-xs font-semibold text-gray-300 uppercase tracking-wide">Skin Chemistry</h3>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-blue-900/30 rounded-lg p-2 text-center">
                    <div className="text-2xl font-bold text-blue-400">44%</div>
                    <div className="text-xs text-gray-400">Hydration</div>
                  </div>
                  <div className="bg-emerald-900/30 rounded-lg p-2 text-center">
                    <div className="text-2xl font-bold text-emerald-400">55%</div>
                    <div className="text-xs text-gray-400">pH Level</div>
                  </div>
                  <div className="bg-purple-900/30 rounded-lg p-2 text-center">
                    <div className="text-2xl font-bold text-purple-400">40%</div>
                    <div className="text-xs text-gray-400">Sebum</div>
                  </div>
                </div>
              </div>

              {/* Scent Profile Section - Progress bars */}
              <div>
                <div className="flex items-center mb-3 border-b border-gray-700/50 pb-1.5">
                  <span className="mr-2 text-base">🌸</span>
                  <h3 className="text-xs font-semibold text-gray-300 uppercase tracking-wide">Scent Profile</h3>
                </div>
                <div className="space-y-0.5">
                  <ProgressBar label="Citrus" value={68} color="bg-yellow-400" />
                  <ProgressBar label="Floral" value={55} color="bg-pink-400" />
                  <ProgressBar label="Musk" value={66} color="bg-purple-400" isLast />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 