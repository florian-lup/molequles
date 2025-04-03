'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { FiMessageCircle, FiStar } from 'react-icons/fi';
import { TestimonialProps } from '@/types/components';

function Testimonial({ quote, name, title, avatar, index }: TestimonialProps & { index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay: 0.1 * index }}
      className="relative group"
    >
      {/* Card with glassmorphic effect */}
      <div className="relative p-[1px] rounded-2xl overflow-hidden group-hover:p-[1.5px] transition-all duration-300">
        {/* Gradient border */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/30 via-purple-600/30 to-pink-600/30 group-hover:from-indigo-500/50 group-hover:via-purple-500/50 group-hover:to-pink-500/50 transition-all duration-300"></div>
        
        {/* Glow effect */}
        <div className="absolute -inset-[1px] bg-gradient-to-br from-indigo-600/10 via-purple-600/10 to-pink-600/10 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Card content */}
        <div className="relative bg-gray-900/80 backdrop-blur-md p-8 rounded-2xl h-full flex flex-col">
          {/* Quote icon */}
          <div className="absolute top-8 right-8 text-indigo-600/20 text-5xl opacity-50">
            <FiMessageCircle />
          </div>
          
          {/* Rating stars */}
          <div className="flex mb-4">
            {[...Array(5)].map((_, i) => (
              <FiStar key={i} className="text-amber-400 mr-1 w-4 h-4 fill-current" />
            ))}
          </div>
          
          {/* Quote */}
          <p className="text-gray-300 flex-grow mb-6 relative z-10">{quote}</p>
          
          {/* Author info */}
          <div className="flex items-center mt-auto">
            <div className="relative h-12 w-12 rounded-full overflow-hidden border-2 border-indigo-600/50 mr-4">
              <Image
                src={avatar}
                alt={name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h4 className="font-semibold text-white">{name}</h4>
              <p className="text-sm text-indigo-300">{title}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
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
    <section className="relative py-24 overflow-hidden bg-gray-950">
      {/* Gradient borders */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent"></div>
      </div>
      
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center bg-indigo-900/30 border border-indigo-500/30 rounded-full px-4 py-1.5 text-indigo-300 text-sm font-medium mb-6 backdrop-blur-sm">
            <FiStar className="mr-2 h-4 w-4" />
            <span>Customer Stories</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Discover how Molequles has transformed the fragrance experience for people just like you.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
} 