"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-black/10 dark:border-white/10 py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-32">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <span className="font-mono text-sm font-bold tracking-tight text-zinc-900 dark:text-white">
            AARYAN YADAV
          </span>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
            Engineered with Next.js, TypeScript & Tailwind CSS. Designed in Mumbai, India.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <p className="font-mono text-xs text-zinc-400 dark:text-zinc-500">
            © {new Date().getFullYear()} All rights reserved.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            className="w-9 h-9 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white hover:border-black/30 dark:hover:border-white/30 transition-colors"
          >
            <ArrowUp size={15} />
          </button>
        </div>
      </div>
    </footer>
  );
}

