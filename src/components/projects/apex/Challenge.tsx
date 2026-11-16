export default function Challenge() {
  return (
    <>
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="section-inner">
          <div className="section-eyebrow reveal">The Situation</div>
          <h2 className="section-heading reveal" style={{ maxWidth: '700px' }}>
            A ₹500Cr Portfolio, Represented by a 2009 Website
          </h2>
          <div
            style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', marginTop: '3rem' }}
            className="reveal"
          >
            <p style={{ fontSize: '0.95rem', color: 'rgba(13,13,13,0.65)', lineHeight: '1.9' }}>
              Apex Realty had accumulated a portfolio of premium residential developments across Delhi-NCR. Their
              offline sales team was exceptional. Their digital presence was, by their own admission, "embarrassing."
              Prospects would research online, find a dated website with broken links, and move on before ever speaking
              to sales.
            </p>
            <p style={{ fontSize: '0.95rem', color: 'rgba(13,13,13,0.65)', lineHeight: '1.9' }}>
              We were tasked not just with a redesign, but with building a complete digital sales engine: a high-trust,
              high-performance website integrated with a CRM pipeline that would turn traffic into booked site visits.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
