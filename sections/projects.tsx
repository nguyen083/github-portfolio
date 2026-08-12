import { GithubIcon } from "@/components/shared/icons";
import { Reveal } from "@/components/shared/reveal";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects } from "@/data";
import { withBasePath } from "@/lib/utils";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

export function Projects() {
  return (
    <section
      id="projects"
      className="border-t border-black/5 py-20 sm:py-24 dark:border-white/10"
    >
      <Container>
        <Reveal>
          <SectionHeading eyebrow="Projects" title="Featured projects" />
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.1} className="h-full">
              <Card className="flex h-full flex-col overflow-hidden p-0">
                {project.imageUrl ? (
                  <div className="relative aspect-video w-full bg-zinc-100 dark:bg-zinc-800">
                    <Image
                      src={withBasePath(project.imageUrl)}
                      alt={project.name}
                      fill
                      sizes="(min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="flex aspect-video w-full items-end bg-linear-to-br from-zinc-100 via-zinc-50 to-white p-6 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900">
                    <div>
                      <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
                        Featured Project
                      </p>
                      <h3 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
                        {project.name}
                      </h3>
                    </div>
                  </div>
                )}

                <div className="flex flex-1 flex-col gap-3 p-6">
                  <div className="flex content-center justify-between">
                    <h3 className="text-lg font-semibold">{project.name}</h3>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
                      {project.duration}
                    </p>
                  </div>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <Badge key={tech}>{tech}</Badge>
                    ))}
                  </div>

                  <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                    Role: {project.role}
                  </p>

                  <ul className="list-inside list-disc text-xs text-zinc-500 dark:text-zinc-400">
                    {project.learnings.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>

                  <div className="mt-auto flex gap-3 pt-2 text-sm font-medium">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-zinc-600 hover:text-foreground dark:text-zinc-400"
                      >
                        <GithubIcon className="h-4 w-4" /> GitHub
                      </a>
                    )}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-zinc-600 hover:text-foreground dark:text-zinc-400"
                      >
                        <ExternalLink className="h-4 w-4" /> Demo
                      </a>
                    )}
                  </div>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
