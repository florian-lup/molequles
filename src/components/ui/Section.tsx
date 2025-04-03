import React from 'react';
import Container from './Container';
import { SectionProps } from '@/types/ui';

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