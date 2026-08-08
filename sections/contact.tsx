import { CopyEmailButton } from "@/components/shared/copy-email-button";
import {
  FacebookIcon,
  GithubIcon,
  LinkedinIcon,
} from "@/components/shared/icons";
import { Reveal } from "@/components/shared/reveal";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { profile } from "@/data";

const socialIcons = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  facebook: FacebookIcon,
} as const;

export function Contact() {
  const links = profile.socialLinks.filter(
    (link): link is typeof link & { platform: keyof typeof socialIcons } =>
      link.platform in socialIcons,
  );

  return (
    <section
      id="contact"
      className="border-t border-black/5 py-20 sm:py-24 dark:border-white/10"
    >
      <Container className="flex flex-col items-center gap-6 text-center">
        <Reveal>
          <SectionHeading
            eyebrow="Contact"
            title="Let's work together"
            description="Feel free to reach out - I'm open to new opportunities and interesting conversations."
          />
        </Reveal>

        <Reveal delay={0.1}>
          <CopyEmailButton email={profile.email} />
        </Reveal>

        <Reveal delay={0.15}>
          <div className="flex items-center gap-3">
            {links.map((link) => {
              const Icon = socialIcons[link.platform];
              return (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 text-zinc-600 transition-colors hover:bg-black/[.04] hover:text-foreground dark:border-white/15 dark:text-zinc-400 dark:hover:bg-white/[.06]"
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
