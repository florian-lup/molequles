import React from 'react';
import { BadgeProps } from '@/types/ui';

export default function Badge({
  children,
  icon,
  color = 'primary',
  customColors,
  withPulse = true,
  className = '',
}: BadgeProps) {
  // Color schemes
  const colorSchemes = {
    default: {
      text: 'text-indigo-400',
      bg: 'bg-indigo-900/30',
      border: 'border-indigo-800/50',
    },
    primary: {
      text: 'text-indigo-300',
      bg: 'bg-indigo-900/40',
      border: 'border-indigo-700/50',
    },
    secondary: {
      text: 'text-indigo-300',
      bg: 'bg-indigo-950/40',
      border: 'border-indigo-500/30',
    },
  };

  // Determine which color scheme to use
  const { text, bg, border } = color === 'custom' && customColors
    ? {
        text: customColors.text || colorSchemes.default.text,
        bg: customColors.bg || colorSchemes.default.bg,
        border: customColors.border || colorSchemes.default.border,
      }
    : colorSchemes[color as Exclude<typeof color, 'custom'>];

  return (
    <div className={`inline-flex items-center rounded-full ${border} ${bg} backdrop-blur-sm px-2 py-1 sm:px-3 sm:py-1.5 text-xs sm:text-sm font-medium ${text} ${className}`}>
      {withPulse && (
        <span className="mr-1.5 sm:mr-2 relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-1.5 w-1.5 sm:h-2 sm:w-2 bg-indigo-500"></span>
        </span>
      )}
      
      {icon && <span className="mr-1.5 sm:mr-2">{icon}</span>}
      
      {typeof children === 'string' ? <span>{children}</span> : children}
    </div>
  );
} 