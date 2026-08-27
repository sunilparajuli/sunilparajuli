'use client';

import React, { useState } from 'react';
import { experiences } from '../data/portfolioData';
import { MapPin, ChevronDown, ChevronUp, CheckCircle2 } from 'lucide-react';

export default function Experience() {
  const [expandedId, setExpandedId] = useState<string | null>(experiences[0]?.id || null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="experience" className="border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        
        {/* Header */}
        <div className="mb-12 flex items-center justify-between">
          <div>
            <p className="mb-2 font-mono text-xs uppercase tracking-[.18em] text-accent font-semibold">
              Career progression
            </p>
            <h2 className="text-3xl font-semibold tracking-[-.05em] sm:text-5xl text-foreground">
              Experience
            </h2>
          </div>
          <span className="font-mono text-xs text-muted-foreground border border-border px-3 py-1 bg-secondary/50">
            2016 — 2026
          </span>
        </div>

        {/* Roles Divide Grid */}
        <div className="divide-y divide-border border-y border-border">
          {experiences.map((exp) => {
            const isExpanded = expandedId === exp.id;

            return (
              <article
                key={exp.id}
                onClick={() => toggleExpand(exp.id)}
                className="group py-7 cursor-pointer transition-colors hover:bg-secondary/20 select-none"
              >
                <div className="grid gap-4 md:grid-cols-[.7fr_1.1fr_1.2fr] md:gap-8 items-start">
                  
                  {/* Period & Type */}
                  <div>
                    <p className="font-mono text-xs text-foreground font-semibold">
                      {exp.period}
                    </p>
                    <span className="mt-1 inline-block font-mono text-[10px] uppercase text-muted-foreground bg-secondary px-2 py-0.5 border border-border">
                      {exp.type}
                    </span>
                  </div>

                  {/* Role, Company, Location */}
                  <div>
                    <h3 className="text-base font-semibold text-foreground group-hover:text-accent transition-colors flex items-center gap-2">
                      <span>{exp.role}</span>
                      {isExpanded ? <ChevronUp className="size-3.5 text-accent" /> : <ChevronDown className="size-3.5 text-muted-foreground" />}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-accent">
                      {exp.company}
                    </p>
                    <p className="mt-1 flex items-center gap-1 text-xs text-muted-foreground font-mono">
                      <MapPin className="size-3" />
                      {exp.location}
                    </p>
                  </div>

                  {/* Summary */}
                  <div>
                    <p className="text-sm leading-6 text-muted-foreground font-light">
                      {exp.description}
                    </p>
                  </div>

                </div>

                {/* Expanded Achievements & Tech */}
                {isExpanded && (
                  <div className="mt-6 pt-6 border-t border-border/60 pl-0 md:pl-[calc(24%+2rem)] space-y-4 animate-in fade-in duration-200">
                    <div className="space-y-2">
                      {exp.achievements.map((ach, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs leading-relaxed text-muted-foreground">
                          <span className="text-accent font-bold">→</span>
                          <span>{ach}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 text-[10px] font-mono bg-secondary text-foreground border border-border"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
