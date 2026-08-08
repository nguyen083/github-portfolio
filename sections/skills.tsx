import { Reveal } from "@/components/shared/reveal";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { skillGroups } from "@/data";

export function Skills() {
  return (
    <section
      id="skills"
      className="border-t border-black/5 py-20 sm:py-24 dark:border-white/10"
    >
      <Container>
        <Reveal>
          <SectionHeading eyebrow="Skills" title="Technologies I work with" />
        </Reveal>

        <div className="mx-auto mt-10 grid max-w-4xl gap-6 sm:grid-cols-3">
          {skillGroups.map((group, index) => (
            <Reveal key={group.category} delay={index * 0.1} className="h-full">
              <div className="h-full rounded-2xl border border-black/10 p-6 dark:border-white/10">
                <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                  {group.label}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <Badge key={skill.name}>{skill.name}</Badge>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
