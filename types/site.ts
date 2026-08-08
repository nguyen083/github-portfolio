export interface SiteConfig {
  title: string;
  description: string;
  /** Deployed site URL, used for Open Graph / canonical tags */
  url: string;
  ogImage: string;
  twitterHandle?: string;
  githubUsername: string;
  keywords: string[];
}
