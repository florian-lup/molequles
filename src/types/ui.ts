import { ReactNode } from 'react';

/**
 * Properties for feature card component
 */
export interface FeaturesCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  titleClassName?: string;
  iconColor?: string;
  className?: string;
}

/**
 * Properties for button component
 */
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