import { ReactNode } from 'react';

// Props interface for the Section component
interface SectionProps {
  id?: string; // Optional ID for the section
  className?: string; // Additional CSS classes
  ariaLabel?: string; // Accessibility label
  children: ReactNode; // Child components/elements
  fullScreen?: boolean; // Whether section should be full screen height
  background?: string; // Background color class
}

/**
 * A reusable section component that provides consistent layout structure
 * Can be configured for full-screen or partial height sections with custom backgrounds
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
