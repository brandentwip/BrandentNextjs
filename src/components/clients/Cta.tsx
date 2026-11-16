import Link from 'next/link';

export default function Cta() {
  return (
    <>
      <section className="cta-section">
        <h2 className="cta-title reveal">
          <span className="outline-light">Ready</span> To Join
          <br />
          Our <span className="red">Client</span> Family?
        </h2>
        <p className="cta-sub reveal">Let's talk about your vision. First call is always on us.</p>
        <Link href="/contact" className="cta-btn reveal">
          Start Your Project →
        </Link>
      </section>
    </>
  );
}
