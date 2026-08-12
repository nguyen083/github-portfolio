export interface Project {
  slug: string;
  name: string;
  duration: string;
  description: string;
  imageUrl?: string;
  techStack: string[];
  githubUrl?: string;
  demoUrl?: string;
  role: string;
  learnings: string[];
  /** Featured projects are shown first / highlighted */
  featured?: boolean;
}
