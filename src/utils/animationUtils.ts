/**
 * Animation utilities for components
 */

import { useMotionValue, useTransform } from 'framer-motion';
import { useEffect } from 'react';

/**
 * Creates animation configuration for progress bars
 * @param isClient - Whether client-side rendering is active
 * @param value - The percentage value (0-100)
 * @param color - CSS class for the color
 * @returns Animation configuration object
 */
export const createBarAnimation = (
  isClient: boolean,
  value: number,
  color: string = ''
) => {
  // Ensure value is between 0-100
  const clampedValue = Math.max(0, Math.min(100, value));

  return {
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
};

/**
 * Creates animation configuration for percentage cards
 * @param isClient - Whether client-side rendering is active
 * @param value - The percentage value
 * @param max - Optional maximum value for animation
 * @returns Animation configuration object and motion values
 */
export const createPercentageAnimation = (
  isClient: boolean,
  value: number,
  max?: number
) => {
  // Calculate value range
  const maxValue = max !== undefined ? max : Math.ceil(value * 1.1);
  
  // Create motion values
  const count = useMotionValue(value);
  const rounded = useTransform(count, Math.round);
  
  // Animation config
  const animation = {
    animate: isClient
      ? {
          number: [
            value,
            value * 0.8,
            maxValue,
            value * 0.9,
            value * 0.7,
            value * 0.85,
          ],
        }
      : { number: value },
    transition: {
      duration: 8,
      times: [0, 0.3, 0.5, 0.7, 0.85, 1],
      repeat: Infinity,
      ease: "easeInOut",
      repeatType: 'loop' as const,
    },
  };
  
  // Initialize motion value
  useEffect(() => {
    if (animation.animate.number && Array.isArray(animation.animate.number)) {
      count.set(animation.animate.number[0]);
    }
  }, [animation.animate.number, count]);
  
  return {
    animation,
    count,
    rounded
  };
};
