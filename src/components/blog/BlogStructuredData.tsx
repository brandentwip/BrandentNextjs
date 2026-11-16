import type { BlogPost } from '@/sanity/lib/types';

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://brandent.in').replace(/\/$/, '');

function JsonLd({ value }: { value: Record<string, unknown> }) {
  const serialized = JSON.stringify(value).replace(/</g, '\\u003c');
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serialized }} />;
}

export function ArticleStructuredData({ post, canonicalUrl }: { post: BlogPost; canonicalUrl: string }) {
  return (
    <>
      <JsonLd value={{
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: post.title,
        description: post.seoDescription || post.excerpt,
        image: post.featuredImage.asset && 'url' in post.featuredImage.asset ? post.featuredImage.asset.url : undefined,
        datePublished: post.publishedAt,
        dateModified: post._updatedAt,
        author: { '@type': 'Person', name: post.author.name },
        mainEntityOfPage: canonicalUrl,
      }} />
      <JsonLd value={{
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: `${siteUrl}/blog` },
          { '@type': 'ListItem', position: 3, name: post.title, item: canonicalUrl },
        ],
      }} />
    </>
  );
}

export function CategoryStructuredData({ title, slug }: { title: string; slug: string }) {
  const url = `${siteUrl}/blog/category/${slug}`;
  return <JsonLd value={{
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${siteUrl}/blog` },
      { '@type': 'ListItem', position: 3, name: title, item: url },
    ],
  }} />;
}
