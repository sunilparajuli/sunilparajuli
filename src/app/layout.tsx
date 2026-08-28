import type { Metadata, Viewport } from 'next';
import './globals.css';
import { personalInfo } from '../data/portfolioData';
import StructuredData from '../components/StructuredData';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://sunilparajuli.com';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Sunil Parajuli — Solution Architect · Health Informatics & openIMIS Specialist',
    template: '%s | Sunil Parajuli',
  },
  description: 'Portfolio of Sunil Parajuli — Solution Architect & Social Protection Technologist with 9+ years engineering national-scale openIMIS health insurance, HL7 FHIR interoperability pipelines, and digital public goods.',
  applicationName: 'Sunil Parajuli Portfolio',
  keywords: [
    'Sunil Parajuli',
    'Solution Architect',
    'openIMIS',
    'openIMIS Architecture',
    'HL7 FHIR',
    'FHIR Interoperability',
    'Digital Public Goods',
    'DPG',
    'openCRVS',
    'openHIM',
    'openHIE',
    'Digital Convergence Initiative',
    'DCI APIs',
    'Health Informatics Nepal',
    'Social Security Fund Nepal',
    'Health Insurance Board Nepal',
    'e-Governance Nepal',
    'Machine Learning False Claims Detection',
    'GIZ Germany',
    'ILO Social Security',
    'Python Django Architect',
  ],
  authors: [
    { name: 'Sunil Parajuli', url: baseUrl }
  ],
  creator: 'Sunil Parajuli',
  publisher: 'Sunil Parajuli',
  category: 'Technology',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'profile',
    firstName: 'Sunil',
    lastName: 'Parajuli',
    username: 'sunilparajuli',
    gender: 'male',
    locale: 'en_US',
    url: baseUrl,
    title: 'Sunil Parajuli — Solution Architect · Health Informatics & openIMIS Specialist',
    description: 'Engineering Digital Public Infrastructure, national-scale openIMIS health insurance architectures, and FHIR interoperability ecosystems.',
    siteName: 'Sunil Parajuli — Professional Portfolio',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Sunil Parajuli — Solution Architect & Health Informatics Specialist',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sunil Parajuli — Solution Architect · Health Informatics & openIMIS Specialist',
    description: 'Engineering Digital Public Infrastructure, national-scale openIMIS health insurance architectures, and FHIR interoperability ecosystems.',
    creator: '@sunilparajuli',
    images: ['/opengraph-image'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-icon.png' },
    ],
  },
};

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FAF8F5' },
    { media: '(prefers-color-scheme: dark)', color: '#0B100E' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-background">
      <head>
        <StructuredData />
      </head>
      <body className="font-sans antialiased text-foreground bg-background selection:bg-accent selection:text-accent-foreground">
        {children}
      </body>
    </html>
  );
}
