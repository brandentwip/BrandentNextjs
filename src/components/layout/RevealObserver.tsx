'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

// Adds the `visible` class to any `.reveal` element when it scrolls into view.
// Runs again after every page change, so new pages animate too.
export default function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' },
    );
    document.querySelectorAll('.reveal:not(.visible)').forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [pathname]);

  return null;
}
