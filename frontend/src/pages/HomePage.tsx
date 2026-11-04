
import { Helmet } from 'react-helmet-async';
import HeroSection from '@/components/home/HeroSection';
import AboutSection from '@/components/home/AboutSection';
import ServicesSection from '@/components/home/ServicesSection';
import WhyChooseUsSection from '@/components/home/WhyChooseUsSection';
import ProcessSection from '@/components/home/ProcessSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import CTASection from '@/components/home/CTASection';

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Nivas Interiors — Designing Spaces. Creating Stories.</title>
        <meta name="description" content="Nivas Interiors creates beautiful, thoughtful and functional interior spaces. Expert interior design for living rooms, bedrooms, kitchens, offices and complete homes." />
        <meta property="og:title" content="Nivas Interiors — Designing Spaces. Creating Stories." />
        <meta property="og:description" content="Premium interior design studio crafting personalised spaces that reflect your lifestyle." />
        <meta property="og:type" content="website" />
      </Helmet>

      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <ProcessSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
