'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { personalInfo } from '../data/portfolioData';
import ThemeToggle from './ThemeToggle';
import { ArrowUpRight, Download, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { name: 'Work', href: '#work' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border transition-colors">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        
        {/* Brand */}
        <Link href="#top" className="flex items-center gap-2 group font-mono text-base font-bold tracking-[-.08em] text-foreground">
          <span>SP</span>
          <span className="text-accent group-hover:scale-125 transition-transform inline-block">.</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden gap-8 text-xs font-mono uppercase tracking-[.15em] text-muted-foreground md:flex">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="hover:text-foreground transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Action area */}
        <div className="hidden items-center gap-5 text-sm md:flex">
          <ThemeToggle />
          <a
            href={personalInfo.cvPath}
            download="Sunil_Parajuli_CV.pdf"
            className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-muted-foreground hover:text-foreground border border-border px-3 py-1.5 hover:border-accent transition-colors"
          >
            <Download className="w-3.5 h-3.5 text-accent" />
            <span>CV (PDF)</span>
          </a>
          <a
            href="mailto:sunilparajuli2002@gmail.com"
            className="inline-flex items-center gap-2 font-medium text-foreground hover:text-accent transition-colors"
          >
            <span>Let&apos;s talk</span>
            <ArrowUpRight className="size-4 text-accent" />
          </a>
        </div>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-3">
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Open navigation"
            className="p-1 text-foreground"
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden border-b border-border bg-background px-6 py-6 space-y-4 animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-3 font-mono text-xs uppercase tracking-wider">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="py-1.5 text-muted-foreground hover:text-foreground border-b border-border/50"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-3">
            <a
              href={personalInfo.cvPath}
              download="Sunil_Parajuli_CV.pdf"
              className="inline-flex items-center justify-center gap-2 py-2.5 font-mono text-xs uppercase tracking-wider bg-secondary text-secondary-foreground border border-border"
            >
              <Download className="w-4 h-4 text-accent" />
              Download CV (PDF)
            </a>
            <a
              href="mailto:sunilparajuli2002@gmail.com"
              className="inline-flex items-center justify-center gap-2 py-2.5 font-medium bg-primary text-primary-foreground text-sm"
            >
              <span>Let&apos;s talk</span>
              <ArrowUpRight className="size-4 text-accent" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
