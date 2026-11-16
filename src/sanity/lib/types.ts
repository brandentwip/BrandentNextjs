import type { Image } from 'sanity';

export type BlogCategory = { title: string; slug: string; description?: string };
export type BlogAuthor = { name: string; slug: string; bio?: string; image?: Image };
export type BlogPost = {
  _id: string;
  _updatedAt: string;
  title: string;
  slug: string;
  excerpt: string;
  publishedAt: string;
  featured?: boolean;
  noIndex?: boolean;
  seoTitle?: string;
  seoDescription?: string;
  canonicalUrl?: string;
  featuredImage: Image & { alt: string };
  seoImage?: Image;
  author: BlogAuthor;
  categories?: (BlogCategory | null)[] | null;
  tags?: string[];
  body: Array<Record<string, unknown> & { _type: string }>;
};
