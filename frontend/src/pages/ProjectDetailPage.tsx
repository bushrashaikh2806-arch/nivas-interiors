import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, MapPin, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeIn } from '@/components/AnimationComponents';
import { PROJECTS } from '@/data/siteData';

export default function ProjectDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = PROJECTS.find((p) => p.id === id);

  if (!project) {
    return (
      <div style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1rem', paddingTop: '5rem' }}>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2rem', color: '#292824' }}>Project Not Found</h2>
        <Link to="/projects" style={{ color: '#80664F', textDecoration: 'none', fontWeight: 600 }}>← Back to Projects</Link>
      </div>
    );
  }

  const related = PROJECTS.filter((p) => p.id !== project.id && p.category === project.category).slice(0, 3);
  const otherRelated = related.length < 3 ? [...related, ...PROJECTS.filter((p) => p.id !== project.id && p.category !== project.category)].slice(0, 3) : related;

  return (
    <>
      <Helmet>
        <title>{project.title} — Nivas Interiors</title>
        <meta name="description" content={project.overview} />
      </Helmet>

      {/* Cover */}
      <section style={{ position: 'relative', height: '80vh', minHeight: '500px', overflow: 'hidden' }}>
        <motion.img
          src={project.image}
          alt={project.title}
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(41,40,36,0.8) 0%, rgba(41,40,36,0.2) 50%, transparent 100%)' }} />

        <div style={{ position: 'absolute', bottom: '3rem', left: '50%', transform: 'translateX(-50%)', width: '100%', maxWidth: '1320px', padding: '0 1.5rem' }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.7 }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase' as const, color: '#C8B69E', marginBottom: '0.75rem' }}>
              {project.category}
            </div>
            <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 600, color: '#F7F4EE', lineHeight: 1.1 }}>
              {project.title}
            </h1>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'rgba(247,244,238,0.7)', fontSize: '0.9rem', marginTop: '0.75rem' }}>
              <MapPin size={14} />
              {project.location}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Back Button */}
      <div style={{ maxWidth: '1320px', margin: '0 auto', padding: '2rem 1.5rem 0' }}>
        <button
          onClick={() => navigate(-1)}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: '#777168',
            fontSize: '0.875rem',
            fontFamily: 'Inter, sans-serif',
            fontWeight: 500,
            padding: '0',
            transition: 'color 0.2s ease',
          }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.color = '#292824'; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.color = '#777168'; }}
        >
          <ArrowLeft size={15} />
          Back to Projects
        </button>
      </div>

      {/* Details */}
      <section style={{ padding: '4rem 0 6rem', backgroundColor: '#F7F4EE' }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>

            {/* Overview */}
            <FadeIn direction="right">
              <div>
                <div style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase' as const, color: '#C8B69E', marginBottom: '1rem' }}>
                  Project Overview
                </div>
                <p style={{ color: '#777168', fontSize: '1rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>{project.overview}</p>

                <div style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase' as const, color: '#C8B69E', marginBottom: '1rem', marginTop: '2rem' }}>
                  Design Concept
                </div>
                <p style={{ color: '#777168', fontSize: '1rem', lineHeight: 1.8 }}>{project.concept}</p>
              </div>
            </FadeIn>

            {/* Specs */}
            <FadeIn direction="left" delay={0.15}>
              <div>
                {/* Colour Palette */}
                <div style={{ marginBottom: '2rem' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase' as const, color: '#C8B69E', marginBottom: '1rem' }}>
                    Colour Palette
                  </div>
                  <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                    {project.colors.map((c) => (
                      <div key={c} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                        <div style={{ width: 52, height: 52, backgroundColor: c, border: '1px solid #E5DED3' }} title={c} />
                        <span style={{ fontSize: '0.7rem', color: '#777168', fontFamily: 'monospace' }}>{c}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Materials */}
                <div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase' as const, color: '#C8B69E', marginBottom: '1rem' }}>
                    Materials Used
                  </div>
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    {project.materials.map((m) => (
                      <span key={m} style={{
                        padding: '0.375rem 0.875rem',
                        border: '1px solid #E5DED3',
                        backgroundColor: '#FFFFFF',
                        fontSize: '0.8125rem',
                        color: '#292824',
                        fontFamily: 'Inter, sans-serif',
                      }}>
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Gallery */}
          <div style={{ marginTop: '5rem' }}>
            <FadeIn direction="up">
              <div style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase' as const, color: '#C8B69E', marginBottom: '2rem' }}>
                Project Gallery
              </div>
            </FadeIn>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1rem' }}>
              {project.gallery.map((img, i) => (
                <FadeIn key={i} delay={i * 0.1} direction="up">
                  <div style={{ overflow: 'hidden', aspectRatio: '4/3' }}>
                    <motion.img
                      src={img}
                      alt={`${project.title} gallery ${i + 1}`}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.5 }}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    />
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Related Projects */}
          {otherRelated.length > 0 && (
            <div style={{ marginTop: '6rem' }}>
              <FadeIn direction="up">
                <div style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase' as const, color: '#C8B69E', marginBottom: '0.75rem' }}>
                  Related Projects
                </div>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.75rem', fontWeight: 500, color: '#292824', marginBottom: '2.5rem' }}>
                  More From Our Portfolio
                </h3>
              </FadeIn>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
                {otherRelated.map((p, i) => (
                  <FadeIn key={p.id} delay={i * 0.08} direction="up">
                    <Link to={`/projects/${p.id}`} style={{ display: 'block', textDecoration: 'none', border: '1px solid #E5DED3', overflow: 'hidden', backgroundColor: '#FFFFFF' }}>
                      <div style={{ overflow: 'hidden', aspectRatio: '4/3' }}>
                        <motion.img src={p.image} alt={p.title} whileHover={{ scale: 1.06 }} transition={{ duration: 0.5 }} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                      </div>
                      <div style={{ padding: '1.25rem' }}>
                        <div style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase' as const, color: '#C8B69E', marginBottom: '0.4rem' }}>{p.category}</div>
                        <h4 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1rem', fontWeight: 500, color: '#292824', marginBottom: '0.25rem' }}>{p.title}</h4>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', fontSize: '0.8125rem', fontWeight: 600, color: '#80664F', marginTop: '0.75rem' }}>
                          View Project <ArrowRight size={13} />
                        </div>
                      </div>
                    </Link>
                  </FadeIn>
                ))}
              </div>
            </div>
          )}

          {/* Contact CTA */}
          <FadeIn direction="up">
            <div style={{
              marginTop: '5rem',
              padding: '3rem',
              backgroundColor: '#292824',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              gap: '1.25rem',
            }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase' as const, color: '#C8B69E' }}>Get Started</div>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.75rem', fontWeight: 500, color: '#F7F4EE' }}>Inspired by This Project?</h3>
              <p style={{ color: '#777168', fontSize: '0.9375rem', maxWidth: '460px', lineHeight: 1.7 }}>Let's discuss how we can create something similar — or entirely unique — for your space.</p>
              <Link
                to="/contact"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.9rem 2rem',
                  backgroundColor: '#80664F',
                  color: '#F7F4EE',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.875rem',
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
                Start Your Project
                <ArrowRight size={15} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
