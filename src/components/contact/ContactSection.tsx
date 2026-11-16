import ContactForm from './ContactForm';

export default function ContactSection() {
  return (
    <>
      <section className="section">
        <div className="contact-container">
          {/* INFO */}
          <div className="contact-info reveal">
            <div>
              <h2 className="contact-info-heading">
                Let's
                <br />
                <span className="outline-navy">Talk.</span>
              </h2>
              <p className="contact-info-sub">
                Whether you're ready to launch a campaign, rebrand, or scale your growth — we're ready to partner with
                you.
              </p>
            </div>
            <div className="contact-method">
              <div className="contact-icon">📧</div>
              <div className="contact-details">
                <h3>Email Us</h3>
                <a href="mailto:hello@brandent.co">hello@brandent.co</a>
                <p>We respond within 24 hours</p>
              </div>
            </div>
            <div className="contact-method">
              <div className="contact-icon">📞</div>
              <div className="contact-details">
                <h3>Call Us</h3>
                <a href="tel:+919876543210">+91 98765 43210</a>
                <p>Monday to Friday, 9 AM – 6 PM IST</p>
              </div>
            </div>
            <div className="contact-method">
              <div className="contact-icon">📍</div>
              <div className="contact-details">
                <h3>Visit Us</h3>
                <a href="#">New Delhi, India</a>
                <p>We work with clients globally</p>
              </div>
            </div>
            <div className="contact-method">
              <div className="contact-icon">⏰</div>
              <div className="contact-details">
                <h3>Response Time</h3>
                <a href="#">Schedule a Discovery Call</a>
                <p>First call is always on us</p>
              </div>
            </div>
          </div>
          {/* FORM */}
          <div className="contact-form reveal reveal-delay-1">
            <div className="form-title">Start Your Project →</div>
            <ContactForm />
          </div>
        </div>
        {/* WHY BRANDENT */}
        <div className="why-choose">
          <h2 className="why-heading reveal">
            Why Partner With
            <br />
            <span className="outline-text">Brandent?</span>
          </h2>
          <div className="why-grid">
            <div className="why-card reveal">
              <div className="why-num">01</div>
              <div className="why-icon">🎯</div>
              <div className="why-title">Strategic Alignment</div>
              <div className="why-desc">
                We don't just execute — we align with your business goals and build strategies that deliver measurable
                results.
              </div>
            </div>
            <div className="why-card reveal reveal-delay-1">
              <div className="why-num">02</div>
              <div className="why-icon">💡</div>
              <div className="why-title">Creative Excellence</div>
              <div className="why-desc">
                Every campaign, every piece of content, every design is crafted to stand out and resonate with your
                audience.
              </div>
            </div>
            <div className="why-card reveal reveal-delay-2">
              <div className="why-num">03</div>
              <div className="why-icon">📊</div>
              <div className="why-title">Data-Driven</div>
              <div className="why-desc">
                Real-time analytics, transparent reporting, and continuous optimisation. Numbers guide every decision we
                make.
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
