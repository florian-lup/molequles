'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
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
              <span className="inline-flex items-center rounded-full border border-indigo-400/30 bg-indigo-900/30 backdrop-blur-sm px-3 py-1 text-sm font-medium text-indigo-300">
                <span className="mr-2 relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                </span>
                Redefining Fragrance
              </span>
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
              Discover fragrances tailored to your unique body chemistry through our innovative AI technology. Experience scents that evolve with you.
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
                Start Your Journey
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Right visual panel */}
          <div className="flex-1 relative order-first lg:order-last">
            {/* Main perfume bottle visualization */}
            <div 
              ref={floatingImageRef} 
              className="relative w-full h-full flex items-center justify-center p-4 md:p-8 lg:p-12"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9, rotateY: 45 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
                className="relative w-full max-w-sm md:max-w-md mx-auto h-[300px] md:h-[400px] lg:h-[500px]"
                style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
              >
                {/* 3D perfume bottle image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-60 h-60 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem]">
                    {/* Glow effect */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 opacity-30 blur-2xl"></div>
                    
                    {/* Product image */}
                    <Image
                      src="/perfume-illustration.svg"
                      alt="Molequles Perfume"
                      fill
                      priority
                      sizes="(max-width: 640px) 15rem, (max-width: 768px) 20rem, (max-width: 1024px) 24rem, 28rem"
                      className="object-contain drop-shadow-2xl"
                    />
                  </div>
                </div>
                
                {/* Floating elements - hidden on mobile, visible on tablets and up */}
                <div className="hidden sm:block">
                  <motion.div 
                    className="absolute bottom-4 -right-4 md:right-8 p-3 md:p-4 bg-black/30 backdrop-blur-xl rounded-xl border border-indigo-800/30 shadow-xl"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                  >
                    <div className="flex items-center gap-2 md:gap-3">
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center">
                        <span className="text-lg">🧪</span>
                      </div>
                      <div>
                        <p className="text-xs text-gray-400">AI Analysis</p>
                        <p className="text-xs md:text-sm font-medium">Skin Chemistry Match</p>
                      </div>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="absolute top-12 -left-4 md:left-8 p-3 md:p-4 bg-black/30 backdrop-blur-xl rounded-xl border border-indigo-800/30 shadow-xl"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 0.5 }}
                  >
                    <div className="w-32 md:w-40">
                      <p className="text-xs text-gray-400 mb-1">Scent Profile</p>
                      <div className="flex flex-col gap-1.5">
                        {[
                          { name: 'Citrus', value: 75, color: 'bg-yellow-400' },
                          { name: 'Floral', value: 40, color: 'bg-pink-400' },
                          { name: 'Musk', value: 30, color: 'bg-purple-400' },
                        ].map((note, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <p className="text-xs w-12">{note.name}</p>
                            <div className="flex-1 h-1.5 bg-gray-700/50 rounded-full overflow-hidden">
                              <div 
                                className={`h-full ${note.color} rounded-full`} 
                                style={{ width: `${note.value}%` }}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
} 