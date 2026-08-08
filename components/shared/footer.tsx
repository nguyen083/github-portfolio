import { Container } from "@/components/ui/container";

export function Footer() {
  return (
    <footer className="border-t border-black/5 py-8 text-sm text-zinc-500 dark:border-white/10 dark:text-zinc-400">
      <Container className="flex flex-col items-center justify-between gap-2 sm:flex-row">
        <p>Built with Next.js + TailwindCSS.</p>
        <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
      </Container>
    </footer>
  );
}
