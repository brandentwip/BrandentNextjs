import type { Metadata } from 'next';
import '@/styles/contact.css';
import PageHero from '@/components/contact/PageHero';
import ContactSection from '@/components/contact/ContactSection';

export const metadata: Metadata = { title: 'Contact — Brandent' };

export default function ContactPage() {
  return (
    <div className="pg-contact">
      <PageHero />
      <ContactSection />
    </div>
  );
}
