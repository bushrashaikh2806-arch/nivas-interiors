import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { FadeIn, SectionHeader, StaggerContainer } from '@/components/AnimationComponents';
import { motion } from 'framer-motion';
import CTASection from '@/components/home/CTASection';

const values = [
  { title: 'Quality', desc: 'We never compromise on materials, craftsmanship or execution quality.' },
  { title: 'Creativity', desc: 'Every project is approached with fresh eyes and original thinking.' },
  { title: 'Transparency', desc: 'Open communication and honesty at every stage of the process.' },
  { title: 'Customer Satisfaction', desc: 'Your complete satisfaction is the measure of our success.' },
];

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About Us — Nivas Interiors</title>
        <meta name="description" content="Learn about Nivas Interiors, our design philosophy, vision, mission and the values that guide everything we create." />
      </Helmet>

      {/* Hero */}
      <section style={{ position: 'relative', height: '65vh', minHeight: '480px', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
        <img
          src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1800&q=85"
          alt="Thoughtfully designed interior space"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(41,40,36,0.6)' }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '1320px', margin: '0 auto', padding: '0 1.5rem', paddingTop: '5rem' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase' as const, color: '#C8B69E', marginBottom: '1rem' }}>
              About Nivas Interiors
            </div>
            <h1 style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(2.25rem, 5vw, 4rem)',
              fontWeight: 600,
              color: '#F7F4EE',
              lineHeight: 1.1,
              maxWidth: '660px',
            }}>
              Thoughtfully Designed. Beautifully Lived.
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section style={{ padding: '6rem 0', backgroundColor: '#F7F4EE' }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '5rem',
            alignItems: 'center',
          }}>
            <FadeIn direction="right">
              <div style={{ overflow: 'hidden', aspectRatio: '4/5' }}>
                <motion.img
                src="/images/about-nivas.png"
                alt="Interior space designed by Nivas Interiors"
                loading="lazy"
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.7 }}
                style={{
                  width: '100%',
                  height: '100%',
                  aspectRatio: '4 / 5',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
              </div>
            </FadeIn>
            <FadeIn direction="left" delay={0.15}>
              <div>
                <SectionHeader label="Our Story" heading="A Passion for Beautiful Spaces." />
                <p style={{ color: '#777168', fontSize: '1rem', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                  Nivas Interiors was founded with a single belief: that great interior design should be accessible, personal and transformative. We are an interior design studio committed to creating spaces that feel as good as they look.
                </p>
                <p style={{ color: '#777168', fontSize: '1rem', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                  Our approach is rooted in listening — understanding each client's unique lifestyle, aspirations and the way they move through their home. From this understanding, we build design concepts that are both beautiful and deeply functional.
                </p>
                <p style={{ color: '#777168', fontSize: '1rem', lineHeight: 1.8 }}>
                  Every project is treated as a collaboration, with the client at the centre of every decision. The result is always the same: a space that feels unmistakably like you.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section style={{ padding: '6rem 0', backgroundColor: '#E9E1D5' }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '3rem',
          }}>
            {[
              {
                label: 'Our Vision',
                heading: 'Creating Meaningful, Functional Spaces.',
                text: 'We envision a world where every home is designed with intention — where spaces inspire, comfort and reflect the people who inhabit them. Our vision is to make exceptional interior design a reality for every client we work with.',
              },
              {
                label: 'Our Mission',
                heading: 'Delivering Personalised Interior Solutions.',
                text: 'Our mission is to deliver thoughtfully designed, expertly executed interiors that exceed expectations. We combine creativity, quality and a client-first approach to transform spaces into personalised environments that people love to live in.',
              },
              {
                label: 'Our Philosophy',
                heading: 'Simplicity, Balance and Timeless Design.',
                text: 'We believe great design is not about excess — it is about restraint, intention and the careful selection of elements that work in harmony. Our philosophy centres on creating spaces that are calm, considered and built to endure.',
              },
            ].map(({ label, heading, text }, i) => (
              <FadeIn key={label} delay={i * 0.12} direction="up">
                <div style={{
                  padding: '2.5rem',
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #E5DED3',
                  height: '100%',
                }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase' as const, color: '#C8B69E', marginBottom: '1rem' }}>
                    {label}
                  </div>
                  <h3 style={{
                    fontFamily: 'Playfair Display, serif',
                    fontSize: '1.375rem',
                    fontWeight: 500,
                    color: '#292824',
                    marginBottom: '1rem',
                    lineHeight: 1.3,
                  }}>
                    {heading}
                  </h3>
                  <p style={{ color: '#777168', fontSize: '0.9375rem', lineHeight: 1.75 }}>
                    {text}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: '6rem 0', backgroundColor: '#F7F4EE' }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto', padding: '0 1.5rem' }}>
          <SectionHeader label="Our Values" heading="What We Stand For." centered />
          <StaggerContainer
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {values.map(({ title, desc }) => (
              <motion.div
                key={title}
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
                style={{
                  padding: '2rem',
                  border: '1px solid #E5DED3',
                  backgroundColor: '#FFFFFF',
                }}
                whileHover={{ y: -4, borderColor: '#C8B69E' }}
              >
                <div style={{ width: 40, height: 40, backgroundColor: '#E9E1D5', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                  <Check size={18} style={{ color: '#80664F' }} />
                </div>
                <h4 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.125rem', fontWeight: 500, color: '#292824', marginBottom: '0.625rem' }}>
                  {title}
                </h4>
                <p style={{ color: '#777168', fontSize: '0.875rem', lineHeight: 1.7 }}>{desc}</p>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '5rem 0', backgroundColor: '#292824' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 1.5rem', textAlign: 'center' }}>
          <FadeIn direction="up">
            <div style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase' as const, color: '#C8B69E', marginBottom: '1rem' }}>
              Work With Us
            </div>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 500, color: '#F7F4EE', marginBottom: '1.25rem' }}>
              Let's Design Your Space.
            </h2>
            <p style={{ color: '#777168', fontSize: '1rem', lineHeight: 1.7, marginBottom: '2rem' }}>
              Ready to transform your home or workspace? We'd love to hear about your project.
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
          </FadeIn>
        </div>
      </section>
    </>
  );
}
