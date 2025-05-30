import Header from '@/components/layout/Header';
import HeroSection from '@/components/home/HeroSection';
import Solution from '@/components/home/ValueProposition';
import HowItWorks from '@/components/home/HowItWorks';
import Pricing from '@/components/home/Pricing';
import LeadCapture from '@/components/home/LeadCapture';
import Footer from '@/components/layout/Footer';
import { Metadata } from 'next';
import RawIngredients from '@/components/home/RawIngredients';
import SkinChemistry from '@/components/home/SkinChemistry';
import Faq from '@/components/home/Faq';
import SocialProof from '@/components/home/SocialProof';

export const metadata: Metadata = {
  title: 'Molequles | AI-Powered Personalized Perfumes',
  description:
    'Molequles leverages AI to create personalized perfumes based on your unique skin chemistry.',
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <Solution />
        <RawIngredients />
        <SkinChemistry />
        <HowItWorks />
        <SocialProof />
        <Pricing />
        <Faq />
        <LeadCapture />
      </main>
      <Footer />
    </div>
  );
}
