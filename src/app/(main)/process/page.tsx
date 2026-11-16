import type { Metadata } from 'next';
import '@/styles/process.css';
import PageHero from '@/components/process/PageHero';
import DetailedProcess from '@/components/process/DetailedProcess';
import ProjectTimeline from '@/components/process/ProjectTimeline';
import OurPrinciples from '@/components/process/OurPrinciples';
import OurCommitment from '@/components/process/OurCommitment';
import Cta from '@/components/process/Cta';

export const metadata: Metadata = { title: 'Process — Brandent' };

export default function ProcessPage() {
  return (
    <div className="pg-process">
      <PageHero />
      <DetailedProcess />
      <ProjectTimeline />
      <OurPrinciples />
      <OurCommitment />
      <Cta />
    </div>
  );
}
