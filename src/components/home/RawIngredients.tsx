'use client';
import Image from 'next/image';

export default function RawIngredients() {
  return (
    <section className="relative py-16 md:py-20 lg:py-24 bg-white overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 z-0">
        <div className="h-3/4 w-full absolute left-0 right-0 top-1/2 -translate-y-1/2" 
          style={{
            backgroundImage: 'linear-gradient(to right, #f7f7f7 1px, transparent 1px), linear-gradient(to bottom, #f7f7f7 1px, transparent 1px)',
            backgroundSize: '30px 30px',
            backgroundPosition: 'center center'
          }}
        />
        <div 
          className="absolute inset-0" 
          style={{
            background: 'radial-gradient(circle at center, transparent 10%, rgba(255,255,255,0.8) 80%, white 100%)'
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 max-w-4xl z-10 relative">
        {/* Section heading - centered at top */}
        <div className="text-center mb-14">
          <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-6">
            Raw Materials Diversity
          </h2>
          <p className="text-gray-600 text-sm md:text-lg lg:text-xl">
            With a vast array of perfume ingredients available and endless possible pairings, our AI helps create unique fragrance formulas
          </p>
        </div>
        
        {/* Image and statistics side by side */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Perfume bottle image */}
          <div className="w-full md:w-1/2">
            <div className="relative w-full aspect-square max-w-sm mx-auto">
              <Image 
                src="/images/black_bottle.png"
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
              <p className="text-lg md:text-2xl font-bold text-black mb-2">4,000+</p>
              <p className="text-xs md:text-sm text-gray-600">Available Ingredients</p>
            </div>
            <div className="w-1/3 md:w-full text-center p-2 md:border-l-4 border-gray-200 md:pl-6">
              <p className="text-lg md:text-2xl font-bold text-black mb-2">Billions</p>
              <p className="text-xs md:text-sm text-gray-600">Potential Combinations</p>
            </div>
            <div className="w-1/3 md:w-full text-center p-2 md:border-l-4 border-gray-200 md:pl-6">
              <p className="text-lg md:text-2xl font-bold text-black mb-2">100%</p>
              <p className="text-xs md:text-sm text-gray-600">Personalized Formulas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
