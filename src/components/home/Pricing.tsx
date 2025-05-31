'use client';

import { memo, useMemo } from 'react';
import { FiCheck } from 'react-icons/fi';
import Badge from '@/components/ui/badge';
import Card from '@/components/ui/card';
import Section from '@/components/layout/section';
import { formatPrice } from '@/utils';
import { PRODUCT_INFO } from '@/constants';
import type { PricingTier } from '@/types';

/**
 * Properties for pricing card components
 */
interface PricingCardProps {
  readonly tier: PricingTier;
}

// Reusable pricing card component for product tiers
const PricingCard = memo<PricingCardProps>(({ tier }) => {
  const { title, price, description, features, isPopular = false, id } = tier;

  // Extract numeric price for formatting (assuming price is in format "$75")
  const numericPrice = parseInt(price.replace(/[^0-9]/g, ''), 10);
  const formattedPrice = formatPrice(numericPrice, 'USD');

  return (
    <Card
      variant={isPopular ? 'highlight' : 'default'}
      hover={true}
      className={`relative overflow-hidden ${isPopular || id === 'ingredients' || id === 'premium' ? 'pt-10' : ''}`}
    >
      {/* Starter badge for first card */}
      {id === 'ingredients' && (
        <div className="absolute top-3 right-3">
          <Badge
            text="Starter"
            textSize="xs"
            variant="info"
            icon={<span className="text-blue-600">🚀</span>}
            showDot={false}
          />
        </div>
      )}

      {/* Premium badge for third card */}
      {id === 'premium' && (
        <div className="absolute top-3 right-3">
          <Badge
            text="Premium"
            textSize="xs"
            variant="warning"
            icon={<span className="text-yellow-600">👑</span>}
            showDot={false}
          />
        </div>
      )}

      {/* Popular badge */}
      {isPopular && (
        <div className="absolute top-3 right-3">
          <Badge
            text="Most Popular"
            textSize="xs"
            variant="success"
            icon={<span className="text-green-600">✨</span>}
            showDot={false}
          />
        </div>
      )}

      {/* Price display with title */}
      <div className="mb-5">
        <span className="text-3xl md:text-4xl font-bold text-emerald-600">{formattedPrice}</span>
        <span className="text-sm text-gray-500 ml-1">/{title.toLowerCase()}</span>
      </div>

      {/* Tier description */}
      <p className="text-sm md:text-base text-gray-600 font-light mb-5">{description}</p>

      {/* Feature list with checkmarks */}
      <ul className="space-y-3" role="list">
        {features.map((feature, index) => (
          <li key={`${title}-feature-${index}`} className="flex items-start gap-2">
            <FiCheck className="text-emerald-600 mt-1 h-4 w-4 flex-shrink-0" aria-hidden="true" />
            <span className="text-sm text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
});

PricingCard.displayName = 'PricingCard';

// Main content component for the pricing section
const PricingContent = memo(() => {
  const pricingTiers: readonly PricingTier[] = useMemo(
    () => [
      {
        id: 'ingredients',
        title: 'Ingredients Plan',
        price: '$75',
        description: 'Experience a unique fragrance created from our vast library of ingredients.',
        features: [
          `${PRODUCT_INFO.bottleSize} bottle`,
          `Access to ${PRODUCT_INFO.ingredientCount} ingredients`,
          'Unique formula creation',
        ],
      },
      {
        id: 'skin-chemistry',
        title: 'Skin Chemistry Plan',
        price: '$150',
        description: 'Advanced personalization that adapts to your unique skin chemistry.',
        features: [
          `${PRODUCT_INFO.bottleSize} bottle`,
          `Access to ${PRODUCT_INFO.ingredientCount} ingredients`,
          'Unique formula creation',
          'Full skin chemistry analysis',
        ],
        isPopular: true,
      },
      {
        id: 'premium',
        title: 'Premium Plan',
        price: '$250',
        description: 'The ultimate fragrance experience with luxury ingredients and premium service.',
        features: [
          `${PRODUCT_INFO.bottleSize} bottle`,
          `Access to ${PRODUCT_INFO.ingredientCount} ingredients`,
          'Unique formula creation',
          'Full skin chemistry analysis',
          'Premium luxury ingredients',
          'Personal fragrance consultation',
        ],
      },
    ],
    []
  );

  return (
    <div className="w-full">
      {/* Three-column pricing tier cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {pricingTiers.map((tier) => (
          <PricingCard key={tier.id} tier={tier} />
        ))}
      </div>
    </div>
  );
});

PricingContent.displayName = 'PricingContent';

// Main section wrapper with ID for navigation targeting
const Pricing = memo(() => {
  return (
    <Section id="pricing" ariaLabel="Pricing section" maxWidth="6xl" padding="md" showFrame={false}>
      {/* Section heading */}
      <div className="max-w-4xl mx-auto mb-10 text-center">
        <div className="relative inline-block">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 leading-tight bg-gradient-to-r from-gray-900 via-black to-emerald-600 bg-clip-text text-transparent">
            Start your journey
          </h2>
          {/* Decorative underline */}
          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full" />
        </div>
        <p className="text-base md:text-lg text-gray-600 mt-6 leading-relaxed">
          Unlock smarter scents, greater skin compatibility, and more consistent performance beyond what traditional perfumery can offer
        </p>
      </div>

      <PricingContent />
    </Section>
  );
});

Pricing.displayName = 'Pricing';

export default Pricing;
