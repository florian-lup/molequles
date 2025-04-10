'use client';

import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { FiArrowRight } from 'react-icons/fi';
import { useWaitlist } from '@/contexts/WaitlistContext';
import { CTADecorations } from '@/components/ui/decorations/BackgroundCircles';

// Component for the formula breakdown card
const FormulaBreakdown = () => {
  const formulaElements = [
    { name: 'Citrus', percentage: 35, color: 'bg-blue-400' },
    { name: 'Floral', percentage: 25, color: 'bg-pink-400' },
    { name: 'Woody', percentage: 20, color: 'bg-amber-400' },
    { name: 'Spice', percentage: 15, color: 'bg-red-400' }
  ];

  return (
    <div className="w-full max-w-md bg-gray-900/50 backdrop-blur-md rounded-xl p-4 xs:p-5 sm:p-6 md:p-7 shadow-2xl border border-gray-800/60">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-indigo-400 to-cyan-400">
            Molequles
          </h3>
        </div>
        <span className="text-xs px-2.5 py-1 rounded-full bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">BETA</span>
      </div>
      
      <hr className="border-gray-700/50 mb-5" />

      <div className="mb-6">
        <h4 className="text-xl font-semibold text-white mb-2">Your Custom Scent Formula</h4>
        <p className="text-sm text-gray-300 mb-6">Personalized just for you based on your profile</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {formulaElements.map((element, index) => (
            <div key={index} className="bg-gray-800/50 rounded-lg p-3">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-white/90">{element.name}</span>
                <span className="text-xs font-medium text-gray-400">{element.percentage}%</span>
              </div>
              <div className="w-full h-2 bg-gray-700/50 rounded-full overflow-hidden">
                <div className={`h-full ${element.color} rounded-full`} style={{ width: `${element.percentage}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="w-full bg-gray-800/40 rounded-lg p-3 text-center pointer-events-none">
        <span className="text-sm font-medium text-white">
          Your Personalized Scent
        </span>
      </div>
    </div>
  );
};

export default function CTA() {
  const { openWaitlist } = useWaitlist();
  
  return (
    <div 
      id="cta" 
      className="bg-gray-950 relative w-full min-h-[550px] flex items-center justify-center overflow-hidden py-12 xs:py-16 sm:py-20 md:py-24"
      aria-label="Call to action section"
    >
      <CTADecorations />
      
      <div className="mx-auto max-w-7xl w-full px-5 sm:px-8 lg:px-10 relative">
        <div className="flex flex-col lg:flex-row items-center lg:items-center justify-center lg:justify-between gap-10 lg:gap-0">
          {/* Left panel - Content */}
          <div className="w-full max-w-xl lg:w-1/2 text-center lg:text-left flex flex-col h-full justify-center py-8 lg:py-16 lg:pr-8">
            <div className="mb-4 sm:mb-5">
              <Badge>Exclusive Launch Access</Badge>
            </div>
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold mb-4 xs:mb-5 sm:mb-6 md:mb-7 leading-tight text-white">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-indigo-400 to-cyan-400">
                Discover Your
              </span>
              <br />
              <span className="whitespace-nowrap">Signature Scent</span>
            </h2>
            <p className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-300 mb-8 xs:mb-9 sm:mb-10 md:mb-12 max-w-lg mx-auto lg:mx-0">
              Experience a one-of-a-kind fragrance, expertly personalized with AI technology to match the unique chemistry of your skin.
            </p>
            <div className="flex justify-center lg:justify-start">
              <Button
                variant="neon"
                size="md"
                shape="pill"
                icon={<FiArrowRight />}
                iconPosition="right"
                onClick={openWaitlist}
              >
                Join Waitlist
              </Button>
            </div>
          </div>

          {/* Right panel - Visual card */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-6 lg:mt-0">
            <FormulaBreakdown />
          </div>
        </div>
      </div>
    </div>
  );
}
