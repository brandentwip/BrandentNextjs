export default function Results() {
  return (
    <>
      <section className="results">
        <div className="results-grid">
          <div className="result-item reveal">
            <div className="result-num">
              6.9
              <span className="result-suffix">×</span>
            </div>
            <div className="result-label">Peak ROAS Delivered</div>
          </div>
          <div className="result-item reveal reveal-delay-1">
            <div className="result-num">
              2.5
              <span className="result-suffix">M+</span>
            </div>
            <div className="result-label">Social Views Generated</div>
          </div>
          <div className="result-item reveal reveal-delay-2">
            <div className="result-num">
              265
              <span className="result-suffix">+</span>
            </div>
            <div className="result-label">Brands Elevated</div>
          </div>
          <div className="result-item reveal reveal-delay-3">
            <div className="result-num">
              ₹12
              <span className="result-suffix">Cr+</span>
            </div>
            <div className="result-label">Revenue Generated for Clients</div>
          </div>
        </div>
      </section>
    </>
  );
}
