'use client';

import React from 'react';
import { educationList } from '../data/portfolioData';
import { GraduationCap, Award, BookOpen, ExternalLink, Languages } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="border-b border-border bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        
        {/* Header */}
        <div className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-[.18em] text-accent font-semibold">
              Academic foundation & research
            </p>
            <h2 className="text-4xl font-semibold tracking-[-.05em] sm:text-6xl text-foreground">
              Education & Thesis.
            </h2>
          </div>

          <p className="text-sm text-muted-foreground max-w-sm">
            Rigorous engineering fundamentals coupled with applied e-Governance and machine learning research in health financing.
          </p>
        </div>

        {/* Education Grid */}
        <div className="grid gap-6 lg:grid-cols-2 mb-12">
          {educationList.map((edu, idx) => (
            <div
              key={edu.id}
              className="border border-border bg-background p-6 sm:p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
                    {edu.period} · {edu.eqfLevel}
                  </span>
                  {edu.grade && (
                    <span className="font-mono text-xs uppercase bg-accent text-accent-foreground font-bold px-2.5 py-0.5">
                      {edu.grade}
                    </span>
                  )}
                </div>

                <p className="font-mono text-xs uppercase tracking-wider text-accent font-semibold mb-1">
                  {edu.institution}
                </p>

                <h3 className="text-xl font-semibold text-foreground tracking-tight mb-4">
                  {edu.degree}
                </h3>

                {edu.thesis && (
                  <div className="p-4 bg-secondary border-l-2 border-accent mb-5 text-xs font-mono">
                    <span className="text-accent uppercase font-bold block mb-1">
                      Graduate Thesis (9 Credits)
                    </span>
                    <p className="text-foreground font-sans font-medium">
                      {edu.thesis.replace('Ongoing Thesis (9 Credits): ', '')}
                    </p>
                  </div>
                )}

                <div className="space-y-1.5 mb-6">
                  {edu.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <span className="text-accent">→</span>
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {edu.website && (
                <div className="pt-4 border-t border-border flex justify-end">
                  <a
                    href={edu.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs text-muted-foreground hover:text-accent flex items-center gap-1.5 transition-colors"
                  >
                    <span>{edu.website.replace('https://', '')}</span>
                    <ExternalLink className="size-3 text-accent" />
                  </a>
                </div>
              )}
            </div>
          ))}

          {/* Language & Stakeholder Engagement Card */}
          <div className="border border-border bg-background p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
                  CEFR Certified & Working
                </span>
                <span className="font-mono text-xs uppercase bg-secondary text-secondary-foreground border border-border px-2.5 py-0.5 font-semibold">
                  Multilingual
                </span>
              </div>

              <p className="font-mono text-xs uppercase tracking-wider text-accent font-semibold mb-1">
                Communication Competencies
              </p>

              <h3 className="text-xl font-semibold text-foreground tracking-tight mb-6">
                Language & Cross-Cultural Advisory
              </h3>

              <div className="space-y-3 font-mono text-xs">
                <div className="flex items-center justify-between p-3 bg-secondary border border-border">
                  <div>
                    <span className="font-bold text-foreground block">English</span>
                    <span className="text-[10px] text-muted-foreground">C1 Proficient · Technical, Academic & Leadership</span>
                  </div>
                  <span className="bg-primary text-primary-foreground px-2 py-0.5 font-bold">C1 Level</span>
                </div>

                <div className="flex items-center justify-between p-3 bg-secondary border border-border">
                  <div>
                    <span className="font-bold text-foreground block">Nepali</span>
                    <span className="text-[10px] text-muted-foreground">Native · Full National Policy & Technical Proficiency</span>
                  </div>
                  <span className="bg-accent text-accent-foreground px-2 py-0.5 font-bold">Native</span>
                </div>

                <div className="flex items-center justify-between p-3 bg-secondary border border-border">
                  <div>
                    <span className="font-bold text-foreground block">Hindi</span>
                    <span className="text-[10px] text-muted-foreground">Working & Conversational Interoperability</span>
                  </div>
                  <span className="bg-background text-foreground border border-border px-2 py-0.5 font-bold">Fluent</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-border mt-6">
              <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground block mb-2">
                High-Level Engagement
              </span>
              <p className="text-xs text-muted-foreground">
                Extensive experience facilitating inter-ministerial technical workshops across Asia and Africa with WHO, GIZ, ILO, and ministries of health.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
