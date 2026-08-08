export type SocialPlatform =
  | "github"
  | "linkedin"
  | "facebook"
  | "email"
  | "twitter";

export interface SocialLink {
  platform: SocialPlatform;
  label: string;
  url: string;
}

export interface Profile {
  fullName: string;
  /** e.g. "Frontend Developer" or "Frontend Developer | Learning Backend with NestJS" */
  title: string;
  avatarUrl: string;
  /** Short 3-5 line introduction shown in the Hero section */
  shortIntro: string;
  /** Longer professional summary shown in the About section */
  aboutText: string;
  /** Short highlight bullets shown alongside aboutText (e.g. experience, teamwork) */
  aboutHighlights: string[];
  location?: string;
  /** Path to CV file inside /public, e.g. "/cv/john-doe-cv.pdf" */
  resumeUrl: string;
  email: string;
  socialLinks: SocialLink[];
}
