import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-black/10 bg-white p-6 transition-all hover:-translate-y-0.5 hover:shadow-lg dark:border-white/10 dark:bg-zinc-900/40",
        className,
      )}
      {...props}
    />
  );
}
