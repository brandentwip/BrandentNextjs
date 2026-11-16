import Image from 'next/image';
import Link from 'next/link';
import { imageUrl } from '@/sanity/lib/image';
import type { BlogCategory, BlogPost } from '@/sanity/lib/types';

export function formatBlogDate(date: string) {
  return new Intl.DateTimeFormat('en', { dateStyle: 'long', timeZone: 'UTC' }).format(new Date(date));
}

export function getPostCategories(post: BlogPost): BlogCategory[] {
  return (post.categories ?? []).filter(
    (category): category is BlogCategory => Boolean(category?.slug && category.title),
  );
}

export default function BlogCard({ post }: { post: BlogPost }) {
  const src = imageUrl(post.featuredImage, 720, 480);
  const categories = getPostCategories(post);
  return (
    <article className="blog-card">
      <Link className="blog-card-image" href={`/blog/${post.slug}`} aria-label={`Read ${post.title}`}>
        {src && <Image src={src} alt={post.featuredImage.alt} width={720} height={480} sizes="(max-width: 700px) 100vw, (max-width: 1000px) 50vw, 33vw" />}
      </Link>
      <div className="blog-card-content">
        <div className="blog-category-list">
          {categories.map((category) => <Link key={category.slug} href={`/blog/category/${category.slug}`}>{category.title}</Link>)}
        </div>
        <h2><Link href={`/blog/${post.slug}`}>{post.title}</Link></h2>
        <p>{post.excerpt}</p>
        <div className="blog-card-meta">{post.author.name} <span aria-hidden="true">·</span> {formatBlogDate(post.publishedAt)}</div>
        <Link className="blog-read-more" href={`/blog/${post.slug}`}>Read article <span aria-hidden="true">→</span></Link>
      </div>
    </article>
  );
}
