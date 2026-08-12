import { Reveal } from "@/components/shared/reveal";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { certificates } from "@/data";
import { Award, ExternalLink } from "lucide-react";

export function Certificates() {
  if (certificates.length === 0) {
    return null;
  }

  return (
    <section
      id="certificates"
      className="border-t border-black/5 py-20 sm:py-24 dark:border-white/10"
    >
      <Container>
        <Reveal>
          <SectionHeading eyebrow="Certificates" title="Certificates" />
        </Reveal>

        <div className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-2">
          {certificates.map((cert, index) => (
            <Reveal key={cert.name} delay={index * 0.08}>
              <Card className="flex items-start gap-3">
                <Award className="mt-0.5 h-5 w-5 shrink-0 text-zinc-500 dark:text-zinc-400" />
                <div className="flex-1">
                  <h3 className="text-sm font-semibold">{cert.name}</h3>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">
                    {cert.issuer} · {cert.year}
                  </p>
                </div>
                {cert.url && (
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${cert.name} certificate`}
                    className="text-zinc-400 hover:text-foreground"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                )}
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
