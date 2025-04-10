import { useEffect, useState } from 'react';

interface ProgressBarAnimationProps {
  value: number;
  color: string;
}

/**
 * Custom hook for animating progress bars with pulsing effect
 * @param {Object} props - Animation properties
 * @param {number} props.value - Percentage value (0-100)
 * @param {string} props.color - CSS class for the bar color (e.g., 'bg-blue-400')
 * @returns {Object} Animation properties for framer-motion
 */
export function useProgressBarAnimation({ value, color }: ProgressBarAnimationProps) {
  const [isClient, setIsClient] = useState(false);
  
  // Ensure the animation only runs on the client side to avoid hydration issues
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  // Ensure value stays within valid range (0-100)
  const clampedValue = Math.max(0, Math.min(100, value));
  
  return {
    className: `absolute inset-y-0 left-0 h-full ${color} rounded-md`,
    animate: isClient ? {
      width: [
        `${clampedValue * 0.2}%`,
        `${clampedValue}%`,
        `${clampedValue * 0.5}%`,
        `${clampedValue * 0.8}%`,
        `${clampedValue * 0.4}%`,
        `${clampedValue * 0.6}%`,
      ],
    } : { width: 0 },
    transition: {
      duration: 8,
      times: [0, 0.3, 0.5, 0.7, 0.85, 1],
      repeat: Infinity,
      ease: 'easeInOut',
      repeatType: 'loop' as const,
    }
  };
}