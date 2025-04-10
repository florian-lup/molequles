'use client';

// Import UI components and icons
import Button from '@/components/ui/Button';
import Container from '@/components/ui/layout/Container';
import GradientBorder from '@/components/ui/GradientBorder';
import Section from '@/components/ui/layout/Section';
import { FiArrowRight } from 'react-icons/fi';
import { useWaitlist } from '@/contexts/WaitlistContext';
import { HeroDecorations } from '@/components/ui/decorations/BackgroundCircles';
import { motion } from 'framer-motion';
import { useProgressBarAnimation } from '@/utils/animationUtils';

// Hero component - Main landing section showcasing the product
export default function Hero() {
  // Access the waitlist modal functionality
  const { openWaitlist } = useWaitlist();

  // Get animation props for each progress bar
  const citrusAnimation = useProgressBarAnimation({ value: 68, color: 'bg-yellow-400' });
  const floralAnimation = useProgressBarAnimation({ value: 55, color: 'bg-pink-400' });
  const muskAnimation = useProgressBarAnimation({ value: 66, color: 'bg-purple-400' });

  return (
    <Section id="hero" ariaLabel="Hero section">
      {/* Decorative elements */}
      <GradientBorder />
      <HeroDecorations />

      <Container>
        <div className="flex flex-col justify-center items-center lg:flex-row lg:justify-between min-h-screen">
          {/* Left panel - Marketing copy and CTA */}
          <div className="w-full md:max-w-xl lg:max-w-lg text-left mb-10 lg:mb-0">
            <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-2 md:mb-3 lg:mb-4 leading-tight text-white">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-indigo-400 to-cyan-400">
                Scientifically
              </span>{' '}
              <br className="hidden lg:block" />
              Crafted Scents
            </h1>
            <p className="text-lg md:text-2xl lg:text-2xl text-gray-300 mb-2 md:mb-3 lg:mb-4 leading-relaxed">
              Personalized fragrances engineered with AI technology for your skin chemistry.
            </p>

            {/* Call to action button */}
            <div>
              <Button
                variant="neon"
                size="md"
                shape="pill"
                icon={<FiArrowRight />}
                iconPosition="right"
                onClick={openWaitlist}
              >
                Join Waitlist
              </Button>
            </div>
          </div>

          {/* Right panel - Interactive visualization of product features */}
          <div className="w-full md:max-w-xl lg:max-w-sm bg-gray-900/40 backdrop-blur-sm rounded-xl p-3 md:p-4 lg:p-5 border border-gray-800/50">
            {/* Skin Chemistry metrics display */}
            <div className="mb-3 md:mb-4 lg:mb-5">
              <div className="flex items-center mb-2 md:mb-3 border-b border-gray-700/50 pb-1 md:pb-1.5">
                <span className="mr-1.5 md:mr-2 text-sm md:text-base">🧪</span>
                <h3 className="text-xs md:text-sm font-semibold text-gray-300 uppercase tracking-wide">
                  Skin Chemistry
                </h3>
              </div>
              {/* Skin metrics grid */}
              <div className="grid grid-cols-3 gap-2 md:gap-3">
                <div className="bg-blue-900/30 rounded-lg p-1.5 md:p-2 text-center">
                  <div className="text-base md:text-lg font-bold text-blue-400">44%</div>
                  <div className="text-xs md:text-sm text-gray-400">Hydration</div>
                </div>
                <div className="bg-emerald-900/30 rounded-lg p-1.5 md:p-2 text-center">
                  <div className="text-base md:text-lg font-bold text-emerald-400">55%</div>
                  <div className="text-xs md:text-sm text-gray-400">pH Level</div>
                </div>
                <div className="bg-purple-900/30 rounded-lg p-1.5 md:p-2 text-center">
                  <div className="text-base md:text-lg font-bold text-purple-400">40%</div>
                  <div className="text-xs md:text-sm text-gray-400">Sebum</div>
                </div>
              </div>
            </div>

            {/* Scent Profile visualization */}
            <div>
              <div className="flex items-center mb-2 md:mb-3 border-b border-gray-700/50 pb-1 md:pb-1.5">
                <span className="mr-1.5 md:mr-2 text-sm md:text-base">🌸</span>
                <h3 className="text-xs md:text-sm font-semibold text-gray-300 uppercase tracking-wide">
                  Scent Profile
                </h3>
              </div>
              {/* Scent preference bars */}
              <div className="space-y-0.5 md:space-y-1 lg:space-y-1.5">
                {/* Citrus progress bar */}
                <div className="flex items-center w-full mb-3 md:mb-4">
                  <span className="font-sans text-xs md:text-sm text-white/90 w-[60px] md:w-[70px] flex-shrink-0 font-medium">
                    Citrus
                  </span>
                  <div className="relative w-full h-1.5 md:h-2 flex-grow ml-2 md:ml-3 overflow-hidden rounded-md">
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-gray-800/70 to-gray-700/50" />
                    <motion.div 
                      className={citrusAnimation.className}
                      animate={citrusAnimation.animate}
                      transition={citrusAnimation.transition}
                    />
                  </div>
                </div>

                {/* Floral progress bar */}
                <div className="flex items-center w-full mb-3 md:mb-4">
                  <span className="font-sans text-xs md:text-sm text-white/90 w-[60px] md:w-[70px] flex-shrink-0 font-medium">
                    Floral
                  </span>
                  <div className="relative w-full h-1.5 md:h-2 flex-grow ml-2 md:ml-3 overflow-hidden rounded-md">
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-gray-800/70 to-gray-700/50" />
                    <motion.div 
                      className={floralAnimation.className}
                      animate={floralAnimation.animate}
                      transition={floralAnimation.transition}
                    />
                  </div>
                </div>

                {/* Musk progress bar */}
                <div className="flex items-center w-full">
                  <span className="font-sans text-xs md:text-sm text-white/90 w-[60px] md:w-[70px] flex-shrink-0 font-medium">
                    Musk
                  </span>
                  <div className="relative w-full h-1.5 md:h-2 flex-grow ml-2 md:ml-3 overflow-hidden rounded-md">
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-gray-800/70 to-gray-700/50" />
                    <motion.div 
                      className={muskAnimation.className}
                      animate={muskAnimation.animate}
                      transition={muskAnimation.transition}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
