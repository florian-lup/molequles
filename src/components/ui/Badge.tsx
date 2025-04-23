import React from 'react';

interface BadgeProps {
  text: string;
}

export default function Badge({ text }: BadgeProps) {
  return (
    <div className="inline-flex items-center px-3 py-1 rounded-full bg-gray-50 border border-gray-200 shadow-sm">
      <div className="w-2 h-2 rounded-full bg-black mr-2 animate-pulse"></div>
      <span className="text-sm font-medium text-gray-700">{text}</span>
    </div>
  );
}
