import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter, JetBrains_Mono } from "next/font/google";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Mariah Villasan | Aspiring Frontend Developer",
  description:
    "Student portfolio of Mariah Villasan, a frontend-focused BSIT student interested in UI/UX design, Figma, and web development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${mono.variable}`}>
        <div className="star-background" aria-hidden="true">
          <div id="stars" />
          <div id="stars2" />
          <div id="stars3" />
          <div className="star-background-glow" />
        </div>

        {children}
      </body>
    </html>
  );
}