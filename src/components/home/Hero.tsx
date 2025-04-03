import Image from 'next/image';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { FiArrowRight } from 'react-icons/fi';

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-indigo-50/70 to-white pb-16 pt-20 sm:pb-24 sm:pt-32">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-indigo-100/60 blur-3xl"></div>
        <div className="absolute top-40 -left-40 w-80 h-80 rounded-full bg-purple-100/50 blur-3xl"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-gradient-to-b from-transparent to-white/80"></div>
      </div>

      <Container>
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          <div className="flex-1 text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
            <div className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10 mb-6">
              <span className="inline-block relative">
                <span className="absolute inset-0 animate-ping rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-600 mr-2"></span>
              </span>
              Launching Soon
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 mb-6 leading-tight">
              Your Perfect Scent, Scientifically Crafted
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-700 mb-8 leading-relaxed">
              Molequles leverages AI to create personalized perfumes based on your unique skin chemistry. Experience a fragrance that's truly yours.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                href="#start-journey" 
                size="large"
                variant="gradient"
                icon={<FiArrowRight />}
              >
                Start Your Journey
              </Button>
              <Button 
                href="#how-it-works" 
                size="large"
                variant="outline"
              >
                Learn How It Works
              </Button>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-100 grid grid-cols-3 gap-4">
              {[
                { number: '10k+', label: 'Happy Customers' },
                { number: '99%', label: 'Satisfaction Rate' },
                { number: '100%', label: 'Unique Formulas' }
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <p className="text-2xl font-bold text-indigo-600">{stat.number}</p>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex-1 relative">
            <div className="relative h-[400px] sm:h-[500px] w-full max-w-[500px] mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-300/30 to-purple-300/30 rounded-full blur-3xl"></div>
              <Image
                src="/perfume-illustration.svg"
                alt="Personalized Perfume Illustration"
                fill
                priority
                className="object-contain z-10 drop-shadow-xl animate-float"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
} 