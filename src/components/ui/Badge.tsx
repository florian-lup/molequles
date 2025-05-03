import React from 'react';

interface BadgeProps {
  text: string;
  textSize?: 'xs' | 'sm' | 'base' | 'lg';
  className?: string;
  dotColor?: string;
  bgColor?: string;
  textColor?: string;
}

export default function Badge({
  text,
  textSize = 'sm',
  className = '',
  dotColor = 'bg-black',
  bgColor = 'bg-gray-50',
  textColor = 'text-gray-700',
}: BadgeProps) {
  return (
    <div
      className={`inline-flex items-center px-3 py-1 rounded-full ${bgColor} border border-gray-200 shadow-sm ${className}`}
    >
      <div className={`w-2 h-2 rounded-full ${dotColor} mr-2 animate-pulse`}></div>
      <span className={`text-${textSize} font-medium ${textColor}`}>{text}</span>
    </div>
  );
}
