import React from 'react';
import { FeatureCardProps } from '@/types/ui';

export default function FeatureCard({
  icon,
  title,
  description,
  variant = 'light',
  iconBg,
  iconColor,
  titleColor,
  descriptionColor,
  className = ''
}: FeatureCardProps) {
  // Default styles based on variant
  const defaultStyles = {
    light: {
      card: 'bg-white dark:bg-gray-900 border-gray-100 dark:border-gray-800',
      iconBg: iconBg || 'bg-purple-100 dark:bg-purple-900',
      iconColor: iconColor || 'text-purple-600 dark:text-purple-400',
      titleColor: titleColor || 'text-gray-900 dark:text-white',
      descriptionColor: descriptionColor || 'text-gray-600 dark:text-gray-400'
    },
    dark: {
      card: 'bg-gray-800/80 border-gray-700',
      iconBg: iconBg || 'bg-purple-900/60',
      iconColor: iconColor || 'text-purple-400',
      titleColor: titleColor || 'text-white',
      descriptionColor: descriptionColor || 'text-gray-300'
    }
  };

  const styles = defaultStyles[variant];

  return (
    <div className={`p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border ${styles.card} ${className}`}>
      <div className="flex items-center mb-4">
        <div className={`inline-flex items-center justify-center p-3 ${styles.iconBg} rounded-lg mr-3`}>
          <div className={`${styles.iconColor} text-xl`}>{icon}</div>
        </div>
        <h3 className={`text-xl font-semibold ${styles.titleColor}`}>{title}</h3>
      </div>
      <p className={`${styles.descriptionColor}`}>{description}</p>
    </div>
  );
} 