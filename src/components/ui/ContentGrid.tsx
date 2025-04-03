import React from 'react';

interface ContentGridProps {
  children: React.ReactNode;
  columns?: 1 | 2 | 3 | 4;
  gap?: 'small' | 'medium' | 'large';
  className?: string;
}

export default function ContentGrid({ 
  children, 
  columns = 2, 
  gap = 'medium',
  className = '' 
}: ContentGridProps) {
  const columnClass = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
  }[columns];

  const gapClass = {
    'small': 'gap-4',
    'medium': 'gap-6',
    'large': 'gap-8'
  }[gap];

  return (
    <div className={`grid ${columnClass} ${gapClass} ${className}`}>
      {children}
    </div>
  );
} 