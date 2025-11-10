'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface AuroraGradientProps {
  children: React.ReactNode;
  className?: string;
  colors?: string[];
  opacity?: number;
  blur?: number;
}

export function AuroraGradient({
  children,
  className = '',
  colors = [
  'rgba(6, 182, 212, 0.6)',   // cyan más fuerte
  'rgba(59, 130, 246, 0.5)',  // azul más intenso
  'rgba(99, 102, 241, 0.4)'   // índigo más presente
],
  opacity = 0.8,
  blur = 60,
}: AuroraGradientProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const gradientRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    const gradient = gradientRef.current;
    if (!card || !gradient) return;

    let animationFrame: number;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const offsetX = ((x - centerX) / centerX) * 60;
      const offsetY = ((y - centerY) / centerY) * 20;

      animationFrame = requestAnimationFrame(() => {
        gradient.style.left = `${50 + offsetX}%`;
        gradient.style.top = `${50 + offsetY}%`;
        gradient.style.opacity = `${opacity}`;
      });
    };

    const handleMouseLeave = () => {
      cancelAnimationFrame(animationFrame);
      gradient.style.opacity = '0';
      gradient.style.left = '50%';
      gradient.style.top = '50%';
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrame);
    };
  }, [opacity]);

  const gradientStyle = {
    background: `radial-gradient(circle at 50% 50%, ${colors.join(', ')})`,
    filter: `blur(${blur}px)`,
  };

  return (
    <div ref={cardRef} className={`relative overflow-hidden ${className}`}>
      {/* Gradiente que sigue al mouse */}
      <div
        ref={gradientRef}
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-0 transition-opacity duration-500"
        style={gradientStyle}
      />

      {/* Contenido */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}