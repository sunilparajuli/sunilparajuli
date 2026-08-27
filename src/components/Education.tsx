'use client';

import React from 'react';
import { educationList } from '../data/portfolioData';
import { GraduationCap, Award, BookOpen, ExternalLink, FileText, CheckCircle2, Languages } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-24 bg-neutral-950 relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-emerald-400"></span>
              <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold">
                04 // Academic Pedigree & Research
              </span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-black font-display tracking-tight text-white uppercase">
              Education & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-emerald-400">
                Applied Research
              </span>
            </h2>
          </div>

          <p className="text-sm text-neutral-400 max-w-md font-light">
            Combining formal computer engineering foundations with advanced e-Governance and machine learning research applied directly to public health financing.
          </p>
        </div>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {educationList.map((edu, idx) => (
            <div
              key={edu.id}
              className="p-8 rounded-3xl bg-neutral-900/60 border border-white/10 hover:border-emerald-500/40 transition-all duration-300 relative overflow-hidden flex flex-col justify-between"
            >
              {/* Highlight badge for Master's */}
              {edu.grade && (
                <div className="absolute top-6 right-6">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-400/10 text-emerald-400 border border-emerald-400/30 flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5" />
                    GPA {edu.grade.split(':')[1]?.trim() || '3.76/4.0'}
                  </span>
                </div>
              )}

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-emerald-400">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider block">
                      {edu.period} • {edu.eqfLevel}
                    </span>
                    <span className="text-xs font-mono text-emerald-400 font-semibold">
                      {edu.institution}
                    </span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold font-display text-white mb-4 pr-16">
                  {edu.degree}
                </h3>

                {edu.thesis && (
                  <div className="p-4 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 mb-6">
                    <div className="flex items-start gap-2.5">
                      <BookOpen className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider font-bold block mb-1">
                          Graduate Thesis (9 Credits)
                        </span>
                        <p className="text-xs text-neutral-200 font-light leading-relaxed">
                          {edu.thesis.replace('Ongoing Thesis (9 Credits): ', '')}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                <div className="space-y-2 mb-6">
                  {edu.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2 text-xs text-neutral-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-neutral-500 shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {edu.website && (
                <div className="pt-4 border-t border-white/5 flex justify-end">
                  <a
                    href={edu.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-neutral-400 hover:text-emerald-400 flex items-center gap-1.5 transition-colors"
                  >
                    <span>Visit Institution</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </div>
          ))}

          {/* Language & Competency Card */}
          <div className="p-8 rounded-3xl bg-neutral-900/60 border border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400">
                  <Languages className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider block">
                    Communication & Multilingual
                  </span>
                  <span className="text-sm font-bold text-white font-display">
                    Language Competencies
                  </span>
                </div>
              </div>

              <div className="space-y-4 text-xs font-mono">
                <div className="p-4 rounded-2xl bg-neutral-950/80 border border-white/5 flex items-center justify-between">
                  <div>
                    <span className="text-white font-bold block text-sm">English</span>
                    <span className="text-neutral-500 text-[11px]">CEFR Level C1 • Professional & Academic</span>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-bold">
                    C1 Advanced
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-neutral-950/80 border border-white/5 flex items-center justify-between">
                  <div>
                    <span className="text-white font-bold block text-sm">Nepali</span>
                    <span className="text-neutral-500 text-[11px]">Native Proficiency</span>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 font-bold">
                    Native
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-neutral-950/80 border border-white/5 flex items-center justify-between">
                  <div>
                    <span className="text-white font-bold block text-sm">Hindi</span>
                    <span className="text-neutral-500 text-[11px]">Full Working & Conversational</span>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-neutral-800 text-neutral-300 border border-white/10 font-bold">
                    Fluent
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/5 mt-6">
              <span className="text-xs font-mono text-neutral-400 block mb-2">Interpersonal Strengths</span>
              <div className="flex flex-wrap gap-2">
                <span className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/5 text-neutral-300 border border-white/5">
                  High-Level Stakeholder Engagement
                </span>
                <span className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/5 text-neutral-300 border border-white/5">
                  Technical Workshop Facilitation
                </span>
                <span className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/5 text-neutral-300 border border-white/5">
                  Cross-Cultural Teams (Asia, Africa, Europe)
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
