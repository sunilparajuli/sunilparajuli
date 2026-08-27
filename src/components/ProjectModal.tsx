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
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-card border border-border p-6 sm:p-10 shadow-2xl text-foreground"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-muted-foreground hover:text-foreground border border-border hover:border-accent transition-colors"
          aria-label="Close modal"
        >
          <X className="size-4" />
        </button>

        {/* Header Metadata */}
        <div className="flex flex-wrap items-center gap-3 mb-4 font-mono text-xs text-muted-foreground">
          <span className="px-2.5 py-0.5 uppercase bg-accent text-accent-foreground font-semibold">
            {project.category.replace('-', ' ')}
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="size-3.5" />
            {project.period}
          </span>
          <span className="flex items-center gap-1">
            <MapPin className="size-3.5" />
            {project.location}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-2xl sm:text-4xl font-semibold tracking-[-.04em] text-foreground mb-2">
          {project.title}
        </h3>
        <p className="font-mono text-xs uppercase tracking-wider text-accent font-semibold mb-6">
          {project.subtitle} · {project.organization}
        </p>

        {/* Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 bg-secondary border border-border mb-8 text-xs font-mono">
          <div>
            <span className="text-muted-foreground uppercase block text-[10px]">Role</span>
            <span className="text-foreground font-semibold flex items-center gap-1.5 mt-0.5">
              <UserCheck className="size-3.5 text-accent" />
              {project.role}
            </span>
          </div>
          <div>
            <span className="text-muted-foreground uppercase block text-[10px]">Client / Partner</span>
            <span className="text-foreground font-semibold flex items-center gap-1.5 mt-0.5">
              <Building2 className="size-3.5 text-accent" />
              {project.client}
            </span>
          </div>
        </div>

        {/* Overview */}
        <div className="space-y-3 mb-8">
          <h4 className="font-mono text-xs uppercase tracking-wider text-accent font-semibold flex items-center gap-2">
            <Layers className="size-3.5" />
            Architecture & Implementation Overview
          </h4>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {project.overview}
          </p>
        </div>

        {/* Key Results */}
        <div className="space-y-4 mb-8">
          <h4 className="font-mono text-xs uppercase tracking-wider text-foreground font-semibold">
            Key Results & Deliverables
          </h4>
          <div className="space-y-2.5">
            {project.keyResults.map((res, i) => (
              <div key={i} className="flex items-start gap-3 text-xs leading-relaxed text-muted-foreground">
                <CheckCircle2 className="size-4 text-accent shrink-0 mt-0.5" />
                <span>{res}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Metrics if available */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="grid grid-cols-3 gap-3 mb-8 p-4 bg-secondary border border-border">
            {project.metrics.map((m, i) => (
              <div key={i} className="text-center">
                <span className="text-xl font-bold font-mono text-accent block">{m.value}</span>
                <span className="text-[10px] font-mono uppercase text-muted-foreground tracking-wider">{m.label}</span>
              </div>
            ))}
          </div>
        )}

        {/* Tech Stack */}
        <div className="space-y-3 mb-8">
          <h4 className="font-mono text-xs uppercase tracking-wider text-foreground font-semibold">
            Technologies & Standards
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-xs font-mono bg-secondary text-foreground border border-border"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Link */}
        {project.link && (
          <div className="pt-4 border-t border-border flex justify-end">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground font-mono text-xs uppercase tracking-wider font-semibold hover:bg-accent transition-colors"
            >
              <span>{project.linkText || 'View External Resource'}</span>
              <ExternalLink className="size-3.5" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
