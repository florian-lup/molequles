'use client';

import { useClientSide, useWaitlist } from '@/hooks';
import Button from '@/components/ui/Button';
import { TbLeaf } from 'react-icons/tb';
import { IngredientData } from '@/types/home';

// Sample ingredient data with styling configurations
const ingredientsData: IngredientData[] = [
  {
    name: 'Bergamot',
    percentage: 35,
    bgGradient: 'from-cyan-900/20 to-blue-900/20',
    borderColor: 'border-cyan-900/30',
    iconBg: 'bg-cyan-500/20',
    iconColor: 'text-cyan-400',
    textColor: 'text-cyan-400',
    barGradient: 'from-cyan-500 to-cyan-400',
  },
  {
    name: 'Neroli',
    percentage: 28,
    bgGradient: 'from-blue-900/20 to-indigo-900/20',
    borderColor: 'border-blue-900/30',
    iconBg: 'bg-blue-500/20',
    iconColor: 'text-blue-400',
    textColor: 'text-blue-400',
    barGradient: 'from-blue-500 to-blue-400',
  },
  {
    name: 'Amber',
    percentage: 22,
    bgGradient: 'from-indigo-900/20 to-purple-900/20',
    borderColor: 'border-indigo-900/30',
    iconBg: 'bg-indigo-500/20',
    iconColor: 'text-indigo-400',
    textColor: 'text-indigo-400',
    barGradient: 'from-indigo-500 to-indigo-400',
  },
  {
    name: 'Sandalwood',
    percentage: 15,
    bgGradient: 'from-purple-900/20 to-blue-900/20',
    borderColor: 'border-purple-900/30',
    iconBg: 'bg-purple-500/20',
    iconColor: 'text-purple-400',
    textColor: 'text-purple-400',
    barGradient: 'from-purple-500 to-purple-400',
  },
];

// Component to display ingredient sections with percentage visualizations
const IngredientsSection = () => {
  return (
    <div>
      {/* Section header */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-3 border-b border-cyan-900/50 pb-2">
          <h3 className="text-sm md:text-base font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 tracking-wide">
            Personalized Scent Formula
          </h3>
          <span className="px-2 py-0.5 bg-indigo-900/30 rounded-md text-xs font-medium text-indigo-400">
          KEY INGREDIENTS
        </span>
        </div>
      </div>
      
      {/* Two-column grid of ingredient cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {ingredientsData.map((ingredient, idx) => (
          <div key={idx} className={`overflow-hidden rounded-xl shadow-xl bg-gradient-to-b from-gray-900 to-gray-950 p-3 border ${ingredient.borderColor}`}>
            <div className="flex items-start gap-3">
              {/* Ingredient icon */}
              <div className={`${ingredient.iconBg} rounded-full p-2 mt-1`}>
                <TbLeaf size={18} className={ingredient.iconColor} />
              </div>
              {/* Ingredient name and percentage bar */}
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <div className={`text-sm ${ingredient.textColor} font-semibold`}>{ingredient.name}</div>
                  <div className={`text-xs ${ingredient.textColor}`}>{ingredient.percentage}%</div>
                </div>
                {/* Percentage visualization bar */}
                <div className="w-full bg-gray-800/50 h-2 rounded-full mt-1.5 overflow-hidden">
                  <div className={`bg-gradient-to-r ${ingredient.barGradient} h-full rounded-full`} style={{ width: `${ingredient.percentage}%` }}></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Card displaying personalized ingredient profile
function IngredientProfile() {

  return (
    <div className="w-full overflow-hidden rounded-xl shadow-xl bg-gradient-to-b from-gray-900 to-gray-950 p-5 border border-cyan-900/50">
      <IngredientsSection />
    </div>
  );
}

// Panel containing call-to-action message and waitlist button
const CTAMessagePanel = () => {
  const { openWaitlist } = useWaitlist();
  
  return (
    <div className="w-full lg:max-w-lg text-left mb-8 lg:mb-0">
      {/* Two-part gradient headline with responsive line break */}
      <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-4 leading-tight">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500">
          Discover Your
        </span>{' '}
        <br className="hidden sm:block" />
        <span className="text-gray-100">Signature Scent</span>
      </h2>
      
      {/* CTA description with highlighting border */}
      <p className="text-base md:text-lg lg:text-xl text-gray-300 mb-6 leading-relaxed font-light border-l-2 border-cyan-500 pl-3 md:pl-4">
        Join the waitlist for early access to our personalized perfume technology.
      </p>

      {/* Waitlist button with promotional text */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-0">
        <Button 
          onClick={openWaitlist}
          size="md"
          rightIcon
        >
          Join Waitlist
        </Button>
        <span className="text-xs text-cyan-600 text-center sm:text-left sm:ml-3 mt-2 sm:mt-0">Free Samples Available</span>
      </div>
    </div>
  );
};

// Main CTA section combining messaging and ingredient display
export default function CTA() {
  useWaitlist();
  
  return (
    <section 
      id="cta" 
      aria-label="Call to action section" 
      className="relative py-16 md:py-20 lg:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Two-column layout: CTA message and ingredient profile */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between py-2 md:py-4">
          <CTAMessagePanel />
          <div className="w-full lg:max-w-lg">
            <IngredientProfile />
          </div>
        </div>
      </div>
    </section>
  );
}
