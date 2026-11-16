export default function Challenge() {
  return (
    <>
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="section-inner">
          <div
            style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start' }}
            className="reveal"
          >
            <div>
              <div className="section-eyebrow">The Brief</div>
              <h2 className="section-heading">Zero Presence. Zero Budget. Twelve Months.</h2>
              <p style={{ fontSize: '0.95rem', color: 'rgba(13,13,13,0.65)', lineHeight: '1.9' }}>
                NovaCraft launched as a premium home-workshop tool brand with no social media presence, a modest ₹15L
                digital budget, and ambitious revenue targets. The market was dominated by international giants with
                multi-crore ad spends.
              </p>
              <p style={{ fontSize: '0.95rem', color: 'rgba(13,13,13,0.65)', lineHeight: '1.9', marginTop: '1rem' }}>
                Our mandate: build an audience of creators and makers from nothing, in 12 months, that would sustain
                long-term organic growth.
              </p>
            </div>
            <div>
              <div className="section-eyebrow">The Strategy</div>
              <h2 className="section-heading">Community First, Product Second</h2>
              <p style={{ fontSize: '0.95rem', color: 'rgba(13,13,13,0.65)', lineHeight: '1.9' }}>
                We identified India's emerging maker community — woodworkers, leatherworkers, DIY home renovators — and
                made NovaCraft their voice, not just their tool supplier. Every piece of content showcased makers, not
                products.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
