'use client';

import React from 'react';
import { Project } from '../data/portfolioData';
import { X, CheckCircle2, ExternalLink, Calendar, MapPin, Building2, UserCheck, Layers } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-neutral-950 border border-white/20 rounded-3xl p-6 sm:p-10 shadow-2xl text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-neutral-900 border border-white/10 text-neutral-400 hover:text-white hover:border-emerald-400 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Metadata */}
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="px-3 py-1 rounded-full text-xs font-mono uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
            {project.category.replace('-', ' ')}
          </span>
          <span className="text-xs font-mono text-neutral-400 flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            {project.period}
          </span>
          <span className="text-xs font-mono text-neutral-400 flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5" />
            {project.location}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-2xl sm:text-4xl font-bold font-display uppercase tracking-tight text-white mb-2">
          {project.title}
        </h3>
        <p className="text-emerald-400 font-mono text-xs uppercase tracking-wider mb-6">
          {project.subtitle} • {project.organization}
        </p>

        {/* Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-2xl bg-neutral-900/60 border border-white/5 mb-8 text-xs font-mono">
          <div>
            <span className="text-neutral-500 uppercase block">Role</span>
            <span className="text-white font-semibold flex items-center gap-1.5 mt-0.5">
              <UserCheck className="w-3.5 h-3.5 text-emerald-400" />
              {project.role}
            </span>
          </div>
          <div>
            <span className="text-neutral-500 uppercase block">Partner / Client</span>
            <span className="text-white font-semibold flex items-center gap-1.5 mt-0.5">
              <Building2 className="w-3.5 h-3.5 text-emerald-400" />
              {project.client}
            </span>
          </div>
        </div>

        {/* Overview */}
        <div className="space-y-3 mb-8">
          <h4 className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold flex items-center gap-2">
            <Layers className="w-3.5 h-3.5" />
            Project Architecture & Overview
          </h4>
          <p className="text-neutral-300 text-sm leading-relaxed font-light">
            {project.overview}
          </p>
        </div>

        {/* Key Results */}
        <div className="space-y-4 mb-8">
          <h4 className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold">
            Key Results & Deliverables
          </h4>
          <div className="space-y-2.5">
            {project.keyResults.map((res, i) => (
              <div key={i} className="flex items-start gap-3 text-sm text-neutral-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{res}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Metrics if available */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="grid grid-cols-3 gap-3 mb-8 p-4 rounded-2xl bg-emerald-500/5 border border-emerald-500/20">
            {project.metrics.map((m, i) => (
              <div key={i} className="text-center">
                <span className="text-xl sm:text-2xl font-bold font-display text-emerald-400 block">{m.value}</span>
                <span className="text-[10px] font-mono uppercase text-neutral-400 tracking-wider">{m.label}</span>
              </div>
            ))}
          </div>
        )}

        {/* Tech Stack */}
        <div className="space-y-3 mb-8">
          <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-400 font-bold">
            Technologies & Standards
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-lg text-xs font-mono bg-white/5 text-neutral-200 border border-white/10"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Link if available */}
        {project.link && (
          <div className="pt-4 border-t border-white/10 flex justify-end">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-400 hover:bg-emerald-300 text-neutral-950 font-mono text-xs uppercase font-bold rounded-xl transition-all"
            >
              {project.linkText || 'View External Resource'}
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
