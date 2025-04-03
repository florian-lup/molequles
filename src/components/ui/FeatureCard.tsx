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
    filled: 'bg-gray-50 border border-gray-100'
  };

  // Default colors
  const defaultIconBg = iconBg || 'bg-indigo-100';
  const defaultIconColor = iconColor || 'text-indigo-600';
  const defaultTitleColor = titleColor || 'text-gray-900';
  const defaultDescriptionColor = descriptionColor || 'text-gray-600';
  
  // Interactive classes for clickable cards
  const interactiveClasses = clickable 
    ? 'cursor-pointer transform transition-all duration-200 hover:-translate-y-1 hover:shadow-lg' 
    : 'transition-shadow hover:shadow-md';

  return (
    <div className={`p-6 rounded-xl ${variants[variant]} ${interactiveClasses} ${className}`}>
      <div className={`inline-flex items-center justify-center p-3 mb-4 ${defaultIconBg} rounded-lg`}>
        <div className={`${defaultIconColor} text-xl`}>{icon}</div>
      </div>
      
      <h3 className={`text-xl font-semibold mb-3 ${defaultTitleColor}`}>{title}</h3>
      
      <p className={`${defaultDescriptionColor} leading-relaxed`}>{description}</p>
    </div>
  );
} 