# Sanity blog setup

The blog uses the existing Next.js 15 App Router site and the Sanity project
`qbqtioeh` with the `production` dataset. Published content is read server-side;
Studio users sign in with their Sanity account at `/studio`.

## Local development

1. Install dependencies with `npm install`.
2. The root `.env.local` already contains the public project ID, dataset, and
   canonical site URL. These values are not credentials.
3. Run `npm run dev`, then open `http://localhost:3000/studio` and sign in to
   Sanity. If this Sanity project does not exist or you do not have access to it,
   create/access it at [sanity.io/manage](https://www.sanity.io/manage), then
   replace `NEXT_PUBLIC_SANITY_PROJECT_ID` in `.env.local` with that project's
   ID. The `production` dataset must exist.
4. Run `npx sanity deploy` to publish the Studio to Sanity's hosted Studio
   domain if desired. The Next.js Studio remains available at `/studio`.

In the Sanity project settings, add `http://localhost:3000` and
`https://brandent.in` as allowed API CORS origins. For localhost, use the
project's **Add development host** action. Register the Studio in project
settings if Sanity prompts you; the first local load may show these setup
actions until an account owner completes them.

## Create and publish a post

In Studio, create an Author and a Category first. Create a Blog post, enter its
title and generate its slug, excerpt, featured image and alternative text,
author, publication date, categories, tags, and rich-text article. Add SEO
fields as needed. Save as a draft while editing; use Publish to make it public.
Set a future publication date to keep a post out of the public blog and sitemap
until that date. Mark a post as Featured to show it above the latest stories.

The article editor supports paragraphs, H2/H3 headings, bold/italic text,
numbered and bullet lists, blockquotes, links, and captioned inline or
full-width images.

## Environment variables

Required in local `.env.local` and in the deployment environment:

```dotenv
NEXT_PUBLIC_SANITY_PROJECT_ID=qbqtioeh
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SITE_URL=https://brandent.in
```

Optional server-only variables:

```dotenv
SANITY_API_READ_TOKEN=       # Read-only token; enables draft preview in Studio
SANITY_REVALIDATE_SECRET=    # Secret used to authenticate Sanity publish webhooks
```

Never prefix either secret with `NEXT_PUBLIC_`. Draft preview requires a Sanity
API token with read access; it is only used on the server, with draft mode
enabled, and the token is never sent to the browser. Without it, the preview
endpoint returns an explicit configuration error while published pages
continue to work.

## Publish-time revalidation

Pages revalidate automatically every 60 seconds. For immediate refreshes, create
a Sanity webhook for the `production` dataset targeting
`https://brandent.in/api/revalidate`. Set its secret to the same value as
`SANITY_REVALIDATE_SECRET` in the deployment environment. Include `_type` and
`slug.current` in the webhook payload so the affected article or category path
can also be revalidated. The route verifies Sanity's signed webhook request;
requests are rejected when the signature is invalid.

## Routes

- `/blog` — searchable, category-filterable, paginated published articles
- `/blog/[slug]` — article, SEO metadata, social links, and related articles
- `/blog/category/[slug]` — paginated category archive
- `/studio` — embedded Sanity Studio
- `/sitemap.xml` and `/robots.txt` — generated SEO files
