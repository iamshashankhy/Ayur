import Header from '@/components/Header';
import Hero from '@/components/Hero';
import DoshaSection from '@/components/DoshaSection';
import ConstitutionSection from '@/components/ConstitutionSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <DoshaSection />
      <ConstitutionSection />
      <Footer />
    </div>
  );
}