import '@/styles/home.css';
import Hero from '@/components/home/Hero';
import Marquee from '@/components/home/Marquee';
import Services from '@/components/home/Services';
import Work from '@/components/home/Work';
import Results from '@/components/home/Results';
import Process from '@/components/home/Process';
import Clients from '@/components/home/Clients';
import Testimonials from '@/components/home/Testimonials';
import Manifesto from '@/components/home/Manifesto';
import Team from '@/components/home/Team';
import Cta from '@/components/home/Cta';

export default function HomePage() {
  return (
    <div className="pg-home">
      <Hero />
      <Marquee />
      <Services />
      <Work />
      <Results />
      <Process />
      <Clients />
      <Testimonials />
      <Manifesto />
      <Team />
      <Cta />
    </div>
  );
}
