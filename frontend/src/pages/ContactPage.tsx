
import { Helmet } from 'react-helmet-async';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeIn } from '@/components/AnimationComponents';
import { SITE_CONFIG } from '@/data/siteData';

// Add your Google Form URL here when it is ready.
const GOOGLE_FORM_URL = 'https://forms.gle/mXppTYsSyozG8qXv9';

export default function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Contact — Nivas Interiors</title>
        <meta
          name="description"
          content="Get in touch with Nivas Interiors. Book a consultation, discuss your project or simply ask a question. We'd love to hear from you."
        />
      </Helmet>

      {/* Hero */}
      <section
        style={{
          backgroundColor: '#292824',
          paddingTop: '9rem',
          paddingBottom: '5rem',
          borderBottom: '1px solid rgba(247,244,238,0.08)',
        }}
      >
        <div
          style={{
            maxWidth: '1320px',
            margin: '0 auto',
            padding: '0 1.5rem',
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div
              style={{
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.2em',
                textTransform: 'uppercase' as const,
                color: '#C8B69E',
                marginBottom: '1rem',
              }}
            >
              Get in Touch
            </div>

            <h1
              style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: 'clamp(2.25rem, 5vw, 4rem)',
                fontWeight: 600,
                color: '#F7F4EE',
                lineHeight: 1.1,
                maxWidth: '600px',
              }}
            >
              Let's Talk About Your Space.
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Contact Layout */}
      <section
        style={{
          padding: '6rem 0',
          backgroundColor: '#F7F4EE',
        }}
      >
        <div
          style={{
            maxWidth: '1320px',
            margin: '0 auto',
            padding: '0 1.5rem',
          }}
        >
          <div
            className="contact-layout-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
              gap: '5rem',
              alignItems: 'start',
            }}
          >
            {/* LEFT — Contact Information */}
            <FadeIn direction="right">
              <div>
                <div
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase' as const,
                    color: '#C8B69E',
                    marginBottom: '1rem',
                  }}
                >
                  Contact Information
                </div>

                <h2
                  style={{
                    fontFamily: 'Playfair Display, serif',
                    fontSize: '1.75rem',
                    fontWeight: 500,
                    color: '#292824',
                    marginBottom: '1.5rem',
                  }}
                >
                  We'd Love to Hear From You.
                </h2>

                <p
                  style={{
                    color: '#777168',
                    fontSize: '0.9375rem',
                    lineHeight: 1.75,
                    marginBottom: '2.5rem',
                  }}
                >
                  Whether you have a project in mind, a question about our services or simply want to say hello — reach out and we'll get back to you within 24 hours.
                </p>

                {/* Contact Details */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.5rem',
                    marginBottom: '2.5rem',
                  }}
                >
                  {[
                    {
                      icon: <Phone size={18} />,
                      label: 'Phone',
                      value: SITE_CONFIG.phone,
                      href: `tel:${SITE_CONFIG.phone}`,
                    },
                    {
                      icon: <Mail size={18} />,
                      label: 'Email',
                      value: SITE_CONFIG.email,
                      href: `mailto:${SITE_CONFIG.email}`,
                    },
                    {
                      icon: <MapPin size={18} />,
                      label: 'Address',
                      value: SITE_CONFIG.address,
                      href: undefined,
                    },
                  ].map(({ icon, label, value, href }) => (
                    <div
                      key={label}
                      style={{
                        display: 'flex',
                        gap: '1rem',
                        alignItems: 'flex-start',
                      }}
                    >
                      <div
                        style={{
                          width: 44,
                          height: 44,
                          backgroundColor: '#E9E1D5',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#80664F',
                          flexShrink: 0,
                        }}
                      >
                        {icon}
                      </div>

                      <div>
                        <div
                          style={{
                            fontSize: '0.75rem',
                            fontWeight: 600,
                            color: '#C8B69E',
                            letterSpacing: '0.1em',
                            marginBottom: '0.2rem',
                          }}
                        >
                          {label}
                        </div>

                        {href ? (
                          <a
                            href={href}
                            style={{
                              color: '#292824',
                              fontSize: '0.9375rem',
                              textDecoration: 'none',
                            }}
                          >
                            {value}
                          </a>
                        ) : (
                          <div
                            style={{
                              color: '#777168',
                              fontSize: '0.9375rem',
                            }}
                          >
                            {value}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* WhatsApp */}
                <a
                  href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.6rem',
                    padding: '0.875rem 1.75rem',
                    backgroundColor: '#80664F',
                    color: '#F7F4EE',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    textDecoration: 'none',
                    transition: 'background-color 0.3s ease',
                    marginBottom: '2.5rem',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#292824';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#80664F';
                  }}
                >
                  <MessageCircle size={16} />
                  Chat on WhatsApp
                </a>

                {/* Send Inquiry */}
                <button
                  type="button"
                  onClick={() => {
                    if (GOOGLE_FORM_URL.trim()) {
                      window.open(
                        GOOGLE_FORM_URL,
                        '_blank',
                        'noopener,noreferrer'
                      );
                    }
                  }}
                  style={{
                    width: '100%',
                    padding: '1rem',
                    backgroundColor: '#80664F',
                    color: '#F7F4EE',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.9375rem',
                    fontWeight: 600,
                    letterSpacing: '0.04em',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'background-color 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#292824';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#80664F';
                  }}
                >
                  Send Inquiry
                </button>
              </div>
            </FadeIn>

           {/* RIGHT — Contact Image */}
<FadeIn direction="left" delay={0.15}>
  <div
    className="contact-map-placeholder"
    style={{
      position: 'relative',
      height: '100%',
      minHeight: '480px',
      width: '100%',
      overflow: 'hidden',
      border: '1px solid #E5DED3',
    }}
  >
    <img
      src="/images/nivas-logo.jpg"
      alt="Nivas Interiors contact"
      loading="lazy"
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
      }}
    />
  </div>
</FadeIn>
          </div>
        </div>
      </section>

      {/* Responsive Layout */}
      <style>{`
        @media (max-width: 768px) {
          .contact-layout-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }

          .contact-map-placeholder {
            min-height: 320px !important;
          }
        }

        @media (min-width: 769px) {
          .contact-map-placeholder {
            min-height: 480px !important;
          }
        }
      `}</style>
    </>
  );
}