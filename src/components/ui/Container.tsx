import { ReactNode } from 'react';

interface ContainerProps {
  className?: string;
  children: ReactNode;
  fullHeight?: boolean;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '7xl' | 'full' | 'none';
  padding?: string;
  margin?: string;
}

/**
 * A reusable container component for consistent inner layout across the app
 */
const Container = ({
  className = '',
  children,
  fullHeight = true,
  maxWidth = '7xl',
  padding = 'px-4 lg:px-8',
  margin = 'mx-auto',
}: ContainerProps) => {
  // Map maxWidth to tailwind class
  const maxWidthClass = maxWidth === 'none' ? '' : `max-w-${maxWidth}`;
  
  return (
    <div
      className={`
        ${margin} 
        ${fullHeight ? 'h-full' : ''} 
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