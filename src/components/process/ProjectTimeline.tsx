export default function ProjectTimeline() {
  return (
    <>
      <section className="section">
        <h2 className="section-title" style={{ marginBottom: '3rem' }}>
          Typical Project
          <br />
          <span className="outline-text">Timeline</span>
        </h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-label">Week 1-2</div>
            <div className="timeline-detail">Discovery &amp; Strategy Workshop</div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-label">Week 3-4</div>
            <div className="timeline-detail">Strategy &amp; Creative Direction</div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-label">Week 5-8</div>
            <div className="timeline-detail">Production &amp; Content Creation</div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-label">Week 9+</div>
            <div className="timeline-detail">Launch &amp; Optimisation</div>
          </div>
        </div>
      </section>
    </>
  );
}
