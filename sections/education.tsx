import { Reveal } from "@/components/shared/reveal";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { education } from "@/data";

export function Education() {
  return (
    <section
      id="education"
      className="border-t border-black/5 py-20 sm:py-24 dark:border-white/10"
    >
      <Container>
        <Reveal>
          <SectionHeading eyebrow="Education" title="Education" />
        </Reveal>

        <div className="mx-auto mt-10 max-w-2xl space-y-4">
          {education.map((item, index) => (
            <Reveal key={item.school} delay={index * 0.1}>
              <div className="rounded-2xl border border-black/10 p-6 dark:border-white/10">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-base font-semibold">{item.school}</h3>
                  <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                    {item.startYear} - {item.endYear}
                  </span>
                </div>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                  {item.degree}
                </p>
                {item.description && (
                  <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
                    {item.description}
                  </p>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
