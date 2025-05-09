import Header from '@/components/layout/Header';
import Hero from '@/components/home/Hero';
import Solution from '@/components/home/Solution';
import HowItWorks from '@/components/home/HowItWorks';
import Pricing from '@/components/home/Pricing';
import CTA from '@/components/home/CTA';
import Footer from '@/components/layout/Footer';
import { Metadata } from 'next';
import RawIngredients from '@/components/home/RawIngredients';
import SkinChemistry from '@/components/home/SkinChemistry';

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
        <Hero />
        <Solution />
        <RawIngredients />
        <SkinChemistry />
        <HowItWorks />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
