import React from 'react';
import Link from 'next/link';
import { ButtonProps } from '@/types/ui';

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'medium',
  className = '',
  fullWidth = false
}: ButtonProps) {
  const variantClasses = {
    primary: 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:shadow-lg hover:scale-105',
    secondary: 'bg-white text-purple-600 hover:shadow-lg hover:scale-105',
    outline: 'border border-purple-600 dark:border-indigo-400 text-purple-600 dark:text-indigo-400 hover:bg-purple-50 dark:hover:bg-indigo-950'
  };

  const sizeClasses = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3 text-lg',
    large: 'px-8 py-4 text-xl'
  };

  const baseClasses = 'rounded-full font-medium transition-all';
  const widthClass = fullWidth ? 'w-full' : '';
  
  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${className}`;

  if (href) {
    return (
      <Link href={href} className={buttonClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={buttonClasses}>
      {children}
    </button>
  );
} 