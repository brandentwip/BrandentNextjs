// Site-wide settings. Edit text, links and contact details here.

export const site = {
  name: 'Brandent',
  tagline: 'The Marketing Enterprise',
  email: 'hello@brandent.in',
  phone: '+91 98765 43210',
  phoneHref: 'tel:+919876543210',
  location: 'New Delhi & Noida, India',
  copyright: '© 2026 Brandent. All rights reserved.',
  footerNote: 'The Marketing Enterprise — Built to Last',
};

// Main navigation (desktop + mobile menu). Add, remove or reorder links here.
export const navLinks = [
  { label: 'Services', href: '/services' },
  { label: 'Work', href: '/work' },
  { label: 'Process', href: '/process' },
  { label: 'Clients', href: '/clients' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export const navCta = { label: 'Start a Project', href: '/contact' };

export const socialLinks = [
  { label: 'IG', href: '#' },
  { label: 'LI', href: '#' },
  { label: 'TW', href: '#' },
  { label: 'YT', href: '#' },
];

export const footerColumns = [
  {
    title: 'Services',
    links: [
      { label: 'Social Media', href: '/services' },
      { label: 'Influencer Marketing', href: '/services' },
      { label: 'Website Development', href: '/services' },
      { label: 'Brand Strategy', href: '/services' },
      { label: 'Creative Content', href: '/services' },
      { label: 'Performance Ads', href: '/services' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/#manifesto' },
      { label: 'Our Work', href: '/work' },
      { label: 'Case Studies', href: '/work' },
      { label: 'Team', href: '/#team' },
      { label: 'Contact', href: '/contact' },
    ],
  },
];
