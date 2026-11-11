# Andrei Hernandez — Portfolio

Personal portfolio built with [Astro](https://astro.build) 7 and Tailwind CSS 4, in English (`/`) and Spanish (`/es/`).

## Develop

```bash
pnpm install
pnpm dev
```

## Content

- Profile, experience, projects and tech stack: `src/data/info.ts` (English source of truth)
- Spanish text and UI labels: `src/i18n/index.ts` — `es.experience` must keep one entry per job, in the same order (the build fails otherwise)
- Icons: `public/assets/icons/`

## Deploy (Railway)

- Build: `pnpm build` · Start: `pnpm start` (Node standalone server, listens on `$PORT`)
- Every page is static except the home pages, which render on request so the contact form can send email.
- Environment variables:
  - `RESEND_API_KEY` — read at runtime, used by the contact form
  - `RAILWAY_PUBLIC_DOMAIN` — set by Railway; becomes the site URL for canonical links, sitemap and the form's origin check
