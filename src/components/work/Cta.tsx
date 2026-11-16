import Link from 'next/link';

export default function Cta() {
  return (
    <>
      <section className="section" style={{ textAlign: 'center' }}>
        <h2 className="section-title" style={{ marginBottom: '1rem' }}>
          Ready For Your
          <br />
          <span className="outline-text">Success Story?</span>
        </h2>
        <p
          style={{
            fontSize: '1rem',
            color: 'rgba(13,13,13,0.6)',
            marginBottom: '2rem',
            maxWidth: '600px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          Let's discuss how we can turn your brand vision into measurable growth.
        </p>
        <Link
          href="/#contact"
          className="reveal"
          style={{
            display: 'inline-block',
            background: 'var(--red)',
            color: 'var(--white)',
            fontSize: '0.8rem',
            fontWeight: '800',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            padding: '1rem 2.5rem',
            textDecoration: 'none',
            transform: 'rotate(-0.5deg)',
            transition: 'transform 0.2s ease',
          }}
        >
          Start Your Project →
        </Link>
      </section>
    </>
  );
}
