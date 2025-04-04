'use client';

import { useRef } from 'react';
import { FiRefreshCw, FiClock, FiAlertTriangle, FiSearch } from 'react-icons/fi';
import { motion, useInView } from 'framer-motion';
import Section from '@/components/ui/Section';
import SectionHeader from '@/components/ui/SectionHeader';

// Frustration card component with hover effects
const FrustrationCard = ({ icon, title, description, index }: any) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="backdrop-blur-sm bg-indigo-950/30 border border-indigo-800/30 rounded-xl p-5 relative overflow-hidden group"
    >
      {/* Animated gradient on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-800/10 to-purple-800/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="relative z-10">
        <div className="w-10 h-10 rounded-lg bg-indigo-900/50 border border-indigo-700/50 flex items-center justify-center text-indigo-400 mb-4 group-hover:text-white group-hover:bg-indigo-700/50 transition-all duration-300">
          {icon}
        </div>
        <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
    </motion.div>
  );
};

// Challenge card with reveal animation
const ChallengeCard = ({ title, description, index }: any) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
      transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
      className="bg-indigo-950/40 backdrop-blur-sm border border-indigo-800/40 p-6 rounded-xl relative overflow-hidden group"
    >
      {/* Top corner accent */}
      <div className="absolute top-0 right-0 w-20 h-20">
        <div className="absolute top-0 right-0 w-[150%] h-[150%] bg-gradient-to-bl from-indigo-600/20 to-transparent transform rotate-45 translate-x-1/2 -translate-y-1/2"></div>
      </div>
      
      <div className="relative z-10">
        <h3 className="text-xl font-semibold text-indigo-300 mb-3">{title}</h3>
        <p className="text-gray-300 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

export default function Problem() {
  const frustrations = [
    {
      title: "Unpredictable Results",
      description: "Scents that smell great in the bottle transform unpredictably on your skin",
      icon: <FiRefreshCw className="w-5 h-5" />
    },
    {
      title: "Poor Longevity",
      description: "Fragrances that fade quickly or change character throughout the day",
      icon: <FiClock className="w-5 h-5" />
    },
    {
      title: "Allergic Reactions",
      description: "Irritation and sensitivities from ingredients that don't work with your skin",
      icon: <FiAlertTriangle className="w-5 h-5" />
    },
    {
      title: "Endless Trial & Error",
      description: "Wasted time and money testing countless fragrances trying to find \"the one\"",
      icon: <FiSearch className="w-5 h-5" />
    }
  ];

  const challenges = [
    {
      title: "Generic Formulations",
      description: "Traditional perfumes are mass-produced with standardized formulas that completely ignore your unique body chemistry."
    },
    {
      title: "Skin Chemistry Mismatch",
      description: "Your skin's pH, oil levels, and natural scent can dramatically alter how a fragrance performs, yet traditional perfumery ignores these factors."
    },
    {
      title: "Fragrance Frustration",
      description: "The result is a fragrance market that forces you into a frustrating cycle of testing multiple scents that ultimately disappoint."
    }
  ];

  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Section 
      background="bg-gray-950 relative overflow-hidden" 
      spacing="large"
    >
      {/* Gradient borders */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-800/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-800/50 to-transparent"></div>
      </div>
      
      <div className="mx-auto max-w-7xl px-4 sm:px-5 md:px-6 lg:px-8">
        <div ref={ref} className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <SectionHeader 
              title=""
              description="Generic, one-size-fits-all formulas ignore your individual skin chemistry, leading to unpredictable results."
              badge="The Challenge"
              textColor="text-white"
              accentColor="text-indigo-400"
              badgeColor="text-indigo-400"
              badgeBg="bg-indigo-900/50"
            />
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="flex-1 w-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="relative p-1 rounded-2xl overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-purple-600/10 rounded-2xl"></div>
                <div className="bg-gray-950/80 backdrop-blur-sm rounded-2xl p-6 border border-indigo-800/30 relative">
                  <h3 className="text-xl font-semibold text-indigo-300 mb-6">Common Frustrations</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
                    {frustrations.map((item, index) => (
                      <FrustrationCard
                        key={index}
                        icon={item.icon}
                        title={item.title}
                        description={item.description}
                        index={index}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="flex-1 w-full">
              <div className="space-y-6">
                {challenges.map((item, index) => (
                  <ChallengeCard
                    key={index}
                    title={item.title}
                    description={item.description}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
} 