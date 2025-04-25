'use client';
import { useState } from 'react';

export default function RawIngredients() {
  return (
    <section className="relative py-16 md:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Section heading - centered at top */}
        <div className="text-center mb-14">
          <h2 className="text-xl md:text-3xl lg:text-4xl text-black font-bold mb-6">
            Raw Materials Diversity
          </h2>
          <p className="text-gray-600 text-sm md:text-lg lg:text-xl">
            With a vast array of perfume ingredients available and endless possible pairings, our AI helps create unique fragrance blends
          </p>
        </div>
        
        {/* Statistics */}
        <div className="flex justify-center mb-10">
          <div className="grid grid-cols-3 gap-10">
            <div className="text-center">
              <p className="text-2xl font-bold text-black mb-2">4,000+</p>
              <p className="text-sm text-gray-600">Available Ingredients</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-black mb-2">Billions</p>
              <p className="text-sm text-gray-600">Potential Combinations</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-black mb-2">100%</p>
              <p className="text-sm text-gray-600">Personalized Formulas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
