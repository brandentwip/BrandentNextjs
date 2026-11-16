export default function Gallery() {
  return (
    <>
      <section className="gallery">
        <div className="section-inner">
          <div className="section-eyebrow reveal" style={{ color: 'rgba(241,232,214,0.5)' }}>
            Creative Output
          </div>
          <h2 className="section-heading reveal" style={{ color: 'var(--cream)' }}>
            The Work
          </h2>
          <div className="gallery-grid">
            <div className="gallery-card gc-1 reveal">
              <span>🌿</span>
              <div className="gallery-label">Brand Identity System</div>
            </div>
            <div className="gallery-card gc-2 reveal">
              <span>📦</span>
              <div className="gallery-label">Premium Packaging Design</div>
            </div>
            <div className="gallery-card gc-3 reveal">
              <span>🌐</span>
              <div className="gallery-label">E-Commerce Website</div>
            </div>
            <div className="gallery-card gc-4 reveal">
              <span>📱</span>
              <div className="gallery-label">Social Media Templates</div>
            </div>
            <div className="gallery-card gc-5 reveal">
              <span>📋</span>
              <div className="gallery-label">Brand Guidelines</div>
            </div>
            <div className="gallery-card gc-6 reveal">
              <span>🏪</span>
              <div className="gallery-label">Retail Display System</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
