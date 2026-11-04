
import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { NAV_LINKS, SITE_CONFIG } from '@/data/siteData';
import { useLockBodyScroll } from '@/hooks/useScrollAnimation';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useLockBodyScroll(mobileOpen);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const isLight = !scrolled && location.pathname === '/';

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          backgroundColor: scrolled ? '#F7F4EE' : 'transparent',
          borderBottom: scrolled ? '1px solid #E5DED3' : '1px solid transparent',
          transition: 'background-color 0.4s ease, border-color 0.4s ease',
        }}
      >
        <div
          className="container"
          style={{
            width: '100%',
            maxWidth: '100%',
            margin: '0 auto',
            padding: '0 1rem',
            boxSizing: 'border-box',
          }}
        >
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '100px',
            gap: '1rem',
          }}>
            {/* Logo */}
            <Link
              to="/"
              aria-label="Nivas Interiors — Home"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                textDecoration: 'none',
                flexShrink: 0,
                height: 38,
                marginLeft: '-0.25rem',
              }}
            >
              <img
                src={isLight ? '/logo-light.svg' : '/logo.svg'}
                alt="Nivas Interiors"
                style={{
                  height: '80px',
                  width: 'auto',
                  display: 'block',
                  transition: 'opacity 0.4s ease',
                }}
              />
            </Link>

            {/* Desktop Nav */}
            <nav
              style={{
                display: 'none',
                gap: '2rem',
                alignItems: 'center',
                justifyContent: 'center',
                flex: 1,
                minWidth: 0,
              }}
              className="desktop-nav"
            >
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.href}
                  to={link.href}
                  end={link.href === '/'}
                  style={({ isActive }) => ({
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '1.2rem',
                    fontWeight: 500,
                    letterSpacing: '0.05em',
                    textDecoration: 'none',
                    color: isLight
                      ? isActive ? '#F7F4EE' : 'rgba(247,244,238,0.75)'
                      : isActive ? '#292824' : '#777168',
                    borderBottom: isActive
                      ? `1px solid ${isLight ? '#F7F4EE' : '#C8B69E'}`
                      : '1px solid transparent',
                    paddingBottom: '2px',
                    transition: 'all 0.3s ease',
                  })}
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            {/* CTA + Hamburger */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              marginRight: '-0.25rem',
            }}>
              <Link
                to="/contact"
                className="get-quote-btn"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.7rem',
                  padding: '1rem 2rem',
                  backgroundColor: isLight ? 'rgba(247,244,238,0.15)' : '#80664F',
                  border: `1px solid ${isLight ? 'rgba(247,244,238,0.4)' : '#80664F'}`,
                  color: '#F7F4EE',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '1.125rem',
                  fontWeight: 700,
                  letterSpacing: '0.05em',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  backdropFilter: isLight ? 'blur(8px)' : 'none',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.backgroundColor = '#292824';
                  el.style.borderColor = '#292824';
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.backgroundColor = isLight ? 'rgba(247,244,238,0.15)' : '#80664F';
                  el.style.borderColor = isLight ? 'rgba(247,244,238,0.4)' : '#80664F';
                }}
              >
                Get a Quote
                <ArrowUpRight size={21} />
              </Link>

              {/* Hamburger */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="hamburger-btn"
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '0.25rem',
                  color: isLight ? '#F7F4EE' : '#292824',
                  display: 'none',
                }}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 49,
              backgroundColor: '#292824',
              display: 'flex',
              flexDirection: 'column',
              padding: '5rem 2rem 3rem',
              overflowY: 'auto',
            }}
          >
            {/* Brand in menu */}
            <div style={{ marginBottom: '3rem', paddingTop: '0.5rem' }}>
              <img
                src="/logo-light.svg"
                alt="Nivas Interiors"
                style={{ height: '44px', width: 'auto', display: 'block' }}
              />
            </div>

            <nav style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.3 }}
                >
                  <NavLink
                    to={link.href}
                    end={link.href === '/'}
                    style={({ isActive }) => ({
                      display: 'block',
                      fontFamily: 'Playfair Display, serif',
                      fontSize: '1.75rem',
                      fontWeight: isActive ? 600 : 400,
                      color: isActive ? '#C8B69E' : '#F7F4EE',
                      textDecoration: 'none',
                      padding: '0.875rem 0',
                      borderBottom: '1px solid rgba(247,244,238,0.08)',
                      transition: 'color 0.2s ease',
                    })}
                  >
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}
            </nav>

            {/* Mobile Get a Quote */}
            <div style={{ marginTop: '3rem' }}>
              <Link
                to="/contact"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.7rem',
                  padding: '1.2rem 2.5rem',
                  backgroundColor: '#80664F',
                  color: '#F7F4EE',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '1.125rem',
                  fontWeight: 700,
                  letterSpacing: '0.05em',
                  textDecoration: 'none',
                  border: '1px solid #80664F',
                }}
              >
                Get a Quote
                <ArrowUpRight size={21} />
              </Link>

              <div style={{ marginTop: '2.5rem', color: '#777168', fontSize: '0.875rem' }}>
                <div>{SITE_CONFIG.phone}</div>
                <div style={{ marginTop: '0.25rem' }}>{SITE_CONFIG.email}</div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 1024px) {
          .desktop-nav {
            display: flex !important;
          }
          .hamburger-btn {
            display: none !important;
          }
        }

        @media (max-width: 1023px) {
          .get-quote-btn {
            display: none !important;
          }
          .hamburger-btn {
            display: flex !important;
          }
        }
      `}</style>
    </>
  );
}
