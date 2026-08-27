'use client';

import React, { useState } from 'react';
import { featuredProjects, Project } from '../data/portfolioData';
import ProjectModal from './ProjectModal';
import { ArrowUpRight, CheckCircle2, Filter } from 'lucide-react';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'health-informatics', label: 'Health Informatics' },
    { id: 'interoperability', label: 'FHIR & Interoperability' },
    { id: 'social-protection', label: 'Social Protection & AI' },
    { id: 'enterprise', label: 'Enterprise Systems' },
  ];

  const filtered = activeCategory === 'all'
    ? featuredProjects
    : featuredProjects.filter(p => p.category === activeCategory);

  return (
    <section id="work" className="border-b border-border bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        
        {/* Section Header */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-[.18em] text-accent font-semibold">
              Selected work
            </p>
            <h2 className="text-4xl font-semibold tracking-[-.05em] sm:text-6xl text-foreground">
              Projects with purpose.
            </h2>
          </div>

          <p className="text-sm text-muted-foreground max-w-sm">
            National architectures, interoperability pipelines, and AI systems deployed for public welfare.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-border">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3 py-1.5 text-xs font-mono uppercase tracking-wider transition-colors ${
                activeCategory === cat.id
                  ? 'bg-primary text-primary-foreground font-semibold'
                  : 'bg-background text-muted-foreground hover:text-foreground border border-border'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Project Tiles Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project, i) => {
            const numStr = (i + 1).toString().padStart(2, '0');
            const badgeStyle = (i % 3 === 0) 
              ? 'bg-primary text-primary-foreground' 
              : (i % 3 === 1) 
              ? 'bg-accent text-accent-foreground' 
              : 'bg-secondary text-secondary-foreground border border-border';

            return (
              <article
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group flex min-h-[420px] flex-col justify-between border border-border bg-background p-6 transition-all hover:-translate-y-1 hover:border-accent sm:p-8 cursor-pointer relative"
              >
                <div>
                  {/* Top Row: Index Badge & Period */}
                  <div className="mb-8 flex items-center justify-between">
                    <div className={`flex size-11 items-center justify-center font-mono text-xs font-bold tracking-wider ${badgeStyle}`}>
                      {numStr}
                    </div>
                    <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                      {project.period}
                    </span>
                  </div>

                  <p className="mb-3 font-mono text-[11px] uppercase tracking-wider text-accent font-semibold">
                    {project.subtitle}
                  </p>

                  <h3 className="max-w-xs text-2xl font-medium leading-tight tracking-[-.04em] text-foreground group-hover:text-accent transition-colors mb-4">
                    {project.title}
                  </h3>

                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3 mb-4">
                    {project.summary}
                  </p>
                </div>

                <div>
                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6 pt-4 border-t border-border/60">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-[10px] font-mono bg-secondary text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-1.5 py-0.5 text-[10px] font-mono text-muted-foreground">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Explore Action */}
                  <div className="inline-flex items-center gap-2 text-sm font-medium text-foreground group-hover:text-accent transition-colors">
                    <span>Explore architecture</span>
                    <ArrowUpRight className="size-4 text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </article>
            );
          })}
        </div>

      </div>

      {/* Deep Dive Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
