import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { FadeIn, SectionHeader, StaggerContainer } from '@/components/AnimationComponents';
import { motion } from 'framer-motion';
import { SERVICES } from '@/data/siteData';
import CTASection from '@/components/home/CTASection';

export default function ServicesPage() {
  return (
    <>
      <Helmet>
        <title>Services — Nivas Interiors</title>
        <meta name="description" content="Explore Nivas Interiors' full range of interior design services: living rooms, bedrooms, kitchens, wardrobes, TV units, false ceilings, office interiors and complete home solutions." />
      </Helmet>

      {/* Hero */}
      <section style={{ position: 'relative', height: '60vh', minHeight: '420px', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
        <img
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1800&q=85"
          alt="Interior design services"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(41,40,36,0.58)' }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '1320px', margin: '0 auto', padding: '0 1.5rem', paddingTop: '5rem' }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase' as const, color: '#C8B69E', marginBottom: '1rem' }}>
              What We Offer
            </div>
            <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2.25rem, 5vw, 4rem)', fontWeight: 600, color: '#F7F4EE', lineHeight: 1.1 }}>
              Spaces Designed Around Your Life.
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section style={{ padding: '6rem 0', backgroundColor: '#F7F4EE' }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto', padding: '0 1.5rem' }}>
          <SectionHeader
            label="Our Services"
            heading="Everything Your Home Needs."
            description="From a single room to a complete home transformation, we handle every aspect of interior design with care and expertise."
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '5rem' }}>
            {SERVICES.map((service, i) => (
              <ServiceDetailCard key={service.id} service={service} reverse={i % 2 !== 0} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

function ServiceDetailCard({ service, reverse }: { service: typeof SERVICES[0]; reverse: boolean }) {
  return (
    <FadeIn direction="up">
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '4rem',
          alignItems: 'center',
          direction: reverse ? 'rtl' : 'ltr',
        }}
      >
        {/* Image */}
        <div style={{ direction: 'ltr', overflow: 'hidden', aspectRatio: '4/3' }}>
          <motion.img
            src={service.image}
            alt={service.title}
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.6 }}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        </div>

        {/* Content */}
        <div style={{ direction: 'ltr' }}>
          <div style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase' as const, color: '#C8B69E', marginBottom: '0.75rem' }}>
            {service.category}
          </div>
          <h2 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(1.5rem, 3vw, 2rem)',
            fontWeight: 500,
            color: '#292824',
            marginBottom: '1rem',
            lineHeight: 1.2,
          }}>
            {service.title}
          </h2>
          <p style={{ color: '#777168', fontSize: '0.9375rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
            {service.longDescription}
          </p>

          {/* Features */}
          <div style={{ marginBottom: '1.75rem' }}>
            <div style={{ fontSize: '0.8125rem', fontWeight: 600, color: '#292824', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>
              Key Features
            </div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '0.5rem',
            }}>
              {service.features.map((f) => (
                <div key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.875rem', color: '#777168' }}>
                  <Check size={14} style={{ color: '#C8B69E', flexShrink: 0, marginTop: '3px' }} />
                  {f}
                </div>
              ))}
            </div>
          </div>

          <Link
            to="/contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.875rem 1.75rem',
              backgroundColor: '#80664F',
              color: '#F7F4EE',
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.875rem',
              fontWeight: 600,
              letterSpacing: '0.04em',
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
            Enquire About This Service
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </FadeIn>
  );
}
