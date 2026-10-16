import "./globals.css";
import Navbar from "@/components/Navbar";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import { Analytics } from "@vercel/analytics/react";

import ClientTopProgressBar from "@/components/ClientTopProgressBar";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://sunilparajuli.com";

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default:
      "Sunil Parajuli — Social Security & Social Protection Professional",
    template: "%s | Sunil Parajuli",
  },
  description:
    "Portfolio of Sunil Parajuli — Solution Architect & Social Protection Technologist with 9+ years engineering national-scale openIMIS health insurance, HL7 FHIR interoperability pipelines, and digital public goods.",
  author: "Sunil Parajuli",
  siteUrl: baseUrl,
  applicationName: "Sunil Parajuli Portfolio",
  keywords: [
    "Sunil Parajuli",
    "Solution Architect",
    "openIMIS",
    "openIMIS Architecture",
    "HL7 FHIR",
    "FHIR Interoperability",
    "Digital Public Goods",
    "DPG",
    "openCRVS",
    "openHIM",
    "openHIE",
    "Digital Convergence Initiative",
    "DCI APIs",
    "Health Informatics Nepal",
    "Social Security Fund Nepal",
    "Health Insurance Board Nepal",
    "e-Governance Nepal",
    "Machine Learning False Claims Detection",
    "GIZ Germany",
    "ILO Social Security",
    "Python Django Architect",
  ],
  openGraph: {
    type: "profile",
    firstName: "Sunil",
    lastName: "Parajuli",
    username: "sunilparajuli",
    gender: "male",
    locale: "en_US",
    url: baseUrl,
    title: "Sunil Parajuli — Social Security & Social Protection Professional",
    description:
      "Engineering Digital Public Infrastructure, national-scale openIMIS health insurance architectures, and FHIR interoperability ecosystems.",
    siteName: "Sunil Parajuli — Professional Portfolio",
    images: [
      {
        url: "/og-image-square.png",
        alt: "Sunil Parajuli — Social Security & Social Protection Professional",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sunil Parajuli — Social Security & Social Protection Professional",
    description:
      "Engineering Digital Public Infrastructure, national-scale openIMIS health insurance architectures, and FHIR interoperability ecosystems.",
    creator: "@sunilparajuli",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sunil Parajuli",
  url: baseUrl,
  jobTitle: "Social Security & Social Protection Professional",
  worksFor: [
    { "@type": "Organization", name: "Tinker Technology Pvt. Ltd." },
    {
      "@type": "Organization",
      name: "Deutsche Gesellschaft für Internationale Zusammenarbeit (GIZ)",
    },
  ],
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "Nepal Open University" },
    { "@type": "CollegeOrUniversity", name: "Kathmandu University" },
  ],
  knowsAbout: [
    "openIMIS Architecture",
    "HL7 FHIR Interoperability Standards",
    "Health Informatics",
    "Social Health Protection Systems",
    "Digital Public Goods",
    "Digital Convergence Initiative",
    "Machine Learning for False Claims Detection",
    "Python",
    "Django",
    "FastAPI",
    "ReactJS",
    "Next.js",
    "PostgreSQL",
  ],
  sameAs: ["https://github.com/sunilparajuli"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body id="top">
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <ClientTopProgressBar />
        <Navbar />
        {children}

        <Analytics />
      </body>
    </html>
  );
}
