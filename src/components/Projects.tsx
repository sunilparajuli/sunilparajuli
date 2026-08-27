'use client';

import React, { useState } from 'react';
import { featuredProjects, Project } from '../data/portfolioData';
import ProjectModal from './ProjectModal';
import { ArrowUpRight, CheckCircle2, Sparkles, Filter, ExternalLink, Calendar, MapPin } from 'lucide-react';

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
    <section id="projects" className="py-24 bg-neutral-950 relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-emerald-400"></span>
              <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold">
                02 // Selected Works
              </span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-black font-display tracking-tight text-white uppercase">
              Featured <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-emerald-400">
                Architectures & Systems
              </span>
            </h2>
          </div>

          <p className="text-sm text-neutral-400 max-w-md font-light">
            Architected digital health platforms, FHIR integrations, and social registry ecosystems deployed nationally and presented in international symposiums.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-12 pb-4 border-b border-white/5">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all ${
                activeCategory === cat.id
                  ? 'bg-emerald-400 text-neutral-950 font-bold shadow-lg shadow-emerald-500/20'
                  : 'bg-neutral-900/80 text-neutral-400 hover:text-white border border-white/10 hover:border-white/20'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer rounded-3xl bg-neutral-900/60 hover:bg-neutral-900 border border-white/10 hover:border-emerald-500/40 transition-all duration-300 p-7 flex flex-col justify-between relative overflow-hidden backdrop-blur-sm hover:-translate-y-1 hover:shadow-2xl hover:shadow-emerald-500/10"
            >
              {/* Subtle top glow */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-emerald-500/0 group-hover:via-emerald-500/80 to-transparent transition-all duration-500" />

              <div>
                {/* Meta header */}
                <div className="flex items-center justify-between gap-2 mb-4 text-xs font-mono">
                  <span className="px-2.5 py-1 rounded-full bg-white/5 text-emerald-400 border border-white/10 uppercase text-[10px] tracking-wider">
                    {project.period}
                  </span>
                  <span className="text-neutral-400 flex items-center gap-1 text-[11px]">
                    <MapPin className="w-3 h-3 text-neutral-500" />
                    {project.location}
                  </span>
                </div>

                {/* Subtitle / Organization */}
                <span className="text-[11px] font-mono text-emerald-400/90 tracking-wider uppercase block mb-1">
                  {project.organization}
                </span>

                {/* Main Title */}
                <h3 className="text-xl font-bold font-display text-white group-hover:text-emerald-300 transition-colors mb-3 leading-snug">
                  {project.title}
                </h3>

                {/* Summary */}
                <p className="text-xs text-neutral-400 leading-relaxed font-light mb-6">
                  {project.summary}
                </p>

                {/* Key result bullet preview */}
                <div className="space-y-1.5 mb-6">
                  {project.keyResults.slice(0, 2).map((res, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-neutral-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="line-clamp-2">{res}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/10 mb-5">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 text-neutral-300 border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-white/5 text-neutral-500">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                {/* View Details CTA */}
                <div className="flex items-center justify-between text-xs font-mono text-white font-bold group-hover:text-emerald-400 transition-colors">
                  <span className="uppercase tracking-wider">Deep Dive</span>
                  <div className="w-7 h-7 rounded-full bg-white/5 group-hover:bg-emerald-400 group-hover:text-neutral-950 flex items-center justify-center transition-all">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Interactive Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
