'use client';

import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { FiZap, FiTarget, FiDroplet, FiCode, FiRefreshCw } from 'react-icons/fi';
import { StepProps } from '@/types/components';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';

// Interface for particle data
interface Particle {
  top: string;
  left: string;
  animationDuration: string;
  animationDelay: string;
}

function Step({ number, title, description, image }: StepProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  // Store particles in state with initial empty array
  const [particles, setParticles] = useState<Particle[]>([]);
  
  // Generate particles on client-side only
  useEffect(() => {
    const newParticles = Array(8).fill(null).map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      animationDuration: `${3 + Math.random() * 5}s`,
      animationDelay: `${Math.random() * 5}s`
    }));
    setParticles(newParticles);
  }, []);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2 
      } 
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  // Icons for each step
  const icons = [
    <FiZap key="1" />,
    <FiDroplet key="2" />,
    <FiTarget key="3" />,
    <FiCode key="4" />,
    <FiRefreshCw key="5" />
  ];

  return (
    <motion.div 
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={`mb-24 last:mb-0 flex flex-col ${number % 2 === 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-20 items-center`}
    >
      <motion.div variants={itemVariants} className="flex-1 w-full">
        <div className="relative h-[350px] w-full rounded-2xl overflow-hidden shadow-2xl border border-gray-800 bg-black/20 backdrop-blur-sm">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/20 to-transparent"></div>
          
          <Image
            src={image}
            alt={title}
            fill
            className="object-contain p-6 z-10"
          />
          
          {/* Floating particles - now using client-side generated particles */}
          <div className="absolute inset-0 overflow-hidden">
            {particles.map((particle, i) => (
              <div 
                key={i}
                className="absolute rounded-full bg-indigo-500/30 w-4 h-4"
                style={{
                  top: particle.top,
                  left: particle.left,
                  animation: `float ${particle.animationDuration} ease-in-out infinite`,
                  animationDelay: particle.animationDelay
                }}
              ></div>
            ))}
          </div>
        </div>
      </motion.div>
      
      <motion.div variants={itemVariants} className="flex-1">
        <div className="flex items-start gap-5">
          <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-indigo-900/70 backdrop-blur-sm border border-indigo-700 flex items-center justify-center text-indigo-400 text-xl relative">
            <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-indigo-600 text-white text-xs flex items-center justify-center font-bold">{number}</span>
            {icons[number-1]}
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
            <p className="text-gray-400 text-lg leading-relaxed">{description}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const steps = [
    {
      number: 1,
      title: "Collecting Skin Data",
      description: "Start your journey by obtaining various biomarkers such as pH, skin type, body temperature, and oil levels by visiting a local dermatologist.",
      image: "/images/skin-data.svg",
    },
    {
      number: 2,
      title: "AI-Powered Analysis",
      description: "Our AI analyzes your skin biomarkers using interdisciplinary datasets from chemistry, dermatology, and perfumery, with research APIs to access the latest knowledge.",
      image: "/images/ai-analysis.svg",
    },
    {
      number: 3,
      title: "Creating Scent Profile",
      description: "A human perfumer works with you to explore a range of scents based on the initial analysis, ensuring your preferences are perfectly captured.",
      image: "/images/scent-profile.svg",
    },
    {
      number: 4,
      title: "Custom Formula Generation",
      description: "Our LLM predicts the optimal blend of ingredients, producing a bespoke fragrance that ensures consistent performance and longevity.",
      image: "/images/formula-generation.svg",
    },
    {
      number: 5,
      title: "Continuous Optimization",
      description: "A built-in feedback loop refines future formulations based on your experience, ensuring your perfume evolves with you.",
      image: "/images/optimization.svg",
    },
  ];

  return (
    <Section 
      id="how-it-works" 
      background="bg-gray-950 relative overflow-hidden"
      spacing="large"
    >
      {/* Gradient borders */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-y-0 left-0 w-[1px] bg-gradient-to-b from-transparent via-indigo-500/20 to-transparent"></div>
        <div className="absolute inset-y-0 right-0 w-[1px] bg-gradient-to-b from-transparent via-indigo-500/20 to-transparent"></div>
        <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent"></div>
        <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent"></div>
      </div>
      
      <Container>
        <div ref={ref} className="relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <div className="inline-flex rounded-full bg-indigo-900/30 border border-indigo-800/50 backdrop-blur-sm px-3 py-1 text-sm font-medium text-indigo-400 mb-4">
              The Process
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">How It Works</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our scientific approach combines AI technology with perfumery expertise to create your perfect signature scent.
            </p>
          </motion.div>
          
          <div className="relative">
            {/* Connected line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-indigo-800/50 hidden lg:block"></div>
            
            <div className="mt-16">
              {steps.map((step) => (
                <Step key={step.number} {...step} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
} 