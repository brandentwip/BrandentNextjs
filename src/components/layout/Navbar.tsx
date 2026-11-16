'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { navCta, navLinks, site } from '@/data/site';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <>
      <nav className={scrolled ? 'scrolled' : undefined}>
        <Link href="/" className="nav-logo" onClick={close}>
          {site.name}
        </Link>
        <div className="nav-container">
          <ul className="nav-links">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href}>{l.label}</Link>
              </li>
            ))}
          </ul>
          <Link href={navCta.href} className="nav-cta">
            {navCta.label} →
          </Link>
        </div>
        <button
          className={`hamburger${open ? ' active' : ''}`}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      <div className={`mobile-nav${open ? ' active' : ''}`}>
        <ul className="mobile-nav-links">
          {navLinks.map((l) => (
            <li key={l.href}>
              <Link href={l.href} onClick={close}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link href={navCta.href} className="mobile-nav-cta" onClick={close}>
          {navCta.label}
        </Link>
      </div>
    </>
  );
}
