'use client';

import React from 'react';
import { skillCategories } from '../data/portfolioData';
import { Cpu, CheckCircle2, Sparkles, Layers, Terminal } from 'lucide-react';

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-neutral-900/40 relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-emerald-400"></span>
              <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold">
                05 // Technical Capabilities
              </span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-black font-display tracking-tight text-white uppercase">
              Skills & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-emerald-400">
                Technology Matrix
              </span>
            </h2>
          </div>

          <p className="text-sm text-neutral-400 max-w-md font-light">
            Comprehensive full-stack engineering proficiency paired with international digital public health standards and enterprise infrastructure management.
          </p>
        </div>

        {/* Skill Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="p-8 rounded-3xl bg-neutral-950/80 border border-white/10 hover:border-emerald-500/40 transition-all duration-300 backdrop-blur-sm"
            >
              <div className="flex items-center justify-between gap-4 mb-3">
                <h3 className="text-xl font-bold font-display text-white">
                  {category.title}
                </h3>
                <span className="p-2 rounded-xl bg-white/5 text-emerald-400 border border-white/10">
                  <Terminal className="w-4 h-4" />
                </span>
              </div>

              <p className="text-xs text-neutral-400 font-light mb-8">
                {category.description}
              </p>

              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className={`flex items-center gap-2 ${
                        skill.highlight ? 'text-white font-bold' : 'text-neutral-300'
                      }`}>
                        {skill.highlight && (
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
                        )}
                        {skill.name}
                      </span>
                      <span className="text-neutral-500">{skill.level}%</span>
                    </div>

                    {/* Progress Track */}
                    <div className="h-2 w-full bg-neutral-900 rounded-full overflow-hidden border border-white/5">
                      <div
                        className={`h-full rounded-full transition-all duration-1000 ${
                          skill.highlight
                            ? 'bg-gradient-to-r from-emerald-500 to-teal-400 shadow-sm shadow-emerald-500/50'
                            : 'bg-neutral-600'
                        }`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
