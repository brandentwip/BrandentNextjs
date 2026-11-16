export default function Approach() {
  return (
    <>
      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="section-inner">
          <div className="section-eyebrow reveal">Our Approach</div>
          <h2 className="section-heading reveal" style={{ maxWidth: '700px' }}>
            From Regional Staple
            <br />
            to Premium Icon
          </h2>
          <div
            style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '2rem', marginTop: '3rem' }}
            className="reveal"
          >
            <div style={{ borderTop: '3px solid var(--zest-orange)', paddingTop: '1.5rem' }}>
              <div
                style={{
                  fontSize: '0.65rem',
                  fontWeight: '800',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'var(--red)',
                  marginBottom: '0.8rem',
                }}
              >
                01 — Research
              </div>
              <div style={{ fontSize: '0.85rem', fontWeight: '700', marginBottom: '0.6rem' }}>Consumer Archeology</div>
              <div style={{ fontSize: '0.8rem', color: 'rgba(13,13,13,0.6)', lineHeight: '1.7' }}>
                40 consumer interviews across 6 cities. Mapped the emotional territory of food nostalgia vs modern
                aspiration.
              </div>
            </div>
            <div style={{ borderTop: '3px solid var(--zest-green)', paddingTop: '1.5rem' }}>
              <div
                style={{
                  fontSize: '0.65rem',
                  fontWeight: '800',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'var(--red)',
                  marginBottom: '0.8rem',
                }}
              >
                02 — Identity
              </div>
              <div style={{ fontSize: '0.85rem', fontWeight: '700', marginBottom: '0.6rem' }}>Mark &amp; Language</div>
              <div style={{ fontSize: '0.8rem', color: 'rgba(13,13,13,0.6)', lineHeight: '1.7' }}>
                New wordmark built on rounded, confident geometry. Colour system rooted in Indian harvest — orange,
                green, saffron, earth.
              </div>
            </div>
            <div style={{ borderTop: '3px solid var(--navy)', paddingTop: '1.5rem' }}>
              <div
                style={{
                  fontSize: '0.65rem',
                  fontWeight: '800',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'var(--red)',
                  marginBottom: '0.8rem',
                }}
              >
                03 — Rollout
              </div>
              <div style={{ fontSize: '0.85rem', fontWeight: '700', marginBottom: '0.6rem' }}>360° Execution</div>
              <div style={{ fontSize: '0.8rem', color: 'rgba(13,13,13,0.6)', lineHeight: '1.7' }}>
                Packaging, website, social templates, in-store display, and a brand guidelines bible — all shipped in 16
                weeks.
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
