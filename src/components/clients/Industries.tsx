export default function Industries() {
  return (
    <>
      <section className="section">
        <div className="section-tag">Expertise</div>
        <h2 className="section-title">
          Industries We
          <br />
          <span className="outline-text">Serve</span>
        </h2>
        <div className="industries-grid">
          <div className="industry-card reveal">
            <div className="industry-icon">💼</div>
            <div className="industry-name">E-Commerce &amp; D2C</div>
            <div className="industry-desc">
              From bootstrapped startups to million-dollar brands. We've built social strategies that drive sales and
              loyalty at scale.
            </div>
          </div>
          <div className="industry-card reveal reveal-delay-1">
            <div className="industry-icon">🏠</div>
            <div className="industry-name">Real Estate &amp; Property</div>
            <div className="industry-desc">
              We help real estate teams go digital. Web platforms, lead generation, and buyer engagement that converts.
            </div>
          </div>
          <div className="industry-card reveal reveal-delay-2">
            <div className="industry-icon">🍔</div>
            <div className="industry-name">Food &amp; Beverage</div>
            <div className="industry-desc">
              Social-first strategies for QSRs and CPG brands. We make mouths water and stomachs growl online.
            </div>
          </div>
          <div className="industry-card reveal">
            <div className="industry-icon">👗</div>
            <div className="industry-name">Fashion &amp; Lifestyle</div>
            <div className="industry-desc">
              Visual storytelling that turns followers into customers. From micro-influencer campaigns to full-brand
              overhauls.
            </div>
          </div>
          <div className="industry-card reveal reveal-delay-1">
            <div className="industry-icon">💻</div>
            <div className="industry-name">SaaS &amp; Technology</div>
            <div className="industry-desc">
              B2B and B2C tech brands need smart positioning. We translate complexity into compelling growth narratives.
            </div>
          </div>
          <div className="industry-card reveal reveal-delay-2">
            <div className="industry-icon">🏥</div>
            <div className="industry-name">Healthcare &amp; Wellness</div>
            <div className="industry-desc">
              Building trust through authentic storytelling. We help health brands connect with audiences at scale.
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
