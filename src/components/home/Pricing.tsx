'use client';

import { div } from 'framer-motion/client';
import { FiCheck } from 'react-icons/fi';

/**
 * Properties for pricing card components
 */
interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}

// Reusable pricing card component for product tiers
const PricingCard = ({ 
  title,       // Tier name
  price,       // Price display text
  description, // Brief description of the tier
  features,    // Array of included features
  isPopular = false // Whether to highlight as popular choice
}: PricingCardProps) => {
  return (
    <div className={`overflow-hidden rounded-xl shadow-md border ${isPopular ? 'border-gray-300 bg-gray-50' : 'border-gray-200 bg-white'} p-6 hover:bg-gray-50 transition-all duration-300 transform hover:-translate-y-1 ${isPopular ? 'ring-1 ring-gray-300' : ''}`}>
      {/* Card header with title */}
      
      {/* Price display with title */}
      <div className="mb-5">
        <span className="text-2xl md:text-3xl font-bold text-black">{price}</span>
        <span className="text-gray-500 text-sm ml-1">/{title.toLowerCase()}</span>
      </div>
      
      {/* Tier description */}
      <p className="text-gray-600 font-light text-sm md:text-base mb-5">
        {description}
      </p>
      
      {/* Feature list with checkmarks */}
      <ul className="space-y-3">
        {features.map((feature: string, index: number) => (
          <li key={index} className="flex items-start gap-2">
            <FiCheck className="text-black mt-1 h-4 w-4 flex-shrink-0" />
            <span className="text-gray-600 text-sm">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Main content component for the pricing section
const PricingContent = () => {
  
  return (
    <div className="w-full">
      {/* Section headline */}
      <div className="text-center mx-auto mb-16 max-w-4xl">
        <h2 className="text-lg md:text-3xl lg:text-4xl text-black leading-relaxed">
          Start your journey into custom fragrances
        </h2>
      </div>
      
      {/* Two-column pricing tier cards */}
      <div className="grid md:grid-cols-2 gap-6 mt-10">
        {/* Mid-tier option */}
        <PricingCard
          title="Travel Size"
          price="$75"
          description="Perfect for travel or testing your personalized scent before committing."
          features={[
            "50ml (1.7oz) bottle",
            "3 skin parameters",
            "2 formula iterations",
            "Elegant travel case"
          ]}
        />
        
        {/* Premium tier with highlight */}
        <PricingCard
          title="Full Size"
          price="$150"
          description="Experience your perfect signature scent in a premium full-size bottle."
          features={[
            "100ml (3.4oz) bottle",
            "4 skin parameters",
            "Advanced AI formula optimization",
          ]}
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
      className="relative py-12 md:py-16 lg:py-20 bg-white"
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PricingContent />
      </div>
    </section>
  );
}
