'use client';

import { FC } from 'react';

// Props interface for the Tag component
export interface TagProps {
  text: string; // Text content to display in the tag
  colorIndex?: 0 | 1 | 2; // Index to determine color scheme (pink, indigo, or cyan)
  className?: string; // Additional CSS classes
}

/**
 * A tag component that displays text with a colored background
 * Supports three color schemes with matching background and text colors
 */
const Tag: FC<TagProps> = ({ text, colorIndex = 0, className = '' }) => {
  // Determine color classes based on the colorIndex
  const colorClasses =
    colorIndex === 0
      ? 'bg-pink-400/10 text-pink-300'
      : colorIndex === 1
        ? 'bg-indigo-400/10 text-indigo-300'
        : colorIndex === 2
          ? 'bg-cyan-400/10 text-cyan-300'
          : '';

  return (
    <span
      className={`inline-flex items-center px-1.5 md:px-2.5 lg:px-3 py-0.5 md:py-0.5 lg:py-1 rounded-full text-xs md:text-sm font-medium ${colorClasses} ${className}`}
    >
      {text}
    </span>
  );
};

export default Tag;
