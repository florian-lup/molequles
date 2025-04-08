import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

type ButtonVariant = 'primary' | 'secondary' | 'glass' | 'minimal' | 'neon' | 'outline';
type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type ButtonShape = 'rounded' | 'pill' | 'square';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
  shape?: ButtonShape;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  ariaLabel?: string;
  type?: 'button' | 'submit' | 'reset';
}

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  shape = 'rounded',
  icon,
  iconPosition = 'left',
  fullWidth = false,
  disabled = false,
  loading = false,
  className = '',
  ariaLabel,
  type = 'button',
}: ButtonProps) {
  // Button styling variants
  const variants = {
    primary: `bg-indigo-600 text-white hover:bg-indigo-700 ${disabled ? 'opacity-60 cursor-not-allowed' : 'hover:shadow-md'}`,
    
    secondary: `bg-white text-indigo-600 border border-gray-200 hover:border-indigo-300 hover:bg-indigo-50 ${disabled ? 'opacity-60 cursor-not-allowed' : ''}`,
    
    glass: `bg-white/10 backdrop-blur-md text-white border border-white/20 shadow-sm ${disabled ? 'opacity-60 cursor-not-allowed' : 'hover:bg-white/20 hover:shadow-lg'}`,
    
    minimal: `bg-transparent text-gray-700 hover:bg-gray-100 ${disabled ? 'opacity-60 cursor-not-allowed' : ''}`,
    
    neon: `relative text-white font-medium overflow-hidden isolate 
      before:absolute before:inset-0 before:bg-gradient-to-r before:from-blue-700 before:to-indigo-800 before:opacity-100 before:z-[-1]
      ${disabled ? 'opacity-60 cursor-not-allowed' : 'hover:brightness-135'}`,
    
    outline: `bg-transparent border border-gray-300 text-gray-700 ${disabled ? 'opacity-60 cursor-not-allowed' : 'hover:border-indigo-400 hover:text-indigo-600'}`,
  };

  // Size variants with responsive adjustments
  const sizes = {
    xs: 'px-2 py-1 text-xs sm:px-3 sm:py-1',
    sm: 'px-3 py-1 text-xs sm:px-4 sm:py-1.5 sm:text-sm',
    md: 'px-4 py-2 text-sm sm:px-5 sm:py-2.5 sm:text-base',
    lg: 'px-5 py-2.5 text-base sm:px-6 sm:py-3 sm:text-lg',
    xl: 'px-6 py-3 text-lg sm:px-8 sm:py-4 sm:text-xl',
  };

  // Shape variants
  const shapes = {
    rounded: 'rounded-lg',
    pill: 'rounded-full',
    square: 'rounded-none',
  };

  // Base classes and icon positioning
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:cursor-not-allowed disabled:opacity-60 cursor-pointer';
  const widthClass = fullWidth ? 'w-full' : '';
  const iconClasses = 'flex items-center';
  const iconSpacing = icon ? (iconPosition === 'left' ? 'mr-1 sm:mr-2' : 'ml-1 sm:ml-2') : '';

  // Spinner for loading state
  const spinner = (
    <svg className="animate-spin -ml-1 mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
  );

  // Combine classes
  const buttonClasses = `${baseClasses} ${variants[variant]} ${sizes[size]} ${shapes[shape]} ${widthClass} ${className}`;

  // Render content
  const content = (
    <>
      {loading && spinner}
      {icon && iconPosition === 'left' && <span className={`${iconClasses} ${iconSpacing}`}>{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className={`${iconClasses} ${iconSpacing}`}>{icon}</span>}
    </>
  );

  // Wrap in motion component for animations
  const MotionComponent = motion.div;

  const renderButton = () => {
    const motionProps = {
      whileHover: disabled ? {} : {},
      whileTap: disabled ? {} : { scale: 0.98 },
      transition: { type: 'spring', stiffness: 500, damping: 30 }
    };

    if (href && !disabled) {
      return (
        <Link href={href} className={buttonClasses} aria-label={ariaLabel}>
          <MotionComponent {...motionProps} className="flex items-center">
            {content}
          </MotionComponent>
        </Link>
      );
    }

    return (
      <button 
        onClick={onClick} 
        disabled={disabled || loading} 
        className={buttonClasses}
        aria-label={ariaLabel}
        type={type}
      >
        <MotionComponent {...motionProps} className="flex items-center">
          {content}
        </MotionComponent>
      </button>
    );
  };

  return renderButton();
} 