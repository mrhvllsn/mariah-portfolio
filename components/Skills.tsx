"use client";

import { motion } from "framer-motion";
import type { IconType } from "react-icons";

import {
  FiCode,
  FiLayers,
  FiPenTool,
  FiTool,
} from "react-icons/fi";

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

/* =========================================================
   TECHNOLOGY ICONS
========================================================= */

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

/* =========================================================
   CATEGORY ICONS
========================================================= */

const categoryIcons: Record<string, IconType> = {
  Frontend: SiReact,
  Backend: FiCode,
  Tools: FiTool,
  Design: FiPenTool,
};

/* =========================================================
   CATEGORY DESCRIPTIONS
========================================================= */

const categoryDescriptions: Record<string, string> = {
  Frontend: "Building responsive and interactive user interfaces.",
  Backend: "Creating reliable application logic and data systems.",
  Tools: "Development tools that improve my workflow.",
  Design: "Designing clean, simple, and user-friendly experiences.",
};

/* =========================================================
   FLOATING TECHNOLOGY TYPE
========================================================= */

interface FloatingTechnology {
  name: string;
  icon: IconType;
  position: string;
  color: string;
  delay: number;
  duration: number;
  rotation: number;
}

/* =========================================================
   FLOATING TECHNOLOGIES
========================================================= */

const floatingTechnologies: FloatingTechnology[] = [
  {
    name: "React",
    icon: SiReact,
    position: "left-[5%] top-[18%]",
    color: "text-cyan-500",
    delay: 0,
    duration: 4,
    rotation: -15,
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    position: "left-[15%] top-[10%]",
    color: "text-yellow-500",
    delay: 0.4,
    duration: 4.5,
    rotation: 18,
  },
  {
    name: "Figma",
    icon: SiFigma,
    position: "right-[12%] top-[13%]",
    color: "text-pink-500",
    delay: 0.8,
    duration: 5,
    rotation: -12,
  },
  {
    name: "GitHub",
    icon: SiGithub,
    position: "right-[5%] top-[30%]",
    color: "text-zinc-800 dark:text-white",
    delay: 1.2,
    duration: 4.2,
    rotation: 15,
  },
  {
    name: "HTML",
    icon: SiHtml5,
    position: "left-[4%] bottom-[21%]",
    color: "text-orange-500",
    delay: 0.6,
    duration: 4.7,
    rotation: -18,
  },
  {
    name: "CSS",
    icon: SiCss,
    position: "left-[14%] bottom-[10%]",
    color: "text-blue-500",
    delay: 1,
    duration: 5.2,
    rotation: 14,
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
    position: "right-[14%] bottom-[12%]",
    color: "text-green-500",
    delay: 0.3,
    duration: 4.4,
    rotation: -14,
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    position: "right-[4%] bottom-[25%]",
    color: "text-blue-600",
    delay: 0.9,
    duration: 4.9,
    rotation: 17,
  },
];

/* =========================================================
   HELPER FUNCTIONS
========================================================= */

function getSkillIcon(skill: string): IconType {
  return skillIcons[skill] ?? FiCode;
}

function getCategoryIcon(category: string): IconType {
  return categoryIcons[category] ?? FiLayers;
}

/* =========================================================
   SKILLS COMPONENT
========================================================= */

