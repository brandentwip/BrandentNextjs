import '@/styles/case.css';
import '@/styles/zestora.css';
import type { Project } from '@/data/projects';
import { CaseShell, CaseStats, CaseTestimonial, NextCase } from '../shared';
import Hero from './Hero';
import Challenge from './Challenge';
import Approach from './Approach';
import Gallery from './Gallery';

export default function ZestoraPage({ project }: { project: Project }) {
  return (
    <CaseShell slug="zestora">
      <Hero project={project} />
      <CaseStats stats={project.stats} />
      <Challenge />
      <Approach />
      <Gallery />
      <CaseTestimonial t={project.testimonial} />
      <NextCase next={project.next} />
    </CaseShell>
  );
}
