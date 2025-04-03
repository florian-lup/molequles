import { FaRandom, FaHourglassHalf, FaAllergies, FaSync } from 'react-icons/fa';
import Section from '@/components/ui/Section';
import SectionHeader from '@/components/ui/SectionHeader';
import ContentGrid from '@/components/ui/ContentGrid';
import FeatureCard from '@/components/ui/FeatureCard';

export default function Problem() {
  const frustrations = [
    {
      title: "Unpredictable Results",
      description: "Scents that smell great in the bottle transform unpredictably on your skin",
      icon: <FaRandom />
    },
    {
      title: "Poor Longevity",
      description: "Fragrances that fade quickly or change character throughout the day",
      icon: <FaHourglassHalf />
    },
    {
      title: "Allergic Reactions",
      description: "Irritation and sensitivities from ingredients that don't work with your skin",
      icon: <FaAllergies />
    },
    {
      title: "Endless Trial & Error",
      description: "Wasted time and money testing countless fragrances trying to find \"the one\"",
      icon: <FaSync />
    }
  ];

  const challenges = [
    {
      title: "Generic Formulations",
      description: "Traditional perfumes are mass-produced with standardized formulas that completely ignore your unique body chemistry."
    },
    {
      title: "Skin Chemistry Mismatch",
      description: "Your skin's pH, oil levels, and natural scent can dramatically alter how a fragrance performs, yet traditional perfumery ignores these factors."
    },
    {
      title: "Fragrance Frustration",
      description: "The result is a fragrance market that forces you into a frustrating cycle of testing multiple scents that ultimately disappoint."
    }
  ];

  return (
    <Section background="bg-gray-900 text-white">
      <SectionHeader 
        title="The Problem with Traditional Perfumes"
        titleAccent="Traditional Perfumes"
        description="Generic, one-size-fits-all formulas ignore your individual skin chemistry, leading to unpredictable results."
        badge="The Challenge"
        textColor="text-white"
        accentColor="text-purple-400"
        badgeColor="text-purple-300"
        badgeBg="bg-gray-800"
      />

      <div className="flex flex-col md:flex-row gap-12 items-center">
        <div className="flex-1">
          <div className="bg-gray-800/60 border border-gray-700 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-purple-400 mb-6">Common Frustrations</h3>
            <ContentGrid columns={2} gap="medium">
              {frustrations.map((item, index) => (
                <FeatureCard
                  key={index}
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                  iconBg="bg-purple-900/60"
                  iconColor="text-purple-400"
                  titleColor="text-white"
                  descriptionColor="text-gray-300"
                />
              ))}
            </ContentGrid>
          </div>
        </div>

        <div className="flex-1">
          <div className="space-y-6">
            {challenges.map((item, index) => (
              <div key={index} className="bg-gray-800/60 border border-gray-700 p-5 rounded-lg">
                <h3 className="text-xl font-semibold text-purple-400 mb-2">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
} 