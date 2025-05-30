import { memo, type ReactNode } from 'react';

interface SectionProps {
  readonly id?: string;
  readonly ariaLabel?: string;
  readonly className?: string;
  readonly containerClassName?: string;
  readonly maxWidth?:
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | '2xl'
    | '3xl'
    | '4xl'
    | '5xl'
    | '6xl'
    | '7xl'
    | 'full';
  readonly padding?: 'sm' | 'md' | 'lg' | 'xl';
  readonly background?: 'white' | 'gray' | 'transparent';
  readonly children: ReactNode;
}

const paddingClasses = {
  sm: 'py-8 md:py-12 lg:py-16',
  md: 'py-12 md:py-16 lg:py-20',
  lg: 'py-16 md:py-20 lg:py-24',
  xl: 'py-20 md:py-24 lg:py-28',
} as const;

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
} as const;

const backgroundClasses = {
  white: 'bg-white',
  gray: 'bg-gray-50',
  transparent: 'bg-transparent',
} as const;

const Section = memo<SectionProps>(
  ({
    id,
    ariaLabel,
    className = '',
    containerClassName = '',
    maxWidth = 'lg',
    padding = 'lg',
    background = 'white',
    children,
  }) => {
    return (
      <section
        id={id}
        aria-label={ariaLabel}
        className={`relative ${paddingClasses[padding]} ${backgroundClasses[background]} overflow-hidden ${className}`}
      >
        <div
          className={`container mx-auto px-4 ${maxWidthClasses[maxWidth]} z-10 relative ${containerClassName}`}
        >
          {children}
        </div>
      </section>
    );
  }
);

Section.displayName = 'Section';

export default Section;
