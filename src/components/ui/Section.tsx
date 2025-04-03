import React from 'react';
import Container from './Container';
import { SectionProps } from '@/types/ui';

export default function Section({ 
  children, 
  className = '',
  background = '',
  id,
  containerSize = 'default',
  spacing = 'large',
  divider = false,
  containerClassName = ''
}: SectionProps) {
  const spacingClasses = {
    small: 'py-8 sm:py-12',
    medium: 'py-12 sm:py-16',
    large: 'py-16 sm:py-24'
  };

  const dividerClass = divider ? 'border-b border-gray-200' : '';
  
  return (
    <section 
      id={id} 
      className={`${spacingClasses[spacing]} ${background} ${dividerClass} ${className}`}
    >
      <Container size={containerSize} className={containerClassName}>
        {children}
      </Container>
    </section>
  );
} 