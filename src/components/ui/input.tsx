import React, { forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: 'default' | 'filled' | 'outline';
  inputSize?: 'sm' | 'md' | 'lg';
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  roundedVariant?: 'default' | 'left' | 'right' | 'none';
  error?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({
    className,
    type = 'text',
    variant = 'default',
    inputSize = 'md',
    leftIcon,
    rightIcon,
    roundedVariant = 'default',
    error = false,
    ...props
  }, ref) => {
    const baseStyles = "w-full border outline-none transition-all duration-200 focus:border-transparent";

    const variantStyles = {
      default: "bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-emerald-500",
      filled: "bg-gray-50 border-gray-200 text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-gray-200 focus:border-gray-300",
      outline: "bg-transparent border-gray-300 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-emerald-500"
    };

    const sizeStyles = {
      sm: "px-3 py-2 text-sm",
      md: "px-4 py-3 text-base",
      lg: "px-4 py-4 text-base"
    };

    const roundedStyles = {
      default: "rounded-lg",
      left: "rounded-l-lg rounded-r-none",
      right: "rounded-r-lg rounded-l-none",
      none: "rounded-none"
    };

    const responsiveStyles = {
      sm: "sm:py-2 sm:text-sm",
      md: "sm:py-3",
      lg: "sm:py-4"
    };

    const responsiveRoundedStyles = {
      default: "",
      left: "sm:rounded-l-lg sm:rounded-r-none",
      right: "sm:rounded-r-lg sm:rounded-l-none",
      none: ""
    };

    const errorStyles = error ? "border-red-500 focus:ring-red-500" : "";

    const leftPadding = leftIcon ? "pl-10" : "";
    const rightPadding = rightIcon ? "pr-10" : "";

    return (
      <div className="relative flex-1">
        {leftIcon && (
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500">
            {leftIcon}
          </div>
        )}

        <input
          type={type}
          className={cn(
            baseStyles,
            variantStyles[variant],
            sizeStyles[inputSize],
            responsiveStyles[inputSize],
            roundedStyles[roundedVariant],
            responsiveRoundedStyles[roundedVariant],
            leftPadding,
            rightPadding,
            errorStyles,
            className
          )}
          ref={ref}
          {...props}
        />

        {rightIcon && (
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-500">
            {rightIcon}
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
