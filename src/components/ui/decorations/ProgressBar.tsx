'use client';

// Import Framer Motion for smooth animations
import { motion } from 'framer-motion';

// Props interface for the ProgressBar component
interface ProgressBarProps {
  label: string; // Text label for the progress bar
  value: number; // Progress value (0-100)
  color: string; // Tailwind color class for the bar
  isLast?: boolean; // Whether this is the last bar in a list
}

/**
 * A dynamic progress bar component with fluid animations
 * Features a gradient background and smooth value transitions
 */
export default function ProgressBar({ label, value, color, isLast = false }: ProgressBarProps) {
  // Ensure value stays within valid range (0-100)
  const clampedValue = Math.max(0, Math.min(100, value));

  return (
    <div className={`flex items-center w-full ${!isLast && 'mb-3 md:mb-4'}`}>
      {/* Label section */}
      <span className="font-sans text-xs md:text-sm text-white/90 w-[60px] md:w-[70px] flex-shrink-0 font-medium">
        {label}
      </span>

      {/* Progress bar container */}
      <div className="relative w-full h-1.5 md:h-2 flex-grow ml-2 md:ml-3 overflow-hidden rounded-md">
        {/* Background gradient layer */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-gray-800/70 to-gray-700/50" />

        {/* Animated progress indicator */}
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
