import Link from 'next/link';

export default function Work() {
  return (
    <>
      <section className="work" id="work">
        <div className="work-header reveal">
          <h2 className="work-title">
            Selected
            <br />
            <span className="accent">Work</span>
          </h2>
          <Link href="/work" className="work-link">
            View All Projects →
          </Link>
        </div>
        <div className="work-grid">
          {/* CARD 1: Kala Johare */}
          <Link href="/work" className="work-card large reveal">
            <div className="work-card-bg">
              <div className="wc1-bg" style={{ position: 'absolute', inset: '0' }}></div>
              <div className="wc1-illustration">
                <div className="wc1-plate">💎</div>
              </div>
              {/* Harvest pattern overlay */}
              <div
                style={{
                  position: 'absolute',
                  inset: '0',
                  backgroundImage:
                    'repeating-linear-gradient(45deg,rgba(255,255,255,0.03)0px,rgba(255,255,255,0.03)1px,transparent 1px,transparent 20px)',
                }}
              ></div>
            </div>
            <div className="work-card-label">Brand Identity</div>
            <div className="work-card-arrow">↗</div>
            <div className="work-card-num">01</div>
            <div className="work-card-strip">
              <div className="work-card-cat">Brand Identity + Storytelling</div>
              <div className="work-card-name">Kala Johare — Global Rebrand</div>
            </div>
            <div className="work-card-overlay">
              <div className="work-card-info">
                <div className="work-card-cat">Brand Identity + Storytelling</div>
                <div className="work-card-name">Kala Johare — A brand that looks global, but still belongs to Jaipur</div>
              </div>
            </div>
          </Link>
          {/* CARD 2: SMC Global */}
          <Link href="/work" className="work-card reveal reveal-delay-1">
            <div className="work-card-bg">
              <div className="wc2-bg" style={{ position: 'absolute', inset: '0' }}></div>
              <div className="wc2-illustration">
                <div className="mini-phone mp-tall">
                  <div className="mp-screen">
                    <div>
                      <div className="mp-stat">32.3K</div>
                      <div className="mp-label">Followers</div>
                    </div>
                    <div className="mp-bars">
                      <div className="mp-bar dim" style={{ height: '30%' }}></div>
                      <div className="mp-bar lit" style={{ height: '55%' }}></div>
                      <div className="mp-bar lit" style={{ height: '75%' }}></div>
                      <div className="mp-bar lit" style={{ height: '90%' }}></div>
                      <div className="mp-bar lit" style={{ height: '100%' }}></div>
                    </div>
                  </div>
                </div>
                <div className="mini-phone mp-short">
                  <div className="mp-screen" style={{ background: 'linear-gradient(160deg,#1a0022,#ec4899)' }}>
                    <div>
                      <div className="mp-stat">1.5M+</div>
                      <div className="mp-label">Views</div>
                    </div>
                    <div className="mp-bars">
                      <div className="mp-bar lit" style={{ height: '60%' }}></div>
                      <div className="mp-bar lit" style={{ height: '80%' }}></div>
                      <div className="mp-bar lit" style={{ height: '100%' }}></div>
                      <div className="mp-bar dim" style={{ height: '40%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                style={{
                  position: 'absolute',
                  inset: '0',
                  backgroundImage:
                    'repeating-linear-gradient(0deg,rgba(255,255,255,0.02)0px,rgba(255,255,255,0.02)1px,transparent 1px,transparent 40px)',
                }}
              ></div>
            </div>
            <div className="work-card-label">Social</div>
            <div className="work-card-arrow">↗</div>
            <div className="work-card-num">02</div>
            <div className="work-card-strip">
              <div className="work-card-cat">Social Media + Influencer</div>
              <div className="work-card-name">SMC Global — 6.75K to 32.3K in 12 months</div>
            </div>
            <div className="work-card-overlay">
              <div className="work-card-info">
                <div className="work-card-cat">Social Media + Influencer</div>
                <div className="work-card-name">SMC Global — 1.5M+ views, 250+ creator pieces, stagnant to scaling</div>
              </div>
            </div>
          </Link>
          {/* CARD 3: IDCULT */}
          <Link href="/work" className="work-card reveal reveal-delay-2">
            <div className="work-card-bg">
              <div className="wc3-bg" style={{ position: 'absolute', inset: '0' }}></div>
              <div className="wc3-illustration">
                <div className="mini-buildings">
                  <div className="mini-b" style={{ width: '50px', height: '200px' }}>
                    <div className="mb-win"></div>
                  </div>
                  <div
                    className="mini-b"
                    style={{
                      width: '70px',
                      height: '280px',
                      background: 'linear-gradient(to top,#d4a843,rgba(212,168,67,0.5))',
                    }}
                  >
                    <div className="mb-win"></div>
                  </div>
                  <div className="mini-b" style={{ width: '45px', height: '180px' }}>
                    <div className="mb-win"></div>
                  </div>
                  <div className="mini-b" style={{ width: '38px', height: '140px' }}>
                    <div className="mb-win"></div>
                  </div>
                </div>
                <div className="city-glow"></div>
                <div className="ground-line"></div>
              </div>
              <div
                style={{
                  position: 'absolute',
                  inset: '0',
                  backgroundImage:
                    'repeating-linear-gradient(90deg,rgba(212,168,67,0.03)0px,rgba(212,168,67,0.03)1px,transparent 1px,transparent 40px)',
                }}
              ></div>
            </div>
            <div className="work-card-label">Performance + Web</div>
            <div className="work-card-arrow">↗</div>
            <div className="work-card-num">03</div>
            <div className="work-card-strip">
              <div className="work-card-cat">Performance Marketing + Website</div>
              <div className="work-card-name">IDCULT — 6.91X ROAS through creative testing</div>
            </div>
            <div className="work-card-overlay">
              <div className="work-card-info">
                <div className="work-card-cat">Performance Marketing + Website</div>
                <div className="work-card-name">IDCULT — 6X conversion growth, digital storefront built to sell</div>
              </div>
            </div>
          </Link>
          {/* CARD 4: Bench Deli */}
          <Link href="/work" className="work-card reveal reveal-delay-3">
            <div className="work-card-bg">
              <div className="wc4-bg" style={{ position: 'absolute', inset: '0' }}></div>
              <div className="wc4-illustration">
                <div className="fabric-swatch fs-1">
                  <div className="fs-tex"></div>
                </div>
                <div className="fabric-swatch fs-2">
                  <div className="fs-tex"></div>
                </div>
                <div className="fabric-swatch fs-3">
                  <div className="fs-tex"></div>
                </div>
              </div>
              <div
                style={{
                  position: 'absolute',
                  inset: '0',
                  backgroundImage:
                    'repeating-linear-gradient(45deg,rgba(255,255,255,0.03)0px,rgba(255,255,255,0.03)1px,transparent 1px,transparent 15px)',
                }}
              ></div>
            </div>
            <div className="work-card-label">Social + Content</div>
            <div className="work-card-arrow">↗</div>
            <div className="work-card-num">04</div>
            <div className="work-card-strip">
              <div className="work-card-cat">Social Media + Content</div>
              <div className="work-card-name">Bench Deli — 247K+ reach, 47% more walk-ins</div>
            </div>
            <div className="work-card-overlay">
              <div className="work-card-info">
                <div className="work-card-cat">Social Media + Content</div>
                <div className="work-card-name">Bench Deli — Roman-inspired repositioning that filled tables</div>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </>
  );
}
