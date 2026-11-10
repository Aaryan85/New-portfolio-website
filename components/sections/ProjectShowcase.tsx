"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useSpring } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects, Project } from "@/data/projects";

export default function ProjectShowcase() {
  const [hoveredProject, setHoveredProject] = useState<Project | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Smooth springs for cursor preview
  const springX = useSpring(0, { damping: 25, stiffness: 220 });
  const springY = useSpring(0, { damping: 25, stiffness: 220 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      springX.set(e.clientX + 24);
      springY.set(e.clientY - 140);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [springX, springY]);

  return (
    <section id="projects" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="mb-14">
        <p className="font-mono text-xs sm:text-sm uppercase tracking-widest text-sky-500 dark:text-sky-400 mb-3">
          SELECTED WORK
        </p>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900 dark:text-white">
          Engineered for scale & precision.
        </h2>
        <p className="mt-3 text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-2xl">
          Five production web applications, developer platforms, and interactive software systems built with modern architectures.
        </p>
      </div>

      {/* Projects List Container */}
      <div ref={containerRef} className="relative border-t border-black/10 dark:border-white/10">
        {projects.map((project) => (
          <div
            key={project.slug}
            onMouseEnter={() => setHoveredProject(project)}
            onMouseLeave={() => setHoveredProject(null)}
            className="group relative border-b border-black/10 dark:border-white/10 transition-colors hover:bg-black/[0.02] dark:hover:bg-white/[0.02]"
          >
            <Link
              href={`/projects/${project.slug}`}
              prefetch={true}
              className="block py-8 sm:py-10 px-2 sm:px-4"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                {/* Left: Number + Title + Subtitle */}
                <div className="flex items-start gap-4 sm:gap-6">
                  <span className="font-mono text-xs sm:text-sm font-semibold text-zinc-400 dark:text-zinc-500 pt-1 group-hover:text-sky-500 transition-colors">
                    {project.number}
                  </span>
                  <div>
                    <h3 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white group-hover:text-sky-500 dark:group-hover:text-sky-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 max-w-xl">
                      {project.tagline}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-3">
                      {project.techStack.flatMap((c) => c.items).slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-zinc-700 dark:text-zinc-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right: Category, Timeline, Arrow */}
                <div className="flex items-center justify-between lg:justify-end gap-6 sm:gap-10 pt-2 lg:pt-0">
                  <div className="text-left lg:text-right">
                    <p className="font-mono text-xs uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                      {project.category}
                    </p>
                    <p className="text-xs text-zinc-600 dark:text-zinc-500 mt-0.5">
                      {project.timeline}
                    </p>
                  </div>

                  <div className="w-10 h-10 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center text-zinc-400 group-hover:text-sky-500 group-hover:border-sky-500/40 dark:group-hover:border-sky-400/40 transition-all group-hover:translate-x-1 group-hover:-translate-y-1">
                    <ArrowUpRight size={18} />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* Desktop Floating Preview Card (follows cursor with genuine website screenshot) */}
      <AnimatePresence>
        {hoveredProject && (
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 10 }}
            transition={{ duration: 0.16, ease: "easeOut" }}
            style={{
              position: "fixed",
              left: springX,
              top: springY,
              pointerEvents: "none",
              zIndex: 70,
            }}
            className="hidden lg:block w-80 rounded-2xl bg-zinc-950/95 border border-white/20 p-3 shadow-[0_25px_60px_rgba(0,0,0,0.6)] backdrop-blur-xl"
          >
            {/* Real Screenshot Preview */}
            <div className="relative h-48 w-full rounded-xl overflow-hidden border border-white/10 bg-zinc-900 shadow-inner">
              <img
                src={hoveredProject.image}
                alt={`${hoveredProject.title} live interface preview`}
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-white">
                <span className="font-bold tracking-wide drop-shadow-sm">{hoveredProject.title}</span>
                <span className="text-sky-400 text-[10px] uppercase tracking-wider font-semibold">Live System</span>
              </div>
            </div>

            {/* Quick Caption */}
            <div className="mt-2.5 px-1">
              <p className="text-[11px] text-zinc-400 line-clamp-2">
                {hoveredProject.tagline}
              </p>
              <div className="mt-2 flex items-center justify-between text-[11px] font-mono text-sky-400">
                <span>Explore Case Study</span>
                <span>→</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
