'use client';

import React from 'react';
import Link from 'next/link';
import { personalInfo } from '../data/portfolioData';
import { Download, ArrowRight, Sparkles, Terminal, Activity, Globe, Award, ShieldCheck } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] pt-32 pb-20 flex items-center justify-center overflow-hidden bg-neutral-950">
      {/* Dynamic Background Accents */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Top Status Capsule */}
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 mb-8">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono tracking-wider uppercase backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>Available for Technical Advisory & Architecture</span>
          </div>
          <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-neutral-400 text-xs font-mono">
            <Globe className="w-3.5 h-3.5 text-neutral-400" />
            <span>Kathmandu, Nepal • Global Engagements</span>
          </div>
        </div>

        {/* Massive Editorial Headline */}
        <div className="space-y-3 mb-8 text-center sm:text-left">
          <h2 className="text-xs sm:text-sm font-mono tracking-[0.25em] text-neutral-400 uppercase font-semibold">
            Health Informatics • Digital Public Goods • Enterprise Systems
          </h2>
          <h1 className="text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-black font-display tracking-tighter text-white uppercase leading-[0.9] select-none">
            SUNIL <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
              PARAJULI
            </span>
          </h1>
          <p className="text-lg sm:text-2xl font-light text-neutral-300 max-w-3xl pt-2 leading-relaxed">
            Engineering <span className="text-white font-medium">Digital Public Infrastructure</span>, national-scale <span className="text-emerald-400 font-medium">openIMIS health insurance</span> architectures, and <span className="text-white font-medium">FHIR interoperability</span> ecosystems.
          </p>
        </div>

        {/* Action Link Pills Grid (Wix Creative CV Inspired) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-8">
          <a
            href="#projects"
            className="group p-3.5 rounded-2xl bg-neutral-900/60 hover:bg-neutral-800/90 border border-white/10 hover:border-emerald-500/40 transition-all duration-300 backdrop-blur-sm flex flex-col justify-between"
          >
            <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider">Latest Innovation</span>
            <div className="flex items-center justify-between mt-2">
              <span className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors">Berlin Hackathon</span>
              <ArrowRight className="w-4 h-4 text-neutral-500 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all" />
            </div>
          </a>

          <a
            href="#projects"
            className="group p-3.5 rounded-2xl bg-neutral-900/60 hover:bg-neutral-800/90 border border-white/10 hover:border-emerald-500/40 transition-all duration-300 backdrop-blur-sm flex flex-col justify-between"
          >
            <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider">Global Research</span>
            <div className="flex items-center justify-between mt-2">
              <span className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors">GDHF Nairobi</span>
              <ArrowRight className="w-4 h-4 text-neutral-500 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all" />
            </div>
          </a>

          <a
            href="#education"
            className="group p-3.5 rounded-2xl bg-neutral-900/60 hover:bg-neutral-800/90 border border-white/10 hover:border-emerald-500/40 transition-all duration-300 backdrop-blur-sm flex flex-col justify-between"
          >
            <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider">Academic Honors</span>
            <div className="flex items-center justify-between mt-2">
              <span className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors">e-Governance MS (3.76)</span>
              <ArrowRight className="w-4 h-4 text-neutral-500 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all" />
            </div>
          </a>

          <a
            href={personalInfo.cvPath}
            download="Sunil_Parajuli_CV.pdf"
            className="group p-3.5 rounded-2xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 hover:border-emerald-400 transition-all duration-300 backdrop-blur-sm flex flex-col justify-between"
          >
            <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider">Curriculum Vitae</span>
            <div className="flex items-center justify-between mt-2">
              <span className="text-sm font-bold text-emerald-300 group-hover:text-white transition-colors">Download PDF</span>
              <Download className="w-4 h-4 text-emerald-400 group-hover:translate-y-0.5 transition-transform" />
            </div>
          </a>
        </div>

        {/* Bottom CTA & Live Tech Capsule */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-white/10">
          <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
            <Link
              href="#projects"
              className="w-full sm:w-auto text-center px-8 py-4 bg-emerald-400 hover:bg-emerald-300 text-neutral-950 font-bold font-mono text-xs uppercase tracking-widest rounded-xl transition-all shadow-xl shadow-emerald-500/20 hover:scale-[1.02] active:scale-[0.98]"
            >
              Explore Portfolio
            </Link>
            <Link
              href="#contact"
              className="w-full sm:w-auto text-center px-8 py-4 bg-neutral-900 hover:bg-neutral-800 text-white font-bold font-mono text-xs uppercase tracking-widest rounded-xl border border-white/15 hover:border-emerald-400/50 transition-all"
            >
              Get in Touch
            </Link>
          </div>

          {/* Quick Metrics */}
          <div className="flex items-center gap-8 text-neutral-400 font-mono text-xs">
            <div>
              <span className="text-xl font-bold text-white block font-display">9+</span>
              <span className="uppercase text-[10px] text-neutral-500 tracking-wider">Years Experience</span>
            </div>
            <div className="w-px h-8 bg-white/10" />
            <div>
              <span className="text-xl font-bold text-emerald-400 block font-display">10M+</span>
              <span className="uppercase text-[10px] text-neutral-500 tracking-wider">Lives Impacted</span>
            </div>
            <div className="w-px h-8 bg-white/10" />
            <div>
              <span className="text-xl font-bold text-white block font-display">6+</span>
              <span className="uppercase text-[10px] text-neutral-500 tracking-wider">Countries / Orgs</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
