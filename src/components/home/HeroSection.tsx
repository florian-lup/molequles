'use client';

import { memo } from 'react';
import Image from 'next/image';
import Badge from '@/components/ui/badge';
import Section from '@/components/layout/section';

const HeroSection = memo(() => {
  return (
    <Section
      className="min-h-screen flex flex-col"
      containerClassName="flex flex-col flex-1 justify-end px-2 sm:px-4 lg:px-6"
      padding="xs"
      maxWidth="full"
      showFrame={false}
    >
      {/* Grid Background */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              'linear-gradient(to right, #f0f0f0 1px, transparent 1px), linear-gradient(to bottom, #f0f0f0 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            backgroundPosition: 'center center',
          }}
        />
        {/* Improved radial gradient overlay for better mobile visibility */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(circle at center, transparent 20%, rgba(255,255,255,0.4) 50%, white 90%)',
          }}
        />
      </div>

      {/* Main Title Section - Top - Better mobile spacing */}
      <div className="text-center max-w-4xl mx-auto pb-4 sm:pb-6 md:pb-8 z-10">
        {/* Badge - responsive sizing */}
        <div className="mb-3 sm:mb-4">
          <Badge text="Free Samples Available" variant="success" textSize="xs" />
        </div>
        {/* Improved responsive typography */}
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mt-2 leading-tight sm:leading-relaxed font-bold px-2 sm:px-4">
          Fragrances engineered with AI for your skin chemistry
        </h1>
      </div>

      {/* Image Section - Bottom - Better mobile sizing and positioning */}
      <div className="flex items-end justify-center z-10">
        <div
          className="relative w-full max-w-4xl mx-auto"
          style={{
            height: 'clamp(300px, 45vh, 600px)' // More responsive height
          }}
        >
          <Image
            src="/images/hero_image.webp"
            alt="Adaptive robotic mannequin representing AI-powered fragrance personalization technology"
            fill
            priority
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 896px"
            className="object-contain object-bottom"
          />
        </div>
      </div>
    </Section>
  );
});

HeroSection.displayName = 'HeroSection';

export default HeroSection;
