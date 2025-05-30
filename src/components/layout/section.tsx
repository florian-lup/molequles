import { ReactNode } from 'react';

interface SectionProps {
  id?: string;
  ariaLabel?: string;
  className?: string;
  containerClassName?: string;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | 'full';
  padding?: 'sm' | 'md' | 'lg' | 'xl';
  background?: 'white' | 'gray' | 'transparent';
  children: ReactNode;
}

const paddingClasses = {
  sm: 'py-8 md:py-12 lg:py-16',
  md: 'py-12 md:py-16 lg:py-20',
  lg: 'py-16 md:py-20 lg:py-24',
  xl: 'py-20 md:py-24 lg:py-28',
};

const maxWidthClasses = {
  sm: 'max-w-2xl',
  md: 'max-w-3xl',
  lg: 'max-w-4xl',
  xl: 'max-w-5xl',
  '2xl': 'max-w-6xl',
  '3xl': 'max-w-7xl',
  '4xl': 'max-w-screen-xl',
  '5xl': 'max-w-screen-2xl',
  '6xl': 'max-w-screen-3xl',
  '7xl': 'max-w-7xl',
  full: 'max-w-full',
};

const backgroundClasses = {
  white: 'bg-white',
  gray: 'bg-gray-50',
  transparent: 'bg-transparent',
};

export default function Section({
  id,
  ariaLabel,
  className = '',
  containerClassName = '',
  maxWidth = 'lg',
  padding = 'lg',
  background = 'white',
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className={`relative ${paddingClasses[padding]} ${backgroundClasses[background]} overflow-hidden ${className}`}
    >
      <div className={`container mx-auto px-4 ${maxWidthClasses[maxWidth]} z-10 relative ${containerClassName}`}>
        {children}
      </div>
    </section>
  );
}
