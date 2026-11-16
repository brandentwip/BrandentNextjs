export default function Testimonials() {
  return (
    <>
      <section className="testimonials" id="testimonials">
        <div className="testimonials-header reveal">
          <h2 className="testimonials-title">
            What
            <br />
            Clients
            <br />
            <span className="navy">Say</span>
          </h2>
          <div style={{ maxWidth: '300px' }}>
            <p style={{ fontSize: '0.9rem', lineHeight: '1.8', color: 'rgba(13,13,13,0.6)' }}>
              Don&apos;t take our word for it. Here&apos;s what the brands we&apos;ve built have to say about working with
              Brandent.
            </p>
          </div>
        </div>
        <div className="testimonials-grid">
          <div className="testimonial-card featured reveal">
            <div className="testimonial-stamp">⭐ Featured</div>
            <div className="testimonial-quote">"</div>
            <div className="testimonial-text">
              What Brandent did for our social media was more than content — they gave SMC a voice an entire generation
              actually wanted to follow. We went from stagnant to scaling in under a year. The numbers speak for
              themselves.
            </div>
            <div className="testimonial-person">
              <div className="person-avatar" style={{ background: 'var(--red)', color: 'var(--white)' }}>
                SK
              </div>
              <div>
                <div className="person-name">Saurabh Khanna</div>
                <div className="person-role">Marketing Head, SMC Global</div>
              </div>
            </div>
          </div>
          <div className="testimonial-card reveal reveal-delay-1">
            <div className="testimonial-quote">"</div>
            <div className="testimonial-text">
              The IDCULT website they built isn&apos;t just beautiful — it sells. Our ROAS went to 6.91 and conversions hit
              a new high. They understood that a good website isn&apos;t a design project, it&apos;s a business tool.
            </div>
            <div className="testimonial-person">
              <div className="person-avatar" style={{ background: 'var(--navy)', color: 'var(--cream)' }}>
                RA
              </div>
              <div>
                <div className="person-name">Rohan Aggarwal</div>
                <div className="person-role">Founder, IDCULT</div>
              </div>
            </div>
          </div>
          <div className="testimonial-card reveal reveal-delay-2">
            <div className="testimonial-quote">"</div>
            <div className="testimonial-text">
              Brandent repositioned Bench completely — the Roman aesthetic, the content, the creator collabs. Walk-ins
              went up 47% and people were coming in asking for dishes by name. That&apos;s brand recall working.
            </div>
            <div className="testimonial-person">
              <div className="person-avatar" style={{ background: 'var(--black)', color: 'var(--cream)' }}>
                AM
              </div>
              <div>
                <div className="person-name">Aditya Mehra</div>
                <div className="person-role">Co-Founder, Bench Deli</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
