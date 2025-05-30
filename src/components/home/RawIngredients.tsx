'use client';
import Image from 'next/image';
import Section from '@/components/layout/section';

export default function RawIngredients() {
  return (
    <Section className="bg-white">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 z-0">
        <div
          className="h-3/4 w-full absolute left-0 right-0 top-1/2 -translate-y-1/2"
          style={{
            backgroundImage:
              'linear-gradient(to right, #f7f7f7 1px, transparent 1px), linear-gradient(to bottom, #f7f7f7 1px, transparent 1px)',
            backgroundSize: '30px 30px',
            backgroundPosition: 'center center',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(circle at center, transparent 10%, rgba(255,255,255,0.8) 80%, white 100%)',
          }}
        />
      </div>

      {/* Section heading - centered at top */}
      <div className="text-center mb-14 relative z-10">
        <div className="relative inline-block">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-black to-emerald-600 bg-clip-text text-transparent">
            Thousands of ingredients. Endless combinations
          </h2>
          {/* Decorative underline */}
          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full"></div>
        </div>
        <p className="text-base md:text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
          From rare florals to exotic spices, our extensive ingredient library allows us to create millions of unique fragrance combinations tailored specifically to your preferences and skin chemistry.
        </p>
      </div>

      {/* Image and statistics side by side */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
        {/* Perfume bottle image */}
        <div className="w-full md:w-1/2">
          <div className="relative w-full aspect-square max-w-sm mx-auto">
            <Image
              src="/images/sample_bottle.png"
              alt="Perfume Bottle"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Statistics stacked vertically */}
        <div className="w-full md:w-1/2 flex flex-row flex-wrap justify-between md:space-y-8 md:block">
          <div className="w-1/3 md:w-full text-center p-2 md:border-l-4 border-gray-200 md:pl-6">
            <p className="text-xl md:text-2xl font-bold text-black mb-2">4,000+</p>
            <p className="text-sm md:text-base text-gray-600">Available Ingredients</p>
          </div>
          <div className="w-1/3 md:w-full text-center p-2 md:border-l-4 border-gray-200 md:pl-6">
            <p className="text-xl md:text-2xl font-bold text-black mb-2">Billions</p>
            <p className="text-sm md:text-base text-gray-600">Potential Combinations</p>
          </div>
          <div className="w-1/3 md:w-full text-center p-2 md:border-l-4 border-gray-200 md:pl-6">
            <p className="text-xl md:text-2xl font-bold text-black mb-2">100%</p>
            <p className="text-sm md:text-base text-gray-600">Personalized Formulas</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
