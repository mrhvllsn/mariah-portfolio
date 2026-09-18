"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiTwitter,
} from "react-icons/fi";

import { profile } from "@/data/portfolio";

const contactCards = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: FiMail,
  },
  {
    label: "LinkedIn",
    value: "Connect with me",
    href: profile.socials.linkedin,
    icon: FiLinkedin,
  },
  {
    label: "GitHub",
    value: "View my projects",
    href: profile.socials.github,
    icon: FiGithub,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
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
      {/* Background pink glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-[-120px]
          top-[18%]
          h-[340px]
          w-[340px]
          rounded-full
          bg-pink-500/10
          blur-[130px]
        "
      />

      {/* Background purple glow */}
      <div
        className="
          pointer-events-none
          absolute
          bottom-[-160px]
          right-[-100px]
          h-[420px]
          w-[420px]
          rounded-full
          bg-purple-500/10
          blur-[150px]
        "
      />

      {/* Background lines */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[linear-gradient(rgba(0,0,0,0.04)_1px,transparent_1px)]
          bg-[size:100%_80px]
          dark:bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px)]
        "
      />

      {/* Main content */}
      <div
        className="
          relative
          z-10
          mx-auto
          grid
          w-full
          max-w-6xl
          items-center
          gap-16
          lg:grid-cols-[1.15fr_.85fr]
          lg:gap-20
        "
      >
        {/* Left content */}
        <motion.div
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
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
        >
          {/* Section number */}
          <div className="mb-7 flex items-center gap-3">
            <span className="h-px w-10 bg-pink-500" />

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
              05 / Contact
            </p>
          </div>

          {/* Main title */}
          <h2
            className="
              max-w-3xl
              text-[clamp(3.5rem,9vw,8rem)]
              font-black
              uppercase
              leading-[0.78]
              tracking-[-0.07em]
            "
          >
            Let&apos;s
            <br />
            Work
            <br />

            <span
              className="
                text-transparent
                [-webkit-text-stroke:1.5px_#18181b]
                dark:[-webkit-text-stroke:1.5px_white]
              "
            >
              Together
            </span>
          </h2>

          {/* Description */}
          <p
            className="
              mt-10
              max-w-lg
              text-base
              leading-7
              text-zinc-600
              sm:text-lg
              dark:text-zinc-400
            "
          >
            Looking for the next project or opportunity? I&apos;d love to hear
            from you. Let&apos;s build something useful, creative, and
            meaningful together.
          </p>

          {/* Contact and resume buttons */}
          <div className="mt-9 flex flex-wrap items-center gap-4">
            {/* Start conversation button */}
            <motion.a
              href={`mailto:${profile.email}`}
              whileHover={{
                y: -3,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="
                group
                inline-flex
                items-center
                gap-3
                rounded-full
                bg-zinc-900
                px-6
                py-3
                text-sm
                font-semibold
                text-white
                transition-all
                duration-300
                hover:bg-pink-500
                hover:shadow-[0_12px_30px_rgba(236,72,153,0.25)]
                dark:bg-white
                dark:text-black
                dark:hover:bg-pink-500
                dark:hover:text-white
              "
            >
              Start a conversation

              <FiArrowUpRight
                className="
                  text-lg
                  transition-transform
                  duration-300
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                "
              />
            </motion.a>

            {/* Download resume button */}
            <motion.a
              href="/resume/Mariah-Villasan-Resume.docx"
              download="Mariah-Villasan-Resume.docx"
              whileHover={{
                y: -3,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="
                group
                inline-flex
                items-center
                gap-3
                rounded-full
                border
                border-pink-500
                bg-transparent
                px-6
                py-3
                text-sm
                font-semibold
                text-pink-600
                transition-all
                duration-300
                hover:bg-pink-500
                hover:text-white
                hover:shadow-[0_12px_30px_rgba(236,72,153,0.25)]
                dark:border-pink-400
                dark:text-pink-300
                dark:hover:bg-pink-500
                dark:hover:text-white
              "
            >
              Download Resume

              <FiDownload
                className="
                  text-lg
                  transition-transform
                  duration-300
                  group-hover:translate-y-0.5
                "
              />
            </motion.a>

            {/* Availability */}
            <div
              className="
                flex
                items-center
                gap-3
                text-sm
                text-zinc-600
                dark:text-zinc-400
              "
            >
              <span className="relative flex h-3 w-3">
                <span
                  className="
                    absolute
                    inline-flex
                    h-full
                    w-full
                    animate-ping
                    rounded-full
                    bg-pink-400
                    opacity-60
                  "
                />

                <span
                  className="
                    relative
                    inline-flex
                    h-3
                    w-3
                    rounded-full
                    bg-pink-500
                  "
                />
              </span>

              Available for opportunities
            </div>
          </div>
        </motion.div>

        {/* Right content */}
        <motion.div
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
            amount: 0.25,
          }}
          transition={{
            duration: 0.7,
            delay: 0.15,
            ease: "easeOut",
          }}
          className="relative"
        >
          {/* Vertical decorative line */}
          <div
            className="
              absolute
              -left-8
              top-8
              hidden
              h-[calc(100%-4rem)]
              w-px
              bg-gradient-to-b
              from-transparent
              via-pink-500/50
              to-transparent
              lg:block
            "
          />

          {/* Contact cards */}
          <div className="space-y-4">
            {contactCards.map((contact, index) => {
              const Icon = contact.icon;
              const isEmail = contact.href.startsWith("mailto:");

              return (
                <motion.a
                  key={contact.label}
                  href={contact.href}
                  target={isEmail ? undefined : "_blank"}
                  rel={isEmail ? undefined : "noreferrer"}
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
                    duration: 0.5,
                    delay: 0.15 + index * 0.1,
                  }}
                  whileHover={{
                    x: 8,
                  }}
                  className="
                    group
                    flex
                    items-center
                    gap-4
                    rounded-2xl
                    border
                    border-zinc-200
                    bg-white/80
                    p-4
                    shadow-[0_15px_40px_rgba(0,0,0,0.06)]
                    backdrop-blur-md
                    transition-all
                    duration-300
                    hover:border-pink-500/50
                    hover:bg-pink-50
                    sm:p-5
                    dark:border-white/10
                    dark:bg-white/[0.035]
                    dark:shadow-none
                    dark:hover:border-pink-500/50
                    dark:hover:bg-pink-500/[0.07]
                  "
                >
                  {/* Card icon */}
                  <span
                    className="
                      flex
                      h-12
                      w-12
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-zinc-200
                      bg-zinc-100
                      text-xl
                      text-pink-500
                      transition-all
                      duration-300
                      group-hover:border-pink-500
                      group-hover:bg-pink-500
                      group-hover:text-white
                      dark:border-white/10
                      dark:bg-white/5
                      dark:text-pink-400
                      dark:group-hover:border-pink-500
                      dark:group-hover:bg-pink-500
                      dark:group-hover:text-white
                    "
                  >
                    <Icon />
                  </span>

                  {/* Card information */}
                  <span className="min-w-0 flex-1">
                    <span
                      className="
                        block
                        font-mono
                        text-[10px]
                        uppercase
                        tracking-[0.25em]
                        text-zinc-500
                      "
                    >
                      {contact.label}
                    </span>

                    <span
                      className="
                        mt-1
                        block
                        truncate
                        text-sm
                        font-medium
                        text-zinc-800
                        sm:text-base
                        dark:text-zinc-200
                      "
                    >
                      {contact.value}
                    </span>
                  </span>

                  {/* Card arrow */}
                  <FiArrowUpRight
                    className="
                      text-xl
                      text-zinc-400
                      transition-all
                      duration-300
                      group-hover:-translate-y-1
                      group-hover:translate-x-1
                      group-hover:text-pink-500
                      dark:text-zinc-600
                      dark:group-hover:text-pink-400
                    "
                  />
                </motion.a>
              );
            })}
          </div>

          {/* Social links */}
          <div
            className="
              mt-7
              flex
              flex-wrap
              items-center
              justify-between
              gap-5
            "
          >
            <p
              className="
                font-mono
                text-[10px]
                uppercase
                tracking-[0.25em]
                text-zinc-500
                dark:text-zinc-600
              "
            >
              Find me online
            </p>

            <div className="flex items-center gap-3">
              <SocialLink
                href={profile.socials.github}
                label="GitHub"
                icon={<FiGithub />}
              />

              <SocialLink
                href={profile.socials.linkedin}
                label="LinkedIn"
                icon={<FiLinkedin />}
              />

              <SocialLink
                href={profile.socials.twitter}
                label="Twitter"
                icon={<FiTwitter />}
              />

              <SocialLink
                href={`mailto:${profile.email}`}
                label="Email"
                icon={<FiMail />}
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Side text */}
      <p
        className="
          absolute
          bottom-10
          right-5
          hidden
          font-mono
          text-[9px]
          uppercase
          tracking-[0.3em]
          text-zinc-400
          [writing-mode:vertical-rl]
          xl:block
          dark:text-zinc-700
        "
      >
        Contact • Portfolio • 2026
      </p>
    </section>
  );
}

interface SocialLinkProps {
  href: string;
  label: string;
  icon: ReactNode;
}

function SocialLink({ href, label, icon }: SocialLinkProps) {
  const isEmail = href.startsWith("mailto:");

  return (
    <motion.a
      href={href}
      target={isEmail ? undefined : "_blank"}
      rel={isEmail ? undefined : "noreferrer"}
      aria-label={label}
      whileHover={{
        y: -4,
        scale: 1.08,
      }}
      whileTap={{
        scale: 0.94,
      }}
      className="
        flex
        h-10
        w-10
        items-center
        justify-center
        rounded-full
        border
        border-zinc-200
        bg-white
        text-zinc-600
        shadow-sm
        transition-all
        duration-300
        hover:border-pink-500
        hover:bg-pink-500
        hover:text-white
        dark:border-white/10
        dark:bg-white/[0.04]
        dark:text-zinc-400
        dark:shadow-none
        dark:hover:border-pink-500
        dark:hover:bg-pink-500
        dark:hover:text-white
      "
    >
      {icon}
    </motion.a>
  );
}