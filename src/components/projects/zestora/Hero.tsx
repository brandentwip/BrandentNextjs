import type { Project } from '@/data/projects';
import { CaseMeta, TitleLines } from '@/components/projects/shared';

export default function Hero({ project }: { project: Project }) {
  return (
    <>
      <section className="case-hero">
        <div className="hero-art">
          <div className="plate">
            <div className="food-dots"></div>
            <div className="plate-inner">🍱</div>
          </div>
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
