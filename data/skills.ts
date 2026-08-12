import type { SkillGroup } from "@/types";

export const skillGroups: SkillGroup[] = [
  {
    category: "frontend",
    label: "Frontend",
    skills: [
      { name: "HTML & CSS", category: "frontend" },
      { name: "JavaScript", category: "frontend" },
      { name: "TypeScript", category: "frontend" },
      { name: "ReactJS", category: "frontend" },
      { name: "VueJS", category: "frontend" },
      { name: "TailwindCSS", category: "frontend" },
      { name: "Ant Design", category: "frontend" },
      { name: "Material UI", category: "frontend" },
      { name: "React Query", category: "frontend" },
    ],
  },
  {
    category: "backend",
    label: "Backend",
    skills: [
      { name: "NodeJS", category: "backend" },
      { name: "NestJS", category: "backend" },
      { name: "Java", category: "backend" },
      { name: "MySQL", category: "backend" },
    ],
  },
  {
    category: "tools",
    label: "Tools",
    skills: [
      { name: "Docker", category: "tools" },
      { name: "Git", category: "tools" },
      { name: "GitHub", category: "tools" },
      { name: "Teamwork", category: "tools" },
    ],
  },
];
