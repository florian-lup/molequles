'use client';

import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

interface PercentageCardProps {
  value: number;
  label: string;
  bgColor?: string;
  textColor?: string;
  className?: string;
  min?: number;
  max?: number;
}

export default function PercentageCard({
  value,
  label,
  bgColor = 'bg-blue-900/30',
  textColor = 'text-blue-400',
  className = '',
  min,
  max,
}: PercentageCardProps) {
  const [isClient, setIsClient] = useState(false);

  // Client-side only animation to prevent hydration issues
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Set fluctuation range based on value
  const minValue = min !== undefined ? min : Math.max(0, Math.floor(value * 0.9));
  const maxValue = max !== undefined ? max : Math.ceil(value * 1.1);

  // Animation config
  const animation = {
    animate: isClient
      ? {
          number: [
            minValue,
            value,
            maxValue,
            value - Math.floor((value - minValue) * 0.5),
            value + Math.floor((maxValue - value) * 0.3),
            value,
          ],
        }
      : { number: value },
    transition: {
      duration: 15,
      times: [0, 0.2, 0.4, 0.6, 0.8, 1],
      repeat: Infinity,
      ease: 'easeInOut',
      repeatType: 'mirror' as const,
    },
  };

  // Motion value for animated number
  const count = useMotionValue(value);
  const rounded = useTransform(count, Math.round);

  // Update motion value when animation changes
  useEffect(() => {
    if (animation.animate.number && Array.isArray(animation.animate.number)) {
      count.set(animation.animate.number[0]);
    }
  }, [animation.animate.number, count]);

  return (
    <div className={`${bgColor} rounded-lg p-1.5 md:p-2 text-center ${className}`}>
      <motion.div
        animate={animation.animate}
        transition={animation.transition}
        onUpdate={(latest) => {
          if (typeof latest.number === 'number') {
            count.set(latest.number);
          }
        }}
        className={`text-base md:text-lg font-bold ${textColor}`}
      >
        <motion.span>{rounded}</motion.span>%
      </motion.div>
      <div className="text-xs md:text-sm text-gray-400">{label}</div>
    </div>
  );
}
