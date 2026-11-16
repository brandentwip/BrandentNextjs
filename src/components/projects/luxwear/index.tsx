import '@/styles/case.css';
import '@/styles/luxwear.css';
import type { Project } from '@/data/projects';
import { CaseShell, CaseStats, CaseTestimonial, NextCase } from '../shared';
import CaseHero from './CaseHero';
import Challenge from './Challenge';
import CreatorNetwork from './CreatorNetwork';
import Timeline from './Timeline';
import Gallery from './Gallery';

export default function LuxwearPage({ project }: { project: Project }) {
  return (
    <CaseShell slug="luxwear">
      <CaseHero project={project} />
      <CaseStats stats={project.stats} />
      <Challenge />
      <CreatorNetwork />
      <Timeline />
      <Gallery />
      <CaseTestimonial t={project.testimonial} />
      <NextCase next={project.next} />
    </CaseShell>
  );
}
