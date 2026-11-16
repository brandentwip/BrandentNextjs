export default function Timeline() {
  return (
    <>
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="section-inner">
          <div className="section-eyebrow reveal">Campaign Timeline</div>
          <h2 className="section-heading reveal">8 Weeks, Engineered to Peak at Launch</h2>
          <div className="timeline reveal">
            <div className="t-item">
              <div className="t-date">Week 1–2</div>
              <div className="t-dot"></div>
              <div className="t-content">
                <div className="t-title">Creator Briefing &amp; Seeding</div>
                <div className="t-desc">
                  Bespoke collection boxes sent to all 15 creators. Briefed on brand story, styling do's, creative
                  freedom within brand guidelines. No script — authentic storytelling only.
                </div>
              </div>
            </div>
            <div className="t-item">
              <div className="t-date">Week 3–4</div>
              <div className="t-dot"></div>
              <div className="t-content">
                <div className="t-title">Teaser Content Phase</div>
                <div className="t-desc">
                  Unboxing content, styling previews, and collection hints published with DM-to-waitlist call to action.
                  12,000 waitlist sign-ups before launch.
                </div>
              </div>
            </div>
            <div className="t-item">
              <div className="t-date">Week 5–6</div>
              <div className="t-dot" style={{ background: 'var(--red)' }}></div>
              <div className="t-content">
                <div className="t-title">Launch Day Cascade</div>
                <div className="t-desc">
                  Coordinated drop: all 15 creators post within a 6-hour window. Reels, carousels, and Stories pushed
                  simultaneously. 2 million impressions in 24 hours. Sold out in 48 hours.
                </div>
              </div>
            </div>
            <div className="t-item">
              <div className="t-date">Week 7–8</div>
              <div className="t-dot" style={{ background: 'var(--navy)' }}></div>
              <div className="t-content">
                <div className="t-title">Waitlist &amp; Restock Activation</div>
                <div className="t-desc">
                  Managed the sellout narrative to build exclusivity. Restock campaign drove an additional 40% revenue
                  over the initial launch week.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
