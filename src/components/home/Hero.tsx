'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import Section from '@/components/ui/Section';
import Badge from '@/components/ui/Badge';
import { FiArrowRight } from 'react-icons/fi';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const floatingImageRef = useRef<HTMLDivElement>(null);
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
    }
  };

  return (
    <Section 
      id="hero"
      background="bg-gray-950 relative w-full overflow-hidden text-white"
      className="py-0"
      aria-label="Hero section"
    >
      {/* Gradient borders */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-800/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-800/50 to-transparent"></div>
      </div>
      
      <div className="mx-auto max-w-7xl px-4 sm:px-5 md:px-6 lg:px-8">
        <div 
          ref={heroRef} 
          className="flex flex-col lg:flex-row min-h-[calc(100vh-5rem)] md:min-h-screen"
        >
          {/* Left content panel */}
          <div className="w-full lg:flex-1 relative z-10 flex items-center justify-center lg:justify-center">
            <div 
              ref={contentRef}
              className="py-16 md:py-24 lg:py-0 w-full lg:max-w-xl lg:pr-0 lg:pl-12"
            >
              <motion.div 
                className="flex flex-col"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
              >
                <motion.div variants={itemVariants} className="mb-4 md:mb-6">
                  <Badge withPulse color="primary">UNIQUE FORMULATION</Badge>
                </motion.div>
                
                <motion.h1 
                  variants={itemVariants}
                  className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 leading-tight"
                >
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-indigo-400 to-cyan-400">Scientifically</span>
                  <br />
                  Crafted Scents
                </motion.h1>
                
                <motion.p 
                  variants={itemVariants}
                  className="text-lg md:text-xl text-gray-300 max-w-md mb-6 md:mb-8 leading-relaxed"
                >
                  Discover fragrances tailored to your unique body chemistry through our innovative AI technology.
                </motion.p>
                
                <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-8 md:mb-10">
                  <Button
                    variant="neon"
                    size="lg"
                    shape="pill"
                    icon={<FiArrowRight />}
                    iconPosition="right"
                    href="#start-journey"
                  >
                    Get Free Samples
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </div>
          
          {/* Right visual panel - hidden on small and medium screens (mobile & tablets) */}
          <div className="hidden lg:flex flex-1 relative order-first lg:order-last items-center justify-center">
            {/* SVG visualization panel */}
            <div 
              ref={floatingImageRef} 
              className="py-16 md:py-24 lg:py-0 w-full lg:max-w-xl lg:pl-0 lg:pr-12"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
                className="relative w-full max-w-sm md:max-w-md lg:max-w-lg ml-auto h-[300px] md:h-[400px] lg:h-[500px] flex items-center justify-end"
              >
                <motion.div 
                  className="p-6 md:p-8 bg-black/30 backdrop-blur-xl rounded-xl border border-indigo-800/30 shadow-xl"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 0.5 }}
                >
                  <Image
                    src="/images/skin-analysis.svg"
                    alt="Skin analysis and scent profile"
                    width={270}
                    height={210}
                    priority
                    className="w-full h-auto"
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Mobile-friendly visualization for small and medium screens */}
          <div className="lg:hidden flex flex-col items-center justify-center py-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative w-full max-w-xs mx-auto"
            >
              <div className="grid grid-cols-3 gap-4 mb-6">
                {[1, 2, 3].map((item) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 * item }}
                    className="aspect-square bg-indigo-900/30 backdrop-blur-sm rounded-lg border border-indigo-800/30 p-4 flex items-center justify-center"
                  >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-400 to-indigo-400 animate-pulse" />
                  </motion.div>
                ))}
              </div>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-center"
              >
                <p className="text-sm text-gray-300 mb-2">AI-Powered Scent</p>
                <div className="h-1 w-24 mx-auto bg-gradient-to-r from-pink-400 via-indigo-400 to-cyan-400 rounded-full" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </Section>
  );
} 