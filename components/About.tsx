"use client";

import Image from "next/image";
import { useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import {
  Code2,
  GraduationCap,
  Heart,
  Layers3,
  Palette,
  Sparkles,
} from "lucide-react";

import { profile } from "@/data/portfolio";

const skills = [
  "UI/UX Design",
  "Figma",
  "HTML",
  "CSS",
  "JavaScript",
  "Responsive Design",
  "Wireframing",
  "Prototyping",
  "Canva",
];

const interests = [
  "Frontend Development",
  "UI/UX Design",
  "Figma",
  "Responsive Websites",
];

const stars = Array.from({ length: 32 }, (_, index) => ({
  id: index,
  left: `${(index * 37.7) % 100}%`,
  top: `${(index * 23.3) % 100}%`,
  size: index % 5 === 0 ? 3 : index % 2 === 0 ? 2 : 1,
  delay: (index * 0.17) % 3,
}));

export default function About() {
  return (
    <section
      id="about"
      className="relative isolate min-h-screen overflow-hidden bg-transparent px-4 py-24 sm:px-6 lg:px-8"
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20"
      >
        <motion.div
          animate={{
            x: [0, 80, 0],
            y: [0, -40, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-48 top-0 h-[520px] w-[520px] rounded-full bg-pink-500/15 blur-[140px]"
        />

        <motion.div
          animate={{
            x: [0, -70, 0],
            y: [0, 60, 0],
            scale: [1.1, 0.95, 1.1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-48 top-[20%] h-[560px] w-[560px] rounded-full bg-violet-500/15 blur-[150px]"
        />

        <div className="absolute bottom-[-240px] left-[25%] h-[600px] w-[600px] rounded-full bg-blue-500/10 blur-[160px]" />

        {stars.map((star) => (
          <motion.span
            key={star.id}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [0.8, 1.4, 0.8],
            }}
            transition={{
              duration: 2.5 + (star.id % 3),
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
            className="absolute rounded-full bg-pink-300 shadow-[0_0_8px_rgba(244,114,182,0.9)] dark:bg-white"
          />
        ))}
      </div>

      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-pink-300/30 bg-pink-500/5 px-4 py-2 backdrop-blur-xl dark:border-pink-400/15">
            <Sparkles size={14} className="text-pink-500" />

            <span className="font-mono text-xs uppercase tracking-[0.28em] text-pink-600 dark:text-pink-300">
              02 / About Me
            </span>
          </div>

          <h2 className="mt-5 text-4xl font-black tracking-[-0.05em] text-zinc-900 sm:text-5xl lg:text-6xl dark:text-white">
            Creative mind,{" "}
            <span className="bg-gradient-to-r from-pink-500 via-fuchsia-500 to-violet-500 bg-clip-text text-transparent">
              growing developer.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-zinc-600 sm:text-base dark:text-zinc-400">
            I enjoy turning ideas into clean, creative, and user-friendly
            website designs while continuing to improve my development skills.
          </p>
        </motion.div>

        <div className="grid gap-5 lg:grid-cols-12">
          {/* Introduction */}
          <motion.article
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65 }}
            className="relative overflow-hidden rounded-[2rem] border border-zinc-200/70 bg-white/60 p-7 shadow-xl shadow-black/5 backdrop-blur-xl sm:p-9 lg:col-span-7 dark:border-white/10 dark:bg-white/[0.04]"
          >
            <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-pink-500/10 blur-3xl" />

            <div className="relative z-10">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-pink-500">
                Hello, I&apos;m
              </p>

              <h3 className="mt-3 text-4xl font-black tracking-tight text-zinc-900 sm:text-5xl dark:text-white">
                {profile.name}
              </h3>

              <p className="mt-3 text-lg font-semibold text-pink-600 dark:text-pink-300">
                {profile.role}
              </p>

              <p className="mt-7 max-w-2xl text-sm leading-8 text-zinc-600 sm:text-base dark:text-zinc-400">
                {profile.bio}
              </p>

              <p className="mt-5 max-w-2xl text-sm leading-8 text-zinc-600 sm:text-base dark:text-zinc-400">
                I am still learning React, Tailwind CSS, databases, and API
                integration. I enjoy practicing through school activities and
                personal projects because every project helps me become more
                confident.
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ y: -3, scale: 1.04 }}
                    className="rounded-full border border-pink-300/30 bg-pink-500/5 px-4 py-2 text-xs font-medium text-zinc-700 transition-colors hover:border-pink-400/50 hover:text-pink-600 dark:border-pink-400/15 dark:bg-white/5 dark:text-zinc-300"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.article>

          {/* Flipping picture frame */}
          <FlipPortrait />

          {/* Education */}
          <motion.article
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            className="rounded-[1.75rem] border border-zinc-200/70 bg-white/60 p-6 shadow-lg backdrop-blur-xl lg:col-span-4 dark:border-white/10 dark:bg-white/[0.04]"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-500 text-white shadow-lg shadow-pink-500/25">
              <GraduationCap />
            </div>

            <p className="mt-5 font-mono text-xs uppercase tracking-[0.2em] text-pink-500">
              Education
            </p>

            <h3 className="mt-3 text-xl font-bold text-zinc-900 dark:text-white">
              {profile.education}
            </h3>

            <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
              BSIT student focused on web systems, frontend development, and
              user interface design.
            </p>
          </motion.article>

          {/* Main focus */}
          <motion.article
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            className="rounded-[1.75rem] border border-zinc-200/70 bg-white/60 p-6 shadow-lg backdrop-blur-xl lg:col-span-4 dark:border-white/10 dark:bg-white/[0.04]"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-500 text-white shadow-lg shadow-violet-500/25">
              <Palette />
            </div>

            <p className="mt-5 font-mono text-xs uppercase tracking-[0.2em] text-violet-500">
              Main Focus
            </p>

            <div className="mt-4 space-y-3">
              {interests.map((interest) => (
                <div
                  key={interest}
                  className="flex items-center gap-3 text-sm font-medium text-zinc-700 dark:text-zinc-300"
                >
                  <span className="h-2 w-2 rounded-full bg-violet-500" />
                  {interest}
                </div>
              ))}
            </div>
          </motion.article>

          {/* Beyond coding */}
          <motion.article
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            className="rounded-[1.75rem] border border-zinc-200/70 bg-gradient-to-br from-pink-500 to-violet-600 p-6 text-white shadow-xl shadow-pink-500/20 lg:col-span-4"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-xl">
              <Heart />
            </div>

            <p className="mt-5 font-mono text-xs uppercase tracking-[0.2em] text-white/70">
              Beyond Coding
            </p>

            <h3 className="mt-3 text-xl font-bold">
              Extrovert and creative
            </h3>

            <p className="mt-3 text-sm leading-6 text-white/80">
              I enjoy playing mobile games, watching movies, eating good food,
              and scrolling through TikTok, Instagram, and Facebook.
            </p>
          </motion.article>

          {/* Current goals */}
          <motion.article
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-[1.75rem] border border-zinc-200/70 bg-white/60 p-6 shadow-lg backdrop-blur-xl lg:col-span-12 dark:border-white/10 dark:bg-white/[0.04]"
          >
            <div className="grid gap-6 sm:grid-cols-3">
              <StatusItem
                icon={<Code2 size={19} />}
                title="Frontend"
                text="Improving React and Tailwind CSS"
              />

              <StatusItem
                icon={<Layers3 size={19} />}
                title="Design"
                text="Creating interfaces using Figma"
              />

              <StatusItem
                icon={<Sparkles size={19} />}
                title="Current Goal"
                text="Build clean and responsive projects"
              />
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}

// Flip animation adapted from Uiverse.io by IWhat1.
function FlipPortrait() {
  const [flipped, setFlipped] = useState(false);
  const [hovered, setHovered] = useState(false);

  const showBack = flipped || hovered;

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65 }}
      className="portrait-container lg:col-span-5"
    >
      <button
        type="button"
        className="portrait-toggle"
        aria-label="Flip between my portrait and em.png image"
        aria-pressed={showBack}
        onPointerEnter={(event) => {
          if (event.pointerType === "mouse") {
            setHovered(true);
          }
        }}
        onPointerLeave={() => setHovered(false)}
        onClick={() => {
          setFlipped(!showBack);
          setHovered(false);
        }}
      >
        <span
          className={`portrait-card${showBack ? " is-flipped" : ""}`}
        >
          {/* Front picture */}
          <span
            className="portrait-face portrait-front"
            aria-hidden={showBack}
          >
            <span className="portrait-photo">
              <Image
                src="/images/me3.jpeg"
                alt="Mariah Villasan portrait"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
            </span>

            <span className="portrait-caption">
              <span className="portrait-heading">
                {profile.name}
              </span>

              <span className="portrait-description">
                Hover or tap to see my other side
              </span>
            </span>
          </span>

          {/* Back picture */}
          <span
            className="portrait-face portrait-back"
            aria-hidden={!showBack}
          >
            <span className="portrait-photo">
              <Image
                src="/images/em.png"
                alt="The other side of Mariah's portrait card"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
            </span>

            <span className="portrait-caption">
              <span className="portrait-heading">
                Two sides of me
              </span>

              <span className="portrait-description">
                A little more about me, beyond the code.
              </span>
            </span>
          </span>
        </span>
      </button>

      <style jsx>{`
        .portrait-container {
          width: 100%;
          min-height: 470px;
          perspective: 900px;
        }

        .portrait-toggle {
          display: block;
          position: relative;
          width: 100%;
          height: 100%;
          min-height: 470px;
          padding: 0;
          border: 0;
          border-radius: 2rem;
          background: transparent;
          text-align: left;
          cursor: pointer;
          -webkit-tap-highlight-color: transparent;
        }

        .portrait-toggle:focus-visible {
          outline: 3px solid #0aa4f8;
          outline-offset: 6px;
        }

        .portrait-card {
          display: block;
          position: absolute;
          inset: 0;
          border-radius: 2rem;
          transition: transform 1500ms;
          transform-style: preserve-3d;
        }

        .portrait-card.is-flipped {
          transform: rotateY(180deg) rotateZ(180deg);
        }

        .portrait-face {
          display: block;
          position: absolute;
          inset: 0;
          padding: 6px;
          border-radius: 2rem;
          box-shadow: 0 0 10px 2px rgba(50, 50, 50, 0.5);
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          color: aliceblue;
          background: linear-gradient(
            -135deg,
            #f80a4a,
            #0aa4f8
          );
        }

        .portrait-back {
          transform: rotateY(180deg) rotateZ(180deg);
        }

        .portrait-photo {
          display: block;
          position: absolute;
          inset: 6px;
          overflow: hidden;
          border-radius: calc(2rem - 6px);
          background: #18181b;
        }

        .portrait-caption {
          display: flex;
          position: absolute;
          inset: 6px;
          flex-direction: column;
          justify-content: flex-end;
          gap: 12px;
          padding: 28px;
          border-radius: calc(2rem - 6px);
          background: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.85),
            transparent 60%
          );
        }

        .portrait-heading {
          font-size: 28px;
          font-weight: bold;
          line-height: 1.2;
          font-family:
            -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            sans-serif;
        }

        .portrait-description {
          font-size: 14px;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.85);
        }

        @media (prefers-reduced-motion: reduce) {
          .portrait-card {
            transition: none;
          }
        }
      `}</style>
    </motion.div>
  );
}

type StatusItemProps = {
  icon: ReactNode;
  title: string;
  text: string;
};

function StatusItem({ icon, title, text }: StatusItemProps) {
  return (
    <div className="flex items-start gap-4 rounded-2xl border border-zinc-200/70 bg-white/40 p-4 dark:border-white/10 dark:bg-white/[0.03]">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-pink-500 text-white shadow-lg shadow-pink-500/20">
        {icon}
      </div>

      <div>
        <p className="text-sm font-bold text-zinc-900 dark:text-white">
          {title}
        </p>

        <p className="mt-1 text-xs leading-5 text-zinc-500 dark:text-zinc-400">
          {text}
        </p>
      </div>
    </div>
  );
}