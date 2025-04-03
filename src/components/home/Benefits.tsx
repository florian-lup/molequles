import { FaFingerprint, FaClock, FaShieldAlt, FaLeaf } from 'react-icons/fa';
import Section from '@/components/ui/Section';
import SectionHeader from '@/components/ui/SectionHeader';
import ContentGrid from '@/components/ui/ContentGrid';
import FeatureCard from '@/components/ui/FeatureCard';

export default function Benefits() {
  const benefits = [
    {
      title: "Personalized Signature Scent",
      description: "Enjoy a fragrance that is uniquely tailored to your skin's chemistry, creating a scent that feels inherently yours.",
      icon: <FaFingerprint />,
    },
    {
      title: "Enhanced Longevity",
      description: "Benefit from a perfume that performs reliably throughout the day, maintaining its intended balance and evolution on your skin.",
      icon: <FaClock />,
    },
    {
      title: "Reduced Allergy Risks",
      description: "Experience fewer irritations by eliminating ingredients that trigger sensitivities, ensuring a safer wearing experience.",
      icon: <FaShieldAlt />,
    },
    {
      title: "Efficiency",
      description: "Save time and money by avoiding endless experimentation through precise formulations.",
      icon: <FaLeaf />,
    },
  ];

  return (
    <Section id="benefits" background="bg-gray-50">
      <SectionHeader 
        title="Benefits that Make a Difference"
        description="Experience the advantages of AI-driven perfume creation tailored to your unique body chemistry."
      />
      
      <ContentGrid columns={4} gap="large">
        {benefits.map((benefit, index) => (
          <FeatureCard 
            key={index}
            icon={benefit.icon}
            title={benefit.title}
            description={benefit.description}
          />
        ))}
      </ContentGrid>
    </Section>
  );
} 