import { SectionHeaderProps } from '@/types/ui';

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
  // Process title to highlight accent text if provided
  const titleParts = titleAccent 
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

  return (
    <div className={`mb-12 md:mb-16 ${alignClass}`}>
      {badge && (
        <span className={`inline-block px-3 py-1 ${badgeBg} rounded-full ${badgeColor} text-xs font-semibold tracking-wider uppercase mb-4`}>
          {badge}
        </span>
      )}
      
      {subtitle && (
        <p className="text-sm font-medium text-indigo-600 uppercase tracking-wider mb-2">
          {subtitle}
        </p>
      )}
      
      <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 leading-tight ${textColor}`}>
        {titleParts}
      </h2>
      
      {description && (
        <p className={`text-lg text-gray-600 max-w-2xl ${marginClass} leading-relaxed md:text-xl`}>
          {description}
        </p>
      )}
    </div>
  );
} 