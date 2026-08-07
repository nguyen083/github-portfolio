import type { Project } from "@/types";

/** TODO: Replace with your real projects. Add new entries following this shape. */
export const projects: Project[] = [
  {
    slug: "project-one",
    name: "Project One",
    description:
      "A short, punchy description of what this project does and who it's for.",
    imageUrl: "/images/projects/project-one.png",
    techStack: ["Next.js", "TypeScript", "TailwindCSS"],
    githubUrl: "https://github.com/your-username/project-one",
    demoUrl: "https://project-one.example.com",
    role: "Solo developer",
    learnings: [
      "Structuring a Next.js app with clean, reusable components",
      "Optimizing Core Web Vitals for a static site",
    ],
    featured: true,
  },
  {
    slug: "project-two",
    name: "Project Two",
    description:
      "A short, punchy description of what this project does and who it's for.",
    imageUrl: "/images/projects/project-two.png",
    techStack: ["React", "NestJS", "PostgreSQL"],
    githubUrl: "https://github.com/your-username/project-two",
    demoUrl: "",
    role: "Frontend developer (team of 3)",
    learnings: [
      "Integrating JWT auth between frontend and NestJS backend",
      "Designing REST APIs together with the backend team",
    ],
    featured: true,
  },
];
