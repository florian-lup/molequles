import React from 'react';

interface GradientBorderProps {
  showTop?: boolean;
  showBottom?: boolean;
  gradient?: string;
  className?: string;
  width?: string;
  opacity?: number;
}

const GradientBorder: React.FC<GradientBorderProps> = ({
  showTop = true,
  showBottom = true,
  gradient = 'from-pink-400 via-indigo-400 to-cyan-400',
  className = '',
  width = '100%',
  opacity = 0.3,
}) => {
  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      {showTop && (
        <div className="absolute top-0 left-0 right-0 flex justify-center">
          <div 
            className={`h-px bg-gradient-to-r ${gradient}`}
            style={{ 
              width,
              maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
              WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
              opacity
            }}
          />
        </div>
      )}
      {showBottom && (
        <div className="absolute bottom-0 left-0 right-0 flex justify-center">
          <div 
            className={`h-px bg-gradient-to-r ${gradient}`}
            style={{ 
              width,
              maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
              WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
              opacity
            }}
          />
        </div>
      )}
    </div>
  );
};

export default GradientBorder; 