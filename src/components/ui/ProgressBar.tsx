'use client';

import { motion } from 'framer-motion';

interface ProgressBarProps {
  label: string;
  value: number;
  color: string;
  isLast?: boolean;
}

export default function ProgressBar({ label, value, color, isLast = false }: ProgressBarProps) {
  // Clamp value between 0 and 100
  const clampedValue = Math.max(0, Math.min(100, value));

  return (
    <div className={`flex items-center w-full ${!isLast && 'mb-3 md:mb-4'}`}>
      <span className="font-sans text-xs md:text-sm text-white/90 w-[60px] md:w-[70px] flex-shrink-0 font-medium">
        {label}
      </span>
      <div className="relative w-full h-1.5 md:h-2 flex-grow ml-2 md:ml-3 overflow-hidden rounded-md">
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
} 