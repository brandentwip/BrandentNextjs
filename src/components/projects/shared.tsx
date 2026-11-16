import Link from 'next/link';
import { Fragment, type ReactNode } from 'react';
import { getProject, type Project, type TitleRun } from '@/data/projects';

/** Renders a multi-line headline from data. Runs with a className become styled <span>s. */
export function TitleLines({ lines }: { lines: TitleRun[][] }) {
  return (
    <>
      {lines.map((line, i) => (
        <Fragment key={i}>
          {i > 0 && <br />}
          {line.map((run, j) =>
            run.className === undefined ? (
              run.text
            ) : (
              <span key={j} className={run.className || undefined}>
                {run.text}
              </span>
            ),
          )}
        </Fragment>
      ))}
    </>
  );
}

export function CaseMeta({ items }: { items: Project['hero']['meta'] }) {
  return (
    <div className="case-meta">
      {items.map((m) => (
        <div className="meta-item" key={m.label}>
          <div className="meta-label">{m.label}</div>
          <div className="meta-value">{m.value}</div>
        </div>
      ))}
    </div>
  );
}

export function CaseStats({ stats }: { stats: Project['stats'] }) {
  return (
    <div className="stats-row reveal">
      {stats.map((s) => (
        <div className="stat-col" key={s.label}>
          <div className="stat-big">{s.value}</div>
          <div className="stat-lbl">{s.label}</div>
        </div>
      ))}
    </div>
  );
}

export function CaseTestimonial({ t }: { t: Project['testimonial'] }) {
  return (
    <section className="section" style={{ background: 'var(--cream)' }}>
      <div className="section-inner" style={{ maxWidth: '700px' }}>
        <div
          style={{
            fontSize: '5rem',
            fontWeight: 900,
            color: 'var(--red)',
            lineHeight: 0.7,
            marginBottom: '1.5rem',
            fontFamily: 'Georgia,serif',
          }}
        >
          &quot;
        </div>
        <p style={{ fontSize: '1.3rem', fontWeight: 600, lineHeight: 1.6, marginBottom: '2rem' }}>{t.quote}</p>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div
            style={{
              width: '52px',
              height: '52px',
              borderRadius: '50%',
              background: t.accent,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '0.9rem',
              fontWeight: 900,
              color: t.avatarColor,
            }}
          >
            {t.initials}
          </div>
          <div>
            <div style={{ fontSize: '0.9rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              {t.name}
            </div>
            <div style={{ fontSize: '0.7rem', color: 'rgba(13,13,13,0.5)' }}>{t.role}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function NextCase({ next }: { next: Project['next'] }) {
  return (
    <div className="next-case">
      <div className="next-label">Next Case Study</div>
      <h2 className="next-title">
        <TitleLines lines={next.title} />
      </h2>
      <Link href={`/work/${next.slug}`} className="btn-next">
        View Case Study →
      </Link>
    </div>
  );
}

/** Wrapper + simple "back to home" nav used by every project page. */
export function CaseShell({ slug, children }: { slug: string; children: ReactNode }) {
  return (
    <div className={`case pg-${slug}`}>
      <nav>
        <Link href="/" className="nav-logo">
          Brandent
        </Link>
        <Link href="/" className="nav-back">
          ← Back to Home
        </Link>
      </nav>
      {children}
    </div>
  );
}

export { getProject };
