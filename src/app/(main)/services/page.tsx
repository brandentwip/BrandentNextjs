import type { Metadata } from 'next';
import '@/styles/services.css';
import PageHero from '@/components/services/PageHero';
import DetailedServices from '@/components/services/DetailedServices';
import OurProcess from '@/components/services/OurProcess';
import Pricing from '@/components/services/Pricing';

export const metadata: Metadata = { title: 'Services — Brandent' };

export default function ServicesPage() {
  return (
    <div className="pg-services">
      <PageHero />
      <DetailedServices />
      <OurProcess />
      <Pricing />
    </div>
  );
}
