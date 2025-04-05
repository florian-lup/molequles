import React from 'react';

interface GradientBorderProps {
  showTop?: boolean;
  showBottom?: boolean;
  gradient?: string;
  className?: string;
  width?: string;
}

const GradientBorder: React.FC<GradientBorderProps> = ({
  showTop = true,
  showBottom = true,
  gradient = 'from-pink-400 via-indigo-400 to-cyan-400',
  className = '',
  width = '60%',
}) => {
  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      {showTop && (
        <div className="absolute top-0 left-0 right-0 flex justify-center">
          <div 
            className={`h-px bg-gradient-to-r ${gradient}`}
            style={{ width }}
          />
        </div>
      )}
      {showBottom && (
        <div className="absolute bottom-0 left-0 right-0 flex justify-center">
          <div 
            className={`h-px bg-gradient-to-r ${gradient}`}
            style={{ width }}
          />
        </div>
      )}
    </div>
  );
};

export default GradientBorder; 