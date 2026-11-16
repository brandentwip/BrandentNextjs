export default function Testimonials() {
  return (
    <>
      <section className="section">
        <div className="section-tag">Their Stories</div>
        <h2 className="section-title">
          Client
          <br />
          <span className="outline-text">Testimonials</span>
        </h2>
        <p className="section-desc">
          Real feedback from brands we've built. These aren't generic endorsements — they're authentic stories of
          transformation.
        </p>
        <div className="testimonials-grid">
          {/* Featured */}
          <div className="testimonial-card featured reveal">
            <div className="testimonial-stamp">⭐ Featured</div>
            <div className="testimonial-quote">"</div>
            <div className="testimonial-text">
              Brandent didn't just redesign our social media — they rebuilt our entire brand identity from the ground
              up. Within 6 months, we'd tripled our Instagram following and our revenue followed suit. The team's
              strategic thinking combined with flawless execution is absolutely unmatched. They're not just an agency;
              they're our growth partners.
            </div>
            <div className="testimonial-author">
              <div className="author-avatar" style={{ background: 'var(--red)' }}>
                AR
              </div>
              <div className="author-info">
                <h4>Arjun Rawat</h4>
                <p>CEO, NovaCraft Industries</p>
              </div>
            </div>
            <div className="testimonial-stars" style={{ marginTop: '1rem' }}>
              ★★★★★
            </div>
          </div>
          <div className="testimonial-card reveal">
            <div className="testimonial-stars">★★★★★</div>
            <div className="testimonial-quote">"</div>
            <div className="testimonial-text">
              The influencer campaign they ran for our product launch was flawless. 15 creators, 2 million impressions,
              and we sold out in 48 hours. The level of coordination and strategic thinking was exceptional.
            </div>
            <div className="testimonial-author">
              <div className="author-avatar" style={{ background: 'var(--navy)' }}>
                SP
              </div>
              <div className="author-info">
                <h4>Simran Patel</h4>
                <p>Founder, LuxWear</p>
              </div>
            </div>
          </div>
          <div className="testimonial-card reveal reveal-delay-1">
            <div className="testimonial-stars">★★★★★</div>
            <div className="testimonial-quote">"</div>
            <div className="testimonial-text">
              Our new website is in a completely different league. The team understood the real estate market and built
              something that genuinely converts. Leads went up 4x in the first quarter.
            </div>
            <div className="testimonial-author">
              <div className="author-avatar" style={{ background: 'var(--red)' }}>
                RK
              </div>
              <div className="author-info">
                <h4>Rohit Kapoor</h4>
                <p>Director, Apex Realty</p>
              </div>
            </div>
          </div>
          <div className="testimonial-card reveal">
            <div className="testimonial-stars">★★★★★</div>
            <div className="testimonial-quote">"</div>
            <div className="testimonial-text">
              We were skeptical about partnering with an agency but Brandent proved their value immediately. Strategic,
              transparent, and obsessed with our success. They're now an extension of our team.
            </div>
            <div className="testimonial-author">
              <div className="author-avatar" style={{ background: 'var(--navy)' }}>
                MK
              </div>
              <div className="author-info">
                <h4>Meera Kulkarni</h4>
                <p>Marketing Director, TechNova</p>
              </div>
            </div>
          </div>
          <div className="testimonial-card reveal reveal-delay-1">
            <div className="testimonial-stars">★★★★★</div>
            <div className="testimonial-quote">"</div>
            <div className="testimonial-text">
              Brand strategy sessions with Brandent are always enlightening. They don't just execute — they elevate our
              entire marketing thinking. Best investment we've made.
            </div>
            <div className="testimonial-author">
              <div className="author-avatar" style={{ background: 'var(--red)' }}>
                VP
              </div>
              <div className="author-info">
                <h4>Vikram Priya</h4>
                <p>CEO, VerdaHomes</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
