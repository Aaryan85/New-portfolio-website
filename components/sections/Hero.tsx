"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, FileText, Send } from "lucide-react";
import Dotbg from "../ui/Dotbg";

export default function Hero() {
  const words = [
    { highlight: "D", rest: "ESIGN" },
    { highlight: "D", rest: "EVELOP" },
    { highlight: "B", rest: "UILD" },
    { highlight: "I", rest: "TERATE" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-4 sm:px-6 overflow-hidden pt-12 sm:pt-16 pb-24"
    >
      {/* Background Dots - Clearly visible top, gracefully fading towards bottom */}
      <Dotbg size={24} fadeDirection="bottom" />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        {/* Crisp Non-Repetitive Headline */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="space-y-2 mb-1"
        >
          <p className="text-xs sm:text-sm font-mono tracking-widest text-sky-500 uppercase font-semibold">
            COMPUTER ENGINEERING STUDENT • WEB DEVELOPER
          </p>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tight text-zinc-700 dark:text-zinc-300">
            I build things that solve real problems.
          </h2>
        </motion.div>

        {/* Oversized Signature Name: Lifted slightly upwards into available whitespace */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-0 sm:mt-1 mb-6 sm:mb-8 select-none"
        >
          <h1 className="text-7xl sm:text-9xl md:text-[11rem] lg:text-[13rem] font-black tracking-tighter leading-none text-zinc-950 dark:text-white drop-shadow-sm">
            aaryan
          </h1>
        </motion.div>

        {/* Action Principles Bar: Increased vertical gap between aaryan and labels */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-8 font-mono text-[11px] sm:text-xs tracking-[0.25em] text-zinc-600 dark:text-zinc-400 mt-2 sm:mt-3 mb-10 sm:mb-12"
        >
          {words.map((item, idx) => (
            <span key={item.rest} className="flex items-center">
              <span className="font-bold text-zinc-950 dark:text-white">
                {item.highlight}
              </span>
              <span>{item.rest}</span>
              {idx < words.length - 1 && (
                <span className="ml-3 sm:ml-8 text-zinc-400 dark:text-zinc-600">•</span>
              )}
            </span>
          ))}
        </motion.div>

        {/* Tagline & Personal Context */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-xl mx-auto space-y-2 mb-10"
        >
          <p className="text-base sm:text-lg font-medium text-zinc-800 dark:text-zinc-200">
            A full-stack developer who needs to know how things work at scale.
          </p>
          <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
            Third-year Computer Engineering student at TCET Mumbai. Crafting scalable architectures, low-latency APIs, and seamless digital products.
          </p>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium bg-zinc-900 text-white dark:bg-white dark:text-black hover:opacity-90 transition-all shadow-sm"
          >
            Explore Projects
            <ArrowDown size={14} />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium border border-black/10 dark:border-white/15 text-zinc-800 dark:text-zinc-200 hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
          >
            <Send size={14} className="text-sky-500" />
            Let's Talk
          </a>

          <a
            href="/aaryan_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-medium border border-black/10 dark:border-white/15 text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
          >
            <FileText size={14} />
            Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}
