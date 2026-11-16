import type { Metadata } from 'next';
import '@/styles/clients.css';
import PageHero from '@/components/clients/PageHero';
import Testimonials from '@/components/clients/Testimonials';
import ClientsLogos from '@/components/clients/ClientsLogos';
import Industries from '@/components/clients/Industries';
import Cta from '@/components/clients/Cta';

export const metadata: Metadata = { title: 'Clients & Testimonials — Brandent' };

export default function ClientsPage() {
  return (
    <div className="pg-clients">
      <PageHero />
      <Testimonials />
      <ClientsLogos />
      <Industries />
      <Cta />
    </div>
  );
}
