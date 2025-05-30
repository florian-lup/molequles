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
  ({
    children,
    variant = 'primary',
    buttonSize = 'sm',
    rightIcon = false,
    className,
    disabled = false,
    loading = false,
    type = 'button',
    ...props
  }, ref) => {
    // Base styles applied to all button variants
    const baseStyles = "inline-flex items-center justify-center gap-2 font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-200 cursor-pointer";

    // Styles specific to each button variant (primary/secondary)
    const variantStyles = {
      primary: "bg-black text-white hover:bg-gray-800 shadow-md focus:ring-cyan-500",
      secondary: "bg-white text-black border border-gray-200 hover:bg-gray-50 focus:ring-cyan-500",
    };

    // Styles specific to each button size
    const sizeStyles = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-base",
    };

    // Additional styles for disabled state
    const disabledStyles = (disabled || loading) ? "opacity-60 cursor-not-allowed" : "";

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
          <>
            <FiArrowRight size={16} className="md:hidden" />
            <FiArrowRight size={18} className="hidden md:block" />
          </>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
