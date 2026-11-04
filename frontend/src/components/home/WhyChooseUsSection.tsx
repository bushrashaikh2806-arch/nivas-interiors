
import { motion } from 'framer-motion';
import { SectionHeader, StaggerContainer } from '@/components/AnimationComponents';
import {
  Sparkles,
  Gem,
  Eye,
  Maximize2,
  Heart,
} from 'lucide-react';

const features = [
  {
    icon: <Sparkles size={22} />,
    title: 'Personalised Designs',
    desc: 'Every interior is custom-crafted to reflect your unique personality, preferences and lifestyle.',
  },
  {
    icon: <Gem size={22} />,
    title: 'Quality Materials',
    desc: 'Only carefully selected, durable materials that stand the test of time and daily living.',
  },
  {
    icon: <Eye size={22} />,
    title: 'Attention to Detail',
    desc: 'From wall textures to hardware finishes, every detail is considered and intentional.',
  },
  {
    icon: <Maximize2 size={22} />,
    title: 'Smart Space Utilisation',
    desc: 'Intelligent layouts that maximise every square foot without compromising on comfort.',
  },
  {
    icon: <Heart size={22} />,
    title: 'Customer-Focused Approach',
    desc: 'Your satisfaction drives everything we do, from first consultation to final handover.',
  },
];

export default function WhyChooseUsSection() {
  return (
    <section style={{ padding: '6rem 0', backgroundColor: '#FFFFFF' }}>
      <div style={{ maxWidth: '1600px', width: '100%', margin: '0 auto', padding: '0 2rem', boxSizing: 'border-box' }}>
        <SectionHeader
          label="Why Nivas"
          heading="The Difference Is in the Details."
          centered
        />

        <StaggerContainer
          className="why-choose-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, minmax(0, 1fr))',
            gap: '24px',
            alignItems: 'stretch',
          }}
          staggerDelay={0.08}
        >
          {features.map(({ icon, title, desc }) => (
            <motion.div
              key={title}
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
              }}
              style={{
                padding: '2rem 2rem',
                border: '1px solid #E5DED3',
                backgroundColor: '#F7F4EE',
                transition: 'all 0.3s ease',
                cursor: 'default',
                height: '100%',
                boxSizing: 'border-box',
              }}
              whileHover={{
                y: -4,
                backgroundColor: '#FFFFFF',
                borderColor: '#C8B69E',
              }}
            >
              {/* Icon */}
              <div style={{
                width: 58,
                height: 58,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#E9E1D5',
                color: '#80664F',
                marginBottom: '1.25rem',
              }}>
                {icon}
              </div>

              <h3 style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: '1.3rem',
                fontWeight: 500,
                color: '#292824',
                marginBottom: '0.625rem',
              }}>
                {title}
              </h3>

              <p style={{
                color: '#777168',
                fontSize: '1rem',
                lineHeight: 1.8,
              }}>
                {desc}
              </p>
            </motion.div>
          ))}
        </StaggerContainer>

        <style>{`
          @media (max-width: 1199px) {
            .why-choose-grid {
              grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
            }
          }

          @media (max-width: 767px) {
            .why-choose-grid {
              grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            }
          }

          @media (max-width: 480px) {
            .why-choose-grid {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
}
