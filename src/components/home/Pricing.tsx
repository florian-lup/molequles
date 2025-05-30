'use client';

import { FiCheck } from 'react-icons/fi';
import Badge from '@/components/ui/badge';

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
  title, // Tier name
  price, // Price display text
  description, // Brief description of the tier
  features, // Array of included features
  isPopular = false, // Whether to highlight as popular choice
}: PricingCardProps) => {
  return (
    <div
      className={`relative overflow-hidden rounded-xl shadow-sm border ${isPopular ? 'border-emerald-500 pt-10' : 'border-gray-200'} p-6 bg-amber-50/30 bg-[linear-gradient(#33333310_1px,transparent_1px),linear-gradient(90deg,#33333310_1px,transparent_1px)] bg-[size:16px_16px] transition-all duration-300 transform hover:-translate-y-1 ${isPopular ? 'ring-1 ring-emerald-500' : ''}`}
    >
      {/* Popular badge */}
      {isPopular && (
        <div className="absolute top-3 right-3">
          <Badge
            text="Most Popular"
            textSize="xs"
            bgColor="bg-emerald-500"
            textColor="text-white"
            showDot={false}
            className="border-emerald-500"
          />
        </div>
      )}

      {/* Price display with title */}
      <div className="mb-5">
        <span className="text-2xl md:text-3xl font-bold text-emerald-600">{price}</span>
        <span className="text-gray-500 text-sm ml-1">/{title.toLowerCase()}</span>
      </div>

      {/* Tier description */}
      <p className="text-gray-600 font-light text-sm md:text-base mb-5">{description}</p>

      {/* Feature list with checkmarks */}
      <ul className="space-y-3">
        {features.map((feature: string, index: number) => (
          <li key={index} className="flex items-start gap-2">
            <FiCheck className="text-emerald-600 mt-1 h-4 w-4 flex-shrink-0" />
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
      {/* Two-column pricing tier cards */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Basic tier option */}
        <PricingCard
          title="Ingredients Plan"
          price="$75"
          description="Experience a unique fragrance created from our vast library of ingredients."
          features={[
            '100ml (3.4oz) bottle',
            'Access to 4,000+ ingredients',
            'Unique formula creation',
          ]}
        />

        {/* Premium tier with highlight */}
        <PricingCard
          title="Skin Chemistry Plan"
          price="$150"
          description="Advanced personalization that adapts to your unique skin chemistry."
          features={[
            '100ml (3.4oz) bottle',
            'Access to 4,000+ ingredients',
            'Unique formula creation',
            'Full skin chemistry analysis',
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
      <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section headline */}
        <div className="max-w-4xl mx-auto mb-10 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-tight">
            Start your journey
          </h2>

          {/* Value proposition with highlighting */}
          <p className="text-base sm:text-lg text-gray-600 mb-6">
            Unlock smarter scents and greater skin compatibility
          </p>

          {/* Satisfaction guarantee badge */}
          <div className="mb-6">
            <Badge
              text="All plans include a 30-day satisfaction guarantee"
              variant="success"
              textSize="xs"
              icon={<span className="text-green-600">✨</span>}
              showDot={false}
            />
          </div>
        </div>

        <PricingContent />
      </div>
    </section>
  );
}
