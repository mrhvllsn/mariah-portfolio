"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { FiGithub, FiExternalLink, FiX } from "react-icons/fi";
import { projects } from "@/data/portfolio";

type Project = (typeof projects)[number];

const visibleProjects = projects.filter(
  (item) =>
    !/personal portfolio|portfolio website|read\s*em/i.test(item.title),
);

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section
      id="projects"
      className="section-wrap px-4 py-20 sm:px-6 lg:px-8"
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.5 }}
        className="mx-auto mb-12 max-w-2xl text-center"
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

      {/* Two centered project cards */}
      <div className="mx-auto grid max-w-5xl gap-7 md:grid-cols-2 lg:gap-9">
        {visibleProjects.map((item, index) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            whileHover={{ y: -7 }}
            className="group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-pink-300/30 bg-white/70 shadow-[0_18px_55px_rgba(34,14,45,0.10)] backdrop-blur-xl transition-all duration-300 hover:border-pink-400/60 hover:shadow-[0_26px_65px_rgba(236,72,153,0.18)] dark:border-white/10 dark:bg-zinc-950/70"
          >
            <button
              type="button"
              onClick={() => setSelectedProject(item)}
              className="block w-full text-left"
              aria-label={`View ${item.title} details`}
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-100 dark:bg-zinc-900">
                <Image
                  src={item.image}
                  alt={`${item.title} preview`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                <span className="absolute left-5 top-5 rounded-full border border-white/30 bg-zinc-950/55 px-3 py-1.5 font-mono text-xs tracking-widest text-white backdrop-blur-md">
                  PROJECT {String(index + 1).padStart(2, "0")}
                </span>
              </div>
            </button>

            <div className="flex flex-1 flex-col p-6 sm:p-7">
              <h3 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
                {item.title}
              </h3>

              <p className="mt-3 line-clamp-3 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
                {item.description}
              </p>

              <div className="mb-6 mt-5 flex flex-wrap gap-2">
                {item.technologies.slice(0, 3).map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-pink-300/30 bg-pink-500/10 px-3 py-1.5 text-xs font-medium text-pink-700 dark:border-pink-400/20 dark:bg-pink-400/10 dark:text-pink-200"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex items-center justify-between gap-4 border-t border-zinc-200/60 pt-5 dark:border-white/10">
                <button
                  type="button"
                  onClick={() => setSelectedProject(item)}
                  className="rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-pink-500/20 transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-500"
                >
                  View project
                </button>

                <ProjectLinks project={item} />
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Project popup */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) {
                setSelectedProject(null);
              }
            }}
            role="presentation"
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label={`${selectedProject.title} details`}
              initial={{ opacity: 0, y: 25, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.96 }}
              transition={{ duration: 0.25 }}
              className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-pink-300/20 bg-white shadow-2xl dark:border-white/10 dark:bg-zinc-950"
            >
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/70 text-white transition-colors hover:bg-pink-600"
                aria-label="Close project details"
              >
                <FiX size={20} />
              </button>

              <div className="relative aspect-[16/9] w-full bg-zinc-100 dark:bg-zinc-900">
                <Image
                  src={selectedProject.image}
                  alt={`${selectedProject.title} preview`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 672px"
                />
              </div>

              <div className="p-6 sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-2xl font-semibold text-zinc-900 dark:text-white">
                    {selectedProject.title}
                  </h3>

                  <ProjectLinks project={selectedProject} />
                </div>

                <p className="mt-4 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
                  {selectedProject.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {selectedProject.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-pink-300/20 bg-pink-500/5 px-3 py-1.5 text-xs font-medium text-zinc-700 dark:border-pink-400/10 dark:bg-white/5 dark:text-zinc-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="flex shrink-0 items-center gap-3">
      {project.github && project.github !== "#" && (
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          aria-label={`${project.title} GitHub repository`}
          className="text-zinc-500 transition-colors hover:text-pink-600 dark:text-zinc-400 dark:hover:text-pink-300"
        >
          <FiGithub size={18} />
        </a>
      )}

      {project.demo && project.demo !== "#" && (
        <a
          href={project.demo}
          target="_blank"
          rel="noreferrer"
          aria-label={`${project.title} live demonstration`}
          className="text-zinc-500 transition-colors hover:text-pink-600 dark:text-zinc-400 dark:hover:text-pink-300"
        >
          <FiExternalLink size={18} />
        </a>
      )}
    </div>
  );
}