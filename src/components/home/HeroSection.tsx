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
      padding="sm"
      maxWidth="full"
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
        {/* Radial gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(circle at center, transparent 30%, rgba(255,255,255,0.6) 70%, white 100%)',
          }}
        />
      </div>

      {/* Main Title Section - Top */}
      <div className="text-center max-w-4xl mx-auto pb-5 z-10">
        {/* Badge */}
        <div className="mb-2">
          <Badge text="Free Samples Available" variant="success" />
        </div>
        <h1 className="text-2xl md:text-4xl lg:text-5xl mt-2 leading-relaxed font-bold">
          Fragrances engineered with AI for your skin chemistry
        </h1>
      </div>

      {/* Image Section - Bottom */}
      <div className="flex items-end justify-center z-10">
        <div className="relative w-full max-w-4xl mx-auto" style={{ height: '50vh' }}>
          <Image
            src="/images/hero_image.webp"
            alt="Adaptive robotic mannequin representing AI-powered fragrance personalization technology"
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 896px"
            className="object-contain object-bottom"
          />
        </div>
      </div>
    </Section>
  );
});

HeroSection.displayName = 'HeroSection';

export default HeroSection;
