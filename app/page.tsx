import { About } from "@/sections/about";
import { Certificates } from "@/sections/certificates";
import { Contact } from "@/sections/contact";
import { Education } from "@/sections/education";
import { Experience } from "@/sections/experience";
import { GithubActivity } from "@/sections/github-activity";
import { Hero } from "@/sections/hero";
import { Projects } from "@/sections/projects";
import { Skills } from "@/sections/skills";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <GithubActivity />
      <Experience />
      <Education />
      <Certificates />
      <Contact />
    </>
  );
}
