/**
 * Animation utilities for components
 */

import { useMotionValue, useTransform } from 'framer-motion';
import { useEffect, useState, useCallback } from 'react';

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

/**
 * Creates an animation configuration for highlighting items in a list sequentially
 * @param isClient - Whether client-side rendering is active
 * @param itemCount - The total number of items to cycle through
 * @param accentColor - The background color class for the highlighted item (default is indigo)
 * @param textColor - The text color class for the highlighted item (default is text-white)
 * @returns Animation configuration with current highlighted index and animation props
 */
export const createSequentialHighlight = (
  isClient: boolean,
  itemCount: number,
  accentColor: string = 'bg-indigo-900/30',
  textColor: string = 'text-white'
) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Function to pick a random item index
  const selectRandomIndex = useCallback(() => {
    if (itemCount <= 0) return null;
    
    // Pick a random index - we'll handle avoiding duplicates in the effect
    return Math.floor(Math.random() * itemCount);
  }, [itemCount]);

  // Animation interval effect
  useEffect(() => {
    if (!isClient) return;

    // Set initial random item
    let initialIndex = selectRandomIndex();
    setActiveIndex(initialIndex);

    // Set up interval to change highlighted item
    const intervalId = setInterval(() => {
      setActiveIndex(prevIndex => {
        // Avoid selecting the same index twice in a row
        let newIndex: number;
        do {
          newIndex = selectRandomIndex() as number;
        } while (newIndex === prevIndex && itemCount > 1);
        
        return newIndex;
      });
    }, 2000); // Change every 2 seconds

    return () => clearInterval(intervalId);
  }, [isClient, selectRandomIndex, itemCount]);

  // Animation configuration for highlighted item
  const highlightAnimation = {
    initial: { opacity: 0.5 },
    animate: { 
      opacity: 1,
      scale: [1, 1.05, 1],
    },
    transition: {
      duration: 1.8,
      ease: "easeInOut",
    }
  };

  return {
    activeIndex,
    highlightAnimation,
    getItemProps: (index: number) => ({
      className: `${index === activeIndex ? accentColor : 'bg-gray-800/30'} rounded-lg p-2 md:p-3 lg:p-4 flex flex-col justify-between transition-all duration-300`,
      ...(index === activeIndex ? highlightAnimation : {})
    }),
    getTextProps: (index: number) => ({
      className: `${index === activeIndex ? textColor : 'text-gray-400'} transition-colors duration-300`
    })
  };
};
