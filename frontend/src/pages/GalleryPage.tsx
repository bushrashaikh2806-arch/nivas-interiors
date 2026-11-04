import { useState, useEffect, useCallback } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { FadeIn, SectionHeader } from '@/components/AnimationComponents';
import { GALLERY_IMAGES } from '@/data/siteData';

const categories = ['ALL', 'LIVING ROOMS', 'BEDROOMS', 'KITCHENS', 'WARDROBES', 'OFFICES'];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = activeCategory === 'ALL'
    ? GALLERY_IMAGES
    : GALLERY_IMAGES.filter((img) => img.category.toUpperCase() === activeCategory);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const prevImage = useCallback(() => {
    setLightboxIndex((i) => i !== null ? (i - 1 + filtered.length) % filtered.length : null);
  }, [filtered.length]);

  const nextImage = useCallback(() => {
    setLightboxIndex((i) => i !== null ? (i + 1) % filtered.length : null);
  }, [filtered.length]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightboxIndex, closeLightbox, prevImage, nextImage]);

  return (
    <>
      <Helmet>
        <title>Gallery — Nivas Interiors</title>
        <meta name="description" content="Browse the Nivas Interiors gallery for inspiration across living rooms, bedrooms, kitchens, wardrobes, offices and design details." />
      </Helmet>

      {/* Hero */}
      <section style={{ backgroundColor: '#F7F4EE', paddingTop: '9rem', paddingBottom: '3rem', borderBottom: '1px solid #E5DED3' }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto', padding: '0 1.5rem' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase' as const, color: '#C8B69E', marginBottom: '1rem' }}>
              Design Gallery
            </div>
            <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', fontWeight: 600, color: '#292824', lineHeight: 1.1 }}>
              Inspiration in Every Detail.
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Filter + Masonry */}
      <section style={{ padding: '4rem 0 6rem', backgroundColor: '#F7F4EE' }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto', padding: '0 1.5rem' }}>

          {/* Filters */}
          <FadeIn direction="up">
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    padding: '0.4375rem 1.125rem',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.75rem',
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

          {/* Masonry Grid */}
          <LayoutGroup>
            <motion.div
              layout
              style={{
                columns: '3 320px',
                gap: '1rem',
              }}
            >
              <AnimatePresence>
                {filtered.map((img, i) => (
                  <motion.div
                    key={img.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.35, delay: i * 0.03 }}
                    style={{
                      breakInside: 'avoid',
                      marginBottom: '1rem',
                      overflow: 'hidden',
                      position: 'relative',
                      cursor: 'pointer',
                      display: 'block',
                    }}
                    onClick={() => openLightbox(i)}
                  >
                    <div style={{ position: 'relative', overflow: 'hidden' }}>
                      <motion.img
                        src={img.image}
                        alt={img.alt}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.5 }}
                        style={{ width: '100%', display: 'block', verticalAlign: 'bottom' }}
                        loading="lazy"
                      />
                      {/* Hover Overlay */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.25 }}
                        style={{
                          position: 'absolute',
                          inset: 0,
                          backgroundColor: 'rgba(41,40,36,0.4)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <div style={{
                          width: 44,
                          height: 44,
                          backgroundColor: 'rgba(247,244,238,0.9)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}>
                          <ZoomIn size={18} style={{ color: '#292824' }} />
                        </div>
                      </motion.div>
                    </div>
                    {/* Category tag */}
                    <div style={{
                      position: 'absolute',
                      top: '0.75rem',
                      left: '0.75rem',
                      backgroundColor: 'rgba(41,40,36,0.7)',
                      color: '#C8B69E',
                      fontSize: '0.65rem',
                      fontWeight: 600,
                      letterSpacing: '0.1em',
                      padding: '0.25rem 0.625rem',
                      textTransform: 'uppercase' as const,
                      backdropFilter: 'blur(4px)',
                    }}>
                      {img.category}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </LayoutGroup>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 100,
              backgroundColor: 'rgba(41,40,36,0.95)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onClick={closeLightbox}
          >
            {/* Image */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              style={{ position: 'relative', maxWidth: '90vw', maxHeight: '90vh' }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filtered[lightboxIndex].image}
                alt={filtered[lightboxIndex].alt}
                style={{ maxWidth: '90vw', maxHeight: '85vh', objectFit: 'contain', display: 'block' }}
              />
              {/* Caption */}
              <div style={{ textAlign: 'center', marginTop: '0.75rem', color: 'rgba(247,244,238,0.6)', fontSize: '0.8125rem' }}>
                {filtered[lightboxIndex].alt} · {lightboxIndex + 1} / {filtered.length}
              </div>
            </motion.div>

            {/* Prev / Next */}
            {[
              { action: prevImage, icon: <ChevronLeft size={24} />, style: { left: '1rem' } },
              { action: nextImage, icon: <ChevronRight size={24} />, style: { right: '1rem' } },
            ].map(({ action, icon, style }) => (
              <button
                key={JSON.stringify(style)}
                onClick={(e) => { e.stopPropagation(); action(); }}
                style={{
                  position: 'fixed',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  ...style,
                  width: 48,
                  height: 48,
                  backgroundColor: 'rgba(247,244,238,0.1)',
                  border: '1px solid rgba(247,244,238,0.2)',
                  color: '#F7F4EE',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'background-color 0.2s ease',
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'rgba(247,244,238,0.2)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'rgba(247,244,238,0.1)'; }}
                aria-label="Navigate"
              >
                {icon}
              </button>
            ))}

            {/* Close */}
            <button
              onClick={closeLightbox}
              style={{
                position: 'fixed',
                top: '1.5rem',
                right: '1.5rem',
                width: 44,
                height: 44,
                backgroundColor: 'transparent',
                border: '1px solid rgba(247,244,238,0.2)',
                color: '#F7F4EE',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              aria-label="Close lightbox"
            >
              <X size={20} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
