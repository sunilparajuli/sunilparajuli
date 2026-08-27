import type { Metadata } from 'next';
import './globals.css';
import { personalInfo } from '../data/portfolioData';

export const metadata: Metadata = {
  title: `${personalInfo.name} | Solution Architect & Health Informatics Specialist`,
  description: personalInfo.bio,
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
    title: `${personalInfo.name} - Solution Architect & Health Informatics Specialist`,
    description: personalInfo.bio,
    siteName: `${personalInfo.name} Portfolio`,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${personalInfo.name} - Solution Architect`,
    description: personalInfo.bio,
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-neutral-950 text-slate-100 antialiased selection:bg-emerald-400 selection:text-neutral-950">
        {children}
      </body>
    </html>
  );
}
