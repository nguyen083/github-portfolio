import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/** Merge Tailwind class names, resolving conflicts (e.g. "px-2" vs "px-4"). */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Prefix local public paths with Next.js basePath for GitHub Pages project sites. */
export function withBasePath(path: string) {
  if (!path || /^https?:\/\//.test(path) || path.startsWith("data:")) {
    return path;
  }

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  if (!basePath) {
    return path;
  }

  if (path.startsWith(basePath)) {
    return path;
  }

  return path.startsWith("/") ? `${basePath}${path}` : `${basePath}/${path}`;
}
