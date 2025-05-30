import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  padding?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'highlight' | 'subtle';
  hover?: boolean;
  [key: string]: unknown; // Allow additional props to be passed through
}

const paddingClasses = {
  sm: 'p-4',
  md: 'p-4 md:p-6',
  lg: 'p-6',
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
  ];

  if (hover) {
    baseClasses.push('transition-all', 'duration-300', 'transform', 'hover:-translate-y-1');
  }

  return (
    <div className={`${baseClasses.join(' ')} ${className}`} {...props}>
      {children}
    </div>
  );
}
