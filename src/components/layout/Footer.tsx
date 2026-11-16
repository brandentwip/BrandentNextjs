import Link from 'next/link';
import { footerColumns, site, socialLinks } from '@/data/site';

export default function Footer() {
  return (
    <>
      <footer>
        <div>
          <div className="footer-brand-name">{site.name}</div>
          <div className="footer-tagline">{site.tagline}</div>
          <div className="footer-social">
            {socialLinks.map((s) => (
              <a key={s.label} href={s.href} className="social-btn">
                {s.label}
              </a>
            ))}
          </div>
        </div>
        {footerColumns.map((col) => (
          <div key={col.title}>
            <div className="footer-col-title">{col.title}</div>
            <ul className="footer-links">
              {col.links.map((l) => (
                <li key={l.label}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div>
          <div className="footer-col-title">Get In Touch</div>
          <ul className="footer-links">
            <li>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li>
              <a href={site.phoneHref}>{site.phone}</a>
            </li>
            <li>
              <a href="#">{site.location}</a>
            </li>
            <li style={{ marginTop: '1rem' }}>
              <Link
                href="/contact"
                style={{
                  background: 'var(--red)',
                  color: '#fff',
                  padding: '0.6rem 1.2rem',
                  fontSize: '0.7rem',
                  fontWeight: 800,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                }}
              >
                Start Project →
              </Link>
            </li>
          </ul>
        </div>
      </footer>
      <div className="footer-bottom">
        <span>{site.copyright}</span>
        <span>{site.footerNote}</span>
      </div>
    </>
  );
}
