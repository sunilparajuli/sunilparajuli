'use client';

import React from 'react';
import { skillCategories } from '../data/portfolioData';
import { Terminal } from 'lucide-react';

export default function Skills() {
  return (
    <section id="skills" className="border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        
        {/* Header */}
        <div className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-[.18em] text-accent font-semibold">
              Technical taxonomy
            </p>
            <h2 className="text-4xl font-semibold tracking-[-.05em] sm:text-6xl text-foreground">
              Skills & Standards.
            </h2>
          </div>

          <p className="text-sm text-muted-foreground max-w-sm">
            Bridging international digital public health standards with modern full-stack enterprise architecture.
          </p>
        </div>

        {/* Skill Category Tiles */}
        <div className="grid gap-6 md:grid-cols-2">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="border border-border bg-secondary/30 p-6 sm:p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-foreground tracking-tight">
                    {category.title}
                  </h3>
                  <Terminal className="size-4 text-accent" />
                </div>

                <p className="text-xs text-muted-foreground mb-8">
                  {category.description}
                </p>

                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-1.5 font-mono text-xs">
                      <div className="flex items-center justify-between">
                        <span className={`flex items-center gap-2 ${
                          skill.highlight ? 'text-foreground font-bold' : 'text-muted-foreground'
                        }`}>
                          {skill.highlight && <span className="size-1.5 bg-accent inline-block" />}
                          {skill.name}
                        </span>
                        <span className="text-muted-foreground text-[11px]">{skill.level}%</span>
                      </div>

                      {/* Bar */}
                      <div className="h-1.5 w-full bg-border overflow-hidden">
                        <div
                          className={`h-full transition-all duration-700 ${
                            skill.highlight ? 'bg-accent' : 'bg-muted-foreground'
                          }`}
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
