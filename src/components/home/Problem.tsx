'use client';

import { FiClock, FiAlertTriangle, FiSearch } from 'react-icons/fi';
import Badge from '@/components/ui/Badge';
import GradientBorder from '@/components/ui/GradientBorder';
import { motion } from 'framer-motion';
import { FC } from 'react';

interface FrustrationCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  severity: number;
  index: number;
}

const FrustrationCard: FC<FrustrationCardProps> = ({ icon, title, description, severity, index }) => {
  // Clamp severity between 0 and 100
  const clampedSeverity = Math.max(0, Math.min(100, severity));
  
  // Generate a unique color for each card
  const colors = [
    "from-pink-500/20 to-purple-500/20 text-pink-400", 
    "from-indigo-500/20 to-blue-500/20 text-indigo-400",
    "from-cyan-500/20 to-teal-500/20 text-cyan-400"
  ];
  
  const barColors = [
    "bg-pink-400",
    "bg-indigo-400",
    "bg-cyan-400"
  ];
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      className="bg-gray-900/40 backdrop-blur-sm rounded-xl p-6 border border-gray-800/50 hover:border-gray-700/70 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10"
    >
      <div className={`rounded-full w-12 h-12 flex items-center justify-center bg-gradient-to-br ${colors[index % colors.length]} mb-5`}>
        {icon}
      </div>
      
      <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>
      <p className="text-gray-400 leading-relaxed mb-4">{description}</p>
      
      {/* Severity indicator */}
      <div className="pt-2 border-t border-gray-800/50">
        <div className="flex items-center w-full">
          <span className="font-sans text-xs text-white/70 font-medium mr-3">Impact
          </span>
          <div className="relative w-full h-2 flex-grow overflow-hidden rounded-md">
            {/* Background bar with gradient */}
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-gray-800/70 to-gray-700/50" />
            
            {/* Animated bar */}
            <motion.div 
              className={`absolute inset-y-0 left-0 h-full ${barColors[index % barColors.length]} rounded-md`}
              animate={{ 
                width: [
                  `${clampedSeverity * 0.7}%`, 
                  `${clampedSeverity}%`, 
                  `${clampedSeverity * 0.8}%`,
                  `${clampedSeverity * 0.9}%`,
                ]
              }}
              transition={{ 
                duration: 4,
                times: [0, 0.4, 0.7, 1],
                repeat: Infinity, 
                ease: "easeInOut",
                repeatType: "loop"
              }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function Problem() {
  const frustrations = [
    {
      title: "Poor Performance",
      description: "Fragrances that fade quickly or change character throughout the day.",
      icon: <FiClock className="w-5 h-5" />,
      severity: 75
    },
    {
      title: "Allergic Reactions",
      description: "Irritation and sensitivities from ingredients that don't work with your unique skin chemistry.",
      icon: <FiAlertTriangle className="w-5 h-5" />,
      severity: 85
    },
    {
      title: "Endless Trial & Error",
      description: "Wasted time and money testing countless fragrances trying to find \"the one\".",
      icon: <FiSearch className="w-5 h-5" />,
      severity: 80
    }
  ];

  return (
    <div 
      id="problem" 
      className="bg-gray-950 relative w-full overflow-hidden text-white py-12 sm:py-16 md:py-20"
      aria-label="Problem section"
    >
      <GradientBorder />
      
      {/* Decorative elements */}
      <div className="absolute top-24 left-12 w-32 h-32 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/10 blur-2xl"></div>
      <div className="absolute bottom-24 right-12 w-40 h-40 rounded-full bg-gradient-to-r from-indigo-500/20 to-blue-500/10 blur-2xl"></div>
      
      {/* Animated dots */}
      <div className="absolute top-1/4 right-1/4 w-4 h-4 rounded-full bg-indigo-400/50 animate-pulse"></div>
      <div className="absolute bottom-1/3 left-1/3 w-3 h-3 rounded-full bg-pink-400/50 animate-pulse-slow"></div>
      <div className="absolute top-1/2 right-1/2 w-5 h-5 rounded-full bg-purple-400/50 animate-pulse"></div>
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="mb-4">
              <Badge color="primary">The Challenge</Badge>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-indigo-400 to-cyan-400">
                The Problem with
              </span>
              <br />
              Traditional Fragrance
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
              Traditional one-size-fits-all perfumes are mass-produced with standardized formulas, leading to unpredictable results.
            </p>
          </div>

          <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {frustrations.map((item, index) => (
                <FrustrationCard
                  key={index}
                  index={index}
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                  severity={item.severity}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 