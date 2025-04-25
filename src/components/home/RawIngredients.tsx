'use client';

import { div } from 'framer-motion/client';
import Image from 'next/image';

export default function RawIngredients() {
  return (
    <section className="relative py-16 md:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Section heading - centered at top */}
        <div className="text-center mb-14">
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-black font-bold mb-6">
            Raw Materials Diversity
          </h2>
          <p className="text-gray-600 text-xl">
            With around 4,000 perfume ingredients available, the possible combinations are practically endless. Our AI helps find unique fragrance blends that perfectly match your personal scent profile.
          </p>
        </div>
        
        {/* Image and Statistics side by side */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Perfume Bottle Image */}
          <div className="w-full md:w-1/2">
            <Image
              src="/images/perfume_bottle.webp"
              alt="Perfume Bottle"
              width={500}
              height={500}
              className="w-full h-auto rounded-lg"
            />
          </div>
          
          {/* Statistics - stacked vertically */}
          <div className="w-full md:w-1/2 space-y-8">
            <div className="text-center md:text-left">
              <p className="text-4xl font-bold text-black mb-2">4,000+</p>
              <p className="text-sm text-gray-600">Available Ingredients</p>
            </div>
            <div className="text-center md:text-left">
              <p className="text-4xl font-bold text-black mb-2">Billion</p>
              <p className="text-sm text-gray-600">Potential Combinations</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
