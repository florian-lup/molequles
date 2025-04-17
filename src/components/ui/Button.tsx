import { FiArrowRight } from 'react-icons/fi';
import { ButtonProps } from '@/types/ui';

export default function Button({
  onClick,
  children,
  variant = 'primary',
  size = 'md',
  rightIcon = false,
  className = '',
  disabled = false,
  loading = false,
  type = 'button',
}: ButtonProps) {
  // Base styles
  const baseStyles = "inline-flex items-center justify-center gap-2 font-medium text-white rounded-full focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900 shadow-lg shadow-cyan-500/25 transition-all duration-200 cursor-pointer";
  
  // Variant styles
  const variantStyles = {
    primary: "bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700",
    secondary: "bg-gray-800 hover:bg-gray-700 border border-gray-700"
  };
  
  // Size styles
  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-base"
  };
  
  const disabledStyles = disabled ? "opacity-60 cursor-not-allowed" : "";
  
  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${disabledStyles} ${className}`;

  return (
    <button 
      onClick={onClick} 
      className={combinedClassName}
      disabled={disabled || loading}
      type={type}
    >
      {loading ? "Loading..." : children}
      {rightIcon && !loading && (
        <>
          <FiArrowRight size={16} className="md:hidden" />
          <FiArrowRight size={18} className="hidden md:block" />
        </>
      )}
    </button>
  );
}
