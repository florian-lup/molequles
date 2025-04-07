import { ReactNode } from 'react';

export interface StepProps {
  number: number;
  title: string;
  description: string;
  image?: string;
  icon?: ReactNode;
}

export interface HeaderProps {} 