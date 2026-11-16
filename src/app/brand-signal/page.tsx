import type { Metadata } from 'next';
import BrandSignalExperience from '@/components/brand-signal/BrandSignalExperience';
import '@/styles/brand-signal.css';

export const metadata: Metadata = {
  title: 'Brand Signal® — Discover your brand direction',
  description: 'A creative brand discovery experience by Brandent.',
};

export default function BrandSignalPage() {
  return <BrandSignalExperience />;
}
