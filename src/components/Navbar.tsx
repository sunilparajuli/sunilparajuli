'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { personalInfo } from '../data/portfolioData';
import ThemeToggle from './ThemeToggle';
import { Download, Menu, X, ArrowUpRight, Sparkles, ShieldCheck } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Specializations', href: '#specializations' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'py-3 bg-neutral-950/80 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/50' 
        : 'py-5 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand */}
          <Link href="#" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center text-neutral-950 font-black font-display text-lg tracking-tighter shadow-lg shadow-emerald-500/20 group-hover:scale-105 transition-transform">
              SP
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full border-2 border-neutral-950 animate-pulse"></span>
            </div>
            <div>
              <span className="text-base font-bold tracking-tight text-white group-hover:text-emerald-400 transition-colors font-display block">
                {personalInfo.name}
              </span>
              <span className="text-[11px] font-mono text-emerald-400/90 tracking-wider uppercase block">
                Solution Architect
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 bg-neutral-900/60 border border-white/10 px-4 py-1.5 rounded-full backdrop-blur-md">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-3 py-1.5 text-xs uppercase tracking-wider font-mono text-neutral-300 hover:text-emerald-400 hover:bg-white/5 rounded-full transition-all duration-200"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Action Area */}
          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle />
            <a
              href={personalInfo.cvPath}
              download="Sunil_Parajuli_CV.pdf"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono font-semibold uppercase tracking-wider text-neutral-950 bg-emerald-400 hover:bg-emerald-300 rounded-full transition-all duration-200 shadow-md shadow-emerald-500/20 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Download className="w-3.5 h-3.5" />
              Download CV
            </a>
            <Link
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-mono font-semibold uppercase tracking-wider text-white border border-white/20 hover:border-emerald-400/60 hover:text-emerald-400 rounded-full transition-all duration-200 bg-white/5"
            >
              Let's Talk
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-neutral-300 hover:text-white rounded-lg border border-white/10 bg-neutral-900/80"
              aria-label="Toggle Navigation"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-neutral-950/95 border-b border-white/10 backdrop-blur-2xl px-6 py-6 transition-all">
          <div className="flex flex-col gap-3 mb-6">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-mono uppercase tracking-wider text-neutral-300 hover:text-emerald-400 py-2 border-b border-white/5"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-3">
            <a
              href={personalInfo.cvPath}
              download="Sunil_Parajuli_CV.pdf"
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-mono font-bold uppercase tracking-wider text-neutral-950 bg-emerald-400 rounded-xl shadow-lg"
            >
              <Download className="w-4 h-4" />
              Download CV (PDF)
            </a>
            <Link
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-3 text-xs font-mono font-bold uppercase tracking-wider text-white border border-white/20 rounded-xl bg-white/5"
            >
              Get in Touch
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
