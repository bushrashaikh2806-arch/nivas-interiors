
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { FadeIn, SectionHeader } from '@/components/AnimationComponents';
import { motion } from 'framer-motion';

const highlights = [
  { label: 'Thoughtful Design', desc: 'Every element is chosen with purpose and care.' },
  { label: 'Quality Craftsmanship', desc: 'Superior materials and skilled execution in every project.' },
  { label: 'Personalised Spaces', desc: 'Interiors that reflect your unique lifestyle and personality.' },
];

export default function AboutSection() {
  return (
    <section style={{ padding: '6rem 0', backgroundColor: '#F7F4EE' }}>
      <div style={{ maxWidth: '1320px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '5rem',
            alignItems: 'center',
          }}
        >
          {/* Image */}
          <FadeIn direction="right">
            <div
              style={{
                position: 'relative',
                overflow: 'hidden',
                aspectRatio: '4/5',
              }}
            >
              <img
                src="/images/about-nivas.png"
                alt="Beautiful interior space designed by Nivas Interiors"
                loading="lazy"
                style={{
                  width: '100%',
                 height: '100%',
                  aspectRatio: '4 / 5',
                  objectFit: 'cover',
                  display: 'block',
                  transition: 'transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.04)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLImageElement).style.transform = 'scale(1)';
                }}
              />
              {/* Accent line */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '-1.5rem',
                  right: '-1.5rem',
                  width: '60%',
                  height: '60%',
                  border: '1px solid #C8B69E',
                  pointerEvents: 'none',
                  zIndex: -1,
                }}
              />
            </div>
          </FadeIn>

          {/* Content */}
          <FadeIn direction="left" delay={0.15}>
            <div>
              <div className="about-section-header">
                <SectionHeader
                  label="About Nivas"
                  heading="We Design Spaces That Feel Like You."
                />
              </div>

              <p
                style={{
                  color: '#777168',
                  fontSize: '1.1875rem',
                  lineHeight: 1.75,
                  marginBottom: '2.5rem',
                }}
              >
                At Nivas Interiors, we believe every space has a story. Our approach combines thoughtful planning, timeless aesthetics and functional design to create interiors that feel personal, comfortable and welcoming.
              </p>

              {/* Highlights */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.5rem',
                  marginBottom: '2.5rem',
                }}
              >
                {highlights.map(({ label, desc }, i) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                    style={{
                      display: 'flex',
                      gap: '1rem',
                      alignItems: 'flex-start',
                    }}
                  >
                    <CheckCircle2
                      size={24}
                      style={{
                        color: '#C8B69E',
                        flexShrink: 0,
                        marginTop: '2px',
                      }}
                    />

                    <div>
                      <div
                        style={{
                          fontFamily: 'Inter, sans-serif',
                          fontWeight: 600,
                          fontSize: '1.125rem',
                          color: '#292824',
                          marginBottom: '0.2rem',
                        }}
                      >
                        {label}
                      </div>

                      <div
                        style={{
                          fontSize: '1rem',
                          color: '#777168',
                          lineHeight: 1.6,
                        }}
                      >
                        {desc}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Discover Our Story */}
              <Link
                to="/about"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '1.0625rem',
                  fontWeight: 600,
                  color: '#292824',
                  textDecoration: 'none',
                  borderBottom: '1px solid #292824',
                  paddingBottom: '2px',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.color = '#80664F';
                  el.style.borderColor = '#80664F';
                  el.style.gap = '0.75rem';
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.color = '#292824';
                  el.style.borderColor = '#292824';
                  el.style.gap = '0.5rem';
                }}
              >
                Discover Our Story
                <ArrowRight size={18} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Responsive heading size */}
      <style>{`
        .about-section-header h1,
        .about-section-header h2,
        .about-section-header h3 {
          font-size: clamp(2.5rem, 4.5vw, 3.75rem) !important;
          line-height: 1.15 !important;
        }

        @media (max-width: 600px) {
          .about-section-header h1,
          .about-section-header h2,
          .about-section-header h3 {
            font-size: clamp(2.2rem, 8vw, 2.8rem) !important;
          }
        }
      `}</style>
    </section>
  );
}
