import { ReactNode, useEffect, useRef, useState } from 'react';

// Props interface for the Section component
interface SectionProps {
  id?: string; // Optional ID for the section
  className?: string; // Additional CSS classes
  ariaLabel?: string; // Accessibility label
  children: ReactNode; // Child components/elements
  fullScreen?: boolean; // Whether section should be full screen height
  background?: string; // Background color class
  showParticles?: boolean; // Whether to show particles in the background
}

// Particle component for subtle background animation
const Particles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      if (canvasRef.current?.parentElement) {
        setDimensions({
          width: canvasRef.current.parentElement.offsetWidth,
          height: canvasRef.current.parentElement.offsetHeight,
        });
      }
    };

    window.addEventListener('resize', updateDimensions);
    updateDimensions();
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    if (!canvasRef.current || dimensions.width === 0) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = dimensions.width;
    canvas.height = dimensions.height;

    const particleCount = Math.floor(dimensions.width * dimensions.height / 15000);
    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
    }> = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * dimensions.width,
        y: Math.random() * dimensions.height,
        size: Math.random() * 2 + 0.5,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.5 + 0.1,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, dimensions.width, dimensions.height);
      
      particles.forEach(particle => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`;
        ctx.fill();
        
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        if (particle.x < 0 || particle.x > dimensions.width) {
          particle.speedX = -particle.speedX;
        }
        
        if (particle.y < 0 || particle.y > dimensions.height) {
          particle.speedY = -particle.speedY;
        }
      });
      
      requestAnimationFrame(animate);
    };
    
    const animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [dimensions]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0"
      style={{ opacity: 0.6 }}
    />
  );
};

/**
 * A reusable section component that provides consistent layout structure
 * Can be configured for full-screen or partial height sections with custom backgrounds
 */
const Section = ({
  id,
  className = '',
  ariaLabel,
  children,
  fullScreen = true,
  background = 'bg-gray-950',
  showParticles = true,
}: SectionProps) => {
  return (
    <section
      id={id}
      className={`
        w-full
        relative
        ${fullScreen ? 'min-h-screen' : ''} 
        ${background} 
        ${className}`}
      aria-label={ariaLabel}
    >
      {showParticles && <Particles />}
      <div className="relative z-10">
        {children}
      </div>
    </section>
  );
};

export default Section;
