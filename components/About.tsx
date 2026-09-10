"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { profile } from "@/data/portfolio";

/* =========================================================
   SKILLS
========================================================= */

const skills = [
  "UI/UX Design",
  "Figma",
  "HTML / CSS",
  "Web Design",
  "Prototyping",
  "Canva",
  "Wireframing",
  "Responsive Design",
];

/* =========================================================
   SPACE STARS

   These stars use fixed positions so they will not cause
   hydration errors in Next.js.
========================================================= */

const stars = [
  { left: "4%", top: "12%", size: 2, delay: 0 },
  { left: "9%", top: "73%", size: 1, delay: 0.8 },
  { left: "14%", top: "37%", size: 2, delay: 1.4 },
  { left: "19%", top: "88%", size: 1, delay: 0.3 },
  { left: "24%", top: "17%", size: 1, delay: 1.8 },
  { left: "29%", top: "59%", size: 2, delay: 0.6 },
  { left: "34%", top: "8%", size: 1, delay: 1.1 },
  { left: "39%", top: "82%", size: 2, delay: 2 },
  { left: "44%", top: "29%", size: 1, delay: 0.2 },
  { left: "49%", top: "67%", size: 1, delay: 1.6 },
  { left: "54%", top: "14%", size: 2, delay: 0.5 },
  { left: "59%", top: "91%", size: 1, delay: 1.3 },
  { left: "64%", top: "42%", size: 2, delay: 0.9 },
  { left: "69%", top: "6%", size: 1, delay: 1.9 },
  { left: "74%", top: "76%", size: 2, delay: 0.4 },
  { left: "79%", top: "25%", size: 1, delay: 1.5 },
  { left: "84%", top: "55%", size: 2, delay: 0.7 },
  { left: "89%", top: "11%", size: 1, delay: 2.1 },
  { left: "94%", top: "84%", size: 2, delay: 1 },
  { left: "97%", top: "39%", size: 1, delay: 1.7 },
  { left: "7%", top: "48%", size: 1, delay: 2.2 },
  { left: "17%", top: "5%", size: 2, delay: 0.1 },
  { left: "31%", top: "94%", size: 1, delay: 1.2 },
  { left: "46%", top: "46%", size: 2, delay: 0.7 },
  { left: "57%", top: "32%", size: 1, delay: 1.6 },
  { left: "66%", top: "69%", size: 2, delay: 0.3 },
  { left: "77%", top: "93%", size: 1, delay: 2 },
  { left: "87%", top: "36%", size: 2, delay: 1.1 },
  { left: "92%", top: "64%", size: 1, delay: 0.6 },
];

/* =========================================================
   LEFT CONTENT ANIMATION
========================================================= */

