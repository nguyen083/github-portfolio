import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

/** Centers content and applies the shared max-width + horizontal padding used across sections. */
export function Container({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("mx-auto w-full max-w-5xl px-6 sm:px-8", className)}
      {...props}
    />
  );
}
