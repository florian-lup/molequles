'use client';

import { FC } from 'react';
import Badge from '@/components/ui/Badge';
import Tag from '@/components/ui/Tag';
import Container from '@/components/ui/layout/Container';
import Section from '@/components/ui/layout/Section';

// Type definitions
interface BenefitCardProps {
  title: string;
  description: string;
  tags: { text: string; colorIndex: number }[];
  className?: string;
}

// Benefit card component
const BenefitCard: FC<BenefitCardProps> = ({ title, description, tags, className }) => {
  return (
    <div className={`bg-gray-900/40 rounded-xl p-3 xs:p-4 sm:p-5 md:p-6 border border-gray-800/50 hover:border-gray-700/70 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10 h-full flex flex-col ${className || ''}`}>
      <div className="mb-2 xs:mb-3 sm:mb-4 md:mb-5 flex items-center justify-between border-b border-gray-700/50 pb-1.5 flex-wrap gap-2">
        <h3 className="text-sm lg:text-base font-semibold text-white truncate mr-2">{title}</h3>
        <div className="flex flex-wrap gap-1 xs:gap-1.5 sm:gap-2">
          {tags.map((tag, i) => (
            <Tag key={i} text={tag.text} colorIndex={tag.colorIndex as 0 | 1 | 2} />
          ))}
        </div>
      </div>
      
      <p className="text-xs xs:text-sm sm:text-base text-gray-400 leading-relaxed mb-3 xs:mb-4 flex-grow">{description}</p>
    </div>
  );
};

// Benefits grid component
const BenefitsGrid = () => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 xs:gap-4 sm:gap-5 md:gap-6 lg:gap-8">
        {benefits.map((benefit, index) => (
          <BenefitCard
            key={index}
            title={benefit.title}
            description={benefit.description}
            tags={benefit.tags}
          />
        ))}
      </div>
    </div>
  );
};

// Define benefits data outside the component
const benefits = [
  {
    title: "Personalized Scent",
    description: "Enjoy a fragrance that is uniquely tailored to your skin's chemistry, creating a scent that feels inherently yours.",
    tags: [
      { text: "Custom formula", colorIndex: 0 },
      { text: "Signature scent", colorIndex: 2 }
    ]
  },
  {
    title: "Enhanced Longevity",
    description: "Benefit from a perfume that performs reliably throughout the day, maintaining its intended balance on your skin.",
    tags: [
      { text: "All-day wear", colorIndex: 1 },
      { text: "Stable scent", colorIndex: 0 }
    ]
  },
  {
    title: "Reduced Allergy Risks",
    description: "Experience fewer irritations by eliminating ingredients that trigger sensitivities, ensuring a safer wearing experience.",
    tags: [
      { text: "Hypoallergenic", colorIndex: 2 },
      { text: "Skin-safe", colorIndex: 1 }
    ]
  },
  {
    title: "Sustainability",
    description: "Save time and money by avoiding endless experimentation through precise formulations tailored exactly to you.",
    tags: [
      { text: "Cost-effective", colorIndex: 0 },
      { text: "Time-saving", colorIndex: 2 }
    ]
  }
];

export default function Benefits() {
  return (
    <Section
      id="benefits" 
      ariaLabel="Benefits section"
    >
      <Container className="flex flex-col justify-center items-center">
        {/* Header section */}
        <div className="text-left w-full mb-6 xs:mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <div className="mb-2 xs:mb-3 sm:mb-4">
            <Badge>Why Molequles</Badge>
          </div>
          <h3 className="text-base xs:text-lg sm:text-xl md:text-2xl text-white mb-2 xs:mb-3 leading-relaxed">
            Unlock smarter scents, greater skin compatibility, and more consistent performance beyond what traditional perfumery can offer.
          </h3>
        </div>

        {/* Benefits Grid */}
        <BenefitsGrid />
      </Container>
    </Section>
  );
}
