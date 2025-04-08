import { ReactNode } from 'react';

export interface BadgeProps {
  children: ReactNode;
  icon?: ReactNode;
  color?: 'default' | 'primary' | 'secondary' | 'brand' | 'custom';
  customColors?: {
    text?: string;
    bg?: string;
    border?: string;
  };
  withPulse?: boolean;
  className?: string;
}

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
  spacing?: 'none' | 'small' | 'medium' | 'large' | 'xlarge';
  divider?: boolean;
  containerClassName?: string;
  fullWidth?: boolean;
}

export interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'glass' | 'minimal' | 'neon' | 'outline';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  shape?: 'rounded' | 'pill' | 'square';
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  ariaLabel?: string;
  type?: 'button' | 'submit' | 'reset';
} 