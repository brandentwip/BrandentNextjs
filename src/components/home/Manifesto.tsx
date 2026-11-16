import Link from 'next/link';

export default function Manifesto() {
  return (
    <>
      <section className="manifesto">
        <div className="manifesto-bg-text">B</div>
        <div className="manifesto-eyebrow reveal">Our Belief</div>
        <p className="manifesto-text reveal">
          Most of what works in marketing
          <br />
          isn&apos;t magic — it&apos;s <span className="highlight">clarity,</span>
          <br />
          <span className="outline">consistency,</span> and a lot of iteration.
          <br />
          We just enjoy being in that <span className="highlight">process.</span>
        </p>
        <Link href="/contact" className="btn-primary reveal" style={{ display: 'inline-block', marginTop: '1rem' }}>
          Let's Build Something →
        </Link>
      </section>
    </>
  );
}
