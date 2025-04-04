import React from 'react';
import { ContentGridProps } from '@/types/ui';

export default function ContentGrid({ 
  children, 
  columns = 2, 
  gap = 'medium',
  className = '',
  equalHeight = false,
  center = false,
  responsive = true
}: ContentGridProps) {
  // Column classes with responsive variations
  const columnClass = {
    1: 'grid-cols-1',
    2: responsive ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-2',
    3: responsive ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-3',
    4: responsive ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4' : 'grid-cols-4',
    5: responsive ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5' : 'grid-cols-5'
  }[columns];

  // Gap sizes
  const gapClass = {
    'small': 'gap-3 sm:gap-4',
    'medium': 'gap-4 sm:gap-5 md:gap-6',
    'large': 'gap-6 md:gap-8',
    'xlarge': 'gap-8 md:gap-10'
  }[gap];

  // Optional styles
  const heightClass = equalHeight ? 'h-full' : '';
  const centerClass = center ? 'items-center justify-center' : '';
  
  return (
    <div className={`grid ${columnClass} ${gapClass} ${centerClass} ${className}`}>
      {React.Children.map(children, child => 
        equalHeight && child ? <div className="h-full">{child}</div> : child
      )}
    </div>
  );
} 