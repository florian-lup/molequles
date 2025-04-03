import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import SectionHeader from '@/components/ui/SectionHeader';

export default function CTA() {
  return (
    <Section 
      id="start-journey" 
      background="bg-gradient-to-r from-purple-600 to-indigo-600 text-white"
    >
      <div className="text-center">
        <SectionHeader
          title="Ready to Discover Your Perfect Scent?"
          description="Join the revolution in personalized perfumery and experience a fragrance as unique as you are."
          textColor="text-white"
          badgeColor="text-purple-100"
        />
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Button
            href="/signup"
            size="medium"
            className="bg-white text-purple-600 hover:shadow-lg hover:scale-105"
          >
            Get Started
          </Button>
          <Button
            href="/contact"
            className="border-white text-white hover:bg-white/10 border"
            size="medium"
          >
            Contact Us
          </Button>
        </div>
      </div>
    </Section>
  );
} 