
import { Link } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';
import { SITE_CONFIG } from '@/data/siteData';

// Social icons
const InstagramIcon = () => (
  <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
  </svg>
);

const FacebookIcon = () => (
  <svg width={22} height={22} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const PinterestIcon = () => (
  <svg width={22} height={22} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
  </svg>
);

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
];

const serviceLinks = [
  { label: 'Living Room', href: '/services' },
  { label: 'Bedroom', href: '/services' },
  { label: 'Kitchen', href: '/services' },
  { label: 'Wardrobe', href: '/services' },
  { label: 'Office Interiors', href: '/services' },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const mutedText = 'rgba(247, 244, 238, 0.75)';

  const headingStyle = {
    fontFamily: 'Inter, sans-serif',
    fontSize: '0.95rem',
    fontWeight: 600,
    letterSpacing: '0.15em',
    textTransform: 'uppercase' as const,
    color: '#C8B69E',
    marginBottom: '1.5rem',
  };

  const linkStyle = {
    color: mutedText,
    fontSize: '1.0625rem',
    textDecoration: 'none',
    transition: 'color 0.2s ease',
  };

  return (
    <footer style={{
      backgroundColor: '#292824',
      color: '#F7F4EE',
      overflowX: 'clip',
    }}>

      {/* Main Footer */}
      <div style={{
        maxWidth: '1320px',
        margin: '0 auto',
        padding: '5rem 1.5rem 0',
      }}>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(200px, 100%), 1fr))',
          gap: '3rem',
        }}>

          {/* Brand Column */}
          <div>
            <div style={{ marginBottom: '1.25rem' }}>
              <img
                src="/logo-light.svg"
                alt="Nivas Interiors"
                style={{
                  height: '80px',
                  width: 'auto',
                  maxWidth: '100%',
                  display: 'block',
                }}
              />
            </div>

            <p style={{
              color: mutedText,
              fontSize: '1.0625rem',
              lineHeight: 1.7,
              marginBottom: '1.5rem',
              maxWidth: '260px',
            }}>
              {SITE_CONFIG.tagline}
            </p>

            <p style={{
              color: mutedText,
              fontSize: '1.0625rem',
              lineHeight: 1.7,
              maxWidth: '260px',
            }}>
              We create beautiful, thoughtful and functional interiors that transform the way you live.
            </p>

            {/* Social Icons */}
            <div style={{
              display: 'flex',
              gap: '1rem',
              marginTop: '2rem',
            }}>
              {[
                { href: SITE_CONFIG.instagram, icon: <InstagramIcon />, label: 'Instagram' },
                { href: SITE_CONFIG.facebook, icon: <FacebookIcon />, label: 'Facebook' },
                { href: SITE_CONFIG.pinterest, icon: <PinterestIcon />, label: 'Pinterest' },
              ].map(({ href, icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  style={{
                    width: '48px',
                    height: '48px',
                    flexShrink: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid rgba(247,244,238,0.15)',
                    color: mutedText,
                    transition: 'all 0.3s ease',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget;
                    el.style.borderColor = '#C8B69E';
                    el.style.color = '#C8B69E';
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget;
                    el.style.borderColor = 'rgba(247,244,238,0.15)';
                    el.style.color = mutedText;
                  }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={headingStyle}>Quick Links</h4>

            <ul style={{
              listStyle: 'none',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem',
              padding: 0,
              margin: 0,
            }}>
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    style={linkStyle}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#F7F4EE';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = mutedText;
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 style={headingStyle}>Services</h4>

            <ul style={{
              listStyle: 'none',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem',
              padding: 0,
              margin: 0,
            }}>
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    style={linkStyle}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#F7F4EE';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = mutedText;
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={headingStyle}>Contact</h4>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.875rem',
            }}>
              {[
                { label: 'Phone', value: SITE_CONFIG.phone },
                { label: 'Email', value: SITE_CONFIG.email },
                { label: 'Location', value: SITE_CONFIG.address },
              ].map(({ label, value }) => (
                <div key={label}>
                  <div style={{
                    fontSize: '0.95rem',
                    color: '#C8B69E',
                    marginBottom: '0.2rem',
                    letterSpacing: '0.05em',
                  }}>
                    {label}
                  </div>

                  <div style={{
                    color: mutedText,
                    fontSize: '1.0625rem',
                    overflowWrap: 'anywhere',
                  }}>
                    {value}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Full-width Divider */}
      <div style={{
        width: '100%',
        borderTop: '1px solid rgba(247,244,238,0.08)',
        marginTop: '3rem',
      }} />

      {/* Bottom Bar */}
      <div style={{
        maxWidth: '1320px',
        margin: '0 auto',
        padding: '1.5rem 1.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '1rem',
        boxSizing: 'border-box',
      }}>

        <p style={{
          color: mutedText,
          fontSize: '0.95rem',
          margin: 0,
        }}>
          © 2026 Nivas Interiors. All Rights Reserved.
        </p>

        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'none',
            border: '1px solid rgba(247,244,238,0.15)',
            color: mutedText,
            cursor: 'pointer',
            padding: '0.75rem 1.5rem',
            fontSize: '0.95rem',
            fontFamily: 'Inter, sans-serif',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget;
            el.style.borderColor = '#C8B69E';
            el.style.color = '#F7F4EE';
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget;
            el.style.borderColor = 'rgba(247,244,238,0.15)';
            el.style.color = mutedText;
          }}
        >
          <ArrowUp size={18} />
          Back to Top
        </button>

      </div>
    </footer>
  );
}
