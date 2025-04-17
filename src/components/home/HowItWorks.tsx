'use client';

import { GiMolecule, GiMicroscope, GiTestTubes } from 'react-icons/gi';
import Badge from '@/components/ui/Badge';
import FeaturesCard from '@/components/ui/FeaturesCard';

// Main content component for the How It Works section
const HowItWorksContent = () => {
  
  return (
    <div className="w-full text-left">
      {/* Section headline and description */}
      <div className="max-w-2xl mb-10">
        <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-4 leading-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500">
            The Science
          </span>{' '}
          <span className="text-gray-100">of Creation</span>
        </h2>
        
        {/* Section summary with highlighting border */}
        <p className="text-base md:text-lg text-gray-300 mb-6 leading-relaxed font-light border-l-2 border-cyan-500 pl-4">
          From analysis to creation, our scientific approach ensures your perfume perfectly matches your unique skin chemistry.
        </p>
        
        {/* Precision highlight badge */}
          <Badge 
            icon={<GiMolecule className="text-cyan-400 h-5 w-5" />}
            highlight="99.8%"
            text="we match your skin and raw ingredients with molecular precision"
            className="mb-4 max-w-2xl"
          />
      </div>
      
      {/* Three-step process cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {/* Data collection step */}
        <FeaturesCard
          icon={<GiMicroscope className="h-6 w-6" />}
          title="Step 1: Collecting Skin Data"
          description="Visit a local dermatologist to identify your unique skin parameters."
          titleClassName="bg-gradient-to-r from-cyan-400 to-blue-400"
          iconColor="text-cyan-400"
        />
        
        {/* AI analysis step */}
        <FeaturesCard
          icon={<GiMolecule className="h-6 w-6" />}
          title="Step 2: AI-Powered Analysis"
          description="Our AI interprets your data and predicts the ideal ingredient blend."
          titleClassName="bg-gradient-to-r from-blue-400 to-indigo-500"
          iconColor="text-blue-400"
        />
        
        {/* Fragrance creation step */}
        <FeaturesCard
          icon={<GiTestTubes className="h-6 w-6" />}
          title="Step 3: Creating Your Scent"
          description="We craft your unique perfume using the AI-recommended ingredients."
          titleClassName="bg-gradient-to-r from-indigo-400 to-purple-500"
          iconColor="text-indigo-400"
        />
      </div>
    </div>
  );
};

// Main section wrapper with ID for navigation targeting
export default function HowItWorks() {
  return (
    <section 
      id="how-it-works" 
      aria-label="How it works section" 
      className="relative py-12 md:py-16 lg:py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <HowItWorksContent />
      </div>
    </section>
  );
}
