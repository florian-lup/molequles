'use client';

import { FC } from 'react';
import Badge from '@/components/ui/Badge';
import GradientBorder from '@/components/ui/GradientBorder';
import Container from '@/components/ui/layout/Container';
import Section from '@/components/ui/layout/Section';

// Type definitions
interface PricingTierProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  primary?: boolean;
}

// Pricing tier component
const PricingTier: FC<PricingTierProps> = ({ title, price, description, features, primary = false }) => {
  return (
    <div className={`${primary ? 'bg-indigo-900/30 border-indigo-700/50' : 'bg-gray-900/40 border-gray-800/50'} rounded-xl p-4 sm:p-6 md:p-8 border hover:border-gray-700/70 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10 h-full flex flex-col`}>
      <div className="mb-3 sm:mb-4 md:mb-6 border-b border-gray-700/50 pb-3 sm:pb-5">
        <div className="text-sm text-gray-400 mb-1">{title}</div>
        <div className="flex items-baseline">
          <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">{price}</span>
          {price !== 'Free' && <span className="text-sm text-gray-400 ml-1">/bottle</span>}
        </div>
        <p className="text-sm sm:text-base text-gray-400 mt-3">{description}</p>
      </div>
      
      <div className="flex-grow">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <svg className="w-5 h-5 text-indigo-400 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span className="text-sm sm:text-base text-gray-300">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// Define pricing tiers
const pricingTiers = [
  {
    title: "Sample",
    price: "Free",
    description: "Try our personalized fragrance approach with a small sample size.",
    features: [
      "2ml sample size",
      "1 skin analysis",
      "1 unique AI-generated formula",
      "7-day satisfaction guarantee"
    ]
  },
  {
    title: "Full Size",
    price: "$150",
    description: "Experience your perfect signature scent in a premium full-size bottle.",
    features: [
      "50ml premium bottle",
      "Comprehensive skin analysis",
      "Advanced AI formula optimization",
      "Luxury gift packaging",
      "30-day satisfaction guarantee"
    ],
    primary: true
  }
];

// PricingGrid component
const PricingGrid = () => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8">
        {pricingTiers.map((tier, index) => (
          <PricingTier
            key={index}
            title={tier.title}
            price={tier.price}
            description={tier.description}
            features={tier.features}
            primary={tier.primary}
          />
        ))}
      </div>
    </div>
  );
};

export default function Pricing() {
  return (
    <Section 
      id="pricing" 
      ariaLabel="Pricing section"
    >
      <GradientBorder />
      
      <Container className="flex flex-col justify-center items-center">
        {/* Header section */}
        <div className="text-left w-full mb-6 sm:mb-10 md:mb-12">
          <div className="mb-2 sm:mb-4">
            <Badge>Pricing</Badge>
          </div>
          <h3 className="text-base sm:text-xl md:text-2xl text-white mb-2 leading-relaxed">
            Personalized perfumes that match your unique skin chemistry and preferences.
          </h3>
          <p className="text-sm sm:text-base text-gray-400">
            Choose between a free sample to experience our AI-driven approach or commit to a full-size signature fragrance.
          </p>
        </div>

        {/* Pricing Grid */}
        <PricingGrid />
      </Container>
    </Section>
  );
} 