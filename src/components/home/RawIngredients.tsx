'use client';

import { useState } from 'react';

type NoteLevel = 'top' | 'middle' | 'base';

type FamilyProps = {
  name: string;
  level: NoteLevel;
  count: number;
  onClick: () => void;
  isActive: boolean;
};

const Family = ({ name, level, count, onClick, isActive }: FamilyProps) => {
  const levelColors = {
    top: isActive ? 'bg-yellow-50 border-yellow-400' : 'bg-yellow-50/50 border-yellow-200',
    middle: isActive ? 'bg-emerald-50 border-emerald-400' : 'bg-emerald-50/50 border-emerald-200',
    base: isActive ? 'bg-amber-50 border-amber-400' : 'bg-amber-50/50 border-amber-200'
  };

  return (
    <div 
      className={`px-3 py-3 rounded-md border ${levelColors[level]} cursor-pointer transition-all 
        ${isActive ? 'shadow-md transform scale-105' : 'shadow-sm hover:shadow'}`}
      onClick={onClick}
    >
      <p className="text-sm font-medium text-center">{name}</p>
      <p className="text-xs text-gray-500 text-center mt-1">{count}+ ingredients</p>
    </div>
  );
};

// Main component for fragrance pyramid
const FragrancePyramid = () => {
  const [activeFamily, setActiveFamily] = useState<string | null>(null);
  
  // Family definitions with their properties
  const families = {
    top: [
      { name: "Citrus", count: 120 },
      { name: "Green", count: 90 },
      { name: "Fruity", count: 150 },
      { name: "Aquatic", count: 40 },
      { name: "Aldehydic", count: 30 },
      { name: "Ozonic", count: 20 }
    ],
    middle: [
      { name: "Floral", count: 900 },
      { name: "Spicy", count: 200 },
      { name: "Herbal", count: 180 },
      { name: "Fruity Floral", count: 120 },
      { name: "Aromatic", count: 100 }
    ],
    base: [
      { name: "Woody", count: 350 },
      { name: "Oriental", count: 110 },
      { name: "Musky", count: 60 },
      { name: "Gourmand", count: 80 },
      { name: "Amber", count: 90 },
      { name: "Leather", count: 40 },
      { name: "Balsamic", count: 50 },
      { name: "Tobacco", count: 30 },
      { name: "Chypre", count: 25 },
      { name: "Fougère", count: 25 },
      { name: "Animalic", count: 10 }
    ]
  };
  
  // Information about each family
  const familyInfo: Record<string, string> = {
    "Citrus": "Bright, zesty notes derived from citrus fruits like bergamot, lemon, orange, and grapefruit",
    "Green": "Fresh, natural scents reminiscent of cut grass, leaves, and herbs",
    "Fruity": "Sweet, juicy notes inspired by various fruits beyond just citrus",
    "Aquatic": "Fresh, marine-like scents evoking the ocean, sea breeze, and water",
    "Aldehydic": "Sparkling, soapy, and clean notes that add lift and radiance to fragrances",
    "Ozonic": "Airy, fresh, and watery notes reminiscent of sea breeze and open sky",

    "Floral": "The largest fragrance family, featuring roses, jasmine, lily, and hundreds of other flower-derived scents",
    "Spicy": "Warm, aromatic notes like cinnamon, cardamom, pepper, and nutmeg that add complexity",
    "Herbal": "Natural, aromatic scents from herbs like lavender, basil, rosemary, and thyme",
    "Fruity Floral": "A blend of floral notes with fruity accents creating a sweet, colorful profile",
    "Aromatic": "Herbaceous, fresh notes from lavender, sage, rosemary, and similar plants",

    "Woody": "Warm, deep scents derived from various woods like sandalwood, cedar, and oud",
    "Oriental": "Rich, exotic notes featuring vanilla, amber, and resinous ingredients",
    "Musky": "Sensual, warm scents providing depth and longevity to fragrances",
    "Gourmand": "Edible, dessert-like scents featuring vanilla, chocolate, caramel, and coffee notes",
    "Amber": "Warm, golden, resinous notes with vanillic and powdery undertones",
    "Leather": "Smoky, tarry, and animalic notes reminiscent of leather and suede",
    "Balsamic": "Sweet, resinous, and comforting notes from balsams like tolu, Peru, and benzoin",
    "Tobacco": "Sweet, hay-like, and smoky notes inspired by cured tobacco leaves",
    "Chypre": "A classic family built on oakmoss, patchouli, bergamot, and labdanum, with a mossy-woody character",
    "Fougère": "Aromatic, fresh, and slightly sweet notes built on lavender, oakmoss, and coumarin (barbershop style)",
    "Animalic": "Sensual, musky, and sometimes civet-like notes that add warmth and depth"
  };
  
  return (
    <div className="h-full bg-white relative rounded-xl border border-gray-200 overflow-hidden">
      
      {/* Main content */}
      <div className="relative p-6 pt-14">
        <div className="flex flex-col h-full">
          {/* Pyramid diagram */}
          <div className="relative grow flex flex-col gap-5">
            {/* Top notes */}
            <div className="relative">
              <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-3 flex items-center">
                <span className="mr-2 w-3 h-3 bg-yellow-300 rounded-full"></span>
                Top Note Families
                <span className="ml-2 text-xs font-normal">(First impression)</span>
              </h3>
              <div className="grid grid-cols-4 gap-2">
                {families.top.map((family, idx) => (
                  <Family
                    key={idx}
                    name={family.name}
                    count={family.count}
                    level="top"
                    isActive={activeFamily === family.name}
                    onClick={() => setActiveFamily(activeFamily === family.name ? null : family.name)}
                  />
                ))}
              </div>
            </div>
            
            {/* Middle notes */}
            <div className="relative">
              <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-3 flex items-center">
                <span className="mr-2 w-3 h-3 bg-emerald-400 rounded-full"></span>
                Middle Note Families
                <span className="ml-2 text-xs font-normal">(Heart)</span>
              </h3>
              <div className="grid grid-cols-4 gap-2">
                {families.middle.map((family, idx) => (
                  <Family
                    key={idx}
                    name={family.name}
                    count={family.count}
                    level="middle"
                    isActive={activeFamily === family.name}
                    onClick={() => setActiveFamily(activeFamily === family.name ? null : family.name)}
                  />
                ))}
              </div>
            </div>
            
            {/* Base notes */}
            <div className="relative">
              <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-3 flex items-center">
                <span className="mr-2 w-3 h-3 bg-amber-400 rounded-full"></span>
                Base Note Families
                <span className="ml-2 text-xs font-normal">(Foundation)</span>
              </h3>
              <div className="grid grid-cols-4 gap-2">
                {families.base.map((family, idx) => (
                  <Family
                    key={idx}
                    name={family.name}
                    count={family.count}
                    level="base"
                    isActive={activeFamily === family.name}
                    onClick={() => setActiveFamily(activeFamily === family.name ? null : family.name)}
                  />
                ))}
              </div>
            </div>
          </div>
          
          {/* Selected family info */}
          <div className={`mt-6 pt-4 border-t border-gray-200 transition-all duration-300 ${
            activeFamily ? 'opacity-100 max-h-40' : 'opacity-0 max-h-0 overflow-hidden'
          }`}>
            {activeFamily && (
              <div className="text-center">
                <h4 className="font-medium text-lg mb-1">{activeFamily}</h4>
                <p className="text-sm text-gray-600">{familyInfo[activeFamily]}</p>
              </div>
            )}
          </div>
          
          {/* Instructions when nothing selected */}
          <div className={`mt-4 text-center text-sm text-gray-500 transition-opacity duration-300 ${
            activeFamily ? 'opacity-0 absolute -z-10' : 'opacity-100'
          }`}>
            Tap any family to learn more about it
          </div>
        </div>
      </div>
    </div>
  );
};

export default function RawIngredients() {
  return (
    <section className="relative py-12 md:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left column: Title and Description */}
          <div className="flex flex-col justify-center">
            {/* Section title */}
            <h2 className="text-lg md:text-3xl lg:text-4xl text-black font-bold mb-8 lg:text-left">
              Raw Materials Diversity
            </h2>
            <p className="text-gray-700 lg:text-left mb-8">
              With around 5,000 perfume ingredients available, the possible combinations are practically endless. Our AI helps find unique fragrance blends that perfectly match your personal scent profile.
            </p>
            
            {/* Stats display */}
            <div className="flex gap-6 mb-6">
              <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-4 flex-1 text-center">
                <div className="text-3xl font-bold text-black">4,000+</div>
                <div className="text-sm text-gray-600 mt-1">Raw Materials</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-4 flex-1 text-center">
                <div className="text-3xl font-bold text-black">Trillions</div>
                <div className="text-sm text-gray-600 mt-1">Possible Combinations</div>
              </div>
            </div>
          </div>
          
          {/* Right column: Fragrance pyramid with visualization of quantity */}
          <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[450px]">
            <FragrancePyramid />
          </div>
        </div>
      </div>
    </section>
  );
}
