'use client';

import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { ArrowUpRight, Download, Award, Globe, ShieldCheck } from 'lucide-react';

export default function Hero() {
  return (
    <section id="top" className="mx-auto grid max-w-7xl gap-12 px-6 pb-20 pt-12 lg:grid-cols-[1.25fr_.75fr] lg:px-10 lg:pb-32 lg:pt-24 border-b border-border">
      
      {/* Left Column */}
      <div>
        <p className="mb-7 flex items-center gap-3 font-mono text-xs uppercase tracking-[.18em] text-accent font-semibold">
          <span className="h-px w-10 bg-accent" />
          Digital public goods · Nepal
        </p>

        <h1 className="max-w-4xl text-balance text-[clamp(3.4rem,8vw,7.2rem)] font-semibold leading-[.88] tracking-[-.075em] text-foreground">
          Technology for <span className="text-accent">systems</span> that serve people.
        </h1>

        <div className="mt-10 max-w-xl border-t border-border pt-6">
          <p className="max-w-lg text-pretty text-base leading-7 text-muted-foreground">
            I&apos;m <span className="text-foreground font-medium">Sunil Parajuli</span> — a software architect and health informatics / social protection specialist engineering interoperable national platforms for health insurance (<span className="text-foreground font-medium">openIMIS</span>), digital identity, and public services.
          </p>
        </div>

        {/* Quick Action Badges */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl">
          <a
            href="#work"
            className="p-3 border border-border bg-background hover:bg-secondary/60 transition-colors group"
          >
            <span className="block font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Innovation</span>
            <span className="text-xs font-semibold text-foreground group-hover:text-accent flex items-center justify-between mt-1">
              Berlin &apos;26 <ArrowUpRight className="size-3 text-accent" />
            </span>
          </a>

          <a
            href="#work"
            className="p-3 border border-border bg-background hover:bg-secondary/60 transition-colors group"
          >
            <span className="block font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Research</span>
            <span className="text-xs font-semibold text-foreground group-hover:text-accent flex items-center justify-between mt-1">
              GDHF Nairobi <ArrowUpRight className="size-3 text-accent" />
            </span>
          </a>

          <a
            href="#education"
            className="p-3 border border-border bg-background hover:bg-secondary/60 transition-colors group"
          >
            <span className="block font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Academic</span>
            <span className="text-xs font-semibold text-foreground group-hover:text-accent flex items-center justify-between mt-1">
              M.S. 3.76 GPA <ArrowUpRight className="size-3 text-accent" />
            </span>
          </a>

          <a
            href={personalInfo.cvPath}
            download="Sunil_Parajuli_CV.pdf"
            className="p-3 border border-accent/40 bg-accent/5 hover:bg-accent/10 transition-colors group"
          >
            <span className="block font-mono text-[10px] uppercase tracking-wider text-accent font-semibold">Verified CV</span>
            <span className="text-xs font-semibold text-foreground group-hover:text-accent flex items-center justify-between mt-1">
              Download PDF <Download className="size-3 text-accent" />
            </span>
          </a>
        </div>
      </div>

      {/* Right Column: Architectural Bracket Wireframe & Focus */}
      <div className="relative flex min-h-[280px] items-end border-l border-border pl-6 lg:min-h-0 lg:pl-12">
        
        {/* Geometric Corner Anchors */}
        <div className="absolute right-0 top-0 hidden h-56 w-56 border border-accent/40 sm:block pointer-events-none">
          <div className="absolute -left-2 -top-2 size-4 bg-accent" />
          <div className="absolute -bottom-2 -right-2 size-4 bg-accent" />
        </div>

        <div className="max-w-xs pb-2 lg:pb-10">
          <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground flex items-center gap-2">
            <span className="size-2 rounded-full bg-accent animate-ping" />
            Currently focused on
          </p>
          <p className="mt-4 text-2xl font-medium leading-tight tracking-tight text-foreground">
            Making complex public infrastructure feel simple, connected, and human.
          </p>

          <div className="mt-8 flex items-center gap-6 font-mono text-xs text-muted-foreground border-t border-border pt-4">
            <div>
              <span className="text-base font-bold text-foreground block">9+</span>
              <span className="text-[10px] uppercase tracking-wider">Years Exp</span>
            </div>
            <div className="h-6 w-px bg-border" />
            <div>
              <span className="text-base font-bold text-accent block">10M+</span>
              <span className="text-[10px] uppercase tracking-wider">Lives Served</span>
            </div>
            <div className="h-6 w-px bg-border" />
            <div>
              <span className="text-base font-bold text-foreground block">6+</span>
              <span className="text-[10px] uppercase tracking-wider">Nations</span>
            </div>
          </div>
        </div>

        {/* Vertical Geographic Stamp */}
        <span className="font-mono text-xs text-muted-foreground [writing-mode:vertical-rl] pl-4 select-none">
          27°42&apos;N / 85°19&apos;E
        </span>
      </div>

    </section>
  );
}
