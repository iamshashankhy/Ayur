import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import FeaturesSection from '@/components/FeaturesSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import ContactSection from '@/components/ContactSection';
import DoshaSection from '@/components/DoshaSection';
import ConstitutionSection from '@/components/ConstitutionSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <AboutSection />
      <FeaturesSection />
      <HowItWorksSection />
      <ContactSection />
      <DoshaSection />
      <ConstitutionSection />
      <Footer />
    </div>
  );
}