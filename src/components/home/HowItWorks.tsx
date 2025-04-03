import Image from 'next/image';
import { StepProps } from '@/types/components';

function Step({ number, title, description, image }: StepProps) {
  return (
    <div className="flex flex-col md:flex-row items-center gap-8 mb-20">
      <div className={`flex-1 order-2 ${number % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
        <div className="relative h-72 w-full">
          <Image
            src={image}
            alt={title}
            fill
            className="object-contain rounded-lg"
          />
        </div>
      </div>
      <div className={`flex-1 order-1 ${number % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
        <div className="flex items-center mb-4">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400 font-bold text-xl mr-4">
            {number}
          </div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{title}</h3>
        </div>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: "Collecting Skin Data",
      description: "Start your journey by obtaining various biomarkers such as pH, skin type, body temperature, and oil levels by visiting a local dermatologist.",
      image: "/images/skin-data.svg",
    },
    {
      number: 2,
      title: "AI-Powered Analysis",
      description: "Our AI analyzes your skin biomarkers using interdisciplinary datasets from chemistry, dermatology, and perfumery, with research APIs to access the latest knowledge.",
      image: "/images/ai-analysis.svg",
    },
    {
      number: 3,
      title: "Creating Scent Profile",
      description: "A human perfumer works with you to explore a range of scents based on the initial analysis, ensuring your preferences are perfectly captured.",
      image: "/images/scent-profile.svg",
    },
    {
      number: 4,
      title: "Custom Formula Generation",
      description: "Our LLM predicts the optimal blend of ingredients, producing a bespoke fragrance that ensures consistent performance and longevity.",
      image: "/images/formula-generation.svg",
    },
    {
      number: 5,
      title: "Continuous Optimization",
      description: "A built-in feedback loop refines future formulations based on your experience, ensuring your perfume evolves with you.",
      image: "/images/optimization.svg",
    },
  ];

  return (
    <section id="how-it-works" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">How It Works</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Our scientific approach combines AI technology with perfumery expertise to create your perfect signature scent.
          </p>
        </div>
        
        <div className="mt-12">
          {steps.map((step) => (
            <Step key={step.number} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
} 