export default function Skills() {
  const skillCategories = Object.entries(skills);

  return (
    <section
      id="skills"
      className="
        relative
        flex
        min-h-screen
        items-center
        overflow-hidden
        bg-transparent
        px-5
        py-24
        text-zinc-900
        transition-colors
        duration-500

        sm:px-8
        lg:px-12

        dark:text-white
      "
    >
      {/* BACKGROUND GRID */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[linear-gradient(rgba(0,0,0,0.035)_1px,transparent_1px)]
          bg-[size:100%_80px]

          dark:bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px)]
        "
      />

      {/* LEFT ANIMATED GLOW */}

      <motion.div
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -20, 25, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          left-[-150px]
          top-[-120px]
          h-[430px]
          w-[430px]
          rounded-full
          bg-pink-500/10
          blur-[140px]
        "
      />

      {/* RIGHT ANIMATED GLOW */}

      <motion.div
        animate={{
          x: [0, -25, 20, 0],
          y: [0, 30, -20, 0],
          scale: [1, 0.95, 1.1, 1],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          bottom-[-180px]
          right-[-120px]
          h-[480px]
          w-[480px]
          rounded-full
          bg-pink-500/10
          blur-[150px]
        "
      />

      {/* FLOATING TECHNOLOGY ICONS */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          hidden

          lg:block
        "
      >
        {floatingTechnologies.map((technology) => {
          const TechnologyIcon = technology.icon;

          return (
            <motion.div
              key={technology.name}
              initial={{
                opacity: 0,
                scale: 0,
                rotate: technology.rotation,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{
                once: true,
              }}
              animate={{
                y: [0, -18, 0, 13, 0],
                x: [0, 8, 0, -8, 0],
                rotate: [
                  technology.rotation,
                  technology.rotation + 8,
                  technology.rotation,
                  technology.rotation - 8,
                  technology.rotation,
                ],
              }}
              transition={{
                opacity: {
                  duration: 0.6,
                  delay: technology.delay,
                },
                scale: {
                  duration: 0.6,
                  delay: technology.delay,
                },
                y: {
                  duration: technology.duration,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: technology.delay,
                },
                x: {
                  duration: technology.duration + 1,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: technology.delay,
                },
                rotate: {
                  duration: technology.duration + 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: technology.delay,
                },
              }}
              className={`absolute ${technology.position}`}
            >
              <div
                className="
                  relative
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-zinc-200
                  bg-white/80
                  shadow-[0_15px_35px_rgba(0,0,0,0.12)]
                  backdrop-blur-md

                  dark:border-white/10
                  dark:bg-zinc-900/70
                  dark:shadow-[0_15px_40px_rgba(0,0,0,0.4)]
                "
              >
                <TechnologyIcon
                  className={`h-8 w-8 ${technology.color}`}
                  aria-hidden="true"
                />

                <span
                  className="
                    absolute
                    -right-1
                    -top-1
                    h-3
                    w-3
                    rounded-full
                    border-2
                    border-[#f8f7fa]
                    bg-pink-500

                    dark:border-[#09090d]
                  "
                />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* MAIN CONTENT */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-5xl
        "
      >
        {/* SECTION HEADING */}

        <motion.div
          initial={{
            opacity: 0,
            y: -30,
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
            duration: 0.7,
            ease: "easeOut",
          }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-9 bg-pink-500" />

            <p
              className="
                font-mono
                text-xs
                uppercase
                tracking-[0.3em]
                text-pink-500

                dark:text-pink-400
              "
            >
              02 / Skills
            </p>

            <span className="h-px w-9 bg-pink-500" />
          </div>

          <motion.h2
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              mt-4
              font-serif
              text-5xl
              font-bold
              italic
              tracking-tight
              text-zinc-900

              sm:text-6xl
              lg:text-7xl

              dark:text-white
            "
          >
            My{" "}
            <span
              className="
                bg-gradient-to-r
                from-pink-600
                via-pink-400
                to-purple-500
                bg-clip-text
                text-transparent
              "
            >
              Tech Stack
            </span>
          </motion.h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-xl
              text-sm
              leading-7
              text-zinc-600

              sm:text-base

              dark:text-zinc-400
            "
          >
            Technologies and tools I use to create responsive, modern, and
            user-friendly digital experiences.
          </p>
        </motion.div>

        {/* SKILL CATEGORY CARDS */}

        <div
          className="
            mx-auto
            mt-12
            grid
            max-w-4xl
            gap-4

            md:grid-cols-2
          "
        >
          {skillCategories.map(([category, items], index) => {
            const CategoryIcon = getCategoryIcon(category);

            return (
              <motion.div
                key={category}
                initial={{
                  opacity: 0,
                  y: 35,
                  scale: 0.96,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                  amount: 0.25,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -9,
                  scale: 1.02,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-2xl
                  border
                  border-zinc-200
                  bg-white/80
                  p-5
                  shadow-[0_15px_45px_rgba(0,0,0,0.07)]
                  backdrop-blur-xl
                  transition-colors
                  duration-300

                  hover:border-pink-500/50
                  hover:bg-pink-50/80
                  hover:shadow-[0_20px_55px_rgba(236,72,153,0.15)]

                  dark:border-white/10
                  dark:bg-zinc-900/70
                  dark:shadow-[0_15px_45px_rgba(0,0,0,0.25)]
                  dark:hover:border-pink-500/40
                  dark:hover:bg-pink-500/[0.07]
                "
              >
                {/* CARD GLOW */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-12
                    -top-12
                    h-32
                    w-32
                    rounded-full
                    bg-pink-500/10
                    blur-3xl
                    transition-all
                    duration-500

                    group-hover:bg-pink-500/20
                  "
                />

                <div className="relative flex items-center gap-4">
                  {/* CATEGORY ICON */}

                  <motion.div
                    animate={{
                      y: [0, -5, 0, 4, 0],
                      rotate: [0, 4, 0, -4, 0],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.5,
                    }}
                    className="
                      flex
                      h-14
                      w-14
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-pink-500/20
                      bg-pink-500/10
                      text-pink-500

                      dark:border-pink-400/20
                      dark:bg-pink-500/10
                      dark:text-pink-400
                    "
                  >
                    <CategoryIcon
                      className="h-6 w-6"
                      aria-hidden="true"
                    />
                  </motion.div>

                  {/* CATEGORY INFORMATION */}

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-3">
                      <h3
                        className="
                          font-mono
                          text-sm
                          font-semibold
                          uppercase
                          tracking-[0.12em]
                          text-zinc-900

                          dark:text-white
                        "
                      >
                        {category}
                      </h3>

                      <span
                        className="
                          font-mono
                          text-[10px]
                          text-pink-500

                          dark:text-pink-400
                        "
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <p
                      className="
                        mt-1
                        truncate
                        text-xs
                        leading-5
                        text-zinc-500

                        dark:text-zinc-400
                      "
                    >
                      {categoryDescriptions[category] ??
                        "Technologies used in my development process."}
                    </p>
                  </div>
                </div>

                {/* TECHNOLOGY LIST */}

                <div
                  className="
                    relative
                    mt-4
                    flex
                    flex-wrap
                    gap-2
                    border-t
                    border-zinc-200
                    pt-4

                    dark:border-white/[0.07]
                  "
                >
                  {items.slice(0, 4).map((skill, skillIndex) => {
                    const SkillIcon = getSkillIcon(skill);

                    return (
                      <motion.div
                        key={skill}
                        initial={{
                          opacity: 0,
                          scale: 0,
                        }}
                        whileInView={{
                          opacity: 1,
                          scale: 1,
                        }}
                        viewport={{
                          once: true,
                        }}
                        transition={{
                          duration: 0.4,
                          delay:
                            index * 0.1 +
                            skillIndex * 0.08 +
                            0.3,
                        }}
                        whileHover={{
                          y: -3,
                          scale: 1.05,
                        }}
                        title={skill}
                        className="
                          flex
                          items-center
                          gap-1.5
                          rounded-full
                          border
                          border-zinc-200
                          bg-zinc-50
                          px-2.5
                          py-1.5
                          text-[10px]
                          font-medium
                          text-zinc-600
                          transition-colors

                          hover:border-pink-500/40
                          hover:bg-pink-50
                          hover:text-pink-600

                          dark:border-white/10
                          dark:bg-white/[0.04]
                          dark:text-zinc-400
                          dark:hover:border-pink-500/30
                          dark:hover:bg-pink-500/10
                          dark:hover:text-pink-300
                        "
                      >
                        <SkillIcon
                          className="
                            h-3.5
                            w-3.5
                            shrink-0
                            text-pink-500

                            dark:text-pink-400
                          "
                          aria-hidden="true"
                        />

                        <span>{skill}</span>
                      </motion.div>
                    );
                  })}

                  {items.length > 4 && (
                    <span
                      className="
                        flex
                        items-center
                        rounded-full
                        border
                        border-pink-500/20
                        bg-pink-500/5
                        px-2.5
                        py-1.5
                        text-[10px]
                        font-medium
                        text-pink-500

                        dark:text-pink-400
                      "
                    >
                      +{items.length - 4}
                    </span>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* BOTTOM STATUS */}

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
            duration: 0.6,
            delay: 0.5,
          }}
          className="
            mx-auto
            mt-10
            flex
            w-fit
            flex-wrap
            items-center
            justify-center
            gap-4
            rounded-full
            border
            border-zinc-200
            bg-white/70
            px-5
            py-2.5
            text-[10px]
            text-zinc-500
            shadow-sm
            backdrop-blur-xl

            dark:border-white/10
            dark:bg-zinc-900/60
            dark:text-zinc-500
            dark:shadow-none
          "
        >
          <span className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span
                className="
                  absolute
                  inline-flex
                  h-full
                  w-full
                  animate-ping
                  rounded-full
                  bg-pink-400
                  opacity-70
                "
              />

              <span
                className="
                  relative
                  inline-flex
                  h-2
                  w-2
                  rounded-full
                  bg-pink-500
                "
              />
            </span>

            Always learning
          </span>

          <span
            className="
              hidden
              h-3
              w-px
              bg-zinc-300

              sm:block

              dark:bg-white/10
            "
          />

          <span>Building creative digital experiences</span>

          <span
            className="
              hidden
              h-3
              w-px
              bg-zinc-300

              sm:block

              dark:bg-white/10
            "
          />

          <span
            className="
              font-mono
              text-pink-500

              dark:text-pink-400
            "
          >
            Portfolio 2026
          </span>
        </motion.div>
      </div>
    </section>
  ); 
}
