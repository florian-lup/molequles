'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Badge from '@/components/ui/Badge';
import { FiArrowRight } from 'react-icons/fi';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
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
      className="py-12 md:py-0"
      aria-label="Hero section"
    >
      {/* Gradient borders */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-800/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-800/50 to-transparent"></div>
      </div>
      
      <Container>
        <div ref={heroRef} className="flex flex-col lg:flex-row lg:items-center min-h-[calc(100vh-5rem)] md:min-h-screen gap-8 lg:gap-16">
          {/* Left content panel */}
          <motion.div 
            className="flex-1 pt-16 md:pt-24 lg:pt-32 pb-8 lg:pb-16 flex flex-col justify-center z-10"
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
              className="text-lg md:text-xl text-gray-300 max-w-md lg:max-w-xl mb-6 md:mb-8 leading-relaxed"
            >
              Discover fragrances tailored to your unique body chemistry through our innovative AI technology.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-8 md:mb-12">
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
          
          {/* Right visual panel */}
          <div className="flex-1 relative order-first lg:order-last">
            {/* SVG visualization panel */}
            <div 
              ref={floatingImageRef} 
              className="relative w-full h-full flex items-center justify-center p-4 md:p-8 lg:p-12"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
                className="relative w-full max-w-sm md:max-w-md mx-auto h-[300px] md:h-[400px] lg:h-[500px] flex items-center justify-center"
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
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
} 