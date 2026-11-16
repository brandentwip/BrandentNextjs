import type { Metadata } from 'next';
import Link from 'next/link';
import BlogCard from '@/components/blog/BlogCard';
import BlogFilters from '@/components/blog/BlogFilters';
import BlogPagination from '@/components/blog/BlogPagination';
import FeaturedBlog from '@/components/blog/FeaturedBlog';
import PageHero from '@/components/blog/PageHero';
import { sanityFetch } from '@/sanity/lib/fetch';
import {
  categoriesQuery,
  featuredPostQuery,
  listingCountQuery,
  listingPostsQuery,
} from '@/sanity/lib/queries';
import type { BlogCategory, BlogPost } from '@/sanity/lib/types';
import '@/styles/blog.css';

const pageSize = 9;
const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://brandent.in').replace(/\/$/, '');
type Props = { searchParams: Promise<{ q?: string; category?: string; page?: string }> };

export const metadata: Metadata = {
  title: 'Blog — Brandent',
  description: 'Insights, case studies, and thinking from the Brandent team on marketing, creative, and growth.',
  alternates: { canonical: `${siteUrl}/blog` },
  openGraph: {
    title: 'Blog — Brandent',
    description: 'Insights, case studies, and thinking from the Brandent team on marketing, creative, and growth.',
    type: 'website',
    url: `${siteUrl}/blog`,
  },
  twitter: { card: 'summary_large_image', title: 'Blog — Brandent' },
};

export default async function BlogPage({ searchParams }: Props) {
  const params = await searchParams;
  const query = (params.q ?? '').trim().slice(0, 100);
  const category = params.category ?? '';
  const requestedPage = Number.parseInt(params.page ?? '1', 10);
  const page = Number.isFinite(requestedPage) && requestedPage > 0 ? requestedPage : 1;
  const [categories, featured] = await Promise.all([
    sanityFetch<BlogCategory[]>(categoriesQuery),
    !query && !category && page === 1 ? sanityFetch<BlogPost | null>(featuredPostQuery) : Promise.resolve(null),
  ]);
  const search = query ? `*${query.replace(/\*/g, '')}*` : null;
  const queryParams = {
    category: category || null,
    search,
    skip: (page - 1) * pageSize,
    end: page * pageSize,
    exclude: featured?._id ?? null,
  };
  const [posts, total] = await Promise.all([
    sanityFetch<BlogPost[]>(listingPostsQuery, queryParams),
    sanityFetch<number>(listingCountQuery, {
      category: queryParams.category,
      search,
      exclude: queryParams.exclude,
    }),
  ]);
  const totalPages = Math.ceil(total / pageSize);

  return (
    <div className="pg-blog">
      <PageHero />
      <main className="blog-container">
        {featured && <section aria-label="Featured article"><FeaturedBlog post={featured} /></section>}
        <section className="blog-listing" aria-labelledby="latest-posts">
          <div className="blog-section-heading">
            <div>
              <span className="blog-eyebrow">{category ? 'Explore a topic' : 'From our journal'}</span>
              <h2 id="latest-posts">{query || category ? 'Search the journal' : 'Latest stories'}</h2>
            </div>
            <Link href="/contact">Start a project <span aria-hidden="true">→</span></Link>
          </div>
          <BlogFilters categories={categories} query={query} category={category} />
          {posts.length > 0 ? (
            <div className="blog-grid">{posts.map((post) => <BlogCard key={post._id} post={post} />)}</div>
          ) : (
            <div className="blog-empty">
              <h3>No articles found</h3>
              <p>{query || category ? 'Try another search or category, or clear your filters.' : 'New stories are on their way. Please check back soon.'}</p>
              {(query || category) && <Link href="/blog">Clear filters</Link>}
            </div>
          )}
          <BlogPagination page={page} totalPages={totalPages} basePath="/blog" query={query} category={category} />
        </section>
      </main>
    </div>
  );
}
