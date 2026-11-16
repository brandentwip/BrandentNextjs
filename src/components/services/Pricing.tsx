export default function Pricing() {
  return (
    <>
      <section className="section">
        <div className="section-tag">Investment</div>
        <h2 className="section-title">
          Service
          <br />
          <span className="outline-text">Packages</span>
        </h2>
        <p className="section-desc">
          Choose the right investment level for your brand. All packages include strategy, execution, and ongoing
          optimization.
        </p>
        <div className="pricing-grid">
          <div className="pricing-card reveal">
            <div className="pricing-tag">Starter</div>
            <div className="pricing-name">Foundation</div>
            <div className="pricing-price">
              ₹50K
              <span style={{ fontSize: '0.6rem', fontWeight: '500' }}>/mo</span>
            </div>
            <ul className="pricing-list">
              <li>Social Media Strategy</li>
              <li>2 Posts Per Week</li>
              <li>Basic Analytics</li>
              <li>Monthly Reporting</li>
            </ul>
            <button className="pricing-btn">Get Started</button>
          </div>
          <div className="pricing-card featured reveal">
            <div className="pricing-tag">Popular</div>
            <div className="pricing-name">Professional</div>
            <div className="pricing-price">
              ₹150K
              <span style={{ fontSize: '0.6rem', fontWeight: '500' }}>/mo</span>
            </div>
            <ul className="pricing-list">
              <li>Complete Social Strategy</li>
              <li>5 Posts Per Week</li>
              <li>Paid Ad Management</li>
              <li>Advanced Analytics</li>
              <li>Weekly Optimization</li>
            </ul>
            <button className="pricing-btn">Get Started</button>
          </div>
          <div className="pricing-card reveal">
            <div className="pricing-tag">Premium</div>
            <div className="pricing-name">Enterprise</div>
            <div className="pricing-price">
              ₹300K
              <span style={{ fontSize: '0.6rem', fontWeight: '500' }}>/mo</span>
            </div>
            <ul className="pricing-list">
              <li>Full-Spectrum Strategy</li>
              <li>Daily Content</li>
              <li>Influencer Campaigns</li>
              <li>Video Production</li>
              <li>Dedicated Account Manager</li>
            </ul>
            <button className="pricing-btn">Get Started</button>
          </div>
        </div>
      </section>
    </>
  );
}
