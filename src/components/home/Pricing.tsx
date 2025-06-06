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
      className={`relative overflow-hidden h-full flex flex-col ${isPopular || id === 'ingredients' || id === 'premium' ? 'pt-8 sm:pt-10' : ''}`}
    >
      {/* Starter badge for first card */}
      {id === 'ingredients' && (
        <div className="absolute top-2 sm:top-3 right-2 sm:right-3">
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
        <div className="absolute top-2 sm:top-3 right-2 sm:right-3">
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
        <div className="absolute top-2 sm:top-3 right-2 sm:right-3">
          <Badge
            text="Most Popular"
            textSize="xs"
            variant="success"
            icon={<span className="text-green-600">✨</span>}
            showDot={false}
          />
        </div>
      )}

      {/* Price display with title - improved mobile typography */}
      <div className="mb-4 sm:mb-5">
        <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-emerald-600">
          {formattedPrice}
        </span>
        <span className="text-xs sm:text-sm text-gray-500 ml-1">/{title.toLowerCase()}</span>
      </div>

      {/* Tier description - better mobile line height */}
      <p className="text-sm sm:text-base text-gray-600 font-light mb-4 sm:mb-5 leading-relaxed">
        {description}
      </p>

      {/* Feature list with checkmarks - grows to fill available space */}
      <ul className="space-y-2 sm:space-y-3 flex-grow" role="list">
        {features.map((feature, index) => (
          <li key={`${title}-feature-${index}`} className="flex items-start gap-2 sm:gap-3">
            <FiCheck
              className="text-emerald-600 mt-0.5 sm:mt-1 h-4 w-4 flex-shrink-0"
              aria-hidden="true"
            />
            <span className="text-sm sm:text-base text-gray-600 leading-relaxed">{feature}</span>
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
        description:
          'The ultimate fragrance experience with luxury ingredients and premium service.',
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
    <div className="w-full flex justify-center">
      {/* Improved mobile-first grid with better responsive breakpoints */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 w-full max-w-sm md:max-w-xl lg:max-w-none">
        {pricingTiers.map((tier, index) => (
          <div
            key={tier.id}
            className={`flex ${
              // Offset first and third cards only on large desktop screens
              index === 0 || index === 2 ? 'lg:mt-8' : ''
            }`}
          >
            <PricingCard tier={tier} />
          </div>
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
      {/* Section heading - improved mobile typography */}
      <div className="max-w-4xl mx-auto mb-8 sm:mb-10 text-center">
        <div className="relative inline-block">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 leading-tight bg-gradient-to-r from-gray-900 via-black to-emerald-600 bg-clip-text text-transparent">
            Start your journey
          </h2>
          {/* Decorative underline */}
          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-12 sm:w-16 h-1 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full" />
        </div>
        <p className="text-sm sm:text-base lg:text-lg text-gray-600 mt-4 sm:mt-6 leading-relaxed px-2 sm:px-4">
          Unlock smarter scents, greater skin compatibility, and more consistent performance beyond
          what traditional perfumery can offer
        </p>
      </div>

      <PricingContent />
    </Section>
  );
});

Pricing.displayName = 'Pricing';

export default Pricing;
