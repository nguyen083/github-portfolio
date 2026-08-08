"use client";

import { ThemeToggle } from "@/components/shared/theme-toggle";
import { Container } from "@/components/ui/container";
import { profile } from "@/data";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur-md dark:border-white/10 dark:bg-black/80">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link
          href="#home"
          className="min-w-0 truncate text-sm font-semibold tracking-tight"
        >
          {profile.fullName}
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-zinc-600 dark:text-zinc-400 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle className="hidden md:inline-flex" />
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full hover:bg-black/[.04] dark:hover:bg-white/[.06] md:hidden"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      {isOpen && (
        <nav className="flex flex-col gap-1 border-t border-black/5 px-6 py-4 text-sm dark:border-white/10 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="rounded-md px-2 py-2 text-zinc-600 transition-colors hover:bg-black/[.04] hover:text-foreground dark:text-zinc-400 dark:hover:bg-white/[.06]"
            >
              {link.label}
            </Link>
          ))}
          <div className="px-2 pt-2">
            <ThemeToggle />
          </div>
        </nav>
      )}
    </header>
  );
}
