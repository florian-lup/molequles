import { FC } from 'react';
import { motion } from 'framer-motion';

interface BarProps {
  label: string;
  value: number;
  color: string;
  className?: string;
  isLast?: boolean;
}

interface SkinAnalysisProps {
  hydration: number;
  pH: number;
  sebum: number;
  citrus: number;
  floral: number;
  musk: number;
  className?: string;
}

const ProgressBar: FC<BarProps> = ({ label, value, color, className, isLast = false }) => {
  // Clamp value between 0 and 100
  const clampedValue = Math.max(0, Math.min(100, value));
  
  return (
    <div className={`flex items-center w-full ${isLast ? 'mb-0' : 'mb-4'} ${className || ''}`}>
      <div className="flex items-center w-full">
        <span className="font-sans text-sm text-white/90 w-[70px] flex-shrink-0 font-medium">{label}</span>
        <div className="relative w-full h-2 flex-grow ml-3 overflow-hidden rounded-md">
          {/* Background bar with gradient */}
          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-gray-800/70 to-gray-700/50" />
          
          {/* Main continuously animating bar */}
          <motion.div 
            className={`absolute inset-y-0 left-0 h-full ${color} rounded-md`}
            animate={{ 
              width: [
                `${clampedValue * 0.2}%`, 
                `${clampedValue}%`, 
                `${clampedValue * 0.5}%`,
                `${clampedValue * 0.8}%`,
                `${clampedValue * 0.4}%`,
                `${clampedValue * 0.6}%`
              ]
            }}
            transition={{ 
              duration: 8,
              times: [0, 0.3, 0.5, 0.7, 0.85, 1],
              repeat: Infinity, 
              ease: "easeInOut",
              repeatType: "loop"
            }}
          />
        </div>
      </div>
    </div>
  );
};

const SkinAnalysis: FC<SkinAnalysisProps> = ({ 
  hydration = 44, 
  pH = 55, 
  sebum = 40,
  citrus = 68,
  floral = 55,
  musk = 66,
  className = '' 
}) => {
  // Each section has same number of elements for perfect symmetry
  const sections = [
    {
      title: "Skin Chemistry",
      icon: "🧪",
      bars: [
        { label: "Hydration", value: hydration, color: "bg-blue-400" },
        { label: "pH Level", value: pH, color: "bg-emerald-400" },
        { label: "Sebum", value: sebum, color: "bg-orange-400" }
      ]
    },
    {
      title: "Scent Profile",
      icon: "🌸",
      bars: [
        { label: "Citrus", value: citrus, color: "bg-yellow-400" },
        { label: "Floral", value: floral, color: "bg-pink-400" },
        { label: "Musk", value: musk, color: "bg-purple-400" }
      ]
    }
  ];

  return (
    <div className={`w-full max-w-md bg-gray-900/40 backdrop-blur-sm rounded-xl p-4 shadow-xl border border-gray-800/50 ${className}`}>
      {sections.map((section, sectionIndex) => (
        <div key={section.title} className={sectionIndex > 0 ? 'mt-5' : ''}>
          {/* Section Title with icon */}
          <div className="flex items-center mb-3 border-b border-gray-700/50 pb-1.5">
            <span className="mr-2 text-base">{section.icon}</span>
            <h3 className="text-xs font-semibold text-gray-300 uppercase tracking-wide">{section.title}</h3>
          </div>

          {/* Bars */}
          <div className="space-y-0.5">
            {section.bars.map((bar, barIndex) => (
              <ProgressBar
                key={bar.label}
                label={bar.label}
                value={bar.value}
                color={bar.color}
                isLast={barIndex === section.bars.length - 1}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkinAnalysis; 