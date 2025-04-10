'use client';

import { FC } from 'react';

export interface TagProps {
  text: string;
  index?: number;
  colorIndex?: number;
  className?: string;
}

const Tag: FC<TagProps> = ({ 
  text, 
  index = 0, 
  colorIndex, 
  className = '' 
}) => {
  // If colorIndex is not provided, use the index
  const colorIdx = colorIndex !== undefined ? colorIndex : index % 3;
  
  const colorClasses = 
    colorIdx === 0 ? 'bg-pink-400/10 text-pink-300' : 
    colorIdx === 1 ? 'bg-indigo-400/10 text-indigo-300' :
                     'bg-cyan-400/10 text-cyan-300';

  return (
    <span 
      className={`inline-flex items-center px-1.5 md:px-2.5 lg:px-3 py-0.5 md:py-0.5 lg:py-1 rounded-full text-xs md:text-sm font-medium ${colorClasses} ${className}`}
    >
      {text}
    </span>
  );
};

export default Tag; 