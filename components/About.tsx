"use client";

import Image from "next/image";
import {
  useEffect,
  useId,
  useRef,
  useState,
  type PointerEvent,
  type ReactNode,
} from "react";
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

          <SymbiotePortrait />

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

            <h3 className="mt-3 text-xl font-bold">Extrovert and creative</h3>

            <p className="mt-3 text-sm leading-6 text-white/80">
              I enjoy playing mobile games, watching movies, eating good food,
              and scrolling through TikTok, Instagram, and Facebook.
            </p>
          </motion.article>

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

type RevealSpot = {
  id: number;
  x: number;
  y: number;
  radius: number;
};

function SymbiotePortrait() {
  const frameRef = useRef<HTMLDivElement>(null);
  const uniqueId = useId().replace(/:/g, "");
  const maskId = `${uniqueId}-mask`;
  const warpId = `${uniqueId}-warp`;

  const nextId = useRef(0);
  const lastPoint = useRef({ x: -1000, y: -1000, time: 0 });
  const clearTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [size, setSize] = useState({ width: 400, height: 500 });
  const [spots, setSpots] = useState<RevealSpot[]>([]);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const frame = frameRef.current;
    if (!frame) return;

    const observer = new ResizeObserver(() => {
      setSize({
        width: frame.clientWidth,
        height: frame.clientHeight,
      });
    });

    observer.observe(frame);

    return () => {
      observer.disconnect();
      if (clearTimer.current) clearTimeout(clearTimer.current);
    };
  }, []);

  const paint = (event: PointerEvent<HTMLDivElement>) => {
    const frame = frameRef.current;
    if (!frame) return;

    const bounds = frame.getBoundingClientRect();
    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;
    const now = performance.now();

    if (
      Math.hypot(x - lastPoint.current.x, y - lastPoint.current.y) < 32 &&
      now - lastPoint.current.time < 110
    ) {
      return;
    }

    lastPoint.current = { x, y, time: now };

    if (clearTimer.current) clearTimeout(clearTimer.current);

    setActive(true);

    setSpots((previous) => [
      ...previous.slice(-44),
      {
        id: ++nextId.current,
        x,
        y,
        radius: Math.min(bounds.width * 0.32, 135),
      },
    ]);
  };

  const retreat = () => {
    setActive(false);
    clearTimer.current = setTimeout(() => setSpots([]), 1900);
  };

  return (
    <motion.div
      ref={frameRef}
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65 }}
      onPointerEnter={(event) => {
        if (event.pointerType === "mouse") paint(event);
      }}
      onPointerMove={(event) => {
        if (event.pointerType === "mouse" || event.buttons > 0) {
          paint(event);
        }
      }}
      onPointerLeave={retreat}
      onPointerDown={(event) => {
        if (event.pointerType !== "mouse") paint(event);
      }}
      className="group relative min-h-[470px] select-none overflow-hidden rounded-[2rem] border border-pink-300/30 bg-zinc-950 text-left shadow-[0_30px_80px_rgba(236,72,153,0.16)] lg:col-span-5"
      style={{ touchAction: "none" }}
    >
      {/* Your real photo */}
      <Image
        src="/images/me3.jpeg"
        alt="Mariah Villasan portrait"
        fill
        priority
        className="object-cover"
        sizes="(max-width: 1024px) 100vw, 42vw"
      />

      {/* Slowly spreading anime reveal */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox={`0 0 ${size.width} ${size.height}`}
        preserveAspectRatio="none"
      >
        <defs>
          {/* Warps the reveal edge so it is not a perfect circle. */}
          <filter
            id={warpId}
            x="-35%"
            y="-35%"
            width="170%"
            height="170%"
            colorInterpolationFilters="sRGB"
          >
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.018"
              numOctaves="3"
              seed="8"
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="34"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>

          <mask
            id={maskId}
            maskUnits="userSpaceOnUse"
            maskContentUnits="userSpaceOnUse"
            x="0"
            y="0"
            width={size.width}
            height={size.height}
          >
            <rect
              width={size.width}
              height={size.height}
              fill="black"
            />

            <g fill="white" filter={`url(#${warpId})`}>
              {spots.flatMap((spot) =>
                [
                  { dx: 0, dy: 0, scale: 1, delay: 0 },
                  { dx: 0.58, dy: -0.26, scale: 0.58, delay: 0.24 },
                  { dx: -0.43, dy: 0.48, scale: 0.49, delay: 0.42 },
                  { dx: -0.65, dy: -0.28, scale: 0.26, delay: 0.7 },
                ].map((lobe, index) => (
                  <motion.circle
                    key={`${spot.id}-${index}`}
                    cx={spot.x + lobe.dx * spot.radius}
                    cy={spot.y + lobe.dy * spot.radius}
                    initial={{ r: 0 }}
                    animate={{
                      r: active ? spot.radius * lobe.scale : 0,
                    }}
                    transition={{
                      duration: active ? 3.8 : 1.7,
                      delay: active ? lobe.delay : 0,
                      ease: [0.22, 0.61, 0.36, 1],
                    }}
                  />
                )),
              )}
            </g>
          </mask>
        </defs>

        <image
          href="/images/anime.png"
          x="0"
          y="0"
          width={size.width}
          height={size.height}
          preserveAspectRatio="xMidYMid slice"
          mask={`url(#${maskId})`}
        />
      </svg>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/10" />

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 p-6 sm:p-8">
        <span className="inline-flex rounded-full border border-white/20 bg-black/45 px-4 py-2 text-xs font-medium text-white">
          Hover or drag to transform
        </span>

        <p className="mt-4 text-2xl font-black text-white">
          Two sides of me
        </p>

        <p className="mt-2 text-sm text-white/80">
          A little more about me, beyond the code.
        </p>
      </div>
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