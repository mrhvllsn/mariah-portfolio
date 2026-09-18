"use client";

import Image from "next/image";
import { useEffect, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Code2,
  ExternalLink,
  GraduationCap,
  Heart,
  Layers3,
  Palette,
  Sparkles,
  X,
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

const galleryPictures = [
  {
    src: "/images/me1.jpeg",
    alt: "Mariah Villasan portrait",
  },
  {
    src: "/images/me2.jpeg",
    alt: "Mariah Villasan gallery picture 2",
  },
  {
    src: "/images/me3.jpeg",
    alt: "Mariah Villasan gallery picture 3",
  },
  {
    src: "/p2.jpg",
    alt: "Mariah Villasan gallery picture 4",
  },
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
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [selectedPicture, setSelectedPicture] = useState(0);

  const openGallery = (index: number) => {
    setSelectedPicture(index);
    setGalleryOpen(true);
  };

  const closeGallery = () => {
    setGalleryOpen(false);
  };

  const showPreviousPicture = () => {
    setSelectedPicture((current) =>
      current === 0 ? galleryPictures.length - 1 : current - 1
    );
  };

  const showNextPicture = () => {
    setSelectedPicture((current) =>
      current === galleryPictures.length - 1 ? 0 : current + 1
    );
  };

  /* Keyboard controls and page scrolling */

  useEffect(() => {
    if (!galleryOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setGalleryOpen(false);
      }

      if (event.key === "ArrowLeft") {
        setSelectedPicture((current) =>
          current === 0 ? galleryPictures.length - 1 : current - 1
        );
      }

      if (event.key === "ArrowRight") {
        setSelectedPicture((current) =>
          current === galleryPictures.length - 1 ? 0 : current + 1
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [galleryOpen]);

  return (
    <>
      <section
        id="about"
        className="relative isolate min-h-screen overflow-hidden bg-transparent px-4 py-24 sm:px-6 lg:px-8"
      >
        {/* Background effects */}

        <div className="pointer-events-none absolute inset-0 -z-20">
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
              amount: 0.3,
            }}
            transition={{
              duration: 0.6,
            }}
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
              website designs while continuing to improve my development
              skills.
            </p>
          </motion.div>

          {/* Main grid */}

          <div className="grid gap-5 lg:grid-cols-12">
            {/* Information */}

            <motion.article
              initial={{
                opacity: 0,
                x: -40,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.65,
              }}
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
                      whileHover={{
                        y: -3,
                        scale: 1.04,
                      }}
                      className="rounded-full border border-pink-300/30 bg-pink-500/5 px-4 py-2 text-xs font-medium text-zinc-700 transition-colors hover:border-pink-400/50 hover:text-pink-600 dark:border-pink-400/15 dark:bg-white/5 dark:text-zinc-300"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.article>

            {/* Main photo */}

            <motion.button
              type="button"
              onClick={() => openGallery(0)}
              initial={{
                opacity: 0,
                x: 40,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              whileHover={{
                y: -8,
              }}
              transition={{
                duration: 0.65,
              }}
              className="group relative min-h-[470px] overflow-hidden rounded-[2rem] border border-pink-300/30 bg-zinc-900 text-left shadow-[0_30px_80px_rgba(236,72,153,0.16)] lg:col-span-5"
            >
              <Image
                src={galleryPictures[0].src}
                alt={galleryPictures[0].alt}
                fill
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-black/10" />

              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/30 px-4 py-2 text-xs font-medium text-white backdrop-blur-xl">
                  <ExternalLink size={14} />
                  Click to open gallery
                </div>

                <p className="mt-4 text-2xl font-black text-white">
                  My moments
                </p>

                <p className="mt-2 text-sm text-white/70">
                  View more pictures and learn more about me.
                </p>
              </div>
            </motion.button>

            {/* Education */}

            <motion.article
              initial={{
                opacity: 0,
                y: 35,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              whileHover={{
                y: -6,
              }}
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

            {/* Focus */}

            <motion.article
              initial={{
                opacity: 0,
                y: 35,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              whileHover={{
                y: -6,
              }}
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

            {/* Personality */}

            <motion.article
              initial={{
                opacity: 0,
                y: 35,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              whileHover={{
                y: -6,
              }}
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
                I enjoy playing mobile games, watching movies, eating good
                food, and scrolling through TikTok, Instagram, and Facebook.
              </p>
            </motion.article>

            {/* Learning status */}

            <motion.article
              initial={{
                opacity: 0,
                y: 35,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
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

      {/* Full-screen gallery */}

      <AnimatePresence>
        {galleryOpen && (
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
            onClick={closeGallery}
            role="dialog"
            aria-modal="true"
            aria-label="Mariah's picture gallery"
            className="fixed inset-0 z-[150] flex items-center justify-center bg-black/90 p-4 backdrop-blur-xl sm:p-8"
          >
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.9,
                y: 40,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.94,
                y: 20,
              }}
              transition={{
                type: "spring",
                stiffness: 180,
                damping: 22,
              }}
              onClick={(event) => event.stopPropagation()}
              className="relative w-full max-w-5xl"
            >
              {/* Close button */}

              <button
                type="button"
                onClick={closeGallery}
                className="absolute right-3 top-3 z-30 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white backdrop-blur-xl transition-all hover:rotate-90 hover:bg-pink-500"
                aria-label="Close gallery"
              >
                <X />
              </button>

              {/* Current picture */}

              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-950 shadow-[0_40px_120px_rgba(0,0,0,0.6)]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={galleryPictures[selectedPicture].src}
                    initial={{
                      opacity: 0,
                      scale: 1.04,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.97,
                    }}
                    transition={{
                      duration: 0.35,
                    }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={galleryPictures[selectedPicture].src}
                      alt={galleryPictures[selectedPicture].alt}
                      fill
                      className="object-contain"
                      sizes="100vw"
                    />
                  </motion.div>
                </AnimatePresence>

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />

                {/* Previous */}

                <button
                  type="button"
                  onClick={showPreviousPicture}
                  className="absolute left-3 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur-xl transition-all hover:scale-110 hover:bg-pink-500 sm:left-5"
                  aria-label="Previous picture"
                >
                  <ChevronLeft />
                </button>

                {/* Next */}

                <button
                  type="button"
                  onClick={showNextPicture}
                  className="absolute right-3 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur-xl transition-all hover:scale-110 hover:bg-pink-500 sm:right-5"
                  aria-label="Next picture"
                >
                  <ChevronRight />
                </button>

                {/* Counter */}

                <div className="absolute bottom-5 left-1/2 z-20 -translate-x-1/2 rounded-full border border-white/20 bg-black/40 px-4 py-2 font-mono text-xs text-white backdrop-blur-xl">
                  {String(selectedPicture + 1).padStart(2, "0")} /{" "}
                  {String(galleryPictures.length).padStart(2, "0")}
                </div>
              </div>

              {/* Thumbnails */}

              <div className="mt-5 flex items-center justify-center gap-3 overflow-x-auto pb-2">
                {galleryPictures.map((picture, index) => (
                  <button
                    key={picture.src}
                    type="button"
                    onClick={() => setSelectedPicture(index)}
                    aria-label={`Open picture ${index + 1}`}
                    className={`relative h-16 w-20 shrink-0 overflow-hidden rounded-xl border-2 transition-all sm:h-20 sm:w-28 ${
                      selectedPicture === index
                        ? "scale-105 border-pink-500 shadow-lg shadow-pink-500/25"
                        : "border-white/10 opacity-60 hover:border-white/40 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={picture.src}
                      alt={picture.alt}
                      fill
                      className="object-cover"
                      sizes="112px"
                    />
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
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