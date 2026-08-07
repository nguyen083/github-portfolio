export type SkillCategory = "frontend" | "backend" | "tools";

export interface Skill {
  name: string;
  category: SkillCategory;
}

export interface SkillGroup {
  category: SkillCategory;
  label: string;
  skills: Skill[];
}
