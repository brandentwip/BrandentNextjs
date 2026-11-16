export default function PlatformBreakdown() {
  return (
    <>
      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="section-inner">
          <div className="section-eyebrow reveal">Platform Strategy</div>
          <h2 className="section-heading reveal">Where We Won</h2>
          <div className="platform-grid reveal">
            <div className="platform-card">
              <div className="platform-icon">📸</div>
              <div className="platform-name">Instagram</div>
              <div className="platform-stat">342K</div>
              <div style={{ fontSize: '0.7rem', color: 'rgba(13,13,13,0.5)', marginTop: '0.3rem' }}>
                Primary channel — Reels drove 68% of growth
              </div>
            </div>
            <div className="platform-card">
              <div className="platform-icon">▶️</div>
              <div className="platform-name">YouTube</div>
              <div className="platform-stat">118K</div>
              <div style={{ fontSize: '0.7rem', color: 'rgba(13,13,13,0.5)', marginTop: '0.3rem' }}>
                Long-form tutorials — avg. 18min watch time
              </div>
            </div>
            <div className="platform-card">
              <div className="platform-icon">🐦</div>
              <div className="platform-name">X / Twitter</div>
              <div className="platform-stat">40K</div>
              <div style={{ fontSize: '0.7rem', color: 'rgba(13,13,13,0.5)', marginTop: '0.3rem' }}>
                B2B reach, retailer relationships
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
