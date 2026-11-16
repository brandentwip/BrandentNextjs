// All four case studies live here. Edit text, stats, testimonials and "next case" links in one place:
// the Home page cards, the Work page cards and each /work/[slug] page read from this file.
//
// To add a project: add an entry below, then create its visual sections in
// src/components/projects/<slug>/ and register it in src/components/projects/index.tsx.

export type TitleRun = { text: string; className?: string };

export type Project = {
  slug: string;
  /** Full name shown on cards, e.g. "Zestora Foods — Full Rebrand" */
  name: string;
  /** Card number on the Home page ("01") */
  number: string;
  card: { label: string; category: string; bg: string; featured: boolean };
  /** Text for the card on the Work page */
  summary: { tag: string; description: string; result: string };
  /** Big headline: each inner array is one line. A run with className renders as a styled <span>. */
  hero: {
    tag: string;
    title: TitleRun[][];
    meta: { label: string; value: string }[];
  };
  stats: { value: string; label: string }[];
  testimonial: {
    quote: string;
    initials: string;
    accent: string;
    avatarColor: string;
    name: string;
    role: string;
  };
  /** Which case study the big "Next Case Study" banner links to */
  next: { slug: string; title: TitleRun[][] };
};

export const projects: Project[] = [
  {
    slug: 'zestora',
    name: 'Zestora Foods — Full Rebrand',
    number: '01',
    card: { label: 'Brand Strategy', category: 'Brand Identity + Strategy', bg: 'cs1', featured: true },
    summary: {
      tag: 'Brand Strategy',
      description:
        'A regional food brand struggling to compete nationally. We repositioned them as a premium, modern choice and executed a complete visual identity overhaul. The result? 40% revenue increase in Year 1.',
      result: 'Brand Strategy, Identity Design, Social Media',
    },
    hero: {
      tag: 'Brand Identity + Strategy — 2024',
      title: [[{ text: 'Zestora' }], [{ text: 'Foods.', className: '' }]],
      meta: [
        { label: 'Service', value: 'Full Rebrand' },
        { label: 'Industry', value: 'Food & Beverage' },
        { label: 'Duration', value: '4 Months' },
        { label: 'Deliverables', value: 'Identity · Web · Packaging · Social' },
      ],
    },
    stats: [
      { value: '3.8×', label: 'Revenue Growth Post-Rebrand' },
      { value: '240%', label: 'Social Engagement Increase' },
      { value: '18', label: 'New Retail Partnerships' },
    ],
    testimonial: {
      quote:
        'Brandent understood the soul of our brand — 12 years of family heritage — and translated it into something that feels completely contemporary without losing who we are. Sales in the first quarter post-launch were 3.8× our average.',
      initials: 'VZ',
      accent: 'var(--zest-orange)',
      avatarColor: 'var(--white)',
      name: 'Vikram Zestora',
      role: 'Founder & MD, Zestora Foods',
    },
    next: {
      slug: 'novacraft',
      title: [[{ text: 'Nova' }, { text: 'Craft', className: '' }], [{ text: '0 → 500K' }]],
    },
  },
  {
    slug: 'novacraft',
    name: 'NovaCraft — 0 to 500K',
    number: '02',
    card: { label: 'Social', category: 'Social Media Marketing', bg: 'cs2', featured: false },
    summary: {
      tag: 'Social Media',
      description:
        'A bootstrapped D2C startup with zero following. We built a content strategy that resonated with early adopters and leveraged creator partnerships to hit 500K followers in 6 months.',
      result: '3.2x ROI Delivered',
    },
    hero: {
      tag: 'Social Media Marketing — 2024',
      title: [[{ text: 'Nova' }, { text: 'Craft', className: 'accent' }], [{ text: '0 → 500K' }]],
      meta: [
        { label: 'Service', value: 'Social Media Marketing' },
        { label: 'Industry', value: 'Consumer Tech' },
        { label: 'Duration', value: '12 Months' },
        { label: 'Platforms', value: 'Instagram · YouTube · X' },
      ],
    },
    stats: [
      { value: '500K', label: 'Followers in 12 Months' },
      { value: '8.4%', label: 'Average Engagement Rate' },
      { value: '₹4.2Cr', label: 'Revenue Attributed to Social' },
    ],
    testimonial: {
      quote:
        "Brandent didn't just redesign our social media — they rebuilt our entire brand identity from the ground up. Within 6 months, we'd tripled our Instagram following and our revenue followed suit. I wasn't expecting this level of strategic thinking from a marketing agency.",
      initials: 'AR',
      accent: 'var(--nova-purple)',
      avatarColor: 'var(--white)',
      name: 'Arjun Rawat',
      role: 'CEO, NovaCraft Industries',
    },
    next: {
      slug: 'apex',
      title: [[{ text: 'Apex' }, { text: 'Realty', className: '' }], [{ text: 'Digital Launch' }]],
    },
  },
  {
    slug: 'apex',
    name: 'Apex Realty — Digital Launch',
    number: '03',
    card: { label: 'Web Dev', category: 'Website Development', bg: 'cs3', featured: false },
    summary: {
      tag: 'Web Development',
      description:
        'A traditional real estate firm needed to go digital. We built a high-performance website with virtual tours, CRM integration, and a targeted ad strategy. Leads increased 4x in Q1.',
      result: '4x Lead Increase',
    },
    hero: {
      tag: 'Website Development — 2024',
      title: [[{ text: 'Apex' }], [{ text: 'Realty', className: 'gold' }], [{ text: 'Digital.' }]],
      meta: [
        { label: 'Service', value: 'Website Development' },
        { label: 'Industry', value: 'Premium Real Estate' },
        { label: 'Duration', value: '6 Months' },
        { label: 'Deliverables', value: 'Website · CRM · Performance Ads' },
      ],
    },
    stats: [
      { value: '4×', label: 'Lead Volume Q1 Post-Launch' },
      { value: '₹48Cr', label: 'Bookings Influenced' },
      { value: '1.8s', label: 'Average Page Load Time' },
    ],
    testimonial: {
      quote:
        'Our new website is in a completely different league. The team understood the real estate market deeply — they knew what a ₹2Cr buyer needs to see before calling. Leads went up 4x in the first quarter. The CRM they built has transformed how our sales team operates.',
      initials: 'RK',
      accent: 'var(--apex-gold)',
      avatarColor: 'var(--black)',
      name: 'Rohit Kapoor',
      role: 'Director, Apex Realty',
    },
    next: {
      slug: 'luxwear',
      title: [[{ text: 'Lux' }, { text: 'Wear', className: '' }], [{ text: 'Creator Network' }]],
    },
  },
  {
    slug: 'luxwear',
    name: 'LuxWear — Creator Network',
    number: '04',
    card: { label: 'Influencer', category: 'Influencer Campaign', bg: 'cs4', featured: false },
    summary: {
      tag: 'Influencer Campaign',
      description:
        'A fashion brand launching their flagship product. We curated a network of 15 micro-influencers, orchestrated a coordinated campaign, and achieved a 48-hour sellout with 2M+ impressions.',
      result: '48-Hour Sellout',
    },
    hero: {
      tag: 'Influencer Marketing — 2024',
      title: [[{ text: 'Lux' }, { text: 'Wear', className: 'rose' }], [{ text: 'Creator' }], [{ text: 'Network.' }]],
      meta: [
        { label: 'Service', value: 'Influencer Campaign' },
        { label: 'Industry', value: 'Premium Fashion' },
        { label: 'Duration', value: '8 Weeks' },
        { label: 'Creators', value: '15 Curated Partners' },
      ],
    },
    stats: [
      { value: '2M+', label: 'Impressions at Launch' },
      { value: '48hrs', label: 'To Complete Sell-Out' },
      { value: '15', label: 'Creator Partners Activated' },
    ],
    testimonial: {
      quote:
        "The influencer campaign they ran for our launch was flawless. 15 creators, 2 million impressions, and we sold out in 48 hours. The creator selection was so strategic — every voice felt genuinely aligned with our brand. This wasn't just influencer marketing, it was community building.",
      initials: 'SP',
      accent: 'var(--lux-rose)',
      avatarColor: 'var(--white)',
      name: 'Simran Patel',
      role: 'Founder, LuxWear',
    },
    next: {
      slug: 'zestora',
      title: [[{ text: 'Zestora' }, { text: 'Foods', className: '' }], [{ text: 'Rebrand' }]],
    },
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
