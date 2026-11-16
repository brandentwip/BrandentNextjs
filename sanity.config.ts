import { defineConfig } from 'sanity';
import { presentationTool } from 'sanity/presentation';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './src/sanity/schemaTypes';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

if (!projectId || !dataset) {
  throw new Error('Set NEXT_PUBLIC_SANITY_PROJECT_ID and NEXT_PUBLIC_SANITY_DATASET in .env.local.');
}

export default defineConfig({
  name: 'brandent',
  title: 'Brandent Blog',
  projectId,
  dataset,
  plugins: [
    structureTool(),
    presentationTool({
      previewUrl: {
        initial: process.env.NEXT_PUBLIC_SITE_URL,
        previewMode: { enable: '/api/draft-mode/enable' },
      },
      resolve: {
        locations: {
          post: {
            select: { title: 'title', slug: 'slug.current' },
            resolve: (value) => {
              if (!value) return null;
              return value.slug
                ? { locations: [{ title: value.title || 'Untitled article', href: `/blog/${value.slug}` }] }
                : { message: 'Add a URL slug to preview this article.', tone: 'caution' };
            },
          },
          category: {
            select: { title: 'title', slug: 'slug.current' },
            resolve: (value) => {
              if (!value) return null;
              return value.slug
                ? { locations: [{ title: value.title || 'Untitled category', href: `/blog/category/${value.slug}` }] }
                : { message: 'Add a URL slug to preview this category.', tone: 'caution' };
            },
          },
        },
      },
    }),
  ],
  schema: { types: schemaTypes },
});
