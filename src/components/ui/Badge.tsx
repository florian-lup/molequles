import { BadgeProps } from '@/types/ui';

// Simple badge component that displays an icon and text with optional highlighted text
export default function Badge({
  icon,        // Icon component to display
  text,        // Main text content
  highlight,   // Optional text to highlight in different color
  className = '', // Additional CSS classes
}: BadgeProps) {
  return (
    <div className={`flex items-center gap-2 p-2 rounded-lg bg-gray-900/60 border border-gray-800 w-fit ${className}`}>
      {/* Icon container */}
      <div className="flex gap-1">
        {icon}
      </div>
      {/* Text with optional highlighted part */}
      <span className="text-xs text-gray-300 font-light">
        {highlight && <span className="text-cyan-400">{highlight}</span>} {text}
      </span>
    </div>
  );
}
