import React from 'react';
import { SectionProps } from '@/types/ui';

export default function Section({ 
  children, 
  className = '',
  background = '',
  id,
  containerSize = 'default',
  spacing = 'large',
  divider = false,
  containerClassName = '',
  fullWidth = false
}: SectionProps) {
  const spacingClasses = {
    none: '',
    small: 'py-6 sm:py-8 md:py-12',
    medium: 'py-8 sm:py-12 md:py-16',
    large: 'py-12 sm:py-16 md:py-20 lg:py-24',
    xlarge: 'py-16 sm:py-20 md:py-28 lg:py-32'
  };

  const sizeClasses = {
    small: 'max-w-3xl',
    default: 'max-w-7xl',
    large: 'max-w-screen-2xl',
    full: 'max-w-full'
  };

  const dividerClass = divider ? 'border-b border-gray-200' : '';
  
  return (
    <section 
      id={id} 
      className={`${spacingClasses[spacing]} ${background} ${dividerClass} ${className}`}
    >
      {fullWidth ? (
        children
      ) : (
        <div className={`mx-auto ${sizeClasses[containerSize]} px-4 sm:px-5 md:px-6 lg:px-8 ${containerClassName}`}>
          {children}
        </div>
      )}
    </section>
  );
} 