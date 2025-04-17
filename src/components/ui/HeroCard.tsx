'use client';

import { useClientSide } from '@/hooks/useClientSide';
import { motion } from 'framer-motion';
import { createPercentageAnimation, createFlowAnimation } from '@/utils/animationUtils';
import { TbFlask, TbAtom, TbTemperature, TbDroplet, TbCircleHalf, TbRulerMeasure } from 'react-icons/tb';

// Display component for skin chemistry metrics with animated values
const SkinChemistryDisplay = () => {
  const isClient = useClientSide();
  
  // Initialize animation hooks for different skin metrics
  const sebumAnimation = createPercentageAnimation(isClient, 75);
  const tempAnimation = createPercentageAnimation(isClient, 33);
  const phLevelAnimation = createPercentageAnimation(isClient, 5);
  const hydrationAnimation = createPercentageAnimation(isClient, 60);

  return (
    <div className="mb-10 lg:mb-6">
      {/* Section header with icon */}
      <div className="flex items-center mb-3 border-b border-cyan-900/50 pb-2">
        <div className="mr-2 text-cyan-500">
          <TbFlask size={18} />
        </div>
        <h3 className="text-xs md:text-sm font-semibold text-cyan-400 uppercase tracking-wide">
          Skin Chemistry
        </h3>
      </div>
      {/* Metrics grid with 4 measurement cards */}
      <div className="grid grid-cols-4 gap-2 md:gap-3">
        {/* Sebum measurement card with animation */}
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

        {/* Temperature measurement card with animation */}
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

        {/* pH Level measurement card with animation */}
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

        {/* Hydration measurement card with animation */}
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

// Display component for fragrance notes with animated flow indicators
const FragranceNotesDisplay = () => {
  const isClient = useClientSide();
  
  // Configure animations for different fragrance note types
  const topNoteAnimation = createFlowAnimation(50, 80, 8);
  const midNoteAnimation = createFlowAnimation(60, 90, 10);
  const baseNoteAnimation = createFlowAnimation(40, 70, 12);
  
  return (
    <div>
      {/* Section header with icon */}
      <div className="flex items-center mb-3 border-b border-cyan-900/50 pb-2">
        <div className="mr-2 text-indigo-500">
          <TbAtom size={18} />
        </div>
        <h3 className="text-xs md:text-sm font-semibold text-indigo-400 uppercase tracking-wide">
          Fragrance Profile
        </h3>
      </div>
      <div className="space-y-3">
        {/* Top notes with animated background */}
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

        {/* Middle/heart notes with animated background */}
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

        {/* Base notes with animated background */}
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

// Main product features panel that combines skin chemistry and fragrance displays
const ProductFeaturesPanel = () => (
  <div className="w-full bg-gradient-to-b from-gray-900 to-gray-950 rounded-xl p-5 border border-cyan-900/50 shadow-xl">
    <SkinChemistryDisplay />
    <FragranceNotesDisplay />
  </div>
);

export default ProductFeaturesPanel;