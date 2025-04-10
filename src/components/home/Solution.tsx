'use client';

import Badge from '@/components/ui/Badge';
import GradientBorder from '@/components/ui/GradientBorder';
import Container from '@/components/ui/layout/Container';
import Section from '@/components/ui/layout/Section';

// Props types
interface SolutionProps {}

// Perfume ingredients list component
const PerfumeIngredientsList = () => {
  // Sample perfume ingredients with their characteristics (reduced to 4)
  const ingredients = [
    { name: "Bergamot", description: "Fresh, uplifting top note" },
    { name: "Jasmine", description: "Rich, sweet middle note" },
    { name: "Sandalwood", description: "Warm, creamy base note" },
    { name: "Amber", description: "Warm, powdery base note" }
  ];

  return (
    <div>
      <div className="flex items-center mb-4 border-b border-gray-700/50 pb-2">
        <span className="mr-2 text-base">🌿</span>
        <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wide">
          Ingredient Compatibility
        </h3>
      </div>
      
      <div className="grid grid-cols-2 gap-3 mb-6">
        {ingredients.map((ingredient, index) => (
          <div key={index} className="bg-gray-800/50 rounded-lg p-3">
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm font-medium text-white">{ingredient.name}</span>
            </div>
            <p className="text-xs text-gray-400">{ingredient.description}</p>
          </div>
        ))}
      </div>
      
      <p className="text-sm text-gray-300 leading-relaxed">
        Our AI analyzes these raw ingredients to find the perfect match for your unique skin chemistry.
      </p>
    </div>
  );
};

// Skin parameters component
const SkinParametersList = () => {
  // Sample skin parameters with descriptions
  const parameters = [
    { name: "pH Level", importance: "Affects fragrance longevity" },
    { name: "Temperature", importance: "Influences evaporation rate" },
    { name: "Sebum", importance: "Impacts scent diffusion" },
    { name: "Moisture", importance: "Alters fragrance development" }
  ];

  return (
    <div>
      <div className="flex items-center mb-4 border-b border-gray-700/50 pb-2">
        <span className="mr-2 text-base">🧪</span>
        <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wide">
          Skin Parameters
        </h3>
      </div>
      
      <div className="grid grid-cols-2 gap-3 mb-6">
        {parameters.map((param, index) => (
          <div key={index} className="bg-gray-800/50 rounded-lg p-3">
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm font-medium text-white">{param.name}</span>
            </div>
            <p className="text-xs text-gray-400 italic">{param.importance}</p>
          </div>
        ))}
      </div>
      
      <p className="text-sm text-gray-300 leading-relaxed">
        We measure these key parameters to understand how your skin interacts with different fragrance molecules.
      </p>
    </div>
  );
};

// Main solution card component
const SolutionCard = ({}: SolutionProps) => {
  return (
    <div className="w-full max-w-full md:max-w-5xl bg-gray-900/50 backdrop-blur-md rounded-xl p-4 xs:p-5 sm:p-6 md:p-7 lg:p-8 xl:p-10 shadow-2xl border border-gray-800/60">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 xs:gap-7 sm:gap-8 lg:gap-10 xl:gap-12 relative">
        {/* Left side - Skin Parameters List */}
        <SkinParametersList />

        {/* Vertical divider for desktop */}
        <div className="hidden lg:block absolute inset-y-0 left-1/2 transform -translate-x-1/2">
          <div className="h-full w-px bg-gray-700/50"></div>
        </div>

        {/* Horizontal divider for mobile */}
        <hr className="border-gray-700/50 lg:hidden my-2 xs:my-3 sm:my-4" />
        
        {/* Right side - Perfume Ingredients List */}
        <PerfumeIngredientsList />
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
            <SolutionCard />
          </div>
        </div>
      </Container>
    </Section>
  );
}
