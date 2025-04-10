'use client';

import Badge from '@/components/ui/Badge';
import GradientBorder from '@/components/ui/GradientBorder';
import { SolutionDecorations } from '@/components/ui/decorations/BackgroundCircles';
import { motion } from 'framer-motion';
import { useProgressBarAnimation } from '@/utils/animationUtils';

// Skin Analysis Card component with enhanced responsiveness
const SkinAnalysisCard = () => {
  const skinParameters = [
    { name: 'pH Level', value: 58, color: 'bg-emerald-900/30', textColor: 'text-emerald-400' },
    { name: 'Sebum', value: 42, color: 'bg-purple-900/30', textColor: 'text-purple-400' },
    { name: 'Temperature', value: 65, color: 'bg-red-900/30', textColor: 'text-red-400' },
    { name: 'Moisture', value: 37, color: 'bg-blue-900/30', textColor: 'text-blue-400' }
  ];


  // Get animation props for progress bars
  const floralAnimation = useProgressBarAnimation({ value: 76, color: 'bg-pink-400' });
  const woodyAnimation = useProgressBarAnimation({ value: 68, color: 'bg-amber-400' });

  return (
    <div className="w-full max-w-full md:max-w-5xl bg-gray-900/50 backdrop-blur-md rounded-xl p-4 xs:p-5 sm:p-6 md:p-7 lg:p-8 xl:p-10 shadow-2xl border border-gray-800/60">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 xs:gap-7 sm:gap-8 lg:gap-10 xl:gap-12 relative">
        {/* Left side - Skin Parameters Section */}
        <div>
          <div className="flex items-center mb-2 md:mb-3 border-b border-gray-700/50 pb-1 md:pb-1.5">
            <span className="mr-1.5 md:mr-2 text-sm md:text-base">🧪</span>
            <h3 className="text-xs md:text-sm font-semibold text-gray-300 uppercase tracking-wide">
              Skin Profile
            </h3>
          </div>
          
          {/* Percentage Cards */}
          <div className="grid grid-cols-2 gap-2 md:gap-3 mb-4 xs:mb-5 sm:mb-6">
            {skinParameters.map((param, index) => (
              <div key={index} className={`${param.color} rounded-lg p-1.5 md:p-2 text-center`}>
                <div className={`text-base md:text-lg font-bold ${param.textColor}`}>{param.value}%</div>
                <div className="text-xs md:text-sm text-gray-400">{param.name}</div>
              </div>
            ))}
          </div>
          
          <p className="text-xs xs:text-sm sm:text-base text-gray-300 leading-relaxed">
            Key skin parameters are analyzed to understand how your skin interacts with different fragrance molecules.
          </p>
        </div>

        {/* Vertical divider for desktop */}
        <div className="hidden lg:block absolute inset-y-0 left-1/2 transform -translate-x-1/2">
          <div className="h-full w-px bg-gray-700/50"></div>
        </div>

        {/* Horizontal divider for mobile */}
        <hr className="border-gray-700/50 lg:hidden my-2 xs:my-3 sm:my-4" />
        
        {/* Right side - Ingredient Compatibility Section */}
        <div>
          <div className="flex items-center mb-2 md:mb-3 border-b border-gray-700/50 pb-1 md:pb-1.5">
            <span className="mr-1.5 md:mr-2 text-sm md:text-base">🌸</span>
            <h3 className="text-xs md:text-sm font-semibold text-gray-300 uppercase tracking-wide">
              Ingredient Compatibility
            </h3>
          </div>
          
          <div className="space-y-3 xs:space-y-4 mb-4 xs:mb-5 sm:mb-6">
            {/* Floral compatibility */}
            <div className="bg-gray-800/50 rounded-lg p-2 xs:p-3 sm:p-4">
              <div className="flex justify-between items-center mb-1.5 xs:mb-2">
                <div className="flex items-center">
                  <div className="w-5 h-5 xs:w-6 xs:h-6 rounded-full bg-gray-700/50 flex items-center justify-center mr-1.5 xs:mr-2">
                    <span>🌸</span>
                  </div>
                  <span className="text-xs xs:text-sm font-medium text-white/90">Floral</span>
                </div>
                <span className="text-xs xs:text-sm font-medium text-pink-400">76%</span>
              </div>
              <div className="relative w-full h-1.5 xs:h-2 bg-gray-700/50 rounded-md overflow-hidden">
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-gray-800/70 to-gray-700/50" />
                <motion.div 
                  className={floralAnimation.className}
                  animate={floralAnimation.animate}
                  transition={floralAnimation.transition}
                />
              </div>
            </div>

            {/* Woody compatibility */}
            <div className="bg-gray-800/50 rounded-lg p-2 xs:p-3 sm:p-4">
              <div className="flex justify-between items-center mb-1.5 xs:mb-2">
                <div className="flex items-center">
                  <div className="w-5 h-5 xs:w-6 xs:h-6 rounded-full bg-gray-700/50 flex items-center justify-center mr-1.5 xs:mr-2">
                    <span>🌲</span>
                  </div>
                  <span className="text-xs xs:text-sm font-medium text-white/90">Woody</span>
                </div>
                <span className="text-xs xs:text-sm font-medium text-amber-400">68%</span>
              </div>
              <div className="relative w-full h-1.5 xs:h-2 bg-gray-700/50 rounded-md overflow-hidden">
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-gray-800/70 to-gray-700/50" />
                <motion.div 
                  className={woodyAnimation.className}
                  animate={woodyAnimation.animate}
                  transition={woodyAnimation.transition}
                />
              </div>
            </div>
          </div>
          <p className="text-xs xs:text-sm sm:text-base text-gray-300 leading-relaxed">
            Based on your profile, our AI determines which fragrance families will work with your natural chemistry.
          </p>
        </div>
      </div>
    </div>
  );
};

export default function Solution() {
  return (
    <section 
      id="solution" 
      className="bg-gray-950 relative w-full min-h-[550px] flex items-center justify-center overflow-hidden py-12 xs:py-16 sm:py-20 md:py-24"
      aria-label="Solution section"
    >
      <GradientBorder />
      <SolutionDecorations />
      
      <div className="mx-auto w-full max-w-[90%] xs:max-w-[92%] sm:max-w-[94%] md:max-w-[96%] lg:max-w-7xl relative">
        <div className="flex flex-col items-center">
          {/* Header section */}
          <div className="text-left w-full max-w-full md:max-w-5xl mx-auto mb-8 xs:mb-10 sm:mb-12 md:mb-14 lg:mb-16">
            <div className="mb-3 xs:mb-4 sm:mb-5">
              <Badge>Our Approach</Badge>
            </div>
            <h3 className="text-base xs:text-lg sm:text-xl md:text-2xl text-white mb-2 xs:mb-3 leading-relaxed">
              We use advanced AI to analyze your skin traits and identify perfume ingredients that complement your natural chemistry.
            </h3>
          </div>

          {/* Main content */}
          <div className="w-full flex justify-center">
            <SkinAnalysisCard />
          </div>
        </div>
      </div>
    </section>
  );
}
