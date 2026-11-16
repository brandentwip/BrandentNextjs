import Link from 'next/link';

export default function Cta() {
  return (
    <>
      <section className="cta-section">
        <h2 className="cta-title reveal">
          Ready To
          <br />
          <span className="red">Grow</span>
          <br />
          <span className="outline">Your Brand?</span>
        </h2>
        <p className="cta-sub reveal">No silos. No delays. Just ideas that execute at speed. First call is always on us.</p>
        <Link href="/contact" className="cta-btn reveal">
          Start A Conversation →
        </Link>
        <a href="mailto:hello@brandent.in" className="cta-email reveal">
          hello@brandent.in
        </a>
      </section>
    </>
  );
}
