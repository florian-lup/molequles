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
  (
    {
      className,
      type = 'text',
      variant = 'default',
      inputSize = 'md',
      leftIcon,
      rightIcon,
      roundedVariant = 'default',
      error = false,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'w-full border outline-none transition-all duration-200 focus:border-transparent touch-manipulation';

    const variantStyles = {
      default:
        'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-emerald-500',
      filled:
        'bg-gray-50 border-gray-200 text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-gray-200 focus:border-gray-300',
      outline:
        'bg-transparent border-gray-300 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-emerald-500',
    };

    const sizeStyles = {
      sm: 'px-3 py-2.5 text-sm min-h-[40px] sm:py-2 sm:text-sm sm:min-h-[36px]',
      md: 'px-4 py-3.5 text-base min-h-[48px] sm:py-3 sm:text-base sm:min-h-[44px]',
      lg: 'px-4 py-4 text-base min-h-[52px] sm:py-4 sm:text-base sm:min-h-[48px]',
    };

    const roundedStyles = {
      default: 'rounded-lg',
      left: 'rounded-l-lg rounded-r-none',
      right: 'rounded-r-lg rounded-l-none',
      none: 'rounded-none',
    };

    const errorStyles = error ? 'border-red-500 focus:ring-red-500' : '';

    const iconSizeStyles = {
      sm: 'h-4 w-4',
      md: 'h-5 w-5',
      lg: 'h-5 w-5',
    };

    const leftIconPadding = {
      sm: leftIcon ? 'pl-9' : '',
      md: leftIcon ? 'pl-11' : '',
      lg: leftIcon ? 'pl-11' : '',
    };

    const rightIconPadding = {
      sm: rightIcon ? 'pr-9' : '',
      md: rightIcon ? 'pr-11' : '',
      lg: rightIcon ? 'pr-11' : '',
    };

    const iconVerticalPosition = {
      sm: 'left-2.5',
      md: 'left-3',
      lg: 'left-3',
    };

    const rightIconPosition = {
      sm: 'right-2.5',
      md: 'right-3',
      lg: 'right-3',
    };

    return (
      <div className="relative flex-1">
        {leftIcon && (
          <div className={cn(
            'absolute inset-y-0 flex items-center pointer-events-none text-gray-500',
            iconVerticalPosition[inputSize]
          )}>
            <div className={iconSizeStyles[inputSize]}>
              {leftIcon}
            </div>
          </div>
        )}

        <input
          type={type}
          className={cn(
            baseStyles,
            variantStyles[variant],
            sizeStyles[inputSize],
            roundedStyles[roundedVariant],
            leftIconPadding[inputSize],
            rightIconPadding[inputSize],
            errorStyles,
            className
          )}
          ref={ref}
          {...props}
        />

        {rightIcon && (
          <div className={cn(
            'absolute inset-y-0 flex items-center pointer-events-none text-gray-500',
            rightIconPosition[inputSize]
          )}>
            <div className={iconSizeStyles[inputSize]}>
              {rightIcon}
            </div>
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
