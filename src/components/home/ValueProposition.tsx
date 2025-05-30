'use client';

import { GiHeartBeats, GiShieldReflect, GiTestTubes } from 'react-icons/gi';
import Card from '@/components/ui/card';
import Section from '@/components/layout/section';

// Main content component for the solution/benefits section
const ValueProposition = () => {
  return (
    <div className="w-full text-center">
      {/* Section headline and description */}
      <div className="max-w-4xl mx-auto mb-10">
        <div className="relative inline-block w-full text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 leading-tight bg-gradient-to-r from-gray-900 via-black to-emerald-600 bg-clip-text text-transparent">
            Beyond Traditional Perfumery
          </h2>
          {/* Decorative underline */}
          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full"></div>
        </div>

        {/* Value proposition with highlighting */}
        <p className="text-base md:text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
          Molequles uses AI to analyze your skin and discover unique fragrance blends, crafting
          personalized perfumes tailored to your chemistry
        </p>
      </div>

      {/* Three-column benefits grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8">
        {/* Performance benefit card */}
        <Card>
          <div className="flex justify-center mb-4">
            <GiHeartBeats className="h-6 w-6 text-black" />
          </div>
          <h3 className="text-lg font-semibold mb-3 text-black">Consistent Performance</h3>
          <p className="text-sm text-gray-600">
            Maintains longevity throughout the day
          </p>
        </Card>

        {/* Health/safety benefit card */}
        <Card>
          <div className="flex justify-center mb-4">
            <GiShieldReflect className="h-6 w-6 text-black" />
          </div>
          <h3 className="text-lg font-semibold mb-3 text-black">Reduced Allergy Risks</h3>
          <p className="text-sm text-gray-600">
            Reduces irritation by avoiding sensitive ingredients
          </p>
        </Card>

        {/* Sustainability benefit card */}
        <Card>
          <div className="flex justify-center mb-4">
            <GiTestTubes className="h-6 w-6 text-black" />
          </div>
          <h3 className="text-lg font-semibold mb-3 text-black">Personalized blends</h3>
          <p className="text-sm text-gray-600">Creates a scent uniquely tailored to your skin</p>
        </Card>
      </div>
    </div>
  );
};

// Main section wrapper with ID for navigation targeting
export default function Solution() {
  return (
    <Section
      id="solution"
      ariaLabel="Solution section"
      maxWidth="3xl"
    >
      <ValueProposition />
    </Section>
  );
}
