
import PageLayout from '@/components/PageLayout';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import IndustriesSection from '@/components/IndustriesSection';
import SuccessStories from '@/components/SuccessStories';
import TechSpotlight from '@/components/TechSpotlight';
import SustainabilitySection from '@/components/SustainabilitySection';
import Newsletter from '@/components/Newsletter';
import SEO from '@/components/SEO';
import FloatingContactButton from '@/components/FloatingContactButton';
import AboutMe from '@/components/AboutMe';
import { useEffect } from 'react';

const Index = () => {
  // Fix any ID conflicts when the page loads
  useEffect(() => {
    const contactElements = document.querySelectorAll('[id="contact"]');
    if (contactElements.length > 1) {
      // If there are multiple elements with id="contact", rename one
      contactElements[1].id = 'contact-footer';
    }
  }, []);

  return (
    <PageLayout>
      <SEO 
        title="Druk Textiles - Smart Textile Technology" 
        description="Smarter Threads. Smarter Lives. Pioneering AI-powered textile sensors for sportswear, medical applications, and footwear."
        imageUrl="/lovable-uploads/526dc38a-25fa-40d4-b520-425b23ae0464.png"
        keywords={['smart textiles', 'wearable technology', 'textile sensors', 'sports tech', 'medical wearables', 'footwear technology', 'AI sensors']}
      />
      <Hero />
      <FloatingContactButton />
      <HowItWorks />
      <IndustriesSection />
      <SuccessStories />
      <TechSpotlight />
      <AboutMe />
      <SustainabilitySection />
      <Newsletter />
    </PageLayout>
  );
};

export default Index;
