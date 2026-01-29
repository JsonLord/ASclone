import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Comparison from '@/components/Comparison';
import WhyPulsetrain from '@/components/WhyPulsetrain';
import Features from '@/components/Features';
import Applications from '@/components/Applications';
import Partners from '@/components/Partners';
import Team from '@/components/Team';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Comparison />
      <WhyPulsetrain />
      <Features />
      <Applications />
      <Partners />
      <Team />
      <Footer />
    </main>
  );
}
