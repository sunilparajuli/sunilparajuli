import type { Metadata, Viewport } from 'next';
import './globals.css';
import { personalInfo } from '../data/portfolioData';

export const metadata: Metadata = {
  title: 'Sunil Parajuli — Technology for systems that serve people',
  description: 'Portfolio of Sunil Parajuli, software architect and social protection technologist building interoperable public systems.',
  keywords: [
    'Sunil Parajuli',
    'Solution Architect',
    'openIMIS',
    'HL7 FHIR',
    'Digital Public Goods',
    'Health Informatics',
    'e-Governance',
    'Social Security Fund Nepal',
    'GIZ',
    'Nepal Software Engineer'
  ],
  authors: [{ name: personalInfo.name, url: 'https://sunilparajuli.com' }],
  creator: personalInfo.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://sunilparajuli.com',
    title: 'Sunil Parajuli — Technology for systems that serve people',
    description: personalInfo.bio,
    siteName: 'Sunil Parajuli Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sunil Parajuli — Solution Architect',
    description: personalInfo.bio,
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FAF8F5' },
    { media: '(prefers-color-scheme: dark)', color: '#0B100E' },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-background">
      <body className="font-sans antialiased text-foreground bg-background selection:bg-accent selection:text-accent-foreground">
        {children}
      </body>
    </html>
  );
}
