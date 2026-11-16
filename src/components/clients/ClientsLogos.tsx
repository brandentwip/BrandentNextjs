export default function ClientsLogos() {
  return (
    <>
      <section className="section clients-section">
        <div className="clients-intro">
          <div>
            <div className="section-tag" style={{ color: 'rgba(241,232,214,0.5)' }}>
              Trusted Partners
            </div>
            <h2 className="section-title" style={{ color: 'var(--cream)', marginBottom: '0' }}>
              <span className="clients-title-light">Industries</span> We've Built
            </h2>
          </div>
          <p style={{ fontSize: '1rem', color: 'rgba(241,232,214,0.6)', maxWidth: '380px', lineHeight: '1.7' }}>
            Across sectors and geographies, we've partnered with leaders in their fields to drive meaningful growth.
          </p>
        </div>
        <div className="clients-logos-grid">
          <div className="client-logo-box reveal">
            <div className="client-logo-name">NovaCraft</div>
          </div>
          <div className="client-logo-box reveal reveal-delay-1">
            <div className="client-logo-name">Zestora</div>
          </div>
          <div className="client-logo-box reveal reveal-delay-2">
            <div className="client-logo-name">Apex Realty</div>
          </div>
          <div className="client-logo-box reveal reveal-delay-3">
            <div className="client-logo-name">LuxWear</div>
          </div>
          <div className="client-logo-box reveal">
            <div className="client-logo-name">TechNova</div>
          </div>
          <div className="client-logo-box reveal reveal-delay-1">
            <div className="client-logo-name">VerdaHomes</div>
          </div>
          <div className="client-logo-box reveal reveal-delay-2">
            <div className="client-logo-name">PulseX</div>
          </div>
          <div className="client-logo-box reveal reveal-delay-3">
            <div className="client-logo-name">OriginCo</div>
          </div>
          <div className="client-logo-box reveal">
            <div className="client-logo-name">BlendFuel</div>
          </div>
          <div className="client-logo-box reveal reveal-delay-1">
            <div className="client-logo-name">SkyBridge</div>
          </div>
        </div>
        <div className="stats-row">
          <div className="stat-card reveal">
            <div className="stat-number">200+</div>
            <div className="stat-label">Brands Elevated</div>
          </div>
          <div className="stat-card reveal reveal-delay-1">
            <div className="stat-number">98%</div>
            <div className="stat-label">Client Retention</div>
          </div>
          <div className="stat-card reveal reveal-delay-2">
            <div className="stat-number">₹40Cr+</div>
            <div className="stat-label">Revenue Generated</div>
          </div>
          <div className="stat-card reveal reveal-delay-3">
            <div className="stat-number">8+</div>
            <div className="stat-label">Years in Market</div>
          </div>
        </div>
      </section>
    </>
  );
}
