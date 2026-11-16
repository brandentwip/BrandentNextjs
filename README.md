# Brandent website (Next.js)

Converted from the original static HTML site. Run it:

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

## Where to change things

| I want to…                                   | Edit                                                    |
| -------------------------------------------- | ------------------------------------------------------- |
| Change nav links, footer, phone, email       | `src/data/site.ts`                                      |
| Edit a case study (stats, quote, card text)  | `src/data/projects.ts`                                  |
| Manage blog content                         | Sanity Studio at `/studio` (see `SANITY_SETUP.md`)      |
| Edit text/layout of a page section           | `src/components/<page>/<Section>.tsx`                   |
| Reorder / remove sections on a page          | the page file, e.g. `src/app/(main)/services/page.tsx`  |
| Change colours, nav, footer, cursor styles   | `src/app/globals.css`                                   |
| Change one page's styling                    | `src/styles/<page>.css` (scoped to that page only)      |
| Add a new page                               | new folder in `src/app/(main)/<name>/page.tsx`          |

## Structure

```
src/
  app/
    layout.tsx            fonts, cursor, scroll animations (all pages)
    globals.css           shared styles: colours, nav, footer, cursor
    (main)/               pages with the main navbar + footer
      page.tsx            Home
      services/ work/ process/ clients/ contact/ blog/
    (case)/work/[slug]/   case-study pages (one template, data from projects.ts)
  components/
    layout/               Navbar, Footer, Cursor, RevealObserver
    home/ services/ ...   one file per page section
    projects/             case-study sections + shared pieces
  data/                   site.ts, projects.ts
  styles/                 per-page CSS (each is scoped under .pg-<page>)
```

## Notes

- The contact form shows the thank-you message but does not send anything yet (same as the original).
  See `src/components/contact/ContactForm.tsx` for the TODO.
- Fonts load from Google Fonts via a `<link>` in `src/app/layout.tsx`.
- The Sanity blog uses server-rendered routes and API handlers, so the app must run on a Next.js server; do not enable `output: 'export'`.

## Sanity blog

See [SANITY_SETUP.md](./SANITY_SETUP.md) for Studio access, environment variables, authoring, draft preview, and webhook revalidation.

## BRAND SIGNAL®

See [BRAND_SIGNAL_SETUP.md](./BRAND_SIGNAL_SETUP.md) for AI generation, Supabase lead storage, optional email notifications, and development mock mode.
# BrandentNextjs
