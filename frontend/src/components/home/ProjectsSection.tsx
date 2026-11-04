
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { SectionHeader, FadeIn } from '@/components/AnimationComponents';
import { PROJECTS } from '@/data/siteData';

const featured = PROJECTS.slice(0, 6);
const marqueeProjects = [...featured, ...featured];

export default function ProjectsSection() {
  return (
    <section style={{ padding: '6rem 0', backgroundColor: '#F7F4EE' }}>
      <div style={{ maxWidth: '1320px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem' }}>
          <SectionHeader
            label="Selected Work"
            heading="A Glimpse Into Our Work."
            description="Sample design concepts for illustration purposes."
          />

          <Link
            to="/projects"
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
              whiteSpace: 'nowrap',
              marginBottom: '3.5rem',
              transition: 'all 0.3s ease',
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
            View All Projects
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* Infinite Project Marquee */}
        <div className="projects-marquee">
          <div className="projects-marquee-track">
            {marqueeProjects.map((project, i) => (
              <Link
                key={`${project.id}-${i}`}
                to={`/projects/${project.id}`}
                className="project-marquee-card"
                aria-label={`${project.title}, ${project.location}`}
              >
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="project-marquee-image"
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                />

                <div className="project-marquee-overlay" />

                <div className="project-marquee-info">
                  <div className="project-marquee-category">
                    {project.category}
                  </div>

                  <h3>{project.title}</h3>

                  <div className="project-marquee-location">
                    <MapPin size={13} />
                    {project.location}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <style>{`
          .projects-marquee {
            width: 100%;
            overflow: hidden;
            position: relative;
          }

          .projects-marquee-track {
            display: flex;
            width: max-content;
            gap: 24px;
            animation: projects-scroll 40s linear infinite;
          }

          .projects-marquee:hover .projects-marquee-track {
            animation-play-state: paused;
          }

          .project-marquee-card {
            position: relative;
            display: block;
            flex: 0 0 320px;
            width: 320px;
            height: 420px;
            overflow: hidden;
            background-color: #E9E1D5;
            text-decoration: none;
          }

          .project-marquee-image {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
          }

          .project-marquee-overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(
              to top,
              rgba(41, 40, 36, 0.88) 0%,
              rgba(41, 40, 36, 0.25) 45%,
              transparent 75%
            );
            pointer-events: none;
          }

          .project-marquee-info {
            position: absolute;
            z-index: 1;
            bottom: 0;
            left: 0;
            right: 0;
            padding: 1.5rem;
            pointer-events: none;
          }

          .project-marquee-category {
            font-size: 0.7rem;
            font-weight: 600;
            letter-spacing: 0.15em;
            text-transform: uppercase;
            color: #C8B69E;
            margin-bottom: 0.4rem;
          }

          .project-marquee-info h3 {
            font-family: 'Playfair Display', serif;
            font-size: 1.25rem;
            font-weight: 500;
            color: #F7F4EE;
            margin: 0 0 0.4rem;
          }

          .project-marquee-location {
            display: flex;
            align-items: center;
            gap: 0.3rem;
            color: rgba(247, 244, 238, 0.75);
            font-size: 0.8125rem;
          }

          @keyframes projects-scroll {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }

          @media (max-width: 768px) {
            .project-marquee-card {
              flex-basis: 280px;
              width: 280px;
              height: 380px;
            }

            .projects-marquee-track {
              gap: 16px;
              animation-duration: 35s;
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .projects-marquee-track {
              animation: none;
            }
          }
        `}</style>

        {/* Disclaimer */}
        <FadeIn direction="up" delay={0.3}>
          <p style={{
            textAlign: 'center',
            marginTop: '2rem',
            fontSize: '0.8125rem',
            color: '#C8B69E',
            fontStyle: 'italic',
          }}>
            * Sample design concepts shown for illustration. Real project images will be updated upon completion.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
