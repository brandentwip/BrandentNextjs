import Link from 'next/link';

type Props = { page: number; totalPages: number; basePath: string; query?: string; category?: string };

export default function BlogPagination({ page, totalPages, basePath, query, category }: Props) {
  if (totalPages <= 1) return null;
  const href = (target: number) => {
    const params = new URLSearchParams();
    if (query) params.set('q', query);
    if (category) params.set('category', category);
    if (target > 1) params.set('page', String(target));
    const suffix = params.toString();
    return suffix ? `${basePath}?${suffix}` : basePath;
  };
  return (
    <nav className="blog-pagination" aria-label="Blog pages">
      {page > 1 ? <Link href={href(page - 1)} rel="prev">← Newer</Link> : <span />}
      <span>Page {page} of {totalPages}</span>
      {page < totalPages ? <Link href={href(page + 1)} rel="next">Older →</Link> : <span />}
    </nav>
  );
}
