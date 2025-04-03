'use client';
import { useRef } from 'react';
import { FiUser, FiClock, FiShield, FiFeather } from 'react-icons/fi';
import { motion, useInView } from 'framer-motion';
import Section from '@/components/ui/Section';
import SectionHeader from '@/components/ui/SectionHeader';
import ContentGrid from '@/components/ui/ContentGrid';
import FeatureCard from '@/components/ui/FeatureCard';

export default function Benefits() {
  const benefits = [
    {
      title: "Personalized Signature Scent",
      description: "Enjoy a fragrance that is uniquely tailored to your skin's chemistry, creating a scent that feels inherently yours.",
      icon: <FiUser />,
    },
    {
      title: "Enhanced Longevity",
      description: "Benefit from a perfume that performs reliably throughout the day, maintaining its intended balance and evolution on your skin.",
      icon: <FiClock />,
    },
    {
      title: "Reduced Allergy Risks",
      description: "Experience fewer irritations by eliminating ingredients that trigger sensitivities, ensuring a safer wearing experience.",
      icon: <FiShield />,
    },
    {
      title: "Sustainability",
      description: "Save time and money by avoiding endless experimentation through precise formulations tailored exactly to you.",
      icon: <FiFeather />,
    },
  ];

  return (
    <Section 
      id="benefits" 
      background="bg-gray-950 relative overflow-hidden"
      spacing="large"
    >
      {/* Gradient borders */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-800/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-800/50 to-transparent"></div>
      </div>
      
      <div className="relative z-10">
        <SectionHeader 
          title=""
          description="Experience the advantages of AI-driven perfume creation tailored to your unique body chemistry."
          badge="Why Molequles"
          textColor="text-white"
          accentColor="text-indigo-400"
          badgeColor="text-indigo-400"
          badgeBg="bg-indigo-900/50"
        />
        
        <ContentGrid columns={2} gap="large" equalHeight>
          {benefits.map((benefit, index) => {
            const ref = useRef<HTMLDivElement>(null);
            const isInView = useInView(ref, { once: true, margin: "-100px" });
            
            return (
              <motion.div
                key={index}
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <FeatureCard
                  title={benefit.title}
                  description={benefit.description}
                  icon={benefit.icon}
                  className="border border-gray-800 bg-gray-900/40 backdrop-blur-sm group-hover:bg-gray-800/40"
                  iconBg="bg-indigo-900/50 backdrop-blur-sm border border-indigo-800/50 group-hover:bg-indigo-600/50"
                  iconColor="text-indigo-400 group-hover:text-white"
                  titleColor="text-white group-hover:text-indigo-300"
                  descriptionColor="text-gray-400 group-hover:text-gray-300"
                  variant="outline"
                  clickable
                />
              </motion.div>
            );
          })}
        </ContentGrid>
      </div>
    </Section>
  );
} 