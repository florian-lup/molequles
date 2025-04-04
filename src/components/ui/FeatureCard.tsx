import React from 'react';
import { FeatureCardProps } from '@/types/ui';

export default function FeatureCard({
  icon,
  title,
  description,
  iconBg,
  iconColor,
  titleColor,
  descriptionColor,
  className = '',
  variant = 'default',
  clickable = false
}: FeatureCardProps) {
  // Variants for different card styles
  const variants = {
    default: 'bg-white border border-gray-100',
    elevated: 'bg-white shadow-lg border-none',
    outline: 'bg-white border border-gray-200',
    filled: 'bg-gray-50 border border-gray-100',
    glass: 'bg-white/80 backdrop-blur-sm border border-gray-100/50'
  };

  // Default colors
  const defaultIconBg = iconBg || 'bg-indigo-100';
  const defaultIconColor = iconColor || 'text-indigo-600';
  const defaultTitleColor = titleColor || 'text-gray-900';
  const defaultDescriptionColor = descriptionColor || 'text-gray-600';
  
  // Interactive classes for clickable cards
  const interactiveClasses = clickable 
    ? 'cursor-pointer transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg active:translate-y-0 active:shadow-md' 
    : 'transition-all duration-200 hover:shadow-md';

  return (
    <div className={`p-4 sm:p-5 md:p-6 rounded-xl ${variants[variant]} ${interactiveClasses} ${className}`}>
      <div className={`inline-flex items-center justify-center p-2 sm:p-3 mb-4 sm:mb-5 ${defaultIconBg} rounded-lg`}>
        <div className={`${defaultIconColor} text-lg sm:text-xl`}>{icon}</div>
      </div>
      
      <h3 className={`text-lg sm:text-xl font-semibold mb-2 sm:mb-3 ${defaultTitleColor}`}>{title}</h3>
      
      <p className={`${defaultDescriptionColor} text-sm sm:text-base leading-relaxed`}>{description}</p>
    </div>
  );
} 