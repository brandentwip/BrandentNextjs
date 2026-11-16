import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import BlogCard from '@/components/blog/BlogCard';
import BlogPagination from '@/components/blog/BlogPagination';
import { CategoryStructuredData } from '@/components/blog/BlogStructuredData';
import { sanityFetch } from '@/sanity/lib/fetch';
import { categoryBySlugQuery, categoryCountQuery, categoryPostsQuery } from '@/sanity/lib/queries';
import type { BlogCategory, BlogPost } from '@/sanity/lib/types';
import '@/styles/blog.css';

type Props = { params: Promise<{ slug: string }>; searchParams: Promise<{ page?: string }> };
const pageSize = 9;
const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://brandent.in').replace(/\/$/, '');

async function getCategory(slug: string) {
  return sanityFetch<BlogCategory | null>(categoryBySlugQuery, { slug });
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = await getCategory(slug);
  if (!category) return { title: 'Category not found — Brandent' };
  const title = `${category.title} — Brandent Blog`;
  const description = category.description || `Read the latest Brandent articles about ${category.title}.`;
  return {
    title,
    description,
    alternates: { canonical: `${siteUrl}/blog/category/${category.slug}` },
    openGraph: { title, description, url: `${siteUrl}/blog/category/${category.slug}`, type: 'website' },
  };
}

export default async function CategoryPage({ params, searchParams }: Props) {
  const [{ slug }, query] = await Promise.all([params, searchParams]);
  const category = await getCategory(slug);
  if (!category) notFound();
  const requestedPage = Number.parseInt(query.page ?? '1', 10);
  const page = Number.isFinite(requestedPage) && requestedPage > 0 ? requestedPage : 1;
  const [posts, total] = await Promise.all([
    sanityFetch<BlogPost[]>(categoryPostsQuery, { slug, skip: (page - 1) * pageSize, end: page * pageSize }),
    sanityFetch<number>(categoryCountQuery, { slug }),
  ]);

  return (
    <div className="pg-blog">
      <header className="blog-category-hero">
        <div className="blog-container">
          <Link href="/blog">← Back to all stories</Link>
          <span className="blog-eyebrow">Explore a topic</span>
          <h1>{category.title}</h1>
          {category.description && <p>{category.description}</p>}
        </div>
      </header>
      <main className="blog-container blog-listing">
        {posts.length > 0 ? <div className="blog-grid">{posts.map((post) => <BlogCard key={post._id} post={post} />)}</div> : (
          <div className="blog-empty"><h2>No articles in this category yet</h2><p>Check back soon for new stories.</p></div>
        )}
        <BlogPagination page={page} totalPages={Math.ceil(total / pageSize)} basePath={`/blog/category/${slug}`} />
        <CategoryStructuredData title={category.title} slug={category.slug} />
      </main>
    </div>
  );
}
