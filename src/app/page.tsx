import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/home/HeroSection';
import { lazy, Suspense } from 'react';
import ErrorBoundary from '@/components/ui/ErrorBoundary';

// Lazy load below-the-fold components only
const ValueProposition = lazy(() => import('@/components/home/ValueProposition'));
const Features = lazy(() => import('@/components/home/Features'));
const SocialProof = lazy(() => import('@/components/home/SocialProof'));
const Pricing = lazy(() => import('@/components/home/Pricing'));
const Faq = lazy(() => import('@/components/home/Faq'));
const LeadCapture = lazy(() => import('@/components/home/LeadCapture'));

// Loading fallback component
const SectionLoader = () => (
  <div className="min-h-[400px] flex items-center justify-center">
    <div className="animate-pulse">
      <div className="h-8 w-64 bg-gray-200 rounded mx-auto mb-4"></div>
      <div className="h-4 w-96 bg-gray-200 rounded mx-auto mb-2"></div>
      <div className="h-4 w-80 bg-gray-200 rounded mx-auto"></div>
    </div>
  </div>
);

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero section loads immediately (above the fold) */}
        <HeroSection />

        {/* Wrap each lazy-loaded component in ErrorBoundary and Suspense */}
        <ErrorBoundary>
          <Suspense fallback={<SectionLoader />}>
            <ValueProposition />
          </Suspense>
        </ErrorBoundary>

        <ErrorBoundary>
          <Suspense fallback={<SectionLoader />}>
            <Features />
          </Suspense>
        </ErrorBoundary>

        <ErrorBoundary>
          <Suspense fallback={<SectionLoader />}>
            <SocialProof />
          </Suspense>
        </ErrorBoundary>

        <ErrorBoundary>
          <Suspense fallback={<SectionLoader />}>
            <Pricing />
          </Suspense>
        </ErrorBoundary>

        <ErrorBoundary>
          <Suspense fallback={<SectionLoader />}>
            <Faq />
          </Suspense>
        </ErrorBoundary>

        <ErrorBoundary>
          <Suspense fallback={<SectionLoader />}>
            <LeadCapture />
          </Suspense>
        </ErrorBoundary>
      </main>
      <Footer />
    </div>
  );
}
