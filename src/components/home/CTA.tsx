'use client';

import { useWaitlist } from '@/hooks';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import { TbLeaf, TbDroplet, TbTemperature, TbMathSymbols, TbWaveSine } from 'react-icons/tb';

/**
 * Ingredient data type for the personalized formula cards
 */
interface IngredientItemProps {
  name: string;
  percentage: number;
  accentColor: string;
}

/**
 * Skin parameter data type
 */
interface SkinParameterProps {
  value: string;
  unit: string;
  label: string;
  color: string;
}

/**
 * Component to display a single skin parameter card
 */
const SkinParameterCard = ({ value, unit, label, color }: SkinParameterProps) => {
  return (
    <div className="overflow-hidden rounded-xl shadow-sm bg-amber-50/30 p-3 border border-gray-200 text-center h-[72px] flex items-center justify-center bg-[linear-gradient(#33333310_1px,transparent_1px),linear-gradient(90deg,#33333310_1px,transparent_1px)] bg-[size:16px_16px]">
      <div>
        <div className="flex items-baseline justify-center mb-1">
          <span className={`text-${color} text-sm font-semibold`}>{value}</span>
          <span className={`text-gray-600 text-xs ml-0.5`}>{unit}</span>
        </div>
        <div className="text-gray-600 text-xs">{label}</div>
      </div>
    </div>
  );
};

/**
 * Component to display a single ingredient item with percentage bar
 */
const IngredientItem = ({ name, percentage, accentColor }: IngredientItemProps) => {
  return (
    <div className="overflow-hidden rounded-xl shadow-sm bg-amber-50/30 p-3 border border-gray-200 h-[72px]">
      <div className="flex items-center gap-3 justify-center h-full">
        {/* Ingredient icon */}
        <div className={`bg-${accentColor}-500/20 rounded-full p-2 mt-1`}>
          <TbLeaf size={18} className={`text-${accentColor}-500`} />
        </div>
        {/* Ingredient name and percentage bar */}
        <div className="flex-1">
          <div className="flex justify-between items-center">
            <div className="text-sm text-black font-semibold">{name}</div>
            <div className="text-xs text-gray-600">{percentage}%</div>
          </div>
          {/* Percentage visualization bar */}
          <div className="w-full bg-gray-200 h-2 rounded-full mt-1.5 overflow-hidden">
            <div 
              className={`bg-gradient-to-r from-${accentColor}-500 to-${accentColor}-400 h-full rounded-full`} 
              style={{ width: `${percentage}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * Component to display skin parameters grid
 */
const SkinParameters = () => {
  // Skin parameter data
  const parameters = [
    { 
      value: '74', 
      unit: 'μg', 
      label: 'Sebum', 
      color: 'cyan-500' 
    },
    { 
      value: '33', 
      unit: '°C', 
      label: 'Temp', 
      color: 'blue-500' 
    },
    { 
      value: '~5.5', 
      unit: '', 
      label: 'pH Level', 
      color: 'indigo-500' 
    },
    { 
      value: '61', 
      unit: 'AU', 
      label: 'Hydration', 
      color: 'purple-500' 
    },
  ];
  
  return (
    <div className="grid grid-cols-2 gap-3">
      {parameters.map((param, idx) => (
        <SkinParameterCard
          key={idx}
          value={param.value}
          unit={param.unit}
          label={param.label}
          color={param.color}
        />
      ))}
    </div>
  );
};

/**
 * Component to display ingredient list
 */
const Ingredients = () => {
  // Sample ingredient data
  const ingredients = [
    { name: 'Bergamot', percentage: 35, accentColor: 'cyan' },
    { name: 'Neroli', percentage: 28, accentColor: 'blue' },
    { name: 'Amber', percentage: 22, accentColor: 'indigo' },
    { name: 'Sandalwood', percentage: 15, accentColor: 'purple' }
  ];
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {ingredients.map((ingredient, idx) => (
        <IngredientItem
          key={idx}
          name={ingredient.name}
          percentage={ingredient.percentage}
          accentColor={ingredient.accentColor}
        />
      ))}
    </div>
  );
};

/**
 * Component to display the entire personalized formula section
 */
const PersonalizedFormula = () => {
  return (
    <div className="w-full overflow-hidden rounded-xl shadow-sm bg-white p-5 border border-gray-200">
      {/* Section header */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-3 border-b border-gray-200 pb-2">
          <span className="px-2 py-0.5 bg-gray-100 rounded-md text-xs font-medium text-gray-600">
            SKIN FACTORS
          </span>
          <span className="px-2 py-0.5 bg-gray-100 rounded-md text-xs font-medium text-gray-600">
            KEY INGREDIENTS
          </span>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row gap-5">
        {/* Skin Parameters - displayed on left */}
        <div className="w-full md:w-1/3 h-full">
          <SkinParameters />
        </div>
        
        {/* Ingredient cards - displayed on right */}
        <div className="w-full md:w-2/3 h-full">
          <Ingredients />
        </div>
      </div>
    </div>
  );
};

/**
 * Panel containing call-to-action message and waitlist button
 */
const CTAMessagePanel = () => {
  const { openWaitlist } = useWaitlist();
  
  return (
    <div className="w-full text-center">
      {/* Centered headline */}
      <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-6 leading-tight text-black">
        Join the waitlist for early access
      </h2>

      {/* Waitlist button with promotional text */}
      <div className="flex items-center justify-center gap-4">
        <Button 
          onClick={openWaitlist}
          size="sm"
          rightIcon
        >
          Join Waitlist
        </Button>
        <Badge 
          text="Free Samples Available" 
          textSize="xs" 
          dotColor="bg-green-500" 
          bgColor="bg-green-50" 
          textColor="text-green-700"
        />
      </div>
    </div>
  );
};

/**
 * Main CTA section combining messaging and ingredient display
 */
export default function CTA() {
  useWaitlist();
  
  return (
    <section 
      id="cta" 
      aria-label="Call to action section" 
      className="relative py-16 md:py-20 lg:py-24 bg-white overflow-hidden"
    >
      <div className="container mx-auto px-4 max-w-3xl z-10 relative">
        {/* Stacked vertical layout */}
        <div className="flex flex-col items-center justify-center gap-10 py-2 md:py-4">
          <CTAMessagePanel />
          <PersonalizedFormula />
        </div>
      </div>
    </section>
  );
}
