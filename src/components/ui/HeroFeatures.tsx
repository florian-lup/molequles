'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { createPercentageAnimation, createFlowAnimation } from '@/utils/animationUtils';
import { TbFlask, TbAtom, TbTemperature, TbDroplet, TbCircleHalf, TbRulerMeasure } from 'react-icons/tb';

// Displays skin chemistry metrics with animated values
const SkinChemistryDisplay = () => {
  const [isClient, setIsClient] = useState(false);

  // Enable animations only after client-side hydration
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  // Get animations for each metric
  const sebumAnimation = createPercentageAnimation(isClient, 75);
  const tempAnimation = createPercentageAnimation(isClient, 33);
  const phLevelAnimation = createPercentageAnimation(isClient, 5);
  const hydrationAnimation = createPercentageAnimation(isClient, 60);

  return (
    <div className="mb-10 lg:mb-6">
      <div className="flex items-center mb-3 border-b border-cyan-900/50 pb-2">
        <div className="mr-2 text-cyan-500">
          <TbFlask size={18} />
        </div>
        <h3 className="text-xs md:text-sm font-mono font-semibold text-cyan-400 uppercase tracking-wide">
          Skin Chemistry
        </h3>
      </div>
      <div className="grid grid-cols-4 gap-2 md:gap-3">
        {/* Sebum */}
        <div className="bg-cyan-900/20 border border-cyan-800/20 rounded-lg p-1.5 md:p-2 text-center">
          <div className="flex justify-center text-cyan-500 mb-1">
            <TbDroplet size={16} />
          </div>
          <motion.div
            animate={sebumAnimation.animation.animate}
            transition={sebumAnimation.animation.transition}
            onUpdate={(latest) => {
              if (typeof latest.number === 'number') {
                sebumAnimation.count.set(latest.number);
              }
            }}
            className="text-base md:text-lg font-bold text-cyan-400"
          >
            <motion.span>{sebumAnimation.rounded}</motion.span>
            <span className="text-xs font-normal"> μg</span>
          </motion.div>
          <div className="text-xs md:text-sm text-gray-400">Sebum</div>
        </div>

        {/* Temperature */}
        <div className="bg-cyan-900/20 border border-cyan-800/20 rounded-lg p-1.5 md:p-2 text-center">
          <div className="flex justify-center text-blue-500 mb-1">
            <TbTemperature size={16} />
          </div>
          <motion.div
            animate={tempAnimation.animation.animate}
            transition={tempAnimation.animation.transition}
            onUpdate={(latest) => {
              if (typeof latest.number === 'number') {
                tempAnimation.count.set(latest.number);
              }
            }}
            className="text-base md:text-lg font-bold text-blue-400"
          >
            <motion.span>{tempAnimation.rounded}</motion.span>
            <span className="text-xs font-normal"> °C</span>
          </motion.div>
          <div className="text-xs md:text-sm text-gray-400">Temp</div>
        </div>

        {/* pH Level */}
        <div className="bg-cyan-900/20 border border-cyan-800/20 rounded-lg p-1.5 md:p-2 text-center">
          <div className="flex justify-center text-indigo-500 mb-1">
            <TbRulerMeasure size={16} />
          </div>
          <motion.div
            animate={phLevelAnimation.animation.animate}
            transition={phLevelAnimation.animation.transition}
            onUpdate={(latest) => {
              if (typeof latest.number === 'number') {
                phLevelAnimation.count.set(latest.number);
              }
            }}
            className="text-base md:text-lg font-bold text-indigo-400"
          >
            <span className="text-xs font-normal">~</span>
            <motion.span>{phLevelAnimation.rounded}</motion.span>
          </motion.div>
          <div className="text-xs md:text-sm text-gray-400">pH Level</div>
        </div>

        {/* Hydration */}
        <div className="bg-cyan-900/20 border border-cyan-800/20 rounded-lg p-1.5 md:p-2 text-center">
          <div className="flex justify-center text-cyan-500 mb-1">
            <TbCircleHalf size={16} />
          </div>
          <motion.div
            animate={hydrationAnimation.animation.animate}
            transition={hydrationAnimation.animation.transition}
            onUpdate={(latest) => {
              if (typeof latest.number === 'number') {
                hydrationAnimation.count.set(latest.number);
              }
            }}
            className="text-base md:text-lg font-bold text-cyan-400"
          >
            <motion.span>{hydrationAnimation.rounded}</motion.span>
            <span className="text-xs font-normal"> AU</span>
          </motion.div>
          <div className="text-xs md:text-sm text-gray-400">Hydration</div>
        </div>
      </div>
    </div>
  );
};

// Displays fragrance notes breakdown
const FragranceNotesDisplay = () => {
  const [, setIsClient] = useState(false);

  // Enable animations only after client-side hydration
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  // Create flow animations for each note
  const topNoteAnimation = createFlowAnimation(50, 80, 8);
  const midNoteAnimation = createFlowAnimation(60, 90, 10);
  const baseNoteAnimation = createFlowAnimation(40, 70, 12);
  
  return (
    <div>
      <div className="flex items-center mb-3 border-b border-cyan-900/50 pb-2">
        <div className="mr-2 text-indigo-500">
          <TbAtom size={18} />
        </div>
        <h3 className="text-xs md:text-sm font-mono font-semibold text-indigo-400 uppercase tracking-wide">
          Fragrance Profile
        </h3>
      </div>
      <div className="space-y-3">
        {/* Top Notes */}
        <div className="bg-gradient-to-r from-cyan-900/20 to-blue-900/20 rounded-lg p-2 border border-cyan-900/30 relative overflow-hidden">
          <div className="flex items-center relative z-10">
            <span className="text-xs text-cyan-500 font-bold mr-2">TOP.NOTES:</span>
            <span className="text-xs text-gray-300">Bergamot, Lemon</span>
          </div>
          <motion.div 
            className="absolute inset-0 bg-cyan-500/10 z-0 origin-left"
            {...topNoteAnimation}
          />
        </div>

        {/* Heart Notes */}
        <div className="bg-gradient-to-r from-blue-900/20 to-indigo-900/20 rounded-lg p-2 border border-indigo-900/30 relative overflow-hidden">
          <div className="flex items-center relative z-10">
            <span className="text-xs text-blue-500 font-bold mr-2">MID.NOTES:</span>
            <span className="text-xs text-gray-300">Lavender, Neroli, Rose Absolute</span>
          </div>
          <motion.div 
            className="absolute inset-0 bg-blue-500/10 z-0 origin-left"
            {...midNoteAnimation}
          />
        </div>

        {/* Base Notes */}
        <div className="bg-gradient-to-r from-indigo-900/20 to-blue-900/30 rounded-lg p-2 border border-blue-900/30 relative overflow-hidden">
          <div className="flex items-center relative z-10">
            <span className="text-xs text-indigo-500 font-bold mr-2">BASE.NOTES:</span>
            <span className="text-xs text-gray-300">Sandalwood, Vetiver, Amber Accord</span>
          </div>
          <motion.div 
            className="absolute inset-0 bg-indigo-500/10 z-0 origin-left" 
            {...baseNoteAnimation}
          />
        </div>
      </div>
    </div>
  );
};

// Container for skin chemistry and fragrance notes displays
const ProductFeaturesPanel = () => (
  <div className="w-full bg-gray-900/80 backdrop-blur-sm rounded-xl p-5 border border-cyan-900/30 shadow-inner shadow-cyan-500/5">
    <SkinChemistryDisplay />
    <FragranceNotesDisplay />
  </div>
);

export default ProductFeaturesPanel;