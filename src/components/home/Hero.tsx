import Image from 'next/image';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-violet-50 to-white dark:from-violet-950 dark:to-black py-20 md:py-28">
      <Container>
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 mb-6">
              Your Perfect Scent, Scientifically Crafted
            </h1>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl">
              Molequles leverages AI to create personalized perfumes based on your unique skin chemistry. Experience a fragrance that's truly yours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button href="#start-journey" variant="primary" size="medium">
                Start Your Journey
              </Button>
              <Button href="#how-it-works" variant="outline" size="medium">
                How It Works
              </Button>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="relative h-[400px] w-full max-w-[500px] mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400/30 to-indigo-400/30 rounded-full blur-3xl"></div>
              <Image
                src="/perfume-illustration.svg"
                alt="Personalized Perfume Illustration"
                fill
                priority
                className="object-contain z-10 drop-shadow-xl"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
} 