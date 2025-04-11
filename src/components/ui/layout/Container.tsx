import { ReactNode } from 'react';

// Props interface for the Container component
interface ContainerProps {
  className?: string; // Additional CSS classes
  children: ReactNode; // Child components/elements
  fullHeight?: boolean; // Whether container should take full height
  maxWidth?: 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' |'7xl' | 'max-w-full' | 'max-w-min' | 'none'; // Maximum width constraint
  padding?: string; // Custom padding classes
  margin?: string; // Custom margin classes
}

/**
 * A reusable container component that provides consistent width constraints and spacing
 * Supports various responsive breakpoints and customizable padding/margin
 */
const Container = ({
  className = '',
  children,
  fullHeight = true,
  maxWidth = '7xl',
  padding = 'p-4 md:p-6 lg:p-8',
  margin = 'mx-auto',
}: ContainerProps) => {
  // Convert maxWidth prop to corresponding Tailwind class
  const maxWidthClass = maxWidth === 'none' ? '' : `max-w-${maxWidth}`;

  return (
    <div
      className={`
        ${margin} 
        ${fullHeight ? 'min-h-screen' : ''} 
        ${maxWidthClass} 
        ${padding}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Container;
