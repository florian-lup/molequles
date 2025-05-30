'use client';

import { useState } from 'react';
import { useWaitlist } from '@/hooks';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';

/**
 * Panel containing call-to-action message and waitlist form
 */
const CTAMessagePanel = () => {
  const { openWaitlist } = useWaitlist();
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    console.log('Form submitted:', formData);
    openWaitlist();
  };

  return (
    <div className="w-full text-center max-w-md mx-auto">
      {/* Centered headline */}
      <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-6 leading-tight text-black">
        Sign up for early access
      </h2>

      {/* Waitlist form */}
      <form onSubmit={handleSubmit} className="space-y-4 mb-6">
        <div className="grid grid-cols-2 gap-3">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleInputChange}
            className="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleInputChange}
            className="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
            required
          />
        </div>
        <input
          type="email"
          name="email"
          placeholder="Enter your email address"
          value={formData.email}
          onChange={handleInputChange}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
          required
        />
        <Button type="submit" size="lg" className="w-full" onClick={() => { }}>
          Join Waitlist
        </Button>
      </form>

      {/* Badge */}
      <div className="flex justify-center">
        <Badge
          text="Free Samples Available"
          textSize="xs"
          dotColor="bg-green-500"
          bgColor="bg-green-50"
          textColor="text-green-700"
        />
      </div>
    </div>
  );
};

/**
 * Main CTA section with waitlist signup form
 */
export default function CTA() {
  useWaitlist();

  return (
    <section
      id="cta"
      aria-label="Call to action section"
      className="relative py-16 md:py-20 lg:py-24 bg-white overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 z-0">
        <div
          className="h-3/4 w-full absolute left-0 right-0 top-1/2 -translate-y-1/2"
          style={{
            backgroundImage:
              'linear-gradient(to right, #f7f7f7 1px, transparent 1px), linear-gradient(to bottom, #f7f7f7 1px, transparent 1px)',
            backgroundSize: '30px 30px',
            backgroundPosition: 'center center',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(circle at center, transparent 10%, rgba(255,255,255,0.8) 80%, white 100%)',
          }}
        />
      </div>

      <div className="container mx-auto px-4 max-w-3xl z-10 relative">
        {/* Centered form layout */}
        <div className="flex flex-col items-center justify-center py-2 md:py-4">
          <CTAMessagePanel />
        </div>
      </div>
    </section>
  );
}
