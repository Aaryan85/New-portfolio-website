"use client";

import React, { useState } from "react";
import { ChevronDown, MapPin, GraduationCap, ArrowUpRight } from "lucide-react";

export function CodolioIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M16 18a6 6 0 0 1-8 0 6 6 0 0 1 0-8 6 6 0 0 1 8 0" />
      <circle cx="12" cy="12" r="2" fill="currentColor" />
    </svg>
  );
}

export default function About() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const questions = [
    {
      q: "How does a distributed system retain consistency during network partitions?",
      a: "Exploring consensus protocols, quorum replication, and CAP theorem trade-offs across modern database engines.",
    },
    {
      q: "Why does an interface feel instantaneously responsive even before network round-trips?",
      a: "Optimistic UI mutations, prefetching strategies, and fluid physics-based state transitions.",
    },
    {
      q: "How are milliseconds shaved off high-throughput database queries?",
      a: "Query execution plan profiling, composite indexing, connection pooling, and in-memory Redis caching.",
    },
    {
      q: "What is the fundamental memory vs compute trade-off in this data structure?",
      a: "Analyzing time and space complexities, cache locality, and memory alignment in modern runtimes.",
    },
    {
      q: "How is this architecture actually engineered to survive sudden traffic spikes?",
      a: "Rate limiting, asynchronous message brokers, horizontal autoscaling, and circuit breakers.",
    },
  ];

  return (
    <section id="about" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Top Tag */}
      <div className="flex items-center gap-2 mb-8">
        <span className="font-mono text-xs uppercase tracking-widest text-sky-500 dark:text-sky-400">
          WHO I AM
        </span>
        <span className="h-px w-16 bg-black/15 dark:bg-white/15" />
      </div>

      {/* Two-Column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Bold Personal Statement + Verified Links */}
        <div className="lg:col-span-5 space-y-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-zinc-950 dark:text-white leading-[1.15]">
            Drawn to the structure underneath things that run smoothly on the surface.
          </h2>

          <div className="pt-4 space-y-3 font-mono text-xs text-zinc-500 dark:text-zinc-400">
            <div className="flex items-center gap-2">
              <MapPin size={14} className="text-sky-500 shrink-0" />
              <span>Mumbai, India</span>
            </div>
            <div className="flex items-center gap-2">
              <GraduationCap size={14} className="text-sky-500 shrink-0" />
              <span>Third-year Computer Engineering @ TCET</span>
            </div>
            <div className="pt-2">
              <a
                href="https://codolio.com/profile/aaryan85"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-black/10 dark:border-white/15 bg-black/[0.02] dark:bg-zinc-900/40 text-zinc-800 dark:text-zinc-200 hover:text-sky-500 dark:hover:text-sky-400 hover:border-sky-500/50 transition-all group"
              >
                <CodolioIcon className="w-3.5 h-3.5 text-sky-500" />
                <span>Codolio: @aaryan85</span>
                <ArrowUpRight size={12} className="text-zinc-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Bio (with DSA Enthusiast) & Engineering Questions */}
        <div className="lg:col-span-7 space-y-8">
          <div className="space-y-4 text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
            <p className="font-medium text-zinc-900 dark:text-zinc-100">
              I'm a Full-Stack Developer and DSA enthusiast interested in scalable web architectures, problem-solving and building practical software solutions.
            </p>
            <p>
              My focus lies in building responsive, accessible web applications backed by resilient server APIs and clean database models. Alongside software engineering, I hold a deep interest in financial markets and data structures, which continuously refines my analytical thinking.
            </p>
          </div>

          {/* Questions Section */}
          <div className="pt-6 border-t border-black/10 dark:border-white/10">
            <p className="font-mono text-xs uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-4">
              QUESTIONS I CAN'T LEAVE ALONE
            </p>

            <div className="divide-y divide-black/10 dark:divide-white/10 border-b border-black/10 dark:border-white/10">
              {questions.map((item, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div key={item.q} className="py-4">
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? null : idx)}
                      className="w-full flex items-center justify-between text-left text-sm sm:text-base font-medium text-zinc-800 dark:text-zinc-200 hover:text-sky-500 dark:hover:text-sky-400 transition-colors"
                    >
                      <span className="pr-4">{item.q}</span>
                      <ChevronDown
                        size={16}
                        className={`shrink-0 transition-transform duration-200 ${
                          isOpen ? "rotate-180 text-sky-500" : "text-zinc-400"
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <p className="mt-2 text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed font-mono">
                        {item.a}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
