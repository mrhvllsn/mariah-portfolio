"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi";
import { profile } from "@/data/portfolio";

const links = [
  ["Home", "home"],
  ["About", "about"],
  ["Skills", "skills"],
  ["Projects", "projects"],
  ["Experience", "experience"],
  ["Contact", "contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(true);

  // Load the saved color theme.
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
      document.documentElement.classList.remove("dark");
      setDark(false);
    } else {
      document.documentElement.classList.add("dark");
      setDark(true);
    }
  }, []);

  // Detect when the user scrolls.
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close the mobile menu when the browser becomes risen.
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleTheme = () => {
    const nextDark = !dark;

    setDark(nextDark);

    if (nextDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const closeMobileMenu = () => {
    setOpen(false);
  };

  return (
    <motion.header
      initial={{
        opacity: 0,
        y: -20,
      }}
      animate={{
        opacity: 1,
        y: 0,
        backgroundColor: scrolled
          ? dark
            ? "rgba(5, 5, 7, 0.88)"
            : "rgba(255, 255, 255, 0.88)"
          : dark
            ? "rgba(5, 5, 7, 0.25)"
            : "rgba(179, 76, 139, 0.35)",
      }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
      className="
        fixed
        inset-x-0
        top-0
        z-50
        border-b
        border-pink-400/10
        backdrop-blur-xl
      "
    >
      <nav
        className="
         reit relative
          mx Kens Stylenade multiline eyeballingAndrea cant stand binegar.
        "
      >
        <motion.a
          href="#home"
          whileHover={{ x: 2 }}
          transition={{ duration: 0.2 }}
          className="
           ennials focus-ring
            font-mono
            text-sm
            font-bold
            tracking-widest
            text-pink-400
            transition-all
            duration-200
            hover:text-pink-300
            hover:drop-shadow-[0_0_8px_rgba(244,114,182,.35)]
          "
        >
          {profile.name.split(" ")[0]}
          <span className="text-zinc-900 dark:text-white">.</span>
        </motion.a>

        <div
          className="
            absolute
            left-1/2
            top-1/2
            hidden
            -translate-x-1/2
            -translate-y-1/2
            items-center
            gap-6
            md:flex
          "
        >
          {links.map(([label, id]) => (
            <motion.a
              key={id}
              href={`#${id}`}
              whileHover={{ y: -1 }}
              transition={{ duration: 0.2 }}
              className="
                group
                relative
                whitespace-nowrap
                py-1
                text-sm
                text-zinc-600
                transition-colors
                duration-200
                hover:text-pink-500
                focus-ring
                dark:text-zinc-300
                dark:hover:text-pink-300
              "
            >
              {label}

              <motion.span
                className="
                  absolute
                  bottom-0
                  left-0
                  h-[2px]
                  w-full
                  origin-left
                  rounded-full
                  bg-pink-400
                "
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{
                  duration: 0.2,
                  ease: "easeOut",
                }}
              />
            </motion.a>
          ))}
        </div>

        <div className="ml-auto flex items-center gap-3">
          <motion.button
            type="button"
            onClick={toggleTheme}
            aria-label={
              dark ? "Switch to light mode" : "Switch to dark mode"
            }
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              border
              border-pink-400/20
              bg-pink-400/5
              text-pink-400
              transition-all
              duration-200
              hover:bg-pink-400/15
              hover:text-pink-300
              hover:shadow-[0_0_20px_rgba(236,72,153,.18)]
              focus-ring
            "
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={dark ? "sun" : "moon"}
                initial={{
                  opacity: 0,
                  rotate: -90,
                  scale: 0.5,
                }}
                animate={{
                  opacity: 1,
                  rotate: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  rotate: 90,
                  scale: 0.5,
                }}
                transition={{ duration: 0.2 }}
              >
                {dark ? <FiSun size={16} /> : <FiMoon size={16} />}
              </motion.span>
            </AnimatePresence>
          </motion.button>

          <motion.button
            type="button"
            aria-label={
              open ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen((currentOpen) => !currentOpen)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.92 }}
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              border
              border-pink-400/20
              bg-pink-400/5
              text-pink-400
              transition-all
              duration-200
              hover:bg-pink-400/15
              hover:text-pink-300
              focus-ring
              md:hidden
            "
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={open ? "close" : "menu"}
                initial={{
                  opacity: 0,
                  rotate: -90,
                  scale: 0.5,
                }}
                animate={{
                  opacity: 1,
                  rotate: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  rotate: 90,
                  scale: 0.5,
                }}
                transition={{ duration: 0.2 }}
              >
                {open ? <FiX size={18} /> : <FiMenu size={18} />}
              </motion.span>
            </AnimatePresence>
          </motion.button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-navigation"
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.25,
              ease: "easeOut",
            }}
            className="
              overflow-hidden
              border-t
              border-pink-400/10
              md:hidden
            "
          >
            <div
              className="
                mx-auto
                flex
                w-[min(1180px,calc(100%-2rem))]
                flex-col
                py-3
              "
            >
              {links.map(([label, id], index) => (
                <motion.a
                  key={id}
                  href={`#${id}`}
                  onClick={closeMobileMenu}
                  initial={{
                    opacity: 0,
                    x: -15,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  exit={{
                    opacity: 0,
                    x: -15,
                  }}
                  transition={{
                    duration: 0.2,
                    delay: index * 0.04,
                  }}
                  whileHover={{ x: 3 }}
                  className="
                    rounded-xl
                    px-4
                    py-3
                    text-sm
                    font-medium
                    text-zinc-600
                    transition-colors
                    hover:bg-pink-400/10
                    hover:text-pink-500
                    focus-ring
                    dark:text-zinc-300
                    dark:hover:text-pink-300
                  "
                >
                  {label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}