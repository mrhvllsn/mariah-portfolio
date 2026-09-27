"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useScroll,
  useSpring,
} from "framer-motion";
import {
  FiArrowUpRight,
  FiBookOpen,
  FiBox,
  FiCalendar,
  FiCode,
  FiCpu,
  FiExternalLink,
  FiGithub,
  FiX,
} from "react-icons/fi";
import { experience, projects } from "@/data/portfolio";

const projectIcons = [FiCode, FiCpu, FiBookOpen, FiBox];

// Pair each timeline item with its project before removing ReadEm.
const journey = experience
  .map((item, sourceIndex) => ({
    item,
    project: projects[sourceIndex],
  }))
  .filter(
    ({ item, project }) =>
      !/read\s*em/i.test(item.title) &&
      !/read\s*em/i.test(project?.title ?? ""),
  );

type JourneyEntry = (typeof journey)[number];

export default function Experience() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [activeYearIndex, setActiveYearIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 65%", "end 45%"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 25,
    mass: 0.55,
  });

  useEffect(() => {
    const cards = journey
      .map((_, index) =>
        document.getElementById(`journey-project-${index}`),
      )
      .filter((card): card is HTMLElement => card !== null);

    if (!cards.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              Math.abs(
                a.boundingClientRect.top - window.innerHeight * 0.4,
              ) -
              Math.abs(
                b.boundingClientRect.top - window.innerHeight * 0.4,
              ),
          );

        if (visible.length) {
          const index = cards.indexOf(
            visible[0].target as HTMLElement,
          );

          if (index !== -1) {
            setActiveYearIndex(index);
          }
        }
      },
      {
        rootMargin: "-25% 0px -45% 0px",
        threshold: 0,
      },
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const scrollToProject = (index: number) => {
    setActiveYearIndex(index);

    document
      .getElementById(`journey-project-${index}`)
      ?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
  };

  return (
    <>
      <section
        id="experience"
        className="section-wrap relative w-full overflow-visible px-4 py-24 sm:px-6 lg:px-8"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-[12%] h-64 w-64 rounded-full bg-pink-500/10 blur-3xl"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-[8%] right-0 h-64 w-64 rounded-full bg-violet-500/10 blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl">
          <header className="mx-auto max-w-3xl text-center">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-pink-500 dark:text-pink-300">
              My Journey
            </p>

            <h2 className="mt-6 text-4xl font-black tracking-[-0.05em] text-zinc-900 sm:text-5xl lg:text-6xl dark:text-white">
              From Ideas to{" "}
              <span className="bg-gradient-to-r from-pink-500 via-fuchsia-500 to-violet-500 bg-clip-text text-transparent">
                Real Projects
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-zinc-600 sm:text-base dark:text-zinc-400">
              Every project represents a stage of my learning
              journey—from school activities to building my personal
              portfolio.
            </p>
          </header>

          {/* Year buttons */}
          <nav
            aria-label="Jump to project year"
            className="sticky top-24 z-40 mx-auto mt-10 flex max-w-2xl items-center justify-start gap-2 overflow-x-auto rounded-2xl border border-zinc-200/80 bg-white/95 p-2 shadow-lg dark:border-white/10 dark:bg-[#100816]/95 sm:justify-center"
          >
            {journey.map(({ item }, index) => (
              <button
                key={`${item.date}-${item.title}`}
                type="button"
                onClick={() => scrollToProject(index)}
                aria-label={`Go to ${item.title}, ${item.date}`}
                aria-current={
                  activeYearIndex === index ? "step" : undefined
                }
                className={`shrink-0 rounded-xl border px-4 py-2.5 font-mono text-sm font-bold transition-all duration-300 ${
                  activeYearIndex === index
                    ? "border-pink-400 bg-pink-500 text-white shadow-[0_0_12px_rgba(236,72,153,0.8),0_0_28px_rgba(236,72,153,0.5)]"
                    : "border-pink-200 bg-pink-50 text-pink-700 hover:bg-pink-100 dark:border-pink-400/25 dark:bg-pink-400/10 dark:text-pink-300 dark:hover:bg-pink-400/20"
                }`}
              >
                {item.date}
              </button>
            ))}
          </nav>

          {/* Timeline */}
          <div
            ref={timelineRef}
            className="relative mx-auto mt-16 max-w-6xl"
          >
            <div
              aria-hidden="true"
              className="absolute bottom-24 left-5 top-0 w-0.5 bg-zinc-200 md:left-1/2 dark:bg-white/10"
            />

            <motion.div
              aria-hidden="true"
              style={{ scaleY: smoothProgress }}
              className="absolute bottom-24 left-5 top-0 w-0.5 origin-top bg-gradient-to-b from-pink-500 via-fuchsia-500 to-violet-500 md:left-1/2"
            />

            <div className="space-y-12 md:space-y-16">
              {journey.map(({ item }, index) => {
                const isLeft = index % 2 === 0;
                const Icon =
                  projectIcons[index % projectIcons.length];

                return (
                  <article
                    id={`journey-project-${index}`}
                    key={`${item.date}-${item.title}`}
                    className="relative scroll-mt-40 pl-14 md:grid md:grid-cols-2 md:pl-0"
                  >
                    {/* Large year on desktop */}
                    <div
                      className={`hidden items-center md:flex ${
                        isLeft
                          ? "col-start-2 justify-start pl-16"
                          : "col-start-1 row-start-1 justify-end pr-16 text-right"
                      }`}
                    >
                      <div>
                        <div
                          className={`flex items-center gap-2 ${
                            isLeft
                              ? "justify-start"
                              : "justify-end"
                          }`}
                        >
                          <FiCalendar className="text-pink-500" />

                          <span className="font-mono text-xs uppercase tracking-[0.2em] text-pink-500 dark:text-pink-300">
                            Created in
                          </span>
                        </div>

                        <p className="mt-2 text-6xl font-black tracking-tight text-zinc-900 dark:text-white">
                          {item.date}
                        </p>

                        <p className="mt-3 max-w-[260px] text-xs font-medium uppercase leading-5 tracking-wider text-zinc-500">
                          {item.organization}
                        </p>
                      </div>
                    </div>

                    {/* Project card */}
                    <button
                      type="button"
                      onClick={() => setSelectedProject(index)}
                      className={`group relative w-full cursor-pointer text-left transition-transform duration-200 hover:-translate-y-1 md:w-[calc(100%-4rem)] ${
                        isLeft
                          ? "md:col-start-1 md:mr-16 md:justify-self-end"
                          : "md:col-start-2 md:ml-16 md:justify-self-start"
                      }`}
                    >
                      <div className="relative overflow-hidden rounded-[2rem] border border-zinc-200/80 bg-white/90 p-5 shadow-xl shadow-black/5 transition-colors hover:border-pink-400/50 sm:p-8 dark:border-white/10 dark:bg-[#0b0b10]/95">
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-zinc-200 bg-zinc-100 text-xl text-pink-500 sm:h-14 sm:w-14 dark:border-white/10 dark:bg-white/5 dark:text-pink-300">
                            <Icon />
                          </div>

                          <span className="inline-flex items-center gap-1 rounded-full border border-zinc-200 px-2.5 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-zinc-500 dark:border-white/10 dark:text-zinc-400">
                            View project
                            <FiArrowUpRight />
                          </span>
                        </div>

                        {/* Year stays visible on mobile */}
                        <div className="mt-5 flex flex-wrap items-center gap-2 md:hidden">
                          <span className="inline-flex items-center gap-1.5 rounded-lg bg-pink-500 px-3 py-1.5 font-mono text-base font-bold text-white">
                            <FiCalendar
                              aria-hidden="true"
                              size={14}
                            />
                            {item.date}
                          </span>

                          <span className="text-xs font-medium text-zinc-600 dark:text-zinc-400">
                            {item.organization}
                          </span>
                        </div>

                        <h3 className="mt-6 text-2xl font-black tracking-tight text-zinc-900 sm:text-3xl dark:text-white">
                          {item.title}
                        </h3>

                        <p className="mt-4 text-sm leading-7 text-zinc-600 sm:text-base dark:text-zinc-400">
                          {item.description}
                        </p>

                        {item.technologies &&
                          item.technologies.length > 0 && (
                            <div className="mt-6 flex flex-wrap gap-2 border-t border-zinc-200/70 pt-5 dark:border-white/10">
                              {item.technologies.map(
                                (technology) => (
                                  <span
                                    key={technology}
                                    className="rounded-full border border-pink-300/30 bg-pink-500/5 px-3 py-1.5 text-xs font-medium text-zinc-700 dark:border-pink-400/15 dark:bg-white/5 dark:text-zinc-300"
                                  >
                                    {technology}
                                  </span>
                                ),
                              )}
                            </div>
                          )}

                        <div className="mt-7 flex items-center gap-4">
                          <div className="h-px flex-1 bg-gradient-to-r from-pink-500/50 to-transparent" />

                          <span className="font-mono text-[9px] uppercase tracking-widest text-zinc-400">
                            Built by Mariah
                          </span>
                        </div>
                      </div>
                    </button>
                  </article>
                );
              })}
            </div>

            <div className="relative z-10 mx-auto mt-16 flex w-fit flex-col items-center gap-3 rounded-2xl border border-pink-300/30 bg-white/90 px-7 py-5 text-center shadow-lg dark:border-pink-400/15 dark:bg-[#0b0b10]/95">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-500 text-white">
                <FiArrowUpRight />
              </div>

              <div>
                <p className="text-sm font-semibold text-zinc-900 dark:text-white">
                  My journey continues
                </p>

                <p className="mt-1 text-xs text-zinc-500">
                  More projects coming soon
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedProject !== null &&
          journey[selectedProject]?.project && (
            <ProjectDetails
              entry={journey[selectedProject]}
              onClose={() => setSelectedProject(null)}
            />
          )}
      </AnimatePresence>
    </>
  );
}

