'use client';

import Badge from '@/components/ui/Badge';
import GradientBorder from '@/components/ui/GradientBorder';
import Container from '@/components/ui/layout/Container';
import Section from '@/components/ui/layout/Section';
import { createSequentialHighlight } from '@/utils/animationUtils';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi';

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
    { name: "Bergamot", description: "Fresh, uplifting top note", emoji: "🍊" },
    { name: "Jasmine", description: "Rich, sweet middle note", emoji: "🌸" },
    { name: "Sandalwood", description: "Warm, creamy base note", emoji: "🪵" },
    { name: "Amber", description: "Warm, powdery base note", emoji: "✨" }
  ];

  // Apply the sequential highlight animation
  const { getItemProps: getIngredientItemProps, getTextProps: getIngredientTextProps } = createSequentialHighlight(
    isClient,
    ingredients.length,
    'bg-rose-900/30',
    'text-rose-400'
  );

  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center mb-3 border-b border-gray-700/50 pb-1.5">
        <span className="mr-2 text-base md:text-lg">🌿</span>
        <h3 className="text-xs md:text-sm font-semibold text-gray-300 uppercase tracking-wide">
          Ingredient Compatibility
        </h3>
      </div>
      
      <div className="grid grid-cols-2 gap-2 md:gap-3 lg:gap-4 mb-3 md:mb-4 flex-grow">
        {ingredients.map((ingredient, index) => {
          const { className, ...animationProps } = getIngredientItemProps(index);
          const textClassName = `text-xs md:text-sm ${getIngredientTextProps(index).className}`;
          return (
            <motion.div 
              key={index}
              className={className}
              {...animationProps}
            >
              <span className="text-sm md:text-base font-medium text-white mb-1 md:mb-1.5">{ingredient.emoji} {ingredient.name}</span>
              <p className={textClassName}>{ingredient.description}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

// Skin characteristics component
const SkinCharacteristicsList = () => {
  // Check if we're on the client side
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Sample skin characteristics with descriptions
  const characteristics = [
    { name: "pH Level", description: "Affects longevity", emoji: "🔬" },
    { name: "Temperature", description: "Influences evaporation", emoji: "🌡️" },
    { name: "Sebum", description: "Impacts diffusion", emoji: "🫧" },
    { name: "Moisture", description: "Alters development", emoji: "💧" }
  ];

  // Apply the sequential highlight animation
  const { getItemProps: getSkinItemProps, getTextProps: getSkinTextProps } = createSequentialHighlight(
    isClient,
    characteristics.length,
    'bg-amber-900/30',
    'text-amber-400'
  );

  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center mb-3 border-b border-gray-700/50 pb-1.5">
        <span className="mr-2 text-base md:text-lg">🧪</span>
        <h3 className="text-xs md:text-sm font-semibold text-gray-300 uppercase tracking-wide">
          Skin Characteristics
        </h3>
      </div>
      
      <div className="grid grid-cols-2 gap-2 md:gap-3 lg:gap-4 mb-3 md:mb-4 flex-grow">
        {characteristics.map((characteristic, index) => {
          const { className, ...animationProps } = getSkinItemProps(index);
          const textClassName = `text-xs md:text-sm italic ${getSkinTextProps(index).className}`;
          return (
            <motion.div
              key={index}
              className={className}
              {...animationProps}
            >
              <span className="text-sm md:text-base font-medium text-white mb-1 md:mb-1.5">{characteristic.emoji} {characteristic.name}</span>
              <p className={textClassName}>{characteristic.description}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

// Main solution card component
const SolutionCard = () => (
  <div className="w-full p-5">
    {/* Use grid layout: 3 cols on lg, 1 col on mobile */}
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-6 lg:gap-10 items-center">
      {/* Column 1: Skin Characteristics List */}
      <div className="lg:order-1">
        <SkinCharacteristicsList />
      </div>

      {/* Column 2: Central Separator/Graphic (visible on lg screens) */}
      <div className="hidden lg:flex lg:order-2 justify-center items-center h-full">
        <HiArrowRight className="w-8 h-8 text-gray-600" />
      </div>

      {/* Column 3: Perfume Ingredients List */}
      <div className="lg:order-3">
        <PerfumeIngredientsList />
      </div>
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
      
      <Container className="flex flex-col justify-center items-center">
          {/* Header section - Centered with highlighted text */}
          <div className="text-center mb-10 md:mb-12">
            <div className="mb-3">
              <Badge>Our Approach</Badge>
            </div>
            <h3 className="text-sm md:text-lg lg:text-2xl text-white mb-2 leading-relaxed max-w-3xl mx-auto">
              We use <span className="font-medium">AI to analyze</span> your <span className="font-medium">unique skin characteristics</span> alongside various <span className="font-medium">fragrance molecules</span>, and determine which ingredients <span className="font-medium">best complement your chemistry</span>.
            </h3>
          </div>

          {/* Main content */}
          <SolutionCard />
      </Container>
    </Section>
  );
}
