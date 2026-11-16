export default function Gallery() {
  return (
    <>
      <section className="gallery">
        <div className="section-inner">
          <div className="section-eyebrow reveal" style={{ color: 'rgba(241,232,214,0.4)' }}>
            Creative Work
          </div>
          <h2 className="section-heading reveal" style={{ color: 'var(--cream)' }}>
            Content That Converts
          </h2>
          <div className="gallery-grid">
            <div className="gallery-card gc-1b reveal" style={{ fontSize: '6rem' }}>
              🔨
              <div className="gallery-label">Maker Series — Viral Reels</div>
            </div>
            <div className="gallery-card gc-2b gc-h reveal">
              <span>📐</span>
              <div className="gallery-label">Tutorial Templates</div>
            </div>
            <div className="gallery-card gc-3b gc-h reveal">
              <span>🛠️</span>
              <div className="gallery-label">Product Showcase</div>
            </div>
            <div className="gallery-card gc-4b reveal">
              <span>🎬</span>
              <div className="gallery-label">YouTube Channel Design</div>
            </div>
            <div className="gallery-card gc-3b gc-h reveal">
              <span>✍️</span>
              <div className="gallery-label">Content Calendar</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
