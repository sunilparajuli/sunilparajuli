import "./globals.css";
import Navbar from "@/components/Navbar";
import { profile } from "@/data/profile";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import ClientTopProgressBar from "@/components/ClientTopProgressBar";

import { siteUrl, siteTitle, siteDescription } from "@/lib/seo";

const baseUrl = siteUrl;
export const metadata = {
  metadataBase: new URL(baseUrl),
  title: { default: siteTitle, template: "%s | Sunil Parajuli" },
  description: siteDescription,
  authors: [{ name: profile.name, url: profile.linkedin }],
  applicationName: "Sunil Parajuli Portfolio",
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${baseUrl}/#person`,
  name: "Sunil Parajuli",
  url: baseUrl,
  jobTitle: "Social Security & Social Protection Professional",
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
  image: new URL(profile.photo, baseUrl).href,
  sameAs: ["https://github.com/sunilparajuli", profile.linkedin],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
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
        <SpeedInsights />
      </body>
    </html>
  );
}
