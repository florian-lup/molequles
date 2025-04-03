import { ReactNode } from 'react';

export interface SectionHeaderProps {
  title: string;
  description?: string;
  badge?: string;
  titleAccent?: string;
  align?: 'left' | 'center' | 'right';
  textColor?: string;
  accentColor?: string;
  badgeColor?: string;
  badgeBg?: string;
  subtitle?: string;
  centered?: boolean;
}

export interface SectionProps {
  children: ReactNode;
  className?: string;
  background?: string;
  id?: string;
}

export interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  variant?: 'light' | 'dark';
  iconBg?: string;
  iconColor?: string;
  titleColor?: string;
  descriptionColor?: string;
  className?: string;
}

export interface ContentGridProps {
  children: ReactNode;
  columns?: 1 | 2 | 3 | 4;
  gap?: 'small' | 'medium' | 'large';
  className?: string;
}

export interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  className?: string;
  fullWidth?: boolean;
} 