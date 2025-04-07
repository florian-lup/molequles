'use client';

import { useRef } from 'react';
import Button from '@/components/ui/Button';
import GradientBorder from '@/components/ui/GradientBorder';
import SkinAnalysis from '@/components/ui/decorations/HeroCard';
import { FiArrowRight } from 'react-icons/fi';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  
  return (
    <div 
      id="hero"
      className="bg-gray-950 relative w-full min-h-[600px] h-[100svh] overflow-hidden text-white"
      aria-label="Hero section"
    >
      {/* Gradient borders */}
      <GradientBorder />
      
      {/* Decorative elements - responsive positioning */}
      <div className="absolute top-[15%] right-[8%] w-24 sm:w-32 md:w-40 h-24 sm:h-32 md:h-40 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/10 blur-2xl"></div>
      <div className="absolute bottom-[40%] left-[5%] w-28 sm:w-36 md:w-48 h-28 sm:h-36 md:h-48 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/10 blur-2xl"></div>
      <div className="absolute top-[60%] left-[45%] w-28 sm:w-36 md:w-44 h-28 sm:h-36 md:h-44 rounded-full bg-gradient-to-r from-pink-500/10 to-purple-500/10 blur-xl"></div>
      
      {/* Animated dots - optimized for all screens */}
      <div className="absolute top-1/3 left-1/4 w-2 sm:w-3 md:w-4 h-2 sm:h-3 md:h-4 rounded-full bg-pink-400/50 animate-pulse"></div>
      <div className="absolute top-2/3 right-1/4 w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-indigo-400/50 animate-pulse"></div>
      <div className="absolute top-1/2 left-1/2 w-3 sm:w-4 md:w-5 h-3 sm:h-4 md:h-5 rounded-full bg-cyan-400/50 animate-pulse"></div>
      <div className="absolute top-1/4 right-1/3 w-2 h-2 rounded-full bg-purple-400/50 animate-pulse-slow"></div>
      <div className="absolute bottom-1/3 left-1/3 w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-indigo-300/50 animate-pulse-slow"></div>
      <div className="absolute top-2/5 left-[5%] sm:left-16 w-2 h-2 rounded-full bg-pink-300/50 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-[5%] sm:right-16 w-3 sm:w-4 h-3 sm:h-4 rounded-full bg-cyan-300/50 animate-pulse-slow"></div>
      <div className="absolute top-3/4 left-[5%] sm:left-10 w-2 h-2 rounded-full bg-indigo-400/50 animate-pulse"></div>
      <div className="absolute top-16 right-1/4 w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-pink-400/50 animate-pulse-slow"></div>
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full">
        <div 
          ref={heroRef} 
          className="flex flex-col lg:flex-row h-full items-center justify-center py-8 sm:py-10 md:py-12 lg:py-0"
        >
          {/* Content panel */}
          <div 
            className="w-full lg:w-1/2 relative z-10 flex items-center justify-center lg:justify-start lg:px-8 lg:pl-16 mb-6 sm:mb-8 lg:mb-0"
          >
            <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto lg:mx-0 text-center lg:text-left">
              <h1 
                className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight"
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-indigo-400 to-cyan-400">Scientifically</span>
                <br />
                Crafted Scents
              </h1>
              
              <p 
                className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-300 mb-5 sm:mb-6 md:mb-8 leading-relaxed mx-auto lg:mx-0 max-w-xs sm:max-w-sm md:max-w-md"
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
          
          {/* Visual panel */}
          <div className="flex w-full lg:w-1/2 items-center justify-center lg:order-last">
            <div
              className="relative w-full max-w-[280px] xs:max-w-xs sm:max-w-sm md:max-w-md xl:max-w-lg mx-auto lg:-ml-8 lg:mr-4 xl:mr-4 h-[220px] xs:h-[260px] sm:h-[320px] md:h-[380px] lg:h-[400px] xl:h-[450px] flex items-center justify-center lg:justify-end"
            >
                <SkinAnalysis
                  hydration={44}
                  pH={55}
                  sebum={40}
                  citrus={68}
                  floral={55}
                  musk={66}
                />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 