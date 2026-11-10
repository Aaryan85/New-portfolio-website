"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, ArrowUpRight } from "lucide-react";
import { useTheme } from "../theme/ThemeProvider";

export default function FloatingNav() {
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [activeSection, setActiveSection] = useState<string>("home");
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 100);

      if (!isHome) return;

      const sections = ["home", "about", "approach", "skills", "projects", "achievements", "contact"];
      const scrollPos = scrollY + 280;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, sectionId?: string) => {
    if (isHome && sectionId) {
      e.preventDefault();
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <aside
      aria-label="Floating quick navigation"
      className="fixed bottom-6 inset-x-0 z-50 flex flex-col items-center pointer-events-none px-4"
    >
      {/* Sliding Top Role Badge — Animates and disappears as user scrolls */}
      <AnimatePresence>
        {!isScrolled && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 14, scale: 0.9 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="pointer-events-auto mb-2 text-[10px] sm:text-[11px] font-mono tracking-widest uppercase px-3 py-1 rounded-full bg-black/70 dark:bg-zinc-900/80 backdrop-blur-md border border-black/10 dark:border-white/10 text-zinc-300 dark:text-zinc-400 select-none shadow-sm"
          >
            OPEN TO INTERNSHIPS <span className="text-sky-400 mx-1">•</span> TCET MUMBAI
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Pill Nav */}
      <nav
        aria-label="Main Floating Menu"
        className="pointer-events-auto flex items-center gap-1 sm:gap-2 px-3 py-2 sm:px-4 sm:py-2.5 rounded-full bg-white/90 dark:bg-zinc-950/90 backdrop-blur-xl border border-black/10 dark:border-white/15 shadow-[0_10px_35px_rgba(0,0,0,0.15)] dark:shadow-[0_10px_40px_rgba(0,0,0,0.7)] transition-all duration-300"
      >
        {/* Minimalist AY. Brand Logo */}
        <Link
          href="/"
          onClick={(e) => handleNavClick(e, "/", "home")}
          className="flex items-center justify-center font-bold font-mono text-sm px-2 py-1 text-black dark:text-white hover:text-sky-500 dark:hover:text-sky-400 transition-colors"
          title="Aaryan Yadav Portfolio"
        >
          AY<span className="text-sky-500 dark:text-sky-400">.</span>
        </Link>

        <span className="w-px h-4 bg-black/15 dark:bg-white/15" />

        {/* Navigation Links */}
        <div className="flex items-center gap-0.5 sm:gap-1 text-xs sm:text-sm font-medium">
          <Link
            href="/#projects"
            onClick={(e) => handleNavClick(e, "/#projects", "projects")}
            className={`relative px-2.5 sm:px-3 py-1 rounded-full transition-colors ${
              (isHome && activeSection === "projects") || pathname.startsWith("/projects")
                ? "text-black dark:text-white font-semibold bg-black/5 dark:bg-white/10"
                : "text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white"
            }`}
          >
            Work
          </Link>

          <Link
            href="/#approach"
            onClick={(e) => handleNavClick(e, "/#approach", "approach")}
            className={`relative px-2.5 sm:px-3 py-1 rounded-full transition-colors ${
              isHome && activeSection === "approach"
                ? "text-black dark:text-white font-semibold bg-black/5 dark:bg-white/10"
                : "text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white"
            }`}
          >
            Approach
          </Link>

          <Link
            href="/#about"
            onClick={(e) => handleNavClick(e, "/#about", "about")}
            className={`relative px-2.5 sm:px-3 py-1 rounded-full transition-colors ${
              isHome && activeSection === "about"
                ? "text-black dark:text-white font-semibold bg-black/5 dark:bg-white/10"
                : "text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white"
            }`}
          >
            About
          </Link>

          <Link
            href="/#skills"
            onClick={(e) => handleNavClick(e, "/#skills", "skills")}
            className={`relative px-2.5 sm:px-3 py-1 rounded-full transition-colors ${
              isHome && activeSection === "skills"
                ? "text-black dark:text-white font-semibold bg-black/5 dark:bg-white/10"
                : "text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white"
            }`}
          >
            Skills
          </Link>

          <Link
            href="/#contact"
            onClick={(e) => handleNavClick(e, "/#contact", "contact")}
            className={`relative px-2.5 sm:px-3 py-1 rounded-full transition-colors ${
              isHome && activeSection === "contact"
                ? "text-black dark:text-white font-semibold bg-black/5 dark:bg-white/10"
                : "text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white"
            }`}
          >
            Contact
          </Link>

          <a
            href="/aaryan_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-0.5 px-2.5 sm:px-3 py-1 text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors"
          >
            Resume
            <ArrowUpRight size={13} className="opacity-70" />
          </a>
        </div>

        <span className="w-px h-4 bg-black/15 dark:bg-white/15" />

        {/* Theme Toggle Button */}
        <button
          type="button"
          onClick={toggleTheme}
          suppressHydrationWarning
          aria-label={
            mounted
              ? theme === "dark"
                ? "Switch to light theme"
                : "Switch to dark theme"
              : "Toggle theme"
          }
          className="p-1.5 sm:p-2 rounded-full text-zinc-600 dark:text-zinc-300 hover:text-sky-500 dark:hover:text-sky-400 hover:bg-black/5 dark:hover:bg-white/10 transition-colors focus:outline-none focus:ring-1 focus:ring-sky-400 min-w-[28px] min-h-[28px] flex items-center justify-center"
        >
          {mounted ? (
            theme === "dark" ? (
              <Sun
                size={15}
                className="transition-transform duration-300 hover:rotate-45 text-amber-300"
              />
            ) : (
              <Moon
                size={15}
                className="transition-transform duration-300 hover:-rotate-12 text-zinc-700"
              />
            )
          ) : (
            <span className="w-3.5 h-3.5 block" />
          )}
        </button>
      </nav>
    </aside>
  );
}
