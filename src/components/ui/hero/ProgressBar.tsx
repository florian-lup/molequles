import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { createBarAnimation } from '@/utils/animationUtils';

interface ProgressBarProps {
  label: string;
  value: number;
  barColorClass: string;
}

export default function ProgressBar({ 
  label, 
  value, 
  barColorClass 
}: ProgressBarProps) {
  const [isClient, setIsClient] = useState(false);

  // Enable animations only after client-side hydration
  useEffect(() => {
    setIsClient(true);
  }, []);

  const animation = createBarAnimation(isClient, value, barColorClass);

  return (
    <div className="flex items-center w-full">
      <span className="font-sans text-xs md:text-sm text-white/90 w-[60px] md:w-[70px] flex-shrink-0 font-medium">
        {label}
      </span>
      <div className="relative w-full h-1.5 md:h-2 flex-grow ml-2 md:ml-3 overflow-hidden rounded-md">
        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-gray-800/70 to-gray-700/50" />
        <motion.div
          className={animation.className}
          animate={animation.animate}
          transition={animation.transition}
        />
      </div>
    </div>
  );
} 