<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Project: ST-MASCH Solar

German-language marketing website for ST-Masch (solar / services). Production site hosted on Vercel.

## Stack
- Next.js **16.2.3** (App Router) + React **19.2.4** + TypeScript 5
- Tailwind CSS **v4** (via `@tailwindcss/postcss`, no `tailwind.config.ts` content config — v4 uses CSS-first config)
- Framer Motion 12, `@paper-design/shaders-react`, `lucide-react`
- `clsx` + `tailwind-merge` for class composition

## Routes (`src/app/`)
- `/` Home · `/leistungen` + `/leistungen/[slug]` · `/solar` · `/ueber-uns` · `/referenzen` · `/kontakt`

## Key components (`src/components/`)
- `sections/`: Navbar, Hero, Leistungen, Kontakt
- `ui/`: PageHero, GlowButton, AnimatedCard, PaperDesignShaderBackground, FloatingPhone, Testimonials (initials-only, no avatar images), CTABanner, AccessibilityWidget

## Conventions
- German content — preserve umlauts (ä/ö/ü/ß) exactly.
- Shader + Framer Motion components must be `"use client"`.
- Unified card look via `AnimatedCard` — reuse rather than re-style.
- CTAs use `GlowButton`.
- No `vercel.json`; rely on Next 16 defaults. Don't add one without reason.

## Deployment
- Vercel project `st-masch-next` (`.vercel/project.json` committed).
- Env vars managed in Vercel dashboard (no local `.env`).

## Scripts
- `npm run dev` · `npm run build` · `npm run start` · `npm run lint`
