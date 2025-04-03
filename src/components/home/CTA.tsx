'use client';

import { useRef, useEffect } from 'react';
import { FiArrowUpRight, FiStar } from 'react-icons/fi';
import Button from '@/components/ui/Button';

export default function CTA() {
  const cardRef = useRef<HTMLDivElement>(null);
  
  // 3D card effect
  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = card.getBoundingClientRect();
      const x = (e.clientX - left) / width;
      const y = (e.clientY - top) / height;
      
      const rotateX = 5 - y * 10;
      const rotateY = x * 10 - 5;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };
    
    const handleMouseLeave = () => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    };
    
    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section className="relative overflow-hidden bg-gray-950">
      {/* Gradient borders */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-800/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-800/50 to-transparent"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="relative z-10">
            <div className="inline-flex items-center mb-6 bg-indigo-900/30 border border-indigo-800/50 backdrop-blur-sm px-3 py-1.5 rounded-full">
              <FiStar className="mr-2 text-indigo-400" />
              <span className="text-indigo-300 text-sm font-medium">Exclusive Launch Access</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-extrabold mb-8">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-indigo-400 to-indigo-500">
                Discover Your
              </span>
              <span className="block text-white mt-1">Signature Scent</span>
            </h2>
            
            <div className="space-y-6 mb-10">
              <p className="text-xl text-gray-400 font-light leading-relaxed">
                Experience a perfume as unique as your DNA. Our AI-powered fragrance technology creates custom scents that evolve with your body chemistry.
              </p>
              
              <div className="flex items-center space-x-6">
                <div className="flex -space-x-2">
                  {[
                    '/avatars/user-1.jpg',
                    '/avatars/user-2.jpg',
                    '/avatars/user-3.jpg',
                    '/avatars/user-4.jpg',
                  ].map((src, i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-gray-800 overflow-hidden bg-gray-900">
                      {/* Placeholder for avatar images */}
                      <div className={`w-full h-full bg-gradient-to-br ${
                        i % 4 === 0 ? 'from-indigo-600 to-indigo-700' :
                        i % 4 === 1 ? 'from-blue-600 to-indigo-700' :
                        i % 4 === 2 ? 'from-gray-600 to-gray-700' :
                        'from-indigo-700 to-blue-800'
                      }`}></div>
                    </div>
                  ))}
                  <div className="w-10 h-10 rounded-full border-2 border-gray-800 bg-indigo-900 flex items-center justify-center text-xs font-medium text-white">
                    +2K
                  </div>
                </div>
                <div className="text-gray-400">
                  <div className="flex items-center mb-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <FiStar key={i} className="w-4 h-4 fill-current text-amber-400" />
                    ))}
                  </div>
                  <p className="text-sm">From over 2,000 happy customers</p>
                </div>
              </div>
            </div>
            
            <Button 
              variant="primary"
              size="lg"
              icon={<FiArrowUpRight />}
              iconPosition="right"
              href="/signup"
              className="group"
            >
              Join Waitlist
            </Button>
          </div>
          
          {/* 3D interactive card */}
          <div 
            ref={cardRef}
            className="relative mx-auto max-w-md z-10 transition-all duration-200"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl p-[1px] relative">
              {/* Gradient border */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/30 via-purple-600/30 to-indigo-600/30"></div>
              
              <div className="h-full w-full rounded-2xl overflow-hidden bg-gray-900/80 backdrop-blur-sm flex flex-col relative">
                {/* Card header with branding */}
                <div className="px-6 py-4 border-b border-gray-800/50 flex justify-between items-center">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-600 to-indigo-700"></div>
                    <span className="font-medium text-white">Molequles</span>
                  </div>
                  <div className="text-xs text-gray-300 bg-gray-800/50 backdrop-blur-sm px-2 py-1 rounded">
                    BETA
                  </div>
                </div>
                
                {/* Card content */}
                <div className="flex-1 p-6 flex flex-col">
                  <div className="mb-6">
                    <h3 className="text-white text-xl font-medium mb-2">Your Custom Scent Formula</h3>
                    <p className="text-gray-400 text-sm">Personalized just for you based on your unique profile</p>
                  </div>
                  
                  <div className="flex-1 grid grid-cols-2 gap-3">
                    {[
                      { name: 'Citrus', percent: 35, color: 'from-amber-600 to-amber-700' },
                      { name: 'Floral', percent: 25, color: 'from-indigo-600 to-indigo-700' },
                      { name: 'Woody', percent: 20, color: 'from-gray-600 to-gray-700' },
                      { name: 'Spice', percent: 15, color: 'from-orange-700 to-orange-800' },
                      { name: 'Musk', percent: 5, color: 'from-indigo-700 to-indigo-800' },
                    ].map((note, i) => (
                      <div key={i} className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-3 border border-gray-700/30">
                        <div className="mb-2 flex justify-between">
                          <span className="text-white text-xs font-medium">{note.name}</span>
                          <span className="text-gray-400 text-xs">{note.percent}%</span>
                        </div>
                        <div className="h-2 bg-gray-900/60 rounded-full overflow-hidden">
                          <div 
                            className={`h-full rounded-full bg-gradient-to-r ${note.color}`} 
                            style={{ width: `${note.percent}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Card footer/CTA */}
                  <div className="mt-6 text-center">
                    <Button 
                      variant="glass" 
                      size="md" 
                      fullWidth
                    >
                      Generate Your Formula
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Glowing effect behind card */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-indigo-600/20 to-indigo-600/20 opacity-50 blur-xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
} 