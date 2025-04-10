'use client';

import Badge from '@/components/ui/Badge';
import GradientBorder from '@/components/ui/GradientBorder';
import Container from '@/components/ui/layout/Container';
import Section from '@/components/ui/layout/Section';

// Props types
interface ScentCompatibilityProps {}

// Ingredient compatibility visualization
const IngredientCompatibilityDisplay = () => {
  return (
    <div>
      <div className="flex items-center mb-2 md:mb-3 border-b border-gray-700/50 pb-1 md:pb-1.5">
        <span className="mr-1.5 md:mr-2 text-sm md:text-base">🌸</span>
        <h3 className="text-xs md:text-sm font-semibold text-gray-300 uppercase tracking-wide">
          Ingredient Compatibility
        </h3>
      </div>
      
      <div className="space-y-3 xs:space-y-4 mb-4 xs:mb-5 sm:mb-6">
        <div className="bg-gray-800/50 rounded-lg p-2 xs:p-3 sm:p-4">
          <div className="flex justify-between items-center mb-1">
            <span className="text-sm text-gray-300">Floral</span>
            <span className="text-sm font-medium text-gray-200">76%</span>
          </div>
        </div>
        
        <div className="bg-gray-800/50 rounded-lg p-2 xs:p-3 sm:p-4">
          <div className="flex justify-between items-center mb-1">
            <span className="text-sm text-gray-300">Woody</span>
            <span className="text-sm font-medium text-gray-200">68%</span>
          </div>
        </div>
      </div>
      
      <p className="text-xs xs:text-sm sm:text-base text-gray-300 leading-relaxed">
        Based on your profile, our AI determines which fragrance families will work with your natural chemistry.
      </p>
    </div>
  );
};

// Skin analysis card component
const SkinAnalysisCard = ({}: ScentCompatibilityProps) => {
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
          
          <div className="grid grid-cols-2 gap-2 md:gap-3 mb-4 xs:mb-5 sm:mb-6">
            <div className="bg-emerald-900/30 rounded-lg p-3">
              <p className="text-emerald-400 text-sm font-medium">pH Level</p>
              <p className="text-white text-lg">58%</p>
            </div>
            <div className="bg-purple-900/30 rounded-lg p-3">
              <p className="text-purple-400 text-sm font-medium">Sebum</p>
              <p className="text-white text-lg">42%</p>
            </div>
            <div className="bg-red-900/30 rounded-lg p-3">
              <p className="text-red-400 text-sm font-medium">Temperature</p>
              <p className="text-white text-lg">65%</p>
            </div>
            <div className="bg-blue-900/30 rounded-lg p-3">
              <p className="text-blue-400 text-sm font-medium">Moisture</p>
              <p className="text-white text-lg">37%</p>
            </div>
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
        <IngredientCompatibilityDisplay />
      </div>
    </div>
  );
};

// Main solution section
export default function Solution() {
  return (
    <Section 
      id="solution" 
      ariaLabel="Solution section"
    >
      <GradientBorder />
      
      <Container>
        <div className="flex flex-col items-center py-12 xs:py-16 sm:py-20 md:py-24">
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
      </Container>
    </Section>
  );
}
