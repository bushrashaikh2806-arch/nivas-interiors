import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Star, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeIn, SectionHeader, StaggerContainer } from '@/components/AnimationComponents';
import { TESTIMONIALS } from '@/data/siteData';

export default function TestimonialsPage() {
  return (
    <>
      <Helmet>
        <title>Testimonials — Nivas Interiors</title>
        <meta name="description" content="Read what clients say about working with Nivas Interiors and their interior design experience." />
      </Helmet>

      {/* Hero */}
      <section style={{ backgroundColor: '#292824', paddingTop: '9rem', paddingBottom: '5rem', borderBottom: '1px solid rgba(247,244,238,0.08)' }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto', padding: '0 1.5rem' }}>
          <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase' as const, color: '#C8B69E', marginBottom: '1rem' }}>
              Client Stories
            </div>
            <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2.25rem, 5vw, 4rem)', fontWeight: 600, color: '#F7F4EE', lineHeight: 1.1, maxWidth: '700px' }}>
              What Our Clients Say.
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Testimonial Grid */}
      <section style={{ padding: '6rem 0', backgroundColor: '#F7F4EE' }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto', padding: '0 1.5rem' }}>
          <StaggerContainer
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: '1.5rem',
            }}
            staggerDelay={0.09}
          >
            {TESTIMONIALS.map((t) => (
              <motion.div
                key={t.id}
                variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55 } } }}
                style={{
                  padding: '2.25rem',
                  border: '1px solid #E5DED3',
                  backgroundColor: '#FFFFFF',
                  display: 'flex',
                  flexDirection: 'column',
                }}
                whileHover={{ y: -4, borderColor: '#C8B69E', boxShadow: '0 20px 50px rgba(41,40,36,0.06)' }}
              >
                {/* Stars */}
                <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1.25rem' }}>
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={15} fill="#C8B69E" color="#C8B69E" />
                  ))}
                </div>

                <p style={{
                  color: '#777168',
                  fontSize: '0.9375rem',
                  lineHeight: 1.75,
                  fontStyle: 'italic',
                  flex: 1,
                  marginBottom: '1.75rem',
                }}>
                  "{t.review}"
                </p>

                <div style={{ borderTop: '1px solid #E5DED3', paddingTop: '1.25rem' }}>
                  <div style={{
                    fontFamily: 'Playfair Display, serif',
                    fontWeight: 500,
                    color: '#292824',
                    fontSize: '1rem',
                    marginBottom: '0.25rem',
                  }}>
                    {t.name}
                  </div>
                  <div style={{ fontSize: '0.8125rem', color: '#C8B69E' }}>
                    {t.project} · {t.location}
                  </div>
                </div>
              </motion.div>
            ))}
          </StaggerContainer>

          <FadeIn direction="up">
            <div style={{
              marginTop: '3rem',
              padding: '2rem',
              border: '1px solid #E5DED3',
              backgroundColor: '#F7F4EE',
              textAlign: 'center',
            }}>
              <p style={{ color: '#777168', fontSize: '0.875rem', fontStyle: 'italic' }}>
                * These are placeholder testimonials for demonstration purposes only. Real client testimonials will be added with explicit permission from clients upon project completion.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '5rem 0', backgroundColor: '#E9E1D5' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', padding: '0 1.5rem', textAlign: 'center' }}>
          <FadeIn direction="up">
            <div style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase' as const, color: '#C8B69E', marginBottom: '1rem' }}>
              Work With Us
            </div>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 500, color: '#292824', marginBottom: '1.25rem' }}>
              Ready to Begin Your Own Story?
            </h2>
            <p style={{ color: '#777168', fontSize: '1rem', lineHeight: 1.7, marginBottom: '2rem' }}>
              Let's design a space you'll love to call home. Book your consultation today.
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
              <ArrowRight size={15} />
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
