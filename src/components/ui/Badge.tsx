import React, { forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  text: string;
  textSize?: 'xs' | 'sm' | 'base' | 'lg';
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info';
  dotColor?: string;
  bgColor?: string;
  textColor?: string;
  icon?: React.ReactNode;
  showDot?: boolean;
}

const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  (
    {
      text,
      textSize = 'sm',
      variant = 'default',
      className,
      dotColor,
      bgColor,
      textColor,
      icon,
      showDot = true,
      ...props
    },
    ref
  ) => {
    // Base styles applied to all badge variants
    const baseStyles = 'inline-flex items-center px-3 py-1 rounded-full border shadow-sm';

    // Styles specific to each badge variant
    const variantStyles = {
      default: 'bg-gray-50 border-gray-200 text-gray-700',
      success: 'bg-green-50 border-green-200 text-green-700',
      warning: 'bg-yellow-50 border-yellow-200 text-yellow-700',
      error: 'bg-red-50 border-red-200 text-red-700',
      info: 'bg-blue-50 border-blue-200 text-blue-700',
    };

    // Styles specific to each text size
    const textSizeStyles = {
      xs: 'text-xs',
      sm: 'text-sm',
      base: 'text-base',
      lg: 'text-lg',
    };

    // Default dot colors for each variant
    const defaultDotColors = {
      default: 'bg-gray-500',
      success: 'bg-green-500',
      warning: 'bg-yellow-500',
      error: 'bg-red-500',
      info: 'bg-blue-500',
    };

    // Use custom colors if provided, otherwise use variant defaults
    const finalBgColor = bgColor || variantStyles[variant].split(' ')[0];
    const finalTextColor = textColor || variantStyles[variant].split(' ').slice(-1)[0];
    const finalDotColor = dotColor || defaultDotColors[variant];

    // Override variant styles if custom colors are provided
    const customColorStyles =
      bgColor || textColor ? `${finalBgColor} ${finalTextColor}` : variantStyles[variant];

    return (
      <div ref={ref} className={cn(baseStyles, customColorStyles, className)} {...props}>
        {icon && <span className="mr-2">{icon}</span>}
        {!icon && showDot && (
          <div className={cn('w-2 h-2 rounded-full mr-2 animate-pulse', finalDotColor)} />
        )}
        <span className={cn('font-medium', textSizeStyles[textSize])}>{text}</span>
      </div>
    );
  }
);

Badge.displayName = 'Badge';

export default Badge;
