import { ReactNode } from 'react';

interface BadgeProps {
  icon: ReactNode;
  text: string;
  highlight?: string;
  className?: string;
}

export default function Badge({
  icon,
  text,
  highlight,
  className = '',
}: BadgeProps) {
  return (
    <div className={`flex items-center gap-2 p-2 rounded-lg bg-gray-900/60 border border-gray-800 w-fit ${className}`}>
      <div className="flex gap-1">
        {icon}
      </div>
      <span className="text-xs text-gray-300 font-light">
        {highlight && <span className="text-cyan-400">{highlight}</span>} {text}
      </span>
    </div>
  );
}
