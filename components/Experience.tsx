"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useScroll,
  useSpring,
  useTransform,
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

export default function Experience() {
  const timelineRef = useRef<HTMLDivElement>(null);

  const [selectedProject, setSelectedProject] = useState<number | null>(
    null
  );

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 65%", "end 45%"],
  });

  /*
   * This makes the scrolling movement smooth.
   */
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 25,
    mass: 0.55,
  });

  /*
   * The circle moves down the timeline as the page scrolls.
   * It stops before the ending card.
   */
  const sliderPosition = useTransform(
    smoothProgress,
    [0, 1],
    ["0%", "calc(100% - 130px)"]
  );

  const scrollToProject = (index: number) => {
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
        className="section-wrap relative w-full overflow-hidden px-4 py-24 sm:px-6 lg:px-8"
      >
        {/* Background pink light */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-[-180px] top-[12%] h-[430px] w-[430px] rounded-full bg-pink-500/10 blur-[150px]"
        />

        {/* Background purple light */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-[8%] right-[-180px] h-[450px] w-[450px] rounded-full bg-violet-500/10 blur-[160px]"
        />

        <div className="relative z-10 mx-auto max-w-7xl">
          {/* Section header */}
          <header className="mx-auto max-w-3xl text-center">
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.5,
              }}
              transition={{
                duration: 0.5,
              }}
              className="mx-auto inline-flex items-center gap-3 rounded-full border border-pink-300/30 bg-pink-500/5 px-4 py-2 backdrop-blur-xl dark:border-pink-400/15"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-pink-400 opacity-60" />

                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-pink-500" />
              </span>

              <span className="font-mono text-xs font-medium uppercase tracking-[0.28em] text-pink-600 dark:text-pink-300">
                04 / Project Archive
              </span>
            </motion.div>

            <motion.h2
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.5,
              }}
              transition={{
                duration: 0.6,
                delay: 0.05,
              }}
              className="mt-6 text-4xl font-black tracking-[-0.05em] text-zinc-900 sm:text-5xl lg:text-6xl dark:text-white"
            >
              From Ideas to{" "}
              <span className="bg-gradient-to-r from-pink-500 via-fuchsia-500 to-violet-500 bg-clip-text text-transparent">
                Real Projects
              </span>
            </motion.h2>

            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.5,
              }}
              transition={{
                duration: 0.6,
                delay: 0.1,
              }}
              className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-zinc-600 sm:text-base dark:text-zinc-400"
            >
              Every project represents a stage of my learning journey—from
              school activities to building my personal portfolio.
            </motion.p>
          </header>

          {/* Year navigation */}
          <motion.nav
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.5,
              delay: 0.15,
            }}
            className="mx-auto mt-10 flex max-w-2xl items-center justify-center gap-3 overflow-x-auto rounded-2xl border border-zinc-200/70 bg-white/40 p-3 shadow-lg shadow-black/5 backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.035]"
          >
            {experience.map((item, index) => (
              <button
                key={`${item.date}-${item.title}`}
                type="button"
                onClick={() => scrollToProject(index)}
                className="shrink-0 rounded-xl border border-transparent px-5 py-3 font-mono text-xs font-semibold text-zinc-500 transition-all duration-300 hover:border-pink-400/30 hover:bg-pink-500/10 hover:text-pink-600 dark:text-zinc-400 dark:hover:text-pink-300"
              >
                {item.date}
              </button>
            ))}
          </motion.nav>

          {/* Timeline */}
          <div
            ref={timelineRef}
            className="relative mx-auto mt-20 max-w-6xl"
          >
            {/* Static timeline */}
            <div
              aria-hidden="true"
              className="absolute bottom-[130px] left-[20px] top-0 w-[2px] bg-zinc-200 md:left-1/2 dark:bg-white/10"
            />

            {/* Pink progress line */}
            <motion.div
              aria-hidden="true"
              style={{
                scaleY: smoothProgress,
              }}
              className="absolute bottom-[130px] left-[20px] top-0 z-10 w-[2px] origin-top bg-gradient-to-b from-pink-500 via-fuchsia-500 to-violet-500 shadow-[0_0_18px_rgba(236,72,153,0.7)] md:left-1/2"
            />

            {/* Scroll-following circle */}
            <motion.div
              aria-hidden="true"
              style={{
                top: sliderPosition,
              }}
              className="pointer-events-none absolute left-[5px] z-40 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border-2 border-pink-400 bg-zinc-950 shadow-[0_0_0_6px_rgba(236,72,153,0.12),0_0_30px_rgba(236,72,153,0.75)] md:left-[calc(50%-15px)]"
            >
              <motion.span
                animate={{
                  scale: [0.75, 1.15, 0.75],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 1.7,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="h-3 w-3 rounded-full bg-pink-500 shadow-[0_0_15px_rgba(236,72,153,1)]"
              />
            </motion.div>

            {/* Project cards */}
            <div className="space-y-12 md:space-y-16">
              {experience.map((item, index) => {
                const isLeft = index % 2 === 0;
                const Icon =
                  projectIcons[index % projectIcons.length];

                return (
                  <motion.article
                    id={`journey-project-${index}`}
                    key={`${item.date}-${item.title}`}
                    initial={{
                      opacity: 0,
                      x: isLeft ? -60 : 60,
                      y: 40,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.2,
                    }}
                    transition={{
                      duration: 0.7,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="relative pl-14 md:grid md:grid-cols-2 md:pl-0"
                  >
                    {/* Year information */}
                    <div
                      className={`hidden items-center md:flex ${
                        isLeft
                          ? "col-start-2 justify-start pl-16"
                          : "col-start-1 row-start-1 justify-end pr-16 text-right"
                      }`}
                    >
                      <div>
                        <div
                          className={`flex items-center gap-3 ${
                            isLeft
                              ? "justify-start"
                              : "justify-end"
                          }`}
                        >
                          <FiCalendar className="text-pink-500" />

                          <p className="font-mono text-xs uppercase tracking-[0.25em] text-pink-500 dark:text-pink-300">
                            Created in
                          </p>
                        </div>

                        <p className="mt-2 text-6xl font-black tracking-[-0.08em] text-zinc-900 dark:text-white">
                          {item.date}
                        </p>

                        <p className="mt-3 max-w-[260px] text-xs font-medium uppercase leading-5 tracking-[0.16em] text-zinc-500">
                          {item.organization}
                        </p>
                      </div>
                    </div>

                    {/* Clickable project card */}
                    <motion.button
                      type="button"
                      onClick={() => setSelectedProject(index)}
                      whileHover={{
                        y: -8,
                        scale: 1.01,
                      }}
                      whileTap={{
                        scale: 0.99,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 160,
                        damping: 18,
                      }}
                      className={`
                        group
                        relative
                        w-full
                        cursor-pointer
                        text-left
                        md:w-[calc(100%-4rem)]
                        ${
                          isLeft
                            ? "md:col-start-1 md:mr-16 md:justify-self-end"
                            : "md:col-start-2 md:ml-16 md:justify-self-start"
                        }
                      `}
                    >
                      <div className="relative overflow-hidden rounded-[2rem] border border-zinc-200/80 bg-white/80 p-6 shadow-xl shadow-black/5 backdrop-blur-xl transition-all duration-500 hover:border-pink-400/40 hover:shadow-[0_25px_70px_rgba(236,72,153,0.13)] sm:p-8 dark:border-white/10 dark:bg-[#0b0b10]/90">
                        {/* Card glow */}
                        <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-pink-500/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                        {/* Card header */}
                        <div className="relative z-10 flex items-start justify-between gap-4">
                          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-zinc-200 bg-zinc-100 text-2xl text-pink-500 transition-all duration-300 group-hover:border-pink-500 group-hover:bg-pink-500 group-hover:text-white group-hover:shadow-lg group-hover:shadow-pink-500/30 dark:border-white/10 dark:bg-white/5 dark:text-pink-300">
                            <Icon />
                          </div>

                          <span className="inline-flex items-center gap-2 rounded-full border border-zinc-200 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-zinc-500 transition-all group-hover:border-pink-400/40 group-hover:text-pink-500 dark:border-white/10 dark:text-zinc-400">
                            View project
                            <FiArrowUpRight />
                          </span>
                        </div>

                        {/* Mobile year */}
                        <div className="relative z-10 mt-5 flex items-start gap-2 text-xs font-medium uppercase leading-5 tracking-[0.15em] text-zinc-500 md:hidden">
                          <FiCalendar className="mt-0.5 shrink-0 text-pink-500" />

                          <span>
                            {item.date} • {item.organization}
                          </span>
                        </div>

                        {/* Project title */}
                        <h3 className="relative z-10 mt-6 text-2xl font-black tracking-[-0.03em] text-zinc-900 sm:text-3xl dark:text-white">
                          {item.title}
                        </h3>

                        {/* Project description */}
                        <p className="relative z-10 mt-4 text-sm leading-7 text-zinc-600 sm:text-base dark:text-zinc-400">
                          {item.description}
                        </p>

                        {/* Technologies */}
                        {item.technologies &&
                          item.technologies.length > 0 && (
                            <div className="relative z-10 mt-6 flex flex-wrap gap-2 border-t border-zinc-200/70 pt-5 dark:border-white/10">
                              {item.technologies.map((technology) => (
                                <span
                                  key={technology}
                                  className="rounded-full border border-pink-300/30 bg-pink-500/5 px-3 py-1.5 text-xs font-medium text-zinc-700 dark:border-pink-400/15 dark:bg-white/5 dark:text-zinc-400"
                                >
                                  {technology}
                                </span>
                              ))}
                            </div>
                          )}

                        {/* Card footer */}
                        <div className="relative z-10 mt-7 flex items-center gap-4">
                          <div className="h-px flex-1 bg-gradient-to-r from-pink-500/50 to-transparent" />

                          <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-zinc-400 dark:text-zinc-600">
                            Built by Mariah
                          </span>
                        </div>
                      </div>
                    </motion.button>
                  </motion.article>
                );
              })}
            </div>

            {/* Ending card */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
              }}
              className="relative z-30 mx-auto mt-16 flex w-fit flex-col items-center gap-3 rounded-2xl border border-pink-300/30 bg-white/70 px-7 py-5 text-center shadow-xl shadow-pink-500/10 backdrop-blur-xl dark:border-pink-400/15 dark:bg-white/[0.05]"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-500 text-white shadow-lg shadow-pink-500/30">
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
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project details modal */}
      <AnimatePresence>
        {selectedProject !== null &&
          projects[selectedProject] && (
            <ProjectDetails
              projectIndex={selectedProject}
              onClose={() => setSelectedProject(null)}
            />
          )}
      </AnimatePresence>
    </>
  );
}

