import type { ReactNode } from 'react';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';

// Pages in this folder share the main navbar and footer.
export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
