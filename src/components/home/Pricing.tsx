'use client';

import { GiTestTubes, GiChemicalDrop } from 'react-icons/gi';
import { FiCheck } from 'react-icons/fi';
import { PricingCardProps } from '@/types/home';
import { useClientSide } from '@/hooks';

// Reusable pricing card component for product tiers
const PricingCard = ({ 
  title,       // Tier name
  price,       // Price display text
  description, // Brief description of the tier
  features,    // Array of included features
  icon: Icon,  // Icon component 
  iconColor,   // Icon color class
  gradient,    // Text gradient for title
  isPopular = false // Whether to highlight as popular choice
}: PricingCardProps) => {
  return (
    <div className={`overflow-hidden rounded-xl shadow-xl border border-cyan-900/50 bg-gradient-to-b from-gray-900 to-gray-950 p-6 hover:bg-gray-800/50 transition-all duration-300 transform hover:-translate-y-1 ${isPopular ? 'ring-1 ring-cyan-400' : ''}`}>
      {/* Card header with icon and title */}
      <div className="flex items-center gap-2 mb-3">
        <Icon className={`${iconColor} h-6 w-6`} />
        <h3 className={`text-xl font-medium text-transparent bg-clip-text ${gradient}`}>
          {title}
        </h3>
      </div>
      
      {/* Price display with optional unit label */}
      <div className="mb-4">
        <span className="text-2xl md:text-3xl font-bold text-gray-100">{price}</span>
        {title === "Full Size" && <span className="text-gray-400 text-sm ml-1">/bottle</span>}
      </div>
      
      {/* Tier description */}
      <p className="text-gray-300 font-light text-sm md:text-base mb-5">
        {description}
      </p>
      
      {/* Feature list with checkmarks */}
      <ul className="space-y-3">
        {features.map((feature: string, index: number) => (
          <li key={index} className="flex items-start gap-2">
            <FiCheck className="text-cyan-400 mt-1 h-4 w-4 flex-shrink-0" />
            <span className="text-gray-300 text-sm">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Main content component for the pricing section
const PricingContent = () => {
  
  return (
    <div className="w-full text-left">
      {/* Section headline and description */}
      <div className="max-w-2xl mb-10">
        <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-4 leading-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500">
            Select a
          </span>{' '}
          <span className="text-gray-100">Package</span>
        </h2>
        
        {/* Section description with highlighting border */}
        <p className="text-base md:text-lg text-gray-300 mb-6 leading-relaxed font-light border-l-2 border-cyan-500 pl-4 max-w-2xl">
          Choose between a free sample to experience our AI-driven approach or commit to a full-size signature fragrance.
        </p>
      </div>
      
      {/* Two-column pricing tier cards */}
      <div className="grid md:grid-cols-2 gap-6 mt-10">
        {/* Free sample tier */}
        <PricingCard
          title="Sample"
          price="Free"
          description="Try our personalized fragrance approach with a small sample size."
          features={[
            "2ml sample size",
            "2 skin parameters",
            "1 unique AI-generated formula",
          ]}
          icon={GiTestTubes}
          iconColor="text-cyan-400"
          gradient="bg-gradient-to-r from-cyan-400 to-blue-500"
        />
        
        {/* Premium tier with highlight */}
        <PricingCard
          title="Full Size"
          price="$150"
          description="Experience your perfect signature scent in a premium full-size bottle."
          features={[
            "50ml premium bottle",
            "4 skin parameters",
            "Advanced AI formula optimization",
          ]}
          icon={GiChemicalDrop}
          iconColor="text-blue-400"
          gradient="bg-gradient-to-r from-blue-400 to-indigo-500"
          isPopular={true}
        />
      </div>
    </div>
  );
};

// Main section wrapper with ID for navigation targeting
export default function Pricing() {
  return (
    <section 
      id="pricing" 
      aria-label="Pricing section" 
      className="relative py-12 md:py-16 lg:py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PricingContent />
      </div>
    </section>
  );
}
