"use client";

import React from "react";
import { motion } from "framer-motion";
import Dotbg from "../ui/Dotbg";

export default function MyApproach() {
  const steps = [
    {
      num: "01",
      title: "UNDERSTAND",
      desc: "Understand the problem thoroughly before writing a single line of code. Clarify requirements and uncover latent constraints.",
      rotation: "rotate-[-1.5deg]",
      tapeOffset: "left-6",
    },
    {
      num: "02",
      title: "ARCHITECT",
      desc: "Break down complex problems into modular, scalable, and decoupled systems. Select the right abstractions for longevity.",
      rotation: "rotate-[1.8deg]",
      tapeOffset: "right-8",
    },
    {
      num: "03",
      title: "BUILD",
      desc: "Develop reliable, accessible, type-safe, and easily maintainable applications with fluid, responsive user interfaces.",
      rotation: "rotate-[-1deg]",
      tapeOffset: "left-10",
    },
    {
      num: "04",
      title: "REFINE",
      desc: "Benchmark performance, stress-test edge cases, profile bottlenecks, and continuously iterate towards perfection.",
      rotation: "rotate-[2deg]",
      tapeOffset: "right-6",
    },
  ];

  const stickyPrinciples = [
    { text: "Performance matters.", rotate: "rotate-[-2deg]", color: "bg-[#d9f99d] dark:bg-[#bef264]" },
    { text: "Simplicity wins.", rotate: "rotate-[2.5deg]", color: "bg-[#fef08a] dark:bg-[#fde047]" },
    { text: "Scalability from the beginning.", rotate: "rotate-[-1.5deg]", color: "bg-[#bbf7d0] dark:bg-[#86efac]" },
    { text: "Accessibility is not optional.", rotate: "rotate-[1.5deg]", color: "bg-[#fef08a] dark:bg-[#fde047]" },
    { text: "Understand before implementing.", rotate: "rotate-[-2deg]", color: "bg-[#d9f99d] dark:bg-[#bef264]" },
    { text: "Build for real users.", rotate: "rotate-[2deg]", color: "bg-[#bbf7d0] dark:bg-[#86efac]" },
  ];

  return (
    <section id="approach" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="mb-14">
        <p className="font-mono text-xs sm:text-sm uppercase tracking-widest text-sky-500 dark:text-sky-400 mb-3">
          HOW I THINK & BUILD
        </p>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900 dark:text-white">
          My Approach
        </h2>
        <p className="mt-3 text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-2xl">
          Engineering is more than syntax — it is a disciplined mental model for dissecting ambiguity and producing resilient software.
        </p>
      </div>

      {/* Main Process Board Canvas with complete dotted background */}
      <div className="relative p-6 sm:p-10 lg:p-12 rounded-3xl bg-zinc-100/90 dark:bg-zinc-950/80 border border-black/10 dark:border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.06)] dark:shadow-[0_25px_60px_rgba(0,0,0,0.6)] overflow-hidden">
        {/* Subtle dotted-grid background inside entire canvas */}
        <Dotbg size={22} dotColor="var(--dot-pattern, rgba(100, 116, 139, 0.4))" />

        {/* Board Top Metadata Bar */}
        <div className="relative z-10 flex items-center justify-between pb-6 border-b border-black/10 dark:border-white/10 mb-10">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-sky-500 animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-widest text-zinc-600 dark:text-zinc-300 font-bold">
              ENGINEERING PROCESS SPECIFICATION
            </span>
          </div>
          <span className="hidden sm:inline-block font-mono text-xs tracking-wider text-zinc-400 dark:text-zinc-500">
            PHASE 01 — 04 • WORKFLOW & LAWS
          </span>
        </div>

        {/* Interactive Layout: Left White Lined Process Sheet + Right Sticky Notes */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* LEFT: Authentic Lined Process Sheet */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            whileHover={{ rotate: 0 }}
            className="lg:col-span-5 xl:col-span-5 relative bg-white dark:bg-[#fafaf9] text-zinc-900 rounded-lg p-6 sm:p-8 shadow-[0_15px_35px_rgba(0,0,0,0.12),0_2px_8px_rgba(0,0,0,0.08)] border border-neutral-300 dark:border-neutral-400 rotate-[-1deg] transition-transform duration-300 select-none overflow-hidden"
          >
            {/* Top Red Divider Accent */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-red-500/80" />

            {/* Frosted Tape at Top Center */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-5 bg-white/80 dark:bg-white/60 backdrop-blur-xs border border-black/10 shadow-xs rotate-[-1deg]" />

            {/* Red Left Margin Line (Classic Notebook Style) */}
            <div className="absolute top-0 bottom-0 left-7 sm:left-9 w-px bg-red-400/50 pointer-events-none" />

            {/* Lined Notebook Paper Texture */}
            <div
              className="absolute inset-0 pointer-events-none opacity-40"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(transparent, transparent 31px, rgba(59, 130, 246, 0.25) 31px, rgba(59, 130, 246, 0.25) 32px)",
                backgroundPosition: "0 40px",
              }}
            />

            {/* Sheet Content with Left Margin Padding */}
            <div className="relative pl-6 sm:pl-8 space-y-6">
              {/* Header on sheet */}
              <div className="border-b-2 border-zinc-900/10 pb-3">
                <div className="flex items-center justify-between font-mono text-[10px] text-zinc-500 uppercase tracking-widest">
                  <span>LOG // STEP-SPEC</span>
                  <span>MUMBAI • TCET</span>
                </div>
                <h3 className="font-mono text-xl sm:text-2xl font-black tracking-tight text-zinc-950 mt-1">
                  WORKFLOW PIPELINE
                </h3>
              </div>

              {/* Four-Step Workflow */}
              <div className="space-y-5">
                {[
                  {
                    num: "01",
                    label: "Understand",
                    detail: "Deconstruct problem domain, edge cases, user flow and underlying system constraints.",
                  },
                  {
                    num: "02",
                    label: "Architect",
                    detail: "Blueprint modular system topologies, data contracts, and schema representations.",
                  },
                  {
                    num: "03",
                    label: "Build",
                    detail: "Author clean, accessible, type-safe full-stack code with resilient API boundaries.",
                  },
                  {
                    num: "04",
                    label: "Refine",
                    detail: "Profile response latency, audit accessibility, optimize bundle size and iterate.",
                  },
                ].map((item) => (
                  <div key={item.num} className="group">
                    <div className="flex items-baseline gap-2 font-mono">
                      <span className="font-black text-sm text-sky-600 dark:text-sky-700">
                        {item.num} —
                      </span>
                      <span className="font-bold text-base text-zinc-900 uppercase tracking-wide">
                        {item.label}
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-zinc-700 leading-relaxed font-sans">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>

              {/* Bottom Stamp / Seal */}
              <div className="pt-4 border-t border-zinc-900/10 flex items-center justify-between font-mono text-[10px] text-zinc-500 uppercase">
                <span className="inline-flex items-center gap-1.5 text-emerald-700 font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                  VERIFIED PATTERN
                </span>
                <span>SYSTEM V2.0</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: The 4 Yellow Sticky-Note Cards */}
          <div className="lg:col-span-7 xl:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-7">
            {steps.map((step, idx) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ scale: 1.03, rotate: 0 }}
                className={`relative p-6 sm:p-7 rounded-lg bg-[#fef08a] dark:bg-[#fde047] text-zinc-950 shadow-[0_12px_28px_rgba(0,0,0,0.14)] transition-all duration-200 select-none ${step.rotation}`}
              >
                {/* Paper Tape Pin with subtle shadow */}
                <div
                  className={`absolute -top-3.5 ${step.tapeOffset} w-11 h-4.5 bg-white/75 dark:bg-white/60 backdrop-blur-xs border border-black/10 rotate-1 shadow-xs`}
                />

                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-black tracking-widest px-2 py-0.5 rounded bg-black/10">
                    {step.num}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-black/25" />
                </div>

                <h3 className="text-xl sm:text-2xl font-black tracking-tight mb-2 font-mono">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm font-medium leading-relaxed text-zinc-800">
                  {step.desc}
                </p>

                {/* Subtle underline sketch */}
                <div className="mt-5 pt-2.5 border-t border-black/10 flex items-center justify-between font-mono text-[10px] text-zinc-700 uppercase">
                  <span>Phase {step.num}</span>
                  <span className="text-sky-700 font-bold">✓ Active</span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Scattered Sticky-Note Core Principles */}
        <div className="relative z-10 mt-14 pt-8 border-t border-black/10 dark:border-white/10">
          <div className="flex items-center justify-between mb-6">
            <p className="font-mono text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-400 font-bold">
              CORE PRINCIPLES & LAWS
            </p>
            <span className="font-mono text-[11px] text-zinc-400 hidden sm:inline-block">
              NON-NEGOTIABLE ENGINEERING PILLARS
            </span>
          </div>

          <div className="flex flex-wrap gap-4 sm:gap-5 items-center">
            {stickyPrinciples.map((principle, i) => (
              <motion.div
                key={principle.text}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.2 + i * 0.05 }}
                whileHover={{ scale: 1.05, rotate: 0 }}
                className={`relative px-4 py-3 rounded-md text-zinc-950 font-mono text-xs font-bold shadow-[0_6px_16px_rgba(0,0,0,0.12)] transition-transform select-none ${principle.color} ${principle.rotate}`}
              >
                {/* Micro tape on principles */}
                <div className="absolute -top-2 left-4 w-7 h-3 bg-white/60 backdrop-blur-xs border border-black/10 shadow-2xs rotate-[-2deg]" />
                <span>{principle.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
