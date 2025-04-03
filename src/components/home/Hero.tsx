'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import { FiArrowRight, FiPlay } from 'react-icons/fi';

export default function Hero() {
  const floatingImageRef = useRef<HTMLDivElement>(null);
  
  // Parallax effect for floating elements
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!floatingImageRef.current) return;
      
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      
      // Move in opposite direction of mouse with limited range
      floatingImageRef.current.style.transform = `translate(${-x * 20}px, ${-y * 20}px)`;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
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
    <section className="relative w-full overflow-hidden bg-gray-950 text-white">
      {/* Gradient borders */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-800/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-800/50 to-transparent"></div>
      </div>
      
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row min-h-screen">
          {/* Left content panel */}
          <motion.div 
            className="flex-1 p-8 lg:p-16 flex flex-col justify-center z-10"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="mb-6">
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
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-indigo-400 to-cyan-400">Perfect</span>
              <br />
              Scent Awaits
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl text-gray-300 max-w-xl mb-8 leading-relaxed"
            >
              Discover fragrances tailored to your unique body chemistry through our innovative AI technology. Experience scents that evolve with you.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-12">
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
              
              <Button 
                variant="glass"
                size="lg"
                shape="pill"
                icon={<FiPlay />}
                iconPosition="left"
                onClick={() => alert('Video will play')}
              >
                Watch How It Works
              </Button>
            </motion.div>
            
            <motion.div variants={itemVariants} className="grid grid-cols-3 gap-6 border-t border-gray-800 pt-6">
              {[
                { value: '3.2M+', label: 'Unique Formulas' },
                { value: '99.4%', label: 'Match Rate' },
                { value: '24h', label: 'Creation Time' }
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">{stat.value}</p>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
          
          {/* Right visual panel */}
          <div className="flex-1 relative lg:border-l border-gray-800">
            <div className="absolute inset-0 overflow-hidden">
              {/* Diagonal gradient slash */}
              <div className="absolute top-0 -right-1/4 bottom-0 w-[150%] bg-gradient-to-r from-transparent via-indigo-900/30 to-indigo-800/50 transform -rotate-[15deg] origin-top-right"></div>
            </div>
            
            {/* Main perfume bottle visualization */}
            <div 
              ref={floatingImageRef} 
              className="relative w-full h-full flex items-center justify-center p-8"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9, rotateY: 45 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
                className="relative w-[80%] max-w-md h-auto aspect-[3/4]"
                style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
              >
                {/* 3D perfume bottle image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-64 h-64 sm:w-80 sm:h-80">
                    {/* Glow effect */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 opacity-30 blur-2xl"></div>
                    
                    {/* Product image */}
                    <Image
                      src="/perfume-illustration.svg"
                      alt="Molequles Perfume"
                      fill
                      className="object-contain drop-shadow-2xl"
                    />
                  </div>
                </div>
                
                {/* Floating elements */}
                <motion.div 
                  className="absolute -top-12 right-0 p-4 bg-black/30 backdrop-blur-xl rounded-xl border border-white/10 shadow-xl"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center">
                      <span className="text-lg">🧪</span>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">AI Analysis</p>
                      <p className="text-sm font-medium">Skin Chemistry Match</p>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="absolute -bottom-6 left-0 p-4 bg-black/30 backdrop-blur-xl rounded-xl border border-white/10 shadow-xl"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 0.5 }}
                >
                  <div className="w-40">
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
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 