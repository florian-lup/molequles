'use client';

import { memo, useMemo } from 'react';
import { FiStar, FiUsers, FiTrendingUp, FiAward } from 'react-icons/fi';
import Card from '@/components/ui/card';
import Badge from '@/components/ui/badge';
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

const PressSection = memo(() => {
  const pressLogos = useMemo(() => ['TechCrunch', 'Forbes', 'Wired', 'Beauty Magazine'], []);

  return (
    <div className="text-center mb-12">
      <p className="text-sm text-gray-500 mb-6">Featured in</p>
      <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
        {pressLogos.map((logo) => (
          <div key={logo} className="text-gray-400 font-medium text-sm md:text-base">
            {logo}
          </div>
        ))}
      </div>
    </div>
  );
});

PressSection.displayName = 'PressSection';

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
    ],
    []
  );

  const trustBadges = useMemo(
    () => [
      {
        id: 'guarantee',
        text: '30-Day Money Back Guarantee',
        variant: 'success' as const,
        icon: <FiAward className="h-3 w-3" />,
      },
      {
        id: 'cruelty-free',
        text: 'Cruelty-Free & Sustainable',
        variant: 'default' as const,
        icon: <span className="text-green-600">🌿</span>,
        showDot: false,
      },
      {
        id: 'dermatologist',
        text: 'Dermatologist Approved',
        variant: 'default' as const,
        icon: <span className="text-blue-600">🧪</span>,
        showDot: false,
      },
    ],
    []
  );

  return (
    <Section id="social-proof" ariaLabel="Social proof section" maxWidth="6xl" padding="md">
      {/* Section heading */}
      <div className="text-center mb-12">
        <div className="relative inline-block">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-black to-emerald-600 bg-clip-text text-transparent">
            Trusted by Fragrance Enthusiasts
          </h2>
          {/* Decorative underline */}
          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full" />
        </div>
        <p className="text-base md:text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
          Join thousands of satisfied customers who have discovered their perfect scent through our
          AI-powered personalization process.
        </p>
      </div>

      {/* Statistics grid */}
      <StatsGrid />

      {/* Testimonials grid */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>

      {/* Press mentions */}
      <PressSection />

      {/* Trust badges */}
      <div className="flex flex-wrap justify-center gap-4">
        {trustBadges.map((badge) => (
          <Badge
            key={badge.id}
            text={badge.text}
            variant={badge.variant}
            textSize="xs"
            icon={badge.icon}
            showDot={badge.showDot}
          />
        ))}
      </div>
    </Section>
  );
});

SocialProof.displayName = 'SocialProof';

export default SocialProof;
