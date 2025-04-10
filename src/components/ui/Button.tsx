import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Type definitions for button variations
type ButtonVariant = 'primary' | 'secondary' | 'neon';
type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type ButtonShape = 'rounded' | 'pill' | 'square';

// Props interface for the Button component
interface ButtonProps {
  children: React.ReactNode; // Button content
  href?: string; // Optional URL for link buttons
  onClick?: () => void; // Click handler
  variant?: ButtonVariant; // Visual style variant
  size?: ButtonSize; // Size variant
  shape?: ButtonShape; // Shape variant
  icon?: React.ReactNode; // Optional icon
  iconPosition?: 'left' | 'right'; // Icon positioning
  fullWidth?: boolean; // Whether button takes full width
  disabled?: boolean; // Disabled state
  loading?: boolean; // Loading state
  className?: string; // Additional CSS classes
  ariaLabel?: string; // Accessibility label
  type?: 'button' | 'submit' | 'reset'; // HTML button type
}

/**
 * A versatile button component with multiple variants, sizes, and states
 * Supports link functionality, icons, loading states, and animations
 */
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
  // Visual style variants with different color schemes and effects
  const variants = {
    primary: `bg-indigo-600 text-white hover:bg-indigo-700 shadow-md shadow-indigo-900/20 ${
      disabled ? 'opacity-60 cursor-not-allowed' : 'hover:shadow-lg hover:shadow-indigo-900/30'
    }`,

    secondary: `bg-gray-900/40 backdrop-blur-sm text-white border border-gray-700/50 ${
      disabled ? 'opacity-60 cursor-not-allowed' : 'hover:border-indigo-400/30 hover:bg-gray-800/50'
    }`,

    neon: `relative text-white font-medium overflow-hidden isolate 
      before:absolute before:inset-0 before:bg-gradient-to-r before:from-emerald-700 before:via-green-800 before:to-teal-800 before:opacity-100 before:z-[-1]
      ${disabled ? 'opacity-60 cursor-not-allowed' : 'hover:before:brightness-110 hover:shadow-lg hover:shadow-emerald-900/30'}`,
  };

  // Responsive size variants that adapt to different screen sizes
  const sizes = {
    xs: 'px-2 py-1 text-xs md:px-2.5 md:py-1 lg:px-3 lg:py-1.5',
    sm: 'px-3 py-1.5 text-xs md:px-3.5 md:py-1.5 md:text-sm lg:px-4 lg:py-2',
    md: 'px-4 py-2 text-sm md:px-5 md:py-2.5 md:text-base lg:px-6 lg:py-3',
    lg: 'px-5 py-2.5 text-base md:px-6 md:py-3 md:text-lg lg:px-7 lg:py-3.5',
    xl: 'px-6 py-3 text-lg md:px-7 md:py-4 md:text-xl lg:px-8 lg:py-4.5',
  };

  // Shape variations for button corners
  const shapes = {
    rounded: 'rounded-lg',
    pill: 'rounded-full',
    square: 'rounded-none',
  };

  // Base styling and utility classes
  const baseClasses =
    'inline-flex items-center justify-center font-medium transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500/50 disabled:cursor-not-allowed disabled:opacity-60 cursor-pointer';
  const widthClass = fullWidth ? 'w-full' : '';
  const iconClasses = 'flex items-center';
  const iconSpacing = icon
    ? iconPosition === 'left'
      ? 'mr-1.5 md:mr-2 lg:mr-3'
      : 'ml-1.5 md:ml-2 lg:ml-3'
    : '';

  // Loading spinner SVG for loading state
  const spinner = (
    <svg
      className="animate-spin -ml-1 mr-1.5 md:mr-2 lg:mr-3 h-3 w-3 md:h-4 md:w-4 lg:h-5 lg:w-5"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
  );

  // Combine all classes for the final button styling
  const buttonClasses = `${baseClasses} ${variants[variant]} ${sizes[size]} ${shapes[shape]} ${widthClass} ${className}`;

  // Button content with conditional rendering of icon and spinner
  const content = (
    <>
      {loading && spinner}
      {icon && iconPosition === 'left' && (
        <span className={`${iconClasses} ${iconSpacing}`}>{icon}</span>
      )}
      <span>{children}</span>
      {icon && iconPosition === 'right' && (
        <span className={`${iconClasses} ${iconSpacing}`}>{icon}</span>
      )}
    </>
  );

  // Animation configuration using Framer Motion
  const motionProps = {
    whileHover: disabled ? {} : {},
    whileTap: disabled ? {} : {},
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 15,
    },
  };

  // Create animated wrapper component
  const MotionComponent = motion.div;

  // Render as link or button based on href prop
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
}
