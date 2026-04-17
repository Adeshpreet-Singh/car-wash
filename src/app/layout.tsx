import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AquaShine Car Wash | Premium Car Detailing & Wash Services',
  description:
    'AquaShine Car Wash — expert hand wash, premium detailing, ceramic coating & interior deep clean. Book online or drive in today. Open 7 days a week.',
  keywords: [
    'car wash',
    'auto detailing',
    'ceramic coating',
    'hand wash',
    'car cleaning',
    'premium car wash',
  ],
  openGraph: {
    title: 'AquaShine Car Wash | Premium Car Detailing & Wash Services',
    description:
      'Expert hand wash, premium detailing, ceramic coating & interior deep clean. Book online or drive in today.',
    url: 'https://aquashinewash.com',
    siteName: 'AquaShine Car Wash',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AquaShine Car Wash — Premium Detailing',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AquaShine Car Wash | Premium Car Detailing & Wash Services',
    description:
      'Expert hand wash, premium detailing, ceramic coating & interior deep clean.',
    images: ['/og-image.jpg'],
  },
  alternates: { canonical: 'https://aquashinewash.com' },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
