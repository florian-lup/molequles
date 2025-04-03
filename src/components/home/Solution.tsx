'use client';

import { useRef } from 'react';
import { FiCode, FiUser, FiDroplet, FiTrendingUp } from 'react-icons/fi';
import { motion, useInView } from 'framer-motion';
import Section from '@/components/ui/Section';
import SectionHeader from '@/components/ui/SectionHeader';
import Container from '@/components/ui/Container';

// Feature card with hover effects
const FeatureIcon = ({ icon, title, description }: any) => {
  return (
    <div className="bg-gray-900/60 backdrop-blur-sm border border-indigo-800/30 rounded-xl p-4 group hover:bg-indigo-900/20 transition-colors duration-300 h-full">
      <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-indigo-900/50 text-indigo-400 mb-4 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-white mb-1">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  );
};

// Benefit card with gradient border
const BenefitCard = ({ title, description, index }: any) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
      className="relative p-[1px] rounded-xl overflow-hidden group"
    >
      {/* Gradient border */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 opacity-70"></div>
      
      {/* Inner content */}
      <div className="relative bg-gray-900/95 backdrop-blur-sm p-6 rounded-[10px] h-full">
        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-indigo-600/20 via-purple-600/20 to-transparent rounded-bl-[40px] -mt-5 -mr-5"></div>
        
        <h3 className="text-xl font-semibold text-white mb-3 relative">{title}</h3>
        <p className="text-gray-300 relative">{description}</p>
      </div>
    </motion.div>
  );
};

export default function Solution() {
  const solutionFeatures = [
    {
      title: "AI Analysis",
      description: "Advanced algorithms analyze your unique skin profile",
      icon: <FiCode className="w-6 h-6" />
    },
    {
      title: "Skin Chemistry",
      description: "Biomarkers form your unique scent identity",
      icon: <FiUser className="w-6 h-6" />
    },
    {
      title: "Custom Formula",
      description: "Precisely calculated blend of complementary notes",
      icon: <FiDroplet className="w-6 h-6" />
    },
    {
      title: "Adaptive Learning",
      description: "Continuous refinement based on your feedback",
      icon: <FiTrendingUp className="w-6 h-6" />
    }
  ];

  const keyBenefits = [
    {
      title: "Personalized to Your Skin",
      description: "Instead of forcing your skin to adapt to a generic formula, we create a bespoke scent that works in harmony with your unique body chemistry."
    },
    {
      title: "Scientific Precision",
      description: "Our AI analyzes hundreds of datapoints from your skin biomarkers to predict how different ingredients will interact with your body chemistry."
    },
    {
      title: "Constantly Evolving",
      description: "Your perfume formula evolves as our AI learns from your feedback, ensuring your signature scent always performs perfectly."
    }
  ];

  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Section background="bg-gray-950 relative overflow-hidden">
      {/* Gradient borders */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-800/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-800/50 to-transparent"></div>
      </div>
      
      <Container>
        <div ref={ref} className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <SectionHeader 
              title="Our AI-Driven Solution"
              titleAccent="AI-Driven Solution"
              description="We've reimagined perfumery by combining cutting-edge AI with personalized skin chemistry analysis."
              badge="The Molequles Approach"
              textColor="text-white"
              accentColor="text-indigo-400"
              badgeColor="text-indigo-400"
              badgeBg="bg-indigo-900/50"
            />
          </motion.div>
          
          <div className="flex flex-col lg:flex-row gap-16 items-center mt-12">
            <motion.div 
              className="flex-1 relative"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {/* Solution visualization */}
              <div className="relative mx-auto max-w-md">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 via-purple-600/20 to-pink-600/20 rounded-2xl blur-xl"></div>
                
                <div className="relative bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 shadow-2xl">
                  <div className="grid grid-cols-2 gap-4">
                    {solutionFeatures.map((feature, index) => (
                      <FeatureIcon 
                        key={index}
                        icon={feature.icon}
                        title={feature.title}
                        description={feature.description}
                      />
                    ))}
                  </div>
                  
                  {/* Connecting lines between elements */}
                  <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full border-2 border-indigo-500/30 flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-indigo-900/80 flex items-center justify-center">
                        <span className="text-indigo-300 text-xl">AI</span>
                      </div>
                    </div>
                    
                    <svg width="100%" height="100%" viewBox="0 0 300 300" className="absolute inset-0 stroke-indigo-500/30">
                      <line x1="50" y1="80" x2="150" y2="150" strokeWidth="2" />
                      <line x1="250" y1="80" x2="150" y2="150" strokeWidth="2" />
                      <line x1="50" y1="220" x2="150" y2="150" strokeWidth="2" />
                      <line x1="250" y1="220" x2="150" y2="150" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <div className="flex-1 text-center lg:text-left">
              <div className="space-y-6">
                {keyBenefits.map((benefit, index) => (
                  <BenefitCard
                    key={index}
                    title={benefit.title}
                    description={benefit.description}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
} 