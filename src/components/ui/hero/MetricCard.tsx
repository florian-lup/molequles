import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { createPercentageAnimation } from '@/utils/animationUtils';

interface MetricCardProps {
  value: number;
  label: string;
  bgColorClass: string;
  textColorClass: string;
}

export default function MetricCard({ 
  value, 
  label, 
  bgColorClass, 
  textColorClass 
}: MetricCardProps) {
  const [isClient, setIsClient] = useState(false);

  // Enable animations only after client-side hydration
  useEffect(() => {
    setIsClient(true);
  }, []);

  const animation = createPercentageAnimation(isClient, value);

  return (
    <div className={`${bgColorClass} rounded-lg p-1.5 md:p-2 text-center`}>
      <motion.div
        animate={animation.animation.animate}
        transition={animation.animation.transition}
        onUpdate={(latest) => {
          if (typeof latest.number === 'number') {
            animation.count.set(latest.number);
          }
        }}
        className={`text-base md:text-lg font-bold ${textColorClass}`}
      >
        <motion.span>{animation.rounded}</motion.span>%
      </motion.div>
      <div className="text-xs md:text-sm text-gray-400">{label}</div>
    </div>
  );
} 