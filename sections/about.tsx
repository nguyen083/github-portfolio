import { Reveal } from "@/components/shared/reveal";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { profile } from "@/data";
import { Briefcase, Code2, Lightbulb, Users, Zap } from "lucide-react";

const highlightIcons = [Briefcase, Lightbulb, Zap, Code2, Users];

export function About() {
  return (
    <section
      id="about"
      className="border-t border-black/5 py-20 sm:py-24 dark:border-white/10"
    >
      <Container>
        <Reveal>
          <SectionHeading eyebrow="About" title="A bit about how I work" />
        </Reveal>

        <div className="mx-auto mt-10 max-w-3xl">
          <Reveal delay={0.1}>
            <p className="text-zinc-600 dark:text-zinc-400">
              {profile.aboutText}
            </p>
          </Reveal>

          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {profile.aboutHighlights.map((highlight, index) => {
              const Icon = highlightIcons[index % highlightIcons.length];
              return (
                <Reveal
                  key={highlight}
                  delay={0.15 + index * 0.05}
                  className="h-full"
                >
                  <li className="flex h-full items-start gap-3 rounded-xl border border-black/10 p-4 dark:border-white/10">
                    <Icon className="mt-0.5 h-5 w-5 shrink-0 text-zinc-500 dark:text-zinc-400" />
                    <span className="text-sm text-zinc-700 dark:text-zinc-300">
                      {highlight}
                    </span>
                  </li>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </Container>
    </section>
  );
}
