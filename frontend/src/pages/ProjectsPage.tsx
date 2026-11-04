import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, ArrowRight } from 'lucide-react';
import { FadeIn, SectionHeader } from '@/components/AnimationComponents';
import { PROJECTS } from '@/data/siteData';

const categories = ['ALL', 'RESIDENTIAL', 'LIVING ROOM', 'BEDROOM', 'KITCHEN', 'COMMERCIAL'];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('ALL');

  const filtered = activeCategory === 'ALL'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category.toUpperCase() === activeCategory);

  return (
    <>
      <Helmet>
        <title>Projects — Nivas Interiors</title>
        <meta name="description" content="Explore sample interior design concepts by Nivas Interiors across residential, commercial and specialised spaces." />
      </Helmet>

      {/* Hero */}
      <section style={{ position: 'relative', height: '55vh', minHeight: '380px', overflow: 'hidden', display: 'flex', alignItems: 'center', backgroundColor: '#292824' }}>
        <img
          src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1800&q=80"
          alt="Interior design portfolio"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.4 }}
        />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '1320px', margin: '0 auto', padding: '0 1.5rem', paddingTop: '5rem' }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase' as const, color: '#C8B69E', marginBottom: '1rem' }}>
              Portfolio
            </div>
            <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2.25rem, 5vw, 4rem)', fontWeight: 600, color: '#F7F4EE', lineHeight: 1.1, maxWidth: '600px' }}>
              Spaces We've Imagined.
            </h1>
            <p style={{ color: 'rgba(247,244,238,0.5)', fontSize: '0.875rem', marginTop: '1rem', fontStyle: 'italic' }}>
              Sample design concepts shown for illustration purposes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter + Grid */}
      <section style={{ padding: '5rem 0', backgroundColor: '#F7F4EE' }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto', padding: '0 1.5rem' }}>

          {/* Filter Buttons */}
          <FadeIn direction="up">
            <div style={{
              display: 'flex',
              gap: '0.5rem',
              flexWrap: 'wrap',
              marginBottom: '3.5rem',
            }}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    padding: '0.5rem 1.25rem',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    letterSpacing: '0.08em',
                    cursor: 'pointer',
                    border: '1px solid',
                    transition: 'all 0.25s ease',
                    backgroundColor: activeCategory === cat ? '#292824' : 'transparent',
                    borderColor: activeCategory === cat ? '#292824' : '#E5DED3',
                    color: activeCategory === cat ? '#F7F4EE' : '#777168',
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </FadeIn>

          {/* Grid */}
          <motion.div
            layout
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
              gap: '1.5rem',
            }}
          >
            <AnimatePresence>
              {filtered.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.35 }}
                >
                  <Link
                    to={`/projects/${project.id}`}
                    style={{ display: 'block', textDecoration: 'none', overflow: 'hidden', position: 'relative', border: '1px solid #E5DED3', backgroundColor: '#FFFFFF' }}
                  >
                    <div style={{ overflow: 'hidden', aspectRatio: '4/3' }}>
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        whileHover={{ scale: 1.06 }}
                        transition={{ duration: 0.6 }}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                      />
                    </div>
                    <div style={{ padding: '1.5rem' }}>
                      <div style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase' as const, color: '#C8B69E', marginBottom: '0.5rem' }}>
                        {project.category}
                      </div>
                      <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.125rem', fontWeight: 500, color: '#292824', marginBottom: '0.5rem' }}>
                        {project.title}
                      </h3>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: '#777168', fontSize: '0.8125rem', marginBottom: '1rem' }}>
                        <MapPin size={12} />
                        {project.location}
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', fontSize: '0.8125rem', fontWeight: 600, color: '#80664F' }}>
                        View Details
                        <ArrowRight size={13} />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <div style={{ textAlign: 'center', padding: '5rem 0', color: '#777168' }}>
              No projects in this category yet.
            </div>
          )}
        </div>
      </section>
    </>
  );
}
