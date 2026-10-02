"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  FiGithub,
  FiExternalLink,
  FiX,
  FiMaximize2,
  FiCode,
  FiEye,
} from "react-icons/fi";
import { projects } from "@/data/portfolio";

type Project = (typeof projects)[number];

const visibleProjects = projects.filter(
  (item) =>
    !/personal portfolio|portfolio website|read\s*em/i.test(item.title),
);

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!selectedProject) return;

    const previousFocus = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    dialogRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }

      if (event.key !== "Tab") return;

      const elements = dialogRef.current?.querySelectorAll<HTMLElement>(
        'button, a[href], [tabindex="0"]',
      );

      if (!elements?.length) return;

      const first = elements[0];
      const last = elements[elements.length - 1];

      if (
        event.shiftKey &&
        (document.activeElement === first ||
          document.activeElement === dialogRef.current)
      ) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      previousFocus?.focus();
    };
  }, [selectedProject]);

  return (
    <section
      id="projects"
      className="section-wrap px-4 py-20 sm:px-6 lg:px-8"
    >
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

        <h2 className="text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl dark:text-white">
          Projects I&apos;m{" "}
          <span className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
            proud of.
          </span>
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-zinc-600 sm:text-base dark:text-zinc-400">
          A collection of projects that showcase my skills in development,
          design, responsive interfaces, and modern web technologies.
        </p>
      </motion.div>

      <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2 lg:gap-14">
        {visibleProjects.map((item, index) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            className="project-main"
          >
            <div className="project-card-back" aria-hidden="true" />

            <div className="project-card">
              <div className="project-preview">
                <Image
                  src={item.image}
                  alt={`${item.title} preview`}
                  fill
                  className="project-image"
                  sizes="(max-width: 768px) 100vw, 480px"
                />

                <div className="project-image-overlay" />

                <span className="project-number">
                  PROJECT {String(index + 1).padStart(2, "0")}
                </span>

                <div className="project-fullscreen-wrap">
                  <button
                    type="button"
                    className="project-fullscreen"
                    onClick={() => setSelectedProject(item)}
                    aria-label={`Open ${item.title} details`}
                  >
                    <FiMaximize2 size={18} />
                  </button>
                </div>

                <div className="project-card-content">
                  <button
                    type="button"
                    className="project-open-button"
                    onClick={() => setSelectedProject(item)}
                  >
                    <span className="project-button-label">
                      Explore project
                    </span>

                    <span className="project-button-arrow" aria-hidden="true">
                      <FiExternalLink size={17} />
                    </span>
                  </button>
                </div>
              </div>
            </div>

            <div className="project-information">
              <div className="project-data">
                <div className="project-avatar">
                  <FiCode size={22} />
                </div>

                <div className="project-text">
                  <h3 className="project-title">{item.title}</h3>
                  <p className="project-subtitle">
                    Design & development
                  </p>
                </div>
              </div>

              <p className="project-description">{item.description}</p>

              <div className="project-technologies">
                {item.technologies.slice(0, 3).map((technology) => (
                  <span key={technology} className="project-technology">
                    {technology}
                  </span>
                ))}
              </div>

              <div className="project-actions">
                <button
                  type="button"
                  className="project-action"
                  onClick={() => setSelectedProject(item)}
                >
                  <FiEye size={15} />
                  <span>Details</span>
                </button>

                <ProjectLinks project={item} />
              </div>
            </div>
          </motion.article>
        ))}
      </div>

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
          >
            <motion.div
              ref={dialogRef}
              tabIndex={-1}
              role="dialog"
              aria-modal="true"
              aria-label={`${selectedProject.title} details`}
              initial={{ opacity: 0, y: 25, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.96 }}
              transition={{ duration: 0.25 }}
              className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-white/10 bg-[#1e1f26] text-white shadow-2xl outline-none"
            >
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/70 text-white transition-colors hover:bg-pink-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-300"
                aria-label="Close project details"
              >
                <FiX size={20} />
              </button>

              <div className="relative aspect-[16/9] w-full bg-zinc-900">
                <Image
                  src={selectedProject.image}
                  alt={`${selectedProject.title} preview`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 672px"
                />
              </div>

              <div className="p-6 sm:p-8">
                <h3 className="text-2xl font-semibold">
                  {selectedProject.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-zinc-300">
                  {selectedProject.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {selectedProject.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-zinc-200"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="mt-7">
                  <ProjectLinks project={selectedProject} />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        /* Style adapted from Uiverse.io by Praashoo7. */

        #projects .project-main {
          position: relative;
          isolation: isolate;
          display: flex;
          flex-direction: column;
          height: 100%;
          padding: 14px;
        }

        #projects .project-card-back {
          position: absolute;
          inset: 20px 0 0 20px;
          z-index: -1;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 18px;
          background: rgba(30, 31, 38, 0.94);
          box-shadow: 0 18px 40px rgba(0, 0, 0, 0.18);
          transition:
            inset 300ms ease,
            transform 300ms ease,
            box-shadow 300ms ease;
        }

        #projects .project-main:hover .project-card-back,
        #projects .project-main:focus-within .project-card-back {
          inset: 0;
          transform: scale(1.025);
          box-shadow: 0 24px 60px rgba(69, 198, 219, 0.15);
        }

        #projects .project-card {
          position: relative;
          padding: 5px;
          border-radius: 14px;
          background: linear-gradient(
            270deg,
            #ce68d9,
            #45c6db,
            #45db79
          );
          background-size: 800% 800%;
          animation: projectGradient 3s ease infinite;
          transition:
            transform 400ms ease,
            box-shadow 400ms ease;
        }

        #projects .project-main:hover .project-card {
          transform: translateY(-5px);
          box-shadow: 0 12px 30px rgba(69, 198, 219, 0.16);
        }

        #projects .project-preview {
          position: relative;
          aspect-ratio: 16 / 10;
          overflow: hidden;
          border-radius: 10px;
          background: #252525;
        }

        #projects .project-image {
          object-fit: cover;
          transition: transform 700ms ease;
        }

        #projects .project-main:hover .project-image {
          transform: scale(1.06);
        }

        #projects .project-image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.75),
            rgba(0, 0, 0, 0.08) 70%
          );
        }

        #projects .project-number {
          position: absolute;
          top: 16px;
          left: 16px;
          padding: 7px 11px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 6px;
          background: rgba(30, 31, 38, 0.65);
          color: white;
          font-family: monospace;
          font-size: 10px;
          letter-spacing: 2px;
          backdrop-filter: blur(8px);
        }

        #projects .project-fullscreen-wrap {
          position: absolute;
          top: 12px;
          right: 12px;
          opacity: 0;
          transform: translateY(-5px);
          transition:
            opacity 200ms ease,
            transform 200ms ease;
        }

        #projects .project-main:hover .project-fullscreen-wrap,
        #projects .project-main:focus-within .project-fullscreen-wrap {
          opacity: 1;
          transform: translateY(0);
        }

        #projects .project-fullscreen {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border: 0;
          border-radius: 7px;
          background: #727890;
          color: #e4e4e7;
          box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.4);
          cursor: pointer;
          transition:
            transform 200ms ease,
            background 200ms ease;
        }

        #projects .project-fullscreen:hover {
          transform: scale(1.12);
          background: #9197b1;
          color: white;
        }

        #projects .project-card-content {
          position: absolute;
          right: 20px;
          bottom: 20px;
          left: 20px;
          display: flex;
          justify-content: center;
        }

        #projects .project-open-button {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          width: 190px;
          padding: 12px 16px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.8);
          border-radius: 10px;
          background: rgba(0, 0, 0, 0.15);
          color: white;
          font: inherit;
          font-size: 13px;
          font-weight: bold;
          cursor: pointer;
          transition:
            border-radius 400ms ease,
            background 400ms ease,
            transform 400ms ease;
        }

        #projects .project-open-button:hover {
          border-color: rgba(255, 255, 255, 0.3);
          border-radius: 15px;
          background: rgba(255, 255, 255, 0.2);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
          backdrop-filter: blur(5px);
        }

        #projects .project-open-button:active {
          transform: scale(1.05);
          background: linear-gradient(
            90deg,
            #ce68d9,
            #45c6db,
            #45db79,
            #9f45b0,
            #e54ed0,
            #ffe4f2
          );
          background-size: 800% 800%;
          animation: projectGradient 1s ease infinite;
        }

        #projects .project-button-arrow {
          display: inline-flex;
          transition: transform 200ms ease;
        }

        #projects .project-open-button:hover .project-button-arrow {
          transform: translate(2px, -2px);
        }

        #projects .project-information {
          display: flex;
          flex: 1;
          flex-direction: column;
          padding: 20px 12px 10px;
          color: white;
        }

        #projects .project-data {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        #projects .project-avatar {
          display: flex;
          flex-shrink: 0;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 9px;
          background: #252525;
          color: #45c6db;
        }

        #projects .project-text {
          min-width: 0;
        }

        #projects .project-title {
          margin: 0;
          color: white;
          font-size: 20px;
          font-weight: bold;
          line-height: 1.35;
        }

        #projects .project-subtitle {
          margin-top: 4px;
          color: #a1a1aa;
          font-size: 12px;
        }

        #projects .project-description {
          display: -webkit-box;
          margin-top: 16px;
          overflow: hidden;
          color: #b7b8c2;
          font-size: 13px;
          line-height: 1.85;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
        }

        #projects .project-technologies {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
          margin-top: 16px;
          margin-bottom: 20px;
        }

        #projects .project-technology {
          padding: 5px 10px;
          border: 1px solid rgba(69, 198, 219, 0.18);
          border-radius: 5px;
          background: rgba(69, 198, 219, 0.07);
          color: #b5edf5;
          font-size: 11px;
        }

        #projects .project-actions {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 8px;
          margin-top: auto;
          padding-top: 4px;
          opacity: 0;
          transform: translateY(-5px);
          transition:
            opacity 240ms ease,
            transform 240ms ease;
        }

        #projects .project-main:hover .project-actions,
        #projects .project-main:focus-within .project-actions {
          opacity: 1;
          transform: translateY(0);
        }

        #projects .project-links {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 8px;
        }

        #projects .project-action {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
          padding: 8px 11px;
          border: 0;
          border-radius: 5px;
          background: #444857;
          color: white;
          font: inherit;
          font-size: 11px;
          text-decoration: none;
          cursor: pointer;
          transition:
            background 200ms ease,
            transform 200ms ease;
        }

        #projects .project-action:hover {
          transform: translateY(-2px);
          background: #5a5f73;
        }

        #projects .project-action:focus-visible,
        #projects .project-open-button:focus-visible,
        #projects .project-fullscreen:focus-visible {
          outline: 2px solid #45c6db;
          outline-offset: 4px;
        }

        @keyframes projectGradient {
          0% {
            background-position: 0% 50%;
          }

          50% {
            background-position: 100% 50%;
          }

          100% {
            background-position: 0% 50%;
          }
        }

        @media (hover: none) {
          #projects .project-fullscreen-wrap,
          #projects .project-actions {
            opacity: 1;
            transform: none;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          #projects .project-card,
          #projects .project-open-button:active {
            animation: none;
          }

          #projects .project-card,
          #projects .project-card-back,
          #projects .project-image,
          #projects .project-actions,
          #projects .project-fullscreen-wrap,
          #projects .project-open-button {
            transition: none;
          }
        }
      `}</style>
    </section>
  );
}

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="project-links">
      {project.github && project.github !== "#" && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${project.title} GitHub repository`}
          className="project-action"
        >
          <FiGithub size={15} />
          <span>Code</span>
        </a>
      )}

      {project.demo && project.demo !== "#" && (
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${project.title} live demonstration`}
          className="project-action"
        >
          <FiExternalLink size={15} />
          <span>Live demo</span>
        </a>
      )}
    </div>
  );
}