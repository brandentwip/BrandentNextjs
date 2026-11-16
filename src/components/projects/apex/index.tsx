import '@/styles/case.css';
import '@/styles/apex.css';
import type { Project } from '@/data/projects';
import { CaseShell, CaseStats, CaseTestimonial, NextCase } from '../shared';
import CaseHero from './CaseHero';
import Challenge from './Challenge';
import WebsiteMockup from './WebsiteMockup';
import Features from './Features';
import Gallery from './Gallery';

export default function ApexPage({ project }: { project: Project }) {
  return (
    <CaseShell slug="apex">
      <CaseHero project={project} />
      <CaseStats stats={project.stats} />
      <Challenge />
      <WebsiteMockup />
      <Features />
      <Gallery />
      <CaseTestimonial t={project.testimonial} />
      <NextCase next={project.next} />
    </CaseShell>
  );
}
