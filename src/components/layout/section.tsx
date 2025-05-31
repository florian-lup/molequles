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
  readonly padding?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  readonly background?: 'white' | 'gray' | 'transparent';
  readonly children: ReactNode;
  readonly showFrame?: boolean;
  readonly frameStyle?: 'default' | 'subtle' | 'bold' | 'gradient';
}

// Mobile-first responsive padding with better spacing control
const paddingClasses = {
  xs: 'py-6 sm:py-8 md:py-10',
  sm: 'py-8 sm:py-12 md:py-16',
  md: 'py-12 sm:py-16 md:py-20',
  lg: 'py-16 sm:py-20 md:py-24',
  xl: 'py-20 sm:py-24 md:py-28',
} as const;

// Improved responsive max-width classes
const maxWidthClasses = {
  sm: 'max-w-sm sm:max-w-lg',
  md: 'max-w-lg sm:max-w-2xl',
  lg: 'max-w-xl sm:max-w-3xl',
  xl: 'max-w-2xl sm:max-w-4xl',
  '2xl': 'max-w-3xl sm:max-w-5xl',
  '3xl': 'max-w-4xl sm:max-w-6xl',
  '4xl': 'max-w-5xl sm:max-w-7xl',
  '5xl': 'max-w-6xl sm:max-w-screen-xl',
  '6xl': 'max-w-7xl sm:max-w-screen-2xl',
  '7xl': 'max-w-screen-xl sm:max-w-screen-2xl',
  full: 'max-w-full',
} as const;

const backgroundClasses = {
  white: 'bg-white',
  gray: 'bg-gray-50',
  transparent: 'bg-transparent',
} as const;

const frameStyles = {
  default: 'border-2 border-gray-200 shadow-lg',
  subtle: 'border border-gray-100 shadow-sm',
  bold: 'border-4 border-gray-300 shadow-xl',
  gradient:
    'border-2 border-transparent bg-gradient-to-r from-emerald-200 via-gray-200 to-emerald-200 bg-clip-padding',
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
    showFrame = true,
    frameStyle = 'default',
  }) => {
    // Improved mobile-first frame classes with better responsive margins
    const frameClasses = showFrame
      ? `${frameStyles[frameStyle]} rounded-lg sm:rounded-xl mx-2 sm:mx-4 md:mx-6 lg:mx-8 my-4 sm:my-6 md:my-8 lg:my-10`
      : '';

    return (
      <section
        id={id}
        aria-label={ariaLabel}
        className={`relative ${paddingClasses[padding]} ${backgroundClasses[background]} overflow-hidden ${frameClasses} ${className}`}
      >
        <div
          className={`container mx-auto px-3 sm:px-4 md:px-6 ${maxWidthClasses[maxWidth]} z-10 relative ${containerClassName}`}
        >
          {children}
        </div>
      </section>
    );
  }
);

Section.displayName = 'Section';

export default Section;
