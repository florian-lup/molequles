'use client';

import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { FiArrowRight } from 'react-icons/fi';

export default function CTA() {
  return (
    <div 
      id="cta" 
      className="bg-gray-950 relative w-full min-h-screen py-16 xs:py-20 sm:py-24 md:py-28 lg:py-32 overflow-hidden flex items-center justify-center"
      aria-label="Call to action section"
    >
      
      {/* Decorative elements */}
      <div className="absolute top-[15%] right-[10%] w-16 xs:w-20 sm:w-24 md:w-32 lg:w-40 h-16 xs:h-20 sm:h-24 md:h-32 lg:h-40 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/10 blur-2xl"></div>
      <div className="absolute bottom-[20%] left-[8%] w-16 xs:w-20 sm:w-28 md:w-36 lg:w-44 h-16 xs:h-20 sm:h-28 md:h-36 lg:h-44 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/10 blur-2xl"></div>
      <div className="absolute top-[60%] left-[40%] w-12 xs:w-16 sm:w-20 md:w-28 h-12 xs:h-16 sm:h-20 md:h-28 rounded-full bg-gradient-to-r from-indigo-500/15 to-purple-500/10 blur-xl"></div>
      
      {/* Decorative dots */}
      <div className="absolute top-1/4 right-1/3 w-1.5 xs:w-2 sm:w-3 h-1.5 xs:h-2 sm:h-3 rounded-full bg-pink-400/50 animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 left-1/4 w-1.5 xs:w-2 sm:w-3 h-1.5 xs:h-2 sm:h-3 rounded-full bg-indigo-400/50 animate-pulse"></div>
      <div className="absolute top-1/2 right-1/4 w-2 xs:w-3 sm:w-4 md:w-5 h-2 xs:h-3 sm:h-4 md:h-5 rounded-full bg-cyan-400/50 animate-pulse-slow"></div>
      
      <div className="mx-auto max-w-7xl w-full px-4 xs:px-5 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
          {/* Left panel - Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <div className="mb-3 sm:mb-4">
              <Badge>Exclusive Launch Access</Badge>
            </div>
            <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 xs:mb-4 sm:mb-5 md:mb-6 leading-tight text-white">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-indigo-400 to-cyan-400">
                Discover Your
              </span>
              <br />
              Signature Scent
            </h2>
            <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 mb-6 xs:mb-8 sm:mb-10 md:mb-12">
              Experience a perfume as unique as your DNA. Our AI-powered fragrance technology creates custom scents that evolve with your body chemistry.
            </p>
            <div className="flex justify-center lg:justify-start">
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

          {/* Right panel - Visual card */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="w-full max-w-md bg-gray-900/40 backdrop-blur-sm rounded-xl p-4 xs:p-5 sm:p-6 md:p-8 shadow-xl border border-gray-800/50">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-indigo-400 to-cyan-400">
                    Molequles
                  </h3>
                </div>
                <span className="text-xs px-2 py-1 rounded-full bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">BETA</span>
              </div>
              
              <hr className="border-gray-700/50 mb-6" />

              <div className="mb-8">
                <h4 className="text-xl font-semibold text-white mb-2">Your Custom Scent Formula</h4>
                <p className="text-sm text-gray-300 mb-8">Personalized just for you based on your profile</p>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-800/40 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-sm font-medium text-white/90">Citrus</span>
                      <span className="text-xs font-medium text-gray-400">35%</span>
                    </div>
                    <div className="w-full h-1.5 bg-gray-700/50 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-400 rounded-full" style={{ width: '35%' }}></div>
                    </div>
                  </div>
                  <div className="bg-gray-800/40 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-sm font-medium text-white/90">Floral</span>
                      <span className="text-xs font-medium text-gray-400">25%</span>
                    </div>
                    <div className="w-full h-1.5 bg-gray-700/50 rounded-full overflow-hidden">
                      <div className="h-full bg-pink-400 rounded-full" style={{ width: '25%' }}></div>
                    </div>
                  </div>
                  <div className="bg-gray-800/40 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-sm font-medium text-white/90">Woody</span>
                      <span className="text-xs font-medium text-gray-400">20%</span>
                    </div>
                    <div className="w-full h-1.5 bg-gray-700/50 rounded-full overflow-hidden">
                      <div className="h-full bg-amber-400 rounded-full" style={{ width: '20%' }}></div>
                    </div>
                  </div>
                  <div className="bg-gray-800/40 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-sm font-medium text-white/90">Spice</span>
                      <span className="text-xs font-medium text-gray-400">15%</span>
                    </div>
                    <div className="w-full h-1.5 bg-gray-700/50 rounded-full overflow-hidden">
                      <div className="h-full bg-red-400 rounded-full" style={{ width: '15%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div 
                className="w-full bg-gray-800/40 rounded-lg p-3 text-center pointer-events-none"
              >
                <span className="text-sm font-medium text-white">
                  Generate Your Formula
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
