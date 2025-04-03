interface SectionHeaderProps {
  title: string;
  description?: string;
  badge?: string;
  titleAccent?: string;
  align?: 'left' | 'center' | 'right';
  textColor?: string;
  accentColor?: string;
  badgeColor?: string;
  badgeBg?: string;
}

export default function SectionHeader({
  title,
  description,
  badge,
  titleAccent,
  align = 'center',
  textColor = 'text-gray-900 dark:text-white',
  accentColor = 'text-purple-600', 
  badgeColor = 'text-purple-300',
  badgeBg = 'bg-indigo-900'
}: SectionHeaderProps) {
  const titleParts = titleAccent 
    ? title.split(titleAccent).map((part, i, arr) => 
        i < arr.length - 1 ? (
          <span key={`part-${i}`}>
            {part}
            <span className={accentColor}>{titleAccent}</span>
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

  const marginClass = align === 'center' ? 'mx-auto' : '';

  return (
    <div className={`mb-16 ${alignClass}`}>
      {badge && (
        <span className={`inline-block px-4 py-1 ${badgeBg} rounded-full ${badgeColor} text-sm font-medium mb-4`}>
          {badge}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${textColor}`}>
        {titleParts}
      </h2>
      {description && (
        <p className={`text-lg text-gray-600 dark:text-gray-400 max-w-2xl ${marginClass}`}>
          {description}
        </p>
      )}
    </div>
  );
} 