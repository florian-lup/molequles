import { FaFlask, FaChartLine, FaFingerprint, FaRobot } from 'react-icons/fa';
import Section from '@/components/ui/Section';
import SectionHeader from '@/components/ui/SectionHeader';
import ContentGrid from '@/components/ui/ContentGrid';
import FeatureCard from '@/components/ui/FeatureCard';

export default function Solution() {
  const solutionFeatures = [
    {
      title: "AI Analysis",
      description: "Advanced algorithms analyze your unique skin profile",
      icon: <FaRobot />
    },
    {
      title: "Skin Chemistry",
      description: "Biomarkers form your unique scent identity",
      icon: <FaFingerprint />
    },
    {
      title: "Custom Formula",
      description: "Precisely calculated blend of complementary notes",
      icon: <FaFlask />
    },
    {
      title: "Adaptive Learning",
      description: "Continuous refinement based on your feedback",
      icon: <FaChartLine />
    }
  ];

  const keyBenefits = [
    {
      title: "Personalized to Your Skin",
      description: "Instead of forcing your skin to adapt to a generic formula, we create a bespoke scent that works in harmony with your unique body chemistry."
    },
    {
      title: "Scientific Precision",
      description: "Our AI analyzes hundreds of datapoints from your skin biomarkers to predict how different ingredients will interact with your body chemistry."
    },
    {
      title: "Constantly Evolving",
      description: "Your perfume formula evolves as our AI learns from your feedback, ensuring your signature scent always performs perfectly."
    }
  ];

  return (
    <Section background="bg-gradient-to-b from-gray-900 to-indigo-950">
      <SectionHeader 
        title="Our AI-Driven Solution"
        titleAccent="AI-Driven Solution"
        description="We've reimagined perfumery by combining cutting-edge AI with personalized skin chemistry analysis."
        badge="The Molequles Approach"
        textColor="text-white"
        accentColor="text-purple-400"
        badgeColor="text-purple-300"
        badgeBg="bg-indigo-900"
      />
      
      <div className="flex flex-col md:flex-row gap-12 items-center">
        <div className="flex-1 relative">
          <div className="relative h-[400px] w-full max-w-[500px] mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-lg blur-2xl"></div>
            <div className="relative z-10 bg-gray-800/60 border border-gray-700 p-10 rounded-lg h-full backdrop-blur-sm flex flex-col justify-center items-center">
              <ContentGrid columns={2} gap="medium" className="w-full">
                {solutionFeatures.map((feature, index) => (
                  <div key={index} className="p-4 bg-indigo-900/60 rounded-lg border border-indigo-700 flex flex-col items-center">
                    <div className="text-3xl text-purple-400 mb-3">{feature.icon}</div>
                    <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                    <p className="text-sm text-gray-300 text-center mt-2">{feature.description}</p>
                  </div>
                ))}
              </ContentGrid>
            </div>
          </div>
        </div>
        
        <div className="flex-1 text-center md:text-left">
          <div className="space-y-6">
            {keyBenefits.map((benefit, index) => (
              <div key={index} className="bg-indigo-900/40 border border-indigo-800 p-5 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
} 