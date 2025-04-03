import React from 'react';
import { ContainerProps } from '@/types/ui';

export default function Container({ 
  children, 
  className = '',
  size = 'default',
  padding = true
}: ContainerProps) {
  const sizes = {
    small: 'max-w-3xl',
    default: 'max-w-7xl',
    large: 'max-w-screen-2xl',
    full: 'max-w-full'
  };

  const paddingClasses = padding ? 'px-4 md:px-6 xl:px-8' : '';
  
  return (
    <div className={`mx-auto ${sizes[size]} ${paddingClasses} ${className}`}>
      {children}
    </div>
  );
} 