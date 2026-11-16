export default function OurPrinciples() {
  return (
    <>
      <section className="section">
        <h2 className="section-title" style={{ marginBottom: '1rem' }}>
          Our Core
          <br />
          <span className="outline-text">Principles</span>
        </h2>
        <p className="section-desc">The beliefs that guide every decision we make.</p>
        <div className="principles-grid">
          <div className="principle-card reveal">
            <div className="principle-icon">🎯</div>
            <div className="principle-title">Strategy First</div>
            <div className="principle-desc">
              Execution without strategy is noise. We always start with clear, data-backed thinking. Every tactic serves
              the bigger picture.
            </div>
          </div>
          <div className="principle-card reveal">
            <div className="principle-icon">📊</div>
            <div className="principle-title">Data Driven</div>
            <div className="principle-desc">
              We measure everything. Insights come from real performance data, not hunches. Numbers guide our
              optimisation.
            </div>
          </div>
          <div className="principle-card reveal">
            <div className="principle-icon">💡</div>
            <div className="principle-title">Creative Excellence</div>
            <div className="principle-desc">
              Strategy + beautiful execution = growth. We refuse to compromise on either. Your brand deserves
              world-class creative.
            </div>
          </div>
          <div className="principle-card reveal">
            <div className="principle-icon">🤝</div>
            <div className="principle-title">True Partnership</div>
            <div className="principle-desc">
              You're not hiring vendors. You're partnering with strategists. We invest in your success like it's our
              own.
            </div>
          </div>
          <div className="principle-card reveal">
            <div className="principle-icon">⚡</div>
            <div className="principle-title">Agile &amp; Adaptive</div>
            <div className="principle-desc">
              Markets shift. Audiences evolve. We stay nimble, testing continuously and pivoting when the data demands
              it.
            </div>
          </div>
          <div className="principle-card reveal">
            <div className="principle-icon">✨</div>
            <div className="principle-title">Unforgettable Results</div>
            <div className="principle-desc">
              We don't do mediocre. Every campaign, every piece of content, every interaction is built to leave a mark.
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
