import { IconType } from 'react-icons';

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