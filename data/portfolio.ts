export type Socials = {
  github: string;
  linkedin: string;
  twitter: string;
};

export type Project = {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  demo: string;
};

export type ExperienceItem = {
  date: string;
  title: string;
  organization: string;
  description: string;
  technologies?: string[];
};

export const profile = {
  name: "Mariah Villasan",

  role: "Aspiring Frontend Developer",

  tagline: "Frontend-Focused BSIT Student • UI/UX Design • Figma",

  bio: "I am a frontend-focused BSIT student who enjoys creating clean and user-friendly interfaces. I use Figma for UI/UX design and continue improving my HTML and CSS skills while learning databases, React, and Tailwind CSS.",

  email: "mariahvillasan@example.com",

  socials: {
    github: "https://github.com/",
    linkedin: "https://linkedin.com/",
    twitter: "https://x.com/",
  } satisfies Socials,

  education: "Bachelor of Science in Information Technology",

  focus: [
    "UI/UX Design",
    "Figma",
    "Frontend Development",
    "Responsive Web Design",
  ],
};

export const skills = {
  Design: [
    "Figma",
    "UI/UX Design",
    "Wireframing",
    "Prototyping",
    "Canva",
  ],

  Frontend: [
    "HTML",
    "CSS",
    "Responsive Design",
    "JavaScript",
  ],

  Learning: [
    "React",
    "Tailwind CSS",
    "Database",
    "PHP",
  ],

  Tools: [
    "Visual Studio Code",
    "GitHub",
  ],
};

export const projects: Project[] = [
  {
    title: "Personal Portfolio Website",

    description:
      "A personal learning project created to practice responsive layouts, UI design, React, Next.js, TypeScript, and Tailwind CSS.",

    image: "/projects/project1.svg",

    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
    ],

    github: "https://github.com/",
    demo: "#",
  },

  {
    title: "Printing Services System Concept",

    description:
      "A school or practice system concept for organizing customers, printing services, and records. This project is still being improved.",

    image: "/projects/project2.svg",

    technologies: [
      "UI/UX Design",
      "Figma",
      "Database",
    ],

    github: "https://github.com/",
    demo: "#",
  },

  {
    title: "Student Management App Concept",

    description:
      "A CRUD-based school project concept for managing student information while practicing interface design and database fundamentals.",

    image: "/projects/project3.svg",

    technologies: [
      "HTML",
      "CSS",
      "PHP",
      "MySQL",
    ],

    github: "https://github.com/",
    demo: "#",
  },
];

export const experience: ExperienceItem[] = [
  {
    date: "Present",

    title: "BSIT Student",

    organization: "Academic Learning",

    description:
      "Studying information technology while developing foundational skills in frontend development, interface design, and databases.",

    technologies: [
      "HTML",
      "CSS",
      "Figma",
      "UI/UX",
    ],
  },

  {
    date: "Currently Learning",

    title: "Frontend Development Practice",

    organization: "Personal Learning",

    description:
      "Practicing responsive web design and gradually learning React and Tailwind CSS through school activities and personal projects.",

    technologies: [
      "React",
      "Tailwind CSS",
      "Responsive Design",
    ],
  },

  {
    date: "Ongoing",

    title: "UI/UX Design Practice",

    organization: "Student Projects",

    description:
      "Creating wireframes, prototypes, and user-friendly interface concepts using Figma and Canva.",

    technologies: [
      "Figma",
      "Canva",
      "Wireframing",
      "Prototyping",
    ],
  },
];