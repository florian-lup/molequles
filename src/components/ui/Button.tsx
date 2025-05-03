import { FiArrowRight } from 'react-icons/fi';
import { ReactNode } from 'react';

/**
 * Properties for button component
 */
interface ButtonProps {
  onClick: () => void;
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  rightIcon?: boolean;
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

// Reusable button component with multiple variants, sizes and states
export default function Button({
  onClick,
  children,
  variant = 'primary',
  size = 'sm',
  rightIcon = false,
  className = '',
  disabled = false,
  loading = false,
  type = 'button',
}: ButtonProps) {
  // Base styles applied to all button variants
  const baseStyles =
    'inline-flex items-center justify-center gap-2 font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 transition-all duration-200 cursor-pointer';

  // Styles specific to each button variant (primary/secondary)
  const variantStyles = {
    primary: 'bg-black text-white hover:bg-gray-800 shadow-md',
    secondary: 'bg-white text-black border border-gray-200 hover:bg-gray-50',
  };

  // Styles specific to each button size
  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-base',
  };

  // Additional styles for disabled state
  const disabledStyles = disabled ? 'opacity-60 cursor-not-allowed' : '';

  // Combine all style classes based on props
  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${disabledStyles} ${className}`;

  return (
    <button
      onClick={onClick}
      className={combinedClassName}
      disabled={disabled || loading}
      type={type}
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
