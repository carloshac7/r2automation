'use client';

import { useEffect, useRef, useState } from 'react';

interface AuroraGradientProps {
  children: React.ReactNode;
  colors?: string[];
  opacity?: number;
  blur?: number;
  size?: string;
  className?: string;
}

export function AuroraGradient({
  children,
  colors = [
    'rgba(255, 0, 4, 0.5)',      // Rojo vibrante #ff0004
    'rgba(255, 155, 38, 0.6)',   // Naranja brillante #ff9b26
    'rgba(107, 33, 239, 0.5)',   // Púrpura eléctrico #6b21ef
    'rgba(6, 182, 212, 0.4)',    // Cyan brillante
    'rgba(59, 130, 246, 0.45)',  // Azul eléctrico
  ],
  opacity = 1,
  blur = 100,
  size = 'clamp(300px, 75%, 800px)',
  className = '',
}: AuroraGradientProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const gradientRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const card = cardRef.current;
    const gradient = gradientRef.current;
    if (!card || !gradient) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Cálculo mejorado para movimiento más notorio
      const xPercent = 50 + ((x / rect.width - 0.5) * 50);
      const yPercent = 50 + ((y / rect.height - 0.5) * 15);

      // Aplicar transformación más visible
      gradient.style.left = `${xPercent}%`;
      gradient.style.top = `${yPercent}%`;
      gradient.style.opacity = opacity.toString();
      gradient.style.visibility = 'visible';
      gradient.style.transform = `translate(-50%, -50%) scale(1.3)`;
    };

    const handleMouseLeave = () => {
      gradient.style.opacity = '0';
      gradient.style.transform = 'translate(-50%, -50%) scale(0.8)';
      setTimeout(() => {
        gradient.style.visibility = 'hidden';
        gradient.style.left = '50%';
        gradient.style.top = '50%';
      }, 800);
    };

    const handleMouseEnter = () => {
      setIsHovering(true);
      gradient.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);
    card.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
      card.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [opacity]);

  const gradientStyle = {
    background: `linear-gradient(136deg, ${colors.join(', ')})`,
    filter: `blur(${blur}px)`,
    mixBlendMode: 'normal' as const,
    borderRadius: '100%',
  };

  return (
    <div
      ref={cardRef}
      className={`aurora-card relative overflow-hidden ${className}`}
    >
      {/* Gradiente aurora más visible */}
      <div
        ref={gradientRef}
        className="aurora-gradient pointer-events-none absolute opacity-0 invisible"
        style={{
          ...gradientStyle,
          width: size,
          aspectRatio: '1',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: -1,
          transition: 'left 0.8s cubic-bezier(0.4, 0, 0.2, 1), top 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      />

      {/* Contenido */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}