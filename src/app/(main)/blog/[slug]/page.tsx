import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import BlogCard, { formatBlogDate, getPostCategories } from '@/components/blog/BlogCard';
import BlogContent from '@/components/blog/BlogContent';
import { ArticleStructuredData } from '@/components/blog/BlogStructuredData';
import { imageUrl } from '@/sanity/lib/image';
import { sanityFetch } from '@/sanity/lib/fetch';
import { postBySlugQuery, relatedPostsQuery } from '@/sanity/lib/queries';
import type { BlogPost } from '@/sanity/lib/types';
import '@/styles/post.css';

type Props = { params: Promise<{ slug: string }> };
const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://brandent.in').replace(/\/$/, '');

async function getPost(slug: string) {
  return sanityFetch<BlogPost | null>(postBySlugQuery, { slug });
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return { title: 'Article not found — Brandent' };
  const canonical = post.canonicalUrl || `${siteUrl}/blog/${post.slug}`;
  const title = post.seoTitle || `${post.title} — Brandent`;
  const description = post.seoDescription || post.excerpt;
  const socialImage = imageUrl(post.seoImage || post.featuredImage, 1200, 630);
  return {
    title,
    description,
    alternates: { canonical },
    robots: post.noIndex ? { index: false, follow: false } : undefined,
    openGraph: {
      type: 'article',
      title,
      description,
      url: canonical,
      publishedTime: post.publishedAt,
      modifiedTime: post._updatedAt,
      authors: [post.author.name],
      images: socialImage ? [{ url: socialImage, alt: post.featuredImage.alt }] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: socialImage ? [{ url: socialImage, alt: post.featuredImage.alt }] : undefined,
    },
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  const canonical = post.canonicalUrl || `${siteUrl}/blog/${post.slug}`;
  const heroImage = imageUrl(post.featuredImage, 1600, 900);
  const categories = getPostCategories(post);
  const related = categories.length
    ? await sanityFetch<BlogPost[]>(relatedPostsQuery, {
      id: post._id,
      categoryIds: categories.map((category) => category.slug),
    })
    : [];
  const shareUrl = encodeURIComponent(canonical);
  const shareTitle = encodeURIComponent(post.title);

  return (
    <div className="pg-post">
      <main className="post-container">
        <Link className="post-back" href="/blog">← Back to the journal</Link>
        <header className="post-hero">
          <div className="blog-category-list">
            {categories.map((category) => <Link key={category.slug} href={`/blog/category/${category.slug}`}>{category.title}</Link>)}
          </div>
          <h1>{post.title}</h1>
          <p className="post-excerpt">{post.excerpt}</p>
          <div className="post-byline">
            <span>By {post.author.name}</span>
            <span aria-hidden="true">·</span>
            <time dateTime={post.publishedAt}>{formatBlogDate(post.publishedAt)}</time>
            {post._updatedAt && post._updatedAt.slice(0, 10) !== post.publishedAt.slice(0, 10) && (
              <>
                <span aria-hidden="true">·</span>
                <span>Updated <time dateTime={post._updatedAt}>{formatBlogDate(post._updatedAt)}</time></span>
              </>
            )}
          </div>
          {heroImage && (
            <div className="post-feature-image">
              <Image src={heroImage} alt={post.featuredImage.alt} width={1600} height={900} priority sizes="(max-width: 900px) 100vw, 1200px" />
            </div>
          )}
        </header>
        <article className="post-content">
          <BlogContent post={post} />
        </article>
        {post.tags?.length ? (
          <ul className="post-tags" aria-label="Article tags">{post.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
        ) : null}
        <aside className="post-share" aria-label="Share this article">
          <span>Share this story</span>
          <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`} target="_blank" rel="noopener noreferrer">X</a>
          <a href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`} target="_blank" rel="noopener noreferrer">Facebook</a>
        </aside>
        {related.length > 0 && (
          <section className="post-related" aria-labelledby="related-stories">
            <h2 id="related-stories">More from the journal</h2>
            <div className="blog-grid">{related.map((item) => <BlogCard key={item._id} post={item} />)}</div>
          </section>
        )}
        <ArticleStructuredData post={post} canonicalUrl={canonical} />
      </main>
    </div>
  );
}
