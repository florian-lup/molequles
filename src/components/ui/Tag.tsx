import { ReactNode } from 'react';

interface TagProps {
  highlight?: string;
  text: string;
  size?: 'sm' | 'xs';
  className?: string;
}

export default function Tag({
  highlight,
  text,
  size = 'xs',
  className = '',
}: TagProps) {
  const sizeClasses = {
    xs: 'text-xs',
    sm: 'text-[10px] md:text-xs'
  };

  return (
    <div className={`inline-block py-1 px-2 bg-gray-800/50 rounded font-mono text-gray-400 border border-gray-700 ${sizeClasses[size]} ${className}`}>
      {highlight && <span className="text-cyan-400">{highlight}</span>} {text}
    </div>
  );
}
