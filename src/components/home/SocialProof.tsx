'use client';

import { FiStar, FiUsers, FiTrendingUp, FiAward } from 'react-icons/fi';
import Card from '@/components/ui/card';
import Badge from '@/components/ui/badge';
import Section from '@/components/layout/section';

interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah Chen",
    role: "Marketing Director",
    content: "Finally, a fragrance that actually lasts all day on my skin! The personalization process was fascinating and the results exceeded my expectations.",
    rating: 5
  },
  {
    name: "Dr. Michael Rodriguez",
    role: "Dermatologist",
    content: "As a dermatologist, I'm impressed by their scientific approach. The skin chemistry analysis is thorough and the allergen avoidance is excellent.",
    rating: 5
  },
  {
    name: "Emma Thompson",
    role: "Beta Tester",
    content: "I've tried dozens of perfumes that never worked with my skin chemistry. Molequles created something truly unique that feels like it was made just for me.",
    rating: 5
  }
];

const stats = [
  {
    icon: <FiUsers className="h-6 w-6 text-emerald-600" />,
    value: "2,500+",
    label: "Happy Customers"
  },
  {
    icon: <FiStar className="h-6 w-6 text-emerald-600" />,
    value: "4.9/5",
    label: "Average Rating"
  },
  {
    icon: <FiTrendingUp className="h-6 w-6 text-emerald-600" />,
    value: "95%",
    label: "Satisfaction Rate"
  },
  {
    icon: <FiAward className="h-6 w-6 text-emerald-600" />,
    value: "30-Day",
    label: "Guarantee"
  }
];

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <Card className="h-full">
      {/* Star rating */}
      <div className="flex mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <FiStar key={i} className="h-4 w-4 text-yellow-400 fill-current" />
        ))}
      </div>

      {/* Testimonial content */}
      <p className="text-sm md:text-base text-gray-600 mb-4 leading-relaxed">
        "{testimonial.content}"
      </p>

      {/* Author info */}
      <div className="mt-auto">
        <p className="font-semibold text-black text-sm">{testimonial.name}</p>
        <p className="text-xs text-gray-500">{testimonial.role}</p>
      </div>
    </Card>
  );
};

const StatsGrid = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
      {stats.map((stat, index) => (
        <Card key={index} className="text-center">
          <div className="flex justify-center mb-3">
            {stat.icon}
          </div>
          <p className="text-xl md:text-2xl font-bold text-black mb-1">
            {stat.value}
          </p>
          <p className="text-xs md:text-sm text-gray-600">
            {stat.label}
          </p>
        </Card>
      ))}
    </div>
  );
};

const PressSection = () => {
  const pressLogos = [
    "TechCrunch", "Forbes", "Wired", "Beauty Magazine"
  ];

  return (
    <div className="text-center mb-12">
      <p className="text-sm text-gray-500 mb-6">Featured in</p>
      <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
        {pressLogos.map((logo, index) => (
          <div key={index} className="text-gray-400 font-medium text-sm md:text-base">
            {logo}
          </div>
        ))}
      </div>
    </div>
  );
};

export default function SocialProof() {
  return (
    <Section id="social-proof" ariaLabel="Social proof section" maxWidth="6xl" padding="md">
      {/* Section heading */}
      <div className="text-center mb-12">
        <div className="relative inline-block">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-black to-emerald-600 bg-clip-text text-transparent">
            Trusted by Fragrance Enthusiasts
          </h2>
          {/* Decorative underline */}
          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full"></div>
        </div>
        <p className="text-base md:text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
          Join thousands of satisfied customers who have discovered their perfect scent through our AI-powered personalization process.
        </p>
      </div>

      {/* Statistics grid */}
      <StatsGrid />

      {/* Testimonials grid */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} testimonial={testimonial} />
        ))}
      </div>

      {/* Press mentions */}
      <PressSection />

      {/* Trust badges */}
      <div className="flex flex-wrap justify-center gap-4">
        <Badge
          text="30-Day Money Back Guarantee"
          variant="success"
          textSize="xs"
          icon={<FiAward className="h-3 w-3" />}
        />
        <Badge
          text="Cruelty-Free & Sustainable"
          variant="default"
          textSize="xs"
          icon={<span className="text-green-600">🌿</span>}
          showDot={false}
        />
        <Badge
          text="Dermatologist Approved"
          variant="default"
          textSize="xs"
          icon={<span className="text-blue-600">🧪</span>}
          showDot={false}
        />
      </div>
    </Section>
  );
}





