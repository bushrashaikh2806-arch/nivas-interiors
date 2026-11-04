import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Suspense, lazy } from 'react';
import MainLayout from '@/layouts/MainLayout';

// Lazy-loaded pages for code splitting
const HomePage = lazy(() => import('@/pages/HomePage'));
const AboutPage = lazy(() => import('@/pages/AboutPage'));
const ServicesPage = lazy(() => import('@/pages/ServicesPage'));
const ProjectsPage = lazy(() => import('@/pages/ProjectsPage'));
const ProjectDetailPage = lazy(() => import('@/pages/ProjectDetailPage'));
const GalleryPage = lazy(() => import('@/pages/GalleryPage'));
const ProcessPage = lazy(() => import('@/pages/ProcessPage'));
const TestimonialsPage = lazy(() => import('@/pages/TestimonialsPage'));
const ContactPage = lazy(() => import('@/pages/ContactPage'));

function PageLoader() {
  return (
    <div style={{
      minHeight: '60vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#F7F4EE',
    }}>
      <div style={{
        width: 40,
        height: 40,
        border: '2px solid #E5DED3',
        borderTop: '2px solid #C8B69E',
        borderRadius: '50%',
        animation: 'spin 0.8s linear infinite',
      }} />
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}

function NotFoundPage() {
  return (
    <div style={{
      minHeight: '80vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '1.5rem',
      textAlign: 'center',
      padding: '5rem 1.5rem',
      paddingTop: '8rem',
    }}>
      <div style={{
        fontFamily: 'Playfair Display, serif',
        fontSize: 'clamp(4rem, 12vw, 8rem)',
        fontWeight: 600,
        color: '#E9E1D5',
        lineHeight: 1,
      }}>
        404
      </div>
      <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2rem', fontWeight: 500, color: '#292824' }}>
        Page Not Found
      </h1>
      <p style={{ color: '#777168', maxWidth: '400px', lineHeight: 1.7 }}>
        The page you're looking for doesn't exist or has been moved.
      </p>
      <a
        href="/"
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
        }}
      >
        Return Home
      </a>
    </div>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/projects/:id" element={<ProjectDetailPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/process" element={<ProcessPage />} />
              <Route path="/testimonials" element={<TestimonialsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </HelmetProvider>
  );
}
