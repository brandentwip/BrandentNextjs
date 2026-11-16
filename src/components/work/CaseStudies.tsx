import Link from 'next/link';
import { projects } from '@/data/projects';

export default function CaseStudies() {
  return (
    <>
      <section className="section">
        <div className="section-tag">Selected Projects</div>
        <h2 className="section-title">
          The Work
          <br />
          <span className="outline-text">We're Proud Of</span>
        </h2>
        <div className="case-grid">
          {projects.map((p, i) => (
            <div className={`case-study-card${p.card.featured ? ' featured-case' : ''} reveal`} key={p.slug}>
              <div className={`case-study-bg ${p.card.bg}`}></div>
              <div className="case-study-content">
                <div className="case-study-tag">{p.summary.tag}</div>
                <div className="case-study-title">{p.name}</div>
                <div className="case-study-desc">{p.summary.description}</div>
                <div className="case-study-meta">
                  <span>{p.summary.result}</span>
                  <Link href={`/work/${p.slug}`} className="case-study-cta">
                    {p.card.featured ? 'View Case Study →' : 'View Case →'}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
