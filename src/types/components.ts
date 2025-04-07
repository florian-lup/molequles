import { ReactNode } from 'react';

export interface TestimonialProps {
  quote: string;
  name: string;
  title: string;
  avatar: string;
}

export interface StepProps {
  number: number;
  title: string;
  description: string;
  image?: string;
  icon?: ReactNode;
}

export interface HeaderProps {} 