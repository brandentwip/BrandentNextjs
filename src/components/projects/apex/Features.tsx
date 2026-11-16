export default function Features() {
  return (
    <>
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="section-inner">
          <div className="section-eyebrow reveal">What We Built</div>
          <h2 className="section-heading reveal">Every Feature Designed to Convert</h2>
          <div className="feature-grid reveal">
            <div className="feature-item">
              <div className="f-icon">🗺️</div>
              <div className="f-title">Interactive Site Maps</div>
              <div className="f-desc">
                Click-to-explore floor plans and master layout maps with real-time unit availability status.
              </div>
            </div>
            <div className="feature-item">
              <div className="f-icon">🎥</div>
              <div className="f-title">Virtual Walkthroughs</div>
              <div className="f-desc">
                Embedded 360° tour integration so prospects experience the property before site visit.
              </div>
            </div>
            <div className="feature-item">
              <div className="f-icon">📊</div>
              <div className="f-title">CRM Lead Pipeline</div>
              <div className="f-desc">
                Every form and WhatsApp click feeds directly into a custom CRM with automated follow-up sequences.
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
