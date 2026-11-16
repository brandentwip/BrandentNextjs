import Image from 'next/image';
import Link from 'next/link';
import { imageUrl } from '@/sanity/lib/image';
import type { BlogPost } from '@/sanity/lib/types';
import { formatBlogDate, getPostCategories } from './BlogCard';

export default function FeaturedBlog({ post }: { post: BlogPost }) {
  const src = imageUrl(post.featuredImage, 1200, 760);
  const categories = getPostCategories(post);
  return (
    <article className="blog-featured">
      <Link className="blog-featured-image" href={`/blog/${post.slug}`} aria-label={`Read ${post.title}`}>
        {src && <Image src={src} alt={post.featuredImage.alt} width={1200} height={760} sizes="(max-width: 900px) 100vw, 55vw" priority />}
      </Link>
      <div className="blog-featured-content">
        <span className="blog-eyebrow">Editor&apos;s pick</span>
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
