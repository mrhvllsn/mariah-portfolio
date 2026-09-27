"use client";

import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import {
  FiDownload,
  FiMenu,
  FiMoon,
  FiSun,
  FiX,
} from "react-icons/fi";

import { profile } from "@/data/portfolio";

const links = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Experience", id: "experience" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(true);
  const [mounted, setMounted] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const useDark = savedTheme !== "light";

    document.documentElement.classList.toggle("dark", useDark);
    setDark(useDark);
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const toggleTheme = () => {
    const nextDark = !dark;

    setDark(nextDark);
    document.documentElement.classList.toggle(
      "dark",
      nextDark
    );
    localStorage.setItem(
      "theme",
      nextDark ? "dark" : "light"
    );
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="pointer-events-none fixed inset-x-0 top-4 z-50 px-3 sm:px-5"
    >
      <div className="relative mx-auto max-w-6xl">
        {/* Floating navbar */}
        <nav
          aria-label="Main navigation"
          className={`pointer-events-auto relative flex h-16 items-center justify-between rounded-2xl border px-4 transition-[background-color,border-color,box-shadow] duration-300 ease-out sm:px-6 ${
            scrolled
              ? "border-pink-200/80 bg-white/95 shadow-[0_12px_35px_rgba(95,38,72,0.15)] dark:border-white/15 dark:bg-[#100816]/95 dark:shadow-[0_12px_35px_rgba(0,0,0,0.35)]"
              : "border-pink-200/70 bg-white/85 shadow-[0_8px_25px_rgba(95,38,72,0.1)] dark:border-white/10 dark:bg-[#100816]/85 dark:shadow-[0_8px_25px_rgba(0,0,0,0.25)]"
          }`}
        >
          {/* Logo */}
          <a
            href="#home"
            onClick={() => setOpen(false)}
            className="focus-ring relative z-10 font-mono text-sm font-bold tracking-widest text-pink-600 transition-colors hover:text-pink-500 dark:text-pink-400 dark:hover:text-pink-300"
          >
            {profile.name.split(" ")[0]}
            <span className="text-zinc-900 dark:text-white">
              .
            </span>
          </a>

          {/* Desktop navigation */}
          <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 md:flex">
            {links.map(({ label, id }) => (
              <a
                key={id}
                href={`#${id}`}
                className="focus-ring rounded-full px-3 py-2 text-sm font-medium text-zinc-700 transition-colors duration-200 hover:bg-pink-100 hover:text-pink-700 dark:text-zinc-300 dark:hover:bg-pink-400/10 dark:hover:text-pink-300"
              >
                {label}
              </a>
            ))}
          </div>

          {/* Right-side controls */}
          <div className="relative z-10 ml-auto flex items-center gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              disabled={!mounted}
              aria-label={
                dark
                  ? "Switch to light mode"
                  : "Switch to dark mode"
              }
              title={
                dark
                  ? "Switch to light mode"
                  : "Switch to dark mode"
              }
              className="focus-ring flex h-10 w-10 items-center justify-center rounded-full border border-pink-200 bg-pink-50 text-pink-600 transition-[transform,background-color] duration-200 hover:scale-105 hover:bg-pink-100 disabled:opacity-60 dark:border-pink-400/25 dark:bg-pink-400/10 dark:text-pink-300 dark:hover:bg-pink-400/20"
            >
              {dark ? (
                <FiSun size={18} />
              ) : (
                <FiMoon size={18} />
              )}
            </button>

            <button
              type="button"
              onClick={() =>
                setOpen((current) => !current)
              }
              aria-label={
                open
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-expanded={open}
              aria-controls="mobile-navigation"
              className="focus-ring flex h-10 w-10 items-center justify-center rounded-full border border-pink-200 bg-pink-50 text-pink-600 transition-[transform,background-color] duration-200 hover:scale-105 hover:bg-pink-100 dark:border-pink-400/25 dark:bg-pink-400/10 dark:text-pink-300 dark:hover:bg-pink-400/20 md:hidden"
            >
              {open ? (
                <FiX size={20} />
              ) : (
                <FiMenu size={20} />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              id="mobile-navigation"
              initial={{
                opacity: 0,
                y: -10,
                scale: 0.98,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: -10,
                scale: 0.98,
              }}
              transition={{
                duration: 0.2,
                ease: "easeOut",
              }}
              className="pointer-events-auto absolute left-0 right-0 top-[calc(100%+0.6rem)] overflow-hidden rounded-2xl border border-pink-200/80 bg-white/95 p-2 shadow-[0_15px_35px_rgba(95,38,72,0.18)] dark:border-white/15 dark:bg-[#100816]/95 dark:shadow-[0_15px_35px_rgba(0,0,0,0.4)] md:hidden"
            >
              <div className="flex flex-col">
                {links.map(({ label, id }) => (
                  <a
                    key={id}
                    href={`#${id}`}
                    onClick={() => setOpen(false)}
                    className="focus-ring rounded-xl px-4 py-3 text-sm font-medium text-zinc-700 transition-colors duration-200 hover:bg-pink-100 hover:text-pink-700 dark:text-zinc-200 dark:hover:bg-pink-400/10 dark:hover:text-pink-300"
                  >
                    {label}
                  </a>
                ))}

                {/* Glowing resume download button */}
                <div className="mt-2 border-t border-pink-200/70 px-2 pt-4 pb-2 dark:border-white/10">
                  <motion.a
                    href="/resume.pdf"
                    download="Mariah-Villasan-Resume.pdf"
                    onClick={() => setOpen(false)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    animate={
                      reduceMotion
                        ? undefined
                        : { scale: [1, 1.025, 1] }
                    }
                    transition={
                      reduceMotion
                        ? undefined
                        : {
                            duration: 2.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }
                    }
                    className="focus-ring flex w-full items-center justify-center gap-2 rounded-xl border border-pink-300 bg-gradient-to-r from-pink-600 to-fuchsia-600 px-4 py-3.5 text-sm font-bold text-white shadow-[0_0_12px_rgba(236,72,153,0.65),0_0_26px_rgba(236,72,153,0.4)] transition-shadow hover:shadow-[0_0_16px_rgba(236,72,153,0.85),0_0_36px_rgba(236,72,153,0.55)]"
                  >
                    <FiDownload size={17} />
                    Download Resume
                  </motion.a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}