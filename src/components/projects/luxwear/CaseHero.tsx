import type { Project } from '@/data/projects';
import { CaseMeta, TitleLines } from '@/components/projects/shared';

export default function CaseHero({ project }: { project: Project }) {
  return (
    <>
      <section className="case-hero">
        <div className="hero-texture"></div>
        <div className="hero-fabric">
          <div className="fabric-roll fr1">
            <div className="fabric-texture"></div>
            <div className="fabric-label">Blossom Rose S/S 24</div>
          </div>
          <div className="fabric-roll fr2">
            <div className="fabric-texture"></div>
            <div className="fabric-label">Midnight A/W 24</div>
          </div>
          <div className="fabric-roll fr3">
            <div className="fabric-texture"></div>
            <div className="fabric-label">Pearl Blush Limited</div>
          </div>
          <div className="fabric-roll fr4">
            <div className="fabric-texture"></div>
            <div className="fabric-label">Deep Rouge Resort</div>
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
