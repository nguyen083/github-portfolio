"use client";

import { Reveal } from "@/components/shared/reveal";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig } from "@/data";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function GithubActivity() {
  const { resolvedTheme } = useTheme();
  // Avoid a theme mismatch flash before the client resolves the actual theme.
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === "dark";
  const statsTheme = isDark ? "dark" : "default";
  const contributionColor = isDark ? "40c463" : "216e39";
  const username = siteConfig.githubUsername;

  return (
    <section
      id="github"
      className="border-t border-black/5 py-20 sm:py-24 dark:border-white/10"
    >
      <Container className="flex flex-col items-center gap-8">
        <Reveal>
          <SectionHeading eyebrow="GitHub" title="GitHub activity" />
        </Reveal>

        <Reveal delay={0.1} className="w-full max-w-3xl">
          {/* eslint-disable-next-line @next/next/no-img-element -- externally generated SVG, not eligible for next/image optimization */}
          <img
            src={`https://ghchart.rshah.org/${contributionColor}/${username}`}
            alt={`${username}'s GitHub contribution graph`}
            className="w-full rounded-xl border border-black/10 dark:border-white/10"
            loading="lazy"
          />
        </Reveal>

        <div className="grid w-full max-w-3xl gap-6 sm:grid-cols-2">
          <Reveal delay={0.15}>
            {/* eslint-disable-next-line @next/next/no-img-element -- externally generated SVG, not eligible for next/image optimization */}
            <img
              src={`https://github-readme-stats-fast.vercel.app/api?username=${username}&show_icons=true&theme=${statsTheme}&hide_border=true`}
              alt={`${username}'s GitHub stats`}
              className="w-full rounded-xl"
              loading="lazy"
            />
          </Reveal>
          <Reveal delay={0.2}>
            {/* eslint-disable-next-line @next/next/no-img-element -- externally generated SVG, not eligible for next/image optimization */}
            <img
              src={`https://github-readme-stats-fast.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=${statsTheme}&hide_border=true`}
              alt={`${username}'s top languages`}
              className="w-full rounded-xl"
              loading="lazy"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
