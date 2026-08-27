'use client';

import React from 'react';
import { personalInfo, globalFootprint } from '../data/portfolioData';
import { ArrowUpRight, Download, Globe, MapPin } from 'lucide-react';

export default function About() {
  const corePractices = [
    { name: 'System Architecture & Microservices', desc: 'openIMIS modularization, claims engines, cloud-native deployments' },
    { name: 'Interoperability Standards', desc: 'HL7 FHIR, openHIM, openCRVS, openHIE, DCI APIs' },
    { name: 'Social Protection & AI Verification', desc: 'OCR supporting doc cross-validation, ML false claims detection' },
    { name: 'Knowledge Sharing & e-Governance', desc: 'International workshops, donor coordination (GIZ, ILO, WHO, AeHIN)' },
  ];

  return (
    <section id="about" className="border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        
        {/* Main Grid */}
        <div className="grid gap-16 lg:grid-cols-[.8fr_1.2fr] mb-20">
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-[.18em] text-accent font-semibold">
              A little context
            </p>
            <h2 className="max-w-md text-4xl font-semibold leading-[.95] tracking-[-.06em] sm:text-6xl text-foreground">
              The work behind the work.
            </h2>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground font-mono text-xs uppercase tracking-wider font-semibold hover:bg-accent transition-colors"
              >
                <span>Let&apos;s collaborate</span>
                <ArrowUpRight className="size-3.5 text-accent" />
              </a>
              <a
                href={personalInfo.cvPath}
                download="Sunil_Parajuli_CV.pdf"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-border bg-secondary text-secondary-foreground font-mono text-xs uppercase tracking-wider hover:border-accent transition-colors"
              >
                <Download className="size-3.5 text-accent" />
                <span>Verified CV</span>
              </a>
            </div>
          </div>

          <div className="grid gap-12 sm:grid-cols-2">
            <div>
              <p className="text-lg leading-8 text-muted-foreground">
                For over a decade, I&apos;ve worked at the intersection of software, policy, and public service. My focus is open-source digital public goods (<span className="text-foreground font-medium">openIMIS, openCRVS, MOSIP, openG2P</span>) that empower governments and communities to deliver better health coverage and social security.
              </p>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                I care deeply about the craft: a resilient API, a verified schema, automated duplicate claims prevention, and systems that endure.
              </p>
            </div>

            <div className="border-t border-border pt-5">
              <p className="mb-6 font-mono text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                Core practice
              </p>
              <ul className="space-y-4 text-sm">
                {corePractices.map((practice) => (
                  <li key={practice.name} className="border-b border-border pb-3 group">
                    <div className="flex items-center justify-between text-foreground font-medium group-hover:text-accent transition-colors">
                      <span>{practice.name}</span>
                      <span className="text-accent">↗</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      {practice.desc}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Global Missions Footprint */}
        <div className="border border-border bg-secondary/30 p-8 sm:p-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 border-b border-border pb-4">
            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-accent font-semibold mb-1">
                Cross-Border Engagements
              </p>
              <h3 className="text-2xl font-medium tracking-tight text-foreground">
                International Missions & Advisory Footprint
              </h3>
            </div>
            <span className="font-mono text-xs text-muted-foreground">
              7+ International Territories
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {globalFootprint.map((item) => (
              <div key={item.country} className="p-4 border border-border bg-background">
                <div className="flex items-center gap-1.5 font-mono text-xs text-foreground font-bold mb-1">
                  <MapPin className="size-3 text-accent" />
                  <span>{item.country}</span>
                  <span className="text-muted-foreground font-normal">({item.city})</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {item.role}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
