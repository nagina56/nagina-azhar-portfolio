# Nagina Azhar — AI & Web Developer

Personal portfolio website for **Nagina Azhar**, a Python developer and AI & web developer. The site presents skills, services and a selection of client web projects, and provides a direct route to get in touch.

Built with Next.js and deployed on Vercel.

## Description

A responsive, single-page-per-section portfolio built with the Next.js App Router and Tailwind CSS. All routes are statically prerendered, so pages load quickly and are served from the edge. Content — profile details, skills, services and project entries — is held in a single typed config module, which keeps page components focused on layout and presentation.

The contact form opens the visitor's email client with the message pre-filled, so no backend service or third-party form provider is required.

## Key Features

- Five content pages plus a custom 404 page
- Fully responsive layout with a dedicated mobile navigation menu
- Scroll-reveal animations and a subtle animated backdrop, both respecting `prefers-reduced-motion`
- Typed central content config for profile, skills, services and projects
- Project showcase with live previews and per-project accent theming
- Contact form with inline validation and a pre-filled email handoff
- Open Graph and Twitter card images generated at build time
- JSON-LD structured data for search engines and social previews
- Optimised images served in AVIF/WebP
- Statically prerendered routes

## Technologies Used

| Technology | Version |
| --- | --- |
| Next.js (App Router) | 16.3.6 |
| React | 19.2.8 |
| TypeScript | 5.x |
| Tailwind CSS | 4.x |
| ESLint | 9.x |

## Pages Included

| Route | Description |
| --- | --- |
| `/` | Introduction, skills overview and featured projects |
| `/about` | Background, skills breakdown and experience |
| `/projects` | Full project showcase with live demo links |
| `/services` | Services offered and deliverables |
| `/contact` | Contact form and direct contact channels |
| `404` | Custom not-found page |

## Projects Showcased

| Project | Category | Live Demo |
| --- | --- | --- |
| Elare Fashion Boutique | E-commerce Fashion Website | [View live](https://elar-fashion-boutique.vercel.app/) |
| Soreva — Modern Dining | Restaurant Website | [View live](https://soreva-modern-dining.vercel.app/) |
| Lumiere Beauty Studio | Beauty & Bridal Website | [View live](https://lumiere-beauty-studio-ruddy.vercel.app/) |
| Aurelia Dental Clinic | Professional Services Website | [View live](https://aurelia-dental-studio-gilt.vercel.app/) |
| FlowAI | AI Web Application | [View live](https://flowai-chi-woad.vercel.app/) |

## Live Demo

**Production site:** [https://nagina-azhar-ai-web-developer.vercel.app](https://nagina-azhar-ai-web-developer.vercel.app)

Deployed on Vercel. Every route is statically generated at build time.

## GitHub Repository

**Source code:** [https://github.com/nagina56/nagina-azhar-portfolio](https://github.com/nagina56/nagina-azhar-portfolio)

```bash
git clone https://github.com/nagina56/nagina-azhar-portfolio.git
cd nagina-azhar-portfolio
npm install
npm run dev
```

| Script | Description |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run build` | Create an optimised production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

### Environment Variables

Copy `.env.example` to `.env.local` and set:

```bash
NEXT_PUBLIC_SITE_URL=https://nagina-azhar-ai-web-developer.vercel.app
```

This sets the public origin used for canonical URLs, Open Graph tags and social previews. If left unset, the site falls back to `http://localhost:3000` for local development.

## Contact

- **Email:** [syntaxsoul341@gmail.com](mailto:syntaxsoul341@gmail.com)
- **LinkedIn:** [linkedin.com/in/nagina-azhar](https://www.linkedin.com/in/nagina-azhar)
- **GitHub:** [github.com/nagina56](https://github.com/nagina56)
