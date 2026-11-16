'use client';

import { useEffect, useState, type FormEvent } from 'react';

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (!sent) return;
    const t = setTimeout(() => setSent(false), 5000);
    return () => clearTimeout(t);
  }, [sent]);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: send the form somewhere (email service, CRM, API route). Right now it only shows the thank-you message.
    // const data = Object.fromEntries(new FormData(e.currentTarget));
    setSent(true);
    e.currentTarget.reset();
  };

  return (
    <form id="contactForm" onSubmit={onSubmit}>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="name">Full Name *</label>
          <input type="text" id="name" name="name" placeholder="Arjun Rawat" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email *</label>
          <input type="email" id="email" name="email" placeholder="hello@yourco.com" required />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="company">Company Name</label>
          <input type="text" id="company" name="company" placeholder="Your Brand" />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input type="tel" id="phone" name="phone" placeholder="+91 98765 43210" />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="service">Service Interested In *</label>
        <select id="service" name="service" required>
          <option value="">Select a service</option>
          <option value="social-media">Social Media Marketing</option>
          <option value="influencer">Influencer Marketing</option>
          <option value="web-dev">Website Development</option>
          <option value="content">Creative Content</option>
          <option value="brand-strategy">Brand Strategy</option>
          <option value="advertising">Performance Advertising</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="budget">Budget Range</label>
        <select id="budget" name="budget">
          <option value="">Select a range</option>
          <option value="under-50k">Under ₹50K</option>
          <option value="50k-100k">₹50K – ₹100K</option>
          <option value="100k-250k">₹100K – ₹250K</option>
          <option value="250k-plus">₹250K+</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="message">Tell Us About Your Project *</label>
        <textarea id="message" name="message" placeholder="What are you looking to achieve?" required />
      </div>
      <button type="submit" className="submit-btn">
        Send Message →
      </button>

      <div className={`form-success${sent ? ' show' : ''}`}>✓ Message received! We'll be in touch within 24 hours.</div>
    </form>
  );
}
