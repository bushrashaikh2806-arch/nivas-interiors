import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { FadeIn } from '@/components/AnimationComponents';
import { SITE_CONFIG } from '@/data/siteData';

export default function CTASection() {
  return (
    <section style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Background Image */}
      <div style={{ position: 'absolute', inset: 0 }}>
        <img
          src="https://images.unsplash.com/photo-1615529328331-f8917597711f?w=1600&q=85"
          alt="Beautiful interior design space"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(41,40,36,0.72)',
        }} />
      </div>

      <div style={{
        position: 'relative',
        zIndex: 1,
        maxWidth: '1320px',
        margin: '0 auto',
        padding: '7rem 1.5rem',
        textAlign: 'center',
      }}>
        <FadeIn direction="up">
          <div style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '0.75rem',
            fontWeight: 600,
            letterSpacing: '0.2em',
            textTransform: 'uppercase' as const,
            color: '#C8B69E',
            marginBottom: '1.5rem',
          }}>
            Get Started
          </div>

          <h2 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(2.25rem, 5vw, 4rem)',
            fontWeight: 500,
            lineHeight: 1.1,
            color: '#F7F4EE',
            marginBottom: '1.25rem',
            letterSpacing: '-0.01em',
          }}>
            Let's Create Something Beautiful.
          </h2>

          <p style={{
            color: 'rgba(247,244,238,0.7)',
            fontSize: '1.0625rem',
            lineHeight: 1.7,
            marginBottom: '2.5rem',
            maxWidth: '480px',
            margin: '0 auto 2.5rem',
          }}>
            Have a space in mind? Let's discuss your ideas and bring them to life.
          </p>

          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}>
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
                letterSpacing: '0.04em',
                textDecoration: 'none',
                border: '1px solid #80664F',
                transition: 'all 0.3s ease',
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
              Get in Touch
              <ArrowRight size={16} />
            </Link>

            <a
              href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '1rem 2.25rem',
                backgroundColor: 'transparent',
                color: '#F7F4EE',
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.9375rem',
                fontWeight: 600,
                letterSpacing: '0.04em',
                textDecoration: 'none',
                border: '1px solid rgba(247,244,238,0.4)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.backgroundColor = 'rgba(247,244,238,0.1)';
                el.style.borderColor = '#F7F4EE';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.backgroundColor = 'transparent';
                el.style.borderColor = 'rgba(247,244,238,0.4)';
              }}
            >
              <MessageCircle size={16} />
              WhatsApp Us
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
