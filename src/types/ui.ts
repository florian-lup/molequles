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
  containerSize?: 'small' | 'default' | 'large' | 'full';
  spacing?: 'small' | 'medium' | 'large';
  divider?: boolean;
  containerClassName?: string;
}

export interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  iconBg?: string;
  iconColor?: string;
  titleColor?: string;
  descriptionColor?: string;
  className?: string;
  variant?: 'default' | 'elevated' | 'outline' | 'filled';
  clickable?: boolean;
}

export interface ContentGridProps {
  children: ReactNode;
  columns?: 1 | 2 | 3 | 4;
  gap?: 'small' | 'medium' | 'large' | 'xlarge';
  className?: string;
  equalHeight?: boolean;
  center?: boolean;
  responsive?: boolean;
}

export interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: 'small' | 'default' | 'large' | 'full';
  padding?: boolean;
}

export interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'gradient';
  size?: 'small' | 'medium' | 'large';
  className?: string;
  fullWidth?: boolean;
  icon?: ReactNode;
} 