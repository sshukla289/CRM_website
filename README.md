# CRM Website

This project is a Next.js 16 marketing website for Triostack CRM. It includes a landing page, pricing page, industries page, features page, blog listing with detail pages, legal pages, and a brochure download route.

The project is configured to run on one public application port only:

```text
http://localhost:3000
```

## Stack

- Next.js 16 with App Router
- React 19
- JavaScript
- Tailwind CSS 4
- Docker Compose

## Active Routes

- `/`
- `/features`
- `/pricing`
- `/industries`
- `/blogs`
- `/blogs/[slug]`
- `/privacy-policy`
- `/terms-and-conditions`
- `/crm-brochure`
- `/api/lead`
- `/api/blogs`

## Main Structure

```text
app/
  api/
    blogs/
    lead/
  blogs/
    [slug]/
  crm-brochure/
  features/
  industries/
  pricing/
  privacy-policy/
  terms-and-conditions/
  globals.css
  layout.js
  page.js

components/
  BookCallModal.js
  BrandSection.js
  Chatbot.js
  ConsultationSection.js
  ContactLink.js
  ContactSection.js
  FAQSection.js
  FeaturesSection.js
  GooglePlaySection.js
  HeroForm.js
  HeroSection.js
  Navbar.js
  PricingSection.js
  ProductShowcase.js
  Reveal.js
  SEOComponent.js
  SocialStickyBar.js
  TestimonialSection.js
  TrustSection.js
  WhatsAppButton.js
```

## Run With Docker

Production (no hot reload):

Build and start:

```bash
docker compose up --build -d
```

Or:

```bash
npm run docker:build
```

Start again without rebuilding:

```bash
docker compose up -d
```

Or:

```bash
npm run docker:up
```

Stop:

```bash
docker compose down
```

Or:

```bash
npm run docker:down
```

View logs:

```bash
npm run docker:logs
```

## Hot Reload (Dev Mode)

If you want changes to appear immediately while you edit (Fast Refresh / hot reload), run the app in development mode:

```bash
npm run dev
```

If you prefer Docker with hot reload, use:

```bash
npm run docker:dev
```

Notes (Windows / OneDrive):

- `docker compose up` (production) will **not** hot reload — use `npm run docker:dev`.
- Dev Docker uses polling (WATCHPACK/CHOKIDAR). It also forces webpack mode when Next supports `--no-turbo`, because Turbopack file watching can be flaky on bind mounts.
- If polling still misses changes, move the repo out of OneDrive-synced folders (e.g. `C:\dev\CRM_website`) and try again.

If you changed UI code but still see the old page, you are likely running the **production** container. Reset the dev container (removes volumes + rebuilds):

```bash
npm run docker:dev:reset
```

## Port Configuration

Docker and the app are aligned to one runtime port:

```text
3000:3000
```

## Environment Variables

Create a local `.env` file for server-side values. This file is ignored by Git.

Current server features can use:

```text
BLOG_API_TOKEN=
BLOGS_API_URL=https://api.blog-manager.triostack.in/api/blogs
TRIO_CRM_WEBSITE_WEBHOOK_URL=
TRIO_CRM_WEBSITE_WEBHOOK_SECRET=
```

## Local Development

You do not need a local `node_modules` folder to keep this project running when using Docker.

If you want to run it directly with Node later:

```bash
npm install
npm run dev
```

## Windows Docker Troubleshooting

If Docker cannot connect to the engine, make sure Docker Desktop is running and reopen the terminal.

If you hit Docker config permission issues under `C:\Users\<you>\.docker`, use a project-local Docker config for the current terminal session:

```powershell
$env:DOCKER_CONFIG = (Join-Path $PWD ".docker")
New-Item -ItemType Directory -Force -Path $env:DOCKER_CONFIG | Out-Null
docker compose up --build -d
```

## Cleanup Status

The repo has already been cleaned to avoid committing generated or local-only files such as:

- `node_modules`
- `.next`
- Next.js log files
- local Docker config
- local environment files

Those are covered by `.gitignore`.
