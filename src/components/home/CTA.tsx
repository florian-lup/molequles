'use client';

// Import UI components and utilities
import Button from '@/components/ui/Button';
import Container from '@/components/ui/layout/Container';
import Section from '@/components/ui/layout/Section';
import { FiArrowRight } from 'react-icons/fi';
import { useWaitlist } from '@/contexts/WaitlistContext';
import { motion } from 'framer-motion';
import { useProgressBarAnimation } from '@/utils/animationUtils';

/**
 * Call-to-Action section component featuring a waitlist signup
 */
export default function CTA() {
  const { openWaitlist } = useWaitlist();

  // Initialize animation properties for each scent component
  const citrusAnimation = useProgressBarAnimation({ value: 75, color: 'bg-blue-400' });
  const floralAnimation = useProgressBarAnimation({ value: 55, color: 'bg-pink-400' });
  const woodyAnimation = useProgressBarAnimation({ value: 65, color: 'bg-amber-400' });
  const spiceAnimation = useProgressBarAnimation({ value: 50, color: 'bg-red-400' });

  return (
    <Section id="cta" ariaLabel="Call to action section">
      
      <Container>
        <div className="flex flex-col justify-center items-center lg:flex-row lg:justify-between min-h-screen">
          {/* Left panel - Marketing content */}
          <div className="w-full md:max-w-xl lg:max-w-lg text-left mb-10 lg:mb-0">
            <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-2 md:mb-3 lg:mb-4 leading-tight text-white">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-indigo-400 to-cyan-400">
                Discover Your
              </span>{' '}
              <br className="hidden lg:block" />
              <span className="whitespace-nowrap">Signature Scent</span>
            </h2>
            <p className="text-lg md:text-2xl lg:text-2xl text-gray-300 mb-2 md:mb-3 lg:mb-4 leading-relaxed">
              Join the waitlist for early access to our personalized perfume technology.
            </p>
            {/* Waitlist signup button */}
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

          {/* Right panel - Interactive formula card */}
          <div className="w-full md:max-w-xl lg:max-w-sm">
            {/* Formula breakdown */}
            <div className="w-full bg-gray-900/40 backdrop-blur-sm rounded-xl p-3 md:p-4 lg:p-5 border border-gray-800/50">
              {/* Card header */}
              <div className="flex items-center justify-between mb-2 md:mb-3 border-b border-gray-700/50 pb-1 md:pb-1.5">
                <div className="flex items-center">
                  <h3 className="text-xs md:text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-indigo-400 to-cyan-400">
                    Molequles
                  </h3>
                </div>
                <span className="text-xs px-2 py-0.5 rounded-full bg-gray-800/50 text-gray-300 border border-gray-700/50">
                  BETA
                </span>
              </div>

              {/* Formula content */}
              <div className="mb-3 md:mb-4">
                <h4 className="text-sm md:text-base font-semibold text-white mb-1 md:mb-2">
                  Custom Scent Formula
                </h4>
                <p className="text-xs md:text-sm text-gray-300 mb-3 md:mb-4">
                  Personalized based on your profile
                </p>

                {/* Scent components grid */}
                <div className="grid grid-cols-2 gap-2 md:gap-3">
                  {/* Citrus component */}
                  <div className="bg-gray-800/50 rounded-lg p-1.5 md:p-2">
                    <div className="flex justify-between items-center mb-1 md:mb-1.5">
                      <span className="text-xs md:text-sm font-medium text-white/90">Citrus</span>
                    </div>
                    <div className="relative w-full h-1.5 md:h-2 bg-gray-700/50 rounded-md overflow-hidden">
                      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-gray-800/70 to-gray-700/50" />
                      <motion.div
                        className={citrusAnimation.className}
                        animate={citrusAnimation.animate}
                        transition={citrusAnimation.transition}
                      />
                    </div>
                  </div>

                  {/* Floral component */}
                  <div className="bg-gray-800/50 rounded-lg p-1.5 md:p-2">
                    <div className="flex justify-between items-center mb-1 md:mb-1.5">
                      <span className="text-xs md:text-sm font-medium text-white/90">Floral</span>
                    </div>
                    <div className="relative w-full h-1.5 md:h-2 bg-gray-700/50 rounded-md overflow-hidden">
                      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-gray-800/70 to-gray-700/50" />
                      <motion.div
                        className={floralAnimation.className}
                        animate={floralAnimation.animate}
                        transition={floralAnimation.transition}
                      />
                    </div>
                  </div>

                  {/* Woody component */}
                  <div className="bg-gray-800/50 rounded-lg p-1.5 md:p-2">
                    <div className="flex justify-between items-center mb-1 md:mb-1.5">
                      <span className="text-xs md:text-sm font-medium text-white/90">Woody</span>
                    </div>
                    <div className="relative w-full h-1.5 md:h-2 bg-gray-700/50 rounded-md overflow-hidden">
                      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-gray-800/70 to-gray-700/50" />
                      <motion.div
                        className={woodyAnimation.className}
                        animate={woodyAnimation.animate}
                        transition={woodyAnimation.transition}
                      />
                    </div>
                  </div>

                  {/* Spice component */}
                  <div className="bg-gray-800/50 rounded-lg p-1.5 md:p-2">
                    <div className="flex justify-between items-center mb-1 md:mb-1.5">
                      <span className="text-xs md:text-sm font-medium text-white/90">Spice</span>
                    </div>
                    <div className="relative w-full h-1.5 md:h-2 bg-gray-700/50 rounded-md overflow-hidden">
                      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-gray-800/70 to-gray-700/50" />
                      <motion.div
                        className={spiceAnimation.className}
                        animate={spiceAnimation.animate}
                        transition={spiceAnimation.transition}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Card footer */}
              <div className="w-full bg-gray-800/40 rounded-lg p-1.5 md:p-2 text-center pointer-events-none">
                <span className="text-xs md:text-sm font-medium text-white">Get Your Perfume</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
