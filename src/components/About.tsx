'use client';

import React from 'react';
import { personalInfo, globalFootprint } from '../data/portfolioData';
import { Activity, Shield, Cpu, Network, Globe, MapPin, CheckCircle2, ArrowUpRight, Download } from 'lucide-react';

export default function About() {
  const iconMap: Record<number, React.ReactNode> = {
    0: <Activity className="w-6 h-6 text-emerald-400" />,
    1: <Network className="w-6 h-6 text-teal-400" />,
    2: <Shield className="w-6 h-6 text-cyan-400" />,
    3: <Cpu className="w-6 h-6 text-indigo-400" />
  };

  return (
    <section id="about" className="py-24 bg-neutral-900/40 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Tag */}
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-px bg-emerald-400"></span>
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold">
            01 // About & Mission
          </span>
        </div>

        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-4xl sm:text-6xl font-black font-display tracking-tight text-white uppercase leading-none">
              Hey, I&apos;m <br />
              <span className="text-emerald-400">Sunil.</span>
            </h2>
            <p className="text-xl text-neutral-300 font-light leading-relaxed">
              A Solution Architect and Health Informatics Specialist dedicated to building high-integrity, interoperable software systems that safeguard public health and social protection for millions.
            </p>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Over the last decade, I have served as the technical bridge between complex policy mandates and scalable software engineering. My work centers on national health insurance platforms (<span className="text-white font-medium">openIMIS</span>), global standards (<span className="text-white font-medium">HL7 FHIR, openHIM, openHIE</span>), digital public goods (<span className="text-white font-medium">openCRVS, MOSIP, openG2P, DHIS2</span>), and AI/OCR-driven claims verification engines.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-neutral-950 hover:bg-emerald-400 font-mono text-xs uppercase tracking-wider font-bold rounded-xl transition-all"
              >
                Let&apos;s Collaborate
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.cvPath}
                download="Sunil_Parajuli_CV.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-800 hover:bg-neutral-700 text-white font-mono text-xs uppercase tracking-wider font-bold rounded-xl border border-white/10 transition-all"
              >
                <Download className="w-4 h-4 text-emerald-400" />
                Download CV
              </a>
            </div>
          </div>

          {/* Quick Snapshot Card */}
          <div className="lg:col-span-6 bg-neutral-950/80 border border-white/10 rounded-3xl p-8 backdrop-blur-md relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
            
            <h3 className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              Core Profile Summary
            </h3>

            <div className="space-y-4 text-sm">
              <div className="flex items-start justify-between py-2.5 border-b border-white/5">
                <span className="text-neutral-500 font-mono text-xs uppercase">Role</span>
                <span className="text-white font-medium text-right">Solution Architect / Digital Health Expert</span>
              </div>
              <div className="flex items-start justify-between py-2.5 border-b border-white/5">
                <span className="text-neutral-500 font-mono text-xs uppercase">Education</span>
                <span className="text-white font-medium text-right">M.S. in e-Governance (3.76 GPA) • B.E. Computer</span>
              </div>
              <div className="flex items-start justify-between py-2.5 border-b border-white/5">
                <span className="text-neutral-500 font-mono text-xs uppercase">Primary Stack</span>
                <span className="text-white font-medium text-right">openIMIS, FHIR, Python/Django, React, VB.NET</span>
              </div>
              <div className="flex items-start justify-between py-2.5 border-b border-white/5">
                <span className="text-neutral-500 font-mono text-xs uppercase">Key Partners</span>
                <span className="text-emerald-400 font-medium text-right">GIZ, ILO, SSF Nepal, HIB Nepal, AeHIN</span>
              </div>
              <div className="flex items-start justify-between py-2.5">
                <span className="text-neutral-500 font-mono text-xs uppercase">Location</span>
                <span className="text-white font-medium text-right flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                  Kathmandu, Nepal
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Specialization Pillars */}
        <div id="specializations" className="mb-20">
          <div className="mb-10 text-center sm:text-left">
            <h3 className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold mb-2">
              Domain Expertise
            </h3>
            <h4 className="text-3xl sm:text-4xl font-bold font-display text-white uppercase tracking-tight">
              Pillars of Architectural Impact
            </h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {personalInfo.specializations.map((item, idx) => (
              <div
                key={item.title}
                className="group p-6 rounded-2xl bg-neutral-950/60 border border-white/10 hover:border-emerald-500/40 hover:bg-neutral-900/90 transition-all duration-300 backdrop-blur-sm flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-emerald-500/30 transition-all">
                    {iconMap[idx]}
                  </div>
                  <h5 className="text-lg font-bold text-white mb-2 font-display group-hover:text-emerald-400 transition-colors">
                    {item.title}
                  </h5>
                  <p className="text-xs text-neutral-400 leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-white/5 text-neutral-300 border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Global Impact & Engagements */}
        <div className="p-8 rounded-3xl bg-neutral-950 border border-white/10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold block mb-1">
                International Footprint
              </span>
              <h4 className="text-2xl font-bold font-display text-white uppercase">
                Cross-Border Engagements & Missions
              </h4>
            </div>
            <span className="text-xs font-mono text-neutral-400 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
              7+ International Regions
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {globalFootprint.map((gf) => (
              <div key={gf.country} className="p-4 rounded-xl bg-neutral-900/60 border border-white/5">
                <div className="flex items-center gap-2 mb-1">
                  <Globe className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-sm font-bold text-white">{gf.country}</span>
                  <span className="text-xs text-neutral-500 font-mono">({gf.city})</span>
                </div>
                <p className="text-xs text-neutral-400 font-light">
                  {gf.role}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
