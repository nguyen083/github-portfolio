# Portfolio

A personal developer portfolio built with Next.js (App Router), TypeScript, Tailwind CSS, and Framer Motion. Statically exported and deployed to GitHub Pages.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

## Updating content

All personal content lives in `data/*.ts` (typed by `types/*.ts`) - no need to touch components:

- `data/profile.ts` - name, title, avatar, bio, resume link, social links
- `data/skills.ts` - skill groups
- `data/projects.ts` - featured projects
- `data/experience.ts` - work experience timeline
- `data/education.ts` - education history
- `data/certificates.ts` - certificates
- `data/site.ts` - site metadata (title, description, URL, OG image, keywords, GitHub username)

Place your images/CV under `public/images/` and `public/cv/` matching the paths referenced in `data/profile.ts`.

## Building

```bash
npm run build
```

This produces a static export in `out/` (`output: "export"` in `next.config.ts`).

## Deploying to GitHub Pages

Push to `main` and the `.github/workflows/deploy.yml` workflow builds and publishes `out/` to GitHub Pages automatically. In the repo settings, set **Settings > Pages > Source** to **GitHub Actions**.

- If the repo is named `<username>.github.io`, the site is served from the domain root and no base path is needed.
- For any other repo name, the workflow automatically sets `NEXT_PUBLIC_BASE_PATH=/<repo-name>` so asset paths resolve correctly under `https://<username>.github.io/<repo-name>`.

After the first deploy, update `data/site.ts` `url` to the final published URL (used for canonical/Open Graph tags and `sitemap.ts`).
