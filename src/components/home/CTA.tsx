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
        
        <div className="flex justify-center mt-8">
          <Button
            href="/signup"
            size="medium"
            className="bg-white text-purple-600 hover:shadow-lg hover:scale-105"
          >
            Get Started
          </Button>
        </div>
      </div>
    </Section>
  );
} 