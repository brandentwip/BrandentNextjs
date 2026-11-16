export default function Challenge() {
  return (
    <>
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="section-inner">
          <div className="section-eyebrow reveal">The Challenge</div>
          <h2 className="section-heading reveal" style={{ maxWidth: '650px' }}>
            A Premium Product Launch With No Media Budget
          </h2>
          <div
            style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', marginTop: '3rem' }}
            className="reveal"
          >
            <p style={{ fontSize: '0.95rem', color: 'rgba(13,13,13,0.65)', lineHeight: '1.9' }}>
              LuxWear's Summer 2024 collection needed to make a significant splash in a market dominated by
              international labels. Traditional fashion media placements were unaffordable. Paid social alone had been
              producing mediocre returns on previous launches.
            </p>
            <p style={{ fontSize: '0.95rem', color: 'rgba(13,13,13,0.65)', lineHeight: '1.9' }}>
              The brief: activate a network of highly engaged fashion creators who would give LuxWear authentic cultural
              credibility — and deliver a complete sell-out of the 400-piece limited collection within one week of
              launch.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
