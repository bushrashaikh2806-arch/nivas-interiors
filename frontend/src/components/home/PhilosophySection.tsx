import { FadeIn } from '@/components/AnimationComponents';
import { motion } from 'framer-motion';

const keywords = ['SIMPLICITY', 'BALANCE', 'TIMELESSNESS'];

export default function PhilosophySection() {
  return (
    <section style={{ backgroundColor: '#E9E1D5', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1320px', margin: '0 auto', padding: '6rem 1.5rem' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '5rem',
            alignItems: 'center',
          }}
        >
          {/* Text side */}
          <FadeIn direction="right">
            <div>
              <div style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.2em',
                textTransform: 'uppercase' as const,
                color: '#C8B69E',
                marginBottom: '1rem',
              }}>
                Our Philosophy
              </div>

              <h2 style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 500,
                lineHeight: 1.15,
                color: '#292824',
                marginBottom: '1.5rem',
                letterSpacing: '-0.01em',
              }}>
                Beauty in Simplicity.
              </h2>

              <p style={{
                color: '#777168',
                fontSize: '1rem',
                lineHeight: 1.8,
                marginBottom: '3rem',
                maxWidth: '480px',
              }}>
                We believe great interiors are not about adding more. They are about choosing the right elements, balancing aesthetics and functionality, and creating spaces that stand the test of time.
              </p>

              {/* Keywords */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                {keywords.map((word, i) => (
                  <motion.div
                    key={word}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + i * 0.12, duration: 0.5 }}
                    style={{
                      fontFamily: 'Playfair Display, serif',
                      fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
                      fontWeight: 600,
                      color: i === 0 ? '#292824' : i === 1 ? '#777168' : '#C8B69E',
                      letterSpacing: '0.05em',
                      borderBottom: i < keywords.length - 1 ? '1px solid rgba(41,40,36,0.1)' : 'none',
                      padding: '0.75rem 0',
                      transition: 'color 0.3s ease',
                    }}
                  >
                    {word}
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Image */}
          <FadeIn direction="left" delay={0.2}>
            <div
              style={{
                overflow: 'hidden',
                aspectRatio: '3/4',
                position: 'relative',
              }}
            >
              <motion.img
                src="https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?w=800&q=85"
                alt="Minimal luxury interior design concept"
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
