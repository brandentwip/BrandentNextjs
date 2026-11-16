import type { Project } from '@/data/projects';
import { CaseMeta, TitleLines } from '@/components/projects/shared';

export default function CaseHero({ project }: { project: Project }) {
  return (
    <>
      <section className="case-hero">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
        <div className="phone-wrap">
          <div className="phone phone-tall">
            <div className="phone-screen ps-purple">
              <div className="phone-stat">
                500K
                <span>Followers</span>
              </div>
              <div className="phone-bars">
                <div className="bar" style={{ height: '20%' }}></div>
                <div className="bar lit" style={{ height: '40%' }}></div>
                <div className="bar lit" style={{ height: '60%' }}></div>
                <div className="bar lit" style={{ height: '80%' }}></div>
                <div className="bar lit" style={{ height: '95%' }}></div>
                <div className="bar lit" style={{ height: '100%' }}></div>
              </div>
            </div>
          </div>
          <div className="phone phone-short">
            <div className="phone-screen ps-pink">
              <div className="phone-stat">
                8.4%
                <span>Eng. Rate</span>
              </div>
              <div className="phone-bars">
                <div className="bar lit" style={{ height: '50%' }}></div>
                <div className="bar lit" style={{ height: '75%' }}></div>
                <div className="bar lit" style={{ height: '90%' }}></div>
                <div className="bar" style={{ height: '40%' }}></div>
                <div className="bar lit" style={{ height: '100%' }}></div>
              </div>
            </div>
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