const leftContainerAnimation = {
  hidden: {
    opacity: 0,
    x: -100,
  },

  visible: {
    opacity: 1,
    x: 0,

    transition: {
      duration: 0.85,
      ease: "easeOut" as const,
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const leftItemAnimation = {
  hidden: {
    opacity: 0,
    x: -45,
  },

  visible: {
    opacity: 1,
    x: 0,

    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

/* =========================================================
   ABOUT COMPONENT
========================================================= */

export default function About() {
  return (
    <section
      id="about"
      className="
        relative
        isolate
        flex
        min-h-screen
        items-center
        overflow-hidden
        bg-transparent
        py-24
      "
    >
      {/* ===================================================
          SPACE BACKGROUND
      =================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          -z-30
          overflow-hidden
        "
      >
        {/* Main galaxy colors */}

        <div
          className="
            absolute
            inset-0
            bg-transparent
          "
        />

        {/* Animated pink galaxy */}

        <motion.div
          animate={{
            x: [0, 80, 0],
            y: [0, -40, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -left-40
            top-10
            h-[520px]
            w-[520px]
            rounded-full
            bg-pink-400/20
            blur-[130px]
            dark:bg-pink-600/15
          "
        />

        {/* Animated violet galaxy */}

        <motion.div
          animate={{
            x: [0, -70, 0],
            y: [0, 65, 0],
            scale: [1.2, 1, 1.2],
          }}
          transition={{
            duration: 19,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -right-44
            top-[20%]
            h-[560px]
            w-[560px]
            rounded-full
            bg-violet-400/20
            blur-[145px]
            dark:bg-violet-600/15
          "
        />

        {/* Animated blue galaxy */}

        <motion.div
          animate={{
            x: [-30, 40, -30],
            y: [20, -30, 20],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 17,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            bottom-[-260px]
            left-[30%]
            h-[600px]
            w-[600px]
            rounded-full
            bg-blue-400/20
            blur-[150px]
            dark:bg-blue-600/10
          "
        />

        {/* Stars */}

        {stars.map((star, index) => (
          <motion.span
            key={index}
            initial={{
              opacity: 0.25,
              scale: 0.8,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [0.8, 1.5, 0.8],
            }}
            transition={{
              duration: 2.2 + (index % 4),
              repeat: Infinity,
              delay: star.delay,
              ease: "easeInOut",
            }}
            style={{
              left: star.left,
              top: star.top,
              width: star.size,
              height: star.size,
            }}
            className="
              absolute
              rounded-full
              bg-pink-500
              shadow-[0_0_8px_rgba(236,72,153,0.9)]
              dark:bg-white
              dark:shadow-[0_0_8px_rgba(255,255,255,0.9)]
            "
          />
        ))}

        {/* Shooting star one */}

        <motion.div
          initial={{
            x: "-20vw",
            y: "-10vh",
            opacity: 0,
          }}
          animate={{
            x: "120vw",
            y: "80vh",
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            repeatDelay: 7,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-0
            top-0
            h-[2px]
            w-28
            rotate-[32deg]
            rounded-full
            bg-gradient-to-r
            from-transparent
            via-pink-400
            to-white
            shadow-[0_0_10px_rgba(244,114,182,0.8)]
          "
        />

        {/* Shooting star two */}

        <motion.div
          initial={{
            x: "10vw",
            y: "-20vh",
            opacity: 0,
          }}
          animate={{
            x: "110vw",
            y: "70vh",
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatDelay: 11,
            delay: 4,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-0
            top-0
            h-px
            w-20
            rotate-[32deg]
            rounded-full
            bg-gradient-to-r
            from-transparent
            via-violet-400
            to-white
          "
        />
      </div>

      {/* ===================================================
          MAIN PAGE WIDTH
      =================================================== */}

      <div
        className="
          section-wrap
          relative
          z-10
          w-full
        "
      >
        {/* =================================================
            MAIN ABOUT CARD
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
            scale: 0.98,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.12,
          }}
          transition={{
            duration: 0.75,
            ease: "easeOut",
          }}
          className="
            relative
            overflow-hidden
            rounded-[2rem]

            border
            border-pink-300/40

            bg-white/65

            px-6
            py-10

            shadow-[0_30px_100px_rgba(120,40,100,0.18)]

            backdrop-blur-2xl

            sm:px-9

            lg:px-12
            lg:py-12

            dark:border-pink-300/10
            dark:bg-[#160a10]/85
            dark:shadow-[0_30px_100px_rgba(0,0,0,0.55)]
          "
        >
          {/* Inner border */}

          <div
            className="
              pointer-events-none
              absolute
              inset-[1px]
              rounded-[calc(2rem-1px)]
              border
              border-white/70
              dark:border-white/[0.04]
            "
          />

          {/* Card glow */}

          <motion.div
            animate={{
              opacity: [0.12, 0.28, 0.12],
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              pointer-events-none
              absolute
              -bottom-32
              left-1/3
              h-72
              w-72
              rounded-full
              bg-pink-500
              blur-[120px]
            "
          />

          {/* =================================================
              TWO-COLUMN LAYOUT

              Text remains on the left.
              Image remains on the right.
          ================================================= */}

          <div
            className="
              relative
              z-10
              grid
              items-center
              gap-14

              lg:grid-cols-[1fr_.9fr]
              lg:gap-12

              xl:gap-20
            "
          >
            {/* =================================================
                LEFT TEXT SECTION
            ================================================= */}

            <motion.div
              variants={leftContainerAnimation}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.15,
              }}
              className="
                order-1
                w-full
              "
            >
              {/* ===============================================
                  MAIN TITLE
              =============================================== */}

              <motion.h2
                variants={leftItemAnimation}
                className="
                  max-w-xl

                  font-serif
                  text-5xl
                  font-bold
                  italic
                  leading-[0.88]
                  tracking-[-0.045em]
                  text-pink-500

                  sm:text-6xl

                  lg:text-7xl

                  xl:text-[5.3rem]

                  dark:text-pink-400
                "
              >
                <motion.span
                  animate={{
                    textShadow: [
                      "0 0 0 rgba(236,72,153,0)",
                      "0 0 24px rgba(236,72,153,0.35)",
                      "0 0 0 rgba(236,72,153,0)",
                    ],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  ABOUT ME
                </motion.span>
              </motion.h2>

              {/* ===============================================
                  DESCRIPTION
              =============================================== */}

              <motion.p
                variants={leftItemAnimation}
                className="
                  mt-7
                  max-w-xl

                  text-sm
                  leading-7
                  text-zinc-700

                  sm:text-base
                  sm:leading-8

                  dark:text-pink-50/75
                "
              >
                Hi, I&apos;m{" "}

                <span
                  className="
                    font-bold
                    text-zinc-950
                    dark:text-white
                  "
                >
                  Mariah Villasan
                </span>
                , a web designer with a genuine passion for
                crafting clean and intuitive digital experiences.
                I enjoy turning ideas into interfaces that feel
                effortless to use while remaining visually
                beautiful and memorable.
              </motion.p>

              <motion.p
                variants={leftItemAnimation}
                className="
                  mt-4
                  max-w-xl

                  text-sm
                  leading-7
                  text-zinc-700

                  sm:text-base
                  sm:leading-8

                  dark:text-pink-50/75
                "
              >
                I&apos;m always exploring new design trends,
                improving my skills with modern tools, and pushing
                myself to grow as a designer. Every project is a
                chance to learn something new, and I&apos;m always
                excited to take on creative and challenging work.
              </motion.p>

              <motion.h3
                variants={leftItemAnimation}
                className="
                  mt-8

                  font-serif
                  text-3xl
                  font-bold
                  italic
                  text-pink-500

                  dark:text-pink-400
                "
              >
                Skills
              </motion.h3>

              {/* ===============================================
                  SKILLS
              =============================================== */}

              <motion.div
                variants={leftItemAnimation}
                className="
                  mt-6
                  flex
                  max-w-xl
                  flex-wrap
                  gap-2
                "
              >
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{
                      opacity: 0,
                      x: -25,
                      scale: 0.9,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                      scale: 1,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.45,
                      delay: 0.55 + index * 0.09,
                    }}
                    whileHover={{
                      y: -5,
                      scale: 1.05,
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                    className="
                      cursor-default
                      rounded-full

                      border
                      border-pink-300/60

                      bg-white/50

                      px-4
                      py-2

                      text-xs
                      font-semibold
                      text-zinc-700

                      shadow-sm
                      backdrop-blur-md

                      transition-colors
                      duration-300

                      hover:border-pink-500
                      hover:bg-pink-100/70
                      hover:text-pink-600

                      dark:border-white/10
                      dark:bg-white/[0.025]
                      dark:text-pink-50/80

                      dark:hover:border-pink-400/50
                      dark:hover:bg-pink-500/10
                      dark:hover:text-pink-300
                    "
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>

              {/* ===============================================
                  INFORMATION CARDS
              =============================================== */}

              <motion.div
                variants={leftItemAnimation}
                className="
                  mt-7
                  grid
                  max-w-xl
                  gap-4

                  sm:grid-cols-2
                "
              >
                {/* Currently card */}

                <motion.div
                  whileHover={{
                    y: -7,
                    scale: 1.02,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className="
                    group
                    relative
                    overflow-hidden

                    rounded-2xl

                    border
                    border-pink-300/40

                    bg-white/50

                    p-5

                    shadow-sm
                    backdrop-blur-xl

                    dark:border-white/10
                    dark:bg-white/[0.025]
                  "
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.25, 1],
                      opacity: [0.18, 0.35, 0.18],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="
                      absolute
                      -bottom-8
                      -right-7
                      h-16
                      w-16
                      rounded-full
                      bg-pink-500
                    "
                  />

                  <p
                    className="
                      relative
                      z-10

                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.2em]
                      text-pink-500

                      dark:text-pink-400
                    "
                  >
                    Currently
                  </p>

                  <p
                    className="
                      relative
                      z-10

                      mt-3

                      text-sm
                      font-semibold
                      leading-6
                      text-zinc-900

                      dark:text-pink-50
                    "
                  >
                    {profile.education ||
                      "BS Information Technology Student"}
                  </p>
                </motion.div>

                {/* Focus card */}

                <motion.div
                  whileHover={{
                    y: -7,
                    scale: 1.02,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className="
                    group
                    relative
                    overflow-hidden

                    rounded-2xl

                    border
                    border-pink-300/40

                    bg-white/50

                    p-5

                    shadow-sm
                    backdrop-blur-xl

                    dark:border-white/10
                    dark:bg-white/[0.025]
                  "
                >
                  <motion.div
                    animate={{
                      scale: [1.2, 1, 1.2],
                      opacity: [0.35, 0.18, 0.35],
                    }}
                    transition={{
                      duration: 4.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="
                      absolute
                      -bottom-8
                      -right-7
                      h-16
                      w-16
                      rounded-full
                      bg-fuchsia-500
                    "
                  />

                  <p
                    className="
                      relative
                      z-10

                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.2em]
                      text-pink-500

                      dark:text-pink-400
                    "
                  >
                    Focus
                  </p>

                  <p
                    className="
                      relative
                      z-10

                      mt-3

                      text-sm
                      font-semibold
                      leading-6
                      text-zinc-900

                      dark:text-pink-50
                    "
                  >
                    Web Systems & meaningful interfaces
                  </p>
                </motion.div>
              </motion.div>

              {/* ===============================================
                  QUOTE
              =============================================== */}

              <motion.div
                variants={leftItemAnimation}
                whileHover={{
                  x: 6,
                }}
                className="
                  mt-5
                  flex
                  max-w-xl
                  items-start
                  gap-4

                  rounded-r-2xl

                  border-l-2
                  border-pink-500

                  bg-pink-100/70

                  px-5
                  py-4

                  shadow-sm
                  backdrop-blur-md

                  dark:bg-pink-950/50
                "
              >
                <motion.span
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="
                    font-serif
                    text-3xl
                    font-bold
                    leading-none
                    text-pink-500
                  "
                >
                  “
                </motion.span>

                <p
                  className="
                    pt-1

                    text-xs
                    font-semibold
                    leading-5
                    text-zinc-800

                    sm:text-sm

                    dark:text-pink-50
                  "
                >
                  My goal is simple: create designs that people
                  enjoy using and remember.
                </p>
              </motion.div>

              {/* ===============================================
                  SIGNATURE
              =============================================== */}

              <motion.p
                variants={leftItemAnimation}
                whileHover={{
                  x: 7,
                  scale: 1.04,
                }}
                className="
                  mt-5
                  w-fit

                  font-serif
                  text-2xl
                  font-bold
                  italic
                  text-pink-500

                  dark:text-pink-400
                "
              >
                Mariah.
              </motion.p>
            </motion.div>

            {/* =================================================
                RIGHT PICTURE SECTION

                This section enters from the right side.
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                x: 140,
                scale: 0.9,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                scale: 1,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 1,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                order-2
                relative
                mx-auto
                w-full
                max-w-[430px]
                pb-8
                pt-10
              "
            >
              {/* ===============================================
                  ROTATING DECORATION
              =============================================== */}

              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 18,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  absolute
                  -right-2
                  top-0

                  h-28
                  w-28

                  rounded-full

                  border
                  border-dashed
                  border-pink-500/70
                "
              >
                <motion.span
                  animate={{
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="
                    absolute
                    bottom-1
                    right-4

                    h-2.5
                    w-2.5

                    rotate-45

                    bg-pink-500

                    shadow-[0_0_14px_rgba(236,72,153,0.9)]
                  "
                />
              </motion.div>

              {/* ===============================================
                  BACK PHOTO CARD
              =============================================== */}

              <motion.div
                animate={{
                  rotate: [3, 5, 3],
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  inset-x-6
                  bottom-2
                  top-14

                  rounded-[2rem]

                  border
                  border-pink-300/30

                  bg-pink-100/20

                  dark:border-white/10
                  dark:bg-white/[0.02]
                "
              />

              {/* ===============================================
                  MAIN PHOTO CARD
              =============================================== */}

              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                whileHover={{
                  scale: 1.025,
                  rotate: -1,
                }}
                className="
                  group
                  relative
                  overflow-hidden

                  rounded-[2rem]

                  border
                  border-pink-300/40

                  bg-white/30

                  p-2

                  shadow-[0_25px_65px_rgba(190,24,93,0.25)]

                  backdrop-blur-xl

                  dark:border-white/10
                  dark:bg-white/[0.025]
                "
              >
                <div
                  className="
                    relative
                    min-h-[460px]
                    overflow-hidden

                    rounded-[1.55rem]

                    bg-gradient-to-b
                    from-pink-100
                    to-pink-200

                    dark:from-[#2b111d]
                    dark:to-[#170a10]
                  "
                >
                  {/* ===========================================
                      PICTURE
                  =========================================== */}

                  <img
                    src="/p2.jpg"
                    alt="Mariah Villasan"
                    draggable={false}
                    className="
                      absolute
                      inset-0

                      h-full
                      w-full

                      select-none
                      object-cover
                      object-center

                      transition-transform
                      duration-700

                      group-hover:scale-[1.04]
                    "
                  />

                  {/* Dark bottom gradient */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-0

                      bg-gradient-to-t
                      from-[#170a10]/75
                      via-transparent
                      to-transparent
                    "
                  />

                  {/* Animated photo shine */}

                  <motion.div
                    animate={{
                      x: ["-180%", "250%"],
                    }}
                    transition={{
                      duration: 2.8,
                      repeat: Infinity,
                      repeatDelay: 4,
                      ease: "easeInOut",
                    }}
                    className="
                      pointer-events-none

                      absolute
                      -top-20
                      left-0

                      h-[140%]
                      w-24

                      rotate-[18deg]

                      bg-gradient-to-r
                      from-transparent
                      via-white/20
                      to-transparent

                      blur-lg
                    "
                  />

                  {/* Photo border */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-0

                      rounded-[1.55rem]

                      border
                      border-white/20
                    "
                  />

                  {/* Age information */}

                  <motion.div
                    initial={{
                      opacity: 0,
                      x: -30,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.7,
                      delay: 1,
                    }}
                    className="
                      absolute
                      bottom-5
                      left-5
                      text-white
                    "
                  >
                    <motion.p
                      animate={{
                        textShadow: [
                          "0 0 0 rgba(244,114,182,0)",
                          "0 0 18px rgba(244,114,182,0.75)",
                          "0 0 0 rgba(244,114,182,0)",
                        ],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                      }}
                      className="
                        font-serif
                        text-5xl
                        font-bold
                        italic
                      "
                    >
                      22
                    </motion.p>

                    <p
                      className="
                        text-[9px]
                        font-bold
                        uppercase
                        tracking-[0.22em]
                      "
                    >
                      Years of curiosity
                    </p>
                  </motion.div>
                </div>
              </motion.div>

              {/* ===============================================
                  CREATIVE THINKER LABEL
              =============================================== */}

              <motion.div
                initial={{
                  opacity: 0,
                  x: 80,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                animate={{
                  y: [0, -7, 0],
                }}
                transition={{
                  opacity: {
                    duration: 0.7,
                    delay: 1,
                  },

                  x: {
                    duration: 0.7,
                    delay: 1,
                  },

                  y: {
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
                whileHover={{
                  scale: 1.06,
                }}
                className="
                  absolute
                  -left-5
                  top-20

                  rounded-xl

                  border
                  border-pink-300/40

                  bg-white/90

                  px-4
                  py-3

                  shadow-xl
                  backdrop-blur-xl

                  dark:border-white/10
                  dark:bg-[#1d0d14]/90
                "
              >
                <p
                  className="
                    text-[10px]
                    font-bold
                    text-zinc-900
                    dark:text-white
                  "
                >
                  Creative thinker
                </p>

                <p
                  className="
                    mt-1
                    text-[8px]
                    font-bold
                    uppercase
                    tracking-[0.18em]
                    text-pink-500
                  "
                >
                  Ideas into visuals
                </p>
              </motion.div>

              {/* ===============================================
                  DETAIL FOCUSED LABEL
              =============================================== */}

              <motion.div
                initial={{
                  opacity: 0,
                  x: 80,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                animate={{
                  y: [0, 8, 0],
                }}
                transition={{
                  opacity: {
                    duration: 0.7,
                    delay: 1.15,
                  },

                  x: {
                    duration: 0.7,
                    delay: 1.15,
                  },

                  y: {
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
                whileHover={{
                  scale: 1.06,
                }}
                className="
                  absolute
                  -right-5
                  bottom-24

                  rounded-xl

                  border
                  border-pink-300/40

                  bg-white/90

                  px-4
                  py-3

                  shadow-xl
                  backdrop-blur-xl

                  dark:border-white/10
                  dark:bg-[#1d0d14]/90
                "
              >
                <div className="flex items-center gap-1.5">
                  <motion.div
                    animate={{
                      rotate: [0, 20, -20, 0],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Sparkles
                      className="
                        h-3
                        w-3
                        text-pink-500
                      "
                    />
                  </motion.div>

                  <p
                    className="
                      text-[10px]
                      font-bold
                      text-zinc-900
                      dark:text-white
                    "
                  >
                    Detail focused
                  </p>
                </div>

                <p
                  className="
                    mt-1
                    text-[8px]
                    font-bold
                    uppercase
                    tracking-[0.18em]
                    text-pink-500
                  "
                >
                  Made with care
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
