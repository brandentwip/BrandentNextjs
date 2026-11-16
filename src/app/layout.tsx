import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Cursor from '@/components/layout/Cursor';
import RevealObserver from '@/components/layout/RevealObserver';
import './globals.css';

export const metadata: Metadata = {
  title: 'Brandent — The Marketing Enterprise',
  description:
    'Full-spectrum marketing that turns ambition into authority. Strategy, content, social, and everything in between.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Cursor />
        <RevealObserver />
        {children}
      </body>
    </html>
  );
}
