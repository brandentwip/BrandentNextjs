import type { MetadataRoute } from 'next';
import { sanityFetch } from '@/sanity/lib/fetch';
import { blogPostsQuery, categoriesQuery } from '@/sanity/lib/queries';
import type { BlogPost } from '@/sanity/lib/types';
import type { BlogCategory } from '@/sanity/lib/types';

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://brandent.in').replace(/\/$/, '');

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [posts, categories] = await Promise.all([
    sanityFetch<Pick<BlogPost, 'slug' | 'publishedAt' | 'noIndex'>[]>(blogPostsQuery),
    sanityFetch<Pick<BlogCategory, 'slug'>[]>(categoriesQuery),
  ]);
  const pages: MetadataRoute.Sitemap = [
    { url: siteUrl, changeFrequency: 'weekly', priority: 1 },
    ...['/services', '/work', '/process', '/clients', '/contact', '/blog'].map((path) => ({
      url: `${siteUrl}${path}`,
      changeFrequency: 'monthly' as const,
      priority: path === '/blog' ? 0.8 : 0.6,
    })),
    ...posts.filter((post) => !post.noIndex).map((post) => ({
      url: `${siteUrl}/blog/${post.slug}`,
      lastModified: post.publishedAt,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    ...categories.map((category) => ({
      url: `${siteUrl}/blog/category/${category.slug}`,
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    })),
  ];
  return pages;
}
