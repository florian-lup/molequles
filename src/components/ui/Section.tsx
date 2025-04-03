import React from 'react';
import Container from './Container';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: string;
  id?: string;
}

export default function Section({ 
  children, 
  className = '',
  background = '',
  id
}: SectionProps) {
  return (
    <section id={id} className={`py-20 ${background} ${className}`}>
      <Container>
        {children}
      </Container>
    </section>
  );
} 