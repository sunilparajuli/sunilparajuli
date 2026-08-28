import React from 'react';
import { personalInfo } from '../data/portfolioData';

export default function StructuredData() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://sunilparajuli.com';

  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${baseUrl}/#person`,
    name: personalInfo.name,
    alternateName: 'Sunil Parajuli',
    jobTitle: 'Solution Architect & Health Informatics Specialist',
    description: personalInfo.bio,
    url: baseUrl,
    email: personalInfo.email,
    telephone: personalInfo.phone,
    nationality: 'Nepalese',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Tenzingchowk',
      postalCode: '44600',
      addressLocality: 'Kathmandu',
      addressCountry: 'NP',
    },
    alumniOf: [
      {
        '@type': 'CollegeOrUniversity',
        name: 'Nepal Open University',
        url: 'https://nou.edu.np',
      },
      {
        '@type': 'CollegeOrUniversity',
        name: 'Kathmandu University',
        url: 'https://ku.edu.np',
      },
    ],
    worksFor: [
      {
        '@type': 'Organization',
        name: 'Tinker Technology Pvt. Ltd.',
      },
      {
        '@type': 'Organization',
        name: 'Deutsche Gesellschaft für Internationale Zusammenarbeit (GIZ)',
      },
    ],
    knowsAbout: [
      'openIMIS Architecture',
      'HL7 FHIR Interoperability Standards',
      'Health Informatics',
      'Social Health Protection Systems',
      'Digital Public Goods (openCRVS, MOSIP, openG2P, DHIS2)',
      'Digital Convergence Initiative (DCI)',
      'e-Governance Infrastructure',
      'Optical Character Recognition (OCR) Verification',
      'Machine Learning for False Claims Detection',
      'Python',
      'Django',
      'FastAPI',
      'ReactJS',
      'Next.js',
      'PostgreSQL',
      'Distributed Systems Architecture',
    ],
    sameAs: [
      'https://github.com/sunilparajuli',
      'https://linkedin.com',
      'https://twitter.com',
    ],
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${baseUrl}/#website`,
    url: baseUrl,
    name: 'Sunil Parajuli — Solution Architect & Health Informatics Specialist',
    description: personalInfo.bio,
    author: {
      '@id': `${baseUrl}/#person`,
    },
    inLanguage: 'en-US',
  };

  const profilePageSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    '@id': `${baseUrl}/#webpage`,
    url: baseUrl,
    name: 'Sunil Parajuli — Portfolio & Systems Architecture Showcase',
    isPartOf: {
      '@id': `${baseUrl}/#website`,
    },
    about: {
      '@id': `${baseUrl}/#person`,
    },
    mainEntity: {
      '@id': `${baseUrl}/#person`,
    },
    inLanguage: 'en-US',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }}
      />
    </>
  );
}
