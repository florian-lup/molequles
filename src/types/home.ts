import { IconType } from 'react-icons';

export interface WaitlistCtaProps {
  openWaitlist: () => void;
}

export interface InfluenceData {
  factor: string;
  scentEffect?: string;
}

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