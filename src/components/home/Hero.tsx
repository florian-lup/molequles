'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import { FiArrowRight } from 'react-icons/fi';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  
  return (
    <div 
      id="hero"
      className="bg-gray-950 relative w-full overflow-hidden text-white py-0"
      aria-label="Hero section"
    >
      {/* Gradient borders */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-800/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-800/50 to-transparent"></div>
      </div>
      
      <div className="mx-auto max-w-7xl px-4 sm:px-5 md:px-6 lg:px-8">
        <div 
          ref={heroRef} 
          className="flex flex-col lg:flex-row min-h-[calc(100vh-5rem)] lg:min-h-screen lg:items-center"
        >
          {/* Content panel */}
          <div 
            className="w-full lg:w-1/2 relative z-10 flex items-center justify-center lg:justify-start pt-16 pb-16 md:py-24 lg:py-0 lg:pl-8"
          >
            <div className="w-full max-w-lg mx-auto lg:mx-0 text-center lg:text-left">
              <div className="mb-4 md:mb-6 flex justify-center lg:justify-start">
                <Badge withPulse color="primary">UNIQUE FORMULATION</Badge>
              </div>
              
              <h1 
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 leading-tight"
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-indigo-400 to-cyan-400">Scientifically</span>
                <br />
                Crafted Scents
              </h1>
              
              <p 
                className="text-lg md:text-xl text-gray-300 mb-6 md:mb-8 leading-relaxed mx-auto lg:mx-0 max-w-md"
              >
                Personalized fragrances engineered with AI technology to match your skin chemistry.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8 md:mb-0 justify-center lg:justify-start">
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
              className="relative w-full max-w-lg ml-auto mr-8 h-[450px] flex items-center justify-end"
            >
              <div 
                className="p-8 bg-black/30 backdrop-blur-xl rounded-xl border border-indigo-800/30 shadow-xl"
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