export default function WebsiteMockup() {
  return (
    <>
      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="section-inner">
          <div className="section-eyebrow reveal">The Build</div>
          <h2 className="section-heading reveal">A Website That Sells Luxury</h2>
          <div className="browser-mock reveal" style={{ marginTop: '2.5rem' }}>
            <div className="browser-bar">
              <div className="b-dot b-d1"></div>
              <div className="b-dot b-d2"></div>
              <div className="b-dot b-d3"></div>
              <div className="b-url">apexrealty.in</div>
            </div>
            <div className="browser-content">
              <div className="mock-hero">
                <div>
                  <div className="mock-title">
                    Premium Living
                    <br />
                    <span>in Delhi-NCR</span>
                  </div>
                  <div
                    style={{
                      fontSize: '0.65rem',
                      color: 'rgba(255,255,255,0.4)',
                      marginTop: '0.5rem',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                    }}
                  >
                    Explore 12 Exclusive Projects
                  </div>
                </div>
                <button className="mock-cta">Schedule a Visit</button>
              </div>
              <div className="mock-cards">
                <div className="mock-card">
                  <div className="mc-label">Gurugram</div>
                  <div className="mc-price">₹2.4Cr+</div>
                </div>
                <div className="mock-card">
                  <div className="mc-label">Noida Ext.</div>
                  <div className="mc-price">₹85L+</div>
                </div>
                <div className="mock-card">
                  <div className="mc-label">Dwarka Exp.</div>
                  <div className="mc-price">₹1.2Cr+</div>
                </div>
                <div className="mock-card">
                  <div className="mc-label">South Delhi</div>
                  <div className="mc-price">₹4.8Cr+</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
