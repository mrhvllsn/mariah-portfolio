"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FiArrowDown,
  FiGithub,
  FiLinkedin,
  FiTwitter,
} from "react-icons/fi";

import { profile } from "@/data/portfolio";

/* =========================================================
   DATA
========================================================= */

const stars = [
  { left: "4%", top: "14%", size: 3, duration: 3 },
  { left: "10%", top: "65%", size: 2, duration: 4 },
  { left: "17%", top: "37%", size: 4, duration: 3.5 },
  { left: "24%", top: "83%", size: 2, duration: 5 },
  { left: "32%", top: "18%", size: 3, duration: 4.5 },
  { left: "40%", top: "60%", size: 2, duration: 3 },
  { left: "48%", top: "9%", size: 4, duration: 5 },
  { left: "56%", top: "77%", size: 3, duration: 4 },
  { left: "64%", top: "31%", size: 2, duration: 3.5 },
  { left: "72%", top: "88%", size: 4, duration: 5 },
  { left: "80%", top: "16%", size: 3, duration: 4 },
  { left: "87%", top: "58%", size: 2, duration: 3 },
  { left: "94%", top: "79%", size: 3, duration: 4.5 },
  { left: "97%", top: "24%", size: 2, duration: 5 },
];

const skills = [
  "HTML",
  "PROTOTYPING",
  "WEB DESIGN",
  "UI/UX",
  "CREATIVE DEVELOPMENT",
  "FIGMA",
  "CANVA",
];

/* =========================================================
   UNIVERSE BACKGROUND
========================================================= */

