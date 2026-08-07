export interface Experience {
  company: string;
  position: string;
  /** e.g. "2023-06" */
  startDate: string;
  /** e.g. "2024-08" or undefined for "Present" */
  endDate?: string;
  achievements: string[];
}
