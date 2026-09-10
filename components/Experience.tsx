"use client";

import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
} from "framer-motion";
import { useRef, useState } from "react";
import { experience } from "@/data/portfolio";

export default function Experience() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Track the scrolling progress of the Experience section.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 70%", "end 30%"],
  });

  // Make the scroll progress smoother.
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 25,
    mass: 0.5,
  });

  // Change the active card while scrolling.
  useMotionValueEvent(smoothProgress, "change", (progress) => {
    if (experience.length <= 1) {
      setActiveIndex(0);
      return;
    }

    const index = Math.min(
      experience.length - 1,
      Math.max(0, Math.round(progress * (experience.length - 1)))
    );

    setActiveIndex(index);
  });

  return (
    <section
      ref={sectionRef}
      className="section-wrap relative w-full overflow-hidden"
    >
      {/* SECTION HEADER */}

      <div className="mx-auto max-w-3xl text-center">
        <motion.p
          initial={{
            opacity: 0,
            y: 15,
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
            ease: "easeOut",
          }}
          className="
            font-mono
            text-xs
            tracking-[.3em]
            text-pink-500
            dark:text-pink-300
          "
        >
          04 / EXPERIENCE
        </motion.p>

        <motion.h2
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
            delay: 0.05,
            ease: "easeOut",
          }}
          className="
            mt-3
            text-4xl
            font-bold
            text-zinc-900

            sm:text-5xl

            dark:text-white
          "
        >
          Experience
        </motion.h2>

        <motion.p
          initial={{
            opacity: 0,
            y: 15,
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
            ease: "easeOut",
          }}
          className="
            mx-auto
            mt-4
            max-w-xl
            text-sm
            leading-7
            text-zinc-600

            dark:text-zinc-400
          "
        >
          A journey through the projects, experiences, and technologies
          that have shaped my development as an IT professional.
        </motion.p>
      </div>

      {/* TIMELINE */}

      <div
        className="
          mx-auto
          mt-14
          w-full
          max-w-6xl
        "
      >
        <div
          className="
            relative
            pl-8

            md:pl-0
          "
        >
          {/* CENTER TIMELINE LINE */}

          <motion.div
            aria-hidden="true"
            initial={{
              scaleY: 0,
              opacity: 0,
            }}
            whileInView={{
              scaleY: 1,
              opacity: 1,
            }}
            viewport={{
              once: true,
              amount: 0.1,
            }}
            transition={{
              duration: 1.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              absolute
              bottom-0
              left-[5px]
              top-0
              w-px
              origin-top

              bg-gradient-to-b
              from-pink-500/70
              via-pink-400/30
              to-transparent

              md:left-1/2
            "
          />

          {/* EXPERIENCE ITEMS */}

          <div className="space-y-12 md:space-y-16">
            {experience.map((item, i) => {
              const isActive = i === activeIndex;
              const isLeftSide = i % 2 === 0;
              const distance = Math.abs(i - activeIndex);

              // Change the appearance depending on the active card.
              const opacity = isActive
                ? 1
                : distance === 1
                  ? 0.65
                  : 0.4;

              const scale = isActive
                ? 1
                : distance === 1
                  ? 0.99
                  : 0.975;

              return (
                <motion.article
                  key={`${item.date}-${item.title}`}
                  initial={{
                    opacity: 0,
                    x: isLeftSide ? -70 : 70,
                    y: 35,
                    scale: 0.95,
                  }}
                  whileInView={{
                    opacity,
                    x: 0,
                    y: 0,
                    scale,
                  }}
                  viewport={{
                    once: false,
                    amount: 0.2,
                    margin: "-30px",
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 70,
                    damping: 18,
                    mass: 0.8,
                    opacity: {
                      duration: 0.65,
                      ease: "easeOut",
                    },
                  }}
                  className={`
                    relative

                    md:grid
                    md:grid-cols-2

                    ${
                      isLeftSide
                        ? "md:origin-right"
                        : "md:origin-left"
                    }

                    motion-reduce:!transform-none
                  `}
                >
                  {/* TIMELINE DOT */}

                  <motion.span
                    initial={{
                      opacity: 0,
                      scale: 0,
                    }}
                    whileInView={{
                      opacity: isActive ? 1 : 0.6,
                      scale: isActive ? 1.35 : 1,
                    }}
                    viewport={{
                      once: false,
                      amount: 0.5,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      damping: 15,
                    }}
                    className="
                      absolute
                      -left-[2rem]
                      top-7
                      z-20

                      h-3
                      w-3

                      rounded-full
                      border-2
                      border-pink-500
                      bg-white

                      shadow-[0_0_12px_rgba(236,72,153,.45)]

                      dark:border-pink-300
                      dark:bg-[#050507]

                      md:left-[calc(50%-6px)]
                    "
                  />

                  {/* ACTIVE DOT GLOW */}

                  <motion.span
                    aria-hidden="true"
                    animate={{
                      opacity: isActive ? 0.9 : 0,
                      scale: isActive ? 1.3 : 0.7,
                    }}
                    transition={{
                      duration: 0.45,
                      ease: "easeOut",
                    }}
                    className="
                      pointer-events-none
                      absolute
                      -left-[2.25rem]
                      top-[1.45rem]
                      z-10

                      h-5
                      w-5

                      rounded-full
                      bg-pink-500/30
                      blur-md

                      md:left-[calc(50%-10px)]
                    "
                  />

                  {/* EXPERIENCE CARD */}

                  <motion.div
                    animate={{
                      borderColor: isActive
                        ? "rgba(244,114,182,0.4)"
                        : "rgba(244,114,182,0.14)",

                      boxShadow: isActive
                        ? "0 20px 60px rgba(236,72,153,0.14)"
                        : "0 10px 30px rgba(0,0,0,0.05)",
                    }}
                    whileHover={{
                      y: -8,
                      scale: 1.015,
                      borderColor: "rgba(244,114,182,0.55)",
                      boxShadow:
                        "0 25px 70px rgba(236,72,153,0.18)",
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 170,
                      damping: 18,
                      mass: 0.6,
                    }}
                    className={`
                      relative
                      w-full
                      overflow-hidden

                      rounded-2xl
                      border
                      bg-white/60
                      p-6
                      shadow-sm
                      backdrop-blur-md

                      sm:p-8

                      dark:bg-white/[0.04]
                      dark:hover:bg-white/[0.06]

                      ${
                        isLeftSide
                          ? "md:col-start-1 md:mr-12 md:w-auto"
                          : "md:col-start-2 md:ml-12 md:w-auto"
                      }
                    `}
                  >
                    {/* SUBTLE PINK LIGHT */}

                    <motion.div
                      aria-hidden="true"
                      animate={{
                        opacity: isActive ? 1 : 0,
                        scale: isActive ? 1 : 0.8,
                      }}
                      transition={{
                        duration: 0.6,
                        ease: "easeOut",
                      }}
                      className="
                        pointer-events-none
                        absolute
                        -right-20
                        -top-20

                        h-40
                        w-40

                        rounded-full
                        bg-pink-500/10
                        blur-3xl
                      "
                    />

                    {/* CARD CONTENT */}

                    <div className="relative z-10">
                      {/* DATE */}

                      <p
                        className="
                          font-mono
                          text-xs
                          tracking-wider
                          text-pink-500

                          dark:text-pink-300
                        "
                      >
                        {item.date}
                      </p>

                      {/* TITLE */}

                      <h3
                        className="
                          mt-2
                          text-xl
                          font-bold
                          leading-tight
                          text-zinc-900

                          sm:text-2xl

                          dark:text-white
                        "
                      >
                        {item.title}
                      </h3>

                      {/* ORGANIZATION */}

                      <p
                        className="
                          mt-2
                          text-sm
                          text-zinc-600

                          dark:text-zinc-500
                        "
                      >
                        {item.organization}
                      </p>

                      {/* DESCRIPTION */}

                      <p
                        className="
                          mt-4
                          text-sm
                          leading-7
                          text-zinc-700

                          sm:text-base

                          dark:text-zinc-400
                        "
                      >
                        {item.description}
                      </p>

                      {/* TECHNOLOGIES */}

                      {item.technologies &&
                        item.technologies.length > 0 && (
                          <div
                            className="
                              mt-5
                              flex
                              flex-wrap
                              gap-2
                            "
                          >
                            {item.technologies.map((technology) => (
                              <motion.span
                                key={technology}
                                whileHover={{
                                  y: -2,
                                  scale: 1.05,
                                }}
                                transition={{
                                  type: "spring",
                                  stiffness: 250,
                                  damping: 15,
                                }}
                                className="
                                  rounded-full
                                  border
                                  border-pink-300/30
                                  bg-pink-500/5

                                  px-3
                                  py-1

                                  text-xs
                                  text-zinc-700

                                  transition-colors
                                  duration-200

                                  hover:border-pink-400/50
                                  hover:bg-pink-500/10
                                  hover:text-pink-600

                                  dark:border-pink-400/15
                                  dark:bg-white/5
                                  dark:text-zinc-400

                                  dark:hover:border-pink-400/30
                                  dark:hover:bg-pink-500/10
                                  dark:hover:text-pink-300
                                "
                              >
                                {technology}
                              </motion.span>
                            ))}
                          </div>
                        )}
                    </div>
                  </motion.div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}