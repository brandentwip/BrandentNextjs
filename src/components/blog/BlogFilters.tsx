import Link from 'next/link';
import type { BlogCategory } from '@/sanity/lib/types';

export default function BlogFilters({
  categories,
  query,
  category,
}: {
  categories: BlogCategory[];
  query: string;
  category: string;
}) {
  return (
    <form className="blog-filters" action="/blog" method="get">
      <label className="blog-search">
        <span className="visually-hidden">Search articles</span>
        <input type="search" name="q" placeholder="Search articles…" defaultValue={query} />
      </label>
      <label className="blog-select">
        <span className="visually-hidden">Filter by category</span>
        <select name="category" defaultValue={category}>
          <option value="">All categories</option>
          {categories.map((item) => <option key={item.slug} value={item.slug}>{item.title}</option>)}
        </select>
      </label>
      <button type="submit">Search</button>
      {(query || category) && <Link href="/blog">Clear</Link>}
    </form>
  );
}
