import type { Metadata } from "next";
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
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} ${mono.variable}`}>
        <div aria-hidden="true" className="fixed-background-grid" />

        {children}
      </body>
    </html>
  );
}