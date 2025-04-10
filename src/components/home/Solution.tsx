'use client';

import Badge from '@/components/ui/Badge';
import GradientBorder from '@/components/ui/GradientBorder';
import Container from '@/components/ui/layout/Container';
import Section from '@/components/ui/layout/Section';
import { createSequentialHighlight } from '@/utils/animationUtils';
import { useEffect, useState } from 'react';

// Props types
// Empty interface removed

// Perfume ingredients list component
const PerfumeIngredientsList = () => {
  // Check if we're on the client side
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Sample perfume ingredients with their characteristics (reduced to 4)
  const ingredients = [
    { name: "Bergamot", description: "Fresh, uplifting top note" },
    { name: "Jasmine", description: "Rich, sweet middle note" },
    { name: "Sandalwood", description: "Warm, creamy base note" },
    { name: "Amber", description: "Warm, powdery base note" }
  ];

  // Apply the sequential highlight animation
  const { getItemProps } = createSequentialHighlight(
    isClient,
    ingredients.length,
    'bg-rose-900/30'
  );

  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center mb-3 border-b border-gray-700/50 pb-1.5">
        <span className="mr-2 text-base md:text-lg">🌿</span>
        <h3 className="text-sm md:text-base font-semibold text-gray-300 uppercase tracking-wide">
          Ingredient Compatibility
        </h3>
      </div>
      
      <div className="grid grid-cols-2 gap-2 md:gap-3 lg:gap-4 mb-3 md:mb-4 flex-grow">
        {ingredients.map((ingredient, index) => (
          <div 
            key={index} 
            {...getItemProps(index)}
          >
            <span className="text-sm md:text-base font-medium text-white mb-1 md:mb-1.5">{ingredient.name}</span>
            <p className="text-xs md:text-sm text-gray-400">{ingredient.description}</p>
          </div>
        ))}
      </div>
      
      <p className="text-sm md:text-base text-gray-300 leading-relaxed mt-auto">
        Our AI determines which fragrance families will work with your natural chemistry.
      </p>
    </div>
  );
};

// Skin parameters component
const SkinParametersList = () => {
  // Check if we're on the client side
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Sample skin parameters with descriptions
  const parameters = [
    { name: "pH Level", importance: "Affects longevity" },
    { name: "Temperature", importance: "Influences evaporation" },
    { name: "Sebum", importance: "Impacts diffusion" },
    { name: "Moisture", importance: "Alters development" }
  ];

  // Apply the sequential highlight animation
  const { getItemProps } = createSequentialHighlight(
    isClient,
    parameters.length,
    'bg-violet-900/30'
  );

  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center mb-3 border-b border-gray-700/50 pb-1.5">
        <span className="mr-2 text-base md:text-lg">🧪</span>
        <h3 className="text-sm md:text-base font-semibold text-gray-300 uppercase tracking-wide">
          Skin Parameters
        </h3>
      </div>
      
      <div className="grid grid-cols-2 gap-2 md:gap-3 lg:gap-4 mb-3 md:mb-4 flex-grow">
        {parameters.map((param, index) => (
          <div
            key={index}
            {...getItemProps(index)}
          >
            <span className="text-sm md:text-base font-medium text-white mb-1 md:mb-1.5">{param.name}</span>
            <p className="text-xs md:text-sm text-gray-400 italic">{param.importance}</p>
          </div>
        ))}
      </div>
      
      <p className="text-sm md:text-base text-gray-300 leading-relaxed mt-auto">
        Key parameters are analyzed to understand how your skin interacts with different fragrance molecules.
      </p>
    </div>
  );
};

// Main solution card component
const SolutionCard = () => (
  <div className="w-full bg-gray-900/50 backdrop-blur-md rounded-xl p-5 border border-gray-800/60">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 relative">
      {/* Left side - Skin Parameters List */}
      <SkinParametersList />

      {/* Vertical divider for desktop */}
      <div className="hidden lg:block absolute inset-y-0 left-1/2 transform -translate-x-1/2">
        <div className="h-full w-px bg-gray-700/50"></div>
      </div>

      {/* Horizontal divider for mobile */}
      <hr className="border-gray-700/50 lg:hidden my-2" />
      
      {/* Right side - Perfume Ingredients List */}
      <PerfumeIngredientsList />
    </div>
  </div>
);

// Main solution section
export default function Solution() {
  return (
    <Section 
      id="solution" 
      ariaLabel="Solution section"
    >
      <GradientBorder />
      
      <Container>
        <div className="flex flex-col justify-center items-center min-h-screen">
          {/* Header section */}
          <div className="text-left w-full mb-8">
            <div className="mb-3">
              <Badge>Our Approach</Badge>
            </div>
            <h3 className="text-base md:text-2xl lg:text-3xl text-white mb-2 leading-relaxed">
              We use advanced AI to analyze your skin traits and identify perfume ingredients that complement your natural chemistry.
            </h3>
          </div>

          {/* Main content */}
            <SolutionCard />
        </div>
      </Container>
    </Section>
  );
}
