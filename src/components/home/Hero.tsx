'use client';

import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import GradientBorder from '@/components/ui/GradientBorder';
import Section from '@/components/ui/Section';
import { FiArrowRight } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { useWaitlist } from '@/contexts/WaitlistContext';
import { HeroDecorations } from '@/components/ui/DecorativeElements';

interface BarProps {
  label: string;
  value: number;
  color: string;
  isLast?: boolean;
}

const ProgressBar: React.FC<BarProps> = ({ label, value, color, isLast = false }) => {
  // Clamp value between 0 and 100
  const clampedValue = Math.max(0, Math.min(100, value));

  return (
    <div className={`flex items-center w-full ${!isLast && 'mb-4'}`}>
      <span className="font-sans text-sm text-white/90 w-[70px] flex-shrink-0 font-medium">
        {label}
      </span>
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
              `${clampedValue * 0.6}%`,
            ],
          }}
          transition={{
            duration: 8,
            times: [0, 0.3, 0.5, 0.7, 0.85, 1],
            repeat: Infinity,
            ease: 'easeInOut',
            repeatType: 'loop',
          }}
        />
      </div>
    </div>
  );
};

export default function Hero() {
  const { openWaitlist } = useWaitlist();

  return (
    <Section
      id="hero"
      ariaLabel="Hero section"
    >
      <GradientBorder />
      <HeroDecorations />

      <Container>
        <div className="flex flex-col lg:flex-row justify-center lg:justify-between h-full items-center">
          {/* Left panel */}
          <div className="w-full sm:max-w-sm md:max-w-md lg:max-w-lg text-left mb-10 lg:mb-0">
            <h1 className="text-2xl sm:text-5xl lg:text-6xl font-bold mb-3 lg:mb-5 leading-tight text-white">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-indigo-400 to-cyan-400">
                Scientifically
              </span>{' '}
              <br className="hidden md:block" />
              Crafted Scents
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-3 lg:mb-5 leading-relaxed">
              Personalized fragrances engineered with AI technology for your skin chemistry.
            </p>

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

          {/* Right panel */}
          <div className="w-full sm:max-w-sm md:max-w-md lg:max-w-lg bg-gray-900/40 backdrop-blur-sm rounded-xl p-4 border border-gray-800/50">
            {/* Skin Chemistry Section */}
            <div className="mb-5">
              <div className="flex items-center mb-3 border-b border-gray-700/50 pb-1.5">
                <span className="mr-2 text-base">🧪</span>
                <h3 className="text-xs font-semibold text-gray-300 uppercase tracking-wide">
                  Skin Chemistry
                </h3>
              </div>
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-blue-900/30 rounded-lg p-2 text-center">
                  <div className="text-xl font-bold text-blue-400">44%</div>
                  <div className="text-xs text-gray-400">Hydration</div>
                </div>
                <div className="bg-emerald-900/30 rounded-lg p-2 text-center">
                  <div className="text-xl font-bold text-emerald-400">55%</div>
                  <div className="text-xs text-gray-400">pH Level</div>
                </div>
                <div className="bg-purple-900/30 rounded-lg p-2 text-center">
                  <div className="text-xl font-bold text-purple-400">40%</div>
                  <div className="text-xs text-gray-400">Sebum</div>
                </div>
              </div>
            </div>

            {/* Scent Profile Section */}
            <div>
              <div className="flex items-center mb-3 border-b border-gray-700/50 pb-1.5">
                <span className="mr-2 text-base">🌸</span>
                <h3 className="text-xs font-semibold text-gray-300 uppercase tracking-wide">
                  Scent Profile
                </h3>
              </div>
              <div className="space-y-0.5">
                <ProgressBar label="Citrus" value={68} color="bg-yellow-400" />
                <ProgressBar label="Floral" value={55} color="bg-pink-400" />
                <ProgressBar label="Musk" value={66} color="bg-purple-400" isLast />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
