'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import GradientBorder from '@/components/ui/GradientBorder';
import { FiArrowRight } from 'react-icons/fi';
import { div } from 'framer-motion/client';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  
  return (
    <div 
      id="hero"
      className="bg-gray-950 relative w-full overflow-hidden text-white py-6 sm:py-8 md:py-10 lg:py-0"
      aria-label="Hero section"
    >
      {/* Gradient borders */}
      <GradientBorder showTop={false} />
      
      {/* Decorative elements for all screens */}
      <div className="absolute top-24 right-12 w-32 h-32 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/10 blur-2xl"></div>
      <div className="absolute bottom-24 left-12 w-40 h-40 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/10 blur-2xl"></div>
      <div className="absolute bottom-24 right-12 w-40 h-40 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/10 blur-2xl"></div>
      <div className="absolute top-32 left-1/4 w-36 h-36 rounded-full bg-gradient-to-r from-pink-500/10 to-purple-500/10 blur-xl"></div>
      
      {/* Animated dots for all screens */}
      <div className="absolute top-1/3 left-1/4 w-4 h-4 rounded-full bg-pink-400/50 animate-pulse"></div>
      <div className="absolute top-2/3 right-1/4 w-3 h-3 rounded-full bg-indigo-400/50 animate-pulse"></div>
      <div className="absolute top-1/2 left-1/2 w-5 h-5 rounded-full bg-cyan-400/50 animate-pulse"></div>
      <div className="absolute top-1/4 right-1/3 w-2 h-2 rounded-full bg-purple-400/50 animate-pulse-slow"></div>
      <div className="absolute bottom-1/3 left-1/3 w-3 h-3 rounded-full bg-indigo-300/50 animate-pulse-slow"></div>
      <div className="absolute top-2/5 left-16 w-2 h-2 rounded-full bg-pink-300/50 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-16 w-4 h-4 rounded-full bg-cyan-300/50 animate-pulse-slow"></div>
      <div className="absolute top-3/4 left-10 w-2 h-2 rounded-full bg-indigo-400/50 animate-pulse"></div>
      <div className="absolute top-16 right-1/4 w-3 h-3 rounded-full bg-pink-400/50 animate-pulse-slow"></div>
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div 
          ref={heroRef} 
          className="flex flex-col lg:flex-row min-h-[80vh] sm:min-h-[85vh] md:min-h-[90vh] lg:min-h-screen items-center justify-center py-8 sm:py-12 md:py-16 lg:py-0"
        >
          {/* Content panel */}
          <div 
            className="w-full lg:w-1/2 relative z-10 flex items-center justify-center lg:justify-start mt-12 sm:mt-16 md:mt-20 lg:mt-0 pt-8 pb-12 sm:pt-10 sm:pb-16 md:pt-12 md:pb-20 lg:py-0 lg:px-8"
          >
            <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto lg:mx-0 text-center lg:text-left">
              <h1 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-5 md:mb-6 leading-tight"
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-indigo-400 to-cyan-400">Scientifically</span>
                <br />
                Crafted Scents
              </h1>
              
              <p 
                className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-7 md:mb-8 leading-relaxed mx-auto lg:mx-0 max-w-xs sm:max-w-sm md:max-w-md"
              >
                Personalized fragrances engineered with AI technology for your skin chemistry.
              </p>
              
              <div className="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
                <Button
                  variant="neon"
                  size="lg"
                  shape="pill"
                  icon={<FiArrowRight />}
                  iconPosition="right"
                  href="#start-journey"
                >
                  Join Waitlist
                </Button>
              </div>
            </div>
          </div>
          
          {/* Visual panel - visible only on large screens */}
          <div className="hidden lg:flex w-full lg:w-1/2 items-center justify-center py-8 lg:py-0 order-first lg:order-last">
            <div
              className="relative w-full max-w-md xl:max-w-lg ml-auto mr-4 xl:mr-8 h-[400px] xl:h-[450px] flex items-center justify-end"
            >
              <div 
                className="p-6 xl:p-8 bg-black/30 backdrop-blur-xl rounded-xl border border-indigo-800/30 shadow-xl"
              >
                <Image
                  src="/images/skin-analysis.svg"
                  alt="Skin analysis and scent profile"
                  width={270}
                  height={210}
                  priority
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 