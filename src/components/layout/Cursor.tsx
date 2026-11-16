'use client';

import { useEffect, useRef } from 'react';

// Elements that make the custom cursor grow on hover.
const HOVER_SELECTOR = [
  'a',
  'button',
  'input',
  'textarea',
  'select',
  '.service-card',
  '.work-card',
  '.team-card',
  '.client-logo',
  '.testimonial-card',
  '.client-logo-box',
  '.industry-card',
  '.contact-method',
  '.why-card',
  '.principle-card',
  '.service-detail-card',
  '.process-item',
  '.pricing-card',
  '.case-study-card',
].join(', ');

export default function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouch) return;
    const d = dot.current!;
    const r = ring.current!;
    let mx = 0,
      my = 0,
      rx = 0,
      ry = 0,
      raf = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
    };
    const tick = () => {
      rx += (mx - rx) * 0.1;
      ry += (my - ry) * 0.1;
      d.style.left = mx + 'px';
      d.style.top = my + 'px';
      r.style.left = rx + 'px';
      r.style.top = ry + 'px';
      raf = requestAnimationFrame(tick);
    };
    const grow = (on: boolean) => {
      d.style.width = d.style.height = on ? '30px' : '16px';
      d.style.background = on ? '#2e4c8b' : '#fa2d19';
      r.style.width = r.style.height = on ? '60px' : '40px';
    };
    const onOver = (e: MouseEvent) => {
      if ((e.target as Element).closest?.(HOVER_SELECTOR)) grow(true);
    };
    const onOut = (e: MouseEvent) => {
      if ((e.target as Element).closest?.(HOVER_SELECTOR)) grow(false);
    };
    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseover', onOver);
    document.addEventListener('mouseout', onOut);
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver);
      document.removeEventListener('mouseout', onOut);
    };
  }, []);

  return (
    <>
      <div className="cursor" ref={dot}></div>
      <div className="cursor-ring" ref={ring}></div>
    </>
  );
}
