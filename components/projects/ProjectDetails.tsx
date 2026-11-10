"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowUpRight,
  ExternalLink,
  CheckCircle2,
  ShieldAlert,
  ArrowRight,
} from "lucide-react";
import { Project, projects } from "@/data/projects";
import Dotbg from "../ui/Dotbg";

interface ProjectDetailsProps {
  project: Project;
}

function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function ProjectDetails({ project }: ProjectDetailsProps) {
  // Find next project for seamless sequential browsing among the 5 projects
  const currentIndex = projects.findIndex((p) => p.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <article className="min-h-screen relative pt-12 pb-32 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <Dotbg size={24} fade={false} />

      {/* Top Back Navigation */}
      <div className="relative z-10 mb-10">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-xs font-mono text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors py-2 group"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          <span>BACK TO ALL PROJECTS</span>
        </Link>
      </div>

      {/* Hero Header */}
      <header className="relative z-10 border-b border-black/10 dark:border-white/10 pb-12 mb-12">
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-sm font-semibold text-zinc-400 dark:text-zinc-500">
            {project.number}
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-black/20 dark:bg-white/20" />
          <span className="font-mono text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
            {project.category}
          </span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-zinc-950 dark:text-white">
          {project.title}
        </h1>

        <p className="mt-4 text-base sm:text-xl text-zinc-600 dark:text-zinc-300 max-w-3xl leading-relaxed">
          {project.tagline}
        </p>

        {/* Project Meta Bar */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-black/10 dark:border-white/10 text-xs font-mono">
          <div>
            <span className="text-zinc-400 dark:text-zinc-500 block uppercase">Role</span>
            <span className="text-zinc-800 dark:text-zinc-200 font-medium">{project.role}</span>
          </div>
          <div>
            <span className="text-zinc-400 dark:text-zinc-500 block uppercase">Timeline</span>
            <span className="text-zinc-800 dark:text-zinc-200 font-medium">{project.timeline}</span>
          </div>
          <div>
            <span className="text-zinc-400 dark:text-zinc-500 block uppercase">Live Platform</span>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-500 hover:underline inline-flex items-center gap-1 font-medium"
            >
              Launch <ArrowUpRight size={11} />
            </a>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-900 text-white dark:bg-white dark:text-black text-xs font-semibold hover:opacity-90 transition-opacity shadow-sm"
          >
            <ExternalLink size={15} />
            <span>Open Live Website</span>
          </a>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-black/15 dark:border-white/15 text-zinc-800 dark:text-zinc-200 hover:bg-black/5 dark:hover:bg-white/5 text-xs font-semibold transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
            <span>GitHub Repository</span>
          </a>
        </div>
      </header>

      {/* Real Website Screenshot Showcase */}
      <section className="relative z-10 mb-16">
        <div className="rounded-2xl border border-black/15 dark:border-white/15 overflow-hidden bg-zinc-950 shadow-[0_20px_50px_rgba(0,0,0,0.2)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
          {/* Browser Window Header Bar */}
          <div className="px-4 py-3 bg-zinc-900 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
            </div>
            <div className="text-[11px] font-mono text-zinc-400 bg-black/40 px-4 py-1 rounded-md border border-white/5 truncate max-w-sm sm:max-w-md">
              {project.liveUrl}
            </div>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-colors"
              title="Open in new tab"
            >
              <ExternalLink size={14} />
            </a>
          </div>

          {/* Genuine Screenshot with Next.js Image Optimization */}
          <div className="relative aspect-[16/10] w-full bg-zinc-900">
            <Image
              src={project.image}
              alt={`${project.title} production interface capture`}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-cover object-top"
            />
          </div>
        </div>
        <p className="mt-3 text-right font-mono text-[11px] text-zinc-500 dark:text-zinc-400">
          ● Production build capture from {project.liveUrl.replace("https://", "")}
        </p>
      </section>

      {/* Main Content Body */}
      <div className="relative z-10 space-y-16">
        {/* Section 1: Overview */}
        <section className="space-y-4">
          <h2 className="font-mono text-xs uppercase tracking-widest text-sky-500 dark:text-sky-400">
            01 / PROJECT OVERVIEW
          </h2>
          <p className="text-base sm:text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed">
            {project.overview}
          </p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {project.highlights.map((highlight, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-black/[0.02] dark:bg-zinc-950/40 border border-black/10 dark:border-white/10"
              >
                <span className="font-mono text-xs text-sky-500 block mb-1">KEY METRIC</span>
                <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 font-medium">
                  {highlight}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2: Problem Statement & Solution */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 sm:p-8 rounded-2xl bg-black/[0.02] dark:bg-zinc-950/40 border border-black/10 dark:border-white/10">
            <span className="font-mono text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-400 block mb-3">
              THE PROBLEM
            </span>
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">
              What needed solving
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {project.problem}
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-black/[0.02] dark:bg-zinc-950/40 border border-black/10 dark:border-white/10">
            <span className="font-mono text-xs uppercase tracking-widest text-sky-500 dark:text-sky-400 block mb-3">
              THE SOLUTION
            </span>
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">
              Engineering response
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {project.solution}
            </p>
          </div>
        </section>

        {/* Section 3: Key Features */}
        <section className="space-y-6">
          <h2 className="font-mono text-xs uppercase tracking-widest text-sky-500 dark:text-sky-400">
            02 / CORE CAPABILITIES
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {project.features.map((feat) => (
              <div
                key={feat.title}
                className="p-5 rounded-xl bg-black/[0.02] dark:bg-zinc-950/40 border border-black/10 dark:border-white/10"
              >
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 size={16} className="text-sky-500 shrink-0" />
                  <h4 className="font-bold text-sm text-zinc-900 dark:text-white">{feat.title}</h4>
                </div>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {feat.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Tech Stack */}
        <section className="space-y-6">
          <h2 className="font-mono text-xs uppercase tracking-widest text-sky-500 dark:text-sky-400">
            03 / TECHNOLOGY STACK
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {project.techStack.map((group) => (
              <div
                key={group.category}
                className="p-4 rounded-xl bg-black/[0.02] dark:bg-zinc-950/40 border border-black/10 dark:border-white/10"
              >
                <h4 className="font-mono text-xs text-zinc-400 dark:text-zinc-500 uppercase tracking-wider mb-3">
                  {group.category}
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="text-xs font-mono px-2.5 py-1 rounded-md bg-white dark:bg-zinc-900 border border-black/10 dark:border-white/10 text-zinc-800 dark:text-zinc-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: Development Challenges */}
        <section className="space-y-6">
          <h2 className="font-mono text-xs uppercase tracking-widest text-sky-500 dark:text-sky-400">
            04 / ENGINEERING CHALLENGES & RESOLUTION
          </h2>

          <div className="space-y-4">
            {project.challenges.map((c) => (
              <div
                key={c.title}
                className="p-6 rounded-xl bg-black/[0.02] dark:bg-zinc-950/40 border border-black/10 dark:border-white/10"
              >
                <h4 className="font-bold text-sm sm:text-base text-zinc-900 dark:text-white mb-2 flex items-center gap-2">
                  <ShieldAlert size={16} className="text-zinc-400" />
                  <span>{c.title}</span>
                </h4>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {c.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 6: Next Project Navigation */}
        <section className="pt-12 border-t border-black/10 dark:border-white/10">
          <Link
            href={`/projects/${nextProject.slug}`}
            prefetch={true}
            className="group block p-6 sm:p-8 rounded-2xl bg-black/[0.02] dark:bg-zinc-950/40 border border-black/10 dark:border-white/10 hover:border-sky-500/50 transition-all"
          >
            <span className="font-mono text-xs uppercase tracking-widest text-zinc-400 dark:text-zinc-500 block mb-2">
              NEXT CASE STUDY ({nextProject.number} / 05)
            </span>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white group-hover:text-sky-500 transition-colors">
                  {nextProject.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                  {nextProject.tagline}
                </p>
              </div>
              <div className="w-10 h-10 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center text-zinc-400 group-hover:text-sky-500 group-hover:translate-x-1 transition-all">
                <ArrowRight size={18} />
              </div>
            </div>
          </Link>
        </section>
      </div>
    </article>
  );
}
