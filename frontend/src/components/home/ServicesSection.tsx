
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { SectionHeader, StaggerContainer } from '@/components/AnimationComponents';
import { SERVICES } from '@/data/siteData';

export default function ServicesSection() {
  return (
    <section style={{ padding: '6rem 0', backgroundColor: '#E9E1D5' }}>
      <div style={{ maxWidth: '1320px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '3rem' }}>
          <SectionHeader
            label="What We Do"
            heading="Spaces Designed Around Your Life."
          />

          <Link
            to="/services"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.8125rem',
              fontWeight: 600,
              color: '#292824',
              textDecoration: 'none',
              borderBottom: '1px solid #292824',
              paddingBottom: '2px',
              transition: 'all 0.3s ease',
              whiteSpace: 'nowrap',
              alignSelf: 'flex-end',
              marginBottom: '3.5rem',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.color = '#80664F';
              el.style.borderColor = '#80664F';
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.color = '#292824';
              el.style.borderColor = '#292824';
            }}
          >
            View All Services
            <ArrowRight size={14} />
          </Link>
        </div>

        <StaggerContainer
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: '1.5rem',
            alignItems: 'stretch',
          }}
          staggerDelay={0.07}
        >
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </StaggerContainer>
      </div>

      {/* Responsive styling */}
      <style>{`
        @media (max-width: 600px) {
          .service-card-content {
            padding: 1.5rem !important;
          }

          .service-card-title {
            font-size: 1.3rem !important;
          }

          .service-card-description {
            font-size: 1rem !important;
          }

          .service-card-link {
            font-size: 0.95rem !important;
          }
        }
      `}</style>
    </section>
  );
}

function ServiceCard({ service }: { service: typeof SERVICES[0] }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
      }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      style={{
        backgroundColor: '#FFFFFF',
        overflow: 'hidden',
        cursor: 'pointer',
        border: '1px solid #E5DED3',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        boxSizing: 'border-box',
      }}
    >
      {/* Image */}
      <div style={{ overflow: 'hidden', aspectRatio: '4 / 3' }}>
        <motion.img
          src={service.image}
          alt={`${service.title} by Nivas Interiors`}
          loading="lazy"
          whileHover={{ scale: 1.07 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{
            width: '100%',
            height: '100%',
            aspectRatio: '4 / 3',
            objectFit: 'cover',
            display: 'block',
          }}
        />
      </div>

      {/* Content */}
      <div
        className="service-card-content"
        style={{
          padding: '2rem',
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <h3
          className="service-card-title"
          style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: '1.5rem',
            lineHeight: 1.25,
            fontWeight: 500,
            color: '#292824',
            marginBottom: '0.625rem',
          }}
        >
          {service.title}
        </h3>

        <p
          className="service-card-description"
          style={{
            color: '#777168',
            fontSize: '1.0625rem',
            lineHeight: 1.7,
            marginBottom: '1.25rem',
          }}
        >
          {service.description}
        </p>

        <Link
          to="/services"
          className="service-card-link"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.375rem',
            fontFamily: 'Inter, sans-serif',
            fontSize: '1rem',
            fontWeight: 600,
            color: '#80664F',
            textDecoration: 'none',
            transition: 'gap 0.3s ease',
            marginTop: 'auto',
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.gap = '0.625rem';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.gap = '0.375rem';
          }}
        >
          Explore Service
          <ArrowRight size={18} />
        </Link>
      </div>
    </motion.div>
  );
}
