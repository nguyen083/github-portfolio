import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

interface SectionHeadingProps extends HTMLAttributes<HTMLDivElement> {
  eyebrow?: string;
  title: string;
  description?: string;
}

/** Consistent title block used at the top of every page section. */
export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
  ...props
}: SectionHeadingProps) {
  return (
    <div className={cn("mx-auto max-w-2xl text-center", className)} {...props}>
      {eyebrow && (
        <p className="mb-2 text-sm font-medium text-zinc-500 dark:text-zinc-400">
          {eyebrow}
        </p>
      )}
      <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-base text-zinc-600 dark:text-zinc-400">
          {description}
        </p>
      )}
    </div>
  );
}
