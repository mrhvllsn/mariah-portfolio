"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  FiGithub,
  FiExternalLink,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import { projects } from "@/data/portfolio";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(0);

  if (!projects.length) {
    return null;
  }

  const project = projects[selectedProject];

  const goToPrevious = () => {
    setSelectedProject((current) =>
      current === 0 ? projects.length - 1 : current - 1
    );
  };

  const goToNext = () => {
    setSelectedProject((current) =>
      current === projects.length - 1 ? 0 : current + 1
    );
  };

  const selectProject = (index: number) => {
    setSelectedProject(index);

    document
      .getElementById("featured-project")
      ?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <section
      id="projects"
      className="section-wrap px-4 py-20 sm:px-6 lg:px-8"
    >
      {/* Section heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.5 }}
        className="mx-auto mb-10 max-w-2xl text-center"
      >
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-pink-500 dark:text-pink-300">
          03 / PROJECTS
        </p>

        <h2 className="text-4xl font-semibold tracking-tight text-zinc-900 dark:text-white sm:text-5xl">
          Projects I&apos;m{" "}
          <span className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
            proud of.
          </span>
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-zinc-600 dark:text-zinc-400 sm:text-base">
          A collection of projects that showcase my skills in development,
          design, responsive interfaces, and modern web technologies.
        </p>
      </motion.div>

      {/* Featured project */}
      <motion.div
        id="featured-project"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mx-auto w-full max-w-5xl overflow-hidden rounded-[2rem]
                   border border-pink-300/20 bg-white/40 p-4 shadow-xl
                   shadow-pink-950/5 backdrop-blur-xl
                   dark:border-pink-400/10 dark:bg-white/[0.04]
                   sm:p-6 lg:p-8"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 10, scale: 0.985 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.985 }}
            transition={{ duration: 0.45 }}
          >
            {/* Featured image */}
            <div
              className="relative mx-auto aspect-[16/9] w-full max-w-3xl
                         overflow-hidden rounded-[1.5rem] border
                         border-pink-300/20 bg-zinc-100 shadow-lg
                         shadow-pink-950/10 dark:border-pink-400/10
                         dark:bg-zinc-900"
            >
              <Image
                src={project.image}
                alt={`${project.title} preview`}
                fill
                priority={selectedProject === 0}
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 768px"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-white/10" />

              <div className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/30 px-3 py-1.5 text-xs font-medium tracking-widest text-white backdrop-blur-md">
                {String(selectedProject + 1).padStart(2, "0")} /{" "}
                {String(projects.length).padStart(2, "0")}
              </div>
            </div>

            {/* Featured information */}
            <div className="mx-auto max-w-3xl pt-6">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                <div className="min-w-0">
                  <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-pink-500 dark:text-pink-300">
                    Featured Project
                  </p>

                  <h3 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-white sm:text-3xl">
                    {project.title}
                  </h3>
                </div>

                {/* Project links */}
                <div className="flex shrink-0 items-center gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${project.title} GitHub repository`}
                    className="inline-flex h-10 w-10 items-center justify-center
                               rounded-full border border-pink-300/30
                               bg-pink-500/5 text-zinc-700 transition-all
                               duration-200 hover:border-pink-400/50
                               hover:bg-pink-500/10 hover:text-pink-600
                               dark:border-white/10 dark:bg-white/5
                               dark:text-zinc-300 dark:hover:border-pink-400/30
                               dark:hover:bg-pink-500/10
                               dark:hover:text-pink-300"
                  >
                    <FiGithub size={17} />
                  </a>

                  {project.demo !== "#" && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.title} live demonstration`}
                      className="inline-flex h-10 w-10 items-center justify-center
                                 rounded-full border border-pink-300/30
                                 bg-pink-500/5 text-zinc-700 transition-all
                                 duration-200 hover:border-pink-400/50
                                 hover:bg-pink-500/10 hover:text-pink-600
                                 dark:border-white/10 dark:bg-white/5
                                 dark:text-zinc-300
                                 dark:hover:border-pink-400/30
                                 dark:hover:bg-pink-500/10
                                 dark:hover:text-pink-300"
                    >
                      <FiExternalLink size={17} />
                    </a>
                  )}
                </div>
              </div>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-600 dark:text-zinc-400 sm:text-base">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-pink-300/20
                               bg-pink-500/5 px-3 py-1.5 text-xs font-medium
                               text-zinc-700 backdrop-blur-sm
                               dark:border-pink-400/10 dark:bg-white/5
                               dark:text-zinc-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Project number buttons */}
        <div className="mt-8 flex items-center justify-center gap-2 overflow-x-auto pb-1">
          {projects.map((item, index) => (
            <motion.button
              key={item.title}
              type="button"
              onClick={() => setSelectedProject(index)}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`shrink-0 rounded-full border px-4 py-2
                          text-xs font-medium tracking-widest transition-all
                          duration-200 ${
                            selectedProject === index
                              ? "border-pink-400/40 bg-pink-500/10 text-pink-600 shadow-sm shadow-pink-500/10 dark:border-pink-400/30 dark:text-pink-300"
                              : "border-zinc-200/70 bg-white/30 text-zinc-500 hover:border-pink-300/30 hover:text-pink-500 dark:border-white/10 dark:bg-white/[0.03] dark:text-zinc-500 dark:hover:border-pink-400/20 dark:hover:text-pink-300"
                          }`}
              aria-label={`View project ${index + 1}: ${item.title}`}
              aria-current={selectedProject === index ? "true" : undefined}
            >
              {String(index + 1).padStart(2, "0")}
            </motion.button>
          ))}
        </div>

        {/* Previous and next buttons */}
        <div className="mx-auto mt-6 flex max-w-3xl items-center justify-between border-t border-zinc-200/60 pt-5 dark:border-white/10">
          <motion.button
            type="button"
            onClick={goToPrevious}
            whileHover={{ x: -3 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 rounded-full px-3 py-2
                       text-sm font-medium text-zinc-600 transition-colors
                       hover:text-pink-600 dark:text-zinc-400
                       dark:hover:text-pink-300"
          >
            <FiChevronLeft size={17} />
            Previous
          </motion.button>

          <span className="text-xs tracking-widest text-zinc-400 dark:text-zinc-600">
            {String(selectedProject + 1).padStart(2, "0")} /{" "}
            {String(projects.length).padStart(2, "0")}
          </span>

          <motion.button
            type="button"
            onClick={goToNext}
            whileHover={{ x: 3 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 rounded-full px-3 py-2
                       text-sm font-medium text-zinc-600 transition-colors
                       hover:text-pink-600 dark:text-zinc-400
                       dark:hover:text-pink-300"
          >
            Next
            <FiChevronRight size={17} />
          </motion.button>
        </div>
      </motion.div>

      {/* More projects layer */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6 }}
        className="mx-auto mt-16 max-w-6xl"
      >
        <div className="mb-8 text-center">
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.3em] text-pink-500 dark:text-pink-300">
            More Work
          </p>

          <h3 className="text-3xl font-semibold text-zinc-900 dark:text-white">
            Other{" "}
            <span className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h3>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-zinc-600 dark:text-zinc-400">
            Select a project below to view its full information.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              whileHover={{ y: -8 }}
              className={`group overflow-hidden rounded-[1.5rem] border
                          bg-white/40 shadow-lg backdrop-blur-xl
                          transition-all duration-300 dark:bg-white/[0.04] ${
                            selectedProject === index
                              ? "border-pink-400/60 shadow-pink-500/20"
                              : "border-pink-300/20 shadow-pink-950/5 hover:border-pink-400/50 hover:shadow-pink-500/10 dark:border-white/10"
                          }`}
            >
              {/* Project card image */}
              <button
                type="button"
                onClick={() => selectProject(index)}
                className="block w-full text-left"
                aria-label={`Feature ${item.title}`}
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-100 dark:bg-zinc-900">
                  <Image
                    src={item.image}
                    alt={`${item.title} preview`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                  <div className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/30 px-3 py-1 text-xs font-medium tracking-widest text-white backdrop-blur-md">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  {selectedProject === index && (
                    <div className="absolute bottom-4 left-4 rounded-full bg-pink-500 px-3 py-1 text-xs font-medium text-white">
                      Featured
                    </div>
                  )}
                </div>
              </button>

              {/* Project card information */}
              <div className="p-5">
                <h4 className="text-xl font-semibold text-zinc-900 dark:text-white">
                  {item.title}
                </h4>

                <p className="mt-3 line-clamp-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  {item.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {item.technologies.slice(0, 3).map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-pink-300/20
                                 bg-pink-500/5 px-2.5 py-1 text-[11px]
                                 font-medium text-zinc-600
                                 dark:border-pink-400/10 dark:bg-white/5
                                 dark:text-zinc-400"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex items-center justify-between border-t border-zinc-200/60 pt-4 dark:border-white/10">
                  <button
                    type="button"
                    onClick={() => selectProject(index)}
                    className="text-sm font-medium text-pink-600 transition-colors hover:text-pink-700 dark:text-pink-300 dark:hover:text-pink-200"
                  >
                    View project
                  </button>

                  <div className="flex items-center gap-2">
                    <a
                      href={item.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${item.title} GitHub repository`}
                      className="text-zinc-500 transition-colors hover:text-pink-600 dark:text-zinc-400 dark:hover:text-pink-300"
                    >
                      <FiGithub size={18} />
                    </a>

                    {item.demo !== "#" && (
                      <a
                        href={item.demo}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${item.title} live demonstration`}
                        className="text-zinc-500 transition-colors hover:text-pink-600 dark:text-zinc-400 dark:hover:text-pink-300"
                      >
                        <FiExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}