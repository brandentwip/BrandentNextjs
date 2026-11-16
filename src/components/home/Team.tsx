export default function Team() {
  return (
    <>
      <section className="team">
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: '0',
            flexWrap: 'wrap',
            gap: '2rem',
          }}
          className="reveal"
        >
          <div>
            <div className="section-tag">The People</div>
            <h2 className="services-title">
              Meet The
              <br />
              <span className="outline-text">Team</span>
            </h2>
          </div>
          <p className="services-desc">
            Two storytellers who disagreed — one chased performance, the other chased perception. That tension is
            exactly what makes Brandent work.
          </p>
        </div>
        <div className="team-grid">
          <div className="team-card reveal">
            <div className="team-avatar-box">RC</div>
            <div className="team-name">Rajat Chawla</div>
            <div className="team-role">Co-Founder — Strategy &amp; Growth</div>
          </div>
          <div className="team-card reveal reveal-delay-1">
            <div className="team-avatar-box">TC</div>
            <div className="team-name">Tanya Chawla</div>
            <div className="team-role">Co-Founder — Creative &amp; Content</div>
          </div>
          <div className="team-card reveal reveal-delay-2">
            <div className="team-avatar-box">BS</div>
            <div className="team-name">Base Studio</div>
            <div className="team-role">In-House Production Studio</div>
          </div>
          <div className="team-card reveal reveal-delay-3">
            <div className="team-avatar-box">265</div>
            <div className="team-name">265+ Brands</div>
            <div className="team-role">And counting — across India &amp; beyond</div>
          </div>
        </div>
      </section>
    </>
  );
}
