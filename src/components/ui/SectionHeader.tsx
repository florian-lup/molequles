import { SectionHeaderProps } from '@/types/ui';
import Badge from '@/components/ui/Badge';

export default function SectionHeader({
  title,
  description,
  badge,
  subtitle,
  titleAccent,
  align = 'center',
  textColor = 'text-gray-900',
  accentColor = 'text-indigo-600', 
  badgeColor = 'text-indigo-600',
  badgeBg = 'bg-indigo-50',
  centered = align === 'center'
}: SectionHeaderProps) {
  // Process title to highlight accent text if provided (only if title exists)
  const titleParts = title && titleAccent 
    ? title.split(titleAccent).map((part, i, arr) => 
        i < arr.length - 1 ? (
          <span key={`part-${i}`}>
            {part}
            <span className={`${accentColor} relative`}>
              {titleAccent}
              <span className="absolute bottom-1 left-0 w-full h-2 bg-indigo-100/80 -z-10 rounded-sm"></span>
            </span>
          </span>
        ) : (
          <span key={`part-${i}`}>{part}</span>
        )
      )
    : [title];

  const alignClass = {
    'left': 'text-left',
    'center': 'text-center',
    'right': 'text-right'
  }[align];

  const marginClass = centered ? 'mx-auto' : '';
  const marginBottom = title ? 'mb-8 sm:mb-10 md:mb-12 lg:mb-16' : 'mb-6 sm:mb-8 md:mb-10';

  // Enhanced description styling when there's no title
  const descriptionClasses = !title 
    ? 'text-lg sm:text-xl md:text-2xl font-light tracking-wide leading-relaxed text-transparent bg-clip-text bg-gradient-to-r from-gray-200 via-white to-gray-300 drop-shadow-sm' 
    : 'text-gray-600';

  return (
    <div className={`${marginBottom} ${alignClass}`}>
      {badge && (
        <Badge 
          color="custom"
          customColors={{
            text: badgeColor,
            bg: badgeBg,
            border: 'border-transparent'
          }}
          withPulse
          className="mb-3 sm:mb-4 uppercase text-xs font-semibold tracking-wider"
        >
          {badge}
        </Badge>
      )}
      
      {subtitle && (
        <p className="text-xs sm:text-sm font-medium text-indigo-600 uppercase tracking-wider mb-1 sm:mb-2">
          {subtitle}
        </p>
      )}
      
      {title && (
        <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 md:mb-8 leading-tight ${textColor}`}>
          {titleParts}
        </h2>
      )}
      
      {description && (
        <p className={`text-base sm:text-lg md:text-xl max-w-2xl ${marginClass} ${descriptionClasses} transition-all duration-300`}>
          {description}
        </p>
      )}
    </div>
  );
} 