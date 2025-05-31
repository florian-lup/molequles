'use client';

import { memo, useMemo } from 'react';
import { motion } from 'framer-motion';
import { FiStar, FiUsers, FiTrendingUp, FiAward } from 'react-icons/fi';
import Card from '@/components/ui/card';
import Section from '@/components/layout/section';

interface Testimonial {
  readonly id: string;
  readonly name: string;
  readonly role: string;
  readonly content: string;
  readonly rating: number;
}

interface Stat {
  readonly id: string;
  readonly icon: React.ReactNode;
  readonly value: string;
  readonly label: string;
}

const TestimonialCard = memo(({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <Card className="h-full">
      {/* Star rating */}
      <div className="flex mb-4" role="img" aria-label={`${testimonial.rating} out of 5 stars`}>
        {Array.from({ length: testimonial.rating }, (_, i) => (
          <FiStar key={i} className="h-4 w-4 text-yellow-400 fill-current" aria-hidden="true" />
        ))}
      </div>

      {/* Testimonial content */}
      <blockquote className="text-sm md:text-base text-gray-600 mb-4 leading-relaxed">
        &quot;{testimonial.content}&quot;
      </blockquote>

      {/* Author info */}
      <footer className="mt-auto">
        <p className="font-semibold text-black text-sm">{testimonial.name}</p>
        <p className="text-xs text-gray-500">{testimonial.role}</p>
      </footer>
    </Card>
  );
});

TestimonialCard.displayName = 'TestimonialCard';

const StatsGrid = memo(() => {
  const stats: readonly Stat[] = useMemo(
    () => [
      {
        id: 'customers',
        icon: <FiUsers className="h-6 w-6 text-emerald-600" />,
        value: '2,500+',
        label: 'Happy Customers',
      },
      {
        id: 'rating',
        icon: <FiStar className="h-6 w-6 text-emerald-600" />,
        value: '4.9/5',
        label: 'Average Rating',
      },
      {
        id: 'satisfaction',
        icon: <FiTrendingUp className="h-6 w-6 text-emerald-600" />,
        value: '95%',
        label: 'Satisfaction Rate',
      },
      {
        id: 'guarantee',
        icon: <FiAward className="h-6 w-6 text-emerald-600" />,
        value: '30-Day',
        label: 'Guarantee',
      },
    ],
    []
  );

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
      {stats.map((stat) => (
        <Card key={stat.id} className="text-center">
          <div className="flex justify-center mb-3" aria-hidden="true">
            {stat.icon}
          </div>
          <p className="text-xl md:text-2xl font-bold text-black mb-1">{stat.value}</p>
          <p className="text-xs md:text-sm text-gray-600">{stat.label}</p>
        </Card>
      ))}
    </div>
  );
});

StatsGrid.displayName = 'StatsGrid';

const SocialProof = memo(() => {
  const testimonials: readonly Testimonial[] = useMemo(
    () => [
      {
        id: 'sarah',
        name: 'Sarah Chen',
        role: 'Marketing Director',
        content:
          'Finally, a fragrance that actually lasts all day on my skin! The personalization process was fascinating and the results exceeded my expectations.',
        rating: 5,
      },
      {
        id: 'michael',
        name: 'Dr. Michael Rodriguez',
        role: 'Dermatologist',
        content:
          "As a dermatologist, I'm impressed by their scientific approach. The skin chemistry analysis is thorough and the allergen avoidance is excellent.",
        rating: 5,
      },
      {
        id: 'emma',
        name: 'Emma Thompson',
        role: 'Beta Tester',
        content:
          "I've tried dozens of perfumes that never worked with my skin chemistry. Molequles created something truly unique that feels like it was made just for me.",
        rating: 5,
      },
      {
        id: 'alex',
        name: 'Alex Rivera',
        role: 'Fashion Blogger',
        content:
          'The AI recommendations were spot-on! My personalized fragrance gets compliments everywhere I go. This is the future of perfumery.',
        rating: 5,
      },
      {
        id: 'jordan',
        name: 'Jordan Kim',
        role: 'Fragrance Collector',
        content:
          'After collecting fragrances for 15 years, I thought I knew what worked for me. Molequles proved me wrong in the best way possible.',
        rating: 5,
      },
      {
        id: 'sophie',
        name: 'Sophie Laurent',
        role: 'Beauty Editor',
        content:
          'The science behind this is remarkable. Finally, a brand that understands that fragrance is deeply personal and uses technology to solve real problems.',
        rating: 5,
      },
      {
        id: 'marcus',
        name: 'Marcus Johnson',
        role: 'Entrepreneur',
        content:
          'I was skeptical about personalized fragrances, but the skin analysis results were incredibly detailed. My custom scent is absolutely perfect.',
        rating: 5,
      },
      {
        id: 'ava',
        name: 'Ava Martinez',
        role: 'Content Creator',
        content:
          'This fragrance adapts to my skin like nothing else. The longevity is incredible and it evolves beautifully throughout the day.',
        rating: 5,
      },
    ],
    []
  );

  // Duplicate testimonials for seamless looping
  const duplicatedTestimonials = useMemo(() => [...testimonials, ...testimonials], [testimonials]);

  return (
    <Section
      id="social-proof"
      ariaLabel="Social proof section"
      maxWidth="6xl"
      padding="md"
      frameStyle="bold"
      showFrame={false}
    >
      {/* Section heading */}
      <div className="text-center mb-12">
        <div className="relative inline-block">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-black to-emerald-600 bg-clip-text text-transparent">
            Featured in
          </h2>
          {/* Decorative underline */}
          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full" />
        </div>
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 mt-8">
          <div className="text-gray-400 font-medium text-sm md:text-base">TechCrunch</div>
          <div className="text-gray-400 font-medium text-sm md:text-base">Forbes</div>
          <div className="text-gray-400 font-medium text-sm md:text-base">Wired</div>
          <div className="text-gray-400 font-medium text-sm md:text-base">Beauty Magazine</div>
        </div>
      </div>

      {/* Statistics grid */}
      <StatsGrid />

      {/* Continuous testimonials carousel */}
      <div className="mb-12 overflow-hidden">
        <motion.div
          className="flex gap-6"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            duration: testimonials.length * 4,
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'loop',
          }}
        >
          {duplicatedTestimonials.map((testimonial, index) => (
            <div key={`${testimonial.id}-${index}`} className="min-w-[300px] md:min-w-[350px]">
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
});

SocialProof.displayName = 'SocialProof';

export default SocialProof;
