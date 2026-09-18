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
  const [mounted, setMounted] = useState(false);

  /* Load saved theme. */

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
      document.documentElement.classList.remove("dark");
      setDark(false);
    } else {
      document.documentElement.classList.add("dark");
      setDark(true);
    }

    setMounted(true);
  }, []);

  /* Change navbar style when scrolling. */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* Close mobile menu when screen becomes larger. */

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

  /* Prevent scrolling while mobile menu is open. */

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

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

  const headerBackground = dark
    ? scrolled
      ? "rgba(3, 1, 6, 0.9)"
      : "rgba(3, 1, 6, 0.58)"
    : scrolled
      ? "rgba(255, 255, 255, 0.9)"
      : "rgba(255, 255, 255, 0.62)";

  return (
    <motion.header
      initial={{
        opacity: 0,
        y: -20,
      }}
      animate={{
        opacity: 1,
        y: 0,
        backgroundColor: headerBackground,
      }}
      transition={{
        opacity: {
          duration: 0.5,
        },
        y: {
          duration: 0.5,
          ease: "easeOut",
        },
        backgroundColor: {
          duration: 0.35,
        },
      }}
      className={`
        fixed
        inset-x-0
        top-0
        z-50
        border-b
        backdrop-blur-xl
        transition-[border-color,box-shadow]
        duration-300
        ${
          dark
            ? "border-white/10"
            : "border-pink-200/60"
        }
        ${
          scrolled
            ? dark
              ? "shadow-[0_10px_40px_rgba(0,0,0,0.32)]"
              : "shadow-[0_10px_35px_rgba(190,24,93,0.09)]"
            : "shadow-none"
        }
      `}
    >
      <nav
        className="
          relative
          mx-auto
          flex
          h-16
          w-[min(1180px,calc(100%-2rem))]
          items-center
          justify-between
        "
      >
        {/* Portfolio logo */}

        <motion.a
          href="#home"
          onClick={closeMobileMenu}
          whileHover={{
            x: 2,
          }}
          whileTap={{
            scale: 0.97,
          }}
          transition={{
            duration: 0.2,
          }}
          className="
            focus-ring
            relative
            z-10
            font-mono
            text-sm
            font-bold
            tracking-widest
            text-pink-600
            transition-all
            duration-200
            hover:text-pink-500
            hover:drop-shadow-[0_0_8px_rgba(236,72,153,0.35)]
            dark:text-pink-400
            dark:hover:text-pink-300
          "
        >
          {profile.name.split(" ")[0]}
          <span className="text-zinc-900 dark:text-white">.</span>
        </motion.a>

        {/* Desktop navigation */}

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
              whileHover={{
                y: -2,
              }}
              whileTap={{
                scale: 0.96,
              }}
              transition={{
                duration: 0.2,
              }}
              className="
                group
                focus-ring
                relative
                whitespace-nowrap
                py-2
                text-sm
                font-medium
                text-zinc-700
                transition-colors
                duration-200
                hover:text-pink-600
                dark:text-zinc-300
                dark:hover:text-pink-300
              "
            >
              {label}

              <span
                className="
                  absolute
                  bottom-0
                  left-1/2
                  h-[2px]
                  w-0
                  -translate-x-1/2
                  rounded-full
                  bg-pink-500
                  transition-all
                  duration-300
                  group-hover:w-full
                  dark:bg-pink-400
                "
              />
            </motion.a>
          ))}
        </div>

        {/* Right-side buttons */}

        <div
          className="
            relative
            z-10
            ml-auto
            flex
            items-center
            gap-2
          "
        >
          {/* Theme button */}

          <motion.button
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
            whileHover={{
              scale: 1.08,
              rotate: dark ? 8 : -8,
            }}
            whileTap={{
              scale: 0.9,
            }}
            className="
              focus-ring
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              border-pink-300/70
              bg-white/50
              text-pink-600
              shadow-sm
              transition-all
              duration-200
              hover:border-pink-400
              hover:bg-pink-100/70
              hover:text-pink-700
              hover:shadow-[0_0_20px_rgba(236,72,153,0.2)]
              disabled:cursor-wait
              disabled:opacity-60
              dark:border-pink-400/25
              dark:bg-pink-400/5
              dark:text-pink-400
              dark:shadow-none
              dark:hover:border-pink-400/50
              dark:hover:bg-pink-400/15
              dark:hover:text-pink-300
              dark:hover:shadow-[0_0_20px_rgba(236,72,153,0.2)]
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
                transition={{
                  duration: 0.2,
                }}
              >
                {dark ? (
                  <FiSun size={17} />
                ) : (
                  <FiMoon size={17} />
                )}
              </motion.span>
            </AnimatePresence>
          </motion.button>

          {/* Mobile menu button */}

          <motion.button
            type="button"
            aria-label={
              open
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => {
              setOpen((currentOpen) => !currentOpen);
            }}
            whileHover={{
              scale: 1.06,
            }}
            whileTap={{
              scale: 0.9,
            }}
            className="
              focus-ring
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              border-pink-300/70
              bg-white/50
              text-pink-600
              shadow-sm
              transition-all
              duration-200
              hover:border-pink-400
              hover:bg-pink-100/70
              hover:text-pink-700
              dark:border-pink-400/25
              dark:bg-pink-400/5
              dark:text-pink-400
              dark:shadow-none
              dark:hover:border-pink-400/50
              dark:hover:bg-pink-400/15
              dark:hover:text-pink-300
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
                transition={{
                  duration: 0.2,
                }}
              >
                {open ? (
                  <FiX size={19} />
                ) : (
                  <FiMenu size={19} />
                )}
              </motion.span>
            </AnimatePresence>
          </motion.button>
        </div>
      </nav>

      {/* Mobile navigation */}

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
              border-pink-200/60
              bg-white/90
              backdrop-blur-2xl
              dark:border-white/10
              dark:bg-[#050208]/90
              md:hidden
            "
          >
            <div
              className="
                mx-auto
                flex
                w-[min(1180px,calc(100%-2rem))]
                flex-col
                gap-1
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
                  whileHover={{
                    x: 4,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  className="
                    focus-ring
                    rounded-xl
                    px-4
                    py-3
                    text-sm
                    font-medium
                    text-zinc-700
                    transition-colors
                    duration-200
                    hover:bg-pink-100/80
                    hover:text-pink-700
                    dark:text-zinc-300
                    dark:hover:bg-pink-400/10
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