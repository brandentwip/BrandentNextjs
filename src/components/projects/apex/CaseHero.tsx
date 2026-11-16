import type { Project } from '@/data/projects';
import { CaseMeta, TitleLines } from '@/components/projects/shared';

export default function CaseHero({ project }: { project: Project }) {
  return (
    <>
      <section className="case-hero">
        <div className="hero-grid-lines"></div>
        <div className="ground-glow"></div>
        <div className="hero-building">
          <div className="building b1">
            <div className="b-windows"></div>
          </div>
          <div className="building b2" style={{ background: 'linear-gradient(to top,#d4a843,rgba(212,168,67,0.5))' }}>
            <div className="b-windows"></div>
          </div>
          <div className="building b3">
            <div className="b-windows"></div>
          </div>
          <div className="building b4">
            <div className="b-windows"></div>
          </div>
          <div className="building-glow"></div>
        </div>
        <div className="case-hero-content">
          <div className="case-tag">{project.hero.tag}</div>
          <h1 className="case-title">
            <TitleLines lines={project.hero.title} />
          </h1>
          <CaseMeta items={project.hero.meta} />
        </div>
      </section>
    </>
  );
}
