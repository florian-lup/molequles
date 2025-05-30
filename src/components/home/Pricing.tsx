'use client';

import { FiCheck } from 'react-icons/fi';
import Badge from '@/components/ui/badge';
import Card from '@/components/ui/card';
import Section from '@/components/layout/section';

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
    <Card
      variant={isPopular ? 'highlight' : 'default'}
      hover={true}
      className={`relative overflow-hidden ${isPopular ? 'pt-10' : ''}`}
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
        <span className="text-3xl md:text-4xl font-bold text-emerald-600">{price}</span>
        <span className="text-sm text-gray-500 ml-1">/{title.toLowerCase()}</span>
      </div>

      {/* Tier description */}
      <p className="text-sm md:text-base text-gray-600 font-light mb-5">{description}</p>

      {/* Feature list with checkmarks */}
      <ul className="space-y-3">
        {features.map((feature: string, index: number) => (
          <li key={index} className="flex items-start gap-2">
            <FiCheck className="text-emerald-600 mt-1 h-4 w-4 flex-shrink-0" />
            <span className="text-sm text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
    </Card>
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
    <Section id="pricing" ariaLabel="Pricing section" maxWidth="xl" padding="md">
      {/* Section headline */}
      <div className="max-w-4xl mx-auto mb-10 text-center">
        <div className="relative inline-block">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 leading-tight bg-gradient-to-r from-gray-900 via-black to-emerald-600 bg-clip-text text-transparent">
            Start your journey
          </h2>
        </div>

        {/* Value proposition with highlighting */}
        <p className="text-base md:text-lg text-gray-600 mb-6">
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
    </Section>
  );
}
