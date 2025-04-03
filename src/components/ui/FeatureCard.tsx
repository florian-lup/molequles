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
  className = ''
}: FeatureCardProps) {
  // Default styles
  const card = 'bg-white border-gray-100';
  const defaultIconBg = iconBg || 'bg-purple-100';
  const defaultIconColor = iconColor || 'text-purple-600';
  const defaultTitleColor = titleColor || 'text-gray-900';
  const defaultDescriptionColor = descriptionColor || 'text-gray-600';

  return (
    <div className={`p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border ${card} ${className}`}>
      <div className="flex items-center mb-4">
        <div className={`inline-flex items-center justify-center p-3 ${defaultIconBg} rounded-lg mr-3`}>
          <div className={`${defaultIconColor} text-xl`}>{icon}</div>
        </div>
        <h3 className={`text-xl font-semibold ${defaultTitleColor}`}>{title}</h3>
      </div>
      <p className={`${defaultDescriptionColor}`}>{description}</p>
    </div>
  );
} 