"use client";

import React from "react";
import IntroAnimation from "@/components/animations/IntroAnimation";
import { useIntro } from "@/components/animations/IntroProvider";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import MyApproach from "@/components/sections/MyApproach";
import Skills from "@/components/sections/Skills";
import ProjectShowcase from "@/components/sections/ProjectShowcase";
import Achievements from "@/components/sections/Achievements";
import Contact from "@/components/sections/Contact";
import FullNameAnimation from "@/components/sections/FullNameAnimation";
import Footer from "@/components/layout/Footer";

export default function HomePage() {
  const { hasCompletedIntro, completeIntro } = useIntro();

  return (
    <div className="relative min-h-screen bg-white dark:bg-black overflow-x-hidden selection:bg-sky-500/20">
      {/* Original Intro Loader: Appears on fresh load and hard refresh, never during client navigation */}
      {!hasCompletedIntro && (
        <IntroAnimation onFinish={completeIntro} />
      )}

      {/* Main Portfolio Content */}
      <main className="relative z-10">
        <Hero />
        <About />
        <MyApproach />
        <Skills />
        <ProjectShowcase />
        <Achievements />
        <Contact />
        <FullNameAnimation />
        <Footer />
      </main>
    </div>
  );
}
