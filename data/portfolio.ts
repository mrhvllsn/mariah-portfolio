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

  email: "mariahvillasan@gmail.com",

  socials: {
    github: "https://github.com/mrhvllsn",
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
    "API Integration",
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
      "A personal portfolio website made using Next.js, TypeScript, and Tailwind CSS.",

    image: "/projects/aya-portfolio.jpeg",

    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
    ],

    github: "https://github.com/mrhvllsn",
    demo: "https://mariah-portfolio-rosy.vercel.app/",
  },

  {
    title: "PrintHub",

    description:
      "A printing services web system for submitting printing requests, uploading documents, monitoring requests, and managing printing supplies.",

    image: "/projects/printhub.jpeg",

    technologies: [
      "UI/UX Design",
      "JavaScript",
      "Database",
    ],

    github: "https://github.com/mrhvllsn",
    demo: "https://printhub-mariah.vercel.app/",
  },

  {
    title: "ReadEm",

    description:
      "An e-library management system for organizing and managing digital book collections.",

    image: "/projects/Read.jpeg",

    technologies: [
      "HTML",
      "CSS",
      "PHP",
      "MySQL",
    ],

    github: "https://github.com/mrhvllsn",
    demo: "https://readem.vercel.app/",
  },

  {
    title: "StockWise Inventory",

    description:
      "A JavaScript inventory management system for adding, editing, searching, and monitoring products and stock levels. Inventory information is saved using browser local storage.",

    image: "/projects/Stockwise.jpeg",

    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Local Storage",
    ],

    github: "https://github.com/mrhvllsn",
    demo: "https://stockwise-inventory-gilt.vercel.app/",
  },
];

export const experience: ExperienceItem[] = [
  {
    date: "2026",

    title: "Personal Portfolio Website",

    organization: "4th Year College • Personal Project",

    description:
      "Created my personal portfolio website to showcase my background, skills, projects, and learning journey. The website includes responsive pages, animations, light and dark modes, project previews, contact links, and a downloadable resume.",

    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Vercel",
    ],
  },

  {
    date: "2025",

    title: "PrintHub",

    organization: "3rd Year College • School Project",

    description:
      "Developed a printing services web system for submitting printing requests, uploading documents, monitoring pending orders, managing customers, and tracking printing supplies using a database.",

    technologies: [
      "UI/UX Design",
      "JavaScript",
      "React",
      "Node.js",
      "Database",
    ],
  },

  {
    date: "2024",

    title: "ReadEm",

    organization: "2nd Year College • School Project",

    description:
      "Created an e-library management system for organizing and managing digital book collections. This project helped me practice interface design, book management, and database fundamentals.",

    technologies: [
      "HTML",
      "CSS",
      "PHP",
      "MySQL",
    ],
  },

  {
    date: "2024",

    title: "StockWise Inventory",

    organization: "2nd Year College • School Project",

    description:
      "Created an inventory management system for adding, editing, searching, and monitoring products and stock levels. The inventory records are saved in the browser using local storage.",

    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Local Storage",
    ],
  },
];