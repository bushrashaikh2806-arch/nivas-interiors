import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeader, FadeIn } from '@/components/AnimationComponents';
import { FAQS } from '@/data/siteData';

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section style={{ padding: '6rem 0', backgroundColor: '#F7F4EE' }}>
      <div style={{ maxWidth: '1320px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '4rem',
          alignItems: 'start',
        }}>
          <SectionHeader
            label="FAQ"
            heading="A Few Things You Might Want to Know."
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {FAQS.map((faq, i) => (
              <FadeIn key={i} delay={i * 0.04} direction="up">
                <div
                  style={{
                    borderBottom: '1px solid #E5DED3',
                  }}
                >
                  <button
                    onClick={() => setOpen(open === i ? null : i)}
                    aria-expanded={open === i}
                    style={{
                      width: '100%',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      gap: '1rem',
                      padding: '1.25rem 0',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      textAlign: 'left',
                    }}
                  >
                    <span style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '0.9375rem',
                      fontWeight: 500,
                      color: open === i ? '#80664F' : '#292824',
                      lineHeight: 1.5,
                      transition: 'color 0.3s ease',
                    }}>
                      {faq.q}
                    </span>
                    <motion.div
                      animate={{ rotate: open === i ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      style={{ flexShrink: 0 }}
                    >
                      <ChevronDown
                        size={18}
                        style={{ color: open === i ? '#80664F' : '#777168' }}
                      />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {open === i && (
                      <motion.div
                        key="answer"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        style={{ overflow: 'hidden' }}
                      >
                        <p style={{
                          color: '#777168',
                          fontSize: '0.9rem',
                          lineHeight: 1.75,
                          paddingBottom: '1.25rem',
                        }}>
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
