'use client';

import Image from 'next/image';
import Badge from '../ui/Badge';

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-white overflow-hidden flex flex-col">
      {/* Grid Background */}
      <div className="absolute inset-0 z-0">
        <div className="h-full w-full" 
          style={{
            backgroundImage: 'linear-gradient(to right, #f0f0f0 1px, transparent 1px), linear-gradient(to bottom, #f0f0f0 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            backgroundPosition: 'center center'
          }}
        />
        {/* Radial gradient overlay */}
        <div 
          className="absolute inset-0" 
          style={{
            background: 'radial-gradient(circle at center, transparent 30%, rgba(255,255,255,0.6) 70%, white 100%)'
          }}
        />
      </div>
      
      <div className="container mx-auto z-10 flex flex-col flex-1 justify-end">
        {/* Main Title Section - Top */}
          <div className="text-center max-w-4xl mx-auto pb-10 px-4">
            {/* Badge */}
            <div className="mb-8">
              <Badge text="Free Samples Available" />
          </div>
            <h1 className="text-2xl md:text-5xl lg:text-5xl text-black mt-4 md:mt-6 leading-tight tracking-tight">
              Personalized fragrances engineered with AI for your skin chemistry
            </h1>
          </div>
        
        {/* Image Section - Bottom */}
        <div className="flex items-end justify-center">
          <div className="relative w-full max-w-4xl mx-auto" style={{ height: "50vh" }}>
            <Image
              src="/images/hero_image.webp"
              alt="Adaptive Robotic Mannequin"
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 896px"
              className="object-contain object-bottom"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
