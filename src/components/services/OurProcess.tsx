export default function OurProcess() {
  return (
    <>
      <section className="section" style={{ background: 'var(--navy)', color: 'var(--cream)' }}>
        <div className="section-tag" style={{ borderColor: 'var(--red)', color: 'var(--red)' }}>
          How We Work
        </div>
        <h2 className="section-title" style={{ color: 'var(--cream)' }}>
          Our Proven
          <br />
          <span className="outline-text" style={{ WebkitTextStrokeColor: 'var(--cream)' }}>
            Process
          </span>
        </h2>
        <p className="section-desc" style={{ color: 'rgba(241,232,214,0.7)' }}>
          Every project follows a battle-tested framework that ensures strategic alignment, creative excellence, and
          measurable outcomes.
        </p>
        <div className="process-flow">
          <div className="process-item" style={{ background: 'transparent', borderColor: 'rgba(241,232,214,0.3)' }}>
            <div className="process-step-num">01</div>
            <div className="process-step-name" style={{ color: 'var(--cream)' }}>
              Discover
            </div>
            <div className="process-step-desc" style={{ color: 'rgba(241,232,214,0.7)' }}>
              Deep-dive research into your brand, market, and audience.
            </div>
          </div>
          <div className="process-item" style={{ background: 'transparent', borderColor: 'rgba(241,232,214,0.3)' }}>
            <div className="process-step-num">02</div>
            <div className="process-step-name" style={{ color: 'var(--cream)' }}>
              Strategise
            </div>
            <div className="process-step-desc" style={{ color: 'rgba(241,232,214,0.7)' }}>
              Build the strategic blueprint with precision and purpose.
            </div>
          </div>
          <div className="process-item" style={{ background: 'transparent', borderColor: 'rgba(241,232,214,0.3)' }}>
            <div className="process-step-num">03</div>
            <div className="process-step-name" style={{ color: 'var(--cream)' }}>
              Execute
            </div>
            <div className="process-step-desc" style={{ color: 'rgba(241,232,214,0.7)' }}>
              Ship campaigns, content, and solutions with excellence.
            </div>
          </div>
          <div className="process-item" style={{ background: 'transparent', borderColor: 'rgba(241,232,214,0.3)' }}>
            <div className="process-step-num">04</div>
            <div className="process-step-name" style={{ color: 'var(--cream)' }}>
              Measure
            </div>
            <div className="process-step-desc" style={{ color: 'rgba(241,232,214,0.7)' }}>
              Optimize continuously for maximum results.
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
