import { cn } from "@/lib/utils";
import Link from "next/link";
import * as React from "react";

type ButtonVariant = "primary" | "outline" | "ghost";
type ButtonSize = "sm" | "md";

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-foreground text-background hover:bg-foreground/90",
  outline:
    "border border-black/10 hover:bg-black/[.04] dark:border-white/15 dark:hover:bg-white/[.06]",
  ghost: "hover:bg-black/[.04] dark:hover:bg-white/[.06]",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-sm",
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/50 disabled:pointer-events-none disabled:opacity-50";

interface BaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}

type ButtonAsButton = BaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = BaseProps &
  React.ComponentPropsWithoutRef<typeof Link> & { href: string };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

/** Polymorphic button: renders a <Link> when `href` is provided, otherwise a <button>. */
export function Button({
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonProps) {
  const classes = cn(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    className,
  );

  if ("href" in props && props.href !== undefined) {
    const { href, ...rest } = props as ButtonAsLink;
    return <Link href={href} className={classes} {...rest} />;
  }

  return <button className={classes} {...(props as ButtonAsButton)} />;
}
