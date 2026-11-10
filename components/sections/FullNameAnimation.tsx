"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function FullNameAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [isCondensed, setIsCondensed] = useState(false);

  const lastScrollYRef = useRef(0);
  const scrollDirectionRef = useRef<"down" | "up">("down");
  const animationTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Track global scroll direction
  useEffect(() => {
    lastScrollYRef.current = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;
      const diff = currentY - lastScrollYRef.current;
      if (Math.abs(diff) > 4) {
        scrollDirectionRef.current = diff > 0 ? "down" : "up";
        lastScrollYRef.current = currentY;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // IntersectionObserver to detect entering the section in either scroll direction
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          if (animationTimerRef.current) {
            clearTimeout(animationTimerRef.current);
          }

          const direction = scrollDirectionRef.current;

          if (shouldReduceMotion) {
            setIsCondensed(direction === "down");
            return;
          }

          if (direction === "down") {
            // Scrolling DOWN into section: start with AARYAN YADAV, then smoothly morph into AY.
            setIsCondensed(false);
            animationTimerRef.current = setTimeout(() => {
              setIsCondensed(true);
            }, 600);
          } else {
            // Scrolling UP into section: start with AY., then smoothly morph into AARYAN YADAV
            setIsCondensed(true);
            animationTimerRef.current = setTimeout(() => {
              setIsCondensed(false);
            }, 450);
          }
        }
      },
      {
        threshold: 0.35,
      }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      if (animationTimerRef.current) {
        clearTimeout(animationTimerRef.current);
      }
    };
  }, [shouldReduceMotion]);

  return (
    <section
      id="fullname"
      ref={containerRef}
      className="relative w-full py-24 sm:py-32 px-6 sm:px-12 flex flex-col items-center justify-center border-t border-neutral-200 dark:border-neutral-800/80 overflow-hidden bg-neutral-50/50 dark:bg-black/50"
    >
      {/* Background ambient glow */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-30 dark:opacity-20">
        <div className="w-[500px] h-[250px] bg-neutral-300 dark:bg-neutral-800 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-6xl w-full mx-auto text-center flex flex-col items-center">
        {/* Subtle Identity Badge */}
        <div className="mb-8 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-300 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md text-[11px] font-mono uppercase tracking-widest text-neutral-600 dark:text-neutral-400 select-none">
          <span className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-pulse" />
          <span>SIGNATURE IDENTITY</span>
        </div>

        {/* Morphing Typography responding to scroll direction */}
        <div className="py-4 px-2 select-none">
          <div className="flex items-center justify-center text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter text-neutral-900 dark:text-white transition-colors duration-300">
            {/* First Initial / 'A' */}
            <span className="inline-block transition-transform duration-300">A</span>

            <AnimatePresence initial={false}>
              {!isCondensed && (
                <motion.span
                  key="aryan"
                  initial={{ opacity: 0, width: 0, filter: "blur(4px)" }}
                  animate={{ opacity: 1, width: "auto", filter: "blur(0px)" }}
                  exit={{ opacity: 0, width: 0, filter: "blur(4px)" }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden whitespace-nowrap inline-block text-neutral-400 dark:text-neutral-500 font-extrabold"
                >
                  ARYAN
                </motion.span>
              )}
            </AnimatePresence>

            <span className="inline-block mx-1 sm:mx-3 text-neutral-300 dark:text-neutral-700">
              {isCondensed ? "" : " "}
            </span>

            {/* Second Initial / 'Y' */}
            <span className="inline-block transition-transform duration-300">Y</span>

            <AnimatePresence initial={false}>
              {!isCondensed ? (
                <motion.span
                  key="adav"
                  initial={{ opacity: 0, width: 0, filter: "blur(4px)" }}
                  animate={{ opacity: 1, width: "auto", filter: "blur(0px)" }}
                  exit={{ opacity: 0, width: 0, filter: "blur(4px)" }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden whitespace-nowrap inline-block text-neutral-400 dark:text-neutral-500 font-extrabold"
                >
                  ADAV
                </motion.span>
              ) : (
                <motion.span
                  key="dot"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{ duration: 0.25 }}
                  className="inline-block text-sky-500"
                >
                  .
                </motion.span>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Subline */}
        <p className="mt-6 text-sm sm:text-base text-neutral-500 dark:text-neutral-400 font-mono tracking-wider uppercase">
          FULL-STACK DEVELOPER • TCET MUMBAI
        </p>

        {/* Smooth scroll back to top button */}
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="mt-8 inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors cursor-pointer py-1.5 px-3 rounded-full border border-transparent hover:border-neutral-300 dark:hover:border-neutral-800"
        >
          <span>Back to top</span>
          <ArrowUpRight className="w-3.5 h-3.5 -rotate-45" />
        </button>
      </div>
    </section>
  );
}
