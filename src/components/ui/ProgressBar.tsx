'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface ProgressBarProps {
  value: number;
  label: string;
  color?: string;
  className?: string;
  labelClassName?: string;
}

export default function ProgressBar({
  value,
  label,
  color = 'bg-blue-400',
  className = '',
  labelClassName = 'font-sans text-xs md:text-sm text-white/90 w-[60px] md:w-[70px] flex-shrink-0 font-medium',
}: ProgressBarProps) {
  const [isClient, setIsClient] = useState(false);

  // Client-side only animation to prevent hydration issues
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Clamp value between 0-100
  const clampedValue = Math.max(0, Math.min(100, value));

  // Animation config
  const animation = {
    className: `absolute inset-y-0 left-0 h-full ${color} rounded-md`,
    animate: isClient
      ? {
          width: [
            `${clampedValue * 0.2}%`,
            `${clampedValue}%`,
            `${clampedValue * 0.5}%`,
            `${clampedValue * 0.8}%`,
            `${clampedValue * 0.4}%`,
            `${clampedValue * 0.6}%`,
          ],
        }
      : { width: 0 },
    transition: {
      duration: 8,
      times: [0, 0.3, 0.5, 0.7, 0.85, 1],
      repeat: Infinity,
      ease: 'easeInOut',
      repeatType: 'loop' as const,
    },
  };

  return (
    <div className={`flex items-center w-full mb-3 md:mb-4 ${className}`}>
      <span className={labelClassName}>{label}</span>
      <div className="relative w-full h-1.5 md:h-2 flex-grow ml-2 md:ml-3 overflow-hidden rounded-md">
        {/* Background */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-gray-800/70 to-gray-700/50" />
        {/* Animated foreground */}
        <motion.div
          className={animation.className}
          animate={animation.animate}
          transition={animation.transition}
        />
      </div>
    </div>
  );
}
