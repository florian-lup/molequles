'use client';

import Badge from '@/components/ui/Badge';
import GradientBorder from '@/components/ui/GradientBorder';
import { SolutionDecorations } from '@/components/ui/DecorativeElements';

// New Skin Analysis Card component
const SkinAnalysisCard = () => {
  const skinParameters = [
    { name: 'pH Level', value: 58, color: 'bg-emerald-900/30', icon: '⚖️' },
    { name: 'Sebum', value: 42, color: 'bg-purple-900/30', icon: '🫧' },
    { name: 'Temperature', value: 65, color: 'bg-red-900/30', icon: '🔥' },
    { name: 'Moisture', value: 37, color: 'bg-blue-900/30', icon: '💧' }
  ];

  const ingredientCompatibility = [
    { name: 'Floral', compatibility: 76, color: 'bg-pink-400' },
    { name: 'Woody', compatibility: 68, color: 'bg-amber-400' },
  ];

  return (
    <div className="w-full max-w-5xl bg-gray-900/50 backdrop-blur-md rounded-xl p-5 xs:p-6 sm:p-7 md:p-8 shadow-2xl border border-gray-800/60">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 relative">
        {/* Left side - Skin Parameters Section */}
        <div>
          <h4 className="text-xs xs:text-sm text-gray-400 mb-4">Your Skin Profile</h4>
          <div className="grid grid-cols-2 gap-4 mb-6">
            {skinParameters.map((param, index) => (
              <div key={index} className={`${param.color} rounded-lg p-3 flex items-center justify-center h-[65px]`}>
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-gray-700/50 flex items-center justify-center mr-2">
                    <span>{param.icon}</span>
                  </div>
                  <span className="text-sm font-medium text-white/90">{param.name}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs xs:text-sm sm:text-base text-gray-300">
            We analyze key parameters to understand how your skin will interact with different fragrance molecules.
          </p>
        </div>

        {/* Vertical divider for desktop */}
        <div className="hidden lg:block absolute inset-y-0 left-1/2 transform -translate-x-1/2">
          <div className="h-full w-px bg-gray-700/50"></div>
        </div>

        {/* Horizontal divider for mobile */}
        <hr className="border-gray-700/50 lg:hidden" />
        
        {/* Right side - Ingredient Compatibility Section */}
        <div>
          <h4 className="text-xs xs:text-sm text-gray-400 mb-4">Ingredient Compatibility</h4>
          <div className="space-y-4 mb-6">
            {ingredientCompatibility.map((item, index) => (
              <div key={index} className="bg-gray-800/50 rounded-lg p-3">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-gray-700/50 flex items-center justify-center mr-2">
                      <span>{item.name === 'Floral' ? '🌸' : '🌲'}</span>
                    </div>
                    <span className="text-sm font-medium text-white/90">{item.name}</span>
                  </div>
                  <span className="text-xs font-medium text-gray-400">{item.compatibility}%</span>
                </div>
                <div className="w-full h-2 bg-gray-700/50 rounded-full overflow-hidden">
                  <div className={`h-full ${item.color} rounded-full`} style={{ width: `${item.compatibility}%` }}></div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs xs:text-sm sm:text-base text-gray-300">
            Based on your profile, our AI determines which fragrance families will work with your natural chemistry.
          </p>
        </div>
      </div>
    </div>
  );
};

export default function Solution() {
  return (
    <div 
      id="solution" 
      className="bg-gray-950 relative w-full min-h-screen py-16 xs:py-20 sm:py-24 md:py-28 lg:py-32 overflow-hidden flex items-center justify-center"
      aria-label="Solution section"
    >
      <GradientBorder />
      <SolutionDecorations />
      
      <div className="mx-auto max-w-7xl w-full px-4 xs:px-5 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col items-center">
          {/* Header section */}
          <div className="text-center max-w-xs xs:max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16">
            <div className="mb-3 sm:mb-4">
              <Badge>Our Approach</Badge>
            </div>
            <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-xs xs:max-w-sm sm:max-w-xl md:max-w-2xl mx-auto">
              We use advanced AI to analyze your skin traits and identify perfume ingredients that complement your natural chemistry.
            </p>
          </div>

          {/* Main content - Single full-width panel */}
          <div className="w-full flex justify-center">
            <SkinAnalysisCard />
          </div>
        </div>
      </div>
    </div>
  );
}
