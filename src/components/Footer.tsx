'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { personalInfo } from '../data/portfolioData';
import { ArrowUp, Heart, Shield, Globe, Clock } from 'lucide-react';

export default function Footer() {
  const [kathmanduTime, setKathmanduTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kathmandu',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      setKathmanduTime(new Intl.DateTimeFormat('en-US', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-neutral-950 border-t border-white/10 text-neutral-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10 items-start">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center text-neutral-950 font-black font-display text-lg tracking-tighter">
                SP
              </div>
              <span className="text-xl font-bold font-display text-white tracking-tight">
                {personalInfo.name}
              </span>
            </div>
            <p className="text-xs text-neutral-400 font-light max-w-sm leading-relaxed">
              Solution Architect specializing in national health insurance (openIMIS), HL7 FHIR interoperability, and AI-driven document verification.
            </p>
            {kathmanduTime && (
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono text-emerald-400">
                <Clock className="w-3.5 h-3.5" />
                <span>Kathmandu (NPT): {kathmanduTime}</span>
              </div>
            )}
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-white font-bold block">
              Navigation
            </span>
            <div className="flex flex-col space-y-2 text-xs font-mono">
              <Link href="#about" className="hover:text-emerald-400 transition-colors">About & Specializations</Link>
              <Link href="#projects" className="hover:text-emerald-400 transition-colors">Selected Projects</Link>
              <Link href="#experience" className="hover:text-emerald-400 transition-colors">Career Timeline</Link>
              <Link href="#education" className="hover:text-emerald-400 transition-colors">Education & Research</Link>
              <Link href="#skills" className="hover:text-emerald-400 transition-colors">Skills Matrix</Link>
              <Link href="#contact" className="hover:text-emerald-400 transition-colors">Get in Touch</Link>
            </div>
          </div>

          {/* Connect / Legal */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-white font-bold block">
              Legal & Verification
            </span>
            <p className="text-xs text-neutral-500 font-light leading-relaxed">
              CV, thesis artifacts, and international project citations are verified against official GIZ, openIMIS, SSF, and academic records.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a
                href={personalInfo.cvPath}
                download="Sunil_Parajuli_CV.pdf"
                className="text-xs font-mono text-emerald-400 hover:underline"
              >
                Official CV (PDF)
              </a>
              <span className="text-neutral-600">•</span>
              <a
                href="mailto:sunilparajuli2002@gmail.com"
                className="text-xs font-mono text-neutral-400 hover:text-white"
              >
                Direct Email
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Footer Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-500">
          <div>
            © {new Date().getFullYear()} Sunil Parajuli. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span>Built with Next.js & Tailwind</span>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-white/5 hover:bg-emerald-400 hover:text-neutral-950 text-neutral-400 transition-all border border-white/10 flex items-center gap-1.5"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span className="text-[10px] uppercase font-bold tracking-wider">Top</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
