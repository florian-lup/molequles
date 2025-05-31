import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  padding?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'highlight' | 'subtle';
  hover?: boolean;
  [key: string]: unknown; // Allow additional props to be passed through
}

// Mobile-first responsive padding classes
const paddingClasses = {
  sm: 'p-3 sm:p-4',
  md: 'p-4 sm:p-5 md:p-6',
  lg: 'p-5 sm:p-6 md:p-8',
};

const variantClasses = {
  default: 'border-gray-200',
  highlight: 'border-emerald-500 ring-1 ring-emerald-500',
  subtle: 'border-gray-100',
};

export default function Card({
  children,
  className = '',
  padding = 'lg',
  variant = 'default',
  hover = false,
  ...props
}: CardProps) {
  const baseClasses = [
    'bg-amber-50/30',
    'rounded-xl',
    'border',
    'shadow-sm',
    'bg-[linear-gradient(#33333310_1px,transparent_1px),linear-gradient(90deg,#33333310_1px,transparent_1px)]',
    'bg-[size:16px_16px]',
    paddingClasses[padding],
    variantClasses[variant],
    // Better mobile touch experience
    'touch-manipulation',
  ];

  if (hover) {
    baseClasses.push(
      'transition-all',
      'duration-300',
      'transform',
      // More subtle hover effect on mobile, stronger on desktop
      'hover:shadow-md',
      'sm:hover:-translate-y-1',
      'sm:hover:shadow-lg'
    );
  }

  return (
    <div className={`${baseClasses.join(' ')} ${className}`} {...props}>
      {children}
    </div>
  );
}