function FloatingUniverse() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* Grid */}

      <div
        className="
          absolute
          inset-0
          opacity-100
          [background-image:linear-gradient(rgba(236,72,153,0.13)_1px,transparent_1px),linear-gradient(90deg,rgba(236,72,153,0.13)_1px,transparent_1px)]
          [background-size:50px_50px]
          dark:opacity-50
          dark:[background-image:linear-gradient(rgba(244,114,182,0.10)_1px,transparent_1px),linear-gradient(90deg,rgba(244,114,182,0.10)_1px,transparent_1px)]
        "
      />

      {/* Pink glow */}

      <motion.div
        animate={{
          x: [0, 60, 0],
          y: [0, 35, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -left-36
          -top-36
          h-[450px]
          w-[450px]
          rounded-full
          bg-pink-400/30
          blur-[130px]
          dark:bg-pink-500/20
        "
      />

      {/* Purple glow */}

      <motion.div
        animate={{
          x: [0, -50, 0],
          y: [0, -35, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -bottom-40
          right-0
          h-[520px]
          w-[520px]
          rounded-full
          bg-purple-400/25
          blur-[150px]
          dark:bg-purple-500/20
        "
      />

      {/* Stars */}

      {stars.map((star, index) => (
        <motion.span
          key={index}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [0.6, 1.6, 0.6],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: index * 0.2,
          }}
          className="
            absolute
            rounded-full
            bg-pink-500
            shadow-[0_0_10px_#ec4899]
          "
          style={{
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
          }}
        />
      ))}

      {/* Planet */}

      <motion.div
        animate={{
          y: [0, -25, 0],
          rotate: [0, 12, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[7%] top-[16%] opacity-80"
      >
        <div
          className="
            relative
            h-20
            w-20
            rounded-full
            border
            border-pink-400/40
            bg-gradient-to-br
            from-pink-300/50
            via-purple-300/30
            to-transparent
            shadow-[0_0_45px_rgba(236,72,153,0.3)]
            dark:from-pink-500/30
            dark:via-purple-500/20
          "
        >
          <div
            className="
              absolute
              left-1/2
              top-1/2
              h-7
              w-28
              -translate-x-1/2
              -translate-y-1/2
              -rotate-12
              rounded-[50%]
              border
              border-pink-400/50
            "
          />
        </div>
      </motion.div>

      {/* Orbit */}

      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          bottom-[20%]
          left-[5%]
          h-36
          w-36
          rounded-full
          border
          border-dashed
          border-pink-500/30
        "
      >
        <span
          className="
            absolute
            -top-2
            left-1/2
            h-4
            w-4
            rounded-full
            bg-pink-500
            shadow-[0_0_18px_#ec4899]
          "
        />
      </motion.div>

      {/* Shooting star */}

      <motion.div
        animate={{
          x: ["0vw", "75vw"],
          y: ["0vh", "42vh"],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatDelay: 5,
          ease: "easeIn",
        }}
        className="
          absolute
          left-[8%]
          top-[10%]
          h-px
          w-24
          rotate-[28deg]
          bg-gradient-to-r
          from-transparent
          to-pink-500
        "
      />
    </div>
  );
}

/* =========================================================
   MOVING SKILLS BANNER
========================================================= */

function MovingTextBanner() {
  const repeatedSkills = [...skills, ...skills, ...skills];

  return (
    <div
      className="
        absolute
        bottom-4
        left-1/2
        z-50
        w-[110%]
        -translate-x-1/2
        -rotate-1
        overflow-hidden
        border-y
        border-pink-400/40
        bg-[#5c1234]/95
        py-3
        shadow-[0_0_30px_rgba(236,72,153,0.25)]
        backdrop-blur-md
      "
    >
      <motion.div
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex w-max whitespace-nowrap"
      >
        {repeatedSkills.map((skill, index) => (
          <div
            key={`${skill}-${index}`}
            className="
              flex
              shrink-0
              items-center
              gap-7
              px-4
              font-mono
              text-sm
              font-black
              uppercase
              tracking-[0.14em]
              text-pink-300
              sm:text-base
            "
          >
            <span>{skill}</span>
            <span className="text-pink-100">✦</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

/* =========================================================
   HOME COMPONENT
========================================================= */

export default function Home() {
  const [typedName, setTypedName] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullName = profile.name;
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && typedName.length < fullName.length) {
      timeout = setTimeout(() => {
        setTypedName(fullName.slice(0, typedName.length + 1));
      }, 120);
    } else if (!isDeleting && typedName.length === fullName.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 1800);
    } else if (isDeleting && typedName.length > 0) {
      timeout = setTimeout(() => {
        setTypedName(fullName.slice(0, typedName.length - 1));
      }, 70);
    } else {
      timeout = setTimeout(() => {
        setIsDeleting(false);
      }, 500);
    }

    return () => clearTimeout(timeout);
  }, [typedName, isDeleting]);

  return (
    <section
      id="home"
      className="
        relative
        flex
        min-h-screen
        items-center
        overflow-hidden
        bg-transparent
        px-6
        pb-48
        pt-28
        transition-colors
        duration-500
        sm:px-10
        lg:px-16
      "
    >
      <FloatingUniverse />

      <motion.div
        initial={{
          opacity: 0,
          x: -35,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 0.7,
        }}
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-7xl
        "
      >
        {/* Welcome text */}

        <div className="max-w-3xl">
          <div className="flex items-center gap-3">
            <motion.span
              initial={{
                width: 0,
              }}
              animate={{
                width: 32,
              }}
              transition={{
                duration: 0.8,
                delay: 0.4,
              }}
              className="h-px bg-pink-500"
            />

            <p
              className="
                font-mono
                text-xs
                font-bold
                uppercase
                tracking-[0.28em]
                text-pink-600
                dark:text-pink-300
              "
            >
              Welcome to my portfolio
            </p>
          </div>
        </div>

        {/* Centered title and name */}

        <div className="mt-5 w-full text-center">
          <h1
            className="
              text-5xl
              font-black
              uppercase
              leading-[0.9]
              tracking-tight
              text-zinc-900
              sm:text-6xl
              lg:text-7xl
              dark:text-white
            "
          >
            Hello, I&apos;m
          </h1>

          <div className="mt-3 min-h-[100px]">
            <h2
              className="
                inline
                break-words
                text-5xl
                font-black
                uppercase
                leading-[0.9]
                tracking-tight
                text-transparent
                [-webkit-text-stroke:2px_#ec4899]
                sm:text-6xl
                lg:text-7xl
                dark:[-webkit-text-stroke:2px_#f9a8d4]
              "
            >
              {typedName}
            </h2>

            <motion.span
              animate={{
                opacity: [1, 0, 1],
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
              }}
              className="
                ml-2
                inline-block
                h-12
                w-[3px]
                bg-pink-500
                align-bottom
                sm:h-14
                lg:h-16
              "
            />
          </div>
        </div>

        {/* Remaining left-aligned content */}

        <div className="max-w-3xl">
          <h3
            className="
              mt-2
              text-xl
              font-semibold
              text-zinc-800
              dark:text-zinc-100
            "
          >
            {profile.role}
          </h3>

          <p
            className="
              mt-4
              max-w-xl
              text-base
              leading-7
              text-zinc-600
              dark:text-zinc-400
            "
          >
            {profile.tagline}
          </p>

          {/* Buttons */}

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#about"
              className="
                rounded-xl
                bg-pink-500
                px-6
                py-3
                text-sm
                font-semibold
                text-white
                shadow-lg
                shadow-pink-500/20
                transition
                hover:-translate-y-1
                hover:bg-pink-400
                hover:shadow-pink-500/40
              "
            >
              Know Me Better
            </a>

            <a
              href="#skills"
              className="
                rounded-xl
                border
                border-pink-300/50
                bg-white/40
                px-6
                py-3
                text-sm
                font-semibold
                text-zinc-900
                backdrop-blur-md
                transition
                hover:-translate-y-1
                hover:bg-pink-500/10
                hover:text-pink-600
                dark:border-pink-400/20
                dark:bg-white/5
                dark:text-white
                dark:hover:text-pink-300
              "
            >
              See My Skills
            </a>
          </div>

          {/* Social links */}

          <div className="mt-8 flex flex-wrap items-center gap-8">
            <div
              className="
                flex
                gap-5
                text-xl
                text-zinc-600
                dark:text-zinc-400
              "
            >
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="
                  transition
                  hover:-translate-y-1
                  hover:text-pink-500
                "
              >
                <FiGithub />
              </a>

              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="
                  transition
                  hover:-translate-y-1
                  hover:text-pink-500
                "
              >
                <FiLinkedin />
              </a>

              <a
                href={profile.socials.twitter}
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
                className="
                  transition
                  hover:-translate-y-1
                  hover:text-pink-500
                "
              >
                <FiTwitter />
              </a>
            </div>

            <a
              href="#about"
              className="
                inline-flex
                items-center
                gap-2
                font-mono
                text-xs
                text-zinc-600
                transition
                hover:text-pink-500
                dark:text-zinc-400
                dark:hover:text-pink-300
              "
            >
              SCROLL DOWN

              <motion.span
                animate={{
                  y: [0, 5, 0],
                }}
                transition={{
                  duration: 1.3,
                  repeat: Infinity,
                }}
              >
                <FiArrowDown />
              </motion.span>
            </a>
          </div>
        </div>
      </motion.div>

      {/* Moving text banner */}

      <MovingTextBanner />
    </section>
  );
}