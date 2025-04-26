'use client';

import { GiHeartBeats, GiShieldReflect, GiTestTubes } from 'react-icons/gi';

// Main content component for the solution/benefits section
const SolutionContent = () => {
  return (
    <div className="w-full text-center">
      {/* Section headline and description */}
      <div className="max-w-4xl mx-auto mb-10">
        <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-4 leading-tight">
          Beyond Traditional Perfumery
        </h2>
        
        {/* Value proposition with highlighting */}
        <p className="text-gray-600 text-xs md:text-lg lg:text-xl mb-6">
          Molequles uses AI to analyze your skin and discover unique fragrance blends, crafting personalized perfumes tailored to your chemistry
        </p>        
      </div>
      
      {/* Three-column benefits grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8">
        {/* Performance benefit card */}
        <div className="bg-amber-50/30 rounded-xl border border-gray-200 p-6 shadow-sm bg-[linear-gradient(#33333310_1px,transparent_1px),linear-gradient(90deg,#33333310_1px,transparent_1px)] bg-[size:16px_16px]">
          <div className="flex justify-center mb-4">
            <GiHeartBeats className="h-6 w-6 text-black" />
          </div>
          <h3 className="text-black text-lg font-semibold mb-3">Consistent Performance</h3>
          <p className="text-gray-600 text-sm">
            Maintains balance and longevity throughout the day
          </p>
        </div>
        
        {/* Health/safety benefit card */}
        <div className="bg-amber-50/30 rounded-xl border border-gray-200 p-6 shadow-sm bg-[linear-gradient(#33333310_1px,transparent_1px),linear-gradient(90deg,#33333310_1px,transparent_1px)] bg-[size:16px_16px]">
          <div className="flex justify-center mb-4">
            <GiShieldReflect className="h-6 w-6 text-black" />
          </div>
          <h3 className="text-black text-lg font-semibold mb-3">Reduced Allergy Risks</h3>
          <p className="text-gray-600 text-sm">
            Reduces irritation by avoiding sensitive ingredients
          </p>
        </div>
        
        {/* Sustainability benefit card */}
        <div className="bg-amber-50/30 rounded-xl border border-gray-200 p-6 shadow-sm bg-[linear-gradient(#33333310_1px,transparent_1px),linear-gradient(90deg,#33333310_1px,transparent_1px)] bg-[size:16px_16px]">
          <div className="flex justify-center mb-4">
            <GiTestTubes className="h-6 w-6 text-black" />
          </div>
          <h3 className="text-black text-lg font-semibold mb-3">Personalized blends</h3>
          <p className="text-gray-600 text-sm">
            Creates a scent uniquely tailored to your skin
          </p>
        </div>
      </div>
    </div>
  );
};

// Main section wrapper with ID for navigation targeting
export default function Solution() {
  return (
    <section 
      id="solution" 
      aria-label="Solution section" 
      className="relative py-16 md:py-20 lg:py-24 bg-white overflow-hidden"
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SolutionContent />
      </div>
    </section>
  );
}
