export default function Gallery() {
  return (
    <>
      <section className="gallery">
        <div className="section-inner">
          <div className="section-eyebrow reveal" style={{ color: 'rgba(190,24,93,0.5)' }}>
            Creative Output
          </div>
          <h2 className="section-heading reveal" style={{ color: 'var(--cream)' }}>
            The Campaign in Motion
          </h2>
          <div className="gallery-grid">
            <div className="gallery-card gc-r gc-tall reveal">
              <span>👗</span>
              <div className="gallery-label">Creator Content — Editorial Series</div>
            </div>
            <div className="gallery-card gc-b reveal">
              <span>📦</span>
              <div className="gallery-label">Custom Gifting Boxes</div>
            </div>
            <div className="gallery-card gc-d reveal">
              <span>📊</span>
              <div className="gallery-label">Campaign Dashboard</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
