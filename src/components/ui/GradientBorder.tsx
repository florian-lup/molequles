import React from 'react';

// Props interface for the GradientBorder component
interface GradientBorderProps {
  showTop?: boolean; // Whether to show the top border
  showBottom?: boolean; // Whether to show the bottom border
  gradient?: string; // Tailwind gradient classes
  className?: string; // Additional CSS classes
  width?: string; // Border width (CSS value)
  opacity?: number; // Border opacity (0-1)
}

/**
 * A decorative component that adds gradient borders to containers
 * Features customizable gradients with fade-out effects on the edges
 */
const GradientBorder: React.FC<GradientBorderProps> = ({
  showTop = false,
  showBottom = true,
  gradient = 'from-pink-400 via-indigo-400 to-cyan-400',
  className = '',
  width = '100%',
  opacity = 0.3,
}) => {
  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      {/* Top gradient border */}
      {showTop && (
        <div className="absolute top-0 left-0 right-0 flex justify-center">
          <div
            className={`h-px bg-gradient-to-r ${gradient}`}
            style={{
              width,
              maskImage:
                'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
              WebkitMaskImage:
                'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
              opacity,
            }}
          />
        </div>
      )}

      {/* Bottom gradient border */}
      {showBottom && (
        <div className="absolute bottom-0 left-0 right-0 flex justify-center">
          <div
            className={`h-px bg-gradient-to-r ${gradient}`}
            style={{
              width,
              maskImage:
                'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
              WebkitMaskImage:
                'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
              opacity,
            }}
          />
        </div>
      )}
    </div>
  );
};

export default GradientBorder;
