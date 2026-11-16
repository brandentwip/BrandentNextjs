export default function Gallery() {
  return (
    <>
      <section className="gallery">
        <div className="section-inner">
          <div className="section-eyebrow reveal" style={{ color: 'rgba(241,232,214,0.4)' }}>
            Visual Work
          </div>
          <h2 className="section-heading reveal" style={{ color: 'var(--cream)' }}>
            Built for Prestige
          </h2>
          <div className="gallery-grid">
            <div className="gallery-card gc-a reveal">
              <span>🏛️</span>
              <div className="gallery-label">Homepage Design</div>
            </div>
            <div className="gallery-card gc-b reveal">
              <span>📐</span>
              <div className="gallery-label">Floor Plan Viewer</div>
            </div>
            <div className="gallery-card gc-c reveal">
              <span>🏙️</span>
              <div className="gallery-label">Project Gallery</div>
            </div>
            <div className="gallery-card gc-d reveal">
              <span>📱</span>
              <div className="gallery-label">Mobile Experience</div>
            </div>
            <div className="gallery-card gc-e reveal">
              <span>📋</span>
              <div className="gallery-label">Lead Dashboard</div>
            </div>
            <div className="gallery-card gc-f reveal">
              <span>🔗</span>
              <div className="gallery-label">WhatsApp Integration</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