function ProjectDetails({
  entry,
  onClose,
}: {
  entry: JourneyEntry;
  onClose: () => void;
}) {
  const { item, project } = entry;

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/80 p-4 sm:p-8"
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label={`${project.title} details`}
        initial={{ opacity: 0, y: 30, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.96 }}
        transition={{ duration: 0.25 }}
        onClick={(event) => event.stopPropagation()}
        className="relative my-auto w-full max-w-5xl overflow-hidden rounded-[2rem] border border-white/10 bg-white shadow-2xl dark:bg-[#0a0a0f]"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close project details"
          className="absolute right-4 top-4 z-30 flex h-11 w-11 items-center justify-center rounded-full bg-black/60 text-xl text-white transition-colors hover:bg-pink-500"
        >
          <FiX />
        </button>

        <div className="grid lg:grid-cols-[1.1fr_.9fr]">
          <div className="relative min-h-[260px] overflow-hidden bg-zinc-900 sm:min-h-[400px] lg:min-h-[590px]">
            <Image
              src={project.image}
              alt={`${project.title} preview`}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 55vw"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/20" />

            <div className="absolute bottom-6 left-6 right-6">
              <p className="font-mono text-xs uppercase tracking-widest text-pink-300">
                {item.date} • Project Preview
              </p>

              <h3 className="mt-3 text-3xl font-black text-white sm:text-4xl">
                {project.title}
              </h3>
            </div>
          </div>

          <div className="flex flex-col justify-center p-6 sm:p-10">
            <p className="font-mono text-xs uppercase tracking-widest text-pink-500">
              Project Details
            </p>

            <h3 className="mt-4 text-3xl font-black tracking-tight text-zinc-900 dark:text-white">
              {project.title}
            </h3>

            <div className="mt-4 flex items-start gap-2 text-sm text-zinc-500">
              <FiCalendar className="mt-0.5 shrink-0 text-pink-500" />
              <span>
                {item.date} • {item.organization}
              </span>
            </div>

            <p className="mt-6 text-sm leading-7 text-zinc-600 sm:text-base dark:text-zinc-400">
              {project.description}
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-pink-300/30 bg-pink-500/5 px-3 py-1.5 text-xs font-medium text-zinc-700 dark:border-pink-400/15 dark:bg-white/5 dark:text-zinc-300"
                >
                  {technology}
                </span>
              ))}
            </div>

            <div className="mt-9 flex flex-wrap gap-3">
              {project.demo && project.demo !== "#" && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-pink-500 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-pink-600"
                >
                  <FiExternalLink />
                  Open Live Project
                </a>
              )}

              {project.github && project.github !== "#" && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-5 py-3 text-sm font-semibold text-zinc-700 transition-colors hover:border-pink-400 hover:text-pink-600 dark:border-white/15 dark:text-zinc-300"
                >
                  <FiGithub />
                  View GitHub
                </a>
              )}
            </div>

            <button
              type="button"
              onClick={onClose}
              className="mt-8 text-left text-sm font-medium text-zinc-500 transition-colors hover:text-pink-500"
            >
              Close project details
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}