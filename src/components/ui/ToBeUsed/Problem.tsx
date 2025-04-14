'use client';

import Badge from '@/components/ui/Badge';
import Tag from '@/components/ui/Tag';
import Container from '@/components/ui/layout/Container';
import Section from '@/components/ui/layout/Section';
import { motion } from 'framer-motion';
import { createPulsatingAnimation } from '@/utils/animationUtils';
import { useEffect, useState } from 'react';

// Define tags data
const tags = [
  { text: "Short-lived", colorIndex: 0 },
  { text: "Inconsistent", colorIndex: 1 },
  { text: "Skin irritation", colorIndex: 2 },
  { text: "Headaches", colorIndex: 0 },
  { text: "Time-consuming", colorIndex: 1 },
  { text: "Expensive", colorIndex: 2 }
];

// Define happiness meter emojis and labels
const happinessLevels = [
  { emoji: "😖", label: "Very Unhappy" },
  { emoji: "🙁", label: "Unhappy" },
  { emoji: "😐", label: "Neutral" },
  { emoji: "🙂", label: "Happy" },
  { emoji: "😄", label: "Very Happy" }
];

// Happiness meter component
const HappinessMeter = () => {
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  const pulsatingAnimation = createPulsatingAnimation(isClient);
  
  return (
    <div className="mb-4 mt-6">
      <p className="text-sm text-gray-300 mb-2">Customer satisfaction with traditional perfumes:</p>
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-full p-3 border border-gray-700/30">
        <div className="flex justify-between">
          {happinessLevels.map((level, index) => (
            <span key={index} className="text-center">
              {index < 3 ? (
                <motion.span 
                  className="text-xl sm:text-2xl md:text-3xl inline-block"
                  {...pulsatingAnimation}
                >
                  {level.emoji}
                </motion.span>
              ) : (
                <span className="text-xl sm:text-2xl md:text-3xl">
                  {level.emoji}
                </span>
              )}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

// Tags list component
const TagsList = () => {
  return (
    <div className="flex flex-wrap gap-2 xs:gap-2.5 sm:gap-3 mt-3 mb-1">
      {tags.map((tag, i) => (
        <Tag key={i} text={tag.text} colorIndex={tag.colorIndex as 0 | 1 | 2} />
      ))}
    </div>
  );
};

// Problem card component
const ProblemCard = () => {
  return (
    <div className="w-full">      
      {/* Happiness Meter */}
      <HappinessMeter />
      
      {/* Divider */}
      <div className="h-px w-full bg-gray-700 my-4"></div>
      
      {/* Tags section */}
      <TagsList />
    </div>
  );
};

export default function Problem() {
  return (
    <Section
      id="problem" 
      ariaLabel="Problem section"
    >
      <Container className="flex flex-col justify-center items-center">
        {/* Header section */}
        <div className="text-left w-full mb-4">
          <div className="mb-2">
            <Badge>The Challenge</Badge>
          </div>
          <h3 className="text-base md:text-2xl text-white mb-3 leading-relaxed">
            Traditional perfumes are mass-produced using standardized formulas that overlook individual skin chemistry, leading to inconsistent scents, poor performance, and allergic reactions.
          </h3>
          </div>
          
          {/* Main content */}
          <ProblemCard />
      </Container>
    </Section>
  );
} 