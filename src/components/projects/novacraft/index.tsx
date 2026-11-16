import '@/styles/case.css';
import '@/styles/novacraft.css';
import type { Project } from '@/data/projects';
import { CaseShell, CaseStats, CaseTestimonial, NextCase } from '../shared';
import CaseHero from './CaseHero';
import Challenge from './Challenge';
import PlatformBreakdown from './PlatformBreakdown';
import Gallery from './Gallery';

export default function NovacraftPage({ project }: { project: Project }) {
  return (
    <CaseShell slug="novacraft">
      <CaseHero project={project} />
      <CaseStats stats={project.stats} />
      <Challenge />
      <PlatformBreakdown />
      <Gallery />
      <CaseTestimonial t={project.testimonial} />
      <NextCase next={project.next} />
    </CaseShell>
  );
}
