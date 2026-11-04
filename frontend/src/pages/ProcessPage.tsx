import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeIn, SectionHeader, StaggerContainer } from '@/components/AnimationComponents';
import { PROCESS_STEPS } from '@/data/siteData';

export default function ProcessPage() {
  return (
    <>
      <Helmet>
        <title>Our Process — Nivas Interiors</title>
        <meta name="description" content="Discover how Nivas Interiors works — from the first consultation to the final handover of your beautifully designed space." />
      </Helmet>

      {/* Hero */}
      <section style={{ position: 'relative', height: '60vh', minHeight: '420px', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1800&q=85"
          alt="Interior design process"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(41,40,36,0.6)' }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '1320px', margin: '0 auto', padding: '0 1.5rem', paddingTop: '5rem' }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase' as const, color: '#C8B69E', marginBottom: '1rem' }}>
              How We Work
            </div>
            <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2.25rem, 5vw, 4rem)', fontWeight: 600, color: '#F7F4EE', lineHeight: 1.1 }}>
              From Vision to Reality.
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Process Steps */}
      <section style={{ padding: '6rem 0', backgroundColor: '#F7F4EE' }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto', padding: '0 1.5rem' }}>
          <SectionHeader
            label="Our Process"
            heading="Four Simple Steps to Your Dream Space."
            description="A clear, collaborative and transparent process from the first conversation to the final reveal."
            centered
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '5rem', marginTop: '2rem' }}>
            {PROCESS_STEPS.map((step, i) => (
              <FadeIn key={step.step} delay={i * 0.1} direction="up">
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: '4rem',
                  alignItems: 'center',
                }}>
                  {/* Image */}
                  <div style={{
                    order: i % 2 === 0 ? 0 : 1,
                    overflow: 'hidden',
                    aspectRatio: '4/3',
                    backgroundColor: '#E9E1D5',
                  }}>
                    <motion.img
                      src={[
                        'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80',
                        'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80',
                        'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
                        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80',
                      ][i]}
                      alt={step.title}
                      whileHover={{ scale: 1.04 }}
                      transition={{ duration: 0.6 }}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    />
                  </div>

                  {/* Content */}
                  <div style={{ order: i % 2 === 0 ? 1 : 0 }}>
                    <div style={{
                      fontFamily: 'Playfair Display, serif',
                      fontSize: 'clamp(4rem, 8vw, 7rem)',
                      fontWeight: 600,
                      color: '#E9E1D5',
                      lineHeight: 1,
                      marginBottom: '-1rem',
                    }}>
                      {step.step}
                    </div>
                    <div style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase' as const, color: '#C8B69E', marginBottom: '0.75rem' }}>
                      Step {step.step}
                    </div>
                    <h2 style={{
                      fontFamily: 'Playfair Display, serif',
                      fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                      fontWeight: 500,
                      color: '#292824',
                      marginBottom: '1rem',
                    }}>
                      {step.title}
                    </h2>
                    <p style={{ color: '#777168', fontSize: '1rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                      {step.description}
                    </p>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      {step.details.map((d) => (
                        <li key={d} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#777168', fontSize: '0.875rem' }}>
                          <span style={{ width: 6, height: 6, backgroundColor: '#C8B69E', borderRadius: '50%', flexShrink: 0 }} />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '5rem 0', backgroundColor: '#E9E1D5' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto', padding: '0 1.5rem', textAlign: 'center' }}>
          <FadeIn direction="up">
            <div style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase' as const, color: '#C8B69E', marginBottom: '1rem' }}>
              Ready to Begin?
            </div>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 500, color: '#292824', marginBottom: '1.25rem' }}>
              Start with a Conversation.
            </h2>
            <p style={{ color: '#777168', fontSize: '1rem', lineHeight: 1.7, marginBottom: '2rem' }}>
              Book your free initial consultation and let's start imagining what your space could become.
            </p>
            <Link
              to="/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '1rem 2.25rem',
                backgroundColor: '#80664F',
                color: '#F7F4EE',
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.9375rem',
                fontWeight: 600,
                textDecoration: 'none',
                border: '1px solid #80664F',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.backgroundColor = '#292824';
                el.style.borderColor = '#292824';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.backgroundColor = '#80664F';
                el.style.borderColor = '#80664F';
              }}
            >
              Book a Consultation
              <ArrowRight size={16} />
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
