import { Reveal } from "@/components/shared/reveal";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { experiences } from "@/data";

function formatRange(start: string, end?: string) {
  return `${start} - ${end ?? "Present"}`;
}

export function Experience() {
  return (
    <section
      id="experience"
      className="border-t border-black/5 py-20 sm:py-24 dark:border-white/10"
    >
      <Container>
        <Reveal>
          <SectionHeading eyebrow="Experience" title="Work experience" />
        </Reveal>

        <ol className="relative mx-auto mt-10 max-w-2xl border-l border-black/10 pl-6 dark:border-white/10">
          {experiences.map((exp, index) => (
            <li
              key={`${exp.company}-${exp.startDate}`}
              className="relative mb-10 last:mb-0"
            >
              <Reveal delay={index * 0.1}>
                <span className="absolute mt-1.5 h-2.5 w-2.5 -translate-x-[calc(1.5rem+3px)] rounded-full bg-foreground" />
                <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                  {formatRange(exp.startDate, exp.endDate)}
                </p>
                <h3 className="mt-1 text-base font-semibold">
                  {exp.position} · {exp.company}
                </h3>
                <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
                  {exp.achievements.map((achievement) => (
                    <li key={achievement}>{achievement}</li>
                  ))}
                </ul>
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
