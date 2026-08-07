import type { SkillGroup } from "@/types";

/** TODO: Adjust skills to match your real proficiency. */
export const skillGroups: SkillGroup[] = [
  {
    category: "frontend",
    label: "Frontend",
    skills: [
      { name: "React", category: "frontend" },
      { name: "Next.js", category: "frontend" },
      { name: "TypeScript", category: "frontend" },
      { name: "JavaScript", category: "frontend" },
      { name: "HTML", category: "frontend" },
      { name: "CSS", category: "frontend" },
      { name: "TailwindCSS", category: "frontend" },
    ],
  },
  {
    category: "backend",
    label: "Backend",
    skills: [
      { name: "NestJS", category: "backend" },
      { name: "REST API", category: "backend" },
      { name: "JWT", category: "backend" },
      { name: "Prisma", category: "backend" },
      { name: "PostgreSQL", category: "backend" },
    ],
  },
  {
    category: "tools",
    label: "Tools",
    skills: [
      { name: "Git", category: "tools" },
      { name: "GitHub", category: "tools" },
      { name: "Docker", category: "tools" },
      { name: "Postman", category: "tools" },
      { name: "VS Code", category: "tools" },
    ],
  },
];
