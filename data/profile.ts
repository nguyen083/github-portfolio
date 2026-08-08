import type { Profile } from "@/types";

/**
 * TODO: Replace with your real information.
 * This is the single source of truth for Hero / About / Contact sections.
 */
export const profile: Profile = {
  fullName: "Nguyen Van A",
  title: "Frontend Developer | Learning Backend with NestJS",
  avatarUrl: "/images/avatar.jpg",
  shortIntro:
    "I build fast, accessible, and clean web interfaces with React and Next.js. " +
    "Currently deepening my backend skills with NestJS and PostgreSQL. " +
    "I care about readable code, good UX, and shipping things that work.",
  aboutText:
    "I'm a Frontend Developer with hands-on experience building production web applications " +
    "using React, Next.js, and TypeScript. I enjoy breaking down complex problems into simple, " +
    "maintainable solutions and I pick up new tools quickly when a project needs them. " +
    "I write clean, well-structured code and care about the details that make an interface feel right. " +
    "I've worked in small, fast-moving teams where clear communication and ownership mattered as much as code quality.",
  aboutHighlights: [
    "Hands-on experience shipping production web apps",
    "Strong problem-solving mindset",
    "Fast learner, quick to adapt to new tools",
    "Clean, maintainable, well-tested code",
    "Effective communication & teamwork",
  ],
  location: "Ho Chi Minh City, Vietnam",
  resumeUrl: "/cv/cv.pdf",
  email: "hello@example.com",
  socialLinks: [
    {
      platform: "github",
      label: "GitHub",
      url: "https://github.com/your-username",
    },
    {
      platform: "linkedin",
      label: "LinkedIn",
      url: "https://linkedin.com/in/your-username",
    },
    {
      platform: "facebook",
      label: "Facebook",
      url: "https://facebook.com/your-username",
    },
    { platform: "email", label: "Email", url: "mailto:hello@example.com" },
  ],
};
