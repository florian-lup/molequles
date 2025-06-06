'use client';

import { memo } from 'react';
import { GiHeartBeats, GiShieldReflect, GiTestTubes } from 'react-icons/gi';
import Card from '@/components/ui/card';
import Section from '@/components/layout/section';

interface Benefit {
  readonly icon: React.ReactNode;
  readonly title: string;
  readonly description: string;
}

const benefits: readonly Benefit[] = [
  {
    icon: <GiHeartBeats className="h-6 w-6 text-black" />,
    title: 'Consistent Performance',
    description: 'Delivers all-day fragrance with consistent intensity and character',
  },
  {
    icon: <GiShieldReflect className="h-6 w-6 text-black" />,
    title: 'Reduced Allergy Risks',
    description: 'Minimizes irritation and allergy risks by using only skin-friendly ingredients',
  },
  {
    icon: <GiTestTubes className="h-6 w-6 text-black" />,
    title: 'Personalized blends',
    description: 'Crafts a signature scent that evolves with your unique skin chemistry',
  },
] as const;

// Main content component for the solution/benefits section
const ValuePropositionContent = memo(() => {
  return (
    <div className="w-full text-center">
      {/* Section headline and description */}
      <div className="max-w-4xl mx-auto mb-10">
        <div className="relative inline-block w-full text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 leading-tight bg-gradient-to-r from-gray-900 via-black to-emerald-600 bg-clip-text text-transparent">
            Your skin chemistry makes every scent unique
          </h2>
          {/* Decorative underline */}
          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full" />
        </div>

        {/* Value proposition with highlighting */}
        <p className="text-base md:text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
          From rare florals to exotic spices, our extensive ingredient library allows us to create
          millions of unique fragrance combinations tailored specifically to your preferences and
          skin chemistry
        </p>
      </div>

      {/* Three-column benefits grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8">
        {benefits.map((benefit) => (
          <Card key={benefit.title}>
            <div className="flex justify-center mb-4" aria-hidden="true">
              {benefit.icon}
            </div>
            <h3 className="text-lg font-semibold mb-3 text-black">{benefit.title}</h3>
            <p className="text-sm text-gray-600">{benefit.description}</p>
          </Card>
        ))}
      </div>
    </div>
  );
});

ValuePropositionContent.displayName = 'ValuePropositionContent';

// Main section wrapper with ID for navigation targeting
const ValueProposition = memo(() => {
  return (
    <Section
      id="value-proposition"
      ariaLabel="Value proposition section"
      maxWidth="4xl"
      showFrame={false}
    >
      <ValuePropositionContent />
    </Section>
  );
});

ValueProposition.displayName = 'ValueProposition';

export default ValueProposition;
