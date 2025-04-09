import { ReactNode } from 'react';

interface SectionProps {
  id?: string;
  className?: string;
  ariaLabel?: string;
  children: ReactNode;
  fullScreen?: boolean;
  background?: string;
}

/**
 * A reusable section component for consistent layout sections across the app
 */
const Section = ({
  id,
  className = '',
  ariaLabel,
  children,
  fullScreen = true,
  background = 'bg-gray-950',
}: SectionProps) => {
  return (
    <section
      id={id}
      className={`
        w-full
        ${fullScreen ? 'min-h-screen' : ''} 
        ${background} 
        ${className}`}
      aria-label={ariaLabel}
    >
      {children}
    </section>
  );
};

export default Section; 