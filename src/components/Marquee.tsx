'use client';

import React from 'react';

const partnersAndTech = [
  "openIMIS Architecture",
  "HL7 FHIR Interoperability",
  "GIZ Germany",
  "International Labor Organization (ILO)",
  "Social Security Fund (SSF)",
  "Health Insurance Board Nepal",
  "openCRVS Integration",
  "Digital Convergence Initiative (DCI)",
  "openHIM & openHIE",
  "Ministry of Health Lao PDR",
  "AeHIN Digital Health",
  "Python • Django • FastAPI",
  "ReactJS • Next.js",
  "Machine Learning & OCR",
  "Docker & Microservices",
  "PostgreSQL & Cloud Infrastructure"
];

export default function Marquee() {
  return (
    <div className="relative w-full overflow-hidden py-4 border-y border-white/10 bg-neutral-950/70 backdrop-blur-md">
      {/* Left/Right Gradients for smooth fade */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-neutral-950 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-neutral-950 to-transparent z-10 pointer-events-none" />

      <div className="animate-marquee-slow flex items-center gap-8 whitespace-nowrap">
        {[...partnersAndTech, ...partnersAndTech].map((item, idx) => (
          <div key={idx} className="flex items-center gap-6">
            <span className="text-xs font-mono tracking-widest uppercase text-neutral-400 font-semibold hover:text-emerald-400 transition-colors cursor-default">
              {item}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/60 inline-block" />
          </div>
        ))}
      </div>
    </div>
  );
}