type ProjectDetailsProps = {
  projectIndex: number;
  onClose: () => void;
};

function ProjectDetails({
  projectIndex,
  onClose,
}: ProjectDetailsProps) {
  const project = projects[projectIndex];
  const timelineItem = experience[projectIndex];

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/80 p-4 backdrop-blur-xl sm:p-8"
    >
      <motion.div
        initial={{
          opacity: 0,
          y: 50,
          scale: 0.94,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        exit={{
          opacity: 0,
          y: 30,
          scale: 0.96,
        }}
        transition={{
          type: "spring",
          stiffness: 180,
          damping: 22,
        }}
        onClick={(event) => event.stopPropagation()}
        className="relative my-auto w-full max-w-5xl overflow-hidden rounded-[2rem] border border-white/10 bg-white shadow-[0_40px_120px_rgba(0,0,0,0.5)] dark:bg-[#0a0a0f]"
      >
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close project details"
          className="absolute right-4 top-4 z-30 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/50 text-xl text-white backdrop-blur-md transition-all hover:rotate-90 hover:border-pink-400 hover:bg-pink-500"
        >
          <FiX />
        </button>

        <div className="grid lg:grid-cols-[1.1fr_.9fr]">
          {/* Project image */}
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
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-pink-300">
                {timelineItem?.date} • Project Preview
              </p>

              <h3 className="mt-3 text-3xl font-black text-white sm:text-4xl">
                {project.title}
              </h3>
            </div>
          </div>

          {/* Project information */}
          <div className="flex flex-col justify-center p-6 sm:p-10">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-pink-500">
              Project Details
            </p>

            <h3 className="mt-4 text-3xl font-black tracking-tight text-zinc-900 dark:text-white">
              {project.title}
            </h3>

            {timelineItem && (
              <div className="mt-4 flex items-start gap-2 text-sm text-zinc-500">
                <FiCalendar className="mt-0.5 shrink-0 text-pink-500" />

                <span>
                  {timelineItem.date} • {timelineItem.organization}
                </span>
              </div>
            )}

            <p className="mt-6 text-sm leading-7 text-zinc-600 sm:text-base dark:text-zinc-400">
              {project.description}
            </p>

            {/* Technologies */}
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

            {/* Links */}
            <div className="mt-9 flex flex-wrap gap-3">
              {project.demo !== "#" && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-pink-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-pink-500/25 transition-all hover:-translate-y-1 hover:bg-pink-600"
                >
                  <FiExternalLink />
                  Open Live Project
                </a>
              )}

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-5 py-3 text-sm font-semibold text-zinc-700 transition-all hover:-translate-y-1 hover:border-pink-400 hover:text-pink-600 dark:border-white/15 dark:text-zinc-300 dark:hover:text-pink-300"
              >
                <FiGithub />
                View GitHub
              </a>
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