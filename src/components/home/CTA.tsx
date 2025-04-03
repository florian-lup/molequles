import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import SectionHeader from '@/components/ui/SectionHeader';
import { FiCheck, FiArrowRight } from 'react-icons/fi';

export default function CTA() {
  const benefits = [
    "Personalized to your unique skin chemistry",
    "Sustainable and cruelty-free ingredients",
    "Free shipping and 100% satisfaction guarantee",
    "Expert consultation with perfume scientists",
  ];

  return (
    <Section 
      id="start-journey" 
      background="bg-gradient-to-br from-indigo-600 to-purple-700"
      spacing="large"
    >
      <div className="mx-auto max-w-7xl px-6 py-8 sm:py-12">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <div className="lg:pr-8">
            <div className="inline-flex mb-6 items-center rounded-full bg-indigo-500/20 px-3 py-1 text-sm font-medium text-white">
              <span className="mr-2 flex h-1.5 w-1.5 rounded-full bg-white"></span>
              Limited time offer
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">
              Ready to Discover Your Perfect Scent?
            </h2>
            <p className="text-lg leading-8 text-indigo-100 mb-8">
              Join the revolution in personalized perfumery and experience a fragrance as unique as you are. Sign up today for exclusive early access.
            </p>
            
            <ul className="space-y-3 mb-8">
              {benefits.map((benefit, idx) => (
                <li key={idx} className="flex gap-3">
                  <FiCheck className="h-6 w-5 flex-none text-indigo-300" aria-hidden="true" />
                  <span className="text-white">{benefit}</span>
                </li>
              ))}
            </ul>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="/signup"
                size="large"
                variant="secondary"
                icon={<FiArrowRight />}
              >
                Get Started
              </Button>
              <Button
                href="#testimonials"
                size="large"
                variant="outline"
                className="text-white border-white/30 hover:bg-white/10"
              >
                See Testimonials
              </Button>
            </div>
          </div>
          
          <div className="relative lg:mt-0">
            <div className="relative overflow-hidden rounded-2xl bg-indigo-50/10 p-8 shadow-2xl backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-300/10 to-purple-300/10"></div>
              <div className="relative">
                <div className="text-base font-semibold leading-7 text-white">
                  <div className="mb-3 flex items-center">
                    <div className="flex-shrink-0">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 border border-indigo-500 backdrop-blur-sm">
                        <span className="text-xl">✨</span>
                      </span>
                    </div>
                    <h3 className="ml-4 text-xl font-semibold text-white">Early Access Offer</h3>
                  </div>
                  <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20">
                    <p className="text-white/80 mb-4">Sign up today to receive:</p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center text-sm">
                        <span className="mr-2 font-bold">•</span>
                        <span>20% off your first order</span>
                      </li>
                      <li className="flex items-center text-sm">
                        <span className="mr-2 font-bold">•</span>
                        <span>Complimentary scent consultation</span>
                      </li>
                      <li className="flex items-center text-sm">
                        <span className="mr-2 font-bold">•</span>
                        <span>Exclusive preview of new fragrances</span>
                      </li>
                    </ul>
                    <Button
                      href="/signup"
                      size="medium"
                      variant="gradient"
                      fullWidth
                    >
                      Join the Waitlist
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
} 