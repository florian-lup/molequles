import { FeaturesCardProps } from '@/types/ui';

export default function FeaturesCard({
  icon,
  title,
  description,
  gradientFrom = 'cyan-400',
  gradientTo = 'blue-400',
  iconColor = 'text-cyan-400',
  className = '',
}: FeaturesCardProps) {
  
  return (
    <div className={`overflow-hidden rounded-xl shadow-xl border border-cyan-900/50 bg-gradient-to-b from-gray-900 to-gray-950 p-5 hover:bg-gray-800/50 transition-all duration-300 transform hover:-translate-y-1 ${className}`}>
      <div className="flex items-center gap-2 mb-3">
        <div className={iconColor}>{icon}</div>
        <h3 className={`text-base md:text-lg lg:text-xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-${gradientFrom} to-${gradientTo}`}>
          {title}
        </h3>
      </div>
      <p className="text-gray-300 font-light text-sm md:text-base">
        {description}
      </p>
    </div>
  );
}
