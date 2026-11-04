import { FadeIn, SectionHeader, StaggerContainer } from '@/components/AnimationComponents';
import { PROCESS_STEPS } from '@/data/siteData';
import { motion } from 'framer-motion';

export default function ProcessSection() {
  return (
    <section style={{ padding: '6rem 0', backgroundColor: '#F7F4EE' }}>
      <div style={{ maxWidth: '1320px', margin: '0 auto', padding: '0 1.5rem' }}>
        <SectionHeader
          label="How We Work"
          heading="From Vision to Reality."
          centered
        />

        {/* Desktop Horizontal Timeline */}
        <div className="process-grid" style={{ position: 'relative' }}>
          {/* Connecting Line */}
          <div
            className="process-line"
            style={{
              position: 'absolute',
              top: '2.25rem',
              left: '10%',
              right: '10%',
              height: '1px',
              backgroundColor: '#E5DED3',
            }}
          />

          <StaggerContainer
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '2rem',
              position: 'relative',
            }}
            className="process-steps"
            staggerDelay={0.12}
          >
            {PROCESS_STEPS.map((step, i) => (
              <motion.div
                key={step.step}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
                style={{ textAlign: 'center' }}
              >
                {/* Step Number Circle */}
                <div style={{
                  width: '4.5rem',
                  height: '4.5rem',
                  borderRadius: '50%',
                  backgroundColor: i === 0 ? '#80664F' : '#FFFFFF',
                  border: `1px solid ${i === 0 ? '#80664F' : '#E5DED3'}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 2rem',
                  position: 'relative',
                  zIndex: 1,
                  transition: 'all 0.3s ease',
                }}>
                  <span style={{
                    fontFamily: 'Playfair Display, serif',
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: i === 0 ? '#F7F4EE' : '#C8B69E',
                  }}>
                    {step.step}
                  </span>
                </div>

                <h3 style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: '1.125rem',
                  fontWeight: 500,
                  color: '#292824',
                  marginBottom: '0.75rem',
                }}>
                  {step.title}
                </h3>

                <p style={{
                  color: '#777168',
                  fontSize: '0.875rem',
                  lineHeight: 1.7,
                }}>
                  {step.description}
                </p>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .process-steps {
            grid-template-columns: 1fr !important;
          }
          .process-line {
            display: none !important;
          }
        }
        @media (min-width: 769px) and (max-width: 1023px) {
          .process-steps {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .process-line {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
