'use client';

import React, { useState } from 'react';
import { experiences } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';

export default function Experience() {
  const [expandedId, setExpandedId] = useState<string | null>(experiences[0]?.id || null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="experience" className="py-24 bg-neutral-900/50 relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-emerald-400"></span>
              <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold">
                03 // Career Trajectory
              </span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-black font-display tracking-tight text-white uppercase">
              Professional <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-emerald-400">
                Experience Timeline
              </span>
            </h2>
          </div>

          <p className="text-sm text-neutral-400 max-w-md font-light">
            A progressive record of technical leadership, international health informatics consultancy, and full-stack enterprise engineering.
          </p>
        </div>

        {/* Timeline List */}
        <div className="space-y-4">
          {experiences.map((exp, index) => {
            const isExpanded = expandedId === exp.id;

            return (
              <div
                key={exp.id}
                className={`rounded-3xl border transition-all duration-300 overflow-hidden ${
                  isExpanded
                    ? 'bg-neutral-950 border-emerald-500/40 shadow-2xl shadow-emerald-500/5'
                    : 'bg-neutral-950/60 hover:bg-neutral-950/90 border-white/10 hover:border-white/20'
                }`}
              >
                {/* Header Row (Clickable) */}
                <div
                  onClick={() => toggleExpand(exp.id)}
                  className="p-6 sm:p-8 cursor-pointer flex flex-col lg:flex-row lg:items-center justify-between gap-4 select-none"
                >
                  <div className="space-y-1.5 flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider bg-white/5 text-emerald-400 border border-white/10">
                        {exp.type}
                      </span>
                      <span className="text-xs font-mono text-neutral-400 flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-neutral-500" />
                        {exp.location}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold font-display text-white group-hover:text-emerald-400 transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-mono text-neutral-400 font-medium">
                      {exp.company}
                    </p>
                  </div>

                  <div className="flex items-center justify-between lg:justify-end gap-6 pt-2 lg:pt-0 border-t lg:border-t-0 border-white/5">
                    <span className="text-xs font-mono text-neutral-300 font-semibold px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                      {exp.period}
                    </span>
                    <div className="p-2 rounded-full bg-white/5 text-neutral-400 hover:text-white">
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </div>
                </div>

                {/* Expanded Details Body */}
                {isExpanded && (
                  <div className="px-6 pb-8 sm:px-8 pt-2 border-t border-white/5 space-y-6 animate-in slide-in-from-top-2 duration-200">
                    <p className="text-sm text-neutral-300 font-light leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="space-y-3">
                      <h4 className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold">
                        Key Responsibilities & Deliverables
                      </h4>
                      <div className="space-y-2">
                        {exp.achievements.map((ach, i) => (
                          <div key={i} className="flex items-start gap-2.5 text-sm text-neutral-300">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{ach}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-2">
                      <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-500 font-bold mb-2">
                        Technologies Deployed
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/5 text-neutral-300 border border-white/10"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
