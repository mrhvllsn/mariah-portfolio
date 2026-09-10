import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  darkMode: "class",

  theme: {
    extend: {
      fontFamily: {
        mono: [
          "var(--font-geist-mono)",
          "monospace",
        ],
      },

      colors: {
        pink: {
          300: "#f9a8d4",
          400: "#ec4899",
          500: "#db2777",
          600: "#be185d",
        },

        /* Main pink */
        glow: "#ec4899",

        /* Hanging card */
        card: "var(--card-background)",
        onyx: "var(--card-secondary)",

        /* Pink replacements for the old purple colors */
        violet: "#db2777",
        mauve: "#f472b6",
      },

      boxShadow: {
        glow:
          "0 0 35px rgba(236, 72, 153, 0.25)",
      },
    },
  },

  plugins: [],
};

export default config;