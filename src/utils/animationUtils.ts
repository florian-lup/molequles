/**
 * Animation utilities for components
 */

import { useMotionValue, useTransform } from 'framer-motion';
import { useEffect } from 'react';

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

/**
 * Creates an animation for fluid/filling level that continuously rises and falls
 * @param minPercentage - The minimum fill percentage (0-100)
 * @param maxPercentage - The maximum fill percentage (0-100)
 * @param duration - Animation duration in seconds for one cycle (min to max and back to min)
 * @returns Animation configuration object with animate and transition properties
 */
export const createFlowAnimation = (
  minPercentage: number,
  maxPercentage: number,
  duration: number = 8 // Default duration for a full cycle
) => {
  // Clamp values to be within 0-100
  const clampedMin = Math.max(0, Math.min(100, minPercentage));
  const clampedMax = Math.max(0, Math.min(100, maxPercentage));

  // Ensure min is less than max
  const actualMin = Math.min(clampedMin, clampedMax);
  const actualMax = Math.max(clampedMin, clampedMax);

  // Create the animation configuration for a smooth min -> max -> min oscillation
  return {
    animate: {
      width: [
        `${actualMin}%`,
        `${actualMax}%`,
        `${actualMin}%`,
      ],
    },
    transition: {
      duration,
      times: [0, 0.5, 1], // Min at 0%, Max at 50%, Min again at 100% of duration
      repeat: Infinity,
      repeatType: 'loop' as const,
      ease: "easeInOut",
    },
  };
};
