import { FeaturesCardProps } from '@/types/ui';

// Card component for displaying feature highlights with customizable styling
export default function FeaturesCard({
  icon,               // Icon component to display
  title,              // Feature title
  description,        // Feature description text
  iconColor = 'text-cyan-400', // Icon color class
  titleClassName = 'bg-gradient-to-r from-cyan-400 to-blue-400', // Title gradient class
  className = '',     // Additional CSS classes
}: FeaturesCardProps) {
  
  return (
    <div className={`overflow-hidden rounded-xl shadow-xl border border-cyan-900/50 bg-gradient-to-b from-gray-900 to-gray-950 p-5 hover:bg-gray-800/50 transition-all duration-300 transform hover:-translate-y-1 ${className}`}>
      {/* Header with icon and title */}
      <div className="flex items-center gap-2 mb-3">
        <div className={iconColor}>{icon}</div>
        <h3 className={`text-base md:text-lg lg:text-xl font-medium text-transparent bg-clip-text ${titleClassName}`}>
          {title}
        </h3>
      </div>
      {/* Feature description */}
      <p className="text-gray-300 font-light text-sm md:text-base">
        {description}
      </p>
    </div>
  );
}
