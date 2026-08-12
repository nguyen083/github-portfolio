"use client";

import { GithubIcon } from "@/components/shared/icons";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { profile } from "@/data";
import { withBasePath } from "@/lib/utils";
import { motion, useReducedMotion } from "framer-motion";
import { Download, Mail } from "lucide-react";
import Image from "next/image";

const githubUrl =
  profile.socialLinks.find((link) => link.platform === "github")?.url ?? "#";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const fadeUp = (delay = 0) => ({
    initial: shouldReduceMotion ? false : { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: shouldReduceMotion ? 0 : 0.5,
      delay: shouldReduceMotion ? 0 : delay,
    },
  });

  return (
    <section id="home" className="py-24 sm:py-32">
      <Container className="flex flex-col items-center text-center">
        <motion.div {...fadeUp(0)}>
          <Image
            src={withBasePath(profile.avatarUrl)}
            alt={profile.fullName}
            width={112}
            height={112}
            priority
            className="mx-auto h-28 w-28 rounded-full object-cover ring-1 ring-black/10 dark:ring-white/15"
          />
        </motion.div>

        <motion.h1
          {...fadeUp(0.1)}
          className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl"
        >
          {profile.fullName}
        </motion.h1>

        <motion.p
          {...fadeUp(0.15)}
          className="mt-2 text-base font-medium text-zinc-500 dark:text-zinc-400"
        >
          {profile.title}
        </motion.p>

        <motion.p
          {...fadeUp(0.2)}
          className="mt-6 max-w-xl text-zinc-600 dark:text-zinc-400"
        >
          {profile.shortIntro}
        </motion.p>

        <motion.div
          {...fadeUp(0.25)}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <Button
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Download className="h-4 w-4" />
            Download CV
          </Button>
          <Button
            href={githubUrl}
            variant="outline"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon className="h-4 w-4" />
            View GitHub
          </Button>
          <Button href="#contact" variant="outline">
            <Mail className="h-4 w-4" />
            Contact
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
