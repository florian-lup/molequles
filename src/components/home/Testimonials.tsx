import Image from 'next/image';
import { ImQuotesLeft } from 'react-icons/im';
import { TestimonialProps } from '@/types/components';

function Testimonial({ quote, name, title, avatar }: TestimonialProps) {
  return (
    <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col h-full">
      <div className="mb-4">
        <ImQuotesLeft className="h-8 w-8 text-purple-400" />
      </div>
      <p className="text-gray-700 dark:text-gray-300 mb-6 flex-grow">{quote}</p>
      <div className="flex items-center">
        <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
          <Image
            src={avatar}
            alt={name}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 dark:text-white">{name}</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">{title}</p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const testimonials = [
    {
      quote: "I've always struggled to find a perfume that lasts on my skin. Molequles created a scent that not only stays all day but evolves beautifully with my body chemistry.",
      name: "Sarah Johnson",
      title: "Marketing Executive",
      avatar: "/avatars/testimonial-1.jpg",
    },
    {
      quote: "After years of allergic reactions to commercial fragrances, I can finally wear a perfume without worry. My Molequles scent is gentle on my sensitive skin but still complex and sophisticated.",
      name: "Michael Chen",
      title: "Software Engineer",
      avatar: "/avatars/testimonial-2.jpg",
    },
    {
      quote: "The science behind Molequles is impressive, but it's the results that won me over. My personalized scent truly feels like an extension of myself rather than something I'm wearing.",
      name: "Aisha Patel",
      title: "Dermatologist",
      avatar: "/avatars/testimonial-3.jpg",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">What Our Customers Say</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Discover how Molequles has transformed the fragrance experience for our customers.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
} 