import React, { forwardRef } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { cn } from '@/lib/utils';

/**
 * Properties for button component
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  buttonSize?: 'sm' | 'md' | 'lg';
  rightIcon?: boolean;
  loading?: boolean;
}

// Reusable button component with multiple variants, sizes and states
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = 'primary',
      buttonSize = 'sm',
      rightIcon = false,
      className,
      disabled = false,
      loading = false,
      type = 'button',
      ...props
    },
    ref
  ) => {
    // Base styles applied to all button variants - improved touch targets for mobile
    const baseStyles =
      'inline-flex items-center justify-center gap-2 font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-200 touch-manipulation select-none';

    // Styles specific to each button variant (primary/secondary)
    const variantStyles = {
      primary: 'bg-black text-white hover:bg-gray-800 active:bg-gray-900 shadow-md focus:ring-emerald-500',
      secondary: 'bg-white text-black border border-gray-200 hover:bg-gray-50 active:bg-gray-100 focus:ring-emerald-500',
    };

    // Improved responsive sizing for better mobile experience
    const sizeStyles = {
      sm: 'px-3 py-2 text-sm min-h-[36px] sm:px-4 sm:py-2 sm:text-sm sm:min-h-[38px]',
      md: 'px-4 py-3 text-sm min-h-[44px] sm:px-6 sm:py-3 sm:text-base sm:min-h-[46px]',
      lg: 'px-6 py-4 text-base min-h-[48px] sm:px-8 sm:py-4 sm:text-base sm:min-h-[52px]',
    };

    // Additional styles for disabled state
    const disabledStyles = disabled || loading ? 'opacity-60 cursor-not-allowed' : '';

    return (
      <button
        ref={ref}
        className={cn(
          baseStyles,
          variantStyles[variant],
          sizeStyles[buttonSize],
          disabledStyles,
          className
        )}
        disabled={disabled || loading}
        type={type}
        {...props}
      >
        {loading ? 'Loading...' : children}
        {/* Conditionally render right arrow icon with responsive sizing */}
        {rightIcon && !loading && (
          <FiArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
