
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.08, 1.0]);
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);

  return (
    <section
      ref={containerRef}
      style={{
        position: 'relative',
        height: '90vh',
        minHeight: '600px',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {/* Background Image with Parallax */}
      <motion.div
        style={{
          position: 'absolute',
          inset: '-10%',
          scale: imageScale,
          y: imageY,
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1920&q=90"
          alt="Luxury warm interior living space with wooden panels and natural light"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
          }}
        />
      </motion.div>

      {/* Gradient overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(to right, rgba(41,40,36,0.65) 0%, rgba(41,40,36,0.35) 55%, rgba(41,40,36,0.05) 100%)',
        }}
      />

      {/* Content */}
      <motion.div
        style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '1320px',
          margin: '0 auto',
          padding: '0 1.5rem',
          width: '100%',
          y: contentY,
        }}
      >
        <div style={{ maxWidth: '640px' }}>
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.75rem',
              fontWeight: 600,
              letterSpacing: '0.25em',
              textTransform: 'uppercase' as const,
              color: '#C8B69E',
              marginBottom: '0.4rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
            }}
          >
            <span
              style={{
                width: '40px',
                height: '1px',
                backgroundColor: '#C8B69E',
                display: 'inline-block',
                flexShrink: 0,
              }}
            />
            Interior Design Studio
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(3.5rem, 7vw, 6rem)',
              fontWeight: 600,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              color: '#F7F4EE',
              marginBottom: '1rem',
            }}
            className="hero-heading"
          >
            Your Space.
            <br />
            Your Story.
            <br />
            <em style={{ fontStyle: 'italic', fontWeight: 500 }}>Our Design.</em>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
            style={{
              color: 'rgba(247,244,238,0.8)',
              fontSize: 'clamp(1rem, 1.5vw, 1.25rem)',
              lineHeight: 1.7,
              marginBottom: '2.5rem',
              maxWidth: '640px',
            }}
          >
            We create beautiful, thoughtful and functional interiors that reflect your personality and transform the way you live.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.85 }}
            style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
          >
            <Link
              to="/projects"
              className="hero-cta-button"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                padding: '1.125rem 2.25rem',
                backgroundColor: '#80664F',
                color: '#F7F4EE',
                fontFamily: 'Inter, sans-serif',
                fontSize: '1.0625rem',
                fontWeight: 600,
                letterSpacing: '0.05em',
                textDecoration: 'none',
                border: '1px solid #80664F',
                transition: 'all 0.3s ease',
                minHeight: '60px',
                boxSizing: 'border-box',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.backgroundColor = '#F7F4EE';
                el.style.color = '#292824';
                el.style.borderColor = '#F7F4EE';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.backgroundColor = '#80664F';
                el.style.color = '#F7F4EE';
                el.style.borderColor = '#80664F';
              }}
            >
              Explore Our Projects
              <ArrowRight size={18} />
            </Link>

            <Link
              to="/contact"
              className="hero-cta-button"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                padding: '1.125rem 2.25rem',
                backgroundColor: 'transparent',
                color: '#F7F4EE',
                fontFamily: 'Inter, sans-serif',
                fontSize: '1.0625rem',
                fontWeight: 600,
                letterSpacing: '0.05em',
                textDecoration: 'none',
                border: '1px solid rgba(247,244,238,0.5)',
                transition: 'all 0.3s ease',
                backdropFilter: 'blur(4px)',
                minHeight: '60px',
                boxSizing: 'border-box',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.backgroundColor = 'rgba(247,244,238,0.15)';
                el.style.borderColor = '#F7F4EE';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.backgroundColor = 'transparent';
                el.style.borderColor = 'rgba(247,244,238,0.5)';
              }}
            >
              Book a Consultation
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        style={{
          position: 'absolute',
          bottom: '2.5rem',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
          color: 'rgba(247,244,238,0.5)',
          cursor: 'pointer',
        }}
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <span
          style={{
            fontSize: '0.7rem',
            fontFamily: 'Inter, sans-serif',
            letterSpacing: '0.15em',
            textTransform: 'uppercase' as const,
          }}
        >
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </motion.div>

      {/* Responsive Sizes */}
      <style>{`
        @media (max-width: 768px) {
          .hero-heading {
            font-size: clamp(2.8rem, 9vw, 4rem) !important;
          }
        }

        @media (max-width: 600px) {
          .hero-cta-button {
            padding: 0.9rem 1.4rem !important;
            font-size: 0.95rem !important;
            min-height: 54px !important;
          }
        }

        @media (max-width: 400px) {
          .hero-cta-button {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
