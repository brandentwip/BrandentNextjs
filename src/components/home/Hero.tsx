import Link from 'next/link';

export default function Hero() {
  return (
    <>
      <section className="hero">
        <div className="hero-texture"></div>
        <div className="hero-grid"></div>
        <div className="hero-content">
          <div className="hero-eyebrow">The Marketing Enterprise</div>
          <h1 className="hero-headline">
            We Build
            <br />
            <span className="outline">Brands</span>
            <br />
            <span className="red-word">That Stay.</span>
          </h1>
          <p className="hero-sub">
            You&apos;ve seen thousands. What stayed? We go beyond the visible — into what creates recall. Strategy,
            content, design. Moving as one.
          </p>
          <div className="hero-ctas">
            <a href="#work" className="btn-primary">
              See Our Work
            </a>
            <Link href="/services" className="btn-ghost">
              Explore Services →
            </Link>
          </div>
        </div>
        <div className="hero-stats">
          <div className="hero-stat">
            <div className="hero-stat-num">265+</div>
            <div className="hero-stat-label">Brands Elevated</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-num">5+</div>
            <div className="hero-stat-label">Years in Market</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-num">98%</div>
            <div className="hero-stat-label">Client Retention</div>
          </div>
        </div>
        <div className="hero-sticker">
          <div className="hero-sticker-text">
            5 Years
            <br />
            265+
            <br />
            Brands
            <br />
            ★★★★★
          </div>
        </div>
      </section>
    </>
  );
}
