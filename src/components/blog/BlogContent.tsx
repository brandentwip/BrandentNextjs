import Image from 'next/image';
import { PortableText, type PortableTextComponents } from '@portabletext/react';
import { imageUrl } from '@/sanity/lib/image';
import type { BlogPost } from '@/sanity/lib/types';

function ArticleImage({ value }: { value: Record<string, unknown> }) {
  const image = value as Parameters<typeof imageUrl>[0] & { alt?: string; caption?: string; fullWidth?: boolean };
  const src = imageUrl(image, image.fullWidth ? 1440 : 960);
  if (!src) return null;
  return (
    <figure className={image.fullWidth ? 'article-image article-image-wide' : 'article-image'}>
      <Image src={src} alt={image.alt ?? ''} width={image.fullWidth ? 1440 : 960} height={640} sizes={image.fullWidth ? '100vw' : '(max-width: 720px) 100vw, 720px'} />
      {image.caption && <figcaption>{image.caption}</figcaption>}
    </figure>
  );
}

const components: PortableTextComponents = {
  types: { image: ({ value }) => <ArticleImage value={value as Record<string, unknown>} /> },
  marks: {
    link: ({ children, value }) => {
      const href = typeof value?.href === 'string' ? value.href : '';
      const external = /^https?:\/\//.test(href);
      return <a href={href} target={value?.blank ? '_blank' : undefined} rel={value?.blank ? 'noopener noreferrer' : external ? 'noreferrer' : undefined}>{children}</a>;
    },
  },
};

export default function BlogContent({ post }: { post: BlogPost }) {
  return <PortableText value={post.body as never} components={components} />;
}
