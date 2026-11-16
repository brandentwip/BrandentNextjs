import type { Metadata } from 'next';
import '@/styles/work.css';
import PageHero from '@/components/work/PageHero';
import CaseStudies from '@/components/work/CaseStudies';
import Results from '@/components/work/Results';
import Cta from '@/components/work/Cta';

export const metadata: Metadata = { title: 'Our Work — Brandent' };

export default function WorkPage() {
  return (
    <div className="pg-work">
      <PageHero />
      <CaseStudies />
      <Results />
      <Cta />
    </div>
  );
}
