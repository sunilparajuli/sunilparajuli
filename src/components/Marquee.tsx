'use client';

import React from 'react';

const tickerItems = [
  "openIMIS Architecture",
  "HL7 FHIR Interoperability",
  "GIZ Germany",
  "International Labour Organization (ILO)",
  "Social Security Fund Nepal",
  "Health Insurance Board Nepal",
  "openCRVS & openHIM Integration",
  "Digital Convergence Initiative (DCI)",
  "AeHIN Digital Health",
  "Ministry of Health Lao PDR",
  "Python · Django · FastAPI",
  "ReactJS · Next.js · TypeScript",
  "Document AI & OCR Verification",
  "Machine Learning False Claim Detection",
  "Docker · Microservices · PostgreSQL"
];

export default function Marquee() {
  return (
    <div className="border-b border-border bg-secondary/30 py-3 overflow-hidden select-none">
      <div className="animate-marquee-continuous flex items-center gap-10 whitespace-nowrap">
        {[...tickerItems, ...tickerItems].map((item, idx) => (
          <div key={idx} className="flex items-center gap-8 font-mono text-xs uppercase tracking-[.18em] text-muted-foreground">
            <span className="hover:text-foreground transition-colors">{item}</span>
            <span className="text-accent">/</span>
          </div>
        ))}
      </div>
    </div>
  );
}
