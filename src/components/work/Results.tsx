export default function Results() {
  return (
    <>
      <section className="section results-section">
        <div className="section-tag" style={{ color: 'var(--cream)', borderColor: 'var(--cream)' }}>
          Aggregate Impact
        </div>
        <h2 className="section-title" style={{ color: 'var(--cream)', marginBottom: '3rem' }}>
          <span className="outline-text" style={{ WebkitTextStrokeColor: 'var(--cream)' }}>
            Results
          </span>{' '}
          We Delivered
        </h2>
        <div className="results-grid">
          <div className="result-card reveal">
            <div className="result-number">200+</div>
            <div className="result-label">Brands Elevated</div>
          </div>
          <div className="result-card reveal">
            <div className="result-number">50M+</div>
            <div className="result-label">Impressions Generated</div>
          </div>
          <div className="result-card reveal">
            <div className="result-number">3.2x</div>
            <div className="result-label">Average ROI</div>
          </div>
          <div className="result-card reveal">
            <div className="result-number">₹40Cr+</div>
            <div className="result-label">Revenue Generated</div>
          </div>
        </div>
      </section>
    </>
  );
}
