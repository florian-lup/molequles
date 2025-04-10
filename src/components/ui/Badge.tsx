import React from 'react';
import { BadgeProps } from '@/types/ui';

export default function Badge({
  children,
  icon,
  color = 'brand',
  customColors,
  withPulse = true,
  className = '',
}: BadgeProps) {
  // Color schemes
  const colorSchemes = {
    default: {
      text: 'text-indigo-300',
      bg: 'bg-indigo-900/40',
      border: 'border-indigo-700/50',
    },
    brand: {
      text: 'text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-indigo-400 to-cyan-400 font-semibold',
      bg: 'bg-transparent',
      border: 'border-gray-700/30',
    },
  };

  // Determine which color scheme to use
  const { text, bg, border } = color === 'custom' && customColors
    ? {
        text: customColors.text || colorSchemes.default.text,
        bg: customColors.bg || colorSchemes.default.bg,
        border: customColors.border || colorSchemes.default.border,
      }
    : colorSchemes[color as keyof typeof colorSchemes];

  return (
    <div className={`inline-flex items-center rounded-full ${border} ${bg} backdrop-blur-sm px-2 py-1 md:px-3.5 md:py-2 lg:px-4 lg:py-2.5 text-xs md:text-sm lg:text-base font-medium ${text} ${className}`}>
      {withPulse && (
        <span className="mr-1.5 md:mr-2.5 lg:mr-3 relative flex h-1.5 w-1.5 md:h-2.5 md:w-2.5 lg:h-3 lg:w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gradient-to-r from-pink-400 via-indigo-400 to-cyan-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-1.5 w-1.5 md:h-2.5 md:w-2.5 lg:h-3 lg:w-3 bg-gradient-to-r from-pink-400 via-indigo-400 to-cyan-400"></span>
        </span>
      )}
      
      {icon && <span className="mr-1.5 md:mr-2.5 lg:mr-3">{icon}</span>}
      
      {typeof children === 'string' ? <span>{children}</span> : children}
    </div>
  );
} 