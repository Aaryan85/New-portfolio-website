"use client";

import React from "react";
import { Trophy, Award, Users } from "lucide-react";

interface Achievement {
  title: string;
  organization: string;
  description: string;
  badge: string;
  icon: React.ElementType;
}

const achievements: Achievement[] = [
  {
    title: "Top 3 Winner",
    organization: "Recode Hackathon — MPSTME ACM",
    description:
      "Secured podium position among competing collegiate engineering teams for architecting an impactful, high-throughput web solution under strict 24-hour hackathon constraints.",
    badge: "Podium Finish",
    icon: Trophy,
  },
  {
    title: "Hackathon Finalist (Top 15)",
    organization: "ACM MPSTME Inter-College Hackathon",
    description:
      "Ranked in the top 15 finalists out of 300+ participating engineering teams with an innovative full-stack software application.",
    badge: "Top 15 / 300+ Teams",
    icon: Award,
  },
  {
    title: "Technical Team Member",
    organization: "Computer Society of India (CSI TCET)",
    description:
      "Active core technical team member at TCET. Orchestrating coding hackathons, leading technical workshops, and mentoring junior engineering students.",
    badge: "Community & Leadership",
    icon: Users,
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-14">
        <p className="font-mono text-xs sm:text-sm uppercase tracking-widest text-zinc-500 dark:text-zinc-400 mb-3">
          HONORS & RECOGNITION
        </p>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900 dark:text-white">
          Achievements & Leadership
        </h2>
        <p className="mt-3 text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-2xl">
          Competitive hackathon milestones and collegiate leadership within the engineering community.
        </p>
      </div>

      {/* Grid — Refined Minimalist Palette */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {achievements.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className="p-6 sm:p-7 rounded-2xl bg-zinc-50 dark:bg-zinc-950/40 border border-zinc-200 dark:border-zinc-800/80 hover:border-zinc-400 dark:hover:border-zinc-700 transition-all duration-300 flex flex-col justify-between shadow-2xs"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-zinc-700 dark:text-zinc-300 shadow-2xs">
                    <Icon size={18} className="text-zinc-800 dark:text-zinc-200" />
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-zinc-200/60 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 border border-zinc-300 dark:border-zinc-800">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-500 inline-block mr-1.5" />
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400 mt-1 mb-3">
                  {item.organization}
                </p>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
