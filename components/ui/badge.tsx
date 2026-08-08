import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

export function Badge({
  className,
  ...props
}: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-black/10 bg-black/[.03] px-3 py-1 text-xs font-medium text-zinc-700 dark:border-white/15 dark:bg-white/[.06] dark:text-zinc-300",
        className,
      )}
      {...props}
    />
  );
}
