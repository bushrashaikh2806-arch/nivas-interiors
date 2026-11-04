import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  className?: string;
  style?: React.CSSProperties;
  once?: boolean;
}

export function FadeIn({
  children,
  delay = 0,
  direction = 'up',
  className,
  style,
  once = true,
}: FadeInProps) {
  const directionMap = {
    up: { y: 30 },
    down: { y: -30 },
    left: { x: 30 },
    right: { x: -30 },
    none: {},
  };

  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: 0, ...directionMap[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, margin: '-50px' }}
      transition={{
        duration: 0.65,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

interface StaggerContainerProps {
  children: ReactNode;
  staggerDelay?: number;
  className?: string;
  style?: React.CSSProperties;
}

export function StaggerContainer({ children, staggerDelay = 0.08, className, style }: StaggerContainerProps) {
  return (
    <motion.div
      className={className}
      style={style}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export const staggerItem = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

interface SectionHeaderProps {
  label: string;
  heading: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
}

export function SectionHeader({ label, heading, description, centered = false, light = false }: SectionHeaderProps) {
  return (
    <FadeIn direction="up">
      <div style={{ textAlign: centered ? 'center' : 'left', marginBottom: '3.5rem' }}>
        <div
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '0.75rem',
            fontWeight: 600,
            letterSpacing: '0.2em',
            textTransform: 'uppercase' as const,
            color: '#C8B69E',
            marginBottom: '1rem',
          }}
        >
          {label}
        </div>
        <h2
          style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 500,
            lineHeight: 1.15,
            letterSpacing: '-0.01em',
            color: light ? '#F7F4EE' : '#292824',
            maxWidth: centered ? '700px' : '600px',
            margin: centered ? '0 auto' : undefined,
          }}
        >
          {heading}
        </h2>
        {description && (
          <p
            style={{
              marginTop: '1.25rem',
              fontSize: '1rem',
              lineHeight: 1.75,
              color: light ? 'rgba(247,244,238,0.7)' : '#777168',
              maxWidth: centered ? '560px' : '500px',
              margin: centered ? '1.25rem auto 0' : '1.25rem 0 0',
            }}
          >
            {description}
          </p>
        )}
      </div>
    </FadeIn>
  );
}
