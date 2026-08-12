import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "raybot",
    name: "Raybot",
    duration: "March 2025 - July 2025",
    description:
      "Web application for managing and monitoring a delivery robot system in real time. Build a scalable robot management platform, optimize operational workflows, and ensure reliable real-time monitoring and control of delivery robots.",
    techStack: ["VueJS", "Go", "RESTful API"],
    githubUrl: "https://github.com/tbe-team/raybot",
    role: "Frontend developer (team of 2)",
    learnings: [
      "Designed and developed the full-stack web application using VueJS and Go with a decoupled frontend–backend architecture.",
      "Implemented an intuitive user interface to monitor robot status, location, and performance in real time.",
      "Built features to create, manage, and track delivery commands, including command execution history.",
      "Developed robot configuration management, allowing operators to define operational parameters, working areas, and movement schedules.",
      "Optimized system performance and scalability to support integration with external management systems and IoT platforms.",
    ],
    featured: true,
  },
  {
    slug: "utecareerbridge",
    name: "UTECareerBridge",
    duration: "August 2024 - June 2025",
    imageUrl: "/images/projects/utecareerbridge.png",
    description:
      "Recruitment website designed to connect students with employers and streamline the end-to-end hiring process.",
    techStack: ["ReactJS", "Ant Design", "Java Spring Boot", "RESTful API"],
    githubUrl: "https://github.com/nguyen083/UTECareerBridge-FE.git",
    demoUrl:
      "https://drive.google.com/file/d/1DL-7e_P0NHNQYe3uQ9dUU99zgkaPMowZ/view?usp=sharing",
    role: "Frontend developer (team of 3)",
    learnings: [
      "Designed and developed the full-stack recruitment platform using ReactJS, Java Spring Boot, and Ant Design.",
      "Implemented features for students to create and manage personal profiles, search and apply for job positions, and track application progress.",
      "Integrated live interview functionality, enabling real-time online interviews directly on the platform.",
      "Built employer-side tools to post job listings, manage candidates, automatically filter applications, and conduct online interviews.",
      "Optimized the recruitment workflow to automate processes, enhance usability, and improve overall system efficiency.",
    ],
    featured: true,
  },
];
