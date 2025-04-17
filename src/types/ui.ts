import { ReactNode } from 'react';

export interface BadgeProps {
  icon: ReactNode;
  text: string;
  highlight?: string;
  className?: string;
}

export interface FeaturesCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  gradientFrom?: string;
  gradientTo?: string;
  iconColor?: string;
  className?: string;
}

export interface ButtonProps {
  onClick: () => void;
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  rightIcon?: boolean;
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  type?: 'button' | 'submit' | 'reset';
}