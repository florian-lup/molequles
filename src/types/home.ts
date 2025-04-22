import { IconType } from 'react-icons';

/**
 * Props for waitlist call-to-action component
 */
export interface WaitlistCtaProps {
  openWaitlist: () => void;
}

/**
 * Data structure for scent influence factors
 */
export interface InfluenceData {
  factor: string;
  scentEffect?: string;
  gradient?: string;
  iconColor?: string;
  icon?: IconType;
}

/**
 * Properties for ingredient display components
 */
export interface IngredientData {
  name: string;
  percentage: number;
  bgGradient: string;
  borderColor: string;
  iconBg: string;
  iconColor: string;
  textColor: string;
  barGradient: string;
}

/**
 * Properties for pricing card components
 */
export interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  icon: IconType;
  iconColor: string;
  gradient: string;
  isPopular?: boolean;
} 