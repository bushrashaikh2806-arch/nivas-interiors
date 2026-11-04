
import { Star } from 'lucide-react';
import { SectionHeader, FadeIn } from '@/components/AnimationComponents';
import { TESTIMONIALS } from '@/data/siteData';

export default function TestimonialsSection() {
  // Duplicate testimonials for seamless infinite scrolling
  const duplicatedTestimonials = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section style={{ padding: '6rem 0', backgroundColor: '#292824' }}>
      <div style={{ maxWidth: '1320px', margin: '0 auto', padding: '0 1.5rem' }}>

        {/* Existing heading - unchanged */}
        <div style={{ marginBottom: '3rem' }}>
          <SectionHeader
            label="Client Stories"
            heading="What Our Clients Say."
            light
          />
        </div>

        {/* Infinite Testimonial Carousel */}
        <div className="testimonials-marquee">

          <div className="testimonials-track">

            {duplicatedTestimonials.map((t, i) => (
              <div
                className="testimonial-card"
                key={`${t.id}-${i}`}
                aria-hidden={i >= TESTIMONIALS.length ? true : undefined}
              >
                {/* Stars */}
                <div style={{
                  display: 'flex',
                  gap: '0.25rem',
                  marginBottom: '1.25rem',
                }}>
                  {Array.from({ length: t.rating }).map((_, si) => (
                    <Star
                      key={si}
                      size={14}
                      fill="#C8B69E"
                      color="#C8B69E"
                    />
                  ))}
                </div>

                {/* Review */}
                <p style={{
                  color: 'rgba(247,244,238,0.6)',
                  fontSize: '0.9375rem',
                  lineHeight: 1.75,
                  fontStyle: 'italic',
                  marginBottom: '1.5rem',
                  flex: 1,
                }}>
                  "{t.review}"
                </p>

                {/* Client Details */}
                <div>
                  <div style={{
                    fontFamily: 'Playfair Display, serif',
                    fontWeight: 500,
                    color: '#C8B69E',
                    fontSize: '1rem',
                    marginBottom: '0.2rem',
                  }}>
                    {t.name}
                  </div>

                  <div style={{
                    fontSize: '0.8125rem',
                    color: '#777168',
                  }}>
                    {t.project} · {t.location}
                  </div>
                </div>

              </div>
            ))}

          </div>
        </div>

      </div>

      {/* Carousel Styles */}
      <style>{`
        .testimonials-marquee {
          width: 100%;
          overflow: hidden;
          position: relative;

          -webkit-mask-image: linear-gradient(
            to right,
            transparent,
            black 7%,
            black 93%,
            transparent
          );

          mask-image: linear-gradient(
            to right,
            transparent,
            black 7%,
            black 93%,
            transparent
          );
        }

        .testimonials-track {
          display: flex;
          width: max-content;
          gap: 24px;
          animation: testimonial-marquee 50s linear infinite;
          will-change: transform;
        }

        @keyframes testimonial-marquee {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        .testimonial-card {
          flex: 0 0 400px;
          width: 400px;
          min-height: 300px;
          box-sizing: border-box;
          padding: 2rem;

          display: flex;
          flex-direction: column;

          background-color: rgba(247,244,238,0.05);
          border: 1px solid rgba(247,244,238,0.1);

          transition: background-color 0.3s ease,
                      border-color 0.3s ease;
        }

        /* Highlight only the hovered card */
        .testimonial-card:hover {
          background-color: #80664F;
          border-color: #80664F;
        }

        .testimonial-card:hover p {
          color: rgba(247,244,238,0.9) !important;
        }

        .testimonial-card:hover .testimonial-client-name {
          color: #F7F4EE;
        }

        /* Pause animation on hover */
        .testimonials-marquee:hover .testimonials-track {
          animation-play-state: paused;
        }

        /* Tablet */
        @media (max-width: 1023px) {
          .testimonial-card {
            flex-basis: 400px;
            width: 400px;
          }
        }

        /* Mobile */
        @media (max-width: 600px) {
          .testimonial-card {
            flex-basis: 85vw;
            width: 85vw;
            min-height: 300px;
            padding: 1.5rem;
          }

          .testimonials-track {
            gap: 16px;
          }
        }

        /* Accessibility: Reduced Motion */
        @media (prefers-reduced-motion: reduce) {
          .testimonials-track {
            animation: none;
            transform: none;
            will-change: auto;
          }

          .testimonials-marquee {
            overflow-x: auto;
            -webkit-mask-image: none;
            mask-image: none;
          }
        }
      `}</style>
    </section>
  );
}
