"use client";

import type { IconType } from "react-icons";
import { FiCode, FiLayers, FiPenTool, FiTool } from "react-icons/fi";
import {
  SiCss,
  SiFigma,
  SiFirebase,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

import { skills } from "@/data/portfolio";

const skillIcons: Record<string, IconType> = {
  React: SiReact,
  "Next.js": SiNextdotjs,
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  "Tailwind CSS": SiTailwindcss,
  HTML: SiHtml5,
  HTML5: SiHtml5,
  CSS: SiCss,
  CSS3: SiCss,
  "Node.js": SiNodedotjs,
  Node: SiNodedotjs,
  Python: SiPython,
  Git: SiGit,
  GitHub: SiGithub,
  Figma: SiFigma,
  Firebase: SiFirebase,
  MySQL: SiMysql,
};

const categoryIcons: Record<string, IconType> = {
  Frontend: SiReact,
  Backend: FiCode,
  Tools: FiTool,
  Design: FiPenTool,
};

const categoryDescriptions: Record<string, string> = {
  Frontend: "Building responsive and interactive user interfaces.",
  Backend: "Learning how application logic and data systems work.",
  Tools: "Tools that help me design, build, and improve my projects.",
  Design: "Creating clean and user-friendly digital experiences.",
};

const featuredTechnologies = [
  { name: "HTML", icon: SiHtml5, color: "text-orange-500" },
  { name: "CSS", icon: SiCss, color: "text-blue-500" },
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-500" },
  { name: "Figma", icon: SiFigma, color: "text-pink-500" },
  { name: "React", icon: SiReact, color: "text-cyan-500" },
  { name: "GitHub", icon: SiGithub, color: "text-zinc-800 dark:text-white" },
];

export default function Skills() {
  const skillCategories = Object.entries(skills);

  return (
    <section
      id="skills"
      className="relative overflow-hidden px-5 py-24 text-zinc-900 sm:px-8 lg:px-12 dark:text-white"
    >
      {/* Subtle section decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-20 h-64 w-64 -translate-x-1/2 rounded-full bg-pink-400/10 blur-3xl dark:bg-pink-500/10"
      />

      <div className="relative z-10 mx-auto w-full max-w-5xl">
        {/* Heading */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-9 bg-pink-500" />
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-pink-500 dark:text-pink-400">
              02 / Skills
            </p>
            <span className="h-px w-9 bg-pink-500" />
          </div>

          <h2 className="mt-4 font-serif text-5xl font-bold italic tracking-tight sm:text-6xl lg:text-7xl">
            My{" "}
            <span className="bg-gradient-to-r from-pink-600 via-pink-400 to-purple-500 bg-clip-text text-transparent">
              Tech Stack
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-zinc-600 sm:text-base dark:text-zinc-400">
            Technologies and tools I use while learning to create responsive,
            modern, and user-friendly digital experiences.
          </p>
        </div>

        {/* New design: organized technology strip */}
        <div className="mx-auto mt-12 max-w-4xl rounded-3xl border border-pink-200/70 bg-white/70 p-5 shadow-sm sm:p-7 dark:border-white/10 dark:bg-zinc-900/70">
          <p className="mb-5 text-center font-mono text-[11px] uppercase tracking-[0.25em] text-pink-600 dark:text-pink-400">
            Tools I enjoy using
          </p>

          <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
            {featuredTechnologies.map((technology) => {
              const Icon = technology.icon;

              return (
                <div
                  key={technology.name}
                  className="flex min-h-24 flex-col items-center justify-center gap-2 rounded-2xl border border-zinc-200/80 bg-white/80 p-3 text-center transition-transform duration-200 hover:-translate-y-1 dark:border-white/10 dark:bg-white/5"
                >
                  <Icon
                    aria-hidden="true"
                    className={`text-3xl ${technology.color}`}
                  />
                  <span className="text-xs font-medium text-zinc-700 dark:text-zinc-200">
                    {technology.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Skill categories */}
        <div className="mx-auto mt-8 grid max-w-4xl gap-4 md:grid-cols-2">
          {skillCategories.map(([category, items]) => {
            const CategoryIcon = categoryIcons[category] ?? FiLayers;

            return (
              <div
                key={category}
                className="rounded-3xl border border-zinc-200 bg-white/75 p-6 shadow-sm transition-transform duration-200 hover:-translate-y-1 dark:border-white/10 dark:bg-zinc-900/70 dark:shadow-none"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-pink-100 text-pink-600 dark:bg-pink-500/10 dark:text-pink-400">
                    <CategoryIcon aria-hidden="true" className="text-xl" />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold">{category}</h3>
                    <p className="mt-1 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                      {categoryDescriptions[category] ??
                        "Skills and tools I use in my projects."}
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2 border-t border-zinc-200 pt-5 dark:border-white/10">
                  {items.map((skill) => {
                    const SkillIcon = skillIcons[skill] ?? FiCode;

                    return (
                      <span
                        key={skill}
                        className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-2 text-xs font-medium text-zinc-700 dark:border-white/10 dark:bg-white/5 dark:text-zinc-200"
                      >
                        <SkillIcon aria-hidden="true" className="text-pink-500" />
                        {skill}
                      </span>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom note */}
   
      </div>
    </section>
  );
